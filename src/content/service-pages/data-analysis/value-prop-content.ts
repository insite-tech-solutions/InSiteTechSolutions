// src/content/services/data-analysis/value-prop-content.ts

import { ValuePropContent } from '@/page-templates/service-page/types';

/**
 * Value proposition content for the Data Analysis service page.
 * This object includes key benefits, market trends, animated insights, and a final call to action.
 * 
 * @type {ValuePropContent}
 * @property {string} title - The title of the value proposition section.
 * @property {string} description - A description of how data analysis can transform business operations.
 * @property {Array} industryTrends - An array of industry trends, each containing an icon, title, and description.
 * @property {string} industryTrendsDescription - A description of the industry trends section.
 * @property {Array} marketInsights - An array of market insights, each containing an id and parts for animated stats.
 * @property {Object} callToAction - An object containing the call to action details, including title, description, button text, link, and icon.
 */
const dataAnalysisValueProp: ValuePropContent = {
  title: "Why Data Analysis Matters",
  description: "In today's data-driven world, organizations that effectively analyze their data gain a significant competitive advantage. While most businesses collect vast amounts of data, many lack the expertise to transform it into actionable insights. Professional data analysis bridges this gap, helping you discover patterns, identify opportunities, and make evidence-based decisions that drive growth and efficiency. By leveraging advanced analytical techniques, you can uncover hidden value in your existing data and develop predictive capabilities that position your organization for future success.",
  
  // Industry trends that appear in expandable cards
  industryTrends: [
    {
      icon: "Bot",
      title: "AI and Machine Learning Integration",
      description: "Leveraging artificial intelligence to automate analysis and uncover complex patterns in large datasets."
    },
    {
      icon: "Zap",
      title: "Real-time Analytics",
      description: "Shifting from periodic reporting to continuous, real-time data analysis for immediate insights and faster decision-making."
    },
    {
      icon: "CloudRain",
      title: "Cloud-based Analytics",
      description: "Utilizing cloud platforms for scalable, accessible, and cost-effective data processing and visualization."
    },
    {
      icon: "Shield",
      title: "Data Privacy and Ethics",
      description: "Implementing responsible data practices that balance analytical insights with privacy protection and ethical considerations."
    },
    {
      icon: "LineChart",
      title: "Predictive Analytics",
      description: "Moving beyond descriptive analysis to forecast future trends and outcomes using statistical models and machine learning."
    }
  ],
  
  // Description for the industry trends section
  industryTrendsDescription: "The data analysis landscape is rapidly evolving with several key trends shaping success. Organizations that adapt to these changes gain significant competitive advantages in their markets.",
  
  // Market insights with inline animated stats
  marketInsights: [
    {
      id: "1",
      parts: [
        { value: 97, suffix: "%" },
        " of business executives report their companies have implemented analytics to stay competitive."
      ]
    },
    {
      id: "2",
      parts: [
        "Organizations that leverage customer behavioral insights outperform peers by ",
        { value: 85, suffix: "%" },
        " in sales growth."
      ]
    },
    {
      id: "3",
      parts: [
        "Data-driven organizations are ",
        { value: 23, suffix: "×" },
        " more likely to acquire customers."
      ]
    },
    {
      id: "4",
      parts: [
        { value: 73, suffix: "%" },
        " of organizations plan to increase data analytics investment in the next three years."
      ]
    },
    {
      id: "5",
      parts: [
        "Companies using advanced analytics report up to ",
        { value: 126, suffix: "%" },
        " higher profit improvement than competitors."
      ]
    }
  ],
  
  // Custom comparison table data
  comparisonTable: {
    title: "Analytics Maturity Comparison",
    headers: ["Capability", "Basic Analytics", "Advanced Analytics"],
    rows: [
      {
        "capability": "Decision Process",
        "basic analytics": "Intuition with data support",
        "advanced analytics": "Data-driven with predictive insights"
      },
      {
        "capability": "Time Orientation",
        "basic analytics": "Historical reporting",
        "advanced analytics": "Forward-looking predictions"
      },
      {
        "capability": "Business Impact",
        "basic analytics": "Incremental improvements",
        "advanced analytics": "Transformative opportunities"
      }
    ]
  },
  
  // Call to action displayed at the bottom of the right column
  callToAction: {
    title: "Ready to Unlock the Power of Your Data?",
    description: "Let's transform your raw data into strategic insights that drive tangible business results.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonIcon: "ArrowRight",
  },
  
  // Additional content for various sections
  additionalContent: {
    beforeCta: "Data analysis delivers exceptional ROI by revealing inefficiencies, identifying new revenue streams, and enabling precise forecasting. Unlike many business investments, analytics capabilities compound in value over time as your data assets grow and models become more refined. The ability to make evidence-based decisions across your organization creates a sustainable competitive advantage that's difficult for competitors to replicate."
  },
};

export default dataAnalysisValueProp;