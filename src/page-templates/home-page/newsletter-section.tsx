/**
 * @fileoverview Newsletter Subscription Section Component for Homepage
 *
 * This component creates a newsletter subscription section with company branding,
 * promotional content, and a subscription form. Features responsive layout,
 * company logo display, and integration with the NewsletterForm component.
 *
 * Features:
 * - Responsive two-column layout (mobile: stacked, desktop: side-by-side)
 * - Company logo display with optimized image loading
 * - Promotional content with value proposition
 * - NewsletterForm component integration
 * - Accessibility features with proper landmarks
 * - Performance optimization with memoization
 * - Smooth entrance animations with Framer Motion
 *
 * @module NewsletterSubscription
 */

"use client";

import Image from "next/image"
import NewsletterForm from "@/components/reusable-components/newsletter-form"
import { memo } from 'react';
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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const slideInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

/**
 * NewsletterSubscription Component
 * 
 * Creates a newsletter subscription section with company branding,
 * promotional content, and a subscription form. The layout is responsive,
 * switching from stacked on mobile to side-by-side on desktop.
 * 
 * The component includes:
 * - Company logo with optimized Next.js Image component
 * - Promotional headline and description
 * - NewsletterForm component for subscription handling
 * - Responsive layout with proper spacing
 * - Accessibility features with ARIA labels
 * - Performance optimization with memoization
 * - Smooth entrance animations with Framer Motion
 * 
 * Layout Structure:
 * - Mobile: Stacked layout with logo, content, then form
 * - Desktop: Two-column layout with logo/content on left, form on right
 * - Responsive breakpoints for smooth transitions
 * 
 * Animation Flow:
 * - Logo scales in with fade effect
 * - Content slides in from left with staggered text elements
 * - Form slides in from right to create directional flow
 * 
 * @returns {JSX.Element} Newsletter subscription section
 * 
 * @example
 * ```tsx
 * <NewsletterSubscription />
 * ```
 */
function NewsletterSubscription(): JSX.Element {
  return (
    <motion.section 
      aria-labelledby="newsletter-subscription-title"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Accessible landmark for Newsletter Subscription */}
      <h2 id="newsletter-subscription-title" className="sr-only">
        Subscribe to InSite Tech Newsletter
      </h2>
      
      {/* Main container with responsive padding */}
      <div className="container mx-auto md:px-6">
        {/* Responsive flex layout - stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Newsletter Intro Content - Left column on desktop */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6 flex flex-col"
            variants={slideInLeft}
          >
            {/* Company logo with responsive sizing */}
            <motion.div 
              className="w-full flex justify-start"
              variants={scaleIn}
            >
              <Image
                src="/Insite Tech Solutions Light.svg"
                alt="InSite Tech Solutions Logo"
                width={600}
                height={120}
                className="w-full h-auto max-w-[400px] md:max-w-[90%]"
                priority
              />
            </motion.div>
            
            {/* Promotional content with headline and description */}
            <motion.div 
              className="space-y-4"
              variants={fadeInUp}
            >
              <h3 className="text-2xl text-medium-blue font-bold leading-tight">
                Become an InSite Tech InSider for the Latest Tech Tips & Exclusive Promotions
              </h3>
              <p className="text-gray-700">
                Get exclusive access to tech insites and special offers 
                delivered directly to your inbox. Our newsletter features tech strategies, project spotlights, 
                and expert advice, and exclusive offers to help your business leverage technology for success.
              </p>
            </motion.div>
          </motion.div>

          {/* Subscription Form Container - Right column on desktop */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={slideInRight}
          >
            <NewsletterForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default memo(NewsletterSubscription);
