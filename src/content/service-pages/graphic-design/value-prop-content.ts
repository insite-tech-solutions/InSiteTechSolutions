// src/content/services/graphic-design/value-prop-content.ts

import { ValuePropContent } from '@/page-templates/service-page/types';

/**
 * Value proposition content for the Graphic Design & Branding service page.
 * This object includes key benefits, market trends, animated insights, and a final call to action.
 * 
 * @type {ValuePropContent}
 * @property {string} title - The title of the value proposition section.
 * @property {string} description - A description of how graphic design and branding can transform business presence.
 * @property {Array} industryTrends - An array of industry trends, each containing an icon, title, and description.
 * @property {string} industryTrendsDescription - A description of the industry trends section.
 * @property {Array} marketInsights - An array of market insights, each containing an id and parts for animated stats.
 * @property {Object} callToAction - An object containing the call to action details, including title, description, button text, link, and icon.
 */
const graphicDesignValueProp: ValuePropContent = {
  title: "Why Visual Identity Matters",
  description: "Your visual identity is often the first point of contact with potential customers and sets immediate expectations about your brand quality and values. While many businesses underestimate the impact of professional design, research consistently shows that strategic branding directly influences consumer trust, recognition, and purchasing decisions. The right visual identity doesn't just make your business look good—it communicates your values, builds emotional connections with customers, and creates a foundation for sustainable growth.",
  
  // Industry trends that appear in expandable cards
  industryTrends: [
    {
      icon: "Smartphone",
      title: "Responsive Design",
      description: "Creating visual elements that adapt seamlessly across all devices and screen sizes."
    },
    {
      icon: "Minimize2",
      title: "Minimalism & Simplification",
      description: "Embracing clean, purposeful design that communicates clearly without unnecessary complexity."
    },
    {
      icon: "Palette",
      title: "Custom Illustration",
      description: "Moving away from stock imagery toward unique, brand-specific visual assets."
    },
    {
      icon: "Users",
      title: "User-Centered Design",
      description: "Prioritizing the end-user experience in all design decisions and brand touchpoints."
    }
  ],
  
  // Description for the industry trends section
  industryTrendsDescription: "The design landscape is evolving rapidly, with several key trends shaping brand success. Companies that embrace these design principles gain significant advantages in brand recognition and customer engagement.",
  
  // Market insights with inline animated stats
  marketInsights: [
    {
      id: "1",
      parts: [
        { value: 94, suffix: "%" },
        " of first impressions are design-related."
      ]
    },
    {
      id: "2",
      parts: [
        { value: 75, suffix: "%" },
        " of consumers judge a company's credibility based on their website design."
      ]
    },
    {
      id: "3",
      parts: [
        "Consistent brand presentation across platforms increases revenue by up to ",
        { value: 23, suffix: "%" },
        "."
      ]
    },
    {
      id: "4",
      parts: [
        { value: 65, suffix: "%" },
        " of the population are visual learners who process information based on what they see."
      ]
    },
    {
      id: "5",
      parts: [
        "Businesses with strong brands outperform weak brands by up to ",
        { value: 20, suffix: "%" },
        " in customer acquisition and retention."
      ]
    }
  ],
  
  // Call to action displayed at the bottom of the right column
  callToAction: {
    title: "Ready to Transform Your Brand?",
    description: "Let's create a visual identity that captures your unique value and resonates with your audience.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonIcon: "ArrowRight",
  },
  
};

export default graphicDesignValueProp;