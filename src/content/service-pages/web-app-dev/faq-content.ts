/**
 * @fileoverview FAQ Content for the Web & App Development Service Page
 *
 * This file contains the content configuration for the frequently asked questions section of the Web & App Development service page.
 * It includes a title, description, and a list of frequently asked questions with answers.
 */

import { FAQContent } from '@/page-templates/service-page/types';

/**
 * Frequently asked questions content for the Web & App Development service page.
 * Each item includes an icon, question, and answer, plus an optional "more" link.
 * 
 * @type {FAQContent}
 * @property {string} title - The main title for the FAQ section.
 * @property {string} description - A brief description encouraging users to explore FAQs.
 * @property {Array} items - An array of FAQ items, each containing an icon, question, and answer.
 * @property {Object} moreLink - An optional link to view all FAQs.
 * @property {string} moreLink.text - Text for the link to view all FAQs.
 * @property {string} moreLink.url - URL for the link to view all FAQs.
 */
const webAppDevelopmentFAQContent: FAQContent = {
  title: "Quick FAQs",
  description: "Find quick answers to commonly asked questions about our services and process.",
  
  items: [
    {
      icon: "MessageCircle",
      question: "Do I need a custom website or app, or will a template suffice?",
      answer: "We assess your needs and budget to recommend the best solution, whether that's a custom build or a cost-effective template."
    },
    {
      icon: "Clock",
      question: "How long does a typical website project take?",
      answer: "Simple websites typically take 3-6 weeks, while complex applications can take 2-4 months or more."
    },
    {
      icon: "Code",
      question: "Do you work with specific technologies or platforms?",
      answer: "We choose the best technology for your specific needs, whether that's WordPress, custom development, or anything in between."
    },
    {
      icon: "Settings",
      question: "What about ongoing maintenance and updates?",
      answer: "We offer flexible maintenance plans to keep your site secure, updated, and performing well."
    }
  ],
  
  moreLink: {
    text: "View all frequently asked questions",
    url: "/faq",
  }
};

export default webAppDevelopmentFAQContent;