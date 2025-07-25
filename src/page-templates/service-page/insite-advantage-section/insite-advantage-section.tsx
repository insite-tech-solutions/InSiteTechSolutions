/**
 * @fileoverview InSite Advantage section component that showcases the unique benefits
 * and competitive advantages of InSite Tech Solutions.
 * 
 * This component features:
 * - Animated advantage cards with Framer Motion
 * - Gradient background with glass-morphism effect
 * - Responsive grid layout for different screen sizes
 * - Nested benefits section for additional value propositions
 * - Scroll-triggered animations for enhanced user experience
 */

'use client'

import { memo, useEffect, useRef, useMemo } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import BenefitsSection from './benefits-section'
import type { InSiteAdvantageContent } from '../types'
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
 * Props interface for individual advantage cards
 * 
 * @interface AdvantageCardProps
 * @property {string} title - Title of the advantage
 * @property {string} description - Detailed description of the advantage
 * @property {string} icon - Icon identifier for the advantage from icon registry
 */
interface AdvantageCardProps {
  /** Title of the advantage */
  title: string
  /** Detailed description of the advantage */
  description: string
  /** Icon identifier for the advantage */
  icon: string
}

/**
 * AdvantageCardComponent displays an individual advantage with icon, title, and description.
 * Features scroll-triggered animations and glass-morphism styling.
 * 
 * @component
 * @param {AdvantageCardProps} props - Component props
 * @returns {JSX.Element} Animated advantage card with glass-morphism effect
 */
const AdvantageCardComponent: React.FC<AdvantageCardProps> = ({ title, description, icon }): JSX.Element => {
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
      className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
    >
      {/* Advantage Header with Icon */}
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-blue-100">
          <Icon className="h-6 w-6 text-medium-blue-alt" />
        </div>
        <h3 className="text-xl font-semibold text-gray-50">{title}</h3>
      </div>
      
      {/* Advantage Description */}
      <p className="text-gray-100">{description}</p>
    </motion.div>
  )
}

// Memoized version of AdvantageCardComponent for performance optimization
const AdvantageCard = memo(AdvantageCardComponent)

/**
 * Props interface for the main InSite Advantage section
 * 
 * @interface InSiteAdvantageSectionProps
 * @property {InSiteAdvantageContent} content - Complete configuration object for the advantage section
 */
interface InSiteAdvantageSectionProps {
  /** Content object containing all advantage-related information */
  content: InSiteAdvantageContent
}

/**
 * InSiteAdvantageSectionWrapper displays the unique selling propositions and
 * competitive advantages of InSite Tech Solutions.
 * 
 * This component renders:
 * - A section header with title and description
 * - A grid of animated advantage cards with icons
 * - A nested benefits section highlighting competitive advantages
 * 
 * The section features a gradient background with glass-morphism cards and
 * scroll-triggered animations for enhanced visual appeal.
 * 
 * @component
 * @param {InSiteAdvantageSectionProps} props - Component props
 * @returns {JSX.Element} Complete advantage section with animations and nested benefits
 */
const InSiteAdvantageSectionWrapper: React.FC<InSiteAdvantageSectionProps> = ({ content }): JSX.Element => {
  const { title, description, advantages, benefits } = content

  return (
    <section className="pt-10 lg:pt-12 pb-2 w-full" aria-labelledby="insite-advantage-section-title">
      {/* Accessible landmark for section */}
      <h2 id="insite-advantage-section-title" className="sr-only">{content.title}</h2>
      
      {/* Main Content Container with Gradient Background */}
      <div className="container rounded-xl mx-auto p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Header - Title and Description */}
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-4xl font-bold mt-6 mb-6 text-gray-50">
              {title}
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Advantages Section Header */}
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-semibold text-gray-100 text-center mb-6"
          >
            What Sets Us Apart
          </motion.h3>

          {/* Advantages Grid - Responsive layout with 3 columns on large screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-2">
            {advantages.map((advantage) => (
              <AdvantageCard 
                key={advantage.title} 
                title={advantage.title} 
                description={advantage.description}
                icon={advantage.icon}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Benefits Section - Displays competitive advantages and client benefits */}
      {benefits && benefits.length > 0 && (
        <div>
          <div className="pt-8">
            <BenefitsSection 
              title="Competitive Advantages and Client Benefits"
              items={benefits}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default memo(InSiteAdvantageSectionWrapper)