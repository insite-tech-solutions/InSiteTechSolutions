/**
 * AI & Automation Overview Content
 * 
 * This file contains the content configuration for the AI and automation service overview section.
 * It includes:
 * - Markdown-formatted main content
 * - Table of Contents navigation items
 * 
 * @module AIAutomationOverviewContent
 */

import { ServiceOverviewContent } from '@/page-templates/service-page/types';

/**
 * Overview content for the AI & Automation service page.
 * This object includes the main content and table of contents for the service overview section.
 * 
 * @type {ServiceOverviewContent}
 * @property {string} markdownText - The main content in markdown format, describing the service offerings and capabilities.
 * @property {Array} tocItems - An array of table of contents items, each containing a title and anchor link.
 */
const aiAutomationOverviewContent: ServiceOverviewContent = {
  markdownText: `
We help businesses harness the transformative power of **artificial intelligence** and **automation** to streamline operations, reduce costs, and unlock new capabilities. From process automation and workflow optimization to GPT-powered tools and custom AI solutions, our services combine cutting-edge technology with practical implementation strategies that deliver real-world results.

Our **process automation** services identify repetitive, time-consuming tasks within your organization and transform them into efficient, error-free workflows. We analyze your current processes, identify optimization opportunities, and implement solutions that free up your team while improving consistency and accuracy. Whether automating data entry, document processing, reporting, or complex multi-step workflows, we create solutions tailored to your specific operational needs.

For organizations looking to leverage artificial intelligence, we offer **custom AI solutions**, including **predictive analytics models**, **machine learning implementations**, **computer vision systems**, and **natural language processing (NLP)** using large language models (LLMs). For those interested in models like ChatGPT, Claude, Gemini, Copilot, Deepseek, and others, we can generate **custom GPTs**, provide **prompt engineering**, facilitate domain-specific **fine-tuning**, and offer **API integration services** to help you implement these powerful tools effectively.

Whether you need a lightweight Zapier-style **process automation**, a **machine learning analytics model**, or AI solutions from simple **FAQ bots** to **sophisticated assistants**, we help organizations leverage the power of AI and automation. Our solutions can integrate with existing communication channels including websites, messaging platforms, and internal systems. So, if you need help on a specific component of a larger project or end-to-end development from concept to deployment, we can work with your existing systems and teams to deliver successful outcomes—including contract-based work on larger enterprise-scale projects. We adapt our approach to your specific needs, technical environment, and budget.

We offer **flexible ongoing support options**, ranging from basic updates and monthly maintenance retainers to fully dedicated developer support, to ensure your solution evolves with your needs.

We solve problems and design tools that make your workflow easier. We’ll work with you to understand your **priorities, goals, and budget**—and then recommend the best approach for your specific situation, even if that means referring you elsewhere. **Your success is always our top priority.**`,

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

export default aiAutomationOverviewContent;
