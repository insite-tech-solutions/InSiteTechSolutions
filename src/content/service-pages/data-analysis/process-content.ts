/**
 * Process content configuration for the Data Analysis service page.
 * Outlines the step-by-step methodology used for data analysis projects.
 * Each step includes a timeline, description, icon, and task checklist.
 * 
 * @type {ProcessContent}
 * @property {string} title - The title of the process section.
 * @property {string} description - A description of the overall approach to data analysis.
 * @property {Array} steps - An array of steps in the process, each containing a step number, title, description, items, timeline, and icon.
 * @property {string} note - A note regarding project timelines and variability.
 * @property {string} linkText - The text of the link to the process page.
 * @property {string} linkUrl - The URL of the process page.
 */
import { ProcessContent } from '@/page-templates/service-page/types';

export const dataAnalysisProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a systematic, collaborative approach we call the 5 Ds—Discovery, Definition, Data Preparation, Development, and Delivery—to ensure that every analysis project delivers clear, actionable insights aligned with your business objectives.",
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'We understand your business context, objectives, and key questions to be answered through data.',
      items: [
        'Understand your business goals and analytical needs',
        'Identify key stakeholders and their information requirements',
        'Assess available data sources and quality',
      ],
      timeline: '1-2 weeks',
      icon: 'Search',
    },
    {
      step: 2,
      title: 'Definition',
      description: 'We define scope, methodologies, and success metrics to ensure alignment and clear deliverables.',
      items: [
        'Define specific analytical questions and hypotheses',
        'Determine appropriate analytical methods and techniques',
        'Establish success metrics and expected outcomes',
      ],
      timeline: '1-2 weeks',
      icon: 'ClipboardList',
    },
    {
      step: 3,
      title: 'Data Preparation',
      description: 'We collect, clean, and structure data to create a reliable foundation for analysis.',
      items: [
        'Data collection and integration from multiple sources',
        'Data cleaning, normalization, and validation',
        'Feature engineering and dataset preparation',
      ],
      timeline: '2-4 weeks',
      icon: 'Database',
    },
    {
      step: 4,
      title: 'Development',
      description: 'We apply statistical methods and develop models to extract meaningful insights from your data.',
      items: [
        'Exploratory data analysis and pattern identification',
        'Statistical testing and model development',
        'Results validation and refinement',
      ],
      timeline: '2-6 weeks',
      icon: 'LineChart',
    },
    {
      step: 5,
      title: 'Delivery',
      description: 'We translate analytical findings into clear insights and actionable recommendations.',
      items: [
        'Results interpretation and insight development',
        'Creation of visualizations and executive summaries',
        'Implementation guidance and knowledge transfer',
      ],
      timeline: '1-2 weeks',
      icon: 'Presentation',
    },
  ],
  note: "We cannot provide exact timelines until we have a well-defined project and plan. Projects can range from a few weeks to several months depending on complexity and scope. As a simple reference point, targeted business analysis projects typically take 4-6 weeks, while comprehensive predictive modeling or large-scale data mining projects may require 8-12+ weeks.",
  linkText: "Learn more about our process",
  linkUrl: "/process",
};

export default dataAnalysisProcess;