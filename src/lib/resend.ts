/**
 * @fileoverview Resend Email Client and Configuration
 *
 * This module initializes and configures the Resend email client, providing
 * a centralized point for sending transactional and marketing emails within the application.
 * It also defines common email configuration settings, such as sender and contact addresses.
 *
 * Features:
 * - Initializes the `Resend` client using an environment variable for the API key.
 * - Exports a singleton `resend` instance for application-wide email sending.
 * - Defines `emailConfig` with default sender, contact, and site URL, configurable via environment variables.
 *
 * Security Considerations:
 * - Relies on `RESEND_API_KEY` environment variable, which must be kept confidential.
 * - Throws an error if `RESEND_API_KEY` is not set, ensuring critical configuration is present.
 *
 * Technical Implementation:
 * - Uses the official `resend` library for email sending capabilities.
 * - Environment variables provide flexibility for different deployment environments.
 */

import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set')
}

/**
 * Singleton instance of the Resend email client.
 * This instance is used for all outbound email operations within the application.
 * It is initialized with the API key loaded from environment variables.
 */
export const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Configuration object for outbound email settings.
 * Provides default values for sender email, contact email, and the site's URL,
 * which can be overridden by environment variables.
 */
export const emailConfig: {
  /** The 'From' email address for outbound emails (e.g., 'no-reply@yourdomain.com'). */
  from: string;
  /** The primary contact email address for the business (e.g., 'contact@yourdomain.com'). */
  contactEmail: string;
  /** The public URL of the website, used for generating links in emails. */
  siteUrl: string;
} = {
  from: process.env.FROM_EMAIL || 'no-reply@insitetechsolutions.com',
  contactEmail: process.env.CONTACT_EMAIL || 'contact@insitetechsolutions.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
}