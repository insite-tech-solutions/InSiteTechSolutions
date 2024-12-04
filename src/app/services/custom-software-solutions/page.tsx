'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import ValuePropSection from '@/components/CustomSoftwareServicePage/ValuePropSection';
import ServiceScopeSection from '@/components/CustomSoftwareServicePage/ServiceScopeSection';
import ApplicationsSection from '@/components/CustomSoftwareServicePage/ApplicationsSection';
//import ProcessSection from '@/components/CustomSoftwareServicePage/ProcessSection';
import PriceSection from '@/components/CustomSoftwareServicePage/PriceSection';
import InSiteAdvantageSection from '@/components/CustomSoftwareServicePage/InsiteAdvantageSection';
import FAQSection from '@/components/CustomSoftwareServicePage/FAQSection';


import ProcessSection from '@/components/CustomSoftwareServicePage/ProcessSection/Process';



const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-tr from-blue-600 to-dark-blue text-white py-24 px-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Custom Software Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
          Turn your technical challenges into opportunities with tailored software
        </p>
        <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl drop-shadow-lg">
          From streamlining operations to solving complex computational problems, we create custom software that perfectly aligns with your business processes or research goals. Our solutions combine innovative technology with practical business sense to deliver measurable results.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Start Your Project Today
        </Link>
        <div className="mt-12">
          <Image
            src="/graphics/responsive-design.gif" // Ensure this path is correct
            alt="Responsive Design Animation"
            width={600}
            height={400}
            className="mx-auto rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        {/* Add any decorative SVGs or shapes here for visual enhancement */}
      </div>
    </section>
  );
};

const FinalCTASection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          Let&apos;s discuss how custom software can streamline your operations and drive growth.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Schedule Free Consultation
        </Link>
      </div>
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        {/* Add any decorative SVGs or shapes here for visual enhancement */}
      </div>
    </section>
  );
};


const CSSolPage = () => {
    return (
        <div>
        <Head>
          <title>Custom Software Solutions | InSite Tech</title>
          <meta
            name="description"
            content="Transform your ideas into powerful digital solutions with our software development services. Start your project today!"
          />
        </Head>
  
      <Header />


        {/* Hero Section */}
        <HeroSection />

        {/* Value Proposition Section */}
        <ValuePropSection />

        {/* Service Scope Section */}
        <ServiceScopeSection />

        {/* Applications Section */}
        <ApplicationsSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Price Section */}
        <PriceSection />

        {/* InSite Advantage Section */}
        <InSiteAdvantageSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <FinalCTASection />



        </div>

    );
};

export default CSSolPage;