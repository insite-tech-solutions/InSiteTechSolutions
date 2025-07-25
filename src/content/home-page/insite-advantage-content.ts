/**
 * @fileoverview Homepage InSite Advantage Content Configuration
 *
 * Defines the content for the InSite advantage section on the homepage,
 * including company differentiators, key benefits, and value propositions.
 * Focuses on personalized service, local partnership, and comprehensive
 * technology solutions.
 *
 * Features:
 * - Company differentiators and unique value propositions
 * - Key benefits for potential clients
 * - Icon associations for visual appeal
 * - Focus on local partnership and personalized service
 * - Comprehensive technology expertise messaging
 *
 * @module homepageInsiteAdvantageContent
 */

import { InSiteAdvantageContent } from '@/page-templates/service-page/types';

/**
 * Homepage InSite Advantage Content Configuration
 * 
 * Content for the InSite advantage section highlighting company
 * differentiators, key benefits, and value propositions. Emphasizes
 * personalized service, local partnership, and comprehensive
 * technology solutions under one roof.
 * 
 * @constant {InSiteAdvantageContent} homepageInsiteAdvantageContent
 */
const homepageInsiteAdvantageContent: InSiteAdvantageContent = {
  title: "Why Choose InSite Tech?",
  description: "We combine technical expertise, business insight, and a client-first approach to deliver real results. We believe everyone deserves access to thoughtful, custom tech, without needing to hire a full development team or navigate layers of sales reps. Working with us means working directly with the person who's building your solution. It means lower overhead, fewer misunderstandings, and a stronger partnership.",
  advantages: [
    {
      title: "Personalized Solutions",
      description: "We tailor every project to your unique needs, ensuring solutions that fit your specific goals and budget.",
      icon: "Users"
    },
    {
      title: "End-to-End Expertise",
      description: "From initial consultation to ongoing support, we provide comprehensive technology services under one roof.",
      icon: "Cog"
    },
    {
      title: "Local Partnership",
      description: "As a local business, we provide direct communication, personalized attention, and deep understanding of your market.",
      icon: "MapPin"
    },
    {
      title: "Proven Experience",
      description: "With years of experience across diverse industries, we bring valuable insights and proven methodologies to every project.",
      icon: "Award"
    },
    {
      title: "Flexible Approach",
      description: "We adapt our services to fit your needs and timeline, ensuring you get the right solution at the right price.",
      icon: "Settings"
    },
    {
      title: "Long-Term Support",
      description: "We build lasting relationships, offering ongoing support and maintenance to ensure your technology grows with your business.",
      icon: "Headphones"
    }
  ], 
  
  benefits: [
    {
      title: "Reduced Technology Stress",
      description: "Eliminate the frustration of working with distant or impersonal tech providers. Get direct access to your team and clear communication throughout every project."
    },
    {
      title: "Cost-Effective Growth",
      description: "Avoid the expense of hiring full-time technical staff or working with expensive agencies."
    },
    {
      title: "Custom Built Solutions",
      description: "Ensure your technology directly supports your objectives with solutions designed around your specific goals and constraints."
    },
    {
      title: "Competitive Advantage",
      description: "Build lasting technological capabilities that enhance your business through customized, scalable solutions."
    }
  ],
};

export default homepageInsiteAdvantageContent; 