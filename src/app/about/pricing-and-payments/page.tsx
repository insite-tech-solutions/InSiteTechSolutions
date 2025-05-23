import PricingModels from "@/components/pricing-page/pricing-models"
import PaymentOptions from "@/components/pricing-page/payment-options"
import PaymentTerms from "@/components/pricing-page/payment-terms"
import PricingEstimator from "@/components/pricing-page/pricing-estimator"
import CustomSolutionSection from "@/components/pricing-page/cta-section"
import type { Metadata } from "next"
import Header from "@/components/site-header/header"
import Footer from "@/components/site-footer/footer"
import HeroSection from "@/components/pricing-page/hero-section"
import FAQSection from "@/page-templates/service-page/faq-section/faq-section"
import pricingFAQContent from "@/components/pricing-page/pricing-faq-content"

export const metadata: Metadata = {
  title: "Pricing & Payment Options | Your Tech Services",
  description:
    "Flexible pricing models and secure payment options for web development, custom software, and data analytics services.",
}

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="pt-[var(--navbar-height,88px)] min-h-screen flex flex-col bg-gray-50">
        <HeroSection />
        <main className="flex-1 text-gray-900 container mx-auto px-4 py-16 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Flexible Solutions for Every Project
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We believe in transparent, flexible pricing that works for your budget while respecting everyone&apos;s time and investment. 
          Whether you&apos;re an individual with a passion project, a freelancer building your online presence, a nonprofit advancing your mission, 
          an academic researcher, a growing small business, or an established enterprise with complex requirements—we&apos;ll work together 
          to find a solution that delivers genuine value for both parties.
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
          <p className="text-blue-800 font-medium">
            Our approach: Quality work at fair rates, with payment plans and pricing models designed to fit your specific situation and budget.
          </p>
          </div>
        </div>
          <PricingModels />
          <div className="my-24">
            <PaymentOptions />
          </div>
          <div className="my-24">
            <PaymentTerms />
          </div>
          <div className="my-24">
            <PricingEstimator />
          </div>
          <div className="my-24">
            <FAQSection content={pricingFAQContent} />
          </div>
          <div className="my-24">
            <CustomSolutionSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
