import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set')
}

export const resend = new Resend(process.env.RESEND_API_KEY)

export const emailConfig = {
  from: process.env.FROM_EMAIL || 'no-reply@insitetechsolutions.com',
  contactEmail: process.env.CONTACT_EMAIL || 'contact@insitetechsolutions.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} 