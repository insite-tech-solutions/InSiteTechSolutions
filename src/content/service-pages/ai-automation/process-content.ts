/**
 * @fileoverview Process Content for the AI & Automation Service Page
 *
 * This file contains the content configuration for the process section of the AI & Automation service page.
 * It outlines the step-by-step methodology used for AI and automation projects.
 */

import { ProcessContent } from '@/page-templates/service-page/types';

/**
 * Process content configuration for the AI & Automation service page.
 * Outlines the step-by-step methodology used for AI and automation projects.
 * Each step includes a timeline, description, icon, and task checklist.
 * 
 * @type {ProcessContent}
 * @property {string} title - The title of the process section.
 * @property {string} description - A description of the overall approach to AI and automation.
 * @property {Array} steps - An array of steps in the process, each containing a step number, title, description, items, timeline, and icon.
 * @property {string} note - A note regarding project timelines and variability.
 * @property {string} linkText - The text of the link to the process page.
 * @property {string} linkUrl - The URL of the process page.
 */

export const aiAutomationProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a systematic, collaborative approach we call the 5 Ds—Discovery, Definition, Design, Development, and Deployment—to ensure that every AI and automation project delivers measurable business value while aligning with your operational needs and strategic objectives.",
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'We assess your current processes, identify automation opportunities, and establish clear value metrics.',
      items: [
        'Understand your business processes',
        'Identify high-value automation opportunities',
        'Assess data quality, availability, and infrastructure',
      ],
      timeline: '1-2 weeks',
      icon: 'Search',
    },
    {
      step: 2,
      title: 'Definition',
      description: 'We define solution requirements, success metrics, and a strategic implementation roadmap.',
      items: [
        'Define specific solution requirements and constraints',
        'Establish success metrics and ROI expectations',
        'Create a strategic implementation roadmap',
      ],
      timeline: '1-2 weeks',
      icon: 'ClipboardList',
    },
    {
      step: 3,
      title: 'Design',
      description: 'We design intelligent systems and automation workflows tailored to your specific requirements.',
      items: [
        'Design AI models and automation workflows',
        'Create user experience plans',
        'Plan architecture for seamless integration',
      ],
      timeline: '2-4 weeks',
      icon: 'Paintbrush',
    },
    {
      step: 4,
      title: 'Development',
      description: 'We build and refine AI and automation solutions through iterative development.',
      items: [
        'Develop and train AI models and automation systems',
        'Conduct iterative testing and refinement',
        'Integrate with existing systems and workflows',
      ],
      timeline: '4-12+ weeks (project dependent)',
      icon: 'Code',
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'We implement, monitor, and optimize solutions for maximum business impact.',
      items: [
        'Deploy solutions with minimal disruption',
        'Monitor performance and implement feedback loops',
        'Provide training and establish continuous improvement processes',
      ],
      timeline: '2-4 weeks + ongoing optimization',
      icon: 'Rocket',
    },
  ],
  note: "We cannot provide exact timelines until we have a well-defined project and plan. Projects can range from a few weeks to several months depending on complexity and scope. As a simple reference point, targeted automation projects typically take 4-6 weeks, while comprehensive AI implementations with multiple components may require 12-16+ weeks. For most AI systems, an ongoing optimization phase follows initial deployment to continuously improve performance.",
  linkText: "Learn more about our process",
  linkUrl: "/about/development-process",
};

export default aiAutomationProcess;