/**
 * @fileoverview Service Scope Content for the Custom Software Service Page
 *
 * This file contains the content configuration for the service scope section of the Custom Software service page.
 * It includes a detailed breakdown of service offerings and the key benefits they provide.
 */

import { ServiceScopeContent } from '@/page-templates/service-page/types';

/**
 * Service scope content for the Custom Software Solutions service page.
 * This object includes a detailed breakdown of service offerings and the key benefits they provide.
 * 
 * @type {ServiceScopeContent}
 * @property {string} title - The title of the service scope section.
 * @property {string} description - A description of the custom software development services offered.
 * @property {Array} services - An array of services provided, each containing an icon, title, description, and benefits.
 * @property {string} keyBenefitsTitle - The title for the key benefits section.
 * @property {string} keyBenefitsDescription - A description of the key benefits provided by the custom software solutions.
 * @property {Array} benefits - An array of key benefits, each containing an icon, title, and description.
 * @property {string} backgroundIcon - The icon used for the background of the service scope section.
 */
const customSoftwareServiceScope: ServiceScopeContent = {
  title: "Specialized Custom Software Development",
  description: "We develop custom software that addresses your specific business or research objectives, whether that's automating workflows, integrating systems, or solving complex computational problems.",
  
  services: [
    {
      icon: "Code",
      title: "Bespoke Software & Desktop Application Development",
      description: "We develop custom software that addresses your specific business or research objectives, whether that's automating workflows, integrating systems, or solving complex computational problems.",
      benefits: [
        "Custom desktop and server applications",
        "Industry-specific tools and utilities",
        "Data processing and analytics platforms",
        "Reusable scripts and code modules"
      ]
    },
    {
      icon: "Cog",
      title: "System Integration & API Development",
      description: "Seamlessly connect disparate systems and ensure smooth data flow across your organization.",
      benefits: [
        "Seamless connection of disparate systems",
        "Custom API design and implementation",
        "Legacy system integration",
        "Cloud service integration"
      ]
    },
    {
      icon: "Cpu",
      title: "Computational Science & Simulations",
      description: "Harness the power of computational science to drive innovation and research.",
      benefits: [
        "Scientific computing solutions",
        "Process simulation and modeling",
        "Data analysis and visualization tools",
        "Research and development tools"
      ]
    },
    {
      icon: "Shield",
      title: "Legacy Software Modernization",
      description: "Upgrade and enhance your existing software to meet current standards and performance requirements.",
      benefits: [
        "Codebase modernization",
        "Platform migration",
        "Performance optimization",
        "Security updates and improvements"
      ]
    },
    {
      icon: "Layers",
      title: "Inverse Design & Process Optimization",
      description: "Optimize your design processes and operations through advanced algorithms and machine learning.",
      benefits: [
        "Automated design optimization",
        "Machine learning integration",
        "Performance modeling",
        "Predictive analytics"
      ]
    }
  ],
  
  keyBenefitsTitle: "Key Benefits",
  keyBenefitsDescription: "Our custom software solutions provide measurable improvements to your business operations and research capabilities.",

  benefits: [
    {
      icon: "TrendingUp",
      title: "Improved Efficiency",
      description: "Streamlined processes that reduce manual effort and eliminate operational bottlenecks."
    },
    {
      icon: "Settings",
      title: "Specialized Functionality",
      description: "Tailored features designed to address niche business needs, especially in research-focused environments."
    },
    {
      icon: "Code",
      title: "Scalable Solutions",
      description: "Custom software that evolves with your organization, ensuring long-term value and adaptability."
    },
    {
      icon: "Cloud",
      title: "Competitive Edge",
      description: "Unique tools that provide a significant advantage in your industry."
    },
    {
      icon: "Shield",
      title: "Enhanced Security",
      description: "Robust security measures to protect your data and operations."
    }
  ],
  backgroundIcon: "MonitorCog",
  backgroundIconWidth: 425,
  backgroundIconHeight: 400,
};

export default customSoftwareServiceScope;