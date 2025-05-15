/**
 * @fileoverview InSite Advantage section component that showcases the unique benefits
 * and competitive advantages of InSite Tech. This component features animated cards
 * displaying key advantages and a nested benefits section.
 */

'use client'

import React from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef, useMemo } from 'react'
import BenefitsSection from './benefits-section'
import type { InSiteAdvantageContent } from '../types'
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
 * Props interface for individual advantage cards
 * @interface AdvantageCardProps
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
 * Component for displaying individual advantage cards with animations
 * @component
 * @param {AdvantageCardProps} props - Component props
 * @returns {JSX.Element} Rendered advantage card component
 */
const AdvantageCardComponent: React.FC<AdvantageCardProps> = ({ title, description, icon }) => {
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
      className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-blue-100">
          <Icon className="h-6 w-6 text-medium-blue-alt" />
        </div>
        <h3 className="text-xl font-semibold text-gray-50">{title}</h3>
      </div>
      <p className="text-gray-100">{description}</p>
    </motion.div>
  )
}

// Memoized version of AdvantageCardComponent for performance optimization
const AdvantageCard = React.memo(AdvantageCardComponent)

/**
 * Props interface for the main InSite Advantage section
 * @interface InSiteAdvantageSectionProps
 */
interface InSiteAdvantageSectionProps {
  /** Content object containing all advantage-related information */
  content: InSiteAdvantageContent
}

/**
 * Main component for the InSite Advantage section
 * @component
 * @param {InSiteAdvantageSectionProps} props - Component props
 * @returns {JSX.Element} Rendered advantage section
 * 
 * @description
 * This component displays the unique advantages and competitive benefits of InSite Tech.
 * It includes:
 * - Animated cards showcasing key advantages
 * - A gradient background section
 * - A nested BenefitsSection component
 */
const InSiteAdvantageSectionWrapper: React.FC<InSiteAdvantageSectionProps> = ({ content }) => {
  const { title, description, advantages, benefits } = content

  return (
    <section className="pt-10 lg:pt-12 pb-2 w-full" aria-label="InSite Advantage Section">
      {/* Main Content Container with Gradient Background */}
      <div className="container rounded-xl mx-auto p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-4xl font-bold mt-6 mb-6 text-gray-50">
              {title}
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* What Sets Us Apart Section */}
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-semibold text-gray-100 text-center mb-6"
          >
            What Sets Us Apart
          </motion.h3>

          {/* Grid of Advantage Cards */}
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
      
      {/* Benefits Section Container */}
      <div>
        <div className="pt-8">
          <BenefitsSection 
            title="Competitive Advantages and Client Benefits"
            items={benefits}
          />
        </div>
      </div>
    </section>
  )
}

export default InSiteAdvantageSectionWrapper