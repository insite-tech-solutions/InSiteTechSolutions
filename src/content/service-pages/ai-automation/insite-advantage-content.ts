// src/content/services/ai-automation/insite-advantage-content.ts

import { InSiteAdvantageContent } from '@/page-templates/service-page/types';

/**
 * Content for the AI & Automation InSite Advantage section.
 * This includes advantages (displayed as cards) and broader business benefits (shown in a timeline layout).
 * 
 * @type {InSiteAdvantageContent}
 * @property {string} title - The main title for the InSite Advantage section.
 * @property {string} description - A detailed description of the advantages of partnering with InSite Tech Solutions.
 * @property {Array} advantages - An array of advantages, each containing a title, description, and icon.
 * @property {Array} benefits - An array of broader business benefits, each containing a title and description.
 */
const aiAutomationAdvantageContent: InSiteAdvantageContent = {
  title: "The InSite Advantage",
  description: "At InSite Tech, we bridge the gap between advanced AI technology and practical business applications. Our advantage lies in our ability to make complex technologies accessible and effective for organizations of all sizes. We don't just implement AI and automation – we create tailored solutions that align with your business goals, integrate with your existing systems, and deliver measurable, sustainable results.",
  
  advantages: [
    {
      title: "Business-First Approach",
      description: "We start with your business objectives and challenges, ensuring that every AI solution directly addresses your most important needs.",
      icon: "Target"
    },
    {
      title: "End-to-End Implementation",
      description: "From initial strategy to deployment and optimization, we provide comprehensive support throughout your AI and automation journey.",
      icon: "Workflow"
    },
    {
      title: "Right-Sized Solutions",
      description: "Whether you need a simple automation script or an enterprise-wide AI system, we match the solution to your specific requirements and budget.",
      icon: "Scale"
    },
    {
      title: "Long-Term Partnership",
      description: "We build lasting relationships, providing ongoing support, optimization, and adaptation as your business evolves and AI capabilities advance.",
      icon: "Handshake"
    },
    {
      title: "Technical Excellence with Practical Focus",
      description: "Our team combines deep technical expertise with practical business sense, delivering solutions that are sophisticated yet accessible and maintainable.",
      icon: "Code"
    },
    {
      title: "Local Partnership",
      description: "As a local business, we provide personalized attention and direct communication throughout your project and beyond.",
      icon: "MapPin"
    }
  ],
  
  benefits: [
    {
      title: "Operational Transformation",
      description: "Transform manual, time-consuming processes into streamlined, automated workflows that reduce costs and free up resources for strategic initiatives."
    },
    {
      title: "Enhanced Decision Quality",
      description: "Leverage data-driven insights and predictive analytics to make better, faster decisions across all levels of your organization."
    },
    {
      title: "Scalable Intelligence",
      description: "Create systems that scale your organization's intelligence and capabilities without proportional increases in headcount or resources."
    },
    {
      title: "Continuous Improvement",
      description: "Implement self-improving systems that learn from experience and get better over time, creating compounding returns on your investment."
    }, 
    {
      title: "Adaptive Capabilities",
      description: "Develop flexible, responsive capabilities that can quickly adapt to changing market conditions, customer needs, and business requirements."
    }
  ],
};

export default aiAutomationAdvantageContent;