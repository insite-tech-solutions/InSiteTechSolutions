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
import { ProcessContent } from '@/page-templates/service-page/types';

export const aiAutomationProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a systematic, collaborative approach we call the 5 Ds—Discovery, Definition, Design, Development, and Deployment—to ensure that every AI and automation project delivers measurable business value while aligning with your operational needs and strategic objectives.",
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'We assess your current processes, identify automation opportunities, and establish clear value metrics.',
      items: [
        'Understand your business processes and pain points',
        'Identify high-value automation and AI opportunities',
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
        'Create user experience plans for human-AI interaction',
        'Develop architecture for seamless integration',
      ],
      timeline: '2-4 weeks',
      icon: 'Paintbrush',
    },
    {
      step: 4,
      title: 'Development',
      description: 'We build, train, and refine AI models and automation solutions through iterative development.',
      items: [
        'Develop and train AI models and automation systems',
        'Conduct iterative testing and refinement',
        'Integrate with existing systems and workflows',
      ],
      timeline: '4-12 weeks',
      icon: 'Code',
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'We implement, monitor, and optimize AI and automation solutions for maximum business impact.',
      items: [
        'Deploy solutions with minimal disruption',
        'Monitor performance and implement feedback loops',
        'Provide training and establish continuous improvement processes',
      ],
      timeline: '2-4 weeks + ongoing optimization',
      icon: 'Rocket',
    },
  ],
  note: "We cannot provide exact timelines until we have a well-defined project and plan. Projects can range from a few weeks to several months depending on complexity and scope. As a simple reference point, targeted automation projects typically take 6-8 weeks, while comprehensive AI implementations with multiple components may require 12-16+ weeks. For most AI systems, an ongoing optimization phase follows initial deployment to continuously improve performance.",
  linkText: "Learn more about our process",
  linkUrl: "/process",
};

export default aiAutomationProcess;