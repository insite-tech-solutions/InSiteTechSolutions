// src/templates/service-page/sections/hero-section.tsx

import React from 'react';
import Image from 'next/image';
import { HeroSectionContent } from '../types';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import * as LucideIcons from 'lucide-react';

/**
 * Hero Section for Service Pages
 * 
 * Displays the main hero banner with customizable background, content, and decorative elements.
 * 
 * @param content - Configuration object for the hero section
 * @returns JSX.Element
 */
export default function HeroSection({
  content
}: {
  content: HeroSectionContent
}) {
  const {
    title,
    subtitle,
    description,
    image,
    ctaText = "Start Your Project Today",
    ctaLink = "/contact",
    decorElements = [],
    bgClassName = "bg-gradient-to-br from-dark-blue to-blue-800 p-6",
    customElements
  } = content;

  // Process decorative elements to convert string icon names to actual components
  const processedDecorElements = decorElements.map(element => {
    if (element.type === 'icon' && typeof element.icon === 'string') {
      // Get the icon component from Lucide based on its name
      const IconComponent = LucideIcons[element.icon as keyof typeof LucideIcons];
      return {
        ...element,
        icon: IconComponent || LucideIcons.Code // Fallback icon
      };
    }
    return element;
  });

  return (
    <section className="relative text-white mt-[104px]">
      <TailwindHeroBackground 
        className={bgClassName}
        decorElements={processedDecorElements}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="order-1 md:order-none text-left px-6 pt-6">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                {title}
              </h1>
              <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
                {subtitle}
              </p>
              <p className="mb-0 text-lg md:text-xl drop-shadow-lg">
                {description}
              </p>
            </div>
            
            {/* Image */}
            <div className="order-2 md:order-none flex justify-center md:justify-end">
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="rounded-lg"
                priority
              />
            </div>

            {/* Mobile Button */}
            <div className="order-3 md:hidden px-6 pb-6">
              <TailwindButton 
                href={ctaLink} 
                className="bg-gray-50 font-semibold w-full"
              >
                {ctaText}
              </TailwindButton>
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block order-1 md:order-none px-6 pb-6">
              <TailwindButton 
                href={ctaLink} 
                className="bg-gray-50 font-semibold"
              >
                {ctaText}
              </TailwindButton>
            </div>
            
            {/* Custom Elements */}
            {customElements && (
              <div className="col-span-1 md:col-span-2">
                {customElements}
              </div>
            )}
          </div>
        </div>
      </TailwindHeroBackground>
    </section>
  );
}