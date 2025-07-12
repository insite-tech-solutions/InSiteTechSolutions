/**
 * @fileoverview InSite Advantage Content for the About Us Page
 *
 * This file contains the content configuration for the InSite Advantage section of the About Us page.
 * It includes a title, description, and a list of advantages and benefits that are broader and more
 * appropriate for the About Us context rather than being service-specific.
 */

import { InSiteAdvantageContent } from '@/page-templates/service-page/types';

/**
 * Content for the About Us page InSite Advantage section.
 * This includes advantages (displayed as cards) and broader business benefits (shown in a timeline layout).
 * The content is tailored for the About Us context, highlighting general company strengths rather than
 * service-specific advantages.
 * 
 * @type {InSiteAdvantageContent}
 * @property {string} title - The main title for the InSite Advantage section.
 * @property {string} description - A detailed description of the advantages of partnering with InSite Tech Solutions.
 * @property {Array} advantages - An array of advantages, each containing a title, description, and icon.
 * @property {Array} benefits - An array of broader business benefits, each containing a title and description.
 */
const aboutUsAdvantageContent: InSiteAdvantageContent = {
  title: "The InSite Advantage",
  description: "Why choose InSite Tech Solutions? Because we believe in building more than just technology—we build lasting partnerships. Our approach combines technical excellence with genuine care for your success. We don't just deliver solutions; we become your trusted technology partner.",
  
  advantages: [
    {
      title: "Personalized Partnership",
      description: "We treat every client as a partner, taking the time to understand your unique needs and goals before crafting solutions.",
      icon: "Handshake"
    },
    {
      title: "Local Expertise",
      description: "As a local business, we provide direct communication, personalized attention, and deep understanding of your market and challenges.",
      icon: "MapPin"
    },
    {
      title: "Full-Service Solutions",
      description: "From initial consultation to ongoing support, we provide comprehensive technology services under one roof.",
      icon: "Cog"
    },
    {
      title: "Proven Experience",
      description: "With years of experience across diverse industries, we bring valuable insights and proven methodologies to every project.",
      icon: "Award"
    },
    {
      title: "Flexible Approach",
      description: "We adapt our services to fit your needs and budget, ensuring you get the right solution at the right price.",
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

export default aboutUsAdvantageContent;
