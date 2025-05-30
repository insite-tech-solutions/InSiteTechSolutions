import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { resend, emailConfig } from '@/lib/resend'
import { checkRateLimit, confirmationLimiter, getClientIP } from '@/lib/rate-limit'
import { verifyConfirmationToken, generateUnsubscribeToken } from '@/lib/jwt'
import { NewsletterWelcome } from '../../../../../emails'

export async function GET(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)
    
    // Rate limiting
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

    // Get token from query parameters
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      // Redirect to error page for missing token
      const errorUrl = `${emailConfig.siteUrl}/newsletter/error`
      return NextResponse.redirect(errorUrl)
    }

    // Verify the token
    const tokenResult = verifyConfirmationToken(token)
    if (!tokenResult.success) {
      // Redirect to error page for invalid/expired tokens
      const errorUrl = `${emailConfig.siteUrl}/newsletter/error`
      return NextResponse.redirect(errorUrl)
    }

    const email = tokenResult.email!

    // Check if subscriber exists and is pending
    const { data: subscriber, error: fetchError } = await supabaseAdmin
      .from('newsletter_subscribers')
      .select('id, name, email, status, confirmation_token')
      .eq('email', email)
      .eq('confirmation_token', token)
      .single()

    if (fetchError || !subscriber) {
      // Redirect to error page for invalid/expired confirmation links
      const errorUrl = `${emailConfig.siteUrl}/newsletter/error`
      return NextResponse.redirect(errorUrl)
    }

    if (subscriber.status === 'confirmed') {
      // Already confirmed, redirect to success page
      const successUrl = `${emailConfig.siteUrl}/newsletter/confirmed`
      return NextResponse.redirect(successUrl)
    }

    // Update subscriber status to confirmed
    const { error: updateError } = await supabaseAdmin
      .from('newsletter_subscribers')
      .update({
        status: 'confirmed',
        confirmed_at: new Date().toISOString(),
        confirmation_token: null, // Clear the token after use
      })
      .eq('id', subscriber.id)

    if (updateError) {
      console.error('Failed to update subscriber status:', updateError)
      return NextResponse.json(
        { error: 'Failed to confirm subscription. Please try again.' },
        { status: 500 }
      )
    }

    // Send welcome email
    try {
      const unsubscribeToken = generateUnsubscribeToken(email)
      const unsubscribeUrl = `${emailConfig.siteUrl}/api/newsletter/unsubscribe?token=${unsubscribeToken}`
      
      await resend.emails.send({
        from: `InSite Tech Solutions <${emailConfig.from}>`,
        to: [email],
        subject: 'Welcome to the InSite Tech Solutions Newsletter!',
        react: NewsletterWelcome({
          unsubscribeUrl,
          logoUrl: `${emailConfig.siteUrl}/logo.png`,
        }),
      })
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't fail the confirmation if welcome email fails
    }

    // Redirect to a success page or return JSON
    const successUrl = `${emailConfig.siteUrl}/newsletter/confirmed`
    return NextResponse.redirect(successUrl)

  } catch (error) {
    console.error('Newsletter confirmation error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
} 