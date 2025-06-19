/**
 * @fileoverview Pricing Estimator Component
 * 
 * This component provides an interactive pricing estimation tool with animated price factor cards
 * and an integrated price calculator. Features Framer Motion animations, responsive design,
 * and educational content about project cost factors.
 */

"use client";

import React, { useEffect, useRef, useMemo } from "react"
import { motion, useInView, useAnimation, Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import PriceCalculator from "@/components/reusable-components/price-calculator"
import { getIcon } from "@/utils/icon-registry"

/**
 * Animation variant for fade-in-up motion effect
 * Used for individual card animations when scrolling into view
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

/**
 * Animation variant for staggered children animations
 * Creates a cascading effect when multiple elements animate in sequence
 */
const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

/**
 * Type definition for price factor configuration
 */
interface PriceFactor {
  /** Display title of the price factor category */
  title: string
  /** Array of specific items that affect pricing in this category */
  items: string[]
  /** Icon name from the icon registry for visual representation */
  icon: string
}

/**
 * Configuration array for project cost factors
 * Each factor explains different aspects that influence project pricing
 */
const pricingPagePriceFactors: PriceFactor[] = [
  {
    title: "Project Scope",
    items: [
      "Number of features and functionalities",
      "Intricacy of design and UX requirements",
      "Performance specifications",
    ],
    icon: "Layout",
  },
  {
    title: "Technical Complexity",
    items: [
      "Platform and programming language requirements",
      "Deployment and hosting environment",
      "Integration with third-party services",
    ],
    icon: "Code",
  },
  {
    title: "Timeline",
    items: [
      "Standard delivery vs. expedited requests",
      "Number of requested revisions",
      "Resource allocation based on deadlines",
    ],
    icon: "Clock",
  },
]

/**
 * Props interface for individual price factor cards
 */
interface PriceFactorProps {
  /** Title of the price factor category */
  title: string
  /** List of items that affect pricing in this category */
  items: string[]
  /** Icon name for visual representation */
  icon: string
}

/**
 * PriceFactorCard Component
 * 
 * Renders an individual animated card explaining a specific price factor category.
 * Features gradient header, icon integration, and smooth scroll-triggered animations.
 * 
 * @param {PriceFactorProps} props - The props for the price factor card
 * @returns {JSX.Element} The rendered price factor card
 */
const PriceFactorCard: React.FC<PriceFactorProps> = ({ title, items, icon }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  
  // Memoized icon component to prevent unnecessary re-renders
  const Icon = useMemo(() => getIcon(icon), [icon])

  // Trigger animation when card comes into view
  useEffect(() => {
    if (isInView) controls.start("visible")
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
      
      {/* Card Content - List of pricing factors */}
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

/**
 * Memoized version of PriceFactorCard to prevent unnecessary re-renders
 * Optimizes performance when the parent component updates
 */
const PriceFactor = React.memo(PriceFactorCard)

/**
 * PricingEstimator Component
 * 
 * Main component that renders the complete pricing estimation section including
 * animated price factor cards and an interactive price calculator.
 * 
 * Features:
 * - Framer Motion animations with scroll-triggered effects
 * - Responsive grid layout for price factor cards
 * - Integration with interactive price calculator component
 * - Educational content about project cost factors
 * - Gradient card headers with icon integration
 * - Performance optimizations with memoization
 * - Accessible markup with proper ARIA labels
 * - Disclaimer text for estimate accuracy
 * 
 * @returns {JSX.Element} The rendered pricing estimator section
 * 
 * @example
 * ```tsx
 * // Usage in a pricing page
 * import PricingEstimator from '@/page-templates/pricing-page/pricing-estimator'
 * 
 * export default function PricingPage() {
 *   return (
 *     <div>
 *       <PricingEstimator />
 *     </div>
 *   )
 * }
 * ```
 */
export default function PricingEstimator(): JSX.Element {
  return (
    <section className="w-full" aria-labelledby="pricing-estimator-title">
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="pricing-estimator-title" className="sr-only">Interactive Pricing Estimator</h2>
      
      {/* Section Header - Title and introductory text */}
      <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Interactive Pricing Estimator</h2>
          <p className="text-lg text-medium-blue max-w-2xl mx-auto">
            Get an estimated price range for your project by selecting your requirements.
          </p>
      </div>

      {/* Animated Content Container - Staggered animations for child elements */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="max-w-5xl mx-auto px-2"
      >
        {/* Price Factors Section Title */}
        <motion.h3
          variants={fadeInUp}
          className="text-2xl font-semibold text-gray-800 text-center mb-8 mt-4"
        >
          Primary Project Cost Factors
        </motion.h3>
        
        {/* Price Factors Grid - Responsive layout with animated cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 lg:mb-12">
          {pricingPagePriceFactors.map((factor) => (
            <PriceFactor
              key={factor.title.toLowerCase().replace(/\s+/g, '-')}
              title={factor.title}
              items={factor.items}
              icon={factor.icon}
            />
          ))}
        </div>
        
        {/* Interactive Price Calculator Component */}
          <PriceCalculator />
      </motion.div>
      
      {/* Disclaimer Section - Important note about estimate accuracy */}
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <p className="text-gray-600 text-base">
          Remember, this estimator provides ballpark figures. For a detailed estimate tailored to your specific needs, please schedule a free consultation.
        </p>
      </div>
    </section>
  )
}
