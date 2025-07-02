/**
 * @fileoverview Call-to-Action Section Component for Blog Page
 * 
 * This component renders a call-to-action section that encourages visitors to engage
 * with the business while the blog is under construction.
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import TailwindButton from '@/components/reusable-components/tailwind-button';

/**
 * CtaSection Component
 * 
 * Renders a call-to-action section that encourages visitors to contact the business
 * or explore services while the blog is under construction.
 * 
 * Features:
 * - Gradient background with engaging design
 * - Multiple call-to-action options
 * - Responsive layout with proper spacing
 * - Animated elements for engagement
 * - Clear value proposition messaging
 * 
 * @returns {JSX.Element} The call-to-action section
 */
export default function CtaSection(): JSX.Element {
  return (
    <div className="pb-16 py-8">
      <section
        className="container mx-auto relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-blue to-blue-800 border-2 border-light-blue shadow-lg hover:shadow-xl text-white py-8 lg:py-16 px-8 transition-all duration-300"
        aria-labelledby="cta-section-title"
      >
        {/* Accessible landmark for screen readers */}
        <h2 id="cta-section-title" className="sr-only">Ready to Start Your Project?</h2>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* CTA Content Container with scroll-triggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Icon */}
            <div>
              <MessageCircle className="w-16 h-16 mx-auto text-white/80" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto">
                While we&apos;re building our blog, let&apos;s discuss how we can help transform 
                your business with cutting-edge technology solutions.
              </p>
            </div>

            {/* Buttons Container with responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA Button with prominent styling */}
              <TailwindButton 
                href="/contact" 
                className="bg-white rounded-full font-medium shadow-md transition-all duration-200"
              >
                Get Free Consultation
              </TailwindButton>

              {/* Optional Secondary Button with ghost styling */}
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Additional Info */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-blue-200 text-sm"
            >
              No commitment required • Free initial consultation • Custom solutions
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 