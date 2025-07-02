/**
 * @fileoverview Call-to-Action (CTA) content configuration for FAQ page
 * 
 * This file defines the content for the call-to-action section displayed at the bottom
 * of the FAQ page. It provides users with a clear next step when they haven't found
 * the answers they're looking for in the FAQ content.
 * 
 * Features:
 * - Encourages user engagement after FAQ review
 * - Provides direct path to contact page
 * - Maintains consistent CTA structure across the site
 */

import { CTAContent } from '@/page-templates/service-page/types';

/**
 * Call-to-Action content configuration for the FAQ page
 * 
 * Defines the messaging and navigation for the CTA section that appears after
 * users have reviewed the FAQ content. This section encourages users to reach
 * out directly if they need additional assistance.
 * 
 * @type {CTAContent}
 * @property {string} title - Engaging headline that prompts user action
 * @property {string} description - Supportive text explaining the next step
 * @property {string} primaryButtonText - Clear call-to-action button text
 * @property {string} primaryButtonLink - Direct link to contact page
 */
const faqPageCTAContent: CTAContent = {
  title: "Still have questions?",
  description: "If you didn't find the answer you were looking for, we're here to help. Reach out and we'll get back to you ASAP!",
  primaryButtonText: "Get in Touch",
  primaryButtonLink: "/contact",
};

export default faqPageCTAContent; 