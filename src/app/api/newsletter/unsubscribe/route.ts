import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { verifyUnsubscribeToken } from '@/lib/jwt'
import { getClientIP, checkRateLimit, confirmationLimiter } from '@/lib/rate-limit'
import { emailConfig } from '@/lib/resend'

export async function GET(request: NextRequest) {
  const clientIP = getClientIP(request)
  const errorUrl = `${emailConfig.siteUrl}/newsletter/error?message=unsubscribe_failed`
  const successUrl = `${emailConfig.siteUrl}/newsletter/unsubscribed`

  try {
    // Rate limiting
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

    const tokenResult = verifyUnsubscribeToken(token)

    if (!tokenResult.success || !tokenResult.email) {
      console.error('Invalid or expired unsubscribe token:', tokenResult.error)
      return NextResponse.redirect(errorUrl + '&reason=invalid_token')
    }

    const userEmailToUnsubscribe = tokenResult.email

    // Call the Supabase RPC function to unsubscribe the user
    // This function is defined in your newsletter-schema.sql
    const { data, error: rpcError } = await supabaseAdmin.rpc('unsubscribe_newsletter', {
      user_email: userEmailToUnsubscribe,
    })

    if (rpcError) {
      console.error(`RPC error unsubscribing ${userEmailToUnsubscribe}:`, rpcError)
      // The RPC function might return false if user not found or already unsubscribed,
      // or it might raise an error depending on its implementation.
      // Your current RPC function returns BOOLEAN (FOUND), so data would be true/false.
      return NextResponse.redirect(errorUrl + '&reason=db_error')
    }
    
    // The RPC function returns true if the update was successful (row found and updated), false otherwise.
    if (data === true) {
      console.log(`Successfully unsubscribed ${userEmailToUnsubscribe} via RPC.`)
    } else {
      // This case means the user was likely already unsubscribed or didn't exist with a subscribable status.
      // Redirecting to success is often fine, or you could have a specific page/message.
      console.log(`RPC call for ${userEmailToUnsubscribe} did not result in an update (already unsubscribed or not found).`)
      return NextResponse.redirect(successUrl + '?status=not_applicable')
    }

    // Optionally, send an email confirming unsubscription (can be added later)
    // e.g., await sendUnsubscribeConfirmationEmail(userEmailToUnsubscribe);

    return NextResponse.redirect(successUrl)

  } catch (error) {
    console.error('Unexpected error during unsubscribe:', error)
    return NextResponse.redirect(errorUrl + '&reason=server_error')
  }
} 