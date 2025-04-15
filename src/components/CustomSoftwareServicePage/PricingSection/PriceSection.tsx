'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Layout,
  Code,
  Clock,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import PriceCalculator from '@/components/CustomSoftwareServicePage/PricingSection/PriceCalculator';


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
      className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg hover:border-blue-500 transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}


const PriceSection: React.FC = () => {
  const priceFactors = [
    {
      title: "Project Scope",
      icon: Layout,
      items: [
        "Number of features and modules",
        "Level of customization required",
        "Integration with existing systems",
      ]
    },
    {
      title: "Technical Complexity",
      icon: Code,
      items: [
        "Choice of technology stack and platforms",
        "Advanced functionalities and third-party integrations", 
        "Performance specifications"
      ]
    },
    {
      title: "Timeline",
      icon: Clock,
      items: [
        "Project urgency and deadlines",
        "Number of revisions and iterations", 
        "Maintenance and support requirements"
      ]
    }
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Determining Project Cost
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our pricing is tailored to match the scope and complexity of each project, offering flexible options to fit your budget. Whether it's a short Python script or a sophisticated desktop application, we strive to find the best approach to meet your needs and financial plan.
            </p>
          </motion.div>

          {/* Primary Project Cost Factors */}
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

          {/* Price Calculator */}
          <div className="max-w-4xl mx-auto mb-16">
            <PriceCalculator fixedService="customSoftwareSolutions" />
          </div>

          {/* Long-term Value and True Cost */}
          <motion.div 
            variants={fadeInUp}
            className="bg-blue-50 border border-blue-100 rounded-lg p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Long-Term Value
            </h3>
            <p className="text-gray-700 mb-6">
            The true cost of custom software extends beyond development expenses. While initial development costs may seem higher compared to off-the-shelf solutions, the long-term savings and efficiency gains far outweigh the investment. Custom software eliminates the need for multiple subscriptions, reduces manual processes, and enhances overall productivity. It’s more than a one-time investment—it’s a foundation for long-term growth. By eliminating unnecessary subscriptions and automating key processes, custom solutions can significantly reduce operational costs over time while giving your business a competitive edge.
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

export default PriceSection