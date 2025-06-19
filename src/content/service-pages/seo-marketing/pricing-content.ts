/**
 * @fileoverview Pricing Content for the SEO & Online Marketing Service Page
 *
 * This file contains the content configuration for the pricing section of the SEO & Online Marketing service page.
 * It includes details about pricing, factors affecting cost, and long-term value justification.
 */

import { PricingContent } from '@/page-templates/service-page/types';

/**
 * Pricing content for the SEO & Online Marketing service page.
 * This object includes details about pricing, factors affecting cost, and long-term value justification.
 * 
 * @type {PricingContent}
 * @property {string} title - The title of the pricing section.
 * @property {string} description - A description of the pricing strategy and flexibility.
 * @property {Array} factors - An array of factors that influence pricing, each containing a title, icon, and items.
 * @property {Object} longTermValue - An object detailing the long-term value proposition, including a title, description, and a link.
 */
const seoMarketingPricingContent: PricingContent = {
  title: "Determining Project Cost",
  description: "Our services are designed to deliver maximum value within your budget. We offer flexible pricing and payment models to accommodate businesses and projects of all sizes, ensuring our solutions meet your needs and budget.",
  serviceType: "seoOnlineMarketing",

  // Factors that affect pricing
  factors: [
    {
      title: "Project Scope",
      icon: "Layout",
      items: [
        "Number of target keywords",
        "Content creation needs",
        "Channel diversity",
        "Number of services needed"
      ],
    },
    {
      title: "Technical Complexity",
      icon: "Code",
      items: [
        "Site optimization needs",
        "Integration complexity",
        "Analytics and tracking setup",
        "Campaign monitoring requirements",
      ],
    },
    {
      title: "Timeline",
      icon: "Clock",
      items: [
        "Target growth rate",
        "Market conditions",
        "Project urgency",
        "Campaign duration"
      ],
    },
  ],
  
  // Long-term value proposition
  longTermValue: {
    title: "Long-Term Value",
    description: "Investment in digital marketing provides compound returns over time. Unlike traditional advertising that stops working when you stop paying, SEO and content marketing continue to generate value long after implementation. Our strategies build sustainable organic growth, strengthen brand equity, provide valuable market intelligence, and create a scalable competitive advantage that grows with your business. The true value extends beyond initial costs through increased brand awareness, higher search rankings, and consistent lead generation, leading to ongoing revenue growth.",
    link: {
      text: "View detailed pricing",
      url: "/case-studies",
    },
  },
};

export default seoMarketingPricingContent;