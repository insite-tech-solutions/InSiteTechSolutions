// src/content/services/consulting-training/faq-content.ts

import { FAQContent } from '@/page-templates/service-page/types';

/**
 * Frequently asked questions content for the Consulting & Training service page.
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
const consultingTrainingFAQContent: FAQContent = {
  title: "Quick FAQs",
  description: "Find answers to commonly asked questions about our consulting and training services.",
  
  items: [
    {
      icon: "Users",
      question: "What types of organizations do you work with?",
      answer: "We work with a diverse range of clients including individuals, businesses, academic institutions, research organizations, and non-profits. Our services are tailored to meet the specific needs of each client, whether you're advancing research, optimizing business operations, or just need quick tech help."
    },
    {
      icon: "Presentation",
      question: "How are your consulting and training services delivered?",
      answer: "We offer flexible delivery options including on-site workshops, remote sessions, one-on-one consulting, group training, and hybrid approaches. Our delivery method is tailored to your specific needs, team size, geographic distribution, and learning objectives."
    },
    {
      icon: "Clock",
      question: "How long does a typical consulting or training engagement last?",
      answer: "Engagement length varies based on your objectives and the complexity of your needs. Simple tech help and focused consulting projects typically range from a few hours to a few weeks, while comprehensive training programs may span 4-12+ weeks (not including development time). We also offer ongoing advisory arrangements for continuous support."
    },
    {
      icon: "FileText",
      question: "Do you provide documentation and resources after the engagement?",
      answer: "Yes, depending on the scope of the engagement, we can provide various documentation including training materials, implementation guides, process documentation, and reference resources. These materials are yours to keep and use for ongoing reference."
    },
    {
      icon: "CheckCircle",
      question: "How do you measure the success of consulting and training engagements?",
      answer: "We establish clear success metrics at the beginning of each engagement and track progress throughout. Depending on your objectives, these may include implementation milestones, capability assessments, efficiency improvements, research outcomes, or business results. We also conduct follow-up evaluations to ensure long-term value."
    },
  ],
  
  moreLink: {
    text: "View all frequently asked questions",
    url: "/faq",
  }
};

export default consultingTrainingFAQContent;