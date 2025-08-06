/**
 * @fileoverview Pricing Content for the Consulting & Training Service Page
 *
 * This file contains the content configuration for the pricing section of the Consulting & Training service page.
 * It includes details about pricing, factors affecting cost, and long-term value justification.
 */

import { PricingContent } from '@/page-templates/service-page/types';

/**
 * Pricing content for the Consulting & Training service page.
 * This object includes details about pricing, factors affecting cost, and long-term value justification.
 * 
 * @type {PricingContent}
 * @property {string} title - The title of the pricing section.
 * @property {string} description - A description of the pricing strategy and flexibility.
 * @property {Array} factors - An array of factors that influence pricing, each containing a title, icon, and items.
 * @property {Object} longTermValue - An object detailing the long-term value proposition, including a title, description, and a link.
 */
const consultingTrainingPricingContent: PricingContent = {
  title: "Determining Project Cost",
  description: "Our pricing for consulting and training services is tailored to the specific requirements, complexity, and scope of each engagement. We offer flexible delivery and payment models to accommodate different organizational needs and budgets, ensuring that you receive maximum value from our services.",
  serviceType: "consultingTraining",
  
  // Factors that affect pricing
  factors: [
    {
      title: "Project Scope",
      icon: "Layout",
      items: [
        "Depth and breadth of consulting requirements",
        "Number of training sessions and participants",
        "One-time engagement vs. ongoing support",
        "Implementation support requirements"
      ],
    },
    {
      title: "Technical Complexity",
      icon: "Presentation",
      items: [
        "Complexity of subject matter",
        "On-site vs. remote delivery",
        "Custom content development needs",
        "Documentation and resource development"
      ],
    },
    {
      title: "Timeline",
      icon: "Clock",
      items: [
        "Project urgency and delivery schedule",
        "Frequency of sessions",
        "Follow-up support requirements",
        "Implementation timeframe"
      ],
    },
  ],
  
  // Long-term value proposition
  longTermValue: {
    title: "Long-Term Value",
    description: "Investment in consulting and training delivers returns that extend far beyond the initial engagement. Unlike physical assets that depreciate over time, knowledge and expertise appreciate as they are applied and shared throughout your organization. Our services create lasting value through enhanced team capabilities, improved decision-making processes, and optimized technology implementation. Organizations typically see both immediate benefits through faster project implementation and long-term advantages through reduced operational costs, higher team productivity, and greater adaptability to change.",
    link: {
      text: "View detailed pricing",
      url: "/about/pricing-and-payments",
    },
  },
};

export default consultingTrainingPricingContent;