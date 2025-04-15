'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import { ArrowRight, Cpu, CodeXml, Cog, Globe, Settings, Server } from 'lucide-react';
import ValuePropSection from '@/components/CustomSoftwareServicePage/ValuePropSection';
import ServiceScopeSection from '@/components/CustomSoftwareServicePage/ServiceScopeSection';
import ApplicationsSection from '@/components/CustomSoftwareServicePage/ApplicationsSection';
import ProcessOld from '@/components/CustomSoftwareServicePage/ProcessSection';
import PriceSection from '@/components/CustomSoftwareServicePage/PricingSection/PriceSection';
import InSiteAdvantageSection from '@/components/CustomSoftwareServicePage/InSiteAdvantageSection/InsiteAdvantage';
import FAQSection from '@/components/CustomSoftwareServicePage/FAQSection';
import { TracingBeam } from '@/components/CustomSoftwareServicePage/ProcessSection/TracingBeam';
import { motion } from 'framer-motion';

import ProcessSection from '@/components/CustomSoftwareServicePage/ProcessSection/Process';

import FinalCTASection from '@/components/CustomSoftwareServicePage/CTAsection/ctaSection';

import FooterSection from '@/components/CustomSoftwareServicePage/SiteFooter/FooterSection';


import HeroBackground from '@/components/HeroBackground';



import TailwindHeroBackground from '@/components/TailwindHeroBackground';

import TailwindButton from '@/components/tailwindButton';

// Define decorative elements for the background
const decorElements = [
  // Lucide icons
  {
    type: 'icon',
    className: 'text-white/10 rotate-12', // Semi-transparent white icon
    style: { top: '-19%', left: '-10%' },
    icon: Settings,
    size: 400,
  },
  {
    type: 'icon',
    className: 'text-white/10 rotate-[-15deg]',
    style: { bottom: '-16%', right: '-5%' },
    icon: CodeXml,
    size: 450,
  },
];




const HeroSection: React.FC = () => {
  return (

    <section className="relative text-white mt-[104px]">
        <TailwindHeroBackground 
    // Override default background colors with purple gradient
    className="bg-gradient-to-br from-dark-blue to-blue-800 p-8"
    decorElements={decorElements}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-left px-6 py-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Custom Software Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
            Turn your technical challenges into opportunities with tailored software
          </p>
          <p className="mb-8 text-lg md:text-xl drop-shadow-lg">
            From streamlining operations to solving complex computational problems, we create custom software that perfectly aligns with your business processes or research goals. Our solutions combine innovative technology with practical business sense to deliver measurable results.
          </p>
          <TailwindButton href="/contact" className="bg-gray-50">Start Your Project Today</TailwindButton>
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
      </TailwindHeroBackground>
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


        <FooterSection />

        </div>

    );
};

export default CSSolPage;