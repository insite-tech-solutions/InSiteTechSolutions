'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import {
  Smartphone,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

// Types
interface StatisticProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

interface TrendCardProps {
  icon: typeof Smartphone | typeof TrendingUp | typeof Users | typeof ShieldCheck
  text: string
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

const TrendCard: React.FC<TrendCardProps> = ({ icon: Icon, text }) => (
  <motion.div
    variants={fadeInUp}
    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:border-blue-600 transition-all hover:shadow-lg"
  >
    <Icon className="h-6 w-6 text-blue-600" />
    <span className="text-gray-700">{text}</span>
  </motion.div>
)

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

const ComparisonTable: React.FC = () => (
  <div className="overflow-x-auto mt-8">
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full rounded-lg shadow-md overflow-hidden"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-left">Digital Marketing</th>
            <th className="p-4 text-left">Traditional Marketing</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="p-4 border-b border-gray-200 font-medium text-gray-800">Cost Efficiency</td>
            <td className="p-4 border-b border-gray-200 text-gray-700">Lower long-term costs, scalable</td>
            <td className="p-4 border-b border-gray-200 text-gray-600">Higher ongoing costs</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-4 border-b border-gray-200 font-medium text-gray-800">Reach</td>
            <td className="p-4 border-b border-gray-200 text-gray-700">Global, 24/7 availability</td>
            <td className="p-4 border-b border-gray-200 text-gray-600">Limited by geography</td>
          </tr>
          <tr className="bg-white">
            <td className="p-4 border-b border-gray-200 font-medium text-gray-800">Measurability</td>
            <td className="p-4 border-b border-gray-200 text-gray-700">Precise analytics and tracking</td>
            <td className="p-4 border-b border-gray-200 text-gray-600">Limited measurement options</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  </div>
)

const ValuePropSection: React.FC = () => {
  const industryTrends = [
    { icon: Smartphone, text: "Mobile-first design" },
    { icon: TrendingUp, text: "Performance optimization" },
    { icon: Users, text: "User experience focus" },
    { icon: ShieldCheck, text: "Security & compliance" }
  ]

  const marketInsights = [
    {
      id: "1",
      insight: "73% of consumers research companies online before making purchasing decisions"
    },
    {
      id: "2",
      insight: "67% of B2B purchases are influenced by digital research"
    },
    {
      id: "3",
      insight: "Mobile apps are projected to generate $935 billion in revenue by 2025"
    },
    {
      id: "4",
      insight: "88% of users are less likely to return to a website after a poor experience"
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
            Why Your Digital Presence Matters
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Today&apos;s business success is increasingly tied to digital presence. Whether you&apos;re looking to attract customers, streamline operations, or create new revenue streams, the right web or app solution is critical. Your online presence is often the first point of contact with potential customers. A well-designed website or application isn&apos;t just a digital business card - it&apos;s a powerful tool for growth.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <Statistic 
                    value={73}
                    suffix="%"
                    label="consumers research companies online"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <Statistic 
                    value={935}
                    prefix="$"
                    suffix="B"
                    label="projected app revenue by 2025"
                  />
                </div>
              </div>

              <ComparisonTable />

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Websites can be surprisingly affordable, especially after the initial development costs. Maintenance and hosting are minimal compared to the ongoing costs of traditional marketing, and they easily pay for themselves by driving engagement and growth. Websites also offer broad integrations, from reservations and scheduling to client portals and e-commerce.
              </motion.p>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <MarketInsightCard insights={marketInsights} />
              
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Industry Trends</h3>
                <p className="text-gray-700 mb-6">
                  As mobile usage continues to dominate, responsive, user-friendly, and 
                  optimized digital solutions are no longer optional—they&apos;re essential for staying competitive.
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
                <h3 className="text-2xl font-semibold mb-4">Ready to Boost Your Digital Presence?</h3>
                <p className="mb-6">
                  Let&apos;s create a powerful online strategy tailored to your business needs.
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