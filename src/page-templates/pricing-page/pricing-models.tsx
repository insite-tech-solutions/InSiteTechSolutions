/**
 * @fileoverview Pricing Models Component
 * 
 * This component displays different pricing models available for tech services,
 * including hourly billing, hybrid pricing, per-project pricing, and monthly retainers.
 * Features a responsive card-based layout with recommended options highlighted.
 * 
 * @author InSite Tech Solutions
 * @version 1.0.0
 */

"use client"

import { CheckCircle2, Star } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

/**
 * Type definition for pricing model configuration
 */
interface PricingModel {
  /** Display name of the pricing model */
  name: string
  /** Brief description explaining when to use this model */
  description: string
  /** Array of key features and benefits */
  features: string[]
  /** Call-to-action button text */
  cta: string
  /** Whether this model is recommended (highlighted with special styling) */
  recommended: boolean
  /** Optional additional note or disclaimer */
  note?: string
}

/**
 * Animation variants for the pricing models component
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

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

/**
 * Configuration array for all available pricing models
 * Each model represents a different billing approach for client projects
 */
const pricingModels: PricingModel[] = [
  {
    name: "Hourly Billing",
    description: "Perfect for smaller jobs, troubleshooting, debugging, or projects with evolving scope.",
    features: [
      "Flexible engagement for variable scope projects",
      "Pay only for the time spent on your project",
      "Detailed time tracking and reporting",
      "Great for exploratory projects and ad-hoc requests",
      "Rates typically range from $40–100/hour, depending on complexity",
    ],
    cta: "Schedule a Consultation",
    recommended: false,
  },
  {
    name: "Hybrid Pricing",
    description: "Combines predictability and flexibility with milestone-based payments.",
    features: [
      "10-25% down payment to secure the project",
      "Remaining balance invoiced hourly every month or at defined project milestones",
      "Clear budget expectations with flexibility for changes",
      "Detailed invoices and billing statements",
      "Most popular option for balancing budgets and project flexibility",
    ],
    cta: "Get Started",
    recommended: true,
  },
  {
    name: "Per-Project Pricing",
    description: "Clear, upfront payments for projects with well-defined goals and scope.",
    features: [
      "Fixed price agreed upon before project begins",
      "Detailed project scope and deliverables",
      "Provides predictable budgeting",
      "Ideal for projects with clear requirements",
      "Detailed estimates provided after initial consultation",
    ],
    cta: "Request an Estimate",
    recommended: false,
    note: "* Due to the complexity of software development this is only available for certain well-defined projects",
  },
  {
    name: "Monthly Retainer",
    description: "Ideal for regular updates, maintenance, analytics, and ongoing consulting & support.",
    features: [
      "Reserved monthly capacity for your projects",
      "Priority support and faster response times",
      "Predictable monthly billing",
      "Discounted hourly rates compared to ad-hoc work",
      "Plans available to match your ongoing needs",
    ],
    cta: "Discuss Retainer Options",
    recommended: false,
  },
]

/**
 * PricingModels Component
 * 
 * Renders a comprehensive overview of available pricing models with detailed
 * feature lists and call-to-action buttons. Highlights the recommended option
 * with special styling and badges.
 * 
 * Features:
 * - Responsive grid layout (1 column mobile, 2 tablet, 4 desktop)
 * - Recommended model highlighting with special border and badge
 * - Feature lists with checkmark icons
 * - Conditional styling based on recommendation status
 * - Accessible markup with proper ARIA labels
 * - Smooth hover transitions and visual feedback
 * 
 * @returns {JSX.Element} The rendered pricing models section
 * 
 * @example
 * ```tsx
 * // Usage in a pricing page
 * import PricingModels from '@/page-templates/pricing-page/pricing-models'
 * 
 * export default function PricingPage() {
 *   return (
 *     <div>
 *       <PricingModels />
 *     </div>
 *   )
 * }
 * ```
 */
export default function PricingModels(): JSX.Element {
  return (
    <section aria-labelledby="pricing-models-title">
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="pricing-models-title" className="sr-only">Pricing Models</h2>

      {/* Section Header - Title and introductory text */}
      <motion.div 
        className="text-center mb-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Models</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          We&apos;ll help you choose the pricing structure that works best for your project needs and budget.
        </p>
      </motion.div>

      {/* Pricing Models Grid - Responsive layout with equal height cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {pricingModels.map((model) => (
          <motion.div
            key={model.name.toLowerCase().replace(/\s+/g, '-')}
            variants={cardVariants}
          >
            <Card
              className={`flex flex-col h-full transition-all duration-300 ${
                model.recommended 
                  ? "border-medium-blue shadow-lg hover:shadow-xl"  
                  : "border-gray-200 hover:shadow-md"
              }`}
            >
              {/* Card Header - Title, badge, and description */}
              <CardHeader className="pb-4">
                {/* Recommended Badge - Only shown for recommended models */}
                {model.recommended && (
                  <Badge className="w-fit mb-2 text-medium-blue bg-blue-100">
                    <Star className="h-3 w-3 mr-1" /> Recommended
                  </Badge>
                )}
                <CardTitle className="text-xl">{model.name}</CardTitle>
                <CardDescription>{model.description}</CardDescription>
              </CardHeader>

              {/* Card Content - Features list with flex-grow for equal height */}
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {/* Feature List - Each feature with checkmark icon */}
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-medium-blue shrink-0 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  
                  {/* Optional Note - Displayed below features if present */}
                  {model.note && (
                    <p className="text-xs text-gray-500 pt-2 ml-2">{model.note}</p>
                  )}
                </ul>
              </CardContent>

              {/* Card Footer - Call-to-action button */}
              <CardFooter className="flex flex-col space-y-2">
                <Link href="/contact" className="w-full">
                  <Button
                    variant={model.recommended ? "default" : "outline"}
                    className={`w-full ${
                      model.recommended 
                        ? "text-white bg-medium-blue hover:bg-dark-blue-alt" 
                        : "border-medium-blue text-medium-blue hover:bg-blue-50"
                    }`}
                  >
                    {model.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
