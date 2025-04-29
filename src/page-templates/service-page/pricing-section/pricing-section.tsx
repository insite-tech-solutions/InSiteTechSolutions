/**
 * @fileoverview PriceSection component for displaying pricing information, cost factors,
 * and long-term value proposition for custom software solutions.
 * This component includes animated sections, a price calculator, and detailed cost breakdowns.
 */

'use client'

import React from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef, useMemo } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import PriceCalculator from '@/components/reusable-components/price-calculator'
import { PricingContent } from '../types'
import { getIcon } from '@/utils/icon-registry'

/**
 * Animation variant for fade-in and slide-up effect
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
 * Animation variant for staggered children animations
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
 * Props interface for PriceFactor component
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
 * Component for displaying individual price factors with animations
 * @component
 * @param {PriceFactorProps} props - Component props
 * @returns {JSX.Element} Rendered price factor component
 */
const PriceFactorComponent: React.FC<PriceFactorProps> = ({ title, items, icon }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const Icon = useMemo(() => getIcon(icon), [icon])

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
      className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
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
 * @interface PriceSectionProps
 */
interface PriceSectionProps {
  /** Content object containing all pricing-related information */
  content: PricingContent
}

/**
 * Main component for the pricing section of the service page
 * @component
 * @param {PriceSectionProps} props - Component props
 * @returns {JSX.Element} Rendered pricing section
 */
const PriceSectionWrapper: React.FC<PriceSectionProps> = ({ content }) => {
  const { title, description, factors, longTermValue } = content;

  return (
    <section className="py-4 mt-6 lg:mt-0 w-full" aria-label="Pricing Section">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Primary Project Cost Factors Section */}
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-semibold text-gray-800 text-center mb-8"
          >
            Primary Project Cost Factors
          </motion.h3>

          {/* Grid of Price Factors */}
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

          {/* Interactive Price Calculator */}
          <div className="max-w-5xl mx-auto lg:px-6 mb-12">
            <PriceCalculator fixedService={content.serviceType} />
          </div>

          {/* Long-term Value Proposition Section */}
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
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
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