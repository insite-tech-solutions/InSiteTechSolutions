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
      <div className="container rounded-xl mx-auto p-6 bg-gradient-to-br from-medium-blue via-blue-800 to-blue-600">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-50">
              Specialized Custom Software Development
            </h2>
            <p className="text-lg text-gray-50 leading-relaxed">
              We develop custom software that addresses your specific business or research objectives, whether that&apos;s automating workflows, integrating systems, or solving complex computational problems.
            </p>
          </motion.div>
          <CoreServices />
        </motion.div>
      </div>
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