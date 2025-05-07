// src/content/services/seo-marketing/value-prop-content.ts

import { ValuePropContent } from '@/page-templates/service-page/types';

/**
 * Value proposition content for the SEO & Online Marketing service page.
 * This object includes key benefits, market trends, animated insights, and a final call to action.
 * 
 * @type {ValuePropContent}
 * @property {string} title - The title of the value proposition section.
 * @property {string} description - A description of how SEO and online marketing can transform business presence.
 * @property {Array} industryTrends - An array of industry trends, each containing an icon, title, and description.
 * @property {string} industryTrendsDescription - A description of the industry trends section.
 * @property {Array} marketInsights - An array of market insights, each containing an id and parts for animated stats.
 * @property {Object} callToAction - An object containing the call to action details, including title, description, button text, link, and icon.
 */
const seoMarketingValueProp: ValuePropContent = {
  title: "Why Digital Marketing Matters",
  description: "In today's digital-first marketplace, visibility isn't just about being online—it's about being found by the right audience at the right time. While most businesses have a website, many struggle to effectively reach and engage their target market. Strategic SEO and digital marketing bridge this gap, turning your online presence into a powerful tool for growth and engagement. Effective SEO and online marketing strategies not only enhance your visibility but also drive targeted traffic, increase conversions, and build lasting customer relationships.",
  
  // Industry trends that appear in expandable cards
  industryTrends: [
    {
      icon: "Bot",
      title: "AI and Machine Learning",
      description: "Leveraging advanced analytics for targeted marketing campaigns and audience insights."
    },
    {
      icon: "Smartphone",
      title: "Mobile-First Indexing",
      description: "With the majority of searches conducted on mobile devices, mobile optimization is now a top priority."
    },
    {
      icon: "Mic",
      title: "Voice Search Optimization",
      description: "Adapting content for voice-based searches as smart speakers and voice assistants gain popularity."
    },
    {
      icon: "UserCheck",
      title: "User Experience Signals",
      description: "Search engines increasingly prioritizing user experience metrics in ranking determinations."
    }, 
    {
      icon: "ShieldCheck",
      title: "Privacy-First Marketing",
      description: "Adapting to a cookie-less future with ethical data practices."
    },
  ],
  
  // Description for the industry trends section
  industryTrendsDescription: "The digital marketing landscape is rapidly evolving, with several key trends shaping success. Businesses that adapt to these changes gain competitive advantages in their markets.",
  
  // Market insights with inline animated stats
  marketInsights: [
    {
      id: "1",
      parts: [
        { value: 93, suffix: "%" },
        " of online experiences begin with a search engine."
      ]
    },
    {
      id: "2",
      parts: [
        { value: 75, suffix: "%" },
        " of users never scroll past the first page of search results."
      ]
    },
    {
      id: "3",
      parts: [
        { value: 82, suffix: "%" },
        " of consumers conduct online research before making a purchase."
      ]
    },
    {
      id: "4",
      parts: [
        { value: 61, suffix: "%" },
        " of small businesses say improving SEO and growing organic presence is their top marketing priority."
      ]
    },
    {
      id: "5",
      parts: [
        "Businesses earn ",
        { value: 2.75, prefix: "$", suffix: "" },
        " for every $1 spent on Google Ads on average."
      ]
    }
  ],
  
  // Custom comparison table data
  comparisonTable: {
    title: "Digital vs. Traditional Marketing",
    headers: ["Feature", "Digital Marketing", "Traditional Marketing"],
    rows: [
      {
        "feature": "Cost Efficiency",
        "digital marketing": "Lower long-term costs, scalable",
        "traditional marketing": "Higher ongoing costs"
      },
      {
        "feature": "Reach",
        "digital marketing": "Global, 24/7 availability",
        "traditional marketing": "Limited by geography"
      },
      {
        "feature": "Measurability",
        "digital marketing": "Precise analytics and tracking",
        "traditional marketing": "Limited measurement options"
      }
    ]
  },
  
  // Call to action displayed at the bottom of the right column
  callToAction: {
    title: "Ready to Boost Your Online Visibility?",
    description: "Let's create a digital marketing strategy that delivers measurable results for your business.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonIcon: "ArrowRight",
  },
  
  // Additional content for various sections
  additionalContent: {
    beforeCta: "Digital marketing is often more cost-effective than traditional marketing methods, while providing greater reach and better targeting. This combination ensures higher ROI through increased visibility, qualified leads, and enhanced customer engagement. The measurable results and sustained impact of strategic SEO and marketing ensure that your investment translates into tangible business outcomes."
  },
};

export default seoMarketingValueProp;