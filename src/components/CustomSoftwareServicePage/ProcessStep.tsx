// ProcessStep.tsx
'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Clock } from 'lucide-react'

interface ProcessStepProps {
  step: number
  title: string
  description: string
  items: string[]
  timeline: string
  icon: React.ElementType
  isLast?: boolean
  animationDelay: number
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  items,
  timeline,
  icon: Icon,
  isLast = false,
  animationDelay
}) => {
  // Animation variants
  const connectorVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: animationDelay,
        duration: 0.5
      }
    }
  }

  return (
    <div className="relative flex items-start gap-6">
      {/* Step indicator and connector */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-blue-600 font-bold text-lg">
          {step}
        </div>
        {!isLast && (
          <motion.div
            className="w-1 flex-1 relative mt-4 overflow-hidden"
            variants={connectorVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              className="absolute top-0 left-0 w-full h-full animate-connector-line"
              style={{ animationDelay: `${animationDelay}s` }}
            />
          </motion.div>
        )}
      </div>

      {/* Step Content */}
      <div className="flex-1">
        <motion.div
          className="relative bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform duration-300"
          variants={connectorVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Border */}
          <div
            className="absolute inset-0 rounded-xl border-2 border-transparent animate-border pointer-events-none"
            style={{ animationDelay: `${animationDelay + 2}s` }}
          />

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-tr from-blue-700 to-blue-900">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          </div>

          <p className="text-gray-700 mb-4">{description}</p>

          <ul className="space-y-2 mb-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="flex-shrink-0 mt-1">
                  {/* Your SVG or icon here */}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4" />
            <span>Timeline: {timeline}</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProcessStep
