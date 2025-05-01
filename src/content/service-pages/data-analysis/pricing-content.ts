// src/content/services/data-analysis/pricing-content.ts

import { PricingContent } from '@/page-templates/service-page/types';

/**
 * Pricing content for the Data Analysis service page.
 * This object includes details about pricing, factors affecting cost, and long-term value justification.
 * 
 * @type {PricingContent}
 * @property {string} title - The title of the pricing section.
 * @property {string} description - A description of the pricing strategy and flexibility.
 * @property {Array} factors - An array of factors that influence pricing, each containing a title, icon, and items.
 * @property {Object} longTermValue - An object detailing the long-term value proposition, including a title, description, and a link.
 */
const dataAnalysisPricingContent: PricingContent = {
  title: "Determining Project Cost",
  description: "Our pricing for data analysis services is tailored to the specific requirements, complexity, and scope of each project. We offer flexible engagement models to suit different needs and budgets, whether you need a one-time analysis or ongoing analytical support.",
  serviceType: "dataAnalysis",
  
  // Factors that affect pricing
  factors: [
    {
      title: "Project Scope",
      icon: "Layout",
      items: [
        "Data volume and complexity",
        "Number and depth of analytical questions",
        "Breadth of analysis required",
        "Deliverable complexity (reports, dashboards, models)",
        "Implementation support needs"
      ],
    },
    {
      title: "Technical Complexity",
      icon: "Code",
      items: [
        "Data preparation requirements",
        "Analytical methods complexity",
        "Model development needs",
        "Integration with existing systems",
        "Automation requirements"
      ],
    },
    {
      title: "Timeline",
      icon: "Clock",
      items: [
        "Project urgency",
        "Iteration requirements",
        "Reporting frequency",
        "Ongoing support needs",
        "Model maintenance and updates"
      ],
    },
  ],
  
  // Long-term value proposition
  longTermValue: {
    title: "Long-Term Value",
    description: "Investment in data analysis delivers returns far beyond the initial project cost. Effective data analysis leads to improved operational efficiency, reduced costs, enhanced decision accuracy, and identification of new revenue opportunities. Organizations typically see ROI from analytics investments within 3-6 months through cost savings and performance improvements. Additionally, the insights gained from analysis often reveal unexpected opportunities for innovation and competitive advantage. As your analytical capabilities mature, the cumulative value increases as insights compound and predictive models become more refined with additional data.",
    link: {
      text: "View detailed pricing",
      url: "/pricing",
    },
  },
};

export default dataAnalysisPricingContent;