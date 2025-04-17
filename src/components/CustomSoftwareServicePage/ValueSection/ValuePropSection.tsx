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

import TailwindButton from '@/components/reusable-components/tailwind-button'

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
      <div className="text-4xl font-bold text-medium-blue-alt">
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
      className="bg-white rounded-lg shadow-md border border-gray-200 hover:border-medium-blue-alt transition-all hover:shadow-lg p-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon className="h-6 w-6 text-medium-blue-alt" />
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

// Add a new component for inline animated numbers
interface InlineStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

const InlineStat: React.FC<InlineStatProps> = ({ value, suffix = '', prefix = '' }) => {
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
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="text-2xl font-bold text-medium-blue-alt inline-flex items-center"
    >
      {prefix}{count}{suffix}
    </motion.span>
  )
}

// Update the market insights to use inline stats
const marketInsights = [
  {
    id: "1",
    content: <>
      <InlineStat value={78} suffix="%" /> of businesses report improved efficiency after implementing custom software solutions.
    </>
  },
  {
    id: "2",
    content: <>
      Organizations save an average of <InlineStat value={27.3} suffix="h" /> per employee monthly through process automation.
    </>
  },
  {
    id: "3",
    content: <>
      <InlineStat value={89} suffix="%" /> of companies cite custom software as a key factor in maintaining competitive advantage.
    </>
  },
  {
    id: "4",
    content: <>
      Custom solutions reduce operational costs by an average of <InlineStat value={22} suffix="%" /> over 3 years.
    </>
  },
  {
    id: "5",
    content: <>
      Companies report an average <InlineStat value={143} suffix="%" /> return on investment within 5 years of custom software implementation.
    </>
  }
]

// Update the MarketInsightCard component
interface MarketInsightCardProps {
  insights: {
    id: string;
    content: React.ReactNode;
  }[];
}

const MarketInsightCard: React.FC<MarketInsightCardProps> = ({ insights }) => (
  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Market Insights</h3>
    <motion.ul
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {insights.map((item) => (
        <motion.li
          key={item.id}
          variants={fadeInUp}
          className="flex items-start gap-3"
        >
          <CheckCircle className="h-5 w-5 text-medium-blue-alt mt-2 flex-shrink-0" />
          <span className="text-gray-700 text-lg">
            {item.content}
          </span>
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

  return (
    <section className="mt-16 mb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-12 text-center text-gray-900"
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
                className="bg-gradient-to-br from-medium-blue to-blue-800 border border-medium-blue text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <h3 className="text-2xl font-semibold mb-4">Ready to Optimize Your Operations?</h3>
                <p className="mb-6">
                  Let&apos;s develop a custom software solution tailored to your unique business needs.
                </p>
                <TailwindButton href="/contact" className="bg-gray-50 rounded-lg font-semibold shadow-md transition-all duration-200">Get Started</TailwindButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValuePropSection