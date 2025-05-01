// src/content/services/data-analysis/cta-content.ts

import { CTAContent } from '@/page-templates/service-page/types';

/**
 * Call-to-action content block for the Data Analysis service page.
 * This defines heading text, button labels, links, and optional background styling.
 * 
 * @type {CTAContent}
 * @property {string} title - The main title for the call-to-action section.
 * @property {string} description - A brief description encouraging users to engage.
 * @property {string} primaryButtonText - Text for the primary call-to-action button.
 * @property {string} primaryButtonLink - URL for the primary button's link.
 * @property {string} secondaryButtonText - Text for the secondary call-to-action button.
 * @property {string} secondaryButtonLink - URL for the secondary button's link.
 * @property {string} bgClassName - Optional custom background class for styling.
 */
const dataAnalysisCTAContent: CTAContent = {
  title: "Ready to Transform Your Data into Insights?",
  description: "Let's harness the power of your data to drive better decisions and measurable business results.",
  primaryButtonText: "Schedule Free Consultation",
  primaryButtonLink: "/contact",
  secondaryButtonText: "View Case Studies",
  secondaryButtonLink: "/case-studies",
  bgClassName: "bg-gradient-to-br from-medium-blue to-blue-800", // Optional custom background
};

export default dataAnalysisCTAContent;