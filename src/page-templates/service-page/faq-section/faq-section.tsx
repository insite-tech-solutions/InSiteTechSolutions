/**
 * @fileoverview FAQSection component that displays frequently asked questions in an accordion format.
 * This component includes expandable FAQ items and an optional link to more resources.
 */

"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, Variants, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FAQContent } from '../types'
import { getIcon } from '@/utils/icon-registry'

// Animation variants
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

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

interface FAQItemProps {
  question: string
  answer: string
  icon: string
  isOpen: boolean
  onToggle: () => void
}

/**
 * Individual FAQ item component with expandable/collapsible behavior.
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
   * Effect hook to handle the visibility of the FAQ item.
   * 
   * @description
   * This effect hook starts the animation when the FAQ item is in view.
   * It uses the `useInView` hook to detect when the FAQ item is in view and the `useAnimation` hook to control the animation.
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
      <button
        onClick={onToggle}
        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-mild-blue focus:ring-opacity-50 rounded-xl"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-50 transition-colors duration-300">
              <Icon className="h-5 w-5 text-medium-blue-alt" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">{question}</h3>
          </div>
          <div className="flex-shrink-0">
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <ChevronDown className="h-5 w-5 text-medium-blue" />
            </motion.div>
          </div>
        </div>
      </button>
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

// Props interface for the FAQSection component
interface FAQSectionProps {
  content: FAQContent
}

/**
 * FAQSection component displays frequently asked questions in an accordion format.
 * 
 * @param {FAQSectionProps} props - Component props
 * @param {FAQContent} props.content - Content object containing FAQs and additional information
 * @returns {JSX.Element} Rendered FAQ section component
 */
const FAQSectionWrapper: React.FC<FAQSectionProps> = ({ content }) => {
  const { title, description, items, moreLink } = content
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section 
      className="pb-6"
      aria-label="Frequently Asked Questions Section"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren}>
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-medium-blue-alt text-md font-medium mb-6">
              Frequently Asked Questions (FAQs)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </motion.div>

          {/* FAQ Items */}
          <div>
            <div className="space-y-4">
              {items.map((faq, index) => (
                <FAQItemComponent
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  icon={faq.icon}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Call-to-Action Link */}
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