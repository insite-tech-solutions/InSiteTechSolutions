// KeyBenefits.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Settings,
  Code,
  Cloud,
  Shield,
  SquareTerminal,
  MonitorCog,
} from 'lucide-react';
import CarouselSection from '@/components/CarouselSection';
import BenefitsCard from '@/components/BenefitsCard';

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improved Efficiency',
      description:
        'Streamlined processes that reduce manual effort and eliminate operational bottlenecks.',
      isActive: true, // Example: Set to true if this benefit is active
    },
    {
      icon: Settings,
      title: 'Specialized Functionality',
      description:
        'Tailored features designed to address niche business needs, especially in research-focused environments.',
      isActive: false,
    },
    {
      icon: Code,
      title: 'Scalable Solutions',
      description:
        'Custom software that evolves with your organization, ensuring long-term value and adaptability.',
      isActive: false,
    },
    {
      icon: Cloud,
      title: 'Competitive Edge',
      description:
        'Unique tools that provide a significant advantage in your industry.',
      isActive: false,
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description:
        'Robust security measures to protect your data and operations.',
      isActive: false,
    },
  ];

  // Generate BenefitsCard components
  const cards = benefits.map((benefit, index) => (
    <BenefitsCard
      key={index}
      icon={benefit.icon}
      title={benefit.title}
      description={benefit.description}
      isActive={benefit.isActive}
    />
  ));

  return (
    <div className="container mx-auto relative rounded-xl">
      <CarouselSection
        title="Key Benefits"
        description="Our custom software solutions provide measurable improvements to your business operations and research capabilities."
        cards={cards}
        background={
          // Optional: Add a background icon or image if desired
          // Example with an icon:
          <MonitorCog className="text-blue-600" width={400} height={400} />
        }
        // Optional: Pass additional carousel parameters if needed
        // carouselParams={{ /* your params here */ }}
      />

      {/* Optional: Additional Content Below Carousel */}
      {/* Example: A call-to-action card similar to IndustrySolutions */}
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
          {/* You can choose an appropriate icon here */}
          <Shield className="h-6 w-6" />
          <h4 className="text-2xl font-semibold">Explore More Benefits!</h4>
        </div>
        <p className="mb-6 text-blue-100">
          Interested in more advantages? Contact us to discover how our solutions can further benefit your business.
        </p>
        <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Get in Touch
          {/* You can use any appropriate icon */}
          <Shield className="h-5 w-5" />
        </button>
      </motion.div>
    </div>
  );
};

export default KeyBenefits;
