"use client";

import { motion } from "framer-motion";

export default function ContactPageCTASection() {
  return (
    <div className="pb-8 py-8">
      <section
        className={
          "container mx-auto relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-blue to-blue-800 border-2 border-light-blue shadow-lg hover:shadow-xl text-white py-8 lg:py-16 px-8 transition-all duration-300"
        }
        aria-label="Contact page call to action section"
      >
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto">
                We&apos;re excited to help you bring your ideas to life. Whether you have a detailed plan or just a spark of inspiration, our team is here to support you every step of the way. Reach out and let&apos;s make something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 