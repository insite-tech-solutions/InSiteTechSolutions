/**
 * @fileoverview Contact Form API Route Handler
 *
 * This module defines the API route handler for contact form submissions. It processes
 * incoming contact requests, performs validation, handles rate limiting and security
 * verification (Cloudflare Turnstile), sends confirmation and notification emails,
 * and optionally manages newsletter subscriptions via Supabase.
 *
 * Features:
 * - **Input Validation**: Uses `zod` for robust schema validation of form data.
 * - **Rate Limiting**: Protects against abuse using `rate-limiter-flexible` based on client IP.
 * - **Security Verification**: Integrates Cloudflare Turnstile for bot detection.
 * - **Email Notifications**: Sends a confirmation email to the user and a notification email to the business.
 * - **Newsletter Integration**: Optionally subscribes users to a newsletter via Supabase,
 *   including a double opt-in confirmation email.
 * - **Error Handling**: Provides specific responses for validation errors, rate limits, and unexpected server errors.
 *
 * Security Considerations:
 * - **IP-based Rate Limiting**: Helps prevent brute-force attacks and spam.
 * - **Cloudflare Turnstile**: Protects against automated bot submissions.
 * - **Environment Variables**: Sensitive keys (Resend API Key, Supabase Keys, Turnstile Secret) are loaded from environment variables.
 * - **Double Opt-in**: For newsletter subscriptions, enhances compliance and reduces spam complaints.
 *
 * Technical Implementation:
 * - Utilizes Next.js App Router's `Route Handler` for API endpoints.
 * - Leverages `NextRequest` and `NextResponse` for handling HTTP requests and responses.
 * - Integrates with `@/lib/supabase`, `@/lib/resend`, `@/lib/rate-limit`, and `@/lib/turnstile` for external services.
 * - Employs `jsonwebtoken` (`@/lib/jwt`) for generating newsletter confirmation tokens.
 * - Uses `uuid` for generating unique subscriber IDs.
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'
import { render } from '@react-email/render'
import { supabaseAdmin } from '@/lib/supabase'
import { resend, emailConfig } from '@/lib/resend'
import { checkRateLimit, contactFormLimiter, getClientIP } from '@/lib/rate-limit'
import { validateTurnstile } from '@/lib/turnstile'
import { generateConfirmationToken } from '@/lib/jwt'
import { sanitizeContactForm } from '@/lib/sanitizer'
import { ContactConfirmation, ContactNotification, NewsletterConfirm } from '../../../../emails'

/**
 * Zod schema for validating incoming contact form data.
 * Ensures all required fields are present and correctly formatted.
 */
const contactFormSchema = z.object({
  /** The first name of the contact, required. */
  firstName: z.string().min(2, { message: "First name is required" }),
  /** The last name of the contact (optional). */
  lastName: z.string().optional(),
  /** The email address of the contact, required and must be a valid email format. */
  email: z.string().email({ message: "Please enter a valid email address" }),
  /** The phone number of the contact (optional). */
  phoneNumber: z.string().optional(),
  /** The website URL of the contact's company (optional). */
  websiteUrl: z.string().optional(),
  /** The company name of the contact (optional). */
  companyName: z.string().optional(),
  /** An array of services selected, required to have at least one. */
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  /** Additional comments from the contact (optional). */
  comments: z.string().optional(),
  /** The estimated budget selected by the contact, required. */
  budget: z.string().min(1, { message: "Please select an estimated budget" }),
  /** Indicates if the contact wishes to be added to the mailing list (optional). */
  mailingList: z.boolean().optional(),
  /** Agreement to the Terms of Service, required to be true. */
  tosAgreement: z.boolean().refine(val => val === true, { message: "You must agree to the Terms of Service" }),
  /** The Cloudflare Turnstile token for security verification, required. */
  turnstileToken: z.string().min(1, { message: "Security verification is required" }),
})

