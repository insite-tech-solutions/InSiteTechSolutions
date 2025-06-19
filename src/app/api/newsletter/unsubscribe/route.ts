/**
 * @fileoverview Newsletter Unsubscription API Route Handler
 *
 * This module defines the API route handler for processing newsletter unsubscription requests.
 * It handles incoming `GET` requests containing an unsubscribe token, verifies the token,
 * and updates the subscriber's status in the Supabase database to 'unsubscribed'.
 *
 * Features:
 * - **Token Verification**: Validates the unsubscribe token received from the user's email.
 * - **Rate Limiting**: Protects the endpoint from abuse, similar to the confirmation endpoint.
 * - **Supabase Integration**: Calls a Supabase RPC (Remote Procedure Call) function to update
 *   the subscriber status, ensuring database logic is encapsulated.
 * - **Redirects**: Automatically redirects users to dedicated success or error pages based on unsubscription outcome.
 * - **Error Handling**: Catches and logs errors, providing redirects with reasons for debugging.
 *
 * Security Considerations:
 * - **Unsubscribe Token**: Uses a JWT to ensure the authenticity and integrity of the unsubscribe link.
 * - **Rate Limiting**: Mitigates abuse, such as repeated attempts to unsubscribe or guess tokens.
 * - **Server-side RPC**: Database update logic is handled via a secure RPC function, preventing direct client-side database writes.
 *
 * Technical Implementation:
 * - Utilizes Next.js App Router's `Route Handler` for API endpoints.
 * - Leverages `NextRequest` and `NextResponse` for handling HTTP requests and responses.
 * - Integrates with `@/lib/supabase`, `@/lib/jwt`, `@/lib/rate-limit`, and `@/lib/resend` (for email configuration).
 * - Calls a Supabase `rpc` function named `unsubscribe_newsletter` for the core database operation.
 */

import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { verifyUnsubscribeToken } from '@/lib/jwt'
import { getClientIP, checkRateLimit, confirmationLimiter } from '@/lib/rate-limit'
import { emailConfig } from '@/lib/resend'

/**
 * Handles GET requests for newsletter unsubscription.
 * This endpoint is triggered when a user clicks an unsubscribe link in a newsletter email.
 * It verifies the provided token, updates the user's subscription status in Supabase,
 * and redirects to a success or error page.
 *
 * @param {NextRequest} request - The incoming Next.js request object, containing the unsubscribe token in query parameters.
 * @returns {Promise<NextResponse>} A promise that resolves to a `NextResponse` object which is a redirect to:
 *                                  - `/newsletter/unsubscribed` on successful unsubscription or if already unsubscribed.
 *                                  - `/newsletter/error?message=unsubscribe_failed&reason=<reason>` for various failure scenarios
 *                                    (e.g., rate limit, missing token, invalid token, database error, unexpected server error).
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const clientIP = getClientIP(request)
  const errorUrl = `${emailConfig.siteUrl}/newsletter/error?message=unsubscribe_failed`
  const successUrl = `${emailConfig.siteUrl}/newsletter/unsubscribed`

  try {
    // Apply rate limiting to prevent abuse of the unsubscribe endpoint
    const rateLimit = await checkRateLimit(confirmationLimiter, clientIP) 
    if (!rateLimit.success) {
      console.warn(`Rate limit exceeded for unsubscribe attempt from IP: ${clientIP}`)
      return NextResponse.redirect(errorUrl + '&reason=rate_limit')
    }

    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      console.warn('Unsubscribe attempt with missing token.')
      return NextResponse.redirect(errorUrl + '&reason=missing_token')
    }

    // Verify the unsubscribe token's authenticity and validity
    const tokenResult = verifyUnsubscribeToken(token)

    if (!tokenResult.success || !tokenResult.email) {
      console.error('Invalid or expired unsubscribe token:', tokenResult.error)
      return NextResponse.redirect(errorUrl + '&reason=invalid_token')
    }

    const userEmailToUnsubscribe = tokenResult.email

    // Call the Supabase RPC function to unsubscribe the user from the newsletter.
    // This function (`unsubscribe_newsletter`) is expected to be defined in your Supabase database schema.
    const { data, error: rpcError } = await supabaseAdmin.rpc('unsubscribe_newsletter', {
      user_email: userEmailToUnsubscribe,
    })

    if (rpcError) {
      console.error(`RPC error unsubscribing ${userEmailToUnsubscribe}:`, rpcError)
      // Depending on the RPC function's implementation, `data` might be false if user not found or already unsubscribed,
      // or an actual error might be raised. Here, we assume rpcError indicates a server-side DB issue.
      return NextResponse.redirect(errorUrl + '&reason=db_error')
    }
    
    // The RPC function returns true if the update was successful (row found and updated), false otherwise.
    if (data === true) {
      console.log(`Successfully unsubscribed ${userEmailToUnsubscribe} via RPC.`)
    } else {
      // This case typically means the user was already unsubscribed or didn't exist with a subscribable status.
      // Redirecting to success is generally acceptable, as the user's goal (being unsubscribed) is met.
      console.log(`RPC call for ${userEmailToUnsubscribe} did not result in an update (already unsubscribed or not found).`)
      return NextResponse.redirect(successUrl + '?status=not_applicable')
    }

    // Optionally, send an email confirming unsubscription (can be added here if desired)
    // e.g., await sendUnsubscribeConfirmationEmail(userEmailToUnsubscribe);

    return NextResponse.redirect(successUrl)

  } catch (error) {
    console.error('Unexpected error during unsubscribe:', error)
    return NextResponse.redirect(errorUrl + '&reason=server_error')
  }
} 