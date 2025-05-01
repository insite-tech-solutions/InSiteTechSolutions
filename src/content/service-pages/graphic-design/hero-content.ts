// src/content/services/graphic-design/hero-content.ts

import { HeroSectionContent } from '@/page-templates/service-page/types';

/**
 * Hero section content for the Graphic Design & Branding service page.
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
const graphicDesignHero: HeroSectionContent = {
  title: "Graphic Design & Branding",
  subtitle: "Create a memorable visual identity that captivates your audience",
  description: "From stunning logos to comprehensive brand identities, we craft visual elements that communicate your company's values and resonate with your target audience. Our design solutions blend creativity with strategic thinking to build a cohesive brand experience across all touchpoints.",
  image: "/graphics/design-elements.gif",
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
      icon: 'Palette',
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
      icon: 'PenTool',
      size: 450,
    },
  ],
  bgClassName: "bg-gradient-to-br from-dark-blue to-blue-800 p-6",
};

export default graphicDesignHero;