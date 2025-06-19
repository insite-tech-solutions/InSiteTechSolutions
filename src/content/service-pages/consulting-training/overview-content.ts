/**
 * @fileoverview Overview Content for the Consulting & Training Service Page
 * 
 * This file contains the content configuration for the consulting and training service overview section.
 * It includes:
 * - Markdown-formatted main content
 * - Table of Contents navigation items
 * 
 * @module ConsultingTrainingOverviewContent
 */

import { ServiceOverviewContent } from '@/page-templates/service-page/types';

/**
 * Overview content for the Consulting & Training service page.
 * This object includes the main content and table of contents for the service overview section.
 * 
 * @type {ServiceOverviewContent}
 * @property {string} markdownText - The main content in markdown format, describing the service offerings and capabilities.
 * @property {Array} tocItems - An array of table of contents items, each containing a title and anchor link.
 */
const consultingTrainingOverviewContent: ServiceOverviewContent = {
  markdownText: `
We provide **personalized technical guidance**, **hands-on training**, and **expert support** across a wide range of needs—from basic **tech troubleshooting** to specialized **scientific consulting**. Unlike our other specific service categories, our Consulting & Training services are designed to address virtually any technology-related challenge that doesn’t fit neatly elsewhere, making technology accessible and manageable for everyone, from individuals to enterprise organizations alike.  
**For all your tech-related needs, InSite Tech.**

For individuals and small businesses, we offer approachable, practical tech assistance to help navigate technical challenges, implement effective solutions, and build lasting capabilities. Whether you need help troubleshooting a pesky tech issue or want guided software training on platforms like **Photoshop**, **Microsoft Office**, or website content management systems, we’re here to help. Rather than just fixing problems for you, we can teach you how to maintain and manage your own technology—empowering you with the skills to handle future challenges independently.

For growing businesses and organizations, our **digital transformation consulting** helps you evaluate technology options, implement new tools, and navigate change effectively. We work closely with you to identify opportunities where technology can improve efficiency, unlock new opportunities, or support evolving business models.

For organizations implementing new technologies, our **implementation support services** provide the expert guidance needed to ensure successful adoption. This includes **project planning**, **technical configuration assistance**, **integration strategy**, **risk mitigation**, and **change management support**. Whether you’re deploying a new website, data analysis platform, or custom application, we help you avoid common pitfalls and accelerate time-to-value.

We provide **workflow optimization** and **process standardization** consultation services, helping organizations improve consistency, reduce redundancy, and build scalable operations. In addition, we offer comprehensive **documentation** and **technical writing** services to capture institutional knowledge by creating **user guides**, developing **standard operating procedures (SOPs)**, and designing **branded documentation templates** and **training modules**. Proper documentation ensures continuity of operations, simplifies onboarding, and preserves critical knowledge even as team members change.

We offer **specialized technical consultation** in areas including **physics**, **mathematics**, **optics**, **computational modeling**, **software and web development**, and **research technology implementation**. Drawing on our background in scientific research and software development, we bridge the gap between complex technical concepts and practical applications—helping scientists better leverage tech, and tech teams better understand scientific objectives.

Our engagements can be structured as **one-time projects**, **multi-phase implementations**, or **ongoing advisory relationships**, depending on your needs. We’re equally comfortable working with technical teams who need specialized expertise and non-technical individuals who require clear, jargon-free guidance. In all cases, our goal is to transfer knowledge and build capabilities that remain with you or your organization long after our engagement ends. We deliver our services through **flexible formats** including **remote sessions**, **on-site training**, **one-on-one consultations**, and **group workshops**—all tailored to your specific needs and goals.

We offer **flexible ongoing support options**, from basic post-consultation troubleshooting and monthly retainers to dedicated consultant support with proactive strategy and optimization services. This ensures you receive the right level of assistance as your needs evolve.

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

export default consultingTrainingOverviewContent;
