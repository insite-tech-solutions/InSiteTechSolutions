import { AlertCircle, Clock, FileText, Percent, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PaymentTerms() {
  const paymentTerms = [
    {
      icon: <Percent className="h-6 w-6 text-medium-blue-alt" />,
      title: "Down Payment & Invoicing",
      description:
        "Typically, a 10-25% non-refundable deposit is required to book your project and begin initial planning. The down payment is credited toward your project's total cost and deducted from subsequent invoices. Remaining balances are invoiced monthly or upon milestone completions as agreed in your contract.",
    },
    {
      icon: <Clock className="h-6 w-6 text-medium-blue-alt" />,
      title: "Payment Plans",
      description:
        "We offer flexible payment plans for select projects with down payments plus scheduled invoices at predetermined milestones. Custom arrangements are available and can be discussed during your initial consultation to find a solution that works for your budgetary needs.",
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-medium-blue-alt" />,
      title: "Late Payments",
      description:
        "Payments more than 7 days overdue will incur a 5% late fee every week thereafter. Projects may pause after 14 days overdue until payment is resolved. We believe in clear communication and will always work with you to resolve any payment issues before they become problems.",
    },
    {
      icon: <FileText className="h-6 w-6 text-medium-blue-alt" />,
      title: "Transparency & Estimates",
      description:
        "We strive for accuracy, but estimates are ballpark figures based on initial project scope. Any changes or scope expansions will always be discussed clearly and agreed upon by both parties before proceeding to avoid unexpected costs.",
    },
  ]

  return (
    <section>
      <div className="rounded-xl mx-auto p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt mb-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mt-6 mb-6 text-gray-50">Payment Terms & Policies</h2>
        <p className="text-xl text-gray-100 max-w-3xl mx-auto">
          Clear expectations and transparent policies for a smooth working relationship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
        {paymentTerms.map((term, index) => (
          <div key={index} className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-full bg-blue-100">
                {term.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-50">{term.title}</h3>
            </div>
            <p className="text-gray-100">{term.description}</p>
          </div>
        ))}
      </div>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <Info className="h-5 w-5 text-blue-600" />
        <AlertTitle className="text-blue-700 mt-1">About Payment Terms</AlertTitle>
        <AlertDescription className="text-gray-600">
          Given the complex nature of software development, we can only provide detailed quotes for well-defined projects. For
          projects with evolving requirements, we recommend our hybrid pricing model which balances predictability with
          flexibility. We&apos;ll always work with you to find the most appropriate pricing structure for your specific
          needs. We typically follow a Net 30 payment term, requiring invoices to be paid in full within 30 days of receipt.
          <br /><br />
          Each project includes a custom contract tailored to the specific requirements. You can view our full{" "}
          <a href="/about/privacy-policy-and-terms" className="text-blue-600 hover:text-blue-800 underline">
            Terms of Service and Privacy Policy
          </a>{" "}
          for complete details on our policies and procedures.
        </AlertDescription>
      </Alert>
    </section>
  )
}
