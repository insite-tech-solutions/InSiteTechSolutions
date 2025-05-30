'use client'

import React from 'react'
import Link from 'next/link'
import { AlertCircle, Mail, ArrowLeft, RefreshCw } from 'lucide-react'

export default function NewsletterErrorPage() {
  // Set document title on component mount
  React.useEffect(() => {
    document.title = 'Newsletter Error | InSite Tech Solutions'
  }, [])

  return (
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
  )
} 