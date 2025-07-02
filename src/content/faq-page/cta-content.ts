/**
 * @fileoverview CTA content for the FAQ page
 */

import { CTAContent } from '@/page-templates/service-page/types';

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