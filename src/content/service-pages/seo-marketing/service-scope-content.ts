// src/content/services/seo-marketing/service-scope-content.ts

import { ServiceScopeContent } from '@/page-templates/service-page/types';

/**
 * Service scope content for the SEO & Online Marketing service page.
 * This object includes a detailed breakdown of service offerings and the key benefits they provide.
 * 
 * @type {ServiceScopeContent}
 * @property {string} title - The title of the service scope section.
 * @property {string} description - A description of the SEO and online marketing services offered.
 * @property {Array} services - An array of services provided, each containing an icon, title, description, and benefits.
 * @property {string} keyBenefitsTitle - The title for the key benefits section.
 * @property {string} keyBenefitsDescription - A description of the key benefits provided by SEO and online marketing solutions.
 * @property {Array} benefits - An array of key benefits, each containing an icon, title, and description.
 * @property {string} backgroundIcon - The icon used for the background of the service scope section.
 * @property {number} backgroundIconWidth - The width of the background icon.
 * @property {number} backgroundIconHeight - The height of the background icon.
 */
const seoMarketingServiceScope: ServiceScopeContent = {
  title: "Advanced Digital Marketing Solutions",
  description: "We provide end-to-end digital marketing services, from campaign content generation to post-campaign analytics. Our approach combines technical SEO expertise with creative marketing strategies to drive visibility, engagement, and conversions.",
  
  services: [
    {
      icon: "Search",
      title: "Search Engine Optimization (SEO)",
      description: "Enhance your website's visibility on search engines through on-page and off-page optimization, technical SEO, and content strategies.",
      benefits: [
        "Technical SEO audits and optimization",
        "On-page and off-page SEO",
        "Local SEO optimization",
        "Mobile optimization",
        "Content optimization and keyword strategy"
      ]
    },
    {
      icon: "Share2",
      title: "Social Media & Email Marketing",
      description: "Build and engage your audience on platforms like Facebook, Instagram, LinkedIn, and Twitter with strategic content and advertising.",
      benefits: [
        "Platform strategy development",
        "Content creation and scheduling",
        "Paid social advertising",
        "Influencer partnership management",
        "Performance analytics"
      ]
    },
    {
      icon: "FileText",
      title: "Content Marketing Strategies",
      description: "Create and distribute valuable, relevant content to attract and engage your target audience.",
      benefits: [
        "Content strategy development",
        "Blog and article writing",
        "Industry-specific content creation",
        "Content optimization for SEO",
        "Content performance tracking"
      ]
    },
    {
      icon: "BarChart",
      title: "Analytics & Performance Tracking",
      description: "Track, analyze, and report on your marketing performance to inform data-driven decisions.",
      benefits: [
        "Custom analytics setup",
        "Performance monitoring",
        "Conversion tracking",
        "User behavior analysis",
        "ROI measurement",
      ]
    },
    {
      icon: "SquareSplitHorizontal",
      title: "A/B Testing & Conversion Rate Optimization",
      description: "Optimize your website and landing pages to increase the percentage of visitors who take desired actions.",
      benefits: [
        "A/B testing",
        "User experience optimization",
        "Landing page optimization",
        "Heat mapping and user tracking",
        "Behavioral analytics"
      ]
    }
  ],
  
  keyBenefitsTitle: "Key Benefits",
  keyBenefitsDescription: "Our SEO and online marketing solutions provide measurable improvements to your business visibility and customer acquisition.",

  benefits: [
    {
      icon: "TrendingUp",
      title: "Increased Organic Traffic",
      description: "Higher rankings in search results drive more qualified visitors to your website."
    },
    {
      icon: "DollarSign",
      title: "Better ROI",
      description: "Targeted strategies ensure marketing spend generates optimal returns on investment."
    },
    {
      icon: "Eye",
      title: "Enhanced Brand Visibility",
      description: "Stronger online presence across multiple channels improves brand recognition."
    },
    {
      icon: "ArrowUpCircle",
      title: "Higher Conversion Rates",
      description: "Optimized content and user experience drive better results and more conversions."
    }
  ],
  backgroundIcon: "Globe",
  backgroundIconWidth: 400,
  backgroundIconHeight: 375,
};

export default seoMarketingServiceScope;