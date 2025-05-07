/**
 * SEO & Online Marketing Overview Content
 * 
 * This file contains the content configuration for the SEO and online marketing service overview section.
 * It includes:
 * - Markdown-formatted main content
 * - Table of Contents navigation items
 * 
 * @module SEOMarketingOverviewContent
 */

import { ServiceOverviewContent } from '@/page-templates/service-page/types';

/**
 * Overview content for the SEO & Online Marketing service page.
 * This object includes the main content and table of contents for the service overview section.
 * 
 * @type {ServiceOverviewContent}
 * @property {string} markdownText - The main content in markdown format, describing the service offerings and capabilities.
 * @property {Array} tocItems - An array of table of contents items, each containing a title and anchor link.
 */
const seoMarketingOverviewContent: ServiceOverviewContent = {
  markdownText: `We help businesses improve their online visibility, attract qualified traffic, and convert visitors into customers through strategic **digital marketing** and **search engine optimization**. Our data-driven approach ensures that your marketing budget delivers measurable results and sustainable growth, whether you’re a local small business or a larger organization with more complex needs.

Our **search engine optimization (SEO) services** focus on boosting your website’s rankings in organic search results, increasing visibility to potential customers actively looking for your products or services. This includes **technical SEO** (site speed, structure, mobile performance) to improve site performance, **on-page optimization** (keywords, meta tags, content alignment) to align content with search intent, and **local SEO strategies** to improve regional search results.

For businesses looking to accelerate results, our **paid advertising services** span **Google Ads**, **social media advertising**, and **display network campaigns** that target your ideal customers with precision. We develop campaigns with clear tracking, ensuring that every dollar spent contributes to your business objectives. Our approach focuses on continuous optimization to improve performance and reduce cost-per-acquisition over time.

Beyond search and paid advertising, we offer **digital marketing strategy services** that can include **content marketing**, **email marketing**, and **conversion rate optimization (CRO)**. Each strategy is tailored to your specific business goals, target audience, and competitive landscape, creating an integrated approach that maximizes results across channels.

We pride ourselves on **transparent reporting** and **clear communication**. You'll receive regular performance updates with meaningful metrics that tie directly to business outcomes. Most clients see initial improvements within 30–90 days, with significant results typically emerging after 3–6 months of consistent strategy implementation. We also offer **flexible ongoing support options**, ranging from basic strategy updates and monthly maintenance retainers to fully dedicated marketing support, to ensure your solution evolves with your needs.

Whether you need a complete digital marketing overhaul or targeted assistance with specific channels, we scale our services to match your needs and budget. We’ll work with you to understand your **priorities, goals, and budget**—and then recommend the best approach for your specific situation, even if that means referring you elsewhere. **Your success is always our top priority.**`,

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

export default seoMarketingOverviewContent;
