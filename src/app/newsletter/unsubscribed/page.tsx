import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, UserMinus, ArrowLeft, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unsubscribed from Newsletter | InSite Tech Solutions',
  description: 'You have been successfully unsubscribed from our newsletter.',
  robots: 'noindex, nofollow', // Don't index confirmation pages
}

export default function NewsletterUnsubscribedPage() {
  return (
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
  )
} 