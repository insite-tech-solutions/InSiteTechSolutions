// ProcessSection.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  ClipboardList,
  Paintbrush,
  Code,
  Rocket,
  ExternalLink
} from 'lucide-react'
import ProcessStep from './ProcessStep'

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Discovery',
      description:
        'We understand your goals, challenges, and vision to create the perfect solution.',
      items: [
        'Understand your goals, challenges, and vision',
        'Analyze technical and business requirements and constraints',
        'Determine project scope, budget, and timeline'
      ],
      timeline: '1 week',
      icon: Search
    },
    {
      step: 2,
      title: 'Planning',
      description: 'We develop a detailed roadmap to ensure project success.',
      items: [
        'Develop a detailed project roadmap',
        'Identify necessary third-party integrations',
        'Establish success criteria and key milestones'
      ],
      timeline: '1-2 weeks',
      icon: ClipboardList
    },
    {
      step: 3,
      title: 'Design',
      description:
        'We create a robust system architecture and incorporate iterative feedback.',
      items: [
        'Create system architecture design',
        'Develop algorithmic flowcharts',
        'Incorporate iterative feedback and refinements'
      ],
      timeline: '2-4 weeks',
      icon: Paintbrush
    },
    {
      step: 4,
      title: 'Development',
      description:
        'We build your solution with regular updates and maintain alignment with your goals.',
      items: [
        'Execute development sprints with regular progress updates',
        'Integrate continuous feedback to ensure alignment with goals',
        'Generate unit tests and documentation for long-term maintainability'
      ],
      timeline: '4-16 weeks (project dependent)',
      icon: Code
    },
    {
      step: 5,
      title: 'Testing & Launch',
      description: 'We ensure everything works perfectly before going live.',
      items: [
        'Perform comprehensive testing to identify and fix issues',
        'Optimize system integration and performance',
        'Launch the software with post-launch support and training'
      ],
      timeline: '2-4 weeks',
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
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We follow a systematic, collaborative approach to ensure your
              custom software solution meets all requirements while maintaining
              flexibility for future growth:
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative max-w-4xl mx-auto space-y-12">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                {...step}
                isLast={index === processSteps.length - 1}
                animationDelay={index * 4} // 4 seconds per step
              />
            ))}
          </div>

          {/* Concluding Card */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 max-w-4xl mx-auto shadow-md border border-blue-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: processSteps.length * 4 }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We cannot provide exact timelines until we have a well-defined
              project and plan. Projects can range from a few weeks to several
              months; however, as a simple reference point, most small business
              software projects are completed in 6–8 weeks, while larger, more
              complex solutions can range from 8–16+ weeks, depending on the
              complexity.
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
