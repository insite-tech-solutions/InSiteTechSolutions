import { AlertCircle, Clock, FileText, Percent } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PaymentTerms() {
  const paymentTerms = [
    {
      icon: <Percent className="h-6 w-6 text-blue-600" />,
      title: "Down Payment & Invoicing",
      description:
        "Typically, a 10-25% non-refundable deposit is required to book your project and begin initial planning. The down payment is credited toward your project's total cost and deducted from subsequent invoices. Remaining balances are invoiced weekly or upon milestone completions as agreed in your contract.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Payment Plans",
      description:
        "We offer flexible payment plans for select projects with down payments plus scheduled invoices at predetermined milestones. Custom arrangements are available and can be discussed during your initial consultation to find a solution that works for your budgetary needs.",
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
      title: "Late Payments",
      description:
        "Payments more than 7 days overdue will incur a 5% late fee. Projects may pause after 14 days overdue until payment is resolved. We believe in clear communication and will always work with you to resolve any payment issues before they become problems.",
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Transparency & Estimates",
      description:
        "We strive for accuracy, but estimates are ballpark figures based on initial project scope. Any changes or scope expansions will always be discussed clearly and agreed upon by both parties before proceeding to avoid unexpected costs.",
    },
  ]

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Payment Terms & Policies</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Clear expectations and transparent policies for a smooth working relationship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {paymentTerms.map((term, index) => (
          <Card key={index} className="border border-gray-200">
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <div className="mt-1">{term.icon}</div>
              <div>
                <CardTitle className="text-xl">{term.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{term.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <AlertCircle className="h-5 w-5 text-blue-600" />
        <AlertTitle className="text-blue-700">About Project Quotes</AlertTitle>
        <AlertDescription className="text-gray-600">
          Given the complex nature of software development, we provide detailed quotes for well-defined projects. For
          projects with evolving requirements, we recommend our hybrid pricing model which balances predictability with
          flexibility. We&apos;ll always work with you to find the most appropriate pricing structure for your specific
          needs.
        </AlertDescription>
      </Alert>
    </section>
  )
}
