'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Globe,
  ShoppingCart,
  BarChart3,
  Heart,
  Store,
  GraduationCap,
  Briefcase,
  Plus,
  ArrowRight,
  Computer,
  Calendar,
  LineChart,
  Users,
  Database,
  Layout,
  FileText,
  Share2,
  ShieldCheck,
  ClipboardList,
  Settings,
  Gauge
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
      className={`bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700">
            <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

interface IndustryCardProps {
  title: string
  items: string[]
  icon: React.ElementType
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, items, icon: Icon }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-full bg-blue-100">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

const ApplicationsSection: React.FC = () => {
  const solutions = [
    {
      title: "Digital Presence",
      icon: Globe,
      items: [
        "Professional company websites",
        "Landing pages and marketing sites",
        "Blog and content management systems",
        "Social media integration"
      ]
    },
    {
      title: "e-Commerce & Customer Engagement",
      icon: ShoppingCart,
      items: [
        "Full-featured e-commerce platforms",
        "Secure customer portals and membership sites",
        "Appointment booking and reservation systems",
        "Interactive product catalogs and configurators"
      ]
    },
    {
      title: "Business Operations",
      icon: BarChart3,
      items: [
        "Custom business management applications",
        "Inventory and supply chain management systems",
        "Employee portals and workflow automation tools",
        "Analytics and reporting dashboards"
      ]
    }
  ]

  const industries = [
    {
      title: "Wellness",
      icon: Heart,
      items: [
        "Client portals and scheduling systems",
        "Progress monitoring applications",
        "Business management tools"
      ]
    },
    {
      title: "Retail & E-commerce",
      icon: Store,
      items: [
        "Online stores with inventory management",
        "Product customization tools",
        "Virtual showrooms"
      ]
    },
    {
      title: "Education & Training",
      icon: GraduationCap,
      items: [
        "Learning management systems",
        "Interactive course platforms",
        "Student progress tracking"
      ]
    },
    {
      title: "Professional Services",
      icon: Briefcase,
      items: [
        "Client management portals",
        "Service tracking platforms",
        "Resource scheduling systems"
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
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              With experience spanning several domains, we are able to provide a one-stop-shop 
              for all your tech related needs. Our digital strategies empower businesses by enhancing their:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <SolutionCategory key={index} {...solution} />
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Industry-Specific Solutions
            </h3>
            <p className="text-lg text-gray-700">
              Leveraging our technical expertise across various sectors, we deliver 
              specialized solutions tailored to your industry's unique requirements.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-blue-600 text-white rounded-lg p-8 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Plus className="h-6 w-6" />
              <h4 className="text-2xl font-semibold">And Many More!</h4>
            </div>
            <p className="mb-6 text-blue-100">
              Don't see your industry listed? Contact us to discuss your specific needs.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ApplicationsSection