/**
 * @fileoverview PriceSection component for displaying pricing information, cost factors,
 * and long-term value proposition for a service.
 * 
 * This component includes:
 * - Animated pricing factors with Framer Motion
 * - Interactive price calculator integration
 * - Long-term value proposition display
 * - Responsive grid layout for different screen sizes
 */

'use client'

import React, { useEffect, useRef, useMemo } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import PriceCalculator from '@/components/reusable-components/price-calculator'
import { PricingContent } from '../types'
import { getIcon } from '@/utils/icon-registry'

/**
 * Animation variant for fade-in and slide-up effect.
 * Creates a smooth entrance animation with elements appearing
 * while moving slightly upward.
 * 
 * @type {Variants}
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

/**
 * Animation variant for staggered children animations.
 * Applies a sequential reveal to child elements with a
 * configurable delay between each child's animation.
 * 
 * @type {Variants}
 */
const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

/**
 * Props interface for the PriceFactor component
 * 
 * @interface PriceFactorProps
 */
interface PriceFactorProps {
  /** Title of the price factor section */
  title: string
  /** List of items describing the price factor */
  items: string[]
  /** Icon identifier for the price factor */
  icon: string
}

/**
 * PriceFactorComponent displays an individual pricing factor with an icon,
 * title, and list of related items. Includes animation when scrolled into view.
 * 
 * @component
 * @param {PriceFactorProps} props - Component props
 * @returns {JSX.Element} Rendered price factor card with animations
 */
const PriceFactorComponent: React.FC<PriceFactorProps> = ({ title, items, icon }): JSX.Element => {
  // Reference for intersection observer to trigger animations
  const ref = useRef(null)
  
  // Track when component enters viewport (once only)
  const isInView = useInView(ref, { once: true })
  
  // Animation controls for triggering variants
  const controls = useAnimation()
  
  // Memoized icon component to prevent unnecessary re-renders
  const Icon = useMemo(() => getIcon(icon), [icon])

  // Trigger animation when component enters viewport
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="bg-white rounded-lg shadow-md border border-gray-200 p-0 hover:shadow-lg transition-all"
    >
      {/* Card Header - Gradient background with icon and title */}
      <div className="w-full rounded-t-lg bg-gradient-to-br from-light-blue to-blue-800 flex items-center gap-3 min-h-[56px] px-4 py-3">
        {Icon && <Icon className="h-7 w-7 text-white flex-shrink-0" />}
        <h4 className="text-xl font-semibold text-white ml-2">{title}</h4>
      </div>
      
      {/* Card Content - List of factor items with arrow indicators */}
      <ul className="space-y-3 p-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <ArrowRight className="h-4 w-4 text-medium-blue-alt mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// Memoized version of PriceFactorComponent for performance optimization
const PriceFactor = React.memo(PriceFactorComponent);

/**
 * Props interface for PriceSection component
 * 
 * @interface PriceSectionProps
 */
interface PriceSectionProps {
  /** Content object containing all pricing-related information */
  content: PricingContent
}

/**
 * PriceSectionWrapper displays comprehensive pricing information for a service.
 * 
 * This component renders:
 * - A section header with title and description
 * - A grid of pricing factors that influence project costs
 * - An interactive price calculator for estimation
 * - A section highlighting long-term value proposition
 * 
 * All sections include animations for enhanced user experience.
 * 
 * @component
 * @param {PriceSectionProps} props - Component props
 * @returns {JSX.Element} Complete pricing section with animations and interactive elements
 */
const PriceSectionWrapper: React.FC<PriceSectionProps> = ({ content }): JSX.Element => {
  const { title, description, factors, longTermValue } = content;

  return (
    <section className="py-4 mt-6 lg:mt-0 w-full" aria-labelledby="pricing-section-title">
      {/* Accessible landmark for section */}
      <h2 id="pricing-section-title" className="sr-only">{content.title}</h2>
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Cost Factors Title */}
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-semibold text-gray-800 text-center mb-8"
          >
            Primary Project Cost Factors
          </motion.h3>

          {/* Price Factors Grid - Responsive layout with 3 columns on large screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 lg:mb-12">
            {factors.map((factor) => (
              <PriceFactor 
                key={factor.title} 
                title={factor.title}
                items={factor.items}
                icon={factor.icon}
              />
            ))}
          </div>

          {/* Price Calculator Section - Interactive estimation tool */}
          <div className="max-w-5xl mx-auto lg:px-6 mb-12">
            <PriceCalculator fixedService={content.serviceType} />
          </div>

          {/* Long-Term Value Section - Highlights ROI and benefits */}
          <div className="max-w-5xl mx-auto lg:px-6">
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-50 border border-blue-100 rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {longTermValue.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {longTermValue.description}
              </p>
              {longTermValue.link && (
                <a 
                  href={longTermValue.link.url}
                  className="inline-flex items-center gap-2 text-mild-blue hover:text-medium-blue-alt font-medium"
                >
                  {longTermValue.link.text}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PriceSectionWrapper