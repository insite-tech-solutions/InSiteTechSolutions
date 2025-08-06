/**
 * @fileoverview CTA Content for FAQ Page
 *
 * Defines the call-to-action content for the FAQ page, including
 * title, description, and action buttons. Used to encourage
 * users to contact the company when they can't find answers
 * in the FAQ section.
 *
 * Features:
 * - Compelling title to encourage contact
 * - Clear description of support availability
 * - Primary and secondary action buttons
 * - Gradient background styling
 * - Contact-focused conversion strategy
 *
 * @module faqPageCTAContent
 */

import { CTAContent } from '@/page-templates/service-page/types';

/**
 * FAQ Page CTA Content Configuration
 * 
 * Call-to-action content for the FAQ page that encourages
 * users to contact the company when they can't find answers
 * in the FAQ section. Includes contact options and styling.
 * 
 * @constant {CTAContent} faqPageCTAContent
 */
const faqPageCTAContent: CTAContent = {
  title: "Still have questions?",
  description: "If you didn't find the answer you were looking for, we're here to help. Reach out and we'll get back to you ASAP!",
  primaryButtonText: "Contact Us",
  primaryButtonLink: "/contact",
  secondaryButtonText: "Schedule a Call",
  secondaryButtonLink: "/contact#schedule",
  bgClassName: "bg-gradient-to-br from-medium-blue to-light-blue"
};

export default faqPageCTAContent; 