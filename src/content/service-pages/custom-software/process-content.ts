/**
 * Process content configuration for the Custom Software Solutions service page.
 * Outlines the step-by-step methodology used for client software projects.
 * Each step includes a timeline, description, icon, and task checklist.
 * 
 * @type {ProcessContent}
 * @property {string} title - The title of the process section.
 * @property {string} description - A description of the overall approach to software development.
 * @property {Array} steps - An array of steps in the process, each containing a step number, title, description, items, timeline, and icon.
 * @property {string} note - A note regarding project timelines and variability.
 * @property {string} linkText - The text of the link to the process page.
 * @property {string} linkUrl - The URL of the process page.
 */
import { ProcessContent } from '@/page-templates/service-page/types';

export const customSoftwareProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a systematic, collaborative approach we call the 5 Ds—Discovery, Definition, Design, Development, and Deployment—to ensure your custom software solution meets all requirements while maintaining flexibility for future growth.",
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'We understand your goals, challenges, and vision to create the perfect solution.',
      items: [
        'Understand your goals, challenges, and vision',
        'Analyze technical and business requirements and constraints',
        'Determine project scope, budget, and timeline',
      ],
      timeline: '1 week',
      icon: 'Search',
    },
    {
      step: 2,
      title: 'Definition',
      description: 'We define a detailed roadmap and requirements to ensure project success.',
      items: [
        'Develop a detailed project roadmap',
        'Define integration points and dependencies',
        'Establish success criteria and key milestones',
      ],
      timeline: '1-2 weeks',
      icon: 'ClipboardList',
    },
    {
      step: 3,
      title: 'Design',
      description: 'We design a robust system architecture and incorporate iterative feedback.',
      items: [
        'Create system architecture design',
        'Develop algorithmic flowcharts',
        'Incorporate iterative feedback and refinements',
      ],
      timeline: '2-4 weeks',
      icon: 'Paintbrush',
    },
    {
      step: 4,
      title: 'Development',
      description: 'We develop your tailored solution, keeping you informed and engaged.',
      items: [
        'Execute development sprints with regular progress updates',
        'Integrate continuous feedback to ensure alignment with goals',
        'Generate unit tests and documentation for long-term maintainability',
      ],
      timeline: '4-16+ weeks (project dependent)',
      icon: 'Code',
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'We ensure everything works perfectly before deploying your software.',
      items: [
        'Perform comprehensive testing to identify and fix issues',
        'Optimize system integration and performance',
        'Launch the software with post-launch support and training',
      ],
      timeline: '2-4 weeks',
      icon: 'Rocket',
    },
  ],
  note: "We cannot provide exact timelines until we have a well-defined project and plan. Projects can range from a few weeks to several months; however, as a simple reference point, a short notebook or script can be completed in a week, small business software projects can be completed in 6–8 weeks, while larger, more complex solutions can range from 8–16+ weeks, depending on the complexity.",
};

export default customSoftwareProcess;
