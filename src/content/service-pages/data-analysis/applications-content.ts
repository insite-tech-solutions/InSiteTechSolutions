// src/content/services/data-analysis/applications-content.ts

import { ApplicationsContent } from '@/page-templates/service-page/types';

/**
 * Content configuration for the Data Analysis service page.
 * This includes industry solutions, categories, and related descriptions/icons.
 * 
 * @type {ApplicationsContent}
 * @property {string} title - The main title for the applications section.
 * @property {string} description - A brief description of the data analysis solutions offered.
 * @property {string} industrySolutionsTitle - Title for the industry-specific solutions carousel.
 * @property {string} industrySolutionsDescription - Description for the industry-specific solutions carousel.
 * @property {Array} categories - An array of categories, each containing a title, icon, and items.
 * @property {Array} industries - An array of industries, each containing a title, icon, and items (carousel cards).
 * @property {string} backgroundIcon - Icon used as a background for the section.
 * @property {number} backgroundIconWidth - Width of the background icon.
 * @property {number} backgroundIconHeight - Height of the background icon.
 */
const dataAnalysisApplications: ApplicationsContent = {
  title: "Data-Driven Solutions Across Industries",
  description: "Our analytical expertise spans numerous industries and business functions, helping organizations extract maximum value from their data assets. Our data-driven strategies empower businesses by enhancing their:",
  industrySolutionsTitle: "Industry-Specific Solutions",
  industrySolutionsDescription: "We tailor our analytical approaches to address the unique challenges and opportunities in different sectors, delivering insights that drive specific industry outcomes.",
  
  categories: [
    {
      title: "Strategic Decision Support",
      icon: "Compass",
      items: [
        "Market opportunity analysis",
        "Competitive intelligence",
        "Strategic planning and forecasting",
        "Risk assessment and management",
        "Investment and resource allocation optimization"
      ],
    },
    {
      title: "Operational Excellence",
      icon: "Settings",
      items: [
        "Process efficiency analysis",
        "Supply chain optimization",
        "Quality control analytics",
        "Resource utilization assessment",
        "Bottleneck identification and resolution"
      ],
    },
    {
      title: "Customer Intelligence",
      icon: "Users",
      items: [
        "Customer segmentation and profiling",
        "Customer journey mapping",
        "Churn prediction and prevention",
        "Lifetime value analysis",
        "Customer satisfaction and feedback analysis"
      ],
    },
  ],
  
  industries: [
    {
      title: "Manufacturing & Engineering",
      icon: "Factory",
      items: [
        "Production efficiency analysis",
        "Quality control systems",
        "Predictive maintenance",
        "Supply chain optimization",
        "Product performance analytics"
      ],
    },
    {
      title: "Healthcare & Life Sciences",
      icon: "Stethoscope",
      items: [
        "Clinical trial data analysis",
        "Patient outcome prediction",
        "Healthcare operations optimization",
        "Medical device performance analysis",
        "Population health analytics"
      ],
    },
    {
      title: "Retail & E-commerce",
      icon: "ShoppingCart",
      items: [
        "Inventory optimization",
        "Customer purchase pattern analysis",
        "Pricing strategy optimization",
        "Demand forecasting",
        "Marketing campaign effectiveness"
      ],
    },
    {
      title: "Financial Services",
      icon: "DollarSign",
      items: [
        "Risk modeling and assessment",
        "Fraud detection systems",
        "Portfolio optimization",
        "Customer profitability analysis",
        "Market trend prediction"
      ],
    },
    {
      title: "Energy & Utilities",
      icon: "Zap",
      items: [
        "Energy consumption analysis",
        "Grid performance optimization",
        "Predictive maintenance models",
        "Resource allocation planning",
        "Sustainability metrics tracking"
      ],
    },
  ], 
  backgroundIcon: "PieChart",
  backgroundIconWidth: 400,
  backgroundIconHeight: 400,
};

export default dataAnalysisApplications;