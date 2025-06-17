/**
 * Contact Page Template
 *
 * This component aggregates all the sections of the contact page into a single,
 * organized template. It uses the shared Layout component to ensure visual consistency
 * with the rest of the site, mirroring the architecture of other page templates.
 */
import React, { useEffect } from 'react';
import Layout from '@/components/reusable-components/layout';
import ContactInfo from "@/page-templates/contact-page/contact-info";
import LocationImageSection from "@/page-templates/contact-page/location-image-section";
import ContactPageCTASection from "@/page-templates/contact-page/cta-section";
import ContactForm from "@/components/reusable-components/contact-form";
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';

const ContactPageContent = () => {
  const { setIsPageLoading } = usePageLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsPageLoading]);

  return (
    <>
      <div className="bg-gradient-to-r from-medium-blue to-blue-800 text-white text-left py-8 px-4 mt-[104px]">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
      <Layout>
        <div className="py-16 lg:py-20">
        
          <div className="relative overflow-hidden mb-16 lg:mb-20">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-2">
                Let&apos;s Build Something
                <span className="block text-medium-blue">Amazing Together</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have a project in mind or need expert tech consulting? We&apos;re here to help turn your ideas into reality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="flex flex-col gap-8 lg:gap-10">
              <ContactInfo />
              <LocationImageSection />
              <ContactPageCTASection />
            </div>
            <ContactForm />
          </div>
        </div>
      </Layout>
    </>
  );
};

const ContactPageLoaderWrapper: React.FC = () => {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {isPageLoading && <PageTransitionLoader />}
      <ContactPageContent />
    </>
  );
};

const ContactPageTemplate = () => {
  return (
    <PageLoadingProvider>
      <ContactPageLoaderWrapper />
    </PageLoadingProvider>
  );
};

export default ContactPageTemplate; 