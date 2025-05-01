// src/content/services/consulting-training/service-scope-content.ts

import { ServiceScopeContent } from '@/page-templates/service-page/types';

/**
 * Service scope content for the Consulting & Training service page.
 * This object includes a detailed breakdown of service offerings and the key benefits they provide.
 * 
 * @type {ServiceScopeContent}
 * @property {string} title - The title of the service scope section.
 * @property {string} description - A description of the consulting and training services offered.
 * @property {Array} services - An array of services provided, each containing an icon, title, description, and benefits.
 * @property {string} keyBenefitsTitle - The title for the key benefits section.
 * @property {string} keyBenefitsDescription - A description of the key benefits provided by consulting and training solutions.
 * @property {Array} benefits - An array of key benefits, each containing an icon, title, and description.
 * @property {string} backgroundIcon - The icon used for the background of the service scope section.
 * @property {number} backgroundIconWidth - The width of the background icon.
 * @property {number} backgroundIconHeight - The height of the background icon.
 */
const consultingTrainingServiceScope: ServiceScopeContent = {
  title: "Comprehensive Consulting & Training Solutions",
  description: "We provide expert guidance and knowledge transfer services to help organizations navigate technical challenges, implement effective solutions, and build internal capabilities. Our approach combines strategic consulting with practical training to ensure sustainable results and long-term success.",
  
  services: [
    {
      icon: "Compass",
      title: "Digital Transformation Strategies",
      description: "Develop comprehensive roadmaps for leveraging technology to achieve business objectives and stay competitive in a digital-first world.",
      benefits: [
        "Technology needs assessment and gap analysis",
        "Custom digital transformation roadmaps",
        "Technology stack selection and optimization",
        "Implementation planning and change management",
        "ROI analysis and business case development"
      ]
    },
    {
      icon: "Headphones",
      title: "Implementation, Maintenance, Support & Advisory Services",
      description: "Get expert guidance and hands-on support throughout the technology lifecycle, from initial implementation to ongoing optimization.",
      benefits: [
        "Implementation planning and oversight",
        "System configuration and setup assistance",
        "Ongoing maintenance planning",
        "Technical support frameworks",
        "Strategic technology advisory services"
      ]
    },
    {
      icon: "RefreshCw",
      title: "Technology Optimization & Modernization",
      description: "Enhance your existing technology infrastructure to improve performance, reduce costs, and prepare for future growth.",
      benefits: [
        "Technology stack assessment and rationalization",
        "Performance optimization recommendations",
        "Legacy system modernization strategies",
        "Cloud migration planning and execution",
        "Technical debt reduction frameworks"
      ]
    },
    {
      icon: "GraduationCap",
      title: "Technical Training & Consulting",
      description: "Build your team's capabilities through customized training programs and expert guidance on specific technologies and methodologies.",
      benefits: [
        "Custom training program development",
        "Hands-on technical workshops",
        "Knowledge transfer sessions",
        "Best practices implementation",
        "Team capability assessments"
      ]
    },
    {
      icon: "FileText",
      title: "Official Documentation & Report Copywriting Services",
      description: "Create clear, comprehensive documentation and reports that capture technical knowledge and support effective decision-making.",
      benefits: [
        "System and process documentation",
        "Technical specifications and requirements",
        "User manuals and guides",
        "Implementation and architecture reports",
        "Business and technical analysis documents"
      ]
    }
  ],
  
  keyBenefitsTitle: "Key Benefits",
  keyBenefitsDescription: "Our consulting and training services provide measurable improvements to your organization's technical capabilities and operational effectiveness.",

  benefits: [
    {
      icon: "Zap",
      title: "Accelerated Implementation",
      description: "Reduce time-to-value with expert guidance that helps you avoid common pitfalls and leverage proven approaches."
    },
    {
      icon: "Users",
      title: "Enhanced Team Capabilities",
      description: "Build sustainable internal expertise through knowledge transfer and customized training programs."
    },
    {
      icon: "Target",
      title: "Optimized Technology Investments",
      description: "Maximize the return on your technology investments through strategic guidance and best practices implementation."
    },
    {
      icon: "Shield",
      title: "Reduced Implementation Risk",
      description: "Minimize the risk of costly mistakes and project failures with experienced oversight and proactive problem-solving."
    }
  ],
  backgroundIcon: "Lightbulb",
  backgroundIconWidth: 425,
  backgroundIconHeight: 375,
};

export default consultingTrainingServiceScope;