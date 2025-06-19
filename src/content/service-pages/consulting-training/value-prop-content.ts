/**
 * @fileoverview Value Proposition Content for the Consulting & Training Service Page
 *
 * This file contains the content configuration for the value proposition section of the Consulting & Training service page.
 * It includes key benefits, market trends, animated insights, and a final call to action.
 */

import { ValuePropContent } from '@/page-templates/service-page/types';

/**
 * Value proposition content for the Consulting & Training service page.
 * This object includes key benefits, market trends, animated insights, and a final call to action.
 * 
 * @type {ValuePropContent}
 * @property {string} title - The title of the value proposition section.
 * @property {string} description - A description of how consulting and training can transform business capabilities.
 * @property {Array} industryTrends - An array of industry trends, each containing an icon, title, and description.
 * @property {string} industryTrendsDescription - A description of the industry trends section.
 * @property {Array} marketInsights - An array of market insights, each containing an id and parts for animated stats.
 * @property {Object} callToAction - An object containing the call to action details, including title, description, button text, link, and icon.
 */
const consultingTrainingValueProp: ValuePropContent = {
  title: "Why Expert Guidance Matters",
  description: "In today's rapidly evolving technological landscape, organizations face increasing challenges in implementing and optimizing digital solutions. While many businesses recognize the importance of digital transformation, they often lack the specialized knowledge and experience to maximize their technology investments. Our consulting and training services bridge this gap, providing expert guidance and knowledge transfer that empower your team to navigate complex technical challenges, make informed decisions, and develop sustainable internal capabilities. By combining strategic advice with practical implementation support and customized training, we help you not only solve immediate challenges but also build the foundation for long-term success.",
  
  // Industry trends that appear in expandable cards
  industryTrends: [
    {
      icon: "Zap",
      title: "Digital Acceleration",
      description: "Rapid adoption of digital technologies across all sectors, requiring new skills and implementation strategies."
    },
    {
      icon: "Users",
      title: "Knowledge Workforce Development",
      description: "Growing emphasis on upskilling teams to leverage new technologies and adapt to changing requirements."
    },
    {
      icon: "FileText",
      title: "Documentation & SOPs",
      description: "Increasing focus on standardized processes and comprehensive documentation for operational excellence."
    },
    {      
      icon: "Workflow",
      title: "Workflow Optimization",
      description: "Focus on streamlining business processes through technology to increase efficiency and reduce operational costs."
    },
    {
      icon: "Shield",
      title: "Digital Resilience",
      description: "Growing need for robust technology strategies that ensure continuity and security in a digital-first world."
    }
  ],
  
  // Description for the industry trends section
  industryTrendsDescription: "The technology landscape is evolving rapidly across all sectors, with several key trends reshaping how organizations implement and leverage digital solutions. Organizations that develop the right expertise and implementation strategies gain significant advantages in operational efficiency and market responsiveness.",
  
  // Market insights with inline animated stats
  marketInsights: [
    {
      id: "1",
      parts: [
        "Organizations with strong digital transformation expertise achieve ",
        { value: 26, suffix: "%" },
        " higher profit margins than industry peers."
      ]
    },
    {
      id: "2",
      parts: [
        { value: 94, suffix: "%" },
        " of organizations report that specialized skills are needed to implement digital strategies effectively."
      ]
    },
    {
      id: "3",
      parts: [
        "Teams with comprehensive training programs show ",
        { value: 218, suffix: "%" },
        " higher productivity and better outcomes."
      ]
    },
    {
      id: "4",
      parts: [
        { value: 83, suffix: "%" },
        " of organizations cite knowledge gaps as the primary barrier to successful technology implementation."
      ]
    }
  ],

  
  // Call to action displayed at the bottom of the right column
  callToAction: {
    title: "Ready to Accelerate Your Success?",
    description: "Let's develop a consulting and training strategy that empowers your team and maximizes your technology investments.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonIcon: "ArrowRight",
  },

};

export default consultingTrainingValueProp;