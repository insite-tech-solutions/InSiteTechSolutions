// IndustrySolutions.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Plus,
  ArrowRight,
  ShoppingCart,
  Settings,
  Briefcase,
  Truck,
  Code2,
} from 'lucide-react';
import CarouselSection from '@/components/reusable-components/carousel-section';
import IndustryCard from '@/components/reusable-components/industry-card';
import TailwindButton from '@/components/reusable-components/tailwind-button';


const IndustrySolutions: React.FC = () => {
  const industries = [
    {
      title: 'Manufacturing & Engineering',
      icon: Settings,
      items: [
        'Process control systems',
        'Quality assurance software',
        'Equipment monitoring',
        'Production planning tools',
      ],
    },
    {
      title: 'Retail & E-commerce',
      icon: ShoppingCart,
      items: [
        'Custom POS systems',
        'Product customization tools',
        'Inventory management solutions',
        'Interactive product catalogs',
      ],
    },
    {
      title: 'Professional Services',
      icon: Briefcase,
      items: [
        'Client management portals',
        'Service tracking platforms',
        'Resource scheduling systems',
        'Reporting and analytics tools',
      ],
    },
    {
      title: 'Logistics & Supply Chain',
      icon: Truck,
      items: [
        'Transportation management systems',
        'Warehouse management software',
        'Supply chain optimization tools',
      ],
    },
  ];

  const cards = industries.map((industry, index) => (
    <IndustryCard {...industry} key={index} />
  ));

  return (
    <div className="container mx-auto relative rounded-xl">
      <CarouselSection
        title="Industry-Specific Solutions"
        description="Drawing on our technical expertise across numerous sectors, we create customized solutions that meet the unique demands of your industry."
        cards={cards}
        background={
          <Code2 className="text-blue-600" width={600} height={600} strokeWidth={1.5}/>
        }
        // No need to pass carouselParams unless you want to override defaults
      />

      {/* And Many More! Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="bg-gradient-to-br from-medium-blue to-blue-800 border border-medium-blue text-white rounded-xl p-8 text-center mt-12 shadow-md hover:shadow-lg transition-all duration-200"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <h4 className="text-2xl font-semibold">And Many More!</h4>
        </div>
        <p className="mb-6 text-blue-100">
          Don&apos;t see your industry listed? Contact us to discuss your
          specific needs.
        </p>
        <TailwindButton href="/contact" className="bg-white rounded-lg font-semibold shadow-md transition-all duration-200">Get in Touch</TailwindButton>
      </motion.div>
    </div>
  );
};

export default IndustrySolutions;
