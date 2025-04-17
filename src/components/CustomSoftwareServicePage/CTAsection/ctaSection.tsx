"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import TailwindButton from '@/components/reusable-components/tailwind-button';

const FinalCTASection: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-24 py-12">
      <section className="container mx-auto relative rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-medium-blue to-blue-800 border-2 border-medium-blue shadow-lg text-white py-16 px-6">
        {/* Decorative Background Elements */}  
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-purple-300/30 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/3 w-64 h-64 rounded-full bg-blue-300/30 blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/20"
              >
                Take the Next Step
              </motion.div> */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto">
                Let&apos;s discuss how custom software can streamline your operations and drive growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TailwindButton href="/contact" className="bg-white rounded-full font-medium shadow-md transition-all duration-200">Schedule free Consultation</TailwindButton>


              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FinalCTASection
