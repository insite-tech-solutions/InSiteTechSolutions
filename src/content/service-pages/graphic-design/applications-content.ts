// src/content/services/graphic-design/applications-content.ts

import { ApplicationsContent } from '@/page-templates/service-page/types';

/**
 * Content configuration for the Graphic Design & Branding service page.
 * This includes industry solutions, categories, and related descriptions/icons.
 * 
 * @type {ApplicationsContent}
 * @property {string} title - The main title for the applications section.
 * @property {string} description - A brief description of the graphic design and branding solutions offered.
 * @property {string} industrySolutionsTitle - Title for the industry-specific solutions carousel.
 * @property {string} industrySolutionsDescription - Description for the industry-specific solutions carousel.
 * @property {Array} categories - An array of categories, each containing a title, icon, and items.
 * @property {Array} industries - An array of industries, each containing a title, icon, and items (carousel cards).
 * @property {string} backgroundIcon - Icon used as a background for the section.
 * @property {number} backgroundIconWidth - Width of the background icon.
 * @property {number} backgroundIconHeight - Height of the background icon.
 */
const graphicDesignApplications: ApplicationsContent = {
  title: "Design Solutions for Every Need",
  description: "Our graphic design and branding expertise spans across numerous industries and business requirements. Our creative strategies help organizations strengthen their market presence by enhancing their:",
  industrySolutionsTitle: "Industry-Specific Solutions",
  industrySolutionsDescription: "Drawing on our extensive design experience across various sectors, we create tailored visual solutions that address the unique requirements of your industry.",
  
  categories: [
    {
      title: "Brand Development",
      icon: "Lightbulb",
      items: [
        "Logo design and brand identity systems",
        "Brand guidelines and style guides",
        "Brand messaging and voice development",
        "Brand refresh and repositioning",
        "Visual identity consistency audit"
      ],
    },
    {
      title: "Marketing & Promotion",
      icon: "TrendingUp",
      items: [
        "Digital and print advertising materials",
        "Social media visual content",
        "Email marketing templates",
        "Event and trade show assets",
        "Promotional video and animation"
      ],
    },
    {
      title: "Digital Experience",
      icon: "Monitor",
      items: [
        "Website visual design",
        "Mobile app interface design",
        "User experience (UX) optimization",
        "Interactive digital elements",
        "E-commerce product presentation"
      ],
    },
  ],
  
  industries: [
    {
      title: "Retail & E-commerce",
      icon: "ShoppingBag",
      items: [
        "E-commerce website design",
        "Product photography enhancement",
        "Seasonal campaign visuals",
        "Shopping experience design"
      ],
    },
    {
      title: "Professional Services",
      icon: "Briefcase",
      items: [
        "Corporate identity systems",
        "Proposal and pitch deck templates",
        "Client-facing document design",
        "Conference and event materials"
      ],
    },
    {
      title: "Food & Hospitality",
      icon: "Coffee",
      items: [
        "Menu design and food photography",
        "Environmental graphics and signage",
        "Promotional materials",
        "Digital presence design"
      ],
    },
    {
      title: "Healthcare & Wellness",
      icon: "Heart",
      items: [
        "Patient education materials",
        "Health campaign visuals",
        "Digital health app interfaces",
        "Medical infographics"
      ],
    },
    {
      title: "Research & Academia",
      icon: "Microscope",
      items: [
        "Scientific and technical illustrations",
        "Publication graphics design",
        "Research proposal design", 
        "Research group brand development"
      ],
    },
    {
      title: "Education & Non-Profit",
      icon: "BookOpen",
      items: [
        "Educational materials and infographics",
        "Fundraising campaign visuals",
        "Community outreach materials",
        "Event promotion graphics"
      ],
    },
    {
      title: "Musicians & Artists",
      icon: "Music",
      items: [
        "Album cover design",
        "Music video editing",
        "Logos and promotional materials",
        "Artist brand development"
      ]
    },
    {      title: "Local Business",
      icon: "Store",
      items: [
        "Storefront and window displays",
        "Local marketing materials",
        "Community event graphics",
        "Neighborhood-focused branding",
      ], 
    },
  ], 
  backgroundIcon: "PenTool",
  backgroundIconWidth: 400,
  backgroundIconHeight: 400,
};

export default graphicDesignApplications;