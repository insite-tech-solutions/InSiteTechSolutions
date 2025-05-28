import TailwindButton from "@/components/reusable-components/tailwind-button"
import ContactForm from "@/components/reusable-components/contact-form"
import Link from "next/link"

export default function CTASection() {

  return (
    <section className="relative pt-6 pb-12">
      <div className="bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt rounded-2xl px-2 py-8 md:px-6 md:py-12 max-w-5xl mx-auto shadow-lg">
        <div className="container mx-auto px-0">
          <div className="text-center text-white mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Ideas Into Digital Solutions</h2>
            <p className="text-xl">(123) 456-7890 | hello@yourcompany.com</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <TailwindButton 
                href="/contact" 
                className="bg-white rounded-full font-medium shadow-md transition-all duration-200"
              >
                Schedule Free Consultation
              </TailwindButton>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          <ContactForm 
            variant="frosted"
            showHeader={true}
            className="max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
