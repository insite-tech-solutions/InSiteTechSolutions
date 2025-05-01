// src/content/services/ai-automation/applications-content.ts

import { ApplicationsContent } from '@/page-templates/service-page/types';

/**
 * Content configuration for the AI & Automation service page.
 * This includes industry solutions, categories, and related descriptions/icons.
 * 
 * @type {ApplicationsContent}
 * @property {string} title - The main title for the applications section.
 * @property {string} description - A brief description of the AI and automation solutions offered.
 * @property {string} industrySolutionsTitle - Title for the industry-specific solutions carousel.
 * @property {string} industrySolutionsDescription - Description for the industry-specific solutions carousel.
 * @property {Array} categories - An array of categories, each containing a title, icon, and items.
 * @property {Array} industries - An array of industries, each containing a title, icon, and items (carousel cards).
 * @property {string} backgroundIcon - Icon used as a background for the section.
 * @property {number} backgroundIconWidth - Width of the background icon.
 * @property {number} backgroundIconHeight - Height of the background icon.
 */
const aiAutomationApplications: ApplicationsContent = {
  title: "AI-Powered Solutions Across Industries",
  description: "Our AI and automation expertise spans numerous sectors and business functions, helping organizations transform operations and create new capabilities. Our intelligent systems empower businesses by enhancing their:",
  industrySolutionsTitle: "Industry-Specific Solutions",
  industrySolutionsDescription: "We tailor our AI and automation approaches to address the unique challenges and opportunities in different sectors, delivering solutions that drive specific industry outcomes.",
  
  categories: [
    {
      title: "Operational Excellence",
      icon: "Settings",
      items: [
        "Workflow automation and process optimization",
        "Predictive maintenance and resource planning",
        "Quality control and defect detection",
        "Supply chain and inventory management",
        "Document processing and data extraction"
      ],
    },
    {
      title: "Customer Experience",
      icon: "Users",
      items: [
        "Intelligent virtual assistants and chatbots",
        "Personalized recommendation systems",
        "Customer sentiment analysis",
        "Automated customer support",
        "Engagement optimization"
      ],
    },
    {
      title: "Decision Support",
      icon: "Brain",
      items: [
        "Predictive analytics and forecasting",
        "Risk assessment and management",
        "Market trend identification",
        "Performance monitoring dashboards",
        "Strategic planning assistants"
      ],
    },
  ],
  
  industries: [
    {
      title: "Manufacturing & Engineering",
      icon: "Factory",
      items: [
        "Predictive maintenance systems",
        "Quality control automation",
        "Production optimization",
        "Supply chain intelligence",
        "Digital twin implementation"
      ],
    },
    {
      title: "Healthcare & Life Sciences",
      icon: "Stethoscope",
      items: [
        "Diagnostic assistance systems",
        "Treatment recommendation engines",
        "Patient engagement automation",
        "Administrative workflow optimization",
        "Research data analysis"
      ],
    },
    {
      title: "Financial Services",
      icon: "DollarSign",
      items: [
        "Fraud detection and prevention",
        "Automated compliance monitoring",
        "Algorithmic trading systems",
        "Credit risk assessment",
        "Customer service automation"
      ],
    },
    {
      title: "Retail & E-commerce",
      icon: "ShoppingCart",
      items: [
        "Demand forecasting systems",
        "Inventory optimization",
        "Personalized shopping experiences",
        "Visual search capabilities",
        "Dynamic pricing models"
      ],
    },
    {
      title: "Professional Services",
      icon: "Briefcase",
      items: [
        "Document analysis and processing",
        "Contract review automation",
        "Research assistance tools",
        "Knowledge management systems",
        "Resource scheduling optimization"
      ],
    },
  ], 
  backgroundIcon: "Bot",
  backgroundIconWidth: 400,
  backgroundIconHeight: 400,
};

export default aiAutomationApplications;