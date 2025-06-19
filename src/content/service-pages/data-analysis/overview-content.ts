/**
 * @fileoverview Overview Content for the Data Analysis Service Page
 * 
 * This file contains the content configuration for the data analysis and visualization service overview section.
 * It includes:
 * - Markdown-formatted main content
 * - Table of Contents navigation items
 * 
 * @module DataAnalysisOverviewContent
 */

import { ServiceOverviewContent } from '@/page-templates/service-page/types';

/**
 * Overview content for the Data Analysis & Visualization service page.
 * This object includes the main content and table of contents for the service overview section.
 * 
 * @type {ServiceOverviewContent}
 * @property {string} markdownText - The main content in markdown format, describing the service offerings and capabilities.
 * @property {Array} tocItems - An array of table of contents items, each containing a title and anchor link.
 */
const dataAnalysisOverviewContent: ServiceOverviewContent = {
  markdownText: `
We transform raw data into actionable insights that drive better decision-making and uncover hidden patterns. From **business analytics** and **performance metrics** to complex **scientific data interpretation**, our data analysis services help you extract maximum value from your information assets and develop data-driven strategies.

For research and academic clients, we provide specialized **scientific data analysis**, **statistical modeling**, and **computational simulation** services. Using tools like **Python**, **R**, and specialized statistical software, we help researchers extract meaningful patterns from experimental data, validate hypotheses, and develop predictive models. Our approach combines statistical rigor with domain expertise to ensure that analyses are not only technically sound but also contextually relevant.

Our **business intelligence** and **performance analytics** services help organizations understand key metrics, identify trends, and track progress toward strategic goals. We can develop **customized dashboards**, **reporting systems**, and **visualization tools** that present complex data in intuitive, accessible formats. Whether you’re tracking sales performance, marketing effectiveness, operational efficiency, or financial indicators, we create solutions that deliver relevant insights to decision-makers at all levels.

We also offer **data visualization** and **storytelling** services that transform complex findings into compelling visual narratives. Through **interactive dashboards**, **clear reports**, and **presentation-ready graphics**, we help you communicate insights effectively to stakeholders, collaborators, and external audiences. Our visualizations are designed not just to present data, but to facilitate understanding and drive action.

From **one-time analytical projects** to **ongoing data strategy development**, we scale our services to match your specific needs and internal capabilities. We can work with your existing systems and team or help implement new tools for more effective data collection and management. We’re also available for contract-based work on larger enterprise-scale projects. Whatever your analytical needs, we're committed to delivering insights that create tangible value for your organization.

We offer **flexible ongoing support options**, ranging from basic updates and monthly maintenance retainers to fully dedicated analyst support, to ensure your solution evolves with your needs.

We’ll work with you to understand your **priorities, goals, and budget**—and then recommend the best approach for your specific situation, even if that means referring you elsewhere. **Your success is always our top priority.**`,

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

export default dataAnalysisOverviewContent;
