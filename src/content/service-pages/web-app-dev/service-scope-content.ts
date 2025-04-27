// src/content/services/web-app-development/service-scope-content.ts

import { ServiceScopeContent } from '@/page-templates/service-page/types';

/**
 * Service scope content for the Web & App Development service page.
 * This object includes a detailed breakdown of service offerings and the key benefits they provide.
 * 
 * @type {ServiceScopeContent}
 * @property {string} title - The title of the service scope section.
 * @property {string} description - A description of the web and app development services offered.
 * @property {Array} services - An array of services provided, each containing an icon, title, description, and benefits.
 * @property {string} keyBenefitsTitle - The title for the key benefits section.
 * @property {string} keyBenefitsDescription - A description of the key benefits provided by web and app development solutions.
 * @property {Array} benefits - An array of key benefits, each containing an icon, title, and description.
 * @property {string} backgroundIcon - The icon used for the background of the service scope section.
 */
const webAppDevelopmentServiceScope: ServiceScopeContent = {
  title: "Comprehensive Development Services",
  description: "We provide end-to-end development services for websites and applications, ensuring that your digital presence is not only functional but engaging and optimized for growth.",
  
  services: [
    {
      icon: "Globe",
      title: "Website Design & Development",
      description: "Custom websites that are fast, responsive, and tailored to your brand.",
      benefits: [
        "Optimized for all devices and screen sizes",
        "Fast loading speeds and performance",
        "SEO-friendly architecture",
        "Custom branding and design"
      ]
    },
    {
      icon: "Smartphone",
      title: "Full-Stack App Development",
      description: "End-to-end development for mobile, desktop, and web applications.",
      benefits: [
        "Native iOS and Android development",
        "Cross-platform compatibility",
        "Seamless user experience",
        "Robust backend systems"
      ]
    },
    {
      icon: "Monitor",
      title: "Cross-Platform Development",
      description: "Unified experiences across devices to ensure consistency for users.",
      benefits: [
        "Consistent brand experience",
        "Synchronized data across platforms",
        "Reduced development time",
        "Cost-effective maintenance"
      ]
    },
    {
      icon: "Code",
      title: "Modern Tech Frameworks",
      description: "Leveraging the latest frameworks for future-proof solutions.",
      benefits: [
        "React and Next.js expertise",
        "Swift and Kotlin for mobile",
        "Progressive Web Apps",
        "Modern architecture patterns"
      ]
    },
    {
      icon: "Settings",
      title: "Maintenance & Support",
      description: "Long-term partnerships to keep your digital presence optimal.",
      benefits: [
        "Regular updates and improvements",
        "Performance monitoring",
        "Security patches",
        "Technical support"
      ]
    }
  ],
  
  keyBenefitsTitle: "Key Benefits",
  keyBenefitsDescription: "Our custom solutions deliver measurable improvements to your business operations and customer experience.",

  benefits: [
    {
      icon: "Gauge",
      title: "Improved User Experience",
      description: "Intuitive interfaces that keep users engaged and satisfied."
    },
    {
      icon: "Users",
      title: "Increased Engagement",
      description: "Features that encourage user interaction and retention."
    },
    {
      icon: "TrendingUp",
      title: "Higher Conversion Rates",
      description: "Optimized flows that turn visitors into customers."
    },
    {
      icon: "Repeat",
      title: "Scalable Solutions",
      description: "Systems that grow and adapt with your business needs."
    }
  ],
  backgroundIcon: "LayoutGrid",
};

export default webAppDevelopmentServiceScope;