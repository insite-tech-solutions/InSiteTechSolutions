/**
 * @fileoverview Applications Content for the Data Analysis Service Page
 *
 * This file contains the content configuration for the Data Analysis service page.
 * It includes industry solutions, categories, and related descriptions/icons.
 * The content is organized into sections and categories to provide a clear and structured presentation.
 */

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
  description: "Our analytical expertise spans a wide range of industries and academic research areas, helping organizations extract maximum value from their data assets. Our data-driven strategies empower businesses by enhancing their:",
  industrySolutionsTitle: "Industry-Specific Solutions",
  industrySolutionsDescription: "We tailor our analytical approaches to address the unique challenges and opportunities in different sectors, delivering insights that drive specific industry outcomes.",
  
  categories: [
    {
      title: "Research & Statistical Analysis",
      icon: "FlaskConical",
      items: [
        "Experimental data analysis",
        "Statistical hypothesis testing",
        "Research methodology design",
        "Publication-quality visualizations",
        "Data validation and quality control"
      ],
    },
    {
      title: "Customer & Market Understanding",
      icon: "Users",
      items: [
        "Customer segmentation and profiling",
        "Market opportunity analysis",
        "Strategic planning and forecasting",
        "Risk assessment and management",
        "Customer satisfaction and feedback analysis",
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
      title: "Academic & Scientific Research",
      icon: "Book",
      items: [
        "Experimental data analysis",
        "Statistical hypothesis testing",
        "Research methodology design",
        "Publication-quality visualizations",
        "Data validation and quality control"
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