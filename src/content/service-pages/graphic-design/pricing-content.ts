/**
 * @fileoverview Pricing Content for the Graphic Design & Branding Service Page
 *
 * This file contains the content configuration for the pricing section of the Graphic Design & Branding service page.
 * It includes details about pricing, factors affecting cost, and long-term value justification.
 */

import { PricingContent } from '@/page-templates/service-page/types';

/**
 * Pricing content for the Graphic Design & Branding service page.
 * This object includes details about pricing, factors affecting cost, and long-term value justification.
 * 
 * @type {PricingContent}
 * @property {string} title - The title of the pricing section.
 * @property {string} description - A description of the pricing strategy and flexibility.
 * @property {Array} factors - An array of factors that influence pricing, each containing a title, icon, and items.
 * @property {Object} longTermValue - An object detailing the long-term value proposition, including a title, description, and a link.
 */
const graphicDesignPricingContent: PricingContent = {
  title: "Determining Project Cost",
  description: "Our pricing is tailored to match the specific requirements and scope of each design project. We offer flexible options to accommodate various budgets and needs, whether you're looking for a simple logo refresh or a comprehensive brand identity system.",
  serviceType: "graphicDesignBranding",
  
  // Factors that affect pricing
  factors: [
    {
      title: "Project Scope",
      icon: "Layout",
      items: [
        "Number and type of deliverables",
        "Complexity of design requirements",
        "Brand system comprehensiveness",
        "Number of design concepts",
        "Amount of research required"
      ],
    },
    {
      title: "Technical Complexity",
      icon: "Layers",
      items: [
        "Level of customization needed",
        "Illustration and custom artwork",
        "Animation requirements",
        "File format and delivery needs",
        "Implementation complexity"
      ],
    },
    {
      title: "Timeline",
      icon: "Clock",
      items: [
        "Project urgency",
        "Number of revision rounds",
        "Approval process complexity",
        "Phased implementation needs",
        "Ongoing design support"
      ],
    },
  ],
  
  // Long-term value proposition
  longTermValue: {
    title: "Long-Term Value",
    description: "Investing in professional design delivers value far beyond the initial project cost. A strong visual identity builds brand equity, creating a valuable business asset that appreciates over time. Professional design enhances customer perception, leading to improved conversion rates and the ability to command premium pricing. Consistent branding across all touchpoints builds recognition and trust, increasing customer retention and lifetime value. The initial investment in quality design pays ongoing dividends through enhanced market position, customer loyalty, and operational efficiency for marketing and communications.",
    link: {
      text: "View detailed pricing",
      url: "/pricing",
    },
  },
};

export default graphicDesignPricingContent;