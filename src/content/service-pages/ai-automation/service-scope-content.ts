/**
 * @fileoverview Service Scope Content for the AI & Automation Service Page
 *
 * This file contains the content configuration for the service scope section of the AI & Automation service page.
 * It includes a detailed breakdown of service offerings and the key benefits they provide.
 */

import { ServiceScopeContent } from '@/page-templates/service-page/types';

/**
 * Service scope content for the AI & Automation service page.
 * This object includes a detailed breakdown of service offerings and the key benefits they provide.
 * 
 * @type {ServiceScopeContent}
 * @property {string} title - The title of the service scope section.
 * @property {string} description - A description of the AI and automation services offered.
 * @property {Array} services - An array of services provided, each containing an icon, title, description, and benefits.
 * @property {string} keyBenefitsTitle - The title for the key benefits section.
 * @property {string} keyBenefitsDescription - A description of the key benefits provided by AI and automation solutions.
 * @property {Array} benefits - An array of key benefits, each containing an icon, title, and description.
 * @property {string} backgroundIcon - The icon used for the background of the service scope section.
 * @property {number} backgroundIconWidth - The width of the background icon.
 * @property {number} backgroundIconHeight - The height of the background icon.
 */
const aiAutomationServiceScope: ServiceScopeContent = {
  title: "Comprehensive AI & Automation Solutions",
  description: "We harness the power of artificial intelligence and automation technologies to streamline operations, enhance decision-making, and create intelligent systems that adapt to your needs. Our solutions combine cutting-edge technology with practical implementation strategies to deliver tangible results.",
  
  services: [
    {
      icon: "BrainCircuit",
      title: "Machine Learning & Efficiency Optimization",
      description: "Leverage the power of machine learning to identify patterns, predict outcomes, and optimize business processes.",
      benefits: [
        "Predictive analytics and forecasting models",
        "Anomaly detection and trend identification",
        "Performance optimization algorithms",
        "Data-driven decision support systems",
        "Intelligent resource allocation"
      ]
    },
    {
      icon: "Workflow",
      title: "Process Standardization & Task Automation",
      description: "Transform manual, time-consuming tasks into streamlined, automated workflows that improve efficiency and reduce errors.",
      benefits: [
        "Process evaluation and audit",
        "Business process automation",
        "Workflow optimization and standardization",
        "Document processing and data extraction",
        "Integration with existing systems"
      ]
    },
    {
      icon: "CodeSquare",
      title: "Custom Model Generation & Training",
      description: "Develop and train AI models tailored to your specific business challenges and objectives.",
      benefits: [
        "Custom machine learning model development",
        "Supervised and unsupervised learning systems",
        "Natural language processing solutions",
        "Computer vision applications",
        "Reinforcement learning implementations"
      ]
    },
    {
      icon: "MessageSquare",
      title: "AI-Powered Chatbots & Virtual Assistants",
      description: "Create intelligent virtual assistants that enhance customer service, streamline internal processes, and provide 24/7 support.",
      benefits: [
        "Customer service automation",
        "Internal knowledge management assistants",
        "Intelligent FAQ and support systems",
        "Multi-channel virtual assistants",
        "Conversational AI implementations"
      ]
    },
    {
      icon: "Bot",
      title: "Custom GPT Creation & AI Integration Services",
      description: "Leverage the latest advancements in generative AI to create custom solutions and integrate AI capabilities into your existing systems.",
      benefits: [
        "Custom GPT development and fine-tuning",
        "Prompt engineering and optimization",
        "AI integration with existing workflows",
        "Large language model implementations",
        "AI tool usage via Model Context Protocol (MCP)"
      ]
    }
  ],
  
  keyBenefitsTitle: "Key Benefits",
  keyBenefitsDescription: "Our AI and automation solutions provide measurable improvements to your operational efficiency, decision-making quality, and competitive positioning.",

  benefits: [
    {
      icon: "Gauge",
      title: "Enhanced Operational Efficiency",
      description: "Automate repetitive tasks and streamline workflows to reduce costs and accelerate processes."
    },
    {
      icon: "Target",
      title: "Improved Decision Making",
      description: "Leverage data-driven insights and predictive analytics to make better strategic and tactical decisions."
    },
    {
      icon: "Users",
      title: "Superior Customer Experiences",
      description: "Deliver personalized, responsive service through intelligent automation and AI-powered interactions."
    },
    {
      icon: "Rocket",
      title: "Accelerated Innovation",
      description: "Free up human creativity by automating routine work, allowing your team to focus on higher-value initiatives."
    }
  ],
  backgroundIcon: "Cpu",
  backgroundIconWidth: 425,
  backgroundIconHeight: 375,
};

export default aiAutomationServiceScope;