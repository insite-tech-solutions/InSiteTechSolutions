import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'
import { supabaseAdmin } from '@/lib/supabase'
import { resend, emailConfig } from '@/lib/resend'
import { checkRateLimit, newsletterLimiter, getClientIP } from '@/lib/rate-limit'
import { validateTurnstile } from '@/lib/turnstile'
import { generateConfirmationToken } from '@/lib/jwt'
import { NewsletterConfirm } from '../../../../emails'

// Form validation schema
const newsletterSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  turnstileToken: z.string().min(1, { message: "Security verification is required" }),
})

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)
    
    // Rate limiting
    const rateLimit = await checkRateLimit(newsletterLimiter, clientIP)
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: rateLimit.error },
        { 
          status: 429,
          headers: { 'Retry-After': rateLimit.retryAfter?.toString() || '900' }
        }
      )
    }

    // Parse and validate form data
    const body = await request.json()
    const validationResult = newsletterSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validationResult.error.errors
        },
        { status: 400 }
      )
    }

    const { name, email, turnstileToken } = validationResult.data

    // Verify Turnstile token
    const turnstileResult = await validateTurnstile(turnstileToken, clientIP)
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: turnstileResult.error },
        { status: 400 }
      )
    }

    // Check if email already exists
    const { data: existingSubscriber } = await supabaseAdmin
      .from('newsletter_subscribers')
      .select('email, status')
      .eq('email', email)
      .single()

    if (existingSubscriber) {
      if (existingSubscriber.status === 'confirmed') {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter.' },
          { status: 400 }
        )
      }
      
      if (existingSubscriber.status === 'pending') {
        return NextResponse.json(
          { message: 'A confirmation email has already been sent to this address. Please check your email and spam folder.' },
          { status: 200 }
        )
      }
    }

    // Generate confirmation token
    const subscriberId = uuidv4()
    const confirmationToken = generateConfirmationToken(email, subscriberId)
    const confirmationUrl = `${emailConfig.siteUrl}/api/newsletter/confirm?token=${confirmationToken}`

    // Save to database
    const { error: dbError } = await supabaseAdmin
      .from('newsletter_subscribers')
      .upsert({
        id: subscriberId,
        name,
        email,
        status: 'pending',
        confirmation_token: confirmationToken,
        ip_address: clientIP,
        privacy_policy_accepted: true,
        created_at: new Date().toISOString(),
      })

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: 'Failed to process subscription. Please try again.' },
        { status: 500 }
      )
    }

    // Send confirmation email
    try {
      await resend.emails.send({
        from: `InSite Tech Solutions <${emailConfig.from}>`,
        to: [email],
        subject: 'Please confirm your email address',
        react: NewsletterConfirm({
          confirmationUrl,
          logoUrl: `${emailConfig.siteUrl}/logo.png`,
        }),
      })
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
      
      // Remove from database if email fails
      await supabaseAdmin
        .from('newsletter_subscribers')
        .delete()
        .eq('id', subscriberId)
      
      return NextResponse.json(
        { error: 'Failed to send confirmation email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true,
      message: 'Please check your email for a confirmation link to complete your subscription.'
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
} 