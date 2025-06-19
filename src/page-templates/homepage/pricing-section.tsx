/**
 * @fileoverview HomepagePriceSection component for displaying a summary of pricing information
 * and cost factors.
 */

'use client'

import React from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef, useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '@/utils/icon-registry' // Assuming this utility is available and needed

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
const PriceFactorCard: React.FC<PriceFactorProps> = ({ title, items, icon }) => {
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
      className="bg-white rounded-lg shadow-md border border-gray-200 p-0 hover:shadow-lg transition-all"
    >
      <div className="w-full rounded-t-lg bg-gradient-to-br from-light-blue to-blue-800 flex items-center justify-left gap-3 min-h-[56px] px-4 py-3">
        {Icon && <Icon className="h-7 w-7 text-white flex-shrink-0" />}
        <h4 className="text-xl font-semibold text-white ml-2">{title}</h4>
      </div>
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

// Memoized version of PriceFactorCard for performance optimization
const PriceFactor = React.memo(PriceFactorCard);

// Dummy data for price factors - replace with actual data or props
const homepagePriceFactors = [
  {
    title: "Project Scope",
    items: [
      "Number of features and functionalities",
      "Intricacy of design and UX requirements",
      "Integration with third-party services",
    ],
    icon: "Layout", // Example icon name, ensure 'Scope' is in icon-registry
  },
  {
    title: "Technical Complexity",
    items: [
      "Choice of programming languages and frameworks",
      "Database selection and architecture",
      "Deployment and hosting environment",
    ],
    icon: "Code", // Example icon name, ensure 'Code' is in icon-registry
  },
  {
    title: "Timeline",
    items: [
      "Standard delivery vs. expedited requests",
      "Phased rollout or full launch",
      "Resource allocation based on deadlines",
    ],
    icon: "Clock", // Example icon name, ensure 'Clock' is in icon-registry
  },
];


/**
 * Main component for the homepage pricing section
 * @component
 * @returns {JSX.Element} Rendered homepage pricing section
 */
const HomepagePriceSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16" aria-label="Our Pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Our Pricing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We believe in transparent and flexible pricing tailored to your unique project needs. Our goal is to deliver maximum value and ensure a clear understanding of your investment.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
            {homepagePriceFactors.map((factor) => (
              <PriceFactor
                key={factor.title}
                title={factor.title}
                items={factor.items}
                icon={factor.icon}
              />
            ))}
          </div>

          {/* Flexible Pricing Models Information */}
          <motion.div variants={fadeInUp} className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Flexible and Secure Solutions
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We offer various pricing models and payment methods. Our goal is to work with every client to come up with a solution within their budget that respects everyone&apos;s time and investment and to ensure a secure transaction. We support various payment options including PayPal, Venmo, and can discuss arrangements like escrow services or payment plans aligned with project milestones. This ensures transparency and security for all parties involved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomepagePriceSection;
