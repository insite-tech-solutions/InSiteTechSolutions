/**
 * @fileoverview Call-to-Action Section Component for Homepage
 *
 * This component creates a prominent call-to-action section with contact
 * information, action buttons, and an integrated contact form. Features
 * gradient background, responsive design, and multiple conversion paths.
 *
 * Features:
 * - Gradient background with rounded corners and shadow
 * - Contact information display (phone and email)
 * - Multiple action buttons (consultation and case studies)
 * - Integrated ContactForm component with frosted variant
 * - Responsive design with mobile-first approach
 * - Performance optimization with memoization
 *
 * @module CTASection
 */

import { memo } from 'react';
import TailwindButton from "@/components/reusable-components/tailwind-button"
import ContactForm from "@/components/reusable-components/contact-form"
import Link from "next/link"

/**
 * CTASection Component
 * 
 * Creates a prominent call-to-action section with contact information,
 * action buttons, and an integrated contact form. The section uses a
 * gradient background with rounded corners for visual appeal.
 * 
 * The component includes:
 * - Gradient background with blue color scheme
 * - Contact information (phone and email)
 * - Two action buttons (consultation and case studies)
 * - Integrated ContactForm with frosted styling
 * - Responsive design with proper spacing
 * - Accessibility features with ARIA labels
 * - Performance optimization with memoization
 * 
 * Conversion Paths:
 * - Primary: Schedule Free Consultation button
 * - Secondary: View Case Studies link
 * - Tertiary: Contact form for direct inquiries
 * 
 * @returns {JSX.Element} Call-to-action section with contact form
 * 
 * @example
 * ```tsx
 * <CTASection />
 * ```
 */
function CTASection(): JSX.Element {

  return (
    <section
      aria-labelledby="cta-section-title"
      className="relative pt-6 pb-12"
    >
      {/* Accessible landmark for CTA Section */}
      <h2 id="cta-section-title" className="sr-only">
        Transform Your Ideas Into Digital Solutions
      </h2>
      
      {/* Gradient background container with rounded corners and shadow */}
      <div className="bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt rounded-2xl px-2 pt-8 pb-4 md:px-6 md:py-12 max-w-5xl mx-auto shadow-lg">
        <div className="container mx-auto px-0">
          {/* CTA Header Content with title, contact info, and action buttons */}
          <div className="text-center text-white mb-8 md:mb-12">
            {/* Main headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Ideas Into Digital Solutions</h2>
            
            {/* Contact information */}
            <p className="text-xl">(123) 456-7890 | hello@yourcompany.com</p>
            
            {/* CTA Buttons with responsive layout */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              {/* Primary action button - consultation */}
              <TailwindButton 
                href="/contact" 
                className="bg-white rounded-full font-medium shadow-md transition-all duration-200"
              >
                Schedule Free Consultation
              </TailwindButton>
              
              {/* Secondary action link - case studies */}
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 w-fit text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Contact Form Section with frosted styling */}
          <ContactForm 
            variant="frosted"
            showHeader={true}
            className="max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default memo(CTASection);
