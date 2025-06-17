import { CheckCircle2, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PricingModels() {
  const pricingModels = [
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

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Pricing Models</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          We&apos;ll help you choose the pricing structure that works best for your project needs and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingModels.map((model, index) => (
          <Card
            key={index}
            className={`flex flex-col h-full transition-all duration-300 ${model.recommended ? "border-medium-blue shadow-lg hover:shadow-xl"  : "border-gray-200 hover:shadow-md"}`}
          >
            <CardHeader className="pb-4">
              {model.recommended && (
                <Badge className="w-fit mb-2 text-medium-blue bg-blue-100">
                  <Star className="h-3 w-3 mr-1" /> Recommended
                </Badge>
              )}
              <CardTitle className="text-xl">{model.name}</CardTitle>
              <CardDescription>{model.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-medium-blue shrink-0 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {model.note && (
                  <p className="text-xs text-gray-500 pt-2 ml-2">{model.note}</p>
                )}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Link href="/contact" className="w-full">
                <Button
                  variant={model.recommended ? "default" : "outline"}
                  className={`w-full ${model.recommended ? "text-white bg-medium-blue hover:bg-dark-blue-alt" : "border-medium-blue text-medium-blue hover:bg-blue-50"}`}
                >
                  {model.cta}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

    </section>
  )
}
