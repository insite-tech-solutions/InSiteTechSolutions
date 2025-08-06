/**
 * @fileoverview Contact Page CTA Section Component
 * 
 * This component renders a call-to-action section for the contact page with gradient
 * background, animated content, and responsive design. Features Framer Motion
 * scroll-triggered animations and hover effects for enhanced user engagement.
 */

"use client";

import { motion } from "framer-motion";

/**
 * ContactPageCTASection Component
 * 
 * Renders an animated call-to-action section with gradient background and
 * simple animations. Designed to encourage user engagement and
 * project inquiries on the contact page.
 * 
 * Features:
 * - Gradient background with hover shadow effects
 * - Framer Motion scroll-triggered animations
 * - Responsive typography and spacing
 * - Container-based layout with proper overflow handling
 * - Accessible markup with ARIA labels
 * - Smooth transition effects on hover
 * - Z-index layering for proper content stacking
 * 
 * @returns {JSX.Element} The rendered CTA section component
 * 
 * @example
 * ```tsx
 * // Usage in a contact page
 * import ContactPageCTASection from '@/page-templates/contact-page/cta-section'
 * 
 * export default function ContactPage() {
 *   return (
 *     <div>
 *       <ContactPageCTASection />
 *     </div>
 *   )
 * }
 * ```
 */
export default function ContactPageCTASection(): JSX.Element {
  return (
    <div className="pb-8 pb-8">
      {/* Main CTA Section - Gradient background with responsive container */}
      <section
        className={
          "container mx-auto relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-blue to-blue-800 border-2 border-light-blue shadow-lg hover:shadow-xl text-white py-8 lg:py-12 px-8 transition-all duration-300"
        }
        aria-labelledby="contact-page-cta-title"
      >
        {/* Hidden heading for screen readers - provides accessible section context */}
        <h2 id="contact-page-cta-title" className="sr-only">Ready to Start Your Project?</h2>
        
        {/* Content Container - Centered with proper z-index layering */}
        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* Animated Content Wrapper - Framer Motion scroll-triggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* CTA Content Section */}
            <div>
              {/* Primary Heading - Main call-to-action message */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Ready to Start Your Project?
              </h2>
              
              {/* Supporting Description - Encouraging and welcoming messaging */}
              <p className="text-md md:text-lg text-blue-50 max-w-3xl mx-auto">
                We&apos;re excited to help you bring your ideas to life. Whether you have a detailed plan or just a spark of inspiration, our team is here to support you every step of the way. Reach out and let&apos;s make something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 