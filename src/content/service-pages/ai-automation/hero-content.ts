// src/content/services/ai-automation/hero-content.ts

import { HeroSectionContent } from '@/page-templates/service-page/types';

/**
 * Hero section content for the AI & Automation service page.
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
const aiAutomationHero: HeroSectionContent = {
  title: "AI & Automation",
  subtitle: "Harness the power of artificial intelligence to optimize operations and drive innovation",
  description: "From intelligent process automation to custom AI solutions, we help businesses streamline operations, reduce costs, and enhance productivity. Our AI and automation services combine cutting-edge technology with practical business strategies to deliver measurable results and transformative capabilities.",
  svgComponent: "ai-automation-graphic",
  image: "/src/assets/svg/ai-automation-graphic.svg",
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
      icon: 'Bot',
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
      icon: 'Cpu',
      size: 450,
    },
  ],
  bgClassName: "bg-gradient-to-br from-dark-blue to-blue-800 p-6",
};

export default aiAutomationHero;