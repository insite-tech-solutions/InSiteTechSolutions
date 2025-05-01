// src/content/services/data-analysis/insite-advantage-content.ts

import { InSiteAdvantageContent } from '@/page-templates/service-page/types';

/**
 * Content for the Data Analysis InSite Advantage section.
 * This includes advantages (displayed as cards) and broader business benefits (shown in a timeline layout).
 * 
 * @type {InSiteAdvantageContent}
 * @property {string} title - The main title for the InSite Advantage section.
 * @property {string} description - A detailed description of the advantages of partnering with InSite Tech Solutions.
 * @property {Array} advantages - An array of advantages, each containing a title, description, and icon.
 * @property {Array} benefits - An array of broader business benefits, each containing a title and description.
 */
const dataAnalysisAdvantageContent: InSiteAdvantageContent = {
  title: "The InSite Advantage",
  description: "At InSite Tech, we bridge the gap between complex data science and practical business applications. Our advantage lies in our ability to translate sophisticated analytical techniques into clear, actionable insights that drive tangible business results. We don't just analyze data – we help you use data to solve real business challenges and create sustainable competitive advantages.",
  
  advantages: [
    {
      title: "Business-First Approach",
      description: "We start with your business objectives, not just the data, ensuring insights directly address your most important challenges.",
      icon: "Target"
    },
    {
      title: "End-to-End Analytics",
      description: "From data collection and preparation to insight generation and implementation guidance, we provide comprehensive analytical solutions.",
      icon: "BarChart"
    },
    {
      title: "Accessible Expertise",
      description: "We translate complex technical concepts into clear business language, making advanced analytics accessible to all stakeholders.",
      icon: "MessageSquare"
    },
    {
      title: "Transparent Methods",
      description: "We clearly explain our analytical approaches and assumptions, building trust in the insights and recommendations.",
      icon: "Eye"
    },
    {
      title: "Technical Excellence with Practical Focus",
      description: "Our team combines statistical expertise with industry knowledge to deliver analysis that's both technically sound and practically useful.",
      icon: "Lightbulb"
    },
    {
      title: "Local Partnership",
      description: "As a local business, we provide personalized attention and direct communication throughout your project and beyond.",
      icon: "MapPin"
    }
  ],
  
  benefits: [
    {
      title: "Better Decision Making",
      description: "Replace intuition with evidence-based strategies that reduce risk and improve outcomes across your organization."
    },
    {
      title: "Operational Efficiency",
      description: "Identify and eliminate inefficiencies in your processes, optimizing resource allocation and reducing costs."
    },
    {
      title: "Market Responsiveness",
      description: "Gain deeper understanding of market trends and customer needs, enabling faster and more effective responses to changing conditions."
    },
    {
      title: "Competitive Advantage",
      description: "Leverage data assets to develop unique insights and capabilities that differentiate your business from competitors."
    }, 
    {
      title: "Future Readiness",
      description: "Develop predictive capabilities that help you anticipate changes and position your organization for long-term success."
    }
  ],
};

export default dataAnalysisAdvantageContent;