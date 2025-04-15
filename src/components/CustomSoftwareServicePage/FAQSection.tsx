"use client"

import type React from "react"

import { motion, useInView, useAnimation, type Variants, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, MessageCircle, Clock, Code, Settings, ArrowRight } from "lucide-react"

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const rotateChevron: Variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
}

interface FAQItemProps {
  question: string
  answer: string
  icon: React.ElementType
  isOpen: boolean
  onToggle: () => void
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon: Icon, isOpen, onToggle }) => {
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
      className="bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-500 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-50 transition-colors duration-300">
              <Icon className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">{question}</h3>
          </div>
          <div className="flex-shrink-0">
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <ChevronDown className="h-5 w-5 text-blue-600" />
            </motion.div>
          </div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      icon: MessageCircle,
      question: "Do I need custom software, or can I use existing solutions?",
      answer:
        "We assess your business needs and processes to determine whether a custom solution or an existing platform is the best fit. Custom software offers tailored functionalities and scalability that off-the-shelf solutions may lack.",
    },
    {
      icon: Clock,
      question: "How long does custom software development take?",
      answer: "Typical projects range from 3-6 months, depending on complexity and scope.",
    },
    {
      icon: Code,
      question: "Do you offer ongoing support and maintenance for custom software?",
      answer:
        "Yes, we offer comprehensive maintenance and support plans to ensure your software remains up-to-date, secure, and performing optimally.",
    },
    {
      icon: Settings,
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in system integration and can connect with most existing platforms and databases.",
    },
  ]

  return (
    <section className="pb-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren}>
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-md font-medium mb-6">
              Frequently Asked Questions (FAQs)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Got Questions? We've Got Answers</h2>
            <p className="text-lg text-gray-600">
              Find quick answers to commonly asked questions about our services and process.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  {...faq}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Call-to-Action Link */}
            <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
              <a
                href="/faq"
                className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                View all frequently asked questions
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
