// src/content/services/web-app-development/applications-content.ts

import { ApplicationsContent } from '@/page-templates/service-page/types';

/**
 * Content configuration for the Web & App Development service page.
 * This includes industry solutions, categories, and related descriptions/icons.
 * 
 * @type {ApplicationsContent}
 * @property {string} title - The main title for the applications section.
 * @property {string} description - A brief description of the web and app development solutions offered.
 * @property {string} industrySolutionsTitle - Title for the industry-specific solutions carousel.
 * @property {string} industrySolutionsDescription - Description for the industry-specific solutions carousel.
 * @property {Array} categories - An array of categories, each containing a title, icon, and items.
 * @property {Array} industries - An array of industries, each containing a title, icon, and items (carousel cards).
 * @property {string} backgroundIcon - Icon used as a background for the section.
 */
const webAppDevelopmentApplications: ApplicationsContent = {
  title: "Comprehensive Digital Solutions",
  description: "With experience spanning several domains, we are able to provide a one-stop-shop for all your tech related needs. Our digital strategies empower businesses by enhancing their:",
  industrySolutionsTitle: "Industry-Specific Solutions",
  industrySolutionsDescription: "Leveraging our technical expertise across various sectors, we deliver specialized solutions tailored to your industry's unique requirements.",
  
  categories: [
    {
      title: "Digital Presence",
      icon: "Globe",
      items: [
        "Professional company websites",
        "Landing pages and marketing sites",
        "Blog and content management systems",
        "Social media integration"
      ],
    },
    {
      title: "E-commerce & Customer Engagement",
      icon: "ShoppingCart",
      items: [
        "Full-featured e-commerce platforms",
        "Secure customer portals and membership sites",
        "Appointment booking and reservation systems",
        "Interactive product catalogs and configurators"
      ],
    },
    {
      title: "Business Operations",
      icon: "BarChart3",
      items: [
        "Custom business management applications",
        "Inventory and supply chain management systems",
        "Employee portals and workflow automation tools",
        "Analytics and reporting dashboards"
      ],
    },
  ],
  
  industries: [
    {
      title: "Wellness",
      icon: "Heart",
      items: [
        "Client portals and scheduling systems",
        "Progress monitoring applications",
        "Business management tools"
      ],
    },
    {
      title: "Retail & E-commerce",
      icon: "Store",
      items: [
        "Online stores with inventory management",
        "Product customization tools",
        "Virtual showrooms"
      ],
    },
    {
      title: "Education & Training",
      icon: "GraduationCap",
      items: [
        "Learning management systems",
        "Interactive course platforms",
        "Student progress tracking"
      ],
    },
    {
      title: "Professional Services",
      icon: "Briefcase",
      items: [
        "Client management portals",
        "Service tracking platforms",
        "Resource scheduling systems"
      ],
    },
  ], 
  backgroundIcon: "Layout",
  backgroundIconWidth: 400,
  backgroundIconHeight: 400,
};

export default webAppDevelopmentApplications;