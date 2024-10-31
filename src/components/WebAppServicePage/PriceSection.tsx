'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Layout,
  Code,
  Clock,
  DollarSign,
  Calculator,
  ExternalLink,
  ArrowRight,
  FileStack,
  Settings,
  Puzzle,
  Image,
  LineChart,
  Smartphone,
  Gauge,
  Link as LinkIcon,
  Shield,
  FastForward,
  History,
  Box,
  CalendarClock,
  Headphones
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

interface PriceFactorProps {
  title: string
  items: string[]
  icon: React.ElementType
}

const PriceFactor: React.FC<PriceFactorProps> = ({ title, items, icon: Icon }) => {
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
      className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// Placeholder Calculator Component
const PriceCalculator: React.FC = () => (
  <motion.div
    variants={fadeInUp}
    className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center"
  >
    <div className="flex justify-center mb-6">
      <Calculator className="h-12 w-12 text-blue-600" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      Project Cost Calculator
    </h3>
    <p className="text-gray-600 mb-6">
      Our interactive calculator is coming soon! It will help you estimate project costs based on your specific requirements.
    </p>
    <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
      Get a Custom Quote
      <ArrowRight className="h-5 w-5" />
    </button>
  </motion.div>
)

const PriceSection: React.FC = () => {
  const priceFactors = [
    {
      title: "Project Scope",
      icon: Layout,
      items: [
        "Number of pages/screens",
        "Customization of features and functionality",
        "Integration requirements",
        "Content creation needs (Stock vs Custom)",
        "Size/scalability (e-commerce vs. informational site)"
      ]
    },
    {
      title: "Technical Complexity",
      icon: Code,
      items: [
        "Platform requirements (mobile app vs. web)",
        "Feature requirements",
        "Plugins, APIs, and other third-party integrations",
        "Special requirements",
        "Performance specifications"
      ]
    },
    {
      title: "Timeline",
      icon: Clock,
      items: [
        "Project urgency",
        "Number of requested revisions",
        "Size and complexity of the project",
        "Implementation Schedule",
        "Support requirements"
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Determining Project Cost
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our pricing is tailored to the scope and complexity of each project, 
              with flexible options to suit your budget. Whether that be a simple 
              Wordpress site or a highly integrated mobile app, we will do our best 
              to find the strategy that meets your needs and budget.
            </p>
          </motion.div>

          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-semibold text-gray-800 text-center mb-8"
          >
            Primary Project Cost Factors
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {priceFactors.map((factor, index) => (
              <PriceFactor key={index} {...factor} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <PriceCalculator />
          </div>

          <motion.div 
            variants={fadeInUp}
            className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Long-Term Value
            </h3>
            <p className="text-gray-700 mb-6">
              The true cost of a website or app extends beyond development expenses. 
              An outdated or poorly functioning digital presence can result in lost 
              revenue, decreased engagement, reduced efficiency, and diminished market 
              presence. Investing in a high-quality digital solution provides long-term 
              returns through increased user engagement, higher conversion rates, and 
              improved operational efficiency.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-gray-600">
                Please note these are middle of the road estimates, and we will always 
                do our best to find a solution within your budget.
              </p>
              <a 
                href="/pricing"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                View detailed pricing
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PriceSection