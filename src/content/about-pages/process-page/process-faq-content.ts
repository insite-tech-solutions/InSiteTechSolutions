/**
 * @fileoverview Process FAQ Content Configuration
 * 
 * This file contains the content configuration for the development process page FAQ section.
 * Includes commonly asked questions about the 5D methodology, project timelines, communication,
 * project changes, collaboration, and best practices.
 * 
 * The content is structured to work with the FAQ Section component and provides
 * comprehensive answers to help potential clients understand our development process.
 */

import { FAQContent } from '@/page-templates/service-page/types';

/**
 * Process FAQ Content Configuration
 * 
 * Comprehensive FAQ content specifically tailored for the development process page.
 * Covers all major aspects of our 5D methodology and project management approach.
 * 
 * @type {FAQContent} FAQ content configuration object
 * @property {string} title - The main title for the FAQ section.
 * @property {string} description - A brief description encouraging users to explore FAQs.
 * @property {Array} items - An array of FAQ items, each containing an icon, question, and answer.
 * @property {Object} moreLink - An optional link to view all FAQs.
 * @property {string} moreLink.text - Text for the link to view all FAQs.
 * @property {string} moreLink.url - URL for the link to view all FAQs.
 */
const processFAQContent: FAQContent = {
  /** Section title displayed in the FAQ component */
  title: "Process & Methodology FAQs",
  
  /** Brief description explaining the purpose of these FAQs */
  description: "Common questions about our 5D development process, project timelines, communication, and how we ensure successful project outcomes.",
  
  /** Array of individual FAQ items with questions, answers, and icons */
  items: [
    {
      icon: "Clock",
      question: "How long does each phase of the 5D process take?",
      answer: "Discovery typically takes 1-2 weeks, Definition 1-2 weeks, Design 2-4 weeks, Development 4-12+ weeks (project dependent), and Deployment 1-2 weeks. However, timelines vary significantly based on project complexity, scope, and feedback cycles. These timelines are general estimates for an average software project; consulting, designing, or other ad hoc services can have much faster turnarounds, conversely very complex projects can take longer. We'll provide tailored estimates during the Definition phase.",
    },
    {
      icon: "FileText",
      question: "How are project terms determined?",
      answer: "Between the Discovery and Definition phases, we create a custom project-based contract that outlines the specific scope, estimated timeline and budget, and deliverables for your project. Every project is unique, so contracts are tailored to your specific needs and requirements rather than using one-size-fits-all terms.",
    },
    {
      icon: "MessageSquare", 
      question: "How often will we communicate during the project?",
      answer: "We believe in transparent, regular communication. You'll receive regular check-ins during Development, milestone updates at each phase completion, and we're always available for questions via email or scheduled calls.",
    },
    {
      icon: "GitBranch",
      question: "What happens if I want to make changes during development?", 
      answer: "Changes are natural and expected! Our agile approach makes it easy to incorporate feedback and adjustments. Minor changes can often be accommodated within the current sprint, while larger scope changes may require timeline and budget adjustments, which we'll discuss transparently.",
    },
    {
      icon: "RefreshCw",
      question: "Are revisions included in the project?",
      answer: "Our collaborative process includes multiple check-in points, during and after each phase—Discovery, Definition, Design, Development, and Deployment—where you'll have the opportunity to provide feedback. One formal revision round is included during the Design phase. Light feedback during development will be incorporated where feasible within scope. Additional revisions or scope changes are billed hourly per requested revision. ",
    },
    {
      icon: "Target", 
      question: "What if the project scope changes significantly?",
      answer: "We understand that business needs evolve. If scope changes significantly, we'll pause to reassess the project plan, timeline, and budget. We'll provide you with updated estimates and options to proceed, ensuring you always know exactly what you're getting and what it will cost.",
    },
    {
      icon: "Users",
      question: "How involved will I be in the development process?",
      answer: "You'll be as involved as you want to be! We encourage participation through milestone check-ins, feedback sessions, and design reviews. Your input is crucial for ensuring the final product meets your vision.",
    },
    {
      icon: "CheckCircle",
      question: "How do you ensure quality throughout the process?",
      answer: "Quality is built into every phase: thorough requirements gathering in Discovery/Definition, iterative feedback in Design, code reviews and testing during Development, and comprehensive QA before Deployment. We follow modern industry best practices including version control, testing, and secure development.",
    },
    {
      icon: "Rocket",
      question: "What support do you provide after deployment?",
      answer: "Basic post-launch support includes testing, and delivery/deployment of your solution. We also offer training on how to use/maintain your solution, comprehensive documentation, and ongoing maintenance packages to support your needs",
    },
  ],
  
  /** Optional link to additional FAQ resources */
  moreLink: {
    text: "View all frequently asked questions",
    url: "/insites/faq",
  },
};

export default processFAQContent; 