// src/content/services/data-analysis/faq-content.ts

import { FAQContent } from '@/page-templates/service-page/types';

/**
 * Frequently asked questions content for the Data Analysis service page.
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
const dataAnalysisFAQContent: FAQContent = {
  title: "Quick FAQs",
  description: "Find answers to commonly asked questions about our data analysis services.",
  
  items: [
    {
      icon: "Database",
      question: "What types of data can you work with?",
      answer: "We work with virtually any type of structured or unstructured data, including business metrics, customer information, scientific measurements, text, and more. Our expertise extends to both small datasets and large-scale data environments."
    },
    {
      icon: "Lock",
      question: "How do you ensure data security and confidentiality?",
      answer: "We implement strict data security protocols, including secure transfer methods, access controls, and confidentiality agreements. We can also work within your existing security infrastructure or provide anonymized analysis when appropriate."
    },
    {
      icon: "FileText",
      question: "What deliverables can I expect from a data analysis project?",
      answer: "Typical deliverables include comprehensive reports with visualizations, interactive dashboards, predictive models, and strategic recommendations. We tailor all deliverables to your specific needs and technical capabilities."
    },
    {
      icon: "Code",
      question: "Do I need to have advanced technical knowledge to understand the results?",
      answer: "No. We translate complex analytical findings into clear, business-focused insights that are accessible to non-technical stakeholders. We provide different levels of detail for technical and non-technical audiences as needed."
    }
  ],
  
  moreLink: {
    text: "View all frequently asked questions",
    url: "/faq",
  }
};

export default dataAnalysisFAQContent;