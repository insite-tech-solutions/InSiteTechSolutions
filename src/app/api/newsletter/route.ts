/**
 * @fileoverview Newsletter Subscription API Route Handler
 *
 * This module defines the API route handler for newsletter subscription requests.
 * It processes incoming subscription attempts, performs data validation, applies rate limiting,
 * verifies security (Cloudflare Turnstile), interacts with Supabase to manage subscribers,
 * and sends a confirmation email to new subscribers for double opt-in.
 *
 * Features:
 * - **Input Validation**: Uses `zod` to validate the `name`, `email`, and `turnstileToken`.
 * - **Rate Limiting**: Protects against rapid-fire subscription attempts using `rate-limiter-flexible` based on client IP.
 * - **Security Verification**: Integrates Cloudflare Turnstile to prevent bot registrations.
 * - **Supabase Integration**: Manages newsletter subscriber records (upserting new entries, checking existing ones).
 * - **Double Opt-in**: Implements a confirmation email flow to ensure valid email addresses and user consent.
 * - **Error Handling**: Provides specific feedback for validation failures, existing subscriptions, and system errors.
 *
 * Security Considerations:
 * - **IP-based Rate Limiting**: Helps mitigate spam and abuse.
 * - **Cloudflare Turnstile**: Adds a layer of bot protection to the subscription form.
 * - **Environment Variables**: Sensitive keys (Supabase, Resend, Turnstile) are securely loaded from environment variables.
 * - **Confirmation Token**: JWTs are used for secure email confirmation links.
 *
 * Technical Implementation:
 * - Utilizes Next.js App Router's `Route Handler` for API endpoints.
 * - Leverages `NextRequest` and `NextResponse` for HTTP request and response handling.
 * - Integrates with `@/lib/supabase`, `@/lib/resend`, `@/lib/rate-limit`, `@/lib/turnstile`, and `@/lib/jwt`.
 * - Uses `uuid` for generating unique subscriber IDs.
 * - Employs `NewsletterConfirm` email template for the confirmation email.
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'
import { render } from '@react-email/render'
import { supabaseAdmin } from '@/lib/supabase'
import { resend, emailConfig } from '@/lib/resend'
import { checkRateLimit, newsletterLimiter, getClientIP } from '@/lib/rate-limit'
import { validateTurnstile } from '@/lib/turnstile'
import { generateConfirmationToken } from '@/lib/jwt'
import { sanitizeNewsletterForm } from '@/lib/sanitizer'
import { NewsletterConfirm } from '../../../../emails'

/**
 * Zod schema for validating incoming newsletter subscription form data.
 * Ensures required fields are present and correctly formatted.
 */
const newsletterSchema = z.object({
  /** The name of the subscriber, required to be at least 2 characters. */
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  /** The email address of the subscriber, required and must be a valid email format. */
  email: z.string().email({ message: "Please enter a valid email address" }),
  /** The Cloudflare Turnstile token for security verification, required. */
  turnstileToken: z.string().min(1, { message: "Security verification is required" }),
})

/**
 * Handles POST requests for newsletter subscriptions.
 * This function manages the entire process of a user subscribing to the newsletter,
 * from initial validation to sending a confirmation email.
 *
 * @param {NextRequest} request - The incoming Next.js request object containing the form data.
 * @returns {Promise<NextResponse>} A promise that resolves to a `NextResponse` object
 *                                  indicating the success or failure of the subscription attempt,
 *                                  along with relevant messages and HTTP status codes.
 *                                  Returns:
 *                                  - `200 OK` on successful submission (awaiting confirmation) or if pending.
 *                                  - `429 Too Many Requests` if rate limit is exceeded.
 *                                  - `400 Bad Request` for validation errors or if already confirmed.
 *                                  - `500 Internal Server Error` for database errors or email sending failures.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const clientIP = getClientIP(request)
    
    // Apply rate limiting to the subscription endpoint based on client IP
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

    // Parse and validate the incoming JSON body against the newsletter schema
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

    // Sanitize the validated form data to prevent XSS attacks
    const { name, email, turnstileToken } = sanitizeNewsletterForm(validationResult.data)

    // Verify the Cloudflare Turnstile token to ensure the request is not from a bot
    const turnstileResult = await validateTurnstile(turnstileToken, clientIP)
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: turnstileResult.error },
        { status: 400 }
      )
    }

    // Check if the email already exists in the newsletter subscribers database
    const { data: existingSubscriber } = await supabaseAdmin
      .from('newsletter_subscribers')
      .select('email, status')
      .eq('email', email)
      .single()

    if (existingSubscriber) {
      if (existingSubscriber.status === 'confirmed') {
        // If already confirmed, inform the user
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter.' },
          { status: 400 }
        )
      }
      
      if (existingSubscriber.status === 'pending') {
        // If status is pending, a confirmation email has already been sent
        return NextResponse.json(
          { message: 'A confirmation email has already been sent to this address. Please check your email and spam folder.' },
          { status: 200 }
        )
      }
    }

    // Generate a unique subscriber ID and a confirmation token for the new subscription
    const subscriberId = uuidv4()
    const confirmationToken = generateConfirmationToken(email, subscriberId)
    const confirmationUrl = `${emailConfig.siteUrl}/api/newsletter/confirm?token=${confirmationToken}`

    // Save the new subscriber's information to the database with a 'pending' status
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

    // Send the confirmation email to the subscriber's address
    try {
      const confirmationEmailHtml = await render(NewsletterConfirm({
        confirmationUrl,
        logoUrl: `${emailConfig.siteUrl}/Insite Tech Logo bg-white.png`,
      }))

      await resend.emails.send({
        from: `InSite Tech Solutions <${emailConfig.from}>`,
        to: [email],
        subject: 'Please confirm your email address',
        html: confirmationEmailHtml,
      })
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
      
      // If email sending fails, delete the pending subscriber record to allow retry
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