'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Search,
  ClipboardList,
  Paintbrush,
  Code,
  Rocket,
  Clock,
  ExternalLink
} from 'lucide-react'

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

interface ProcessStepProps {
  step: number
  title: string
  description: string
  items: string[]
  timeline: string
  icon: React.ElementType
  isLast?: boolean
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  items,
  timeline,
  icon: Icon,
  isLast = false
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

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
      className="flex items-start gap-6"
    >
      {/* Step indicator and connector */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-blue-600 font-bold text-lg">
          {step}
        </div>
        {!isLast && (
          <div className="w-1 h-full bg-gradient-to-b from-blue-300 to-purple-300 mt-4" />
        )}
      </div>

      {/* Step Content */}
      <div className="flex-1">
        <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform duration-300">
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
                  <svg className="h-4 w-4 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4" />
            <span>Timeline: {timeline}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "We understand your goals, challenges, and vision to create the perfect solution.",
      items: [
        "Understand your goals, challenges, and vision",
        "Analyze technical and business requirements and constraints",
        "Determine project scope, budget, and timeline"
      ],
      timeline: "1 week",
      icon: Search
    },
    {
      step: 2,
      title: "Planning",
      description: "We develop a detailed roadmap to ensure project success.",
      items: [
        "Develop a detailed project roadmap",
        "Identify necessary third-party integrations",
        "Establish success criteria and key milestones"
      ],
      timeline: "1-2 weeks",
      icon: ClipboardList
    },
    {
      step: 3,
      title: "Design",
      description: "We create a robust system architecture and incorporate iterative feedback.",
      items: [
        "Create system architecture design",
        "Develop algorithmic flowcharts",
        "Incorporate iterative feedback and refinements"
      ],
      timeline: "2-4 weeks",
      icon: Paintbrush
    },
    {
      step: 4,
      title: "Development",
      description: "We build your solution with regular updates and maintain alignment with your goals.",
      items: [
        "Execute development sprints with regular progress updates",
        "Integrate continuous feedback to ensure alignment with goals",
        "Generate unit tests and documentation for long-term maintainability"
      ],
      timeline: "4-16 weeks (project dependent)",
      icon: Code
    },
    {
      step: 5,
      title: "Testing & Launch",
      description: "We ensure everything works perfectly before going live.",
      items: [
        "Perform comprehensive testing to identify and fix issues",
        "Optimize system integration and performance",
        "Launch the software with post-launch support and training"
      ],
      timeline: "2-4 weeks",
      icon: Rocket
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We follow a systematic, collaborative approach to ensure your custom software solution meets all requirements while maintaining flexibility for future growth:
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="max-w-4xl mx-auto space-y-12">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                {...step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>

          {/* Concluding Card */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 max-w-4xl mx-auto shadow-md border border-blue-600"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We cannot provide exact timelines until we have a well-defined project and plan. Projects can range from a few weeks to several months; however, as a simple reference point, most small business software projects are completed in 6–8 weeks, while larger, more complex solutions can range from 8–16+ weeks, depending on the complexity.
            </p>
            <a 
              href="/process"
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
            >
              Learn more about our process
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
