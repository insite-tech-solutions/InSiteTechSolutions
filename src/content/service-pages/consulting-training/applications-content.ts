/**
 * @fileoverview Applications Content for the Consulting & Training Service Page
 *
 * This file contains the content configuration for the Consulting & Training service page.
 * It includes industry solutions, categories, and related descriptions/icons.
 * The content is organized into sections and categories to provide a clear and structured presentation.
 */

import { ApplicationsContent } from '@/page-templates/service-page/types';

/**
 * Content configuration for the Consulting & Training service page.
 * This includes industry solutions, categories, and related descriptions/icons.
 * 
 * @type {ApplicationsContent}
 * @property {string} title - The main title for the applications section.
 * @property {string} description - A brief description of the consulting and training solutions offered.
 * @property {string} industrySolutionsTitle - Title for the industry-specific solutions carousel.
 * @property {string} industrySolutionsDescription - Description for the industry-specific solutions carousel.
 * @property {Array} categories - An array of categories, each containing a title, icon, and items.
 * @property {Array} industries - An array of industries, each containing a title, icon, and items (carousel cards).
 * @property {string} backgroundIcon - Icon used as a background for the section.
 * @property {number} backgroundIconWidth - Width of the background icon.
 * @property {number} backgroundIconHeight - Height of the background icon.
 */
const consultingTrainingApplications: ApplicationsContent = {
  title: "Expert Guidance Across Industries",
  description: "Our consulting and training expertise spans numerous sectors and business functions, helping organizations build capabilities and implement effective technology solutions. Our knowledge transfer strategies empower businesses by enhancing their:",
  industrySolutionsTitle: "Industry-Specific Solutions",
  industrySolutionsDescription: "We tailor our consulting and training approaches to address the unique challenges and opportunities in different sectors, delivering solutions that build relevant expertise and drive specific industry outcomes.",
  
  categories: [
    {
      title: "Strategic Implementation",
      icon: "Compass",
      items: [
        "Technology selection guidance",
        "Implementation planning and oversight",
        "Change management strategies",
        "Digital transformation roadmaps",
      ],
    },
    {
      title: "Knowledge Transfer",
      icon: "Users",
      items: [
        "Technical skills training programs",
        "User adoption strategies",
        "Cross-functional collaboration models",
        "Knowledge management systems"
      ],
    },
    {
      title: "Operational Excellence",
      icon: "FileText",
      items: [
        "Standard operating procedures",
        "Technical documentation",
        "Technology integration strategies",
        "Workflow automation consulting",
      ],
    },
  ],
  
  industries: [
    {
      title: "Academic & Research",
      icon: "GraduationCap",
      items: [
        "Research methodology consulting",
        "Data analysis training",
        "Technical documentation",
        "Lab workflow optimization",
      ],
    },
    {
      title: "Professional Services",
      icon: "Briefcase",
      items: [
        "Client management systems",
        "Service delivery optimization",
        "Knowledge management frameworks",
        "Project management methodologies"
      ],
    },
    {
      title: "Business Optimization & Technical Consulting",
      icon: "Code",
      items: [
        "Route optimization for service businesses",
        "Technical documentation and SOP templates",
        "Physics and scientific consulting",
        "Business process automation"
      ],
    },
    {      
      title: "Education & Non-Profit",
      icon: "BookOpen",
      items: [
        "Educational technology implementation",
        "Digital learning platforms",
        "Research methodology consulting",
        "Knowledge management systems",
      ],
    },
  ], 
  backgroundIcon: "GraduationCap",
  backgroundIconWidth: 400,
  backgroundIconHeight: 400,
};

export default consultingTrainingApplications;