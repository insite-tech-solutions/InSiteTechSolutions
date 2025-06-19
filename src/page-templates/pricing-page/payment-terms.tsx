/**
 * @fileoverview Payment Terms Component
 * 
 * This component displays payment terms, policies, and billing procedures for client projects.
 * Features a gradient background section with glassmorphism cards and an informational alert.
 * Covers down payments, payment plans, late payment policies, and transparency practices.
 */

import { AlertCircle, Clock, FileText, Percent, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

/**
 * Type definition for payment term configuration
 */
interface PaymentTerm {
  /** React element containing the icon for the payment term */
  icon: React.ReactElement
  /** Display title of the payment term section */
  title: string
  /** Detailed description explaining the specific term or policy */
  description: string
}

/**
 * Configuration array for all payment terms and policies
 * Each term explains a specific aspect of the payment process and business policies
 */
const paymentTerms: PaymentTerm[] = [
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

/**
 * PaymentTerms Component
 * 
 * Renders payment terms and policies in a visually appealing gradient section
 * with glassmorphism card effects and an additional informational alert.
 * 
 * Features:
 * - Gradient background with glassmorphism card design
 * - Responsive grid layout (1 column mobile, 2 desktop)
 * - Icon-based visual representation for each term
 * - Semi-transparent cards with backdrop blur effects
 * - Informational alert with links to full terms
 * - Clear typography hierarchy with contrasting colors
 * - Accessible markup with proper ARIA labels
 * 
 * @returns {JSX.Element} The rendered payment terms section
 * 
 * @example
 * ```tsx
 * // Usage in a pricing page
 * import PaymentTerms from '@/page-templates/pricing-page/payment-terms'
 * 
 * export default function PricingPage() {
 *   return (
 *     <div>
 *       <PaymentTerms />
 *     </div>
 *   )
 * }
 * ```
 */
export default function PaymentTerms(): JSX.Element {
  return (
    <section aria-labelledby="payment-terms-title">
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="payment-terms-title" className="sr-only">Payment Terms & Policies</h2>

      {/* Main Content Section - Gradient background with glassmorphism cards */}
      <div className="rounded-xl mx-auto p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt mb-8">
        {/* Section Header - Title and introductory text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6 text-gray-50">
            Payment Terms & Policies
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Clear expectations and transparent policies for a smooth working relationship.
          </p>
        </div>

        {/* Payment Terms Grid - Glassmorphism cards with responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-2">
          {paymentTerms.map((term) => (
            <div 
              key={term.title.toLowerCase().replace(/\s+/g, '-')} 
              className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            >
              {/* Term Header - Icon and title */}
              <div className="flex items-center gap-4 mb-4">
                {/* Icon container with consistent styling */}
                <div className="p-2 rounded-full bg-blue-100">
                  {term.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-50">{term.title}</h3>
              </div>
              
              {/* Term Description */}
              <p className="text-gray-100">{term.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information Alert - Net 30 terms and links to full policies */}
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
