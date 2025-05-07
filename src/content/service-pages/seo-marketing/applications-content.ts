// src/content/services/seo-marketing/applications-content.ts

import { ApplicationsContent } from '@/page-templates/service-page/types';

/**
 * Content configuration for the SEO & Online Marketing service page.
 * This includes industry solutions, categories, and related descriptions/icons.
 * 
 * @type {ApplicationsContent}
 * @property {string} title - The main title for the applications section.
 * @property {string} description - A brief description of the SEO and online marketing solutions offered.
 * @property {string} industrySolutionsTitle - Title for the industry-specific solutions carousel.
 * @property {string} industrySolutionsDescription - Description for the industry-specific solutions carousel.
 * @property {Array} categories - An array of categories, each containing a title, icon, and items.
 * @property {Array} industries - An array of industries, each containing a title, icon, and items (carousel cards).
 * @property {string} backgroundIcon - Icon used as a background for the section.
 * @property {number} backgroundIconWidth - Width of the background icon.
 * @property {number} backgroundIconHeight - Height of the background icon.
 */
const seoMarketingApplications: ApplicationsContent = {
  title: "Optimized Digital Marketing Solutions",
  description: "Our SEO and marketing strategies empower a broad range of individuals, businesses, and organizations by improving their digital presence and targeting the right audience with the right message at the right time. Our digital strategies help organizations achieve their growth objectives by enhancing their:",
  industrySolutionsTitle: "Industry-Specific Solutions",
  industrySolutionsDescription: "We customize our approaches for different sectors, leveraging industry-specific insights to create targeted marketing strategies that deliver results.",
  
  categories: [
    {
      title: "Business Growth",
      icon: "TrendingUp",
      items: [
        "Lead generation campaigns",
        "Brand awareness initiatives",
        "Customer retention programs",
        "Market expansion strategies"
      ],
    },
    {
      title: "E-commerce Success",
      icon: "ShoppingCart",
      items: [
        "Product page optimization",
        "Shopping campaign management",
        "Marketplace optimization",
        "Conversion rate optimization"
      ],
    },
    {
      title: "Local Visibility",
      icon: "MapPin",
      items: [
        "Local SEO campaigns",
        "Google Business Profile optimization",
        "Local content strategies",
        "Review management"
      ],
    },
  ],
  
  industries: [
    {
      title: "Professional Services",
      icon: "Briefcase",
      items: [
        "Thought leadership content",
        "Lead generation campaigns",
        "Authority building",
        "Professional networking"
      ],
    },
    {
      title: "Retail & E-commerce",
      icon: "Store",
      items: [
        "Product optimization",
        "Shopping feed management",
        "Marketplace strategy",
        "Customer journey optimization"
      ],
    },
    {
      title: "B2B Services",
      icon: "Users",
      items: [
        "Lead generation",
        "Content marketing",
        "LinkedIn optimization",
        "Account-based marketing"
      ],
    },
    {
      title: "Real Estate",
      icon: "Home",
      items: [
        "Property listing optimization",
        "Targeted PPC campaigns",
        "Virtual tour promotion",
        "Lead qualification systems"
      ],
    },
    {
      title: "Creative & Design",
      icon: "Palette",
      items: [
        "Portfolio optimization",
        "Social media presence",
        "Client case studies",
        "Service showcase"
      ],
    },
  ], 
  backgroundIcon: "ChartLine",
  backgroundIconWidth: 400,
  backgroundIconHeight: 400,
};

export default seoMarketingApplications;