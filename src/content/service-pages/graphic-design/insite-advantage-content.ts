/**
 * @fileoverview InSite Advantage Content for the Graphic Design & Branding Service Page
 *
 * This file contains the content configuration for the InSite Advantage section of the Graphic Design & Branding service page.
 * It includes a title, description, and a list of advantages and benefits.
 */

import { InSiteAdvantageContent } from '@/page-templates/service-page/types';

/**
 * Content for the Graphic Design & Branding InSite Advantage section.
 * This includes advantages (displayed as cards) and broader business benefits (shown in a timeline layout).
 * 
 * @type {InSiteAdvantageContent}
 * @property {string} title - The main title for the InSite Advantage section.
 * @property {string} description - A detailed description of the advantages of partnering with InSite Tech Solutions.
 * @property {Array} advantages - An array of advantages, each containing a title, description, and icon.
 * @property {Array} benefits - An array of broader business benefits, each containing a title and description.
 */
const graphicDesignAdvantageContent: InSiteAdvantageContent = {
  title: "The InSite Advantage",
  description: "At InSite Tech, we bridge the gap between creative design and strategic business objectives. Our advantage lies in our ability to understand both your business goals and design principles, delivering visual solutions that not only look outstanding but also drive measurable results. We don't just create graphics – we craft visual experiences that strengthen your brand and connect with your audience.",
  
  advantages: [
    {
      title: "Business-Focused Design",
      description: "We create designs that aren't just visually appealing but strategically aligned with your specific business objectives.",
      icon: "Target"
    },
    {
      title: "End-to-End Creative Services",
      description: "From initial concept to final production, we provide comprehensive design solutions for all your brand needs.",
      icon: "Palette"
    },
    {
      title: "Adaptable Design Systems",
      description: "We build flexible design systems that work across all platforms and scale with your business growth.",
      icon: "Maximize"
    },
    {
      title: "Collaborative Process",
      description: "We involve you throughout the creative journey, ensuring the final designs truly reflect your vision and values.",
      icon: "Users"
    },
    {
      title: "Technical Excellence with Creative Vision",
      description: "Our team combines artistic talent with technical precision to deliver designs that are both innovative and functional.",
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
      title: "Brand Consistency",
      description: "Achieve a cohesive visual identity across all touchpoints, strengthening brand recognition and customer trust."
    },
    {
      title: "Market Differentiation",
      description: "Stand out from competitors with distinctive visual elements that highlight your unique value proposition."
    },
    {
      title: "Professional Perception",
      description: "Elevate how customers perceive your business through polished, professional design that reflects your quality standards."
    },
    {
      title: "Emotional Connection",
      description: "Build stronger relationships with customers through visual storytelling that resonates on a personal level."
    }, 
    {
      title: "Design Efficiency",
      description: "Save time and resources with streamlined design systems and templates that maintain quality while enabling quick implementation."
    }
  ],
};

export default graphicDesignAdvantageContent;