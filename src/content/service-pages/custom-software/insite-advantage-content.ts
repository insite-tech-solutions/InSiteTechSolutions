/**
 * @fileoverview InSite Advantage Content for the Custom Software Service Page
 *
 * This file contains the content configuration for the InSite Advantage section of the Custom Software service page.
 * It includes a title, description, and a list of advantages and benefits.
 */

import { InSiteAdvantageContent } from '@/page-templates/service-page/types';

/**
 * Content for the Custom Software Solutions InSite Advantage section.
 * This includes advantages (displayed as cards) and broader business benefits (shown in a timeline layout).
 * 
 * @type {InSiteAdvantageContent}
 * @property {string} title - The main title for the InSite Advantage section.
 * @property {string} description - A detailed description of the advantages of partnering with InSite Tech Solutions.
 * @property {Array} advantages - An array of advantages, each containing a title, description, and icon.
 * @property {Array} benefits - An array of broader business benefits, each containing a title and description.
 */
const customSoftwareAdvantageContent: InSiteAdvantageContent = {
  title: "The InSite Advantage",
  description: "Partnering with InSite Tech Solutions means collaborating with a team dedicated to delivering exceptional custom software that aligns with your objectives. We bridge the gap between technical expertise and practical business solutions, delivering digital strategies that are perfectly matched to your goals and budget, ensuring your software drives real results. We don't just develop software – we craft powerful tools that drive efficiency and solve real-world problems.",
  
  advantages: [
    {
      title: "Client-First Approach",
      description: "We prioritize your goals and tailor solutions to fit your needs and budget.",
      icon: "Users"
    },
    {
      title: "End-to-End Expertise",
      description: "From design to development, we provide full-service solutions that deliver results.",
      icon: "Cog"
    },
    {
      title: "Adaptable Solutions",
      description: "Whether it's complex simulations or a simple process automation script, we match the solution to your project—not the other way around.",
      icon: "CodeXml"
    },
    {
      title: "Long-Term Support",
      description: "We build lasting partnerships, offering ongoing support and maintenance so your software grows with your business, adapting to new needs and challenges.",
      icon: "Headphones"
    },
    {
      title: "Technical Excellence with Business Sense",
      description: "Our recommendations balance technical capabilities with practical business value, ensuring you get solutions that drive real results.",
      icon: "HandCoins"
    },
    {
      title: "Local Partnership",
      description: "As a local business, we provide personalized attention and direct communication throughout your project and beyond.",
      icon: "Handshake"
    }
  ],
  
  benefits: [
    {
      title: "Adaptability & Flexibility",
      description: "At InSite Tech Solutions, we understand that every business is unique. Our custom software is designed to adapt to your specific needs and budget, ensuring that you receive a solution that not only meets but exceeds your expectations."
    },
    {
      title: "Measurable Outcomes",
      description: "Achieve improved performance, increased efficiency, and higher customer satisfaction."
    },
    {
      title: "Custom Solutions",
      description: "Avoid the pitfalls of one-size-fits-all software with solutions designed specifically for your business."
    },
    {
      title: "Personalized Service",
      description: "Experience hands-on, personalized attention from a team that values relationships over transactions. We work closely with you at every stage to ensure the solution aligns with your vision."
    },
    {
      title: "Scalable Solutions",
      description: "Software that grows with your business, accommodating increasing demands and expanding functionalities."
    },
    {
      title: "Data-Driven Insights",
      description: "Advanced analytics and reporting tools provide actionable insights for informed decision-making."
    }
  ],
};

export default customSoftwareAdvantageContent;