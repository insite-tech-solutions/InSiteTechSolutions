/**
 * @fileoverview CTA Section Component for Pricing Page
 * 
 * This component renders a call-to-action section encouraging users to start their project.
 * Features a list of key benefits with checkmark icons and an integrated contact form
 * with gradient background styling for visual appeal and lead generation.
 */

"use client";

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import ContactForm from "@/components/reusable-components/contact-form"

/**
 * Type definition for CTA feature items
 */
interface CTAFeature {
  /** Title of the feature or benefit */
  title: string
  /** Detailed description explaining the feature */
  description: string
}

/**
 * Animation variants for the CTA section component
 */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const featureVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const contactFormVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
  }
}

/**
 * Configuration array for CTA section features
 * Each feature highlights a key benefit or value proposition to encourage contact
 */
const ctaFeatures: CTAFeature[] = [
  {
    title: "Transparent Pricing",
    description: "Detailed breakdown of costs with no hidden fees or surprises",
  },
  {
    title: "Budget-Friendly Options",
    description: "Flexible pricing and payment plans for individuals, nonprofits, small businesses, and enterprises",
  },
  {
    title: "Scalable Solutions",
    description: "Start with what you need now and expand as your project or business grows",
  },
  {
    title: "Free Consultation",
    description: "No-obligation discussion to understand your needs and explore options",
  },
]

/**
 * CustomSolutionSection Component
 * 
 * Renders a comprehensive call-to-action section for the pricing page that encourages
 * potential clients to reach out for custom solutions and consultations.
 * 
 * @returns {JSX.Element} The rendered CTA section component
 * 
 * @example
 * ```tsx
 * // Usage in a pricing page
 * import CustomSolutionSection from '@/page-templates/pricing-page/cta-section'
 * 
 * export default function PricingPage() {
 *   return (
 *     <div>
 *       <CustomSolutionSection />
 *     </div>
 *   )
 * }
 * ```
 */
export default function CustomSolutionSection(): JSX.Element {
  return (
    <section className="max-w-4xl mx-auto space-y-12" aria-labelledby="cta-section-title">
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="cta-section-title" className="sr-only">Ready to Start Your Project?</h2>
      
      {/* Main Content Section - Header and features */}
      <div className="text-center">
        {/* Section Header - Compelling headline and persuasive copy */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Need a custom solution or still have questions? Every project is unique, and so is every budget. Get a free personalized consultation or estimate that fits your specific needs and financial situation.
          </p>
        </motion.div>
        
        {/* Key Benefits Section - Features list with checkmark icons */}
        <motion.div 
          className="space-y-6 max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {ctaFeatures.map((feature) => (
            <motion.div 
              key={feature.title.toLowerCase().replace(/\s+/g, '-')} 
              className="flex items-start gap-3 text-left"
              variants={featureVariants}
            >
              {/* Checkmark Icon - Visual indicator for each benefit */}
              <CheckCircle2 className="h-6 w-6 text-medium-blue shrink-0 mt-0.5" aria-hidden="true" />
              
              {/* Feature Content - Title and description */}
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Contact Form Section - Gradient background with integrated form */}
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={contactFormVariants}
      >
        <div className="bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt rounded-2xl p-2 md:p-6 shadow-lg">
          {/* Frosted Contact Form - Professional styling with gradient background */}
          <ContactForm variant="frosted" showHeader={true} />
        </div>
      </motion.div>
    </section>
  )
}