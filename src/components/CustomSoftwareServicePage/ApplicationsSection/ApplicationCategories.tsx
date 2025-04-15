'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { ArrowRight, Cog, TestTube, Server } from 'lucide-react'

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

interface SolutionCategoryProps {
  title: string
  items: string[]
  icon: React.ElementType
  className?: string
}

const SolutionCategory: React.FC<SolutionCategoryProps> = ({ title, items, icon: Icon, className = "" }) => {
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
      className={`bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg transition-all ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-50">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-100">
            <ArrowRight className="h-4 w-4 text-yellow-400 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const ApplicationCategories: React.FC = () => {
  const solutions = [
    {
      title: "Business Operations",
      icon: Cog,
      items: [
        "Custom management applications",
        "Inventory and supply chain management systems",
        "Workflow automation tools",
        "Analytics and reporting dashboards"
      ]
    },
    {
      title: "Research & Development",
      icon: TestTube,
      items: [
        "Computational simulations and modeling",
        "Data analysis and visualization tools",
        "Research management systems",
        "Laboratory information systems"
      ]
    },
    {
      title: "Digital Infrastructure",
      icon: Server,
      items: [
        "Legacy system modernization",
        "Cloud migrations and system integrations",
        "Digital workflow transformations",
        "Internally managed software solutions"
      ]
    }
  ]

  return (
    <div className="container mx-auto relative rounded-xl p-6 bg-gradient-to-br from-medium-blue via-blue-800 to-blue-600 shadow-xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl font-bold mt-6 mb-6 text-gray-50">
            Empowering Businesses Across Diverse Sectors
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-100 leading-relaxed">
            Our custom software solutions cater to a wide range of industries, providing specialized tools that address unique challenges and drive innovation. Our digital strategies help clients by enhancing their:
          </p>
        </motion.div>

        {/* Core Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-2">
          {solutions.map((solution, index) => (
            <SolutionCategory key={index} {...solution} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ApplicationCategories