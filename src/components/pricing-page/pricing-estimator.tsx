"use client";

import React, { useEffect, useRef, useMemo } from "react"
import { motion, useInView, useAnimation, Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import PriceCalculator from "@/components/reusable-components/price-calculator"
import { getIcon } from "@/utils/icon-registry"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const homepagePriceFactors = [
  {
    title: "Project Scope",
    items: [
      "Number of features and functionalities",
      "Intricacy of design and UX requirements",
      "Integration with third-party services",
    ],
    icon: "Layout",
  },
  {
    title: "Technical Complexity",
    items: [
      "Choice of programming languages and frameworks",
      "Database selection and architecture",
      "Deployment and hosting environment",
    ],
    icon: "Code",
  },
  {
    title: "Timeline",
    items: [
      "Standard delivery vs. expedited requests",
      "Phased rollout or full launch",
      "Resource allocation based on deadlines",
    ],
    icon: "Clock",
  },
]

interface PriceFactorProps {
  title: string
  items: string[]
  icon: string
}

const PriceFactorCard: React.FC<PriceFactorProps> = ({ title, items, icon }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const Icon = useMemo(() => getIcon(icon), [icon])

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="bg-white rounded-lg shadow-md border border-gray-200 p-0 hover:shadow-lg transition-all"
    >
      <div className="w-full rounded-t-lg bg-gradient-to-tr from-mild-blue to-blue-900 flex items-center gap-3 min-h-[56px] px-4 py-3">
        {Icon && <Icon className="h-7 w-7 text-white flex-shrink-0" />}
        <h4 className="text-xl font-semibold text-white ml-2">{title}</h4>
      </div>
      <ul className="space-y-3 p-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <ArrowRight className="h-4 w-4 text-medium-blue-alt mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
const PriceFactor = React.memo(PriceFactorCard)

export default function PricingEstimator() {
  return (
    <section className="py-8 w-full" aria-label="Pricing Estimator">
      <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">Interactive Pricing Estimator</h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Get a ballpark estimate for your project by selecting your requirements.
          </p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="max-w-5xl mx-auto px-2"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-2xl font-semibold text-gray-800 text-center mb-8 mt-4"
        >
          Primary Project Cost Factors
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {homepagePriceFactors.map((factor) => (
            <PriceFactor
              key={factor.title}
              title={factor.title}
              items={factor.items}
              icon={factor.icon}
            />
          ))}
        </div>
          <PriceCalculator />
      </motion.div>
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <p className="text-gray-600 text-base">
          Remember, this estimator provides ballpark figures. For a detailed quote tailored to your specific needs, please schedule a consultation.
        </p>
      </div>
    </section>
  )
}
