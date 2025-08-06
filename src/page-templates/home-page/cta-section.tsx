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
 * - Smooth entrance animations with Framer Motion
 *
 * @module CTASection
 */

"use client";

import { memo } from 'react';
import TailwindButton from "@/components/reusable-components/tailwind-button"
import ContactForm from "@/components/reusable-components/contact-form"
import Link from "next/link"
import { motion, Variants } from 'framer-motion';

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const slideInFromBottom: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const buttonVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 12
    }
  }
};

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
 * - Smooth entrance animations with Framer Motion
 * 
 * Conversion Paths:
 * - Primary: Schedule Free Consultation button
 * - Secondary: View Case Studies link
 * - Tertiary: Contact form for direct inquiries
 * 
 * Animation Flow:
 * - Container scales in with spring effect
 * - Headline fades in from bottom
 * - Contact info appears with stagger
 * - Action buttons animate in with spring effects
 * - Contact form slides in from bottom
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
    <motion.section
      aria-labelledby="cta-section-title"
      className="relative pt-6 pb-12"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Accessible landmark for CTA Section */}
      <h2 id="cta-section-title" className="sr-only">
        Transform Your Ideas Into Digital Solutions
      </h2>
      
      {/* Gradient background container with rounded corners and shadow */}
      <motion.div 
        className="bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt rounded-2xl px-2 pt-8 pb-4 md:px-6 md:py-12 max-w-5xl mx-auto shadow-lg"
        variants={scaleIn}
      >
        <div className="container mx-auto px-0">
          {/* CTA Header Content with title, contact info, and action buttons */}
          <motion.div 
            className="text-center text-white mb-8 md:mb-12"
            variants={staggerContainer}
          >
            {/* Main headline */}
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={fadeInUp}
            >
              Transform Your Ideas Into Digital Solutions
            </motion.h2>
            
            {/* Contact information */}
            <motion.p 
              className="text-xl"
              variants={fadeInUp}
            >
              (716) 406-8988 | contact@insitetechsolutions.com
            </motion.p>
            
            {/* CTA Buttons with responsive layout */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
              variants={staggerContainer}
            >
              {/* Primary action button - consultation */}
              <motion.div variants={buttonVariants}>
                <TailwindButton 
                  href="/contact" 
                  className="bg-white rounded-full font-medium shadow-md transition-all duration-200"
                >
                  Schedule Free Consultation
                </TailwindButton>
              </motion.div>
              
              {/* Secondary action link - case studies */}
              <motion.div variants={buttonVariants}>
                <Link
                  href="/about/previous-works"
                  className="inline-flex items-center gap-2 w-fit text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form Section with frosted styling */}
          <motion.div variants={slideInFromBottom}>
            <ContactForm 
              variant="frosted"
              showHeader={true}
              className="max-w-4xl mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default memo(CTASection);
