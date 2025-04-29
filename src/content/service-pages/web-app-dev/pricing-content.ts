// src/content/services/web-app-development/pricing-content.ts

import { PricingContent } from '@/page-templates/service-page/types';

/**
 * Pricing content for the Web & App Development service page.
 * This object includes details about pricing, factors affecting cost, and long-term value justification.
 * 
 * @type {PricingContent}
 * @property {string} title - The title of the pricing section.
 * @property {string} description - A description of the pricing strategy and flexibility.
 * @property {Array} factors - An array of factors that influence pricing, each containing a title, icon, and items.
 * @property {Object} longTermValue - An object detailing the long-term value proposition, including a title, description, and a link.
 */
const webAppDevelopmentPricingContent: PricingContent = {
  title: "Determining Project Cost",
  description: "Our pricing is tailored to the scope and complexity of each project, with flexible options to suit your budget. Whether that be a simple Wordpress site or a highly integrated mobile app, we will do our best to find the strategy that meets your needs and budget.",
  serviceType: "webAppDevelopment",
  
  // Factors that affect pricing
  factors: [
    {
      title: "Project Scope",
      icon: "Layout",
      items: [
        "Number of pages/screens",
        "Customization of features and functionality",
        "Integration requirements",
        "Content creation needs (Stock vs Custom)",
        "Size/scalability (e-commerce vs. informational site)"
      ],
    },
    {
      title: "Technical Complexity",
      icon: "Code",
      items: [
        "Platform requirements (mobile app vs. web)",
        "Feature requirements",
        "Plugins, APIs, and other third-party integrations",
        "Special requirements",
        "Performance specifications"
      ],
    },
    {
      title: "Timeline",
      icon: "Clock",
      items: [
        "Project urgency",
        "Number of requested revisions",
        "Size and complexity of the project",
        "Implementation Schedule",
        "Support requirements"
      ],
    },
  ],
  
  // Long-term value proposition
  longTermValue: {
    title: "Long-Term Value",
    description: "The true cost of a website or app extends beyond development expenses. An outdated or poorly functioning digital presence can result in lost revenue, decreased engagement, reduced efficiency, and diminished market presence. Investing in a high-quality digital solution provides long-term returns through increased user engagement, higher conversion rates, and improved operational efficiency.",
    link: {
      text: "View detailed pricing",
      url: "/pricing",
    },
  },
};

export default webAppDevelopmentPricingContent;