/**
 * @fileoverview FAQ Section Component
 * 
 * This component displays frequently asked questions in an accordion format with smooth animations.
 * Features expandable FAQ items with icons, scroll-triggered animations, and an optional link to more resources.
 * Built with Framer Motion for smooth transitions and proper accessibility support.
 */

"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, Variants, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FAQContent } from '../types'
import { getIcon } from '@/utils/icon-registry'

/**
 * Animation variant for fade-in-up motion effect
 * Used for individual FAQ items and section elements when scrolling into view
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

/**
 * Animation variant for staggered children animations
 * Creates a cascading effect when multiple FAQ elements animate in sequence
 */
const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

/**
 * Props interface for individual FAQ item components
 */
interface FAQItemProps {
  /** The question text to display */
  question: string
  /** The answer text to reveal when expanded */
  answer: string
  /** Icon identifier from the icon registry */
  icon: string
  /** Whether this FAQ item is currently expanded */
  isOpen: boolean
  /** Function to toggle the expanded state */
  onToggle: () => void
}

/**
 * Individual FAQ item component with expandable/collapsible behavior.
 * 
 * Features smooth accordion animation, icon integration, and accessibility support
 * with proper ARIA attributes and keyboard navigation.
 * 
 * @param {FAQItemProps} props - Component props
 * @param {string} props.question - The question being asked
 * @param {string} props.answer - The answer to the question
 * @param {string} props.icon - Icon identifier for the FAQ item
 * @param {boolean} props.isOpen - Indicates if the FAQ item is currently open
 * @param {function} props.onToggle - Function to toggle the open state
 * @returns {JSX.Element} Rendered FAQ item component
 */
const FAQItemComponent: React.FC<FAQItemProps> = ({ question, answer, icon, isOpen, onToggle }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const Icon = getIcon(icon)

  /**
   * Effect hook to handle the visibility-triggered animation of the FAQ item.
   * 
   * @description
   * This effect hook starts the animation when the FAQ item scrolls into view.
   * It uses the `useInView` hook to detect visibility and the `useAnimation` hook to control the animation timing.
   */
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
      className="bg-white rounded-xl shadow-sm border border-gray-100 hover:border-mild-blue transition-all duration-300"
    >
      {/* FAQ Question Button - Toggles expanded state */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-mild-blue focus:ring-opacity-50 rounded-xl"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          {/* Question Content - Icon and text */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-50 transition-colors duration-300">
              <Icon className="h-5 w-5 text-medium-blue-alt" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">{question}</h3>
          </div>
          
          {/* Animated Chevron - Rotates based on open state */}
          <div className="flex-shrink-0">
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <ChevronDown className="h-5 w-5 text-medium-blue" />
            </motion.div>
          </div>
        </div>
      </button>
      
      {/* Expandable Answer Content - Animated accordion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/**
 * Props interface for the main FAQ section component
 */
interface FAQSectionProps {
  /** Content configuration object containing all FAQ data and settings */
  content: FAQContent
}

/**
 * FAQ Section Component
 * 
 * Main component that renders a complete FAQ section with animated accordion-style
 * questions and answers, plus an optional call-to-action link.
 * 
 * Features:
 * - Smooth accordion animations with Framer Motion
 * - Scroll-triggered visibility animations
 * - Icon integration from the icon registry
 * - Single-item expansion (accordion behavior)
 * - Responsive design with mobile-first approach
 * - Accessibility support with ARIA attributes
 * - Optional call-to-action link with hover animations
 * - Clean typography hierarchy and spacing
 * 
 * @param {FAQSectionProps} props - Component props
 * @param {FAQContent} props.content - Content object containing FAQs and additional information
 * @returns {JSX.Element} Rendered FAQ section component
 * 
 * @example
 * ```tsx
 * // Usage in a service page
 * import FAQSection from '@/page-templates/service-page/faq-section/faq-section'
 * import { faqContent } from '@/content/service-pages/web-dev/faq-content'
 * 
 * export default function ServicePage() {
 *   return (
 *     <div>
 *       <FAQSection content={faqContent} />
 *     </div>
 *   )
 * }
 * ```
 */
const FAQSectionWrapper: React.FC<FAQSectionProps> = ({ content }) => {
  const { title, description, items, moreLink } = content
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section 
      className="pb-6"
      aria-labelledby="faq-section-title"
    >
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="faq-section-title" className="sr-only">{title}</h2>
      <div className="max-w-4xl mx-auto">
        {/* Animated Container - Staggered animations for child elements */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren}>
          {/* Section Header - Title, badge, and description */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-medium-blue-alt text-md font-medium mb-6">
              Frequently Asked Questions (FAQs)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </motion.div>

          {/* FAQ Content Container */}
          <div>
            {/* FAQ Items List - Accordion-style expandable questions */}
            <div className="space-y-4">
              {items.map((faq, index) => (
                <FAQItemComponent
                  key={faq.question.toLowerCase().replace(/\s+/g, '-')}
                  question={faq.question}
                  answer={faq.answer}
                  icon={faq.icon}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Optional Call-to-Action Link - Links to additional resources */}
            {moreLink && (
              <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
                <a
                  href={moreLink.url}
                  className="group inline-flex items-center gap-2 text-mild-blue hover:text-medium-blue-alt font-medium transition-colors"
                >
                  {moreLink.text}
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
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSectionWrapper