import { CheckCircle2, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PricingModels() {
  const pricingModels = [
    {
      name: "Hourly Billing",
      description: "Perfect for smaller jobs, maintenance, debugging, or projects with evolving scope.",
      features: [
        "Flexible engagement for variable scope projects",
        "Pay only for the time spent on your project",
        "Detailed time tracking and reporting",
        "Great for maintenance and ongoing support",
        "Rates typically range from $40–100/hour, depending on complexity",
      ],
      cta: "Schedule a Consultation",
      recommended: false,
    },
    {
      name: "Hybrid Pricing",
      description: "Combines predictability and flexibility with milestone-based payments.",
      features: [
        "25% down payment to secure the project",
        "Remaining balance invoiced hourly or at defined project milestones",
        "Clear budget expectations with flexibility for changes",
        "Balanced risk sharing between client and developer",
        "Most popular option for balancing clear budgets with project flexibility",
      ],
      cta: "Get Started",
      recommended: true,
    },
    {
      name: "Per-Project Pricing",
      description: "Clear, upfront quotes for projects with well-defined goals and scope.",
      features: [
        "Fixed price agreed upon before project begins",
        "Detailed project scope and deliverables",
        "Predictable budgeting with no surprises",
        "Ideal for projects with clear requirements",
        "Detailed estimates provided after initial consultation",
      ],
      cta: "Request a Quote",
      recommended: false,
    },
    {
      name: "Monthly Retainer",
      description: "Ideal for regular updates, maintenance, analytics, and ongoing consulting.",
      features: [
        "Reserved monthly capacity for your projects",
        "Priority support and faster response times",
        "Predictable monthly billing",
        "Discounted hourly rates compared to ad-hoc work",
        "Custom plans available to match your ongoing needs",
      ],
      cta: "Discuss Retainer Options",
      recommended: false,
    },
  ]

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Pricing Models</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the pricing structure that works best for your project needs and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingModels.map((model, index) => (
          <Card
            key={index}
            className={`flex flex-col h-full ${model.recommended ? "border-blue-500 shadow-lg" : "border-gray-200"}`}
          >
            <CardHeader className="pb-4">
              {model.recommended && (
                <Badge className="w-fit mb-2 bg-blue-500 hover:bg-blue-600">
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
                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={model.recommended ? "default" : "outline"}
                className={`w-full ${model.recommended ? "bg-blue-600 hover:bg-blue-700" : "border-blue-600 text-blue-600 hover:bg-blue-50"}`}
              >
                {model.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

    </section>
  )
}
