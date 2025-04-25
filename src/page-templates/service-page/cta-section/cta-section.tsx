/**
 * @fileoverview CTASection component that renders a full-width call-to-action banner
 * with a title, description, and up to two buttons. This component is designed to
 * encourage user interaction and drive conversions.
 */
"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import TailwindButton from '@/components/reusable-components/tailwind-button'
import { CTAContent } from '../types'

interface CTASectionProps {
  content: CTAContent
}

/**
 * CTASection component displays a call-to-action banner with a gradient background
 * and decorative elements.
 * 
 * @param {CTASectionProps} props - Component props
 * @param {CTAContent} props.content - Content object containing title, description,
 *                                      button texts, and links.
 * @returns {JSX.Element} Rendered CTA section component
 */
const CTASectionWrapper: React.FC<CTASectionProps> = ({ content }) => {
  const { 
    title, 
    description, 
    primaryButtonText, 
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    bgClassName = "bg-gradient-to-br from-medium-blue to-blue-800"
  } = content

  return (
    <div className="pb-16 py-8">
      <section
        className={`container mx-auto relative rounded-2xl overflow-hidden ${bgClassName} border-2 border-medium-blue shadow-lg hover:shadow-xl text-white py-8 lg:py-16 px-8 transition-all duration-300`}
        aria-label="Call to action section"
      >
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TailwindButton 
                href={primaryButtonLink} 
                className="bg-white rounded-full font-medium shadow-md transition-all duration-200"
              >
                {primaryButtonText}
              </TailwindButton>

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

export default CTASectionWrapper