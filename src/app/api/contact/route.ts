import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'
import { supabaseAdmin } from '@/lib/supabase'
import { resend, emailConfig } from '@/lib/resend'
import { checkRateLimit, contactFormLimiter, getClientIP } from '@/lib/rate-limit'
import { validateTurnstile } from '@/lib/turnstile'
import { generateConfirmationToken } from '@/lib/jwt'
import { ContactConfirmation, ContactNotification, NewsletterConfirm } from '../../../../emails'

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.string().optional(),
  websiteUrl: z.string().optional(),
  companyName: z.string().optional(),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  comments: z.string().optional(),
  budget: z.string().min(1, { message: "Please select an estimated budget" }),
  mailingList: z.boolean().optional(),
  tosAgreement: z.boolean().refine(val => val === true, { message: "You must agree to the Terms of Service" }),
  turnstileToken: z.string().min(1, { message: "Security verification is required" }),
})

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)
    
    // Rate limiting
    const rateLimit = await checkRateLimit(contactFormLimiter, clientIP)
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
    const validationResult = contactFormSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validationResult.error.errors
        },
        { status: 400 }
      )
    }

    const formData = validationResult.data

    // Verify Turnstile token
    const turnstileResult = await validateTurnstile(formData.turnstileToken, clientIP)
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: turnstileResult.error },
        { status: 400 }
      )
    }

    const submittedAt = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })

    // Send confirmation email to customer
    try {
      await resend.emails.send({
        from: `InSite Tech Solutions <${emailConfig.from}>`,
        to: [formData.email],
        subject: 'Thank you for contacting InSite Tech Solutions!',
        react: ContactConfirmation({
          customerName: formData.firstName + (formData.lastName ? ` ${formData.lastName}` : ''),
          submittedAt,
          logoUrl: `${emailConfig.siteUrl}/logo.png`,
        }),
      })
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
      // Continue processing even if confirmation email fails
    }

    // Send notification email to business
    try {
      await resend.emails.send({
        from: `InSite Tech Contact Form <${emailConfig.from}>`,
        to: [emailConfig.contactEmail],
        subject: `New Contact Form Submission from ${formData.firstName}${formData.lastName ? ` ${formData.lastName}` : ''}`,
        react: ContactNotification({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          websiteUrl: formData.websiteUrl,
          companyName: formData.companyName,
          services: formData.services,
          budget: formData.budget,
          comments: formData.comments,
          mailingList: formData.mailingList,
          submittedAt,
          logoUrl: `${emailConfig.siteUrl}/logo.png`,
        }),
      })
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError)
      return NextResponse.json(
        { error: 'Failed to process your request. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

    // Handle newsletter subscription if requested
    if (formData.mailingList) {
      try {
        // Check if email already exists in newsletter
        const { data: existingSubscriber } = await supabaseAdmin
          .from('newsletter_subscribers')
          .select('email, status')
          .eq('email', formData.email)
          .single()

        if (!existingSubscriber || existingSubscriber.status !== 'confirmed') {
          // Save to newsletter database
          const subscriberId = uuidv4()
          
          // Generate confirmation token
          const confirmationToken = generateConfirmationToken(formData.email, subscriberId)
          const confirmationUrl = `${emailConfig.siteUrl}/api/newsletter/confirm?token=${confirmationToken}`

          await supabaseAdmin
            .from('newsletter_subscribers')
            .upsert({
              id: subscriberId,
              name: formData.firstName + (formData.lastName ? ` ${formData.lastName}` : ''),
              email: formData.email,
              status: 'pending',
              confirmation_token: confirmationToken,
              ip_address: clientIP,
              privacy_policy_accepted: true,
              created_at: new Date().toISOString(),
            })

          // Send newsletter confirmation email
          await resend.emails.send({
            from: `InSite Tech Solutions <${emailConfig.from}>`,
            to: [formData.email],
            subject: 'Please confirm your newsletter subscription',
            react: NewsletterConfirm({
              confirmationUrl,
              logoUrl: `${emailConfig.siteUrl}/logo.png`,
            }),
          })
        }
      } catch (newsletterError) {
        console.error('Newsletter subscription error:', newsletterError)
        // Don't fail the contact form if newsletter fails
      }
    }

    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your submission! We\'ll be in touch within 48 hours.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
} 