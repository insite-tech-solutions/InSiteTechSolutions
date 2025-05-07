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
  title: "How Data Analysis Can Help You",
  description: "In today's data-driven world, effective data analysis is crucial for both research advancement and business success. Whether you're conducting academic research or running a business, the ability to transform raw data into meaningful insights is essential. Professional data analysis bridges the gap between complex data and actionable conclusions, helping you validate hypotheses, discover patterns, and make evidence-based decisions. By leveraging advanced analytical techniques, you can uncover hidden value in your data and develop robust methodologies that stand up to peer review or drive business growth.",
  
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
      icon: "Cloud",
      title: "Cloud-based Analytics",
      description: "Utilizing cloud platforms for scalable, accessible, and cost-effective data processing and visualization."
    },
    {
      icon: "LineChart",
      title: "Predictive Analytics",
      description: "Moving beyond descriptive analysis to forecast future trends and outcomes using statistical models and machine learning."
    }
  ],
  
  // Description for the industry trends section
  industryTrendsDescription: "The data analysis landscape is rapidly evolving with several key trends shaping success in both research and business applications. Organizations and researchers that adapt to these changes gain significant advantages in their respective fields.",
  
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
        "Organizations that leverage data-driven insights outperform peers by ",
        { value: 85, suffix: "%" },
        " in key performance metrics."
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

  
  // Call to action displayed at the bottom of the right column
  callToAction: {
    title: "Ready to Unlock the Power of Your Data?",
    description: "Let's transform your raw data into meaningful insights that advance your research or drive business results.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonIcon: "ArrowRight",
  },
  
};

export default dataAnalysisValueProp;