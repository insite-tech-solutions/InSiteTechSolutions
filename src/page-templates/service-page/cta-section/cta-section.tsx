/**
 * @fileoverview CTASection component that renders a full-width call-to-action banner
 * with a title, description, and up to two buttons. This component is designed to
 * encourage user interaction and drive conversions with an eye-catching gradient
 * background, responsive layout, and animated entrance.
 */
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import TailwindButton from '@/components/reusable-components/tailwind-button'
import { CTAContent } from '../types'

/**
 * Props interface for the CTA section component
 * 
 * @interface CTASectionProps
 * @property {CTAContent} content - Configuration object containing all CTA content
 * including title, description, button texts, links, and optional background class
 */
interface CTASectionProps {
  content: CTAContent
}

/**
 * CTASection component displays a call-to-action banner with a gradient background
 * and animated entrance effect.
 * 
 * This component renders a visually appealing CTA section with:
 * - Configurable gradient background
 * - Responsive layout for different screen sizes
 * - Animated entrance with Framer Motion
 * - Primary button with prominent styling
 * - Optional secondary button with ghost styling
 * - Hover effects for enhanced interactivity
 * - Accessibility support with proper landmarks
 * 
 * @param {CTASectionProps} props - Component props
 * @param {CTAContent} props.content - Content object containing title, description,
 *                                      button texts, links, and optional background class
 * @returns {JSX.Element} Rendered CTA section component with animation
 * 
 * @example
 * ```tsx
 * const ctaContent = {
 *   title: "Ready to get started?",
 *   description: "Contact us today for a free consultation",
 *   primaryButtonText: "Contact Us",
 *   primaryButtonLink: "/contact",
 *   secondaryButtonText: "Learn More",
 *   secondaryButtonLink: "/services",
 *   bgClassName: "bg-gradient-to-br from-purple-500 to-blue-600"
 * };
 * 
 * <CTASection content={ctaContent} />
 * ```
 */
export default function CTASection({ content }: CTASectionProps): JSX.Element {
  const { 
    title, 
    description, 
    primaryButtonText, 
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    bgClassName = "bg-gradient-to-br from-light-blue to-blue-800"
  } = content

  return (
    <div className="pb-16 py-8">
      <section
        className={`container mx-auto relative rounded-2xl overflow-hidden ${bgClassName} border-2 border-light-blue shadow-lg hover:shadow-xl text-white py-8 lg:py-16 px-8 transition-all duration-300`}
        aria-labelledby="cta-section-title"
      >
          {/* Accessible landmark for screen readers */}
          <h2 id="cta-section-title" className="sr-only">{title}</h2>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* CTA Content Container with scroll-triggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto">
                {description}
              </p>
            </div>

            {/* Buttons Container with responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA Button with prominent styling */}
              <TailwindButton 
                href={primaryButtonLink} 
                className="bg-white rounded-full font-medium shadow-md transition-all duration-200"
              >
                {primaryButtonText}
              </TailwindButton>

              {/* Optional Secondary Button with ghost styling */}
              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  href={secondaryButtonLink}
                  className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}