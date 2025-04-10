'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import {
  Code,
  Cpu,
  Cloud,
  Bot,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

// Types
interface StatisticProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

interface TrendCardProps {
  icon: typeof Code | typeof Cpu | typeof Cloud | typeof Bot
  title: string
  description: string
}

interface MarketInsight {
  id: string
  insight: string
}

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

const Statistic: React.FC<StatisticProps> = ({ value, suffix = '', prefix = '', label }) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="text-center"
    >
      <div className="text-4xl font-bold text-blue-600">
        {prefix}{count}{suffix}
      </div>
      <p className="mt-2 text-gray-600">{label}</p>
    </motion.div>
  )
}

const TrendCard: React.FC<TrendCardProps> = ({ icon: Icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-lg shadow-md border border-gray-200 hover:border-blue-600 transition-all hover:shadow-lg p-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon className="h-6 w-6 text-blue-600" />
          <h4 className="text-gray-700">{title}</h4>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-gray-700">
          {description}
        </p>
      </motion.div>
    </motion.div>
  )
}

const MarketInsightCard: React.FC<{ insights: MarketInsight[] }> = ({ insights }) => (
  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Market Insights</h3>
    <motion.ul
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-4"
    >
      {insights.map((item) => (
        <motion.li
          key={item.id}
          variants={fadeInUp}
          className="flex items-start gap-3"
        >
          <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
          <span className="text-gray-700">{item.insight}</span>
        </motion.li>
      ))}
    </motion.ul>
  </div>
)

const ValuePropSection: React.FC = () => {
  const industryTrends = [
    {
      icon: Code,
      title: "API-first Architecture",
      description: "Prioritizing APIs to ensure seamless integration and flexibility."
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Leveraging cloud platforms for scalability and remote accessibility."
    },
    {
      icon: Bot,
      title: "Automation and Integration",
      description: "Streamlining processes through automation and integrated systems."
    },
    {
      icon: Cpu,
      title: "Scalability and Flexibility",
      description: "Building solutions that grow and adapt with your business needs."
    }
  ]

  const marketInsights = [
    {
      id: "1",
      insight: "78% of businesses report improved efficiency after implementing custom software solutions."
    },
    {
      id: "2",
      insight: "Organizations save an average of 27.3 hours per employee monthly through process automation."
    },
    {
      id: "3",
      insight: "89% of companies cite custom software as a key factor in maintaining competitive advantage."
    },
    {
      id: "4",
      insight: "Custom solutions reduce operational costs by an average of 22% over 3 years."
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
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-8 text-center text-gray-900"
          >
            How Custom Software Can Help You
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Many businesses, labs, and organizations face niche challenges that off-the-shelf software forces them to adapt their processes to rather than the other way around. Custom solutions flip this dynamic, creating systems that work exactly how your business needs them to. By developing software that aligns perfectly with your specific objectives eliminate inefficiencies, reduce manual work, and provide a competitive advantage through optimized workflows, unlocking new opportunities for innovation.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <Statistic 
                    value={78}
                    suffix="%"
                    label="businesses report improved efficiency after implementing custom software solutions"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <Statistic 
                    value={27.3}
                    suffix="h"
                    label="hours saved per employee monthly through process automation"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <Statistic 
                    value={89}
                    suffix="%"
                    label="companies cite custom software as a key factor in maintaining competitive advantage"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <Statistic 
                    value={22}
                    suffix="%"
                    label="operational costs reduced on average over 3 years with custom solutions"
                  />
                </div>
              </div>

              <MarketInsightCard insights={marketInsights} />

              {/* <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                As businesses face increasing pressure to digitize and automate operations, custom software has become essential for staying competitive. Integrated systems that utilize 3rd party APIs and cloud computing have become a necessity for increasing efficiency and scalability.
              </motion.p> */}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Industry Trends</h3>
                <p className="text-gray-700 mb-6">
                  As businesses face increasing pressure to digitize and automate operations, custom software has become essential for staying competitive. Integrated systems that utilize 3rd party APIs and cloud computing have become a necessity for increasing efficiency and scalability.
                </p>
                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-4"
                >
                  {industryTrends.map((trend, index) => (
                    <TrendCard key={index} {...trend} />
                  ))}
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="bg-blue-600 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4">Ready to Optimize Your Operations?</h3>
                <p className="mb-6">
                  Let&apos;s develop a custom software solution tailored to your unique business needs.
                </p>
                <button className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValuePropSection