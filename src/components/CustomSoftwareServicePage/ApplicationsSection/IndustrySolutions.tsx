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
import CarouselSection from '@/components/CarouselSection';
import IndustryCard from '@/components/IndustryCard';

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
          <Code2 className="text-blue-600" width={600} height={600} />
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
        className="bg-blue-600 text-white rounded-xl p-8 text-center mt-12 shadow-lg"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Plus className="h-6 w-6" />
          <h4 className="text-2xl font-semibold">And Many More!</h4>
        </div>
        <p className="mb-6 text-blue-100">
          Don&apos;t see your industry listed? Contact us to discuss your
          specific needs.
        </p>
        <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Get in Touch
          <ArrowRight className="h-5 w-5" />
        </button>
      </motion.div>
    </div>
  );
};

export default IndustrySolutions;
