"use client";

import { CheckCircle2 } from "lucide-react"
import ContactForm from "@/components/reusable-components/contact-form"

export default function CustomSolutionSection() {
  return (
    <section className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Need a custom solution or still have questions? Every project is unique, and so is every budget. Get a free personalized consultation or estimate that fits your specific needs and financial situation.
        </p>
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-3 text-left">
            <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 text-medium-blue" />
            <div>
              <h3 className="font-semibold text-lg">Transparent Pricing</h3>
              <p className="text-muted-foreground">Detailed breakdown of costs with no hidden fees or surprises</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-left">
            <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 text-medium-blue" />
            <div>
              <h3 className="font-semibold text-lg">Budget-Friendly Options</h3>
              <p className="text-muted-foreground">Flexible pricing and payment plans for individuals, nonprofits, small businesses, and enterprises</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-left">
            <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 text-medium-blue" />
            <div>
              <h3 className="font-semibold text-lg">Scalable Solutions</h3>
              <p className="text-muted-foreground">Start with what you need now and expand as your project or business grows</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-left">
            <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 text-medium-blue" />
            <div>
              <h3 className="font-semibold text-lg">Free Consultation</h3>
              <p className="text-muted-foreground">No-obligation discussion to understand your needs and explore options</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt rounded-2xl p-2 md:p-6 shadow-lg">
          <ContactForm variant="frosted" showHeader={true} />
        </div>
      </div>
    </section>
  )
} 