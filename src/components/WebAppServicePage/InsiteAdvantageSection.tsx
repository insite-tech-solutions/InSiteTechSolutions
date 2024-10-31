'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Users,
  Workflow,
  FileCode,
  HeadphonesIcon,
  Brain,
  MapPin,
  CheckCircle,
  BarChart,
  Settings,
  Handshake,
  ArrowRight
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

interface AdvantageCardProps {
  title: string
  description: string
  icon: React.ElementType
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, description, icon: Icon }) => {
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
      className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-blue-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  )
}

interface BenefitItemProps {
  text: string
}

const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => (
  <motion.li
    variants={fadeInUp}
    className="flex items-start gap-3 bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-all"
  >
    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
    <span className="text-gray-700">{text}</span>
  </motion.li>
)

const InSiteAdvantageSection: React.FC = () => {
  const advantages = [
    {
      icon: Users,
      title: "Client-First Approach",
      description: "We prioritize your business goals and tailor solutions to fit your needs and budget."
    },
    {
      icon: Workflow,
      title: "End-to-End Expertise",
      description: "From design to development, we provide full-service solutions that deliver results."
    },
    {
      icon: FileCode,
      title: "Adaptable Solutions",
      description: "Whether it's a fully custom web app or a simple, efficient WordPress site, we match the solution to your project—not the other way around."
    },
    {
      icon: HeadphonesIcon,
      title: "Long-Term Support",
      description: "We build partnerships, offering ongoing support and maintenance to keep your digital assets performing optimally."
    },
    {
      icon: Brain,
      title: "Technical Excellence with Business Sense",
      description: "Our recommendations balance technical capabilities with practical business value, ensuring you get solutions that drive real results."
    },
    {
      icon: MapPin,
      title: "Local Partnership",
      description: "As a local business, we provide personalized attention and direct communication throughout your project and beyond."
    }
  ]

  const benefits = [
    "Measurable outcomes, such as improved performance and increased conversion rates.",
    "Custom solutions that don't overcomplicate or oversell unnecessary features.",
    "Personal, hands-on service from a small business that cares about relationships, not just transactions.",
    "Flexibility and transparency in all stages of the project, ensuring we deliver on your vision."
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
              The InSite Advantage
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At InSite Tech, we bridge the gap between technical expertise and practical 
              business solutions. Our advantage lies in our ability to understand both your 
              business needs and the technical landscape, delivering digital strategies that 
              are perfectly matched to your goals and budget. We don't just build websites 
              and apps – we create digital tools that drive your business forward.
            </p>
          </motion.div>

          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-semibold text-gray-800 text-center mb-8"
          >
            What Sets Us Apart
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <AdvantageCard key={index} {...advantage} />
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.h3 
              variants={fadeInUp}
              className="text-2xl font-semibold text-gray-800 text-center mb-8"
            >
              Competitive Advantages and Client Benefits
            </motion.h3>

            <motion.ul
              variants={staggerChildren}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} text={benefit} />
              ))}
            </motion.ul>

            <motion.div
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InSiteAdvantageSection