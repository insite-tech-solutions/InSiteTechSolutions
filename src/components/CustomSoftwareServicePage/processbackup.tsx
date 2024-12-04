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
  ArrowRight,
  ExternalLink,
  Plus
} from 'lucide-react'

// Animation variants
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

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
      className="relative"
    >
      <div className="flex items-start gap-6">
        {/* Step number and connecting line */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            {step}
          </div>
          {!isLast && (
            <div className="w-0.5 h-full bg-blue-200 mt-4" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            </div>
            
            <p className="text-gray-700 mb-4">{description}</p>
            
            <ul className="space-y-2 mb-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>Timeline: {timeline}</span>
            </div>
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We follow a systematic, collaborative approach to ensure your custom software solution meets all requirements while maintaining flexibility for future growth:
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="max-w-4xl mx-auto">
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
            className="mt-12 bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto"
          >
            <p className="text-gray-700 mb-4">
              We cannot provide exact timelines until we have a well-defined project and plan. Projects can range from a few weeks to several months; however, as a simple reference point, most small business software projects are completed in 6–8 weeks, while larger, more complex solutions can range from 8–16+ weeks, depending on the complexity.
            </p>
            <a 
              href="/process"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
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
