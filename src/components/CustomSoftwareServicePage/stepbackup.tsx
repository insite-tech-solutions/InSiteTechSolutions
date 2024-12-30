// ProcessStep.tsx
'use client';

import React from 'react'
import { motion, Variants, useInView } from 'framer-motion'
import { Clock } from 'lucide-react'

interface ProcessStepProps {
  step: number
  title: string
  description: string
  items: string[]
  timeline: string
  icon: React.ElementType
  animationDelay: number
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  items,
  timeline,
  icon: Icon,
  animationDelay
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: animationDelay
      }
    }
  }

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const dividerVariants: Variants = {
    hidden: { width: 0 },
    visible: { 
      width: "calc(100% + 1.5rem)",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  }

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
      ref={ref}
      className="relative w-full md:w-2/3 mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Step Content */}
      <div className="relative bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg border-[3px] border-blue-600">
        <div className="flex items-center gap-4 mb-4">
          <motion.div 
            className="p-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-900"
            variants={iconVariants}
            aria-hidden="true"
          >
            <Icon className="h-7 w-7 text-white" />
          </motion.div>
          <div>
            <motion.h3 
              className="text-2xl my-1 font-semibold text-gray-800"
              variants={titleVariants}
            >
              {title}
            </motion.h3>
            <motion.hr 
              className="border-2 border-gray-300 my-1"
              variants={dividerVariants}
              aria-hidden="true"
            />
          </div>
        </div>

        <motion.p 
          className="text-gray-700 mb-4"
          variants={textVariants}
        >
          {description}
        </motion.p>

        <motion.ul 
          className="space-y-2 mb-4 list-disc list-inside"
          variants={listVariants}
        >
          {items.map((item, index) => (
            <motion.li 
              key={index} 
              className="text-gray-700"
              variants={listItemVariants}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div 
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
          variants={textVariants}
        >
          <Clock className="h-4 w-4" />
          <span>Timeline: {timeline}</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProcessStep

