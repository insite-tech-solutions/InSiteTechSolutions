/**
 * @fileoverview Blog Coming Soon Section Component
 * 
 * This component renders a placeholder section for the blog that will be coming soon.
 * Features an engaging design with construction-themed elements and a newsletter signup
 * to capture interested visitors.
 */

'use client';

import { motion } from 'framer-motion';
import { Construction, Clock, Mail } from 'lucide-react';
import NewsletterForm from '@/components/reusable-components/newsletter-form';

/**
 * BlogComingSoonSection Component
 * 
 * Renders a placeholder section for the upcoming blog with construction-themed
 * design elements and a newsletter signup to capture interested visitors.
 * 
 * Features:
 * - Construction-themed visual elements
 * - Newsletter signup integration
 * - Responsive design with proper spacing
 * - Animated elements for engagement
 * - Clear messaging about upcoming content
 * - Feature grid highlighting blog benefits
 * 
 * @returns {JSX.Element} The blog coming soon section
 */
export default function BlogComingSoonSection(): JSX.Element {
  return (
    <section aria-labelledby="blog-coming-soon-title">
      {/* Accessible landmark for Blog Coming Soon */}
      <h2 id="blog-coming-soon-title" className="sr-only">Blog Coming Soon</h2>
      <div>
        {/* Main Content Container */}
        <div className="text-center">
          {/* Construction Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Construction className="w-24 h-24 mx-auto text-blue-600 mb-4" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Blog Coming Soon!
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
                         We&apos;re currently building something amazing! Our blog will feature insights on 
             technology trends, development best practices, and industry knowledge to help 
             you stay ahead of the curve.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12"
          >
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Latest Trends</h3>
              <p className="text-gray-600 text-sm">
                Stay updated with the newest technology trends and industry developments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Construction className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
              <p className="text-gray-600 text-sm">
                Learn proven development methodologies and coding standards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Insights</h3>
              <p className="text-gray-600 text-sm">
                Get valuable insights from our team of experienced developers and consultants.
              </p>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be the First to Know
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and get notified when our blog launches, plus receive 
              exclusive content and updates.
            </p>
            
            {/* Newsletter Form */}
            <div className="max-w-xl mx-auto">
              <NewsletterForm />
            </div>
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8"
          >
            <p className="text-gray-600 mb-4">
              In the meantime, explore our services and see how we can help your business grow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 