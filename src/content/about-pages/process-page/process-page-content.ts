/**
 * @fileoverview Process Page Content Configuration.
 *
 * This file centralizes all content configurations for the Development Process page.
 * It includes data for the hero section, process overview steps, detailed process breakdown,
 * best practices, and the call-to-action section. This approach ensures a single source of truth
 * for all textual and structured content, promoting consistency and ease of maintenance.
 *
 * Features:
 * - **Modular Content**: Divides page content into logical sections (hero, overview, detailed, practices, CTA).
 * - **Type Safety**: Utilizes `ProcessContent` type for the detailed process, ensuring data structure consistency.
 * - **Icon Integration**: References Lucide React components for practices, allowing dynamic rendering.
 *
 * Architecture:
 * - **Data-Driven UI**: Provides all necessary data for the UI components of the process page.
 * - **Separation of Concerns**: Keeps content distinct from presentation logic, making UI components reusable and content easily modifiable.
 *
 * Technical Implementation:
 * - Exports multiple constants: `processPageHeroContent`, `processPageOverviewContent`,
 *   `detailedProcessContent`, `bestPracticesContent`, and `processPageCtaContent`.
 * - Each constant is a JavaScript object containing structured data relevant to its respective section.
 * - Icons are imported from `lucide-react` and directly referenced in `bestPracticesContent` for dynamic rendering in components.
 */

import { ProcessContent } from "@/page-templates/service-page/types";
import { CheckCircle, Code, FileText, GitBranch, Handshake, Smartphone } from "lucide-react";

/**
 * Content for the Hero Section of the Process Page.
 * Defines the main title, subtitle, and two call-to-action buttons.
 * @type {object}
 * @property {string} title - The main title of the hero section.
 * @property {string} subtitle - The supporting subtitle text.
 * @property {object} cta1 - Details for the primary call-to-action button.
 * @property {string} cta1.text - The text displayed on the primary button.
 * @property {string} cta1.href - The URL the primary button links to.
 * @property {object} cta2 - Details for the secondary call-to-action button.
 * @property {string} cta2.text - The text displayed on the secondary button.
 * @property {string} cta2.href - The URL the secondary button links to.
 */
export const processPageHeroContent = {
  title: "Our Process: The 5Ds",
  subtitle: "From concept to launch, we follow a proven methodology that emphasizes flexibility and collaboration. Every project is unique, so our approach allows us to tailor solutions to your needs while following industry best practices.",
  cta1: {
    text: "Get Started",
    href: "/contact",
  },
  cta2: {
    text: "View Our Work",
    href: "/portfolio",
  },
};

/**
 * Content for the Process Overview Section of the Process Page.
 * Describes the 5-step process with a title, description, and an array of individual steps.
 * Each step includes a number, title, icon name, and a description.
 * @type {object}
 * @property {string} title - The main title for the process overview section.
 * @property {string} description - The introductory description for the process.
 * @property {Array<object>} steps - An array of objects, each representing a step in the process.
 * @property {string} steps[].number - The step number (e.g., "1").
 * @property {string} steps[].title - The title of the step (e.g., "Discovery").
 * @property {string} steps[].iconName - The name of the Lucide icon to represent the step (e.g., "Search").
 * @property {string} steps[].description - A detailed description of what happens in this step.
 */
export const processPageOverviewContent = {
    title: "Our Proven 5-Step Process",
    description: "We believe every successful project starts with a clear, collaborative process. We follow a methodology that we refer to as the 5 Ds: Discovery, Definition, Design, Development, and Deployment. Our approach is designed to deliver results that drive your business forward—combining strategic insight, creative thinking, and technical expertise at every stage.",
    steps: [
        {
          number: "1",
          title: "Discovery",
          iconName: "Search",
          description: "We start by asking questions — lots of them. What are your goals? What's broken? What's possible? This is where we learn your business, audience, and pain points to uncover opportunities and define a shared vision for success.",
        },
        {
          number: "2",
          title: "Definition",
          iconName: "ClipboardList",
          description: "We take what we've learned and turn it into a clear plan. Project scope, feature requirements, success metrics, and timelines are all laid out. You'll know what's coming, and we'll know what we're building.",
        },
        {
          number: "3",
          title: "Design",
          iconName: "Paintbrush",
          description: "It's not just how it looks — it's how it works. We create thoughtful, beautiful designs that bring your vision to life. Wireframes, mockups, or UX flows, we iterate with your input to get a design that matches your brand and goals.",
        },
        {
          number: "4",
          title: "Development",
          iconName: "Code",
          description: "Here's where the magic happens. We write clean, scalable, and maintainable code following modern best practices. We work in short sprints with regular check-ins to build your solution and bring it to life.",
        },
        {
          number: "5",
          title: "Deployment",
          iconName: "Rocket",
          description: "It's alive! And production-ready. After thorough testing, we launch your project with care, ensuring everything works as intended. We also provide documentation, training, and ongoing support options to help you achieve lasting results.",
        }
      ]
};

/**
 * Content for the Detailed Process Section of the Process Page.
 * Provides an in-depth breakdown of the methodology, including title, description, and an array of detailed steps.
 * Conforms to the `ProcessContent` type for consistent structure.
 * @type {ProcessContent}
 * @property {string} title - The main title for the detailed process section.
 * @property {string} description - An extensive description of the methodology.
 * @property {Array<object>} steps - An array of objects, each detailing a step.
 * @property {number} steps[].step - The step number.
 * @property {string} steps[].title - The title of the detailed step.
 * @property {string} steps[].description - A comprehensive description of the step.
 * @property {Array<string>} steps[].items - A list of key activities or deliverables within the step.
 * @property {string} steps[].timeline - Estimated timeline for the step.
 * @property {string} steps[].icon - The name of the Lucide icon associated with the step.
 * @property {string} note - A disclaimer or additional important note about the timelines.
 * @property {string} linkText - The text for a concluding call-to-action link.
 * @property {string} linkUrl - The URL for the concluding call-to-action link.
 */
export const detailedProcessContent: ProcessContent = {
    title: "A Deeper Dive Into Our Methodology",
    description: "We blend the flexibility of modern agile development principles with practical experience, ensuring transparency and focus at every stage. Our process is built on MVP-first thinking, rapid prototyping, and feedback-focused sprints to deliver tailored solutions. This can be humourously described as make it work, make it right, make it fast (MVP/prototyping, refactoring/iteration, optimization/polish).",
    steps: [
      {
        step: 1,
        title: 'Discovery & Research',
        description: "This foundational phase involves deep stakeholder engagement and comprehensive research to understand your business context, technical constraints, and user needs.",
        items: [
          'Stakeholder consultations and user interviews',
          'Competitive landscape and market research',
          'Analysis of existing systems and pain points',
        ],
        timeline: '1-2 Weeks',
        icon: 'Search',
      },
      {
        step: 2,
        title: 'Definition & Planning',
        description: "Armed with discovery insights, we architect a comprehensive project blueprint. This phase produces detailed specifications, technical and architectural decisions, and realistic project milestones that set clear expectations and success criteria.",
        items: [
          'MVP definition and feature prioritization',
          'Creation of scope document or lightweight spec',
          'Milestone and sprint planning',
        ],
        timeline: '1-2 Weeks',
        icon: 'ClipboardList',
      },
      {
        step: 3,
        title: 'Design & Prototyping',
        description: "We transform abstract requirements into tangible designs through iterative mockups and prototypes made with user-centered design principles. This phase emphasizes validation over perfection, using rapid prototyping to test assumptions and refine designs before committing to development.",
        items: [
          'Wireframing and user flow mapping',
          'High-fidelity mockups and interactive prototypes',
          'Client feedback sessions and design refinement',
        ],
        timeline: '2-4 Weeks',
        icon: 'Paintbrush',
      },
      {
        step: 4,
        title: 'Development & Iteration',
        description: "Our development approach emphasizes iterative refinement and modern best practices, with short feedback loops and development sprints. We build incrementally, delivering functional components while maintaining code quality through adherence to coding standards.",
        items: [
          'Agile development cycles with short sprints',
          'Check-ins and progress demos',
          'Continuous iteration and refinement',
        ],
        timeline: '4-12+ Weeks',
        icon: 'Code',
      },
      {
        step: 5,
        title: 'Deployment & Support',
        description: "We carefully orchestrate launch activities and comprehensive testing in production-like environments to ensure long-term success. We also offer training and ongoing support options. We don't just deploy—we ensure you're equipped to maintain and evolve your solution.",
        items: [
          'Comprehensive quality assurance and performance testing',
          'Deployment and launch',
          'Post-launch monitoring, support, and maintenance plans',
        ],
        timeline: '1-2 Weeks',
        icon: 'Rocket',
      },
    ],
    note: "Timelines are estimates and can vary based on project complexity, scope, and feedback cycles. We work with you to establish a clear and realistic schedule during the Definition phase.",
    linkText: "Begin the discovery phase with a free consultation",
    linkUrl: "/contact",
  };
  
  /**
   * Content for the Best Practices Section of the Process Page.
   * Defines the section title, description, and an array of individual practices.
   * Each practice includes an icon component, title, and description.
   * @type {object}
   * @property {string} title - The main title for the best practices section.
   * @property {string} description - An introductory description for the best practices.
   * @property {Array<object>} practices - An array of objects, each describing a best practice.
   * @property {React.ElementType} practices[].icon - The Lucide React component for the practice icon.
   * @property {string} practices[].title - The title of the best practice.
   * @property {string} practices[].description - A detailed description of the best practice.
   */
  export const bestPracticesContent = {
    title: "Best Practices We Stand By",
    description: "Our commitment to quality goes beyond code. We adhere to industry-leading standards to build products that are secure, reliable, and built to last.",
    practices: [
        {
            icon: GitBranch,
            title: "Version Control & Code Reviews",
            description: "All code is managed with Git and undergoes a review process to ensure quality and maintainability."
        },
        {
            icon: Smartphone,
            title: "Mobile-First & Responsive",
            description: "Designs are responsive and mobile-friendly, ensuring a great user experience across all devices."
        },
        {
            icon: Code,
            title: "Clean Code & Documentation",
            description: "We write well-documented, maintainable code that's easy to understand and build upon."
        },
        {
            icon: FileText,
            title: "Detailed Project Scoping",
            description: "Clear, upfront project definition ensures we're all on the same page about deliverables and goals."
        },
        {
            icon: CheckCircle,
            title: "Thorough Testing & QA",
            description: "We conduct comprehensive testing to ensure a bug-free, smooth launch for your project."
        },
        {
            icon: Handshake,
            title: "Ongoing Partnership",
            description: "Our relationship doesn't end at launch. We offer ongoing support and maintenance plans to help you grow."
        },
    ]
  }

  /**
   * Content for the Call-to-Action (CTA) Section of the Process Page.
   * Defines the title, description, and details for the CTA button.
   * @type {object}
   * @property {string} title - The main title for the CTA section.
   * @property {string} description - The descriptive text for the CTA.
   * @property {string} buttonText - The text displayed on the CTA button.
   * @property {string} buttonLink - The URL the CTA button links to.
   */
  export const processPageCtaContent = {
    title: "Ready to Get Started?",
    description: "Let's talk about your goals and see how our process can help bring your ideas to life. We're ready to build something great together. Get started on the Discovery phase with a free consultation.",
    buttonText: "Book a Free Consultation",
    buttonLink: "/contact",
  }; 