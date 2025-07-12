/**
 * @fileoverview Payment Methods Component
 * 
 * This component displays available payment methods and options for client transactions,
 * including credit cards, digital wallets, bank transfers, and escrow services.
 * Features a responsive card layout with security assurance section and payment provider logos.
 * 
 */

import { CreditCard, Wallet, Globe, ShieldCheck, Clock, Landmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

/**
 * Type definition for payment method configuration
 */
interface PaymentMethod {
  /** React element containing the icon for the payment method */
  icon: React.ReactElement
  /** Display title of the payment method */
  title: string
  /** Detailed description explaining the payment method and its benefits */
  description: string
}

/**
 * Configuration array for all available payment methods
 * Each method represents a different way clients can pay for services
 */
const paymentMethods: PaymentMethod[] = [
  {
    icon: <CreditCard className="h-8 w-8 mb-4 text-medium-blue" />,
    title: "Credit/Debit Cards",
    description: "Secure payment via Visa, Mastercard, Discover, and American Express through Stripe's secure payment gateway.",
  },
  {
    icon: <Wallet className="h-8 w-8 mb-4 text-medium-blue" />,
    title: "Digital Wallets",
    description:
      "Convenient payments through Apple Pay & Google Pay via Stripe, or Venmo Business for quick and secure transactions.",
  },
  {
    icon: <Landmark className="h-8 w-8 mb-4 text-medium-blue" />,
    title: "Bank Transfers",
    description:
      "Direct bank transfers via Stripe for domestic clients, with detailed invoicing and payment tracking.",
  },
  {
    icon: <Globe className="h-8 w-8 mb-4 text-medium-blue" />,
    title: "International Transfers",
    description:
      "Wise (formerly TransferWise) for international clients, offering competitive exchange rates and lower fees.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 mb-4 text-medium-blue" />,
    title: "Escrow Services",
    description:
      "Third-party escrow services available for long term projects or those requiring additional security via Escrow.com, Upwork, or Fiverr.",
  },
  {
    icon: <Clock className="h-8 w-8 mb-4 text-medium-blue" />,
    title: "Milestone Payments",
    description:
      "Break down large projects into manageable payment milestones tied to specific deliverables and project phases.",
  },
]

/**
 * PaymentOptions Component
 * 
 * Renders a comprehensive overview of available payment methods with detailed
 * descriptions and a security assurance section featuring payment provider logos.
 * 
 * Features:
 * - Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
 * - Icon-based visual representation for each payment method
 * - Hover effects with smooth transitions
 * - Security assurance section with provider logos
 * - Accessible markup with proper ARIA labels
 * - Optimized images with Next.js Image component
 * - Responsive logo arrangement for different screen sizes
 * 
 * @returns {JSX.Element} The rendered payment methods section
 * 
 * @example
 * ```tsx
 * // Usage in a pricing page
 * import PaymentOptions from '@/page-templates/pricing-page/payment-methods'
 * 
 * export default function PricingPage() {
 *   return (
 *     <div>
 *       <PaymentOptions />
 *     </div>
 *   )
 * }
 * ```
 */
export default function PaymentOptions(): JSX.Element {
  return (
    <section aria-labelledby="payment-methods-title">
      <div className="container mx-auto">
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="payment-methods-title" className="sr-only">Payment Methods</h2>

      {/* Section Header - Title and introductory text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment Methods</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Choose from a variety of secure payment options that work best for your needs.
        </p>
      </div>

      {/* Payment Methods Grid - Responsive layout with hover effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {paymentMethods.map((method) => (
          <Card 
            key={method.title.toLowerCase().replace(/\s+/g, '-')} 
            className="border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300"
          >
            {/* Card Header - Icon and title */}
            <CardHeader className="pb-2">
              {/* Payment method icon with consistent styling */}
              {method.icon}
              <CardTitle className="text-xl">{method.title}</CardTitle>
            </CardHeader>
            
            {/* Card Content - Method description */}
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                {method.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Security Assurance Section - Trust indicators and payment provider logos */}
      <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Security messaging */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Secure Transactions</h3>
            <p className="text-gray-600">
              All payments are processed through secure, encrypted channels with detailed invoicing and receipts.
            </p>
          </div>
          
          {/* Payment Provider Logos - Responsive layout */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 flex-shrink-0">
            {/* Primary processor logo (Stripe) */}
            <div className="flex justify-center md:justify-start">
              <Image 
                src="/payment-icons/Stripe.png" 
                alt="Stripe" 
                width={60} 
                height={40} 
                className="h-16 w-auto object-contain" 
              />
            </div>
            
            {/* Supported payment method logos */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image 
                src="/payment-icons/Visa.png" 
                alt="Visa" 
                width={60} 
                height={40} 
                className="h-9 mt-1.5 w-auto" 
              />
              <Image 
                src="/payment-icons/Mastercard.png" 
                alt="Mastercard" 
                width={60} 
                height={40} 
                className="h-10 w-auto" 
              />
              <Image 
                src="/payment-icons/Amex.png" 
                alt="American Express" 
                width={60} 
                height={40} 
                className="h-9 mt-1 w-auto" 
              />
              <Image 
                src="/payment-icons/ApplePay.png" 
                alt="Apple Pay" 
                width={60} 
                height={40} 
                className="h-10 w-auto" 
              />
              <Image 
                src="/payment-icons/GooglePay.png" 
                alt="Google Pay" 
                width={60} 
                height={40} 
                className="h-10 w-auto" 
              />
            </div>
          </div>
        </div>
      </div>
      </div>  
    </section>
  )
}
