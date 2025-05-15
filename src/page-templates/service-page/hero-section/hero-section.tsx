// src/templates/service-page/sections/hero/hero-section.tsx

import React, { useMemo } from 'react';
import Image from 'next/image';
import { HeroSectionContent } from '../types';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { getIcon } from '@/utils/icon-registry';
// This dynamic import is needed to load SVGs
import dynamic from 'next/dynamic';

/**
 * Hero Section for Service Pages
 * 
 * Displays the main hero banner with customizable background, content, and decorative elements.
 * 
 * @param content - Configuration object for the hero section
 * @returns JSX.Element
 */
const HeroSectionWrapper = React.memo(function HeroSection({
  content
}: {
  content: HeroSectionContent
}) {
  const {
    title,
    subtitle,
    description,
    image,
    svgComponent, // Add this line
    ctaText = "Start Your Project Today",
    ctaLink = "/contact",
    decorElements = [],
    bgClassName = "bg-gradient-to-br from-dark-blue to-blue-800 p-6",
    customElements
  } = content;

  // Dynamically load SVG component if specified
  const SvgGraphic = useMemo(() => {
    if (!svgComponent) return null;
    // Dynamic import for the SVG component, wrapped to forward props
    return dynamic(() =>
      import(`@/assets/svg/${svgComponent}.svg`).then((mod) => {
        const Component = mod.default;
        // Forward props to the SVG
        return (props: React.SVGProps<SVGSVGElement>) => <Component {...props} />;
      }),
      {
        loading: () => (
          <div className="w-full h-full min-h-[400px] flex items-center justify-center">
            <div className="animate-pulse bg-gray-300 rounded-lg w-[600px] h-[400px]"></div>
          </div>
        ),
        ssr: true,
      }
    );
  }, [svgComponent]);

  // Memoize processing of decorative elements to avoid reprocessing on every render
  const processedDecorElements = useMemo(() => {
    return decorElements.map(element => {
      if (element.type === 'icon' && typeof element.icon === 'string') {
        const IconComponent = getIcon(element.icon);
        return {
          ...element,
          icon: IconComponent || getIcon('Code'),
        };
      }
      return element;
    });
  }, [decorElements]);

  return (
    <section
      className="relative text-white mt-[104px]"
      aria-labelledby="hero-title"
    >
      <TailwindHeroBackground 
        className={bgClassName}
        decorElements={processedDecorElements}
      >
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="order-1 md:order-none text-left px-3 lg:px-6 pt-4">
              <h1
                id="hero-title"
                className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
              >
                {title}
              </h1>
              <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
                {subtitle}
              </p>
              <p className="text-lg md:text-xl drop-shadow-lg">
                {description}
              </p>
            </div>
            
            {/* Image or SVG */}
            <div className="order-2 md:order-none flex items-center justify-center h-full min-h-[400px]">
              {/* Use SVG component if provided */}
              {SvgGraphic && (
                <SvgGraphic 
                  className="w-full h-auto max-w-[600px] rounded-lg md:pt-12" 
                  aria-label={title}
                />
              )}
              {/* Fall back to Image if no SVG provided */}
              {!SvgGraphic && image && (
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg"
                  priority
                  aria-label={title}
                />
              )}
            </div>

            {/* Mobile Button */}
            <div className="order-3 md:hidden px-6 pb-6 flex items-center justify-center">
              <TailwindButton 
                href={ctaLink} 
                className="bg-gray-50 font-semibold w-1/2 mx-auto"
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
});

export default HeroSectionWrapper;