/**
 * @fileoverview Overview Content for the Web & App Development Service Page
 * 
 * This file contains the content configuration for the web app development service overview section.
 * It includes:
 * - Markdown-formatted main content
 * - Table of Contents navigation items
 * 
 * @module WebAppDevOverviewContent
 */

import { ServiceOverviewContent } from '@/page-templates/service-page/types';

/**
 * Overview content for the Web & App Development service page.
 * This object includes the main content and table of contents for the service overview section.
 * 
 * @type {ServiceOverviewContent}
 * @property {string} markdownText - The main content in markdown format, describing the service offerings and capabilities.
 * @property {Array} tocItems - An array of table of contents items, each containing a title and anchor link.
 */
const webAppDevOverviewContent: ServiceOverviewContent = {
  markdownText: `We specialize in **building beautiful, functional websites** and **applications** tailored to individuals, small and mid-sized businesses, research labs, nonprofits, and more. Whether you're launching your first website or upgrading an existing platform, we provide the ideal solution to meet your goals and budget. We're also available for contract-based work on larger enterprise-scale projects.

We have particular expertise in platform-based solutions like **WordPress** and **Squarespace**. As a certified **Squarespace Circle** member, we can offer **discounted rates on Squarespace plans**, making high-quality websites accessible even on limited budgets. We're also proficient with other platforms such as **Wix** and **Webflow** when they're the right fit for your needs. While these 'builder' platforms allow DIY creation, there is both an art and a science to effective **user interface (UI/UX) design** and **technical optimization**—areas where many self-built solutions fall short, potentially limiting your site's effectiveness and growth potential.

For projects requiring greater **customization, scalability, or performance**, we develop fully custom websites using modern frameworks like **React**, **Next.js**, or even **vanilla HTML/CSS/JavaScript**. While custom-coded sites may require more initial development time, they offer unmatched control and flexibility, and can reduce long-term hosting costs—sometimes even **enabling free hosting options**. Whether you need a simple informational website, a portfolio to showcase your work, or a complete **e-commerce solution** with platforms like **Shopify** or **WooCommerce**, we'll recommend the optimal technology stack aligned with your needs, timeline, and budget.

Our **application development services** cover both internal business tools (such as inventory management, process automation, and team coordination) and external customer-facing apps across **web**, **iOS**, and **Android** platforms—including full-scale **software as a service (SaaS)** solutions. We provide comprehensive services from initial mockups and **MVP (minimum viable product)** development through full production development, launch, and post-launch support and maintenance.

We offer **flexible ongoing support options**, ranging from basic website administration and monthly maintenance retainers to fully dedicated developer support, to ensure your solution evolves with your needs.

We'll work with you to understand your **priorities, goals, and budget**—and then recommend the best approach for your specific situation, even if that means referring you elsewhere. **Your success is always our top priority.**`,

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

export default webAppDevOverviewContent;
