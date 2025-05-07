/**
 * Custom Software Solutions Overview Content
 * 
 * This file contains the content configuration for the custom software development service overview section.
 * It includes:
 * - Markdown-formatted main content
 * - Table of Contents navigation items
 * 
 * @module CustomSoftwareOverviewContent
 */

import { ServiceOverviewContent } from '@/page-templates/service-page/types';

/**
 * Overview content for the Custom Software Solutions service page.
 * This object includes the main content and table of contents for the service overview section.
 * 
 * @type {ServiceOverviewContent}
 * @property {string} markdownText - The main content in markdown format, describing the service offerings and capabilities.
 * @property {Array} tocItems - An array of table of contents items, each containing a title and anchor link.
 */
const customSoftwareOverviewContent: ServiceOverviewContent = {
  markdownText: `We develop **tailored software solutions** that solve complex problems, streamline workflows, and enable innovation across business, research, and academic environments. Our expertise spans from simple data analysis notebooks to full-scale applications, **process automation tools**, and **specialized scientific software**.

For research and academic clients, we excel at developing **computational models, simulations,** and **specialized research tools** using object-oriented programming (OOP) languages like **Python** and computational platforms like **Wolfram Mathematica**. With a strong background in academia, we understand the unique requirements of academic software development, including reproducibility, documentation standards, and collaboration with domain experts. Our goal is to create software that lets researchers focus on discovery rather than technical implementation.

For businesses and organizations, we create **custom workflow solutions, internal tools,** and **process automation systems** that eliminate inefficiencies and reduce operational costs. Whether you need a specialized application, an **API (application programming interface)**, an integration between existing systems, or a completely new software solution, we design with your specific processes and goals in mind.

We also offer **project takeovers** and **legacy system modernization**, helping clients recover value from stalled or troubled projects. Whether you're starting with a blank slate or halfway through a complex build, we can integrate with your existing systems and teams to deliver successful outcomes. We're also available for contract-based work on larger enterprise-scale projects.

We provide comprehensive services from initial mockups and **MVP (minimum viable product)** development through full production development, launch, and post-launch support and maintenance. Whether you need help on a specific component of a larger project or end-to-end development from concept to deployment, we adapt our approach to your specific needs, technical environment, and budget.

We offer **flexible ongoing support options**, ranging from basic troubleshooting and monthly maintenance retainers to fully dedicated developer support, to ensure your solution evolves with your needs.

We don't just write code—we solve problems and design tools that make your workflow easier. We'll work with you to understand your **priorities, goals, and budget**—and then recommend the best approach for your specific situation, even if that means referring you elsewhere. **Your success is always our top priority.** `,

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

export default customSoftwareOverviewContent;
