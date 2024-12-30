// CoreServices.tsx
'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Code, Cog, Cpu, Shield, Layers, CheckCircle } from 'lucide-react'

// Animation variants for individual service cards
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
      className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg transition-all group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors">
          <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-50">{title}</h3>
      </div>
      <p className="text-gray-50 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 mt-1 flex-shrink-0" />
            <span className="text-gray-100">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const CoreServices: React.FC = () => {
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

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  )
}

export default CoreServices
