'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import ValuePropSection from '@/components/WebAppServicePage/ValuePropSection';
import ServiceScopeSection from '@/components/WebAppServicePage/ServiceScopeSection';
import ApplicationsSection from '@/components/WebAppServicePage/ApplicationsSection';
import ProcessSection from '@/components/WebAppServicePage/ProcessSection';
import PriceSection from '@/components/WebAppServicePage/PriceSection';
import InSiteAdvantageSection from '@/components/WebAppServicePage/InsiteAdvantageSection';
import FAQSection from '@/components/WebAppServicePage/FaqSection';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Web &amp; App Development
        </h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
          Transform your ideas into powerful digital solutions
        </p>
        <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl drop-shadow-lg">
          From responsive websites to powerful applications, we create digital solutions that drive real business results. Our development services combine modern technology with practical business sense to deliver exactly what your organization needs.
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
          Ready to Transform Your Online Presence?
        </h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          Let&apos;s discuss how we can help bring your vision to life!
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

const WADev = () => {
  return (
    <div>
      <Head>
        <title>Web & App Development Services | InSite Tech</title>
        <meta
          name="description"
          content="Transform your ideas into powerful digital solutions with our web and app development services. Start your project today!"
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

export default WADev;