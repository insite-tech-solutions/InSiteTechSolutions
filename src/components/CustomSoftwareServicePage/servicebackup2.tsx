'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Code,
  Cpu,
  Cloud,
  Settings,
  Cog,
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Layers
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

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  benefits: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, benefits }) => {
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
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-7 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="p-4 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-colors">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-5">{description}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700 dark:text-gray-400">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

interface BenefitCardProps {
  icon: React.ElementType
  title: string
  description: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={fadeInUp}
    className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:bg-gradient-to-tr from-green-50 to-green-100 dark:hover:from-green-700 dark:hover:to-green-800 transition-all duration-300"
  >
    <div className="p-4 rounded-lg bg-gradient-to-tr from-green-500 to-teal-600 mb-4">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
)

const ServiceScopeSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Bespoke Software & Desktop Application Development",
      description: "We develop custom software that addresses your specific business or research objectives, whether that's automating workflows, integrating systems, or solving complex computational problems.",
      benefits: [
        "Custom desktop and server applications",
        "Industry-specific tools and utilities",
        "Data processing and analytics platforms",
        "Enterprise Resource Planning (ERP) systems"
      ]
    },
    {
      icon: Cog,
      title: "System Integration & API Development",
      description: "Seamlessly connect disparate systems and ensure smooth data flow across your organization.",
      benefits: [
        "Seamless connection of disparate systems",
        "Custom API design and implementation",
        "Legacy system integration",
        "Cloud service integration"
      ]
    },
    {
      icon: Cpu,
      title: "Computational Science & Simulations",
      description: "Harness the power of computational science to drive innovation and research.",
      benefits: [
        "Scientific computing solutions",
        "Process simulation and modeling",
        "Data analysis and visualization tools",
        "Research and development tools"
      ]
    },
    {
      icon: Shield,
      title: "Legacy Software Modernization",
      description: "Upgrade and enhance your existing software to meet current standards and performance requirements.",
      benefits: [
        "Codebase modernization",
        "Platform migration",
        "Performance optimization",
        "Security updates and improvements"
      ]
    },
    {
      icon: Layers,
      title: "Inverse Design & Process Optimization",
      description: "Optimize your design processes and operations through advanced algorithms and machine learning.",
      benefits: [
        "Automated design optimization",
        "Machine learning integration",
        "Performance modeling",
        "Predictive analytics"
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Improved Efficiency",
      description: "Streamlined processes that reduce manual effort and eliminate operational bottlenecks."
    },
    {
      icon: Settings,
      title: "Specialized Functionality",
      description: "Tailored features designed to address niche business needs, especially in research-focused environments."
    },
    {
      icon: Code,
      title: "Scalable Solutions",
      description: "Custom software that evolves with your organization, ensuring long-term value and adaptability."
    },
    {
      icon: Cloud,
      title: "Competitive Edge",
      description: "Unique tools that provide a significant advantage in your industry."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Robust security measures to protect your data and operations."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
              Specialized Custom Software Development
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We develop custom software that addresses your specific business or research objectives, whether that's automating workflows, integrating systems, or solving complex computational problems.
            </p>
          </motion.div>

          {/* Core Services */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Core Services
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Key Benefits */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Key Benefits
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Our custom software solutions provide measurable improvements to your business operations and research capabilities.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition-colors duration-300">
              Explore Our Services
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceScopeSection
