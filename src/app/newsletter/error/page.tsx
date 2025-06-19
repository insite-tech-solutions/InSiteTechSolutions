/**
 * @fileoverview Newsletter Error Page Route Component
 *
 * This module defines the Next.js App Router page component for the
 * `/newsletter/error` route. It is displayed to users when there is an issue
 * with their newsletter subscription confirmation or unsubscription process.
 * The page provides an informative error message and suggests steps for resolution.
 *
 * Features:
 * - Displays a prominent error message and icon.
 * - Provides actionable steps for the user to troubleshoot or seek assistance.
 * - Offers call-to-action links to retry, contact support, or navigate back to the homepage.
 * - Dynamically sets the document title using `useEffect`.
 *
 * Technical Implementation:
 * - Uses `Next.js` App Router page conventions (`page.tsx`) and marked as a client component (`'use client'`).
 * - Employs `lucide-react` for icons and `next/link` for client-side navigation.
 * - Includes a button to reload the page for retry attempts.
 * - Designed to provide a clear and helpful user experience during error scenarios.
 */

'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, Mail, ArrowLeft, RefreshCw } from 'lucide-react';

/**
 * Newsletter Error Page Component
 *
 * This client component renders the page shown to users when an error occurs
 * during a newsletter-related operation (e.g., confirmation, unsubscription).
 * It guides the user on how to proceed and offers various recovery options.
 *
 * @returns {JSX.Element} The rendered newsletter error page.
 *
 * @example
 * ```tsx
 * // This component is automatically rendered by Next.js for the
 * // /newsletter/error route. No manual import is necessary within other components.
 * ```
 */
export default function NewsletterErrorPage(): JSX.Element {
  // Dynamically set the document title when the component mounts.
  // This ensures the browser tab/window title reflects the page content.
  useEffect(() => {
    document.title = 'Newsletter Error | InSite Tech Solutions'
  }, [])

  return (
    <section aria-labelledby="newsletter-error-title">
      {/* Accessible landmark for section */}
      <h2 id="newsletter-error-title" className="sr-only">Newsletter Error</h2>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md md:max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Error Icon */}
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>

        {/* Main Content */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          We encountered an issue processing your newsletter request. This could be due to an expired link, network issues, or a temporary problem on our end.
        </p>

        {/* Help Section */}
        <div className="bg-yellow-50 rounded-lg p-4 mb-6">
          <h2 className="font-semibold text-yellow-900 mb-2">What You Can Do</h2>
          <ul className="text-sm text-yellow-800 space-y-1 text-left">
            <li>• Check if the link has expired (exp. 48 hrs after sent)</li>
            <li>• Try refreshing the page</li>
            <li>• Clear your browser cache</li>
            <li>• Contact us for assistance</li>
          </ul>
        </div>

        {/* Call to Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
          
          <Link
            href="/contact"
            className="w-full bg-medium-blue hover:bg-dark-blue-alt text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Support
          </Link>
          
          <Link
            href="/"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Homepage
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            Need immediate assistance?
          </p>
          <p className="text-sm text-gray-600">
            Email us at{' '}
            <a 
              href="mailto:support@insitetechsolutions.com"
              className="font-medium hover:underline text-blue-600"
            >
              support@insitetechsolutions.com
            </a>
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}