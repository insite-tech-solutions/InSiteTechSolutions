// KeyBenefits.tsx
'use client'
import { motion, Variants } from 'framer-motion'
import { TrendingUp, Settings, Code, Cloud, Shield } from 'lucide-react'

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

interface BenefitCardProps {
  icon: React.ElementType
  title: string
  description: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={fadeInUp}
    className="flex flex-col items-center text-center p-6 bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl shadow-md hover:shadow-lg transition-all"
  >
    <div className="p-3 rounded-full bg-blue-100 mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-800">{description}</p>
  </motion.div>
)

const KeyBenefits: React.FC = () => {
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
    <>
      <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">
          Key Benefits
        </h3>
        <p className="text-lg text-gray-800">
          Our custom software solutions provide measurable improvements to your business operations and research capabilities.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </>
  )
}

export default KeyBenefits