// src/content/services/consulting-training/applications-content.ts

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
        "Project management frameworks"
      ],
    },
    {
      title: "Team Development",
      icon: "Users",
      items: [
        "Technical skills training programs",
        "Leadership development for IT teams",
        "User adoption strategies",
        "Cross-functional collaboration models",
        "Knowledge management systems"
      ],
    },
    {
      title: "Operational Excellence",
      icon: "Settings",
      items: [
        "Process optimization frameworks",
        "Technology integration strategies",
        "Performance monitoring systems",
        "Workflow automation consulting",
        "System documentation and knowledge bases"
      ],
    },
  ],
  
  industries: [
    {
      title: "Technology & SaaS",
      icon: "Code",
      items: [
        "DevOps implementation consulting",
        "Product development methodologies",
        "Technology stack optimization",
        "Scalability planning",
        "Technical team training"
      ],
    },
    {
      title: "Professional Services",
      icon: "Briefcase",
      items: [
        "Client management systems",
        "Service delivery optimization",
        "Knowledge management frameworks",
        "Collaboration tools implementation",
        "Project management methodologies"
      ],
    },
    {
      title: "Healthcare & Life Sciences",
      icon: "Stethoscope",
      items: [
        "Healthcare IT implementation",
        "Compliance training",
        "Patient data management systems",
        "Telemedicine adoption strategies",
        "Clinical workflow optimization"
      ],
    },
    {
      title: "Manufacturing & Engineering",
      icon: "Factory",
      items: [
        "Industry 4.0 transformation",
        "Production system optimization",
        "Supply chain technology integration",
        "Quality management systems",
        "Technical documentation development"
      ],
    },
    {
      title: "Education & Non-Profit",
      icon: "BookOpen",
      items: [
        "Educational technology implementation",
        "Digital learning platforms",
        "Donor management systems",
        "Grant management optimization",
        "Staff technology training"
      ],
    },
  ], 
  backgroundIcon: "GraduationCap",
  backgroundIconWidth: 400,
  backgroundIconHeight: 400,
};

export default consultingTrainingApplications;