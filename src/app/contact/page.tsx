import type { Metadata } from "next"
import ContactForm from "@/components/reusable-components/contact-form"
import ContactInfo from "@/components/contact-page/contact-info"
import LocationImageSection from "@/components/contact-page/location-image-section"
import Header from "@/components/site-header/header"
import Footer from "@/components/site-footer/footer"
import ContactPageCTASection from "@/components/contact-page/cta-section"

export const metadata: Metadata = {
  title: "Contact Us | Tech Services",
  description:
    "Get in touch with our team for web development, software solutions, data analytics, and consulting services.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-medium-blue to-blue-800 text-white text-left py-8 px-4 mt-[104px]">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
      <div className="bg-gray-50 text-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden mb-16 lg:mb-24">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let&apos;s Build Something
                <span className="block text-medium-blue">Amazing Together</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have a project in mind or need expert tech consulting? We&apos;re here to help turn your ideas into reality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="flex flex-col gap-8 lg:gap-12">
              <ContactInfo />
              <LocationImageSection />
            </div>
            <ContactForm />
          </div>
          <ContactPageCTASection />
        </div>
      </div>
      
      <Footer />
    </>
  )
}
