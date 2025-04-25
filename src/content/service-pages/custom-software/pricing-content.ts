// src/content/services/custom-software/pricing-content.ts

import { PricingContent } from '@/page-templates/service-page/types';

/**
 * Pricing content for the Custom Software Solutions service page.
 * This object includes details about pricing, factors affecting cost, and long-term value justification.
 * 
 * @type {PricingContent}
 * @property {string} title - The title of the pricing section.
 * @property {string} description - A description of the pricing strategy and flexibility.
 * @property {Array} factors - An array of factors that influence pricing, each containing a title, icon, and items.
 * @property {Object} longTermValue - An object detailing the long-term value proposition, including a title, description, and a link.
 */
const customSoftwarePricingContent: PricingContent = {
  title: "Determining Project Cost",
  description: "Our pricing is tailored to match the scope and complexity of each project, offering flexible options to fit your budget. Whether it's a short Python script or a sophisticated desktop application, we strive to find the best approach to meet your needs and financial plan.",
  
  // Factors that affect pricing
  factors: [
    {
      title: "Project Scope",
      icon: "Layout",
      items: [
        "Number of features and modules",
        "Level of customization required",
        "Integration with existing systems",
      ],
    },
    {
      title: "Technical Complexity",
      icon: "Code",
      items: [
        "Choice of technology stack and platforms",
        "Advanced functionalities and third-party integrations",
        "Performance specifications",
      ],
    },
    {
      title: "Timeline",
      icon: "Clock",
      items: [
        "Project urgency and deadlines",
        "Number of revisions and iterations",
        "Maintenance and support requirements",
      ],
    },
  ],
  
  // Long-term value proposition
  longTermValue: {
    title: "Long-Term Value",
    description: "The true cost of custom software extends beyond development expenses. While initial development costs may seem higher compared to off-the-shelf solutions, the long-term savings and efficiency gains far outweigh the investment. Custom software eliminates the need for multiple subscriptions, reduces manual processes, and enhances overall productivity. It's more than a one-time investment—it's a foundation for long-term growth. By eliminating unnecessary subscriptions and automating key processes, custom solutions can significantly reduce operational costs over time while giving your business a competitive edge.",
    link: {
      text: "Learn more about our process",
      url: "/process",
    },
  },
};

export default customSoftwarePricingContent;