import React from 'react';
import Image from 'next/image';
import { Settings, CodeXml } from 'lucide-react';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import TailwindButton from '@/components/reusable-components/tailwind-button';

// Define decorative elements for the background
const decorElements = [
  // Lucide icons
  {
    type: 'icon' as const,
    className: 'text-white/10 rotate-12', // Semi-transparent white icon
    style: { top: '-19%', left: '-10%' },
    icon: Settings,
    size: 400,
  },
  {
    type: 'icon' as const,
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
        className="bg-gradient-to-br from-dark-blue to-blue-800 p-6"
        decorElements={decorElements}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="order-1 md:order-none text-left px-6 pt-6">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                Custom Software Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
                Turn your technical challenges into opportunities with tailored software
              </p>
              <p className="mb-0 text-lg md:text-xl drop-shadow-lg">
                From streamlining operations to solving complex computational problems, we create custom software that perfectly aligns with your business processes or research goals. Our solutions combine innovative technology with practical business sense to deliver measurable results.
              </p>
            </div>
            
            {/* Image */}
            <div className="order-2 md:order-none flex justify-center md:justify-end">
              <Image
                src="/CustomSoftwareGraphic.svg"
                alt="Responsive Design Animation"
                width={600}
                height={400}
                className="rounded-lg"
                priority
              />
            </div>

            {/* Button - Now outside the text content div */}
            <div className="order-3 md:hidden px-6 pb-6">
              <TailwindButton href="/contact" className="bg-gray-50 font-semibold w-full">
                Start Your Project Today
              </TailwindButton>
            </div>

            {/* Desktop Button - Hidden on mobile */}
            <div className="hidden md:block order-1 md:order-none px-6 pb-6">
              <TailwindButton href="/contact" className="bg-gray-50 font-semibold">
                Start Your Project Today
              </TailwindButton>
            </div>
          </div>
        </div>
      </TailwindHeroBackground>
    </section>
  );
};

export default HeroSection;
