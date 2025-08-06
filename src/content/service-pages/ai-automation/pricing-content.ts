/**
 * @fileoverview Pricing Content for the AI & Automation Service Page
 *
 * This file contains the content configuration for the pricing section of the AI & Automation service page.
 * It includes details about pricing, factors affecting cost, and long-term value justification.
 */

import { PricingContent } from '@/page-templates/service-page/types';

/**
 * Pricing content for the AI & Automation service page.
 * This object includes details about pricing, factors affecting cost, and long-term value justification.
 * 
 * @type {PricingContent}
 * @property {string} title - The title of the pricing section.
 * @property {string} description - A description of the pricing strategy and flexibility.
 * @property {Array} factors - An array of factors that influence pricing, each containing a title, icon, and items.
 * @property {Object} longTermValue - An object detailing the long-term value proposition, including a title, description, and a link.
 */
const aiAutomationPricingContent: PricingContent = {
  title: "Determining Project Cost",
  description: "Our pricing for AI and automation services is tailored to the specific requirements, complexity, and scope of each project. We offer flexible engagement models to suit different needs and budgets, ensuring that your investment delivers measurable returns through operational efficiency and business transformation.",
  serviceType: "aiAutomation",
  
  // Factors that affect pricing
  factors: [
    {
      title: "Project Scope",
      icon: "Layout",
      items: [
        "Number and complexity of processes to automate",
        "Integration complexity with existing systems",
        "Custom development vs. platform configuration",
        "Data preparation and training requirements"
      ],
    },
    {
      title: "Technical Complexity",
      icon: "Code",
      items: [
        "Algorithm complexity and model type",
        "Data volume and processing requirements",
        "Infrastructure and deployment needs",
        "Performance and scalability requirements"
      ],
    },
    {
      title: "Timeline",
      icon: "Clock",
      items: [
        "Project urgency and deployment schedule",
        "Model training and optimization time",
        "Ongoing support and maintenance needs",
        "Model retraining and improvement frequency"
      ],
    },
  ],
  
  // Long-term value proposition
  longTermValue: {
    title: "Long-Term Value",
    description: "Investment in AI and automation delivers exceptional returns that compound over time. Organizations typically see ROI within 3-9 months through cost reductions, productivity improvements, and enhanced decision quality. Unlike traditional technology investments, AI systems continue to learn and improve with use, creating increasing value through progressively better predictions and recommendations. Beyond the immediate operational benefits, AI and automation enable business model innovation and new capabilities that provide sustainable competitive advantages.",
    link: {
      text: "View detailed pricing",
      url: "/about/pricing-and-payments",
    },
  },
};

export default aiAutomationPricingContent;