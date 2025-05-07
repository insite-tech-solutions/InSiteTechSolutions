// src/content/service-pages/custom-software/faq-content.ts

import { FAQContent } from '@/page-templates/service-page/types';

/**
 * Frequently asked questions content for the Custom Software Solutions service page.
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
const customSoftwareFAQContent: FAQContent = {
  title: "Got Questions? We've Got Answers",
  description: "Find quick answers to commonly asked questions about our services and process.",
  
  items: [
    {
      icon: "MessageCircle",
      question: "Do I need custom software, or can I use existing solutions?",
      answer: "We assess your business needs and processes to determine whether a custom solution or an existing platform is the best fit. Custom software offers tailored functionalities and scalability that off-the-shelf solutions may lack.",
    },
    {
      icon: "Clock",
      question: "How long does custom software development take?",
      answer: "There is so much variability in project scope and complexity that it is difficult to provide a precise timeline, but small scale, simple projects can be done in a matter of days to weeks, whereas larger projects can range from 3-6+ months, depending on complexity.",
    },
    {
      icon: "Settings",
      question: "Can you integrate with our existing systems?",
      answer: "Generally, yes, we are able to connect with most existing platforms and databases, but we will need to assess your specific requirements and existing systems.",
    },
    {
      icon: "Code",
      question: "Do you offer ongoing support and maintenance for custom software?",
      answer: "Yes, we offer comprehensive maintenance and support plans to ensure your software remains up-to-date, secure, and performing optimally.",
    },
  ],
  
  moreLink: {
    text: "View all frequently asked questions",
    url: "/faq",
  }
};

export default customSoftwareFAQContent;