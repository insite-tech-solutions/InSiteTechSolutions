/**
 * @fileoverview Newsletter Unsubscribed Page Route Component
 *
 * This module defines the Next.js App Router page component for the
 * `/newsletter/unsubscribed` route. It is displayed to users after they have
 * successfully unsubscribed from the newsletter.
 * The page provides a clear confirmation message, explains what unsubscription entails,
 * and offers options for further interaction with the website.
 *
 * Features:
 * - Displays a prominent unsubscription confirmation message and icon.
 * - Clarifies the implications of unsubscribing (e.g., no more newsletters, data security).
 * - Provides call-to-action links for giving feedback or navigating back to the homepage.
 * - Offers a subtle option to resubscribe.
 * - Configures static metadata for SEO optimization, including a `noindex, nofollow` directive
 *   to prevent search engines from indexing this unsubscription page.
 *
 * Technical Implementation:
 * - Uses `Next.js` App Router page conventions (`page.tsx`).
 * - Imports `Metadata` from `next` for static metadata generation.
 * - Employs `lucide-react` for icons and `next/link` for client-side navigation.
 * - Designed for a clear, respectful, and user-friendly experience upon unsubscription.
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, UserMinus, ArrowLeft, Mail } from 'lucide-react'

/**
 * Static metadata configuration for the newsletter unsubscribed page.
 * Sets the page title and description, and instructs search engines not to index or follow links from this page.
 *
 * @type {Metadata} Next.js metadata configuration object.
 */
export const metadata: Metadata = {
  title: 'Unsubscribed from Newsletter | InSite Tech Solutions',
  description: 'You have been successfully unsubscribed from our newsletter.',
  robots: 'noindex, nofollow', // Don't index confirmation pages
}

/**
 * Newsletter Unsubscribed Page Component
 *
 * This server component renders the page shown to users after they have successfully
 * unsubscribed from the newsletter. It provides confirmation, clarifies the impact of
 * unsubscription, and offers navigation options or a chance to resubscribe.
 *
 * @returns {JSX.Element} The rendered newsletter unsubscription confirmation page.
 *
 * @example
 * ```tsx
 * // This component is automatically rendered by Next.js for the
 * // /newsletter/unsubscribed route. No manual import is necessary within other components.
 * ```
 */
export default function NewsletterUnsubscribedPage(): JSX.Element {
  return (
    <section aria-labelledby="newsletter-unsubscribed-title">
      {/* Accessible landmark for section */}
      <h2 id="newsletter-unsubscribed-title" className="sr-only">Newsletter Unsubscribed</h2>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md md:max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-orange-600" />
          </div>

          {/* Main Content */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Successfully Unsubscribed
          </h1>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            You have been successfully removed from our newsletter mailing list. We&apos;re sorry to see you go!
          </p>

          {/* Feedback Section */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <UserMinus className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="font-semibold text-blue-900">What This Means</h2>
            </div>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• No more newsletter emails</li>
              <li>• Your data remains secure</li>
              <li>• You can resubscribe anytime</li>
              <li>• Service emails may still be sent</li>
            </ul>
          </div>

          {/* Call to Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/contact"
              className="w-full bg-medium-blue hover:bg-dark-blue-alt text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Give Us Feedback
            </Link>
            
            <Link
              href="/"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
          </div>

          {/* Resubscribe Option */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">
              Changed your mind?
            </p>
            <p className="text-sm text-gray-600">
              You can resubscribe to our newsletter on the homepage
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-4">
            <p className="text-xs text-gray-500">
              It may take up to 24 hours to process your unsubscribe request. You may receive one more email during this time. You can safely close this tab/window now.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}