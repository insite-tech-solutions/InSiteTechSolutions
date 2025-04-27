/**
 * Process content configuration for the Web & App Development service page.
 * Outlines the step-by-step methodology used for client web and app projects.
 * Each step includes a timeline, description, icon, and task checklist.
 * 
 * @type {ProcessContent}
 * @property {string} title - The title of the process section.
 * @property {string} description - A description of the overall approach to web and app development.
 * @property {Array} steps - An array of steps in the process, each containing a step number, title, description, items, timeline, and icon.
 * @property {string} note - A note regarding project timelines and variability.
 */
import { ProcessContent } from '@/page-templates/service-page/types';

export const webAppDevelopmentProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a collaborative, transparent, and iterative approach to ensure that every project meets your unique needs while staying on time and on budget. We believe in right-sized solutions - no overengineering, no unnecessary complexity.",
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'Understanding your goals and vision to create the perfect solution.',
      items: [
        'Understanding your goals and vision',
        'Analyzing current and future needs',
        'Determining budget and timeline',
      ],
      timeline: '1 week',
      icon: 'Search',
    },
    {
      step: 2,
      title: 'Planning',
      description: 'Creating a solid foundation for project success.',
      items: [
        'Defining project scope',
        'Establishing success criteria',
        'Creating detailed plans',
      ],
      timeline: '1-2 weeks',
      icon: 'ClipboardList',
    },
    {
      step: 3,
      title: 'Design',
      description: 'Crafting the perfect look and feel for your project.',
      items: [
        'Creating wireframes and mockups',
        'Developing UI and branding designs',
        'Iterative feedback and refinement',
      ],
      timeline: '1-3 weeks',
      icon: 'Paintbrush',
    },
    {
      step: 4,
      title: 'Development',
      description: 'Building your solution with regular updates and feedback.',
      items: [
        'Iterative development sprints',
        'Regular progress updates',
        'Continuous feedback integration',
      ],
      timeline: '2-12 weeks (project dependent)',
      icon: 'Code',
    },
    {
      step: 5,
      title: 'Testing & Launch',
      description: 'Ensuring everything works perfectly before going live.',
      items: [
        'Comprehensive testing',
        'Performance optimization',
        'Post-launch support',
      ],
      timeline: '1-2 weeks',
      icon: 'Rocket',
    },
  ],
  note: "We cannot provide exact timelines until we have a well defined project and plan. Projects can range from a few weeks to several months; however, a simple reference point is most small business website projects are completed in 6–8 weeks, while app development can range from 8–16+ weeks, depending on the complexity.",
  linkText: "Learn more about our process",
  linkUrl: "/process",
};

export default webAppDevelopmentProcess;