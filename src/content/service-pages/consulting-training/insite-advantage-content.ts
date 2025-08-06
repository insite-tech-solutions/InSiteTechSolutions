/**
 * @fileoverview InSite Advantage Content for the Consulting & Training Service Page
 *
 * This file contains the content configuration for the InSite Advantage section of the Consulting & Training service page.
 * It includes a title, description, and a list of advantages and benefits.
 */

import { InSiteAdvantageContent } from '@/page-templates/service-page/types';

/**
 * Content for the Consulting & Training InSite Advantage section.
 * This includes advantages (displayed as cards) and broader business benefits (shown in a timeline layout).
 * 
 * @type {InSiteAdvantageContent}
 * @property {string} title - The main title for the InSite Advantage section.
 * @property {string} description - A detailed description of the advantages of partnering with InSite Tech Solutions.
 * @property {Array} advantages - An array of advantages, each containing a title, description, and icon.
 * @property {Array} benefits - An array of broader business benefits, each containing a title and description.
 */
const consultingTrainingAdvantageContent: InSiteAdvantageContent = {
  title: "The InSite Advantage",
  description: "At InSite Tech, we bridge the gap between technical expertise and practical implementation. Our advantage lies in our ability to translate complex technical concepts into accessible guidance and actionable knowledge that empowers your team. We don't just provide consulting and training – we build lasting capabilities within your organization that drive sustainable results and continuous improvement.",
  
  advantages: [
    {
      title: "Client-Specific Approach",
      description: "We tailor our consulting and training services to your specific needs, industry context, and team dynamics for maximum relevance and impact.",
      icon: "Target"
    },
    {
      title: "Practical Implementation Focus",
      description: "We emphasize real-world application over theoretical concepts, ensuring that knowledge translates into practical action and measurable results.",
      icon: "Hammer"
    },
    {
      title: "Comprehensive Knowledge Transfer",
      description: "Our systematic approach to knowledge sharing ensures that expertise becomes embedded within your organization, not just with individual team members.",
      icon: "Share2"
    },
    {
      title: "Ongoing Support and Reinforcement",
      description: "We provide follow-up assistance and reinforcement to ensure that new knowledge and capabilities are successfully applied and sustained.",
      icon: "LifeBuoy"
    },
    {
      title: "Cross-Functional Expertise",
      description: "Our team combines technical depth with business acumen, delivering guidance that addresses both technical requirements and business objectives.",
      icon: "Layers"
    },
    {
      title: "Local Partnership",
      description: "As a local business, we provide personalized attention and direct communication throughout your project and beyond.",
      icon: "MapPin"
    }
  ],
  
  benefits: [
    {
      title: "Accelerated Capability Development",
      description: "Build essential technical and operational skills faster through expert guidance and structured knowledge transfer."
    },
    {
      title: "Reduced Implementation Risk",
      description: "Minimize the risk of costly mistakes and project failures with expert oversight and proven implementation strategies."
    },
    {
      title: "Enhanced Team Confidence",
      description: "Empower your team with the knowledge, tools, and support they need to tackle complex technical challenges with confidence."
    },
    {
      title: "Sustainable Organizational Expertise",
      description: "Develop lasting institutional knowledge that remains with your organization even as team members change over time."
    }, 
    {
      title: "Strategic Technology Alignment",
      description: "Ensure that your technology implementations and team capabilities directly support your strategic business objectives."
    }
  ],
};

export default consultingTrainingAdvantageContent;