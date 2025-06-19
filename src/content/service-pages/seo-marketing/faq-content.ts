/**
 * @fileoverview FAQ Content for the SEO & Online Marketing Service Page
 *
 * This file contains the content configuration for the frequently asked questions section of the SEO & Online Marketing service page.
 * It includes a title, description, and a list of frequently asked questions with answers.
 */

import { FAQContent } from '@/page-templates/service-page/types';

/**
 * Frequently asked questions content for the SEO & Online Marketing service page.
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
const seoMarketingFAQContent: FAQContent = {
  title: "Quick FAQs",
  description: "Find answers to commonly asked questions about our SEO and online marketing services.",
  
  items: [
    {
      icon: "Clock",
      question: "How long does it take to see results from SEO and online marketing?",
      answer: "SEO typically shows noticeable results within 3-6 months, depending on competition and current website status. Paid advertising results can be seen almost immediately once campaigns are launched. We provide regular progress reports so you can track improvements along the way."
    },
    {
      icon: "Package",
      question: "Do I need all digital marketing services, or can I start with just SEO?",
      answer: "We'll assess your needs and recommend the most effective starting point based on your goals and budget. Whatever your goals and budget, we'll tailor our solutions to them, not vice versa."
    },
    {
      icon: "BarChart",
      question: "How do you measure marketing success?",
      answer: "We use various metrics, including organic traffic, search rankings, conversion rates, ROI, and engagement metrics to track and measure the success of our campaigns, providing regular reports on your campaign's performance."
    },
    {
      icon: "Award",
      question: "What makes your approach different from other agencies?",
      answer: "We combine technical expertise with creative marketing strategies, focusing on sustainable growth rather than quick fixes. Our personalized approach ensures marketing efforts align perfectly with your business objectives."
    }
  ],
  
  moreLink: {
    text: "View all frequently asked questions",
    url: "/faq",
  }
};

export default seoMarketingFAQContent;