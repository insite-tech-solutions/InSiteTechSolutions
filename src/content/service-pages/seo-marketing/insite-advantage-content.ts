// src/content/services/seo-marketing/insite-advantage-content.ts

import { InSiteAdvantageContent } from '@/page-templates/service-page/types';

/**
 * Content for the SEO & Online Marketing InSite Advantage section.
 * This includes advantages (displayed as cards) and broader business benefits (shown in a timeline layout).
 * 
 * @type {InSiteAdvantageContent}
 * @property {string} title - The main title for the InSite Advantage section.
 * @property {string} description - A detailed description of the advantages of partnering with InSite Tech Solutions.
 * @property {Array} advantages - An array of advantages, each containing a title, description, and icon.
 * @property {Array} benefits - An array of broader business benefits, each containing a title and description.
 */
const seoMarketingAdvantageContent: InSiteAdvantageContent = {
  title: "The InSite Advantage",
  description: "Partner with a team that understands both the technical and creative aspects of digital marketing. At InSite Tech, we bridge the gap between marketing strategy and technical implementation, delivering campaigns that drive real business results. Our client-first approach ensures that every strategy is tailored to your unique business needs and goals.",
  
  advantages: [
    {
      title: "Data-Driven Approach",
      description: "Our decisions are based on thorough data analysis and industry insights, ensuring effective and measurable outcomes.",
      icon: "BarChart"
    },
    {
      title: "Transparent Reporting",
      description: "We provide clear, regular updates on your campaign's performance so you always know how your investment is performing.",
      icon: "FileText"
    },
    {
      title: "Customized Strategies",
      description: "Our solutions are tailored to your specific business goals, avoiding one-size-fits-all approaches that waste resources.",
      icon: "Settings"
    },
    {
      title: "Technical Excellence",
      description: "We combine deep understanding of marketing principles with technical SEO expertise to maximize your results.",
      icon: "Code"
    },
    {
      title: "Long-Term Partnership",
      description: "We focus on building lasting relationships, offering ongoing support and continuous optimization to sustain your growth.",
      icon: "Handshake"
    },
    {
      title: "Local Expertise",
      description: "As a local business, we offer personal attention and understanding of your market with direct communication throughout your campaigns.",
      icon: "MapPin"
    }
  ],
  
  benefits: [
    {
      title: "Measurable Results",
      description: "Track your progress with detailed analytics and reports that showcase improvements in traffic, rankings, and conversions."
    },
    {
      title: "Integrated Approach",
      description: "Our marketing strategies complement your overall digital presence, creating a cohesive brand experience across all channels."
    },
    {
      title: "Adaptability & Flexibility",
      description: "We understand that every business is unique. Our strategies are flexible and adaptable, allowing us to adjust tactics as your business evolves and market conditions change."
    },
    {
      title: "Personal Service",
      description: "Receive dedicated support and personalized strategies from a team that genuinely cares about your business growth."
    }, 
    {
      title: "Customized Solutions",
      description: "We provide tailored strategies that are designed to meet your specific business goals and objectives."
    }
  ],
};

export default seoMarketingAdvantageContent;