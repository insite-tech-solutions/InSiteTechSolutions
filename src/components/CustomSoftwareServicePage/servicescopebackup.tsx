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
      className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors">
          <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{benefit}</span>
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
    className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
  >
    <div className="p-3 rounded-full bg-blue-100 mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Specialized Custom Software Development
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We develop custom software that addresses your specific business or research objectives, whether that&aposs automating workflows, integrating systems, or solving complex computational problems.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Core Services
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Key Benefits
            </h3>
            <p className="text-lg text-gray-700">
              Our custom software solutions provide measurable improvements to your business operations and research capabilities.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
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
