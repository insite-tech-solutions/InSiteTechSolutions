// src/content/services/graphic-design/cta-content.ts

import { CTAContent } from '@/page-templates/service-page/types';

/**
 * Call-to-action content block for the Graphic Design & Branding service page.
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
const graphicDesignCTAContent: CTAContent = {
  title: "Ready to Transform Your Visual Identity?",
  description: "Let's create a compelling brand experience that resonates with your audience and sets your business apart.",
  primaryButtonText: "Schedule Free Consultation",
  primaryButtonLink: "/contact",
  secondaryButtonText: "View Case Studies",
  secondaryButtonLink: "/case-studies",
};

export default graphicDesignCTAContent;