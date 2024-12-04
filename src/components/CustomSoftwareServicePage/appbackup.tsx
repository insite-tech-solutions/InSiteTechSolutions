'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Cog,
  Database,
  Briefcase,
  Truck,
  Code,
  Share2,
  ArrowRight,
  Plus,
  ShoppingCart,
  Store,
  Users,
  Settings,
  Computer,
  FileText,
  ClipboardList
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

interface IndustryCardProps {
  title: string
  items: string[]
  icon: React.ElementType
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, items, icon: Icon }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 border hover:border-blue-600 transition-all"
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
      icon: Database,
      items: [
        "Computational simulations and modeling",
        "Data analysis and visualization tools",
        "Research management systems",
        "Laboratory information systems"
      ]
    }
  ]

  const industries = [
    {
      title: "Manufacturing & Engineering",
      icon: Settings,
      items: [
        "Process control systems",
        "Quality assurance software",
        "Equipment monitoring",
        "Production planning tools"
      ]
    },
    {
      title: "Retail & E-commerce",
      icon: ShoppingCart,
      items: [
        "Custom POS systems",
        "Product customization tools",
        "Inventory management solutions",
        "Interactive product catalogs"
      ]
    },
    {
      title: "Professional Services",
      icon: Briefcase,
      items: [
        "Client management portals",
        "Service tracking platforms",
        "Resource scheduling systems",
        "Reporting and analytics tools"
      ]
    },
    {
      title: "Logistics & Supply Chain",
      icon: Truck,
      items: [
        "Transportation management systems",
        "Warehouse management software",
        "Supply chain optimization tools"
      ]
    }
  ]

  return (
  <section className="py-24 bg-gray-50 relative overflow-hidden">
    {/* Add the diagonal stripe */}
    <div 
      className="absolute w-[200%] h-32 bg-blue-600 -rotate-12 
      top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  <div className="container mx-auto relative rounded-xl p-6 bg-gradient-to-br from-medium-blue via-blue-800 to-blue-600">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-50">
              Empowering Businesses Across Diverse Sectors
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              Our custom software solutions cater to a wide range of industries, providing specialized tools that address unique challenges and drive innovation. Our digital strategies help clients by enhancing their:
            </p>
          </motion.div>

          {/* Core Services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <SolutionCategory key={index} {...solution} />
            ))}
          </div>
    </motion.div>
    </div>
    <div className="container mx-auto p-6">
      
          {/* Industry-Specific Solutions */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Industry-Specific Solutions
            </h3>
            <p className="text-lg text-gray-700">
              Drawing on our technical expertise across numerous sectors, we create customized solutions that meet the unique demands of your industry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>

          {/* And Many More! Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-blue-600 text-white rounded-lg p-8 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Plus className="h-6 w-6" />
              <h4 className="text-2xl font-semibold">And Many More!</h4>
            </div>
            <p className="mb-6 text-blue-100">
              Don&apos;t see your industry listed? Contact us to discuss your specific needs.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
      </div>
    </section>
  )
}

export default ApplicationsSection
