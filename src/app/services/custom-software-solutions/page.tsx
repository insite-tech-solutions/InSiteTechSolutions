'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import { ArrowRight } from 'lucide-react';
import ValuePropSection from '@/components/CustomSoftwareServicePage/ValuePropSection';
import ServiceScopeSection from '@/components/CustomSoftwareServicePage/ServiceScopeSection';
import ApplicationsSection from '@/components/CustomSoftwareServicePage/ApplicationsSection';
import ProcessOld from '@/components/CustomSoftwareServicePage/ProcessSection';
import PriceSection from '@/components/CustomSoftwareServicePage/PricingSection/PriceSection';
import InSiteAdvantageSection from '@/components/CustomSoftwareServicePage/InsiteAdvantageSection/InsiteAdvantageSection';
import FAQSection from '@/components/CustomSoftwareServicePage/FAQSection';
import { TracingBeam } from '@/components/CustomSoftwareServicePage/ProcessSection/TracingBeam';

import ProcessSection from '@/components/CustomSoftwareServicePage/ProcessSection/Process';



const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-tr from-blue-600 to-dark-blue text-white mt-[104px] px-8 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Custom Software Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
            Turn your technical challenges into opportunities with tailored software
          </p>
          <p className="mb-8 text-lg md:text-xl drop-shadow-lg">
            From streamlining operations to solving complex computational problems, we create custom software that perfectly aligns with your business processes or research goals. Our solutions combine innovative technology with practical business sense to deliver measurable results.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition duration-300"
          >
            <span>Start Your Project Today</span>
            <ArrowRight className="ml-2 h-4 w-4 transform transition-all duration-300 ease-in-out group-hover:translate-x-2" />
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/CustomSoftwareGraphic.svg"
            alt="Responsive Design Animation"
            width={600}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Decorative Background Shapes */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-20"> */}
        {/* Add any decorative SVGs or shapes here for visual enhancement */}
      {/* </div> */}
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
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-20"> */}
        {/* Add any decorative SVGs or shapes here for visual enhancement */}
      {/* </div> */}
    </section>
  );
};


const CSSolPage = () => {
    return (
      <div className='bg-gray-50'>
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

        {/* <ProcessOld /> */}

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