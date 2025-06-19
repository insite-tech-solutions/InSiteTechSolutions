/**
 * @fileoverview CTA Content for the AI & Automation Service Page
 *
 * This file contains the content configuration for the call-to-action section of the AI & Automation service page.
 * It includes a title, description, and button labels/links.
 */

import { CTAContent } from '@/page-templates/service-page/types';

/**
 * Call-to-action content block for the AI & Automation service page.
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
const aiAutomationCTAContent: CTAContent = {
  title: "Ready to Leverage the Power of AI and Automation?",
  description: "Let's discuss how AI and automation can streamline your operations, enhance decision-making, and create new opportunities for growth.",
  primaryButtonText: "Schedule Free Consultation",
  primaryButtonLink: "/contact",
  secondaryButtonText: "View Case Studies",
  secondaryButtonLink: "/case-studies",
  //bgClassName: "bg-gradient-to-br from-medium-blue to-blue-800", // Optional custom background
};

export default aiAutomationCTAContent;