import Image from "next/image"
import NewsletterForm from "@/components/reusable-components/newsletter-form"

export default function NewsletterSubscription() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Left column - Company info */}
          <div className="w-full md:w-1/2 space-y-6 flex flex-col">
            <div className="w-full flex justify-start">
              <Image
                src="/Insite Tech Solutions Light.svg"
                alt="InSite Tech Solutions Logo"
                width={600}
                height={120}
                className="w-full h-auto max-w-[400px] md:max-w-[90%]"
                priority
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-medium-blue font-bold leading-tight">
                Become an InSite Tech InSider for the Latest Tech Tips & Exclusive Promotions
              </h3>
              <p className="text-gray-700">
                Get exclusive access to tech insites and special offers 
                delivered directly to your inbox. Our newsletter features tech strategies, project spotlights, 
                and expert advice, and exclusive offers to help your business leverage technology for success.
              </p>
            </div>
          </div>

          {/* Right column - Subscription form */}
          <div className="w-full md:w-1/2">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  )
}
