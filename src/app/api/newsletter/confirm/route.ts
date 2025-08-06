/**
 * @fileoverview Newsletter Confirmation API Route Handler
 *
 * This module defines the API route handler for confirming newsletter subscriptions.
 * It processes incoming requests containing a confirmation token, verifies the token,
 * updates the subscriber status in Supabase, and sends a welcome email upon successful confirmation.
 *
 * Features:
 * - **Token Verification**: Validates the confirmation token received from the user's email.
 * - **Rate Limiting**: Protects the endpoint from excessive requests using `rate-limiter-flexible`.
 * - **Supabase Integration**: Updates subscriber status from 'pending' to 'confirmed' in the database.
 * - **Welcome Email**: Sends a personalized welcome email to the newly confirmed subscriber.
 * - **Redirects**: Automatically redirects users to dedicated success or error pages based on confirmation outcome.
 * - **Error Handling**: Catches and logs errors, providing appropriate HTTP responses or redirects.
 *
 * Security Considerations:
 * - **Confirmation Token**: Uses a JWT to ensure the authenticity and integrity of the confirmation link.
 * - **Rate Limiting**: Mitigates abuse, such as repeated attempts to confirm or guess tokens.
 * - **IP Address Logging**: `getClientIP` is used for rate limiting based on client IP.
 *
 * Technical Implementation:
 * - Utilizes Next.js App Router's `Route Handler` for API endpoints.
 * - Leverages `NextRequest` and `NextResponse` for handling HTTP requests and responses.
 * - Integrates with `@/lib/supabase`, `@/lib/resend`, `@/lib/rate-limit`, and `@/lib/jwt` for various functionalities.
 * - Uses `NewsletterWelcome` email template for the welcome email.
 */

import { NextRequest, NextResponse } from 'next/server'
import { render } from '@react-email/render'
import { supabaseAdmin } from '@/lib/supabase'
import { resend, emailConfig } from '@/lib/resend'
import { checkRateLimit, confirmationLimiter, getClientIP } from '@/lib/rate-limit'
import { verifyConfirmationToken, generateUnsubscribeToken } from '@/lib/jwt'
import { NewsletterWelcome } from '../../../../../emails'

/**
 * Handles GET requests for newsletter subscription confirmation.
 * This endpoint is activated when a user clicks a confirmation link received in their email.
 * It verifies the token, updates the subscription status in the database, and redirects the user.
 *
 * @param {NextRequest} request - The incoming Next.js request object, containing the confirmation token in query parameters.
 * @returns {Promise<NextResponse>} A promise that resolves to a `NextResponse` object.
 *                                  Returns:
 *                                  - `NextResponse.redirect` to `/newsletter/confirmed` on successful confirmation or if already confirmed.
 *                                  - `NextResponse.redirect` to `/newsletter/error` for missing, invalid, or expired tokens, or database fetch errors.
 *                                  - `429 Too Many Requests` if rate limit is exceeded.
 *                                  - `500 Internal Server Error` if a database update fails or an unexpected error occurs.
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const clientIP = getClientIP(request)
    
    // Apply rate limiting to prevent abuse of the confirmation endpoint
    const rateLimit = await checkRateLimit(confirmationLimiter, clientIP)
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: rateLimit.error },
        { 
          status: 429,
          headers: { 'Retry-After': rateLimit.retryAfter?.toString() || '3600' }
        }
      )
    }

    // Extract the confirmation token from the URL's query parameters
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      // If no token is provided, redirect to the error page
      const errorUrl = `${emailConfig.siteUrl}/newsletter/error`
      return NextResponse.redirect(errorUrl)
    }

    // Verify the authenticity and validity of the confirmation token
    const tokenResult = verifyConfirmationToken(token)
    if (!tokenResult.success) {
      // If the token is invalid or expired, redirect to the error page
      const errorUrl = `${emailConfig.siteUrl}/newsletter/error`
      return NextResponse.redirect(errorUrl)
    }

    const email = tokenResult.email!

    // Check if the subscriber exists in the database and is in a 'pending' state
    const { data: subscriber, error: fetchError } = await supabaseAdmin
      .from('newsletter_subscribers')
      .select('id, name, email, status, confirmation_token')
      .eq('email', email)
      .eq('confirmation_token', token) // Ensure the token matches the stored one
      .single()

    if (fetchError || !subscriber) {
      // If subscriber not found or token mismatch, redirect to error page
      const errorUrl = `${emailConfig.siteUrl}/newsletter/error`
      return NextResponse.redirect(errorUrl)
    }

    if (subscriber.status === 'confirmed') {
      // If the subscriber is already confirmed, redirect directly to the success page
      const successUrl = `${emailConfig.siteUrl}/newsletter/confirmed`
      return NextResponse.redirect(successUrl)
    }

    // Update the subscriber's status to 'confirmed' in Supabase
    const { error: updateError } = await supabaseAdmin
      .from('newsletter_subscribers')
      .update({
        status: 'confirmed',
        confirmed_at: new Date().toISOString(),
        confirmation_token: null, // Clear the confirmation token after successful use
      })
      .eq('id', subscriber.id)

    if (updateError) {
      console.error('Failed to update subscriber status:', updateError)
      return NextResponse.json(
        { error: 'Failed to confirm subscription. Please try again.' },
        { status: 500 }
      )
    }

    // Send a welcome email to the newly confirmed subscriber (with delay to avoid rate limiting)
    try {
      // Add 5 second delay to avoid Resend rate limiting
      await new Promise(resolve => setTimeout(resolve, 5000))
      const unsubscribeToken = generateUnsubscribeToken(email)
      const unsubscribeUrl = `${emailConfig.siteUrl}/api/newsletter/unsubscribe?token=${unsubscribeToken}`
      
      const welcomeEmailHtml = await render(NewsletterWelcome({
        unsubscribeUrl,
        logoUrl: `${emailConfig.siteUrl}/insite-tech-logo-bg-white.png`,
      }))
      
      await resend.emails.send({
        from: `InSite Tech Solutions <${emailConfig.from}>`,
        to: [email],
        subject: 'Welcome to the InSite Tech Solutions Newsletter!',
        html: welcomeEmailHtml,
      })
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Log the error but do not fail the confirmation process if the welcome email fails to send
    }

    // Redirect the user to the newsletter confirmation success page
    const successUrl = `${emailConfig.siteUrl}/newsletter/confirmed`
    
    // Force a 302 redirect instead of 307 to avoid token preservation issues
    const response = NextResponse.redirect(successUrl, 302)
    return response

  } catch (error) {
    console.error('Newsletter confirmation error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
} 