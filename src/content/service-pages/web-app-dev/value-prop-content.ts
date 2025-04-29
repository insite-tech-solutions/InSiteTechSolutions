// src/content/services/web-app-development/value-prop-content.ts

import { ValuePropContent } from '@/page-templates/service-page/types';

/**
 * Value proposition content for the Web & App Development service page.
 * This object includes key benefits, market trends, animated insights, and a final call to action.
 * 
 * @type {ValuePropContent}
 * @property {string} title - The title of the value proposition section.
 * @property {string} description - A description of how web and app development can transform business presence.
 * @property {Array} industryTrends - An array of industry trends, each containing an icon, title, and description.
 * @property {string} industryTrendsDescription - A description of the industry trends section.
 * @property {Array} marketInsights - An array of market insights, each containing an id and parts for animated stats.
 * @property {Object} callToAction - An object containing the call to action details, including title, description, button text, link, and icon.
 */
const webAppDevelopmentValueProp: ValuePropContent = {
  title: "Why Your Digital Presence Matters",
  description: "Today's business success is increasingly tied to digital presence. Whether you're looking to attract customers, streamline operations, or create new revenue streams, the right web or app solution is critical. Your online presence is often the first point of contact with potential customers. A well-designed website or application isn't just a digital business card - it's a powerful tool for growth.",
  
  // Industry trends that appear in expandable cards
  industryTrends: [
    {
      icon: "Smartphone",
      title: "Mobile-first Design",
      description: "Prioritizing mobile experiences to ensure seamless functionality across all devices."
    },
    {
      icon: "TrendingUp",
      title: "Performance Optimization",
      description: "Creating lightning-fast experiences that keep users engaged and improve conversion rates."
    },
    {
      icon: "Users",
      title: "User Experience Focus",
      description: "Designing intuitive interfaces that delight users and drive business results."
    },
    {
      icon: "ShieldCheck",
      title: "Security & Compliance",
      description: "Building solutions that protect user data and meet regulatory requirements."
    }
  ],
  
  // Description for the industry trends section
  industryTrendsDescription: "As mobile usage continues to dominate, responsive, user-friendly, and optimized digital solutions are no longer optional—they're essential for staying competitive.",
  
  // Market insights with inline animated stats
  marketInsights: [
    {
      id: "1",
      parts: [
        { value: 73, suffix: "%" },
        " of consumers research companies online before making purchasing decisions."
      ]
    },
    {
      id: "2",
      parts: [
        { value: 67, suffix: "%" },
        " of B2B purchases are influenced by digital research."
      ]
    },
    {
      id: "3",
      parts: [
        "Mobile apps are projected to generate ",
        { value: 935, suffix: "B", prefix: "$" },
        " in revenue by 2025."
      ]
    },
    {
      id: "4",
      parts: [
        { value: 88, suffix: "%" },
        " of users are less likely to return to a website after a poor experience."
      ]
    }
  ],
  
  // Custom comparison table data
  comparisonTable: {
    title: "Digital vs. Traditional Marketing",
    headers: ["Marketing Method", "Est. Initial Cost", "Est. Ongoing Cost"],
    rows: [
      {
        "marketing method": "Website",
        "est. initial cost": "$1,000 - $10,000 (development)",
        "est. ongoing cost": "$10 - $50/month (hosting/maintenance)",
      },
      {
        "marketing method": "Yard Signs",
        "est. initial cost": "$100 - $1,000 (design)",
        "est. ongoing cost": "$10 - $25 per sign (printing)",
      },
      {
        "marketing method": "TV/Radio",
        "est. initial cost": "$1,000 - $10,000 (production)",
        "est. ongoing cost": "$100 - $1,500/month (airtime)",
      }, 
      {
        "marketing method": "Billboards",
        "est. initial cost": "$1,000 - $3,000 (design)",
        "est. ongoing cost": "$1,000 - $5,000/month (placement/rent)",
      }
    ]
  },
  
  // Call to action displayed at the bottom of the right column
  callToAction: {
    title: "Ready to Boost Your Digital Presence?",
    description: "Let's create a powerful online strategy tailored to your business needs.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonIcon: "ArrowRight",
  },
  
  // Additional content for various sections
  additionalContent: {
    beforeCta: "Websites can be surprisingly affordable, especially after the initial development costs. Maintenance and hosting are minimal compared to the ongoing costs of traditional marketing, and they easily pay for themselves by driving engagement and growth. Websites also offer broad integrations, from reservations and scheduling to client portals and e-commerce."
  },
};

export default webAppDevelopmentValueProp;