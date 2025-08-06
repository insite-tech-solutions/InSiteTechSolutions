/**
 * @fileoverview Service Scope Content for the Graphic Design & Branding Service Page
 *
 * This file contains the content configuration for the service scope section of the Graphic Design & Branding service page.
 * It includes a detailed breakdown of service offerings and the key benefits they provide.
 */

import { ServiceScopeContent } from '@/page-templates/service-page/types';

/**
 * Service scope content for the Graphic Design & Branding service page.
 * This object includes a detailed breakdown of service offerings and the key benefits they provide.
 * 
 * @type {ServiceScopeContent}
 * @property {string} title - The title of the service scope section.
 * @property {string} description - A description of the graphic design and branding services offered.
 * @property {Array} services - An array of services provided, each containing an icon, title, description, and benefits.
 * @property {string} keyBenefitsTitle - The title for the key benefits section.
 * @property {string} keyBenefitsDescription - A description of the key benefits provided by graphic design and branding solutions.
 * @property {Array} benefits - An array of key benefits, each containing an icon, title, and description.
 * @property {string} backgroundIcon - The icon used for the background of the service scope section.
 * @property {number} backgroundIconWidth - The width of the background icon.
 * @property {number} backgroundIconHeight - The height of the background icon.
 */
const graphicDesignServiceScope: ServiceScopeContent = {
  title: "Comprehensive Visual Design Solutions",
  description: "We offer a full range of design services to help businesses establish a cohesive visual identity that resonates with their target audience. From initial concept to final execution, we create memorable brand experiences across all platforms.",
  
  services: [
    {
      icon: "Image",
      title: "Logo Design & Brand Identity Development",
      description: "Create a distinctive visual identity that captures your brand's essence and values.",
      benefits: [
        "Professional logo design with multiple concepts",
        "Comprehensive brand guidelines and style guides",
        "Color palette and typography selection",
        "Brand voice and messaging strategy",
        "Visual identity system development"
      ]
    },
    {
      icon: "Layers",
      title: "User Interface/Experience (UI/UX) Design",
      description: "Design intuitive, engaging digital interfaces that enhance user satisfaction and encourage interaction.",
      benefits: [
        "User-centered interface design",
        "Wireframing and prototyping",
        "Interactive design elements",
        "Responsive layouts for all devices",
        "Accessibility-focused design principles"
      ]
    },
    {
      icon: "PenTool",
      title: "Digital Content & Visual Asset Creation",
      description: "Develop engaging visual content that strengthens brand recognition and drives engagement.",
      benefits: [
        "Custom illustrations and iconography",
        "Social media graphics and templates",
        "Infographics and data visualization",
        "Digital advertising materials",
        "Email marketing templates"
      ]
    },
    {
      icon: "FileText",
      title: "Print & Digital Marketing Material Design",
      description: "Create cohesive marketing materials that effectively communicate your message across channels.",
      benefits: [
        "Brochures, flyers, and print collateral",
        "Business cards and stationery",
        "Banners, signage, and trade show materials",
        "Packaging design",
        "Digital marketing assets"
      ]
    },
    {
      icon: "Film",
      title: "Photo & Video Editing Services",
      description: "Enhance your visual content with professional editing services that elevate your brand's visual storytelling.",
      benefits: [
        "Product photography enhancement",
        "Photo retouching and color correction",
        "Video editing and post-production",
        "Motion graphics and animations",
        "Visual content optimization for different platforms"
      ]
    }
  ],
  
  keyBenefitsTitle: "Key Benefits",
  keyBenefitsDescription: "Our graphic design and branding solutions provide measurable improvements to your business visibility and customer perception.",

  benefits: [
    {
      icon: "Eye",
      title: "Enhanced Brand Recognition",
      description: "Stand out from competitors with distinctive visual elements that make your brand immediately recognizable."
    },
    {
      icon: "Zap",
      title: "Improved Customer Engagement",
      description: "Capture and maintain audience attention with compelling visuals that encourage deeper interaction."
    },
    {
      icon: "Award",
      title: "Increased Perceived Value",
      description: "Professional design elevates how customers perceive your products and services, allowing for premium positioning."
    },
    {
      icon: "Heart",
      title: "Stronger Emotional Connections",
      description: "Build lasting relationships with customers through visual storytelling that resonates on an emotional level."
    }
  ],
  backgroundIcon: "Palette",
  backgroundIconWidth: 425,
  backgroundIconHeight: 375,
};

export default graphicDesignServiceScope;