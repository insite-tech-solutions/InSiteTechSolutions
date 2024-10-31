'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Globe,
  Smartphone,
  Monitor,
  Code,
  Settings,
  ArrowRight,
  CheckCircle,
  Gauge,
  Users,
  TrendingUp,
  Repeat
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
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom websites that are fast, responsive, and tailored to your brand.",
      benefits: [
        "Optimized for all devices and screen sizes",
        "Fast loading speeds and performance",
        "SEO-friendly architecture",
        "Custom branding and design"
      ]
    },
    {
      icon: Smartphone,
      title: "Full-Stack App Development",
      description: "End-to-end development for mobile, desktop, and web applications.",
      benefits: [
        "Native iOS and Android development",
        "Cross-platform compatibility",
        "Seamless user experience",
        "Robust backend systems"
      ]
    },
    {
      icon: Monitor,
      title: "Cross-Platform Development",
      description: "Unified experiences across devices to ensure consistency for users.",
      benefits: [
        "Consistent brand experience",
        "Synchronized data across platforms",
        "Reduced development time",
        "Cost-effective maintenance"
      ]
    },
    {
      icon: Code,
      title: "Modern Tech Frameworks",
      description: "Leveraging the latest frameworks for future-proof solutions.",
      benefits: [
        "React and Next.js expertise",
        "Swift and Kotlin for mobile",
        "Progressive Web Apps",
        "Modern architecture patterns"
      ]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Long-term partnerships to keep your digital presence optimal.",
      benefits: [
        "Regular updates and improvements",
        "Performance monitoring",
        "Security patches",
        "Technical support"
      ]
    }
  ]

  const benefits = [
    {
      icon: Gauge,
      title: "Improved User Experience",
      description: "Intuitive interfaces that keep users engaged and satisfied"
    },
    {
      icon: Users,
      title: "Increased Engagement",
      description: "Features that encourage user interaction and retention"
    },
    {
      icon: TrendingUp,
      title: "Higher Conversion Rates",
      description: "Optimized flows that turn visitors into customers"
    },
    {
      icon: Repeat,
      title: "Scalable Solutions",
      description: "Systems that grow and adapt with your business needs"
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
              Comprehensive Development Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide end-to-end development services for websites and applications, 
              ensuring that your digital presence is not only functional but engaging 
              and optimized for growth.
            </p>
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
              Our custom solutions deliver measurable improvements to your business operations and customer experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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