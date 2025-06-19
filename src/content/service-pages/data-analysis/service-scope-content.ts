/**
 * @fileoverview Service Scope Content for the Data Analysis Service Page
 *
 * This file contains the content configuration for the service scope section of the Data Analysis service page.
 * It includes a detailed breakdown of service offerings and the key benefits they provide.
 */

import { ServiceScopeContent } from '@/page-templates/service-page/types';

/**
 * Service scope content for the Data Analysis service page.
 * This object includes a detailed breakdown of service offerings and the key benefits they provide.
 * 
 * @type {ServiceScopeContent}
 * @property {string} title - The title of the service scope section.
 * @property {string} description - A description of the data analysis services offered.
 * @property {Array} services - An array of services provided, each containing an icon, title, description, and benefits.
 * @property {string} keyBenefitsTitle - The title for the key benefits section.
 * @property {string} keyBenefitsDescription - A description of the key benefits provided by data analysis solutions.
 * @property {Array} benefits - An array of key benefits, each containing an icon, title, and description.
 * @property {string} backgroundIcon - The icon used for the background of the service scope section.
 * @property {number} backgroundIconWidth - The width of the background icon.
 * @property {number} backgroundIconHeight - The height of the background icon.
 */
const dataAnalysisServiceScope: ServiceScopeContent = {
  title: "Comprehensive Data Analysis Services",
  description: "We transform complex data into clear, actionable insights through a range of specialized analytical services. Our approach combines statistical expertise with domain knowledge to deliver solutions that address your specific business challenges and research questions.",
  
  services: [
    {
      icon: "FlaskConical",
      title: "Scientific Data Analysis & System Modeling",
      description: "Apply rigorous scientific methods to analyze experimental data and develop predictive models for complex systems.",
      benefits: [
        "Experimental data analysis and interpretation",
        "Statistical hypothesis testing",
        "Computational simulation and modeling",
        "System optimization and parameter estimation",
        "Research methodology design"
      ]
    },
    {
      icon: "LineChart",
      title: "Business Intelligence & Performance Analytics",
      description: "Gain deeper insights into your business operations and performance metrics to drive strategic decision-making.",
      benefits: [
        "Sales, marketing, and operational performance analysis",
        "KPI dashboards and executive reporting",
        "Competitive intelligence and market analysis",
        "Customer segmentation and behavior analytics",
        "Financial modeling and forecasting"
      ]
    },
    {
      icon: "PieChart",
      title: "Data Visualization, Summarization, & Reporting",
      description: "Transform complex data into intuitive visual formats that communicate insights effectively to various stakeholders.",
      benefits: [
        "Interactive dashboards and data visualizations",
        "Automated reporting systems",
        "Custom data visualization development",
        "Executive summaries and presentations",
        "Data storytelling and narrative development"
      ]
    },
    {
      icon: "TrendingUp",
      title: "Predictive Modeling & Forecasting",
      description: "Leverage historical data to develop models that predict future trends, behaviors, and outcomes.",
      benefits: [
        "Time series forecasting and trend analysis",
        "Predictive model development",
        "Machine learning implementation",
        "Risk assessment and scenario analysis",
        "Demand forecasting and inventory optimization"
      ]
    },
    {
      icon: "Database",
      title: "Data Mining & Processing",
      description: "Extract valuable patterns and insights from large, complex datasets through advanced processing techniques.",
      benefits: [
        "Data cleaning and preparation",
        "Feature engineering and selection",
        "Pattern recognition and anomaly detection",
        "Text mining and natural language processing",
        "Big data processing and analytics"
      ]
    }
  ],
  
  keyBenefitsTitle: "Key Benefits",
  keyBenefitsDescription: "Our data analysis solutions provide measurable improvements to your decision-making processes and operational efficiency.",

  benefits: [
    {
      icon: "Lightbulb",
      title: "Data-Driven Decision Making",
      description: "Replace guesswork with evidence-based strategies that reduce risk and improve outcomes."
    },
    {
      icon: "Target",
      title: "Performance Optimization",
      description: "Identify inefficiencies and opportunities to enhance processes, resource allocation, and overall performance."
    },
    {
      icon: "Compass",
      title: "Strategic Direction",
      description: "Gain clarity on market trends, customer needs, and competitive positioning to guide long-term strategy."
    },
    {
      icon: "TrendingUp",
      title: "Future Readiness",
      description: "Develop predictive capabilities that help you anticipate changes and respond proactively to emerging opportunities."
    }
  ],
  backgroundIcon: "ChartColumn",
  backgroundIconWidth: 425,
  backgroundIconHeight: 375,
};

export default dataAnalysisServiceScope;