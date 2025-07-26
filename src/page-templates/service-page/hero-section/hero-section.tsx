/**
 * @fileoverview Hero Section component for service pages
 * 
 * This component renders a responsive hero banner with customizable background,
 * content, SVG graphics, and decorative elements. It supports both SVG and image-based
 * illustrations with dynamic loading of SVG components. Enhanced with Framer Motion
 * animations for smooth entrance effects.
 */

'use client';

import React, { useMemo, memo } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { HeroSectionContent } from '../types';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { getIcon } from '@/utils/icon-registry';
// This dynamic import is needed to load SVGs
import dynamic from 'next/dynamic';

/**
 * Animation variants for the hero section elements
 * Following the established pattern from other components in the codebase
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

/**
 * Hero Section for Service Pages
 * 
 * @component
 * @param {Object} props - Component props
 * @param {HeroSectionContent} props.content - Configuration object for the hero section
 * 
 * @features
 * - Responsive layout with different arrangements for mobile and desktop
 * - Dynamic SVG loading with fallback to static images
 * - Customizable background gradients and decorative elements
 * - Accessible structure with proper ARIA attributes
 * - Support for custom elements insertion
 * - Smooth Framer Motion animations for enhanced user experience
 * 
 * @returns {JSX.Element} The rendered hero section
 */
function HeroSectionWrapper({ content }: { content: HeroSectionContent }): JSX.Element {
  const {
    title,
    subtitle,
    description,
    image,
    svgComponent,
    ctaText = "Start Your Project Today",
    ctaLink = "/contact",
    decorElements = [],
    bgClassName = "bg-gradient-to-br from-medium-blue via-mild-blue to-blue-700 p-6",
    customElements
  } = content;

  /**
   * Dynamically loads an SVG component from the assets directory
   * Uses Next.js dynamic import with loading state and SSR support
   */
  const SvgGraphic = useMemo(() => {
    if (!svgComponent) return null;
    
    return dynamic(() =>
      import(`@/assets/svg/${svgComponent}.svg`).then((mod) => {
        const Component = mod.default;
        // Forward props to the SVG component
        const Wrapped = (props: React.SVGProps<SVGSVGElement>) => <Component {...props} />;
        Wrapped.displayName = svgComponent;
        return Wrapped;
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

  /**
   * Process decorative elements to replace icon strings with actual icon components
   * Uses the icon registry utility to retrieve icon components
   */
  const processedDecorElements = useMemo(() => {
    return decorElements.map(element => {
      if (element.type === 'icon' && typeof element.icon === 'string') {
        const IconComponent = getIcon(element.icon);
        return {
          ...element,
          icon: IconComponent || getIcon('Code'), // Fallback to Code icon
        };
      }
      return element;
    });
  }, [decorElements]);

  return (
    /* Hero Section Container */
    <section
      className="relative text-white mt-header"
      aria-labelledby="hero-title"
    >
      <TailwindHeroBackground 
        className={bgClassName}
        decorElements={processedDecorElements}
      >
        <div className="max-w-8xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Text Content */}
            <motion.div 
              className="order-1 md:order-none text-left px-1 lg:px-6 pt-4"
              variants={fadeInLeft}
            >
              <motion.h1
                id="hero-title"
                className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
                variants={fadeInUp}
              >
                {title}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-6 drop-shadow"
                variants={fadeInUp}
              >
                {subtitle}
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl drop-shadow"
                variants={fadeInUp}
              >
                {description}
              </motion.p>
              {/* Desktop CTA Button - visible on md and above */}
              <motion.div 
                className="hidden md:block mt-8 mb-4"
                variants={fadeInUp}
              >
                <TailwindButton
                  href={ctaLink}
                  className="bg-gray-50 font-semibold"
                >
                  {ctaText}
                </TailwindButton>
              </motion.div>
            </motion.div>
            
            {/* Illustration: SVG or Image */}
            <motion.div 
              className="order-2 md:order-none flex items-center justify-center h-full min-h-[400px]"
              variants={fadeInRight}
            >
              {/* Use SVG component if provided */}
              {SvgGraphic && (
                <motion.div
                  variants={scaleIn}
                  className="w-full h-auto max-w-[600px] rounded-lg md:pt-12"
                >
                  <SvgGraphic 
                    className="w-full h-auto" 
                    aria-label={title}
                  />
                </motion.div>
              )}
              {/* Fall back to Image if no SVG provided */}
              {!SvgGraphic && image && (
                <motion.div variants={scaleIn}>
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
                </motion.div>
              )}
            </motion.div>

            {/* Mobile CTA Button - Only visible on small screens */}
            <motion.div 
              className="order-3 md:hidden px-6 pb-6 flex items-center justify-center"
              variants={fadeInUp}
            >
              <TailwindButton 
                href={ctaLink} 
                className="bg-gray-50 font-semibold w-1/2 mx-auto"
              >
                {ctaText}
              </TailwindButton>
            </motion.div>
            
            {/* Optional Custom Elements Container - Spans full width */}
            {customElements && (
              <motion.div 
                className="col-span-1 md:col-span-2"
                variants={fadeInUp}
              >
                {customElements}
              </motion.div>
            )}
          </motion.div>
        </div>
      </TailwindHeroBackground>
    </section>
  );
}

export default memo(HeroSectionWrapper);