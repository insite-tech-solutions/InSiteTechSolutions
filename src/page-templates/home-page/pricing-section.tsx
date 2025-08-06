/**
 * @fileoverview HomepagePriceSection component for displaying a summary of pricing information
 * and cost factors.
 * 
 * This component provides an interactive pricing section with animated price factor cards
 * and educational content about project cost factors. Features Framer Motion animations,
 * responsive design, and consistent styling with the pricing page.
 */

'use client';

import { useEffect, useRef, useMemo, memo } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '@/utils/icon-registry';

/**
 * Animation variant for fade-in-up motion effect
 * Used for individual card animations when scrolling into view
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94],
      opacity: { duration: 0.4 },
      y: { duration: 0.6 }
    }
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

// Renders an animated pricing factor card
function PriceFactorCard({ title, items, icon }: PriceFactorProps): JSX.Element {
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
      key={`homepage-price-factor-${title.toLowerCase().replace(/\s+/g, '-')}`}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="bg-white rounded-lg shadow-md border border-gray-200 p-0 hover:shadow-lg"
      style={{ transition: "box-shadow 0.3s ease" }}
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

const PriceFactor = memo(PriceFactorCard)

/**
 * Configuration array for project cost factors
 * Each factor explains different aspects that influence project pricing
 */
const homepagePriceFactors: PriceFactor[] = [
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
      "Project urgency and resource allocation",
    ],
    icon: "Clock",
  },
]

// Main homepage pricing overview section
function HomepagePriceSection(): JSX.Element {
  return (
    <section aria-labelledby="pricing-section-title">
      {/* Accessible landmark for Pricing Section */}
      <h2 id="pricing-section-title" className="sr-only">Our Pricing</h2>
      <div className="container mx-auto md:px-4">
        <motion.div
          key="homepage-pricing-stagger-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Header */}
          <motion.div 
            key="homepage-pricing-header"
            variants={fadeInUp} 
            className="text-center mb-10 lg:mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Our Pricing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We believe in transparent and flexible pricing tailored to your unique project needs. Our goal is to deliver maximum value and ensure a clear understanding of your investment.
            </p>
          </motion.div>

          {/* Primary Project Cost Factors Section */}
          <motion.h3
            key="homepage-pricing-factors-title"
            variants={fadeInUp}
            className="text-2xl font-semibold text-gray-800 text-center mb-8"
          >
            Primary Project Cost Factors
          </motion.h3>

          {/* Price Factors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
            {homepagePriceFactors.map((factor) => (
              <PriceFactor
                key={factor.title.toLowerCase().replace(/\s+/g, '-')}
                title={factor.title}
                items={factor.items}
                icon={factor.icon}
              />
            ))}
          </div>

          {/* Flexible Pricing Info */}
          <motion.div 
            key="homepage-pricing-flexible-info"
            variants={fadeInUp} 
            className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Flexible and Secure Solutions
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We offer various pricing models and payment methods. Our goal is to work with every client to come up with a solution within their budget that respects everyone&apos;s time and investment, and to ensure a secure transaction. We support various payment options including Credit Card and Digital Wallets via Stripe, Venmo Business, and can discuss arrangements like escrow services or payment plans aligned with project milestones. We work to ensure transparency and security for everyone.
            </p>
          </motion.div>
        </motion.div>


        {/* Pricing CTA */}
        <motion.div 
          key="homepage-pricing-cta"
          variants={fadeInUp} 
          className="mt-10 flex justify-center"
        >
        <a
          href={"/about/pricing-and-payments"}
          className="group inline-flex items-center gap-2 text-mild-blue hover:text-medium-blue-alt font-medium transition-colors"
        >
          Learn More About Our Pricing and Payments
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </motion.div>
      </div>
    </section>
  )
}

export default memo(HomepagePriceSection);
