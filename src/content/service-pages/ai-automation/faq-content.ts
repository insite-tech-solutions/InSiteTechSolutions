/**
 * @fileoverview FAQ Content for the AI & Automation Service Page
 *
 * This file contains the content configuration for the frequently asked questions section of the AI & Automation service page.
 * It includes a title, description, and a list of frequently asked questions with answers.
 */

import { FAQContent } from '@/page-templates/service-page/types';

/**
 * Frequently asked questions content for the AI & Automation service page.
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
const aiAutomationFAQContent: FAQContent = {
  title: "Quick FAQs",
  description: "Find answers to commonly asked questions about our AI and automation services.",
  
  items: [
    { 
      icon: "MessageCircleQuestion",
      question: "What's the difference between basic automation and AI solutions?",
      answer: "Basic automation uses tools like Zapier, Make, or IFTTT to automate routine tasks and workflows. AI solutions involve more sophisticated technologies like machine learning and natural language processing. We help you choose the right approach based on your needs, budget, and goals."
    },
    {
      icon: "Settings",
      question: "Can I start with basic automation and upgrade to AI later?",
      answer: "Absolutely. Many clients begin with simple automation using tools like Zapier or Make, then gradually incorporate AI capabilities as their needs evolve. We design solutions that can scale with your business, ensuring your investment grows with your requirements."
    },
    {
      icon: "HelpCircle",
      question: "Do I need specialized infrastructure to implement AI solutions?",
      answer: "Not necessarily. While some advanced AI applications require robust computing resources, many solutions can be deployed using cloud services or integrated with your existing infrastructure. We assess your specific needs and recommend the most cost-effective approach."
    },
    {
      icon: "Clock",
      question: "How long does it take to implement an AI or automation solution?",
      answer: "Implementation timelines vary based on complexity and scope. Simple automation projects may be completed in 2-4 weeks, while more comprehensive AI solutions typically require 8-16+ weeks. Our phased approach allows you to see incremental value throughout the implementation process."
    },
    {
      icon: "Users",
      question: "How will AI and automation affect my current workforce?",
      answer: "When implemented strategically, AI and automation typically augment rather than replace human workers. These technologies handle routine, repetitive tasks, allowing your team to focus on higher-value work that requires creativity, critical thinking, and human judgment. We work with you to plan for effective human-AI collaboration."
    }
  ],
  
  moreLink: {
    text: "View all frequently asked questions",
    url: "/faq",
  }
};

export default aiAutomationFAQContent;