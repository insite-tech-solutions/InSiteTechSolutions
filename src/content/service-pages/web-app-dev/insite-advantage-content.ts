// src/content/services/web-app-development/insite-advantage-content.ts

import { InSiteAdvantageContent } from '@/page-templates/service-page/types';

/**
 * Content for the Web & App Development InSite Advantage section.
 * This includes advantages (displayed as cards) and broader business benefits (shown in a timeline layout).
 * 
 * @type {InSiteAdvantageContent}
 * @property {string} title - The main title for the InSite Advantage section.
 * @property {string} description - A detailed description of the advantages of partnering with InSite Tech Solutions.
 * @property {Array} advantages - An array of advantages, each containing a title, description, and icon.
 * @property {Array} benefits - An array of broader business benefits, each containing a title and description.
 */
const webAppDevelopmentAdvantageContent: InSiteAdvantageContent = {
  title: "The InSite Advantage",
  description: "At InSite Tech, we bridge the gap between technical expertise and practical business solutions. Our advantage lies in our ability to understand both your business needs and the technical landscape, delivering digital strategies that are perfectly matched to your goals and budget. We don't just build websites and apps – we create digital tools that drive your business forward.",
  
  advantages: [
    {
      title: "Client-First Approach",
      description: "We prioritize your business goals and tailor solutions to fit your needs and budget.",
      icon: "Users"
    },
    {
      title: "End-to-End Expertise",
      description: "From design to development, we provide full-service solutions that deliver results.",
      icon: "Workflow"
    },
    {
      title: "Adaptable Solutions",
      description: "Whether it's a fully custom web app or a simple, efficient WordPress site, we match the solution to your project—not the other way around.",
      icon: "FileCode"
    },
    {
      title: "Long-Term Support",
      description: "We build partnerships, offering ongoing support and maintenance to keep your digital assets performing optimally.",
      icon: "HeadphonesIcon"
    },
    {
      title: "Technical Excellence with Business Sense",
      description: "Our recommendations balance technical capabilities with practical business value, ensuring you get solutions that drive real results.",
      icon: "Brain"
    },
    {
      title: "Local Partnership",
      description: "As a local business, we provide personalized attention and direct communication throughout your project and beyond.",
      icon: "MapPin"
    }
  ],
  
  benefits: [
    {
      title: "Measurable Outcomes",
      description: "Achieve improved performance, increased conversion rates, and higher customer satisfaction."
    },
    {
      title: "Custom Solutions",
      description: "Avoid the pitfalls of one-size-fits-all websites and apps with solutions that don't overcomplicate or oversell unnecessary features."
    },
    {
      title: "Personalized Service",
      description: "Experience hands-on, personalized service from a small business that cares about relationships, not just transactions."
    },
    {
      title: "Flexibility and Transparency",
      description: "Count on flexibility and transparency in all stages of the project, ensuring we deliver exactly what you envisioned."
    }, 
    {
      title: "Scalable Solutions",
      description: "We build systems that grow and adapt with your business needs, ensuring your digital assets remain relevant and effective over time."
    }
  ],
};

export default webAppDevelopmentAdvantageContent;