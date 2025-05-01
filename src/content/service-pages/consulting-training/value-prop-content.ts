// src/content/services/consulting-training/value-prop-content.ts

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
      description: "Rapid adoption of digital technologies across all business functions, requiring new skills and implementation strategies."
    },
    {
      icon: "Users",
      title: "Knowledge Workforce Development",
      description: "Growing emphasis on upskilling employees to leverage new technologies and adapt to changing job requirements."
    },
    {
      icon: "Cloud",
      title: "Cloud Transformation",
      description: "Shift from on-premises infrastructure to cloud-based solutions, necessitating new management approaches and expertise."
    },
    {
      icon: "Workflow",
      title: "Workflow Optimization",
      description: "Focus on streamlining business processes through technology to increase efficiency and reduce operational costs."
    },
    {
      icon: "Shield",
      title: "Digital Resilience",
      description: "Increasing need for robust technology strategies that ensure business continuity and security in a digital-first world."
    }
  ],
  
  // Description for the industry trends section
  industryTrendsDescription: "The business technology landscape is evolving rapidly, with several key trends reshaping how organizations implement and leverage digital solutions. Organizations that develop the right expertise and implementation strategies gain significant advantages in operational efficiency and market responsiveness.",
  
  // Market insights with inline animated stats
  marketInsights: [
    {
      id: "1",
      parts: [
        { value: 70, suffix: "%" },
        " of digital transformation initiatives fail to reach their stated goals due to implementation challenges."
      ]
    },
    {
      id: "2",
      parts: [
        "Organizations with strong digital transformation expertise achieve ",
        { value: 26, suffix: "%" },
        " higher profit margins than industry peers."
      ]
    },
    {
      id: "3",
      parts: [
        { value: 94, suffix: "%" },
        " of executives report that specialized skills are needed to implement digital strategies effectively."
      ]
    },
    {
      id: "4",
      parts: [
        "Companies with comprehensive employee training programs have ",
        { value: 218, suffix: "%" },
        " higher revenue per employee."
      ]
    },
    {
      id: "5",
      parts: [
        { value: 83, suffix: "%" },
        " of organizations cite knowledge gaps as the primary barrier to successful technology implementation."
      ]
    }
  ],
  
  // Custom comparison table data
  comparisonTable: {
    title: "DIY vs. Expert-Guided Implementation",
    headers: ["Aspect", "DIY Approach", "Expert-Guided Approach"],
    rows: [
      {
        "aspect": "Implementation Time",
        "diy approach": "Extended timeline with trial-and-error",
        "expert-guided approach": "Accelerated deployment with proven methods"
      },
      {
        "aspect": "Risk Level",
        "diy approach": "High risk of costly mistakes",
        "expert-guided approach": "Reduced risk through experience"
      },
      {
        "aspect": "Knowledge Development",
        "diy approach": "Limited to project-specific learning",
        "expert-guided approach": "Comprehensive skill building and best practices"
      }
    ]
  },
  
  // Call to action displayed at the bottom of the right column
  callToAction: {
    title: "Ready to Accelerate Your Success?",
    description: "Let's develop a consulting and training strategy that empowers your team and maximizes your technology investments.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonIcon: "ArrowRight",
  },
  
  // Additional content for various sections
  additionalContent: {
    beforeCta: "Expert consulting and training deliver exceptional ROI by reducing implementation time, preventing costly mistakes, and building valuable internal capabilities. Unlike one-time fixes, knowledge transfer creates lasting value by enabling your team to continuously optimize and adapt your technology solutions as business needs evolve. Organizations that invest in expert guidance typically achieve faster implementation, higher user adoption, and more sustainable results from their technology investments."
  },
};

export default consultingTrainingValueProp;