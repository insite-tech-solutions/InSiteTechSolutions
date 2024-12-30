// index.tsx
'use client'
import { motion, Variants } from 'framer-motion'
import CoreServices from './CoreServices'
import KeyBenefits from './KeyBenefits'
import { ArrowRight } from 'lucide-react'

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

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

const ServiceScopeSection: React.FC = () => {
  return (
    <section className="p-2 bg-gray-50">

      <CoreServices />
      <div className="p-6">
        <KeyBenefits />
        <motion.div
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Explore Our Services
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceScopeSection