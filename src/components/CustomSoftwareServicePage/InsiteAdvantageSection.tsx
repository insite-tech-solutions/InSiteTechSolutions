'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Users,
  Cog,
  Code,
  Headphones,
  Handshake,
  MapPin,
  CheckCircle,
  ArrowRight,
  ExternalLink
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
      className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-blue-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-50">{title}</h3>
      </div>
      <p className="text-gray-100">{description}</p>
    </motion.div>
  )
}

interface BenefitItemProps {
  title: string
  description: string
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description }) => (
  <motion.li
    variants={fadeInUp}
    className="flex flex-col gap-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all"
  >
    <div className="flex items-center gap-2">
      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </div>
    <p className="text-gray-700">{description}</p>
  </motion.li>
)

const InSiteAdvantageSection: React.FC = () => {
  const advantages = [
    {
      icon: Users,
      title: "Client-First Approach",
      description: "We prioritize your goals and tailor solutions to fit your needs and budget."
    },
    {
      icon: Cog,
      title: "End-to-End Expertise",
      description: "From design to development, we provide full-service solutions that deliver results."
    },
    {
      icon: Code,
      title: "Adaptable Solutions",
      description: "Whether it's complex simulations or a simple process automation script, we match the solution to your project—not the other way around."
    },
    {
      icon: Headphones,
      title: "Long-Term Support",
      description: "We build lasting partnerships, offering ongoing support and maintenance so your software grows with your business, adapting to new needs and challenges."
    },
    {
      icon: Code, // Using Code as a substitute for Technical Excellence
      title: "Technical Excellence with Business Sense",
      description: "Our recommendations balance technical capabilities with practical business value, ensuring you get solutions that drive real results."
    },
    {
      icon: Handshake,
      title: "Local Partnership",
      description: "As a local business, we provide personalized attention and direct communication throughout your project and beyond."
    }
  ]

  const benefits = [
    {
      title: "Adaptability & Flexibility",
      description: "At InSite Tech Solutions, we understand that every business is unique. Our custom software is designed to adapt to your specific needs and budget, ensuring that you receive a solution that not only meets but exceeds your expectations."
    },
    {
      title: "Measurable Outcomes",
      description: "Achieve improved performance, increased efficiency, and higher customer satisfaction."
    },
    {
      title: "Custom Solutions",
      description: "Avoid the pitfalls of one-size-fits-all software with solutions designed specifically for your business."
    },
    {
      title: "Personalized Service",
      description: "Experience hands-on, personalized attention from a team that values relationships over transactions. We work closely with you at every stage to ensure the solution aligns with your vision."
    },
    {
      title: "Scalable Solutions",
      description: "Software that grows with your business, accommodating increasing demands and expanding functionalities."
    },
    {
      title: "Data-Driven Insights",
      description: "Advanced analytics and reporting tools provide actionable insights for informed decision-making."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container rounded-xl mx-auto p-6 bg-gradient-to-br from-medium-blue via-blue-800 to-blue-600">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl font-bold mb-6 text-gray-50">
              The InSite Advantage
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              Partnering with InSite Tech Solutions means collaborating with a team dedicated to delivering exceptional custom software that aligns with your objectives. We bridge the gap between technical expertise and practical business solutions, delivering digital strategies that are perfectly matched to your goals and budget, ensuring your software drives real results. We don't just develop software – we craft powerful tools that drive efficiency and solve real-world problems.
            </p>
          </motion.div>

          {/* What Sets Us Apart */}
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-semibold text-gray-100 text-center mb-8"
          >
            What Sets Us Apart
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <AdvantageCard key={index} {...advantage} />
            ))}
          </div>
          </motion.div>
          </div>
          
          <div>
          {/* Competitive Advantages and Client Benefits */}
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
                <BenefitItem key={index} title={benefit.title} description={benefit.description} />
              ))}
            </motion.ul>

            {/* Call-to-Action Button */}
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
        
      </div>
    </section>
  )
}

export default InSiteAdvantageSection
