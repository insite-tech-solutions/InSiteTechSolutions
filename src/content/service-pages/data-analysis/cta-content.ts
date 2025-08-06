/**
 * @fileoverview CTA Content for the Data Analysis Service Page
 *
 * This file contains the content configuration for the call-to-action section of the Data Analysis service page.
 * It includes a title, description, and button labels/links.
 */

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
  title: "Ready to Transform Your Data into InSites?",
  description: "Let's harness the power of your data to drive better decisions and measurable business results.",
  primaryButtonText: "Schedule Free Consultation",
  primaryButtonLink: "/contact",
  secondaryButtonText: "View Case Studies",
  secondaryButtonLink: "/about/previous-works",
};

export default dataAnalysisCTAContent;