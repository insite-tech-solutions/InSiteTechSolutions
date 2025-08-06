/**
 * @fileoverview Homepage FAQ Content Configuration
 *
 * Defines the FAQ content for the homepage, including common
 * questions and answers about InSite Tech Solutions services,
 * client types, project process, and company differentiators.
 *
 * Features:
 * - Curated selection of common questions
 * - Comprehensive answers about services and process
 * - Icon associations for visual appeal
 * - Link to full FAQ page for more questions
 * - Focus on key business information
 *
 * @module homepageFAQContent
 */

import { FAQContent } from '@/page-templates/service-page/types';

/**
 * Homepage FAQ Content Configuration
 * 
 * Curated FAQ content for the homepage featuring the most
 * common questions about services, clients, process, and
 * company differentiators. Designed to provide quick answers
 * while encouraging further exploration.
 * 
 * @constant {FAQContent} homepageFAQContent
 */
const homepageFAQContent: FAQContent = {
  title: "Frequently Asked Questions",
  description: "Quick answers to common questions about InSite Tech Solutions, our services, and how we work.",
  items: [
    {
      icon: "Info",
      question: "What services does InSite Tech Solutions offer?",
      answer: "We provide a wide range of services including web and app development, custom software solutions, AI and automation, data analysis, SEO and online marketing, graphic design and branding, and consulting and training.",
    },
    {
      icon: "UserCheck",
      question: "Who are your typical clients?",
      answer: "Our clients range from individuals and small businesses to academic research labs andestablished enterprises across various industries seeking innovative technology solutions.",
    },
    {
      icon: "Calendar",
      question: "How do I get started with a project?",
      answer: "Simply contact us through our website or email. We'll schedule a free consultation to discuss your needs and recommend the best solutions.",
    },
    {
      icon: "ShieldCheck",
      question: "Do you offer ongoing support after project delivery?",
      answer: "Yes, we offer maintenance and support plans to ensure your solution remains secure, up-to-date, and effective.",
    },
    { 
      icon: 'Search', 
      question: 'What makes InSite Tech Solutions different from other tech companies?', 
      answer: "We believe everyone deserves access to thoughtful, custom tech—without hiring a full development team or navigating layers of sales reps. We combine technical expertise with personalized service, offering a one-stop solution for all your tech needs. Our 5D methodology ensures clear communication, flexible pricing fits your budget, and our ongoing support means we're invested in your long-term success."
    }
  ],
  moreLink: {
    text: "View all frequently asked questions",
    url: "/insites/faq",
  },
};

export default homepageFAQContent; 