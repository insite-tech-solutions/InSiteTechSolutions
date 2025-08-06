/**
 * @fileoverview Hero Content for the Custom Software Service Page
 *
 * This file contains the content configuration for the hero section of the Custom Software service page.
 * It includes title, subtitle, description, background styling, CTA, and decorative elements.
 */

import { HeroSectionContent } from '@/page-templates/service-page/types';

/**
 * Hero section content for the Custom Software Solutions service page.
 * This includes title, subtitle, description, background styling, CTA, and decorative elements.
 * 
 * @type {HeroSectionContent}
 * @property {string} title - The main title for the hero section.
 * @property {string} subtitle - A brief subtitle that complements the title.
 * @property {string} description - A detailed description of the services offered.
 * @property {string} image - URL of the image to be displayed in the hero section.
 * @property {string} ctaText - Text for the call-to-action button.
 * @property {string} ctaLink - URL for the call-to-action button's link.
 * @property {Array} decorElements - An array of decorative elements to render in the background.
 * @property {Object} decorElements[].type - Type of the decorative element (e.g., 'icon').
 * @property {string} decorElements[].className - Additional Tailwind classes for styling the element.
 * @property {Object} decorElements[].style - Inline styles for positioning the element.
 * @property {string} decorElements[].icon - Icon identifier for the decorative element.
 * @property {number} decorElements[].size - Size of the decorative icon.
 * @property {string} bgClassName - Optional custom background class for styling.
 */
const customSoftwareHero: HeroSectionContent = {
  title: "Custom Software Solutions",
  subtitle: "Turn your technical challenges into opportunities with custom software",
  description: "From streamlining operations to solving complex computational problems, we create custom software that perfectly aligns with your business processes or research goals. Our solutions combine innovative technology with practical business sense to deliver measurable results.",
  svgComponent: "custom-software-graphic",
  image: "/src/assets/svg/custom-software-graphic.svg",
  ctaText: "Start Your Project Today",
  ctaLink: "/contact",
  decorElements: [
    {
      type: 'icon',
      className: 'absolute',
      style: { 
        top: '-19%', 
        left: '-10%',
        color: 'rgba(255, 255, 255, 0.1)',
        transform: 'rotate(12deg)'
      },
      icon: 'Settings',
      size: 400,
    },
    {
      type: 'icon',
      className: 'absolute',
      style: { 
        bottom: '-16%', 
        right: '-5%',
        color: 'rgba(255, 255, 255, 0.1)',
        transform: 'rotate(-15deg)'
      },
      icon: 'CodeXml',
      size: 450,
    },
  ],
  bgClassName: "bg-gradient-to-br from-medium-blue via-mild-blue to-blue-700 p-6",
};

export default customSoftwareHero;