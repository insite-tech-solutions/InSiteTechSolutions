import { CreditCard, Wallet, Globe, ShieldCheck, Clock, Landmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function PaymentOptions() {
  const paymentMethods = [
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

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Payment Methods</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Choose from a variety of secure payment options that work best for your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paymentMethods.map((method, index) => (
          <Card key={index} className="border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              {method.icon}
              <CardTitle className="text-xl">{method.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">{method.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Secure Transactions</h3>
            <p className="text-gray-600">
              All payments are processed through secure, encrypted channels with detailed invoicing and receipts.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-3 flex-shrink-0">
            <div className="flex justify-center md:justify-start">
              <Image src="/Stripe.png" alt="Stripe" width={60} height={40} className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image src="/Visa.png" alt="Visa" width={60} height={40} className="h-9 mt-1.5 w-auto" />
              <Image src="/Mastercard.png" alt="Mastercard" width={60} height={40} className="h-10 w-auto" />
              <Image src="/Amex.png" alt="American Express" width={60} height={40} className="h-9 mt-1 w-auto" />
              <Image src="/ApplePay.png" alt="Apple Pay" width={60} height={40} className="h-10 w-auto" />
              <Image src="/GooglePay.png" alt="Google Pay" width={60} height={40} className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
