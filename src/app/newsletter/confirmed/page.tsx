/**
 * @fileoverview Newsletter Confirmed Page Route Component
 *
 * This module defines the Next.js App Router page component for the
 * `/newsletter/confirmed` route. It serves as the landing page displayed
 * to users after successfully confirming their newsletter subscription.
 * The page provides a clear success message, outlines what subscribers can expect,
 * and offers navigation options to other parts of the website.
 *
 * Features:
 * - Displays a prominent success message and icon.
 * - Provides information on what type of content the subscriber will receive.
 * - Offers call-to-action links to encourage further engagement (e.g., contact page, homepage).
 * - Configures static metadata for SEO optimization, including a `noindex, nofollow` directive
 *   to prevent search engines from indexing this confirmation page.
 *
 * Technical Implementation:
 * - Uses `Next.js` App Router page conventions (`page.tsx`).
 * - Imports `Metadata` from `next` for static metadata generation.
 * - Employs `lucide-react` for icons and `next/link` for client-side navigation.
 * - Designed for a clean, user-friendly confirmation experience.
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Mail, ArrowLeft } from 'lucide-react'

/**
 * Static metadata configuration for the newsletter confirmation page.
 * Sets the page title and description, and instructs search engines not to index or follow links from this page.
 *
 * @type {Metadata} Next.js metadata configuration object.
 */
export const metadata: Metadata = {
  title: 'Newsletter Subscription Confirmed | InSite Tech Solutions',
  description: 'Your newsletter subscription has been successfully confirmed. Welcome to InSite Tech Solutions!',
  robots: 'noindex, nofollow', // Don't index confirmation pages
}

/**
 * Newsletter Confirmed Page Component
 *
 * This server component renders the page shown to users upon successful
 * confirmation of their newsletter subscription. It presents a clear confirmation
 * message, outlines the benefits of subscribing, and provides intuitive navigation
 * options back to the main site.
 *
 * @returns {JSX.Element} The rendered newsletter confirmation page.
 *
 * @example
 * ```tsx
 * // This component is automatically rendered by Next.js for the
 * // /newsletter/confirmed route. No manual import is necessary within other components.
 * ```
 */
export default function NewsletterConfirmedPage(): JSX.Element {
  return (
    <section aria-labelledby="newsletter-confirmed-title">
      {/* Accessible landmark for section */}
      <h2 id="newsletter-confirmed-title" className="sr-only">Newsletter Subscription Confirmed</h2>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md md:max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          {/* Main Content */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to Our Newsletter!
          </h1>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your email subscription has been successfully confirmed. You&apos;ll now receive our latest updates on technology solutions, business insights, and exclusive offers.
          </p>

          {/* What to Expect */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Mail className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="font-semibold text-blue-900">What to Expect</h2>
            </div>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Technology insights and news</li>
              <li>• Business automation tips</li>
              <li>• Exclusive promotional offers</li>
              <li>• Industry best practices</li>
            </ul>
          </div>

          {/* Call to Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center bg-medium-blue hover:bg-dark-blue-alt text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 block"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
            
            <Link
              href="/"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              You can unsubscribe at any time by clicking the unsubscribe link in any of our emails. You can safely close this tab/window now.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}