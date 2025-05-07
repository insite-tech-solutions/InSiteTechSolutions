// src/content/services/graphic-design/faq-content.ts

import { FAQContent } from '@/page-templates/service-page/types';

/**
 * Frequently asked questions content for the Graphic Design & Branding service page.
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
const graphicDesignFAQContent: FAQContent = {
  title: "Quick FAQs",
  description: "Find answers to commonly asked questions about our graphic design and branding services.",
  
  items: [
    {
      icon: "Image",
      question: "Do I need a complete brand identity, or just a logo?",
      answer: "This depends on your business goals. While a logo is a good starting point, a complete brand identity (including color palette, typography, and brand guidelines) provides consistency across all touchpoints and stronger brand recognition. However, we seek to meet your goals and budget and offer a la carte graphic design services too."
    },
    {
      icon: "FileText",
      question: "What file formats will I receive for my designs?",
      answer: "We provide all designs in industry-standard, open-source formats suited to your needs, typically including vector files (SVG, EPS), print-ready files (PDF), and web-optimized versions (PNG, JPG) for digital use."
    },
    {
      icon: "Copyright",
      question: "Who owns the rights to the designs once the project is complete?",
      answer: "Once the project is fully paid for, you own all rights to the final designs we create for you. We generally request to retain permission to showcase the work in our portfolio (exlcuding NDAs or other predeteremined restrictions which may incur extra fees), but you maintain complete ownership of your brand assets."
    },
    {
      icon: "Clock",
      question: "How long does a typical branding project take?",
      answer: "The timeline varies based on project scope and complexity. A logo typically takes 2-3 weeks, while a complete brand identity system might require 4-8+ weeks to develop all elements and guidelines."
    }
  ],
  
  moreLink: {
    text: "View all frequently asked questions",
    url: "/faq",
  }
};

export default graphicDesignFAQContent;