// src/content/services/ai-automation/value-prop-content.ts

import { ValuePropContent } from '@/page-templates/service-page/types';

/**
 * Value proposition content for the AI & Automation service page.
 * This object includes key benefits, market trends, animated insights, and a final call to action.
 * 
 * @type {ValuePropContent}
 * @property {string} title - The title of the value proposition section.
 * @property {string} description - A description of how AI and automation can transform business operations.
 * @property {Array} industryTrends - An array of industry trends, each containing an icon, title, and description.
 * @property {string} industryTrendsDescription - A description of the industry trends section.
 * @property {Array} marketInsights - An array of market insights, each containing an id and parts for animated stats.
 * @property {Object} callToAction - An object containing the call to action details, including title, description, button text, link, and icon.
 */
const aiAutomationValueProp: ValuePropContent = {
  title: "Why AI & Automation Matter",
  description: "In today's competitive business landscape, operational efficiency and intelligent decision-making are critical for success. While many organizations understand the potential of AI and automation, few have the expertise to implement these technologies effectively. Our solutions bridge this gap, transforming manual, time-consuming processes into streamlined, intelligent workflows that save time, reduce costs, and create new opportunities for growth. By strategically applying AI and automation, businesses can not only optimize current operations but also unlock innovative capabilities that provide lasting competitive advantages.",
  
  // Industry trends that appear in expandable cards
  industryTrends: [
    {
      icon: "Brain",
      title: "Generative AI Integration",
      description: "Leveraging large language models and generative AI to enhance content creation, customer service, and decision support systems."
    },
    {
      icon: "Bot",
      title: "Hyperautomation",
      description: "Combining multiple technologies like RPA, AI, and machine learning to automate complex business processes end-to-end."
    },
    {
      icon: "MessageSquare",
      title: "Conversational AI",
      description: "Implementing intelligent virtual assistants and chatbots that deliver human-like interactions and support across channels."
    },
    {
      icon: "GitMerge",
      title: "AI-Augmented Decision Making",
      description: "Using advanced analytics and machine learning to provide data-driven insights for better strategic and operational decisions."
    },
    {
      icon: "Shield",
      title: "Responsible AI",
      description: "Developing ethical frameworks and governance structures to ensure AI systems are transparent, fair, and accountable."
    }
  ],
  
  // Description for the industry trends section
  industryTrendsDescription: "The AI and automation landscape is evolving rapidly, with several key trends reshaping how businesses operate. Organizations that strategically adopt these technologies gain significant advantages in efficiency, customer experience, and innovation capacity.",
  
  // Market insights with inline animated stats
  marketInsights: [
    {
      id: "1",
      parts: [
        { value: 85, suffix: "%" },
        " of executives believe AI will allow their companies to obtain or sustain competitive advantages."
      ]
    },
    {
      id: "2",
      parts: [
        "Organizations implementing automation technologies report average cost reductions of ",
        { value: 22, suffix: "%" },
        " and productivity increases of up to ",
        { value: 27, suffix: "%" },
        "."
      ]
    },
    {
      id: "3",
      parts: [
        { value: 94, suffix: "%" },
        " of business leaders report that process automation has improved employee productivity."
      ]
    },
    {
      id: "4",
      parts: [
        "AI-powered customer service solutions reduce resolution times by an average of ",
        { value: 40, suffix: "%" },
        " while improving satisfaction scores."
      ]
    },
    {
      id: "5",
      parts: [
        "By 2025, the global AI market is projected to reach ",
        { value: 190, suffix: "B", prefix: "$" },
        " as adoption accelerates across industries."
      ]
    }
  ],
  
  // Custom comparison table data
  comparisonTable: {
    title: "Traditional Operations vs. AI-Enhanced Operations",
    headers: ["Aspect", "Traditional Approach", "AI-Enhanced Approach"],
    rows: [
      {
        "aspect": "Efficiency",
        "traditional approach": "Manual processes with high labor costs",
        "ai-enhanced approach": "Automated workflows with minimal human intervention"
      },
      {
        "aspect": "Decision Making",
        "traditional approach": "Based on limited data and human intuition",
        "ai-enhanced approach": "Powered by comprehensive data analysis and predictive models"
      },
      {
        "aspect": "Scalability",
        "traditional approach": "Requires proportional staffing increases",
        "ai-enhanced approach": "Systems scale efficiently with minimal additional resources"
      }
    ]
  },
  
  // Call to action displayed at the bottom of the right column
  callToAction: {
    title: "Ready to Transform Your Operations?",
    description: "Let's implement AI and automation solutions that drive efficiency, reduce costs, and create competitive advantages for your business.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonIcon: "ArrowRight",
  },
  
  // Additional content for various sections
  additionalContent: {
    beforeCta: "AI and automation technologies offer exceptional ROI by reducing operational costs, minimizing errors, and freeing human talent for higher-value work. Unlike traditional IT investments, AI solutions continuously improve over time as they learn from new data and interactions. Organizations that strategically implement these technologies not only achieve immediate efficiency gains but also develop adaptable capabilities that provide lasting competitive advantages in rapidly evolving markets."
  },
};

export default aiAutomationValueProp;