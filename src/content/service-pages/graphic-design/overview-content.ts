/**
 * Graphic Design & Branding Overview Content
 * 
 * This file contains the content configuration for the graphic design and branding service overview section.
 * It includes:
 * - Markdown-formatted main content
 * - Table of Contents navigation items
 * 
 * @module GraphicDesignOverviewContent
 */

import { ServiceOverviewContent } from '@/page-templates/service-page/types';

/**
 * Overview content for the Graphic Design & Branding service page.
 * This object includes the main content and table of contents for the service overview section.
 * 
 * @type {ServiceOverviewContent}
 * @property {string} markdownText - The main content in markdown format, describing the service offerings and capabilities.
 * @property {Array} tocItems - An array of table of contents items, each containing a title and anchor link.
 */
const graphicDesignOverviewContent: ServiceOverviewContent = {
  markdownText: `At InSite Tech, we are **bridging art and tech** by harnessing modern digital media and tools to create **beautiful, performant designs** which express your values and captivate your audience. We create compelling visual identities and design solutions that help businesses stand out in today’s crowded marketplace. From logo design and comprehensive brand systems to marketing materials and digital assets, our design services balance aesthetic appeal with strategic effectiveness to create meaningful connections with your audience.

Our **brand identity services** include **logo design**, **color palette development**, **typography selection**, and **full brand guideline creation** to ensure consistency across every touchpoint. We believe effective branding goes beyond just visual appeal—it communicates your unique value proposition and connects emotionally with your target audience. Whether you’re launching a new business, refreshing an existing brand, or codifying an evolving identity, we develop visual systems that authentically represent your organization’s personality and values.

For established businesses, we offer design services for **marketing collateral** (business cards, brochures, signage), **digital assets** (social media graphics, email templates, web banners), **individual graphics**, and more. We ensure all materials maintain brand consistency while being optimized for their specific medium and purpose, creating a seamless experience for your customers across all platforms and interactions.

Our **design process** is deeply collaborative, beginning with a thoughtful discovery phase to understand your goals, values, audience, and vision. We believe the best design lives at the intersection of **art and technology**—where aesthetics serve not just function, but expression, clarity, and identity.

In addition to our design services, we also offer comprehensive **digital media services**, inlcuding everything from **photo and video editing** to **UI/UX mockups** and **wireframing**. Whatever your technical or creative needs, we can help.

We also offer **flexible ongoing design support**, from seasonal updates and monthly retainers to **ad-hoc design requests**—ensuring your visual presence evolves along with your needs.

We emphasize long-term partnerships over transactional relationships, taking the time to understand your business before making design recommendations. We’ll work with you to understand your **priorities, goals, and budget**—and then recommend the best approach for your specific situation, even if that means referring you elsewhere. **Your success is always our top priority.**`,

  tocItems: [
    { title: "Value of Our Services", anchor: "#value-prop" },
    { title: "What We Offer", anchor: "#service-scope" },
    { title: "Industries & Applications", anchor: "#applications" },
    { title: "Our Development Process", anchor: "#process" },
    { title: "Pricing & Packages", anchor: "#pricing" },
    { title: "The InSite Advantage", anchor: "#insite-advantage" },
    { title: "Frequently Asked Questions", anchor: "#faq" }
  ]
};

export default graphicDesignOverviewContent;