/**
 * Handles POST requests for contact form submissions.
 * This function orchestrates the entire contact form submission process,
 * including validation, rate limiting, Turnstile verification, email sending,
 * and optional newsletter subscription.
 *
 * @param {NextRequest} request - The incoming Next.js request object containing the form data.
 * @returns {Promise<NextResponse>} A promise that resolves to a `NextResponse` object
 *                                  indicating the success or failure of the submission,
 *                                  along with relevant messages and HTTP status codes.
 *                                  Returns:
 *                                  - `200 OK` on successful submission.
 *                                  - `429 Too Many Requests` if rate limit is exceeded.
 *                                  - `400 Bad Request` for validation or Turnstile errors.
 *                                  - `500 Internal Server Error` for unexpected server-side issues.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const clientIP = getClientIP(request)
    
    // Rate limiting check based on client IP
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

    // Parse and validate incoming JSON body against the schema
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

    // Sanitize the validated form data to prevent XSS attacks
    const formData = sanitizeContactForm(validationResult.data)

    // Verify Cloudflare Turnstile token to ensure it's not a bot
    const turnstileResult = await validateTurnstile(formData.turnstileToken, clientIP)
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: turnstileResult.error },
        { status: 400 }
      )
    }

    // Format the submission timestamp for emails
    const submittedAt = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })

    // Attempt to send confirmation email to the customer
    try {
      const confirmationEmailHtml = await render(ContactConfirmation({
        customerName: formData.firstName + (formData.lastName ? ` ${formData.lastName}` : ''),
        submittedAt,
        logoUrl: `${emailConfig.siteUrl}/Insite Tech Solutions Light.png`,
      }))

      await resend.emails.send({
        from: `InSite Tech Solutions <${emailConfig.from}>`,
        to: [formData.email],
        subject: 'Thank you for contacting InSite Tech Solutions!',
        html: confirmationEmailHtml,
      })
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
      // Continue processing even if confirmation email fails, as it's not critical to the form submission's core success
    }

    // Attempt to send notification email to the business
    try {
      const notificationEmailHtml = await render(ContactNotification({
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
        logoUrl: `${emailConfig.siteUrl}/Insite Tech Solutions Light.png`,
      }))

      await resend.emails.send({
        from: `InSite Tech Contact Form <${emailConfig.from}>`,
        to: [emailConfig.contactEmail],
        subject: `New Contact Form Submission from ${formData.firstName}${formData.lastName ? ` ${formData.lastName}` : ''}`,
        html: notificationEmailHtml,
      })
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError)
      // If the notification email fails, it's a critical error for the business, so we return a 500.
      return NextResponse.json(
        { error: 'Failed to process your request. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

    // Handle newsletter subscription if the user opted in
    if (formData.mailingList) {
      try {
        // Check if email already exists in the newsletter subscribers table and is confirmed
        const { data: existingSubscriber } = await supabaseAdmin
          .from('newsletter_subscribers')
          .select('email, status')
          .eq('email', formData.email)
          .single()

        // Only proceed if subscriber does not exist or is not yet confirmed
        if (!existingSubscriber || existingSubscriber.status !== 'confirmed') {
          const subscriberId = uuidv4()
          
          // Generate a unique confirmation token for the newsletter subscription
          const confirmationToken = generateConfirmationToken(formData.email, subscriberId)
          const confirmationUrl = `${emailConfig.siteUrl}/api/newsletter/confirm?token=${confirmationToken}`

          // Upsert (insert or update) the subscriber record in Supabase
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

          // Send newsletter confirmation email to prompt double opt-in
          const newsletterConfirmHtml = await render(NewsletterConfirm({
            confirmationUrl,
            logoUrl: `${emailConfig.siteUrl}/logo.png`,
          }))

          await resend.emails.send({
            from: `InSite Tech Solutions <${emailConfig.from}>`,
            to: [formData.email],
            subject: 'Please confirm your newsletter subscription',
            html: newsletterConfirmHtml,
          })
        }
      } catch (newsletterError) {
        console.error('Newsletter subscription error:', newsletterError)
        // Do not fail the main contact form submission if newsletter subscription fails. Log the error instead.
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