/**
 * @fileoverview Spotlight Content for Previous Works Page
 *
 * This file contains the data for the featured projects showcased in the spotlight section,
 * including detailed project information, metrics, and comprehensive descriptions.
 *
 * Features:
 * - Featured project showcase data
 * - Detailed project descriptions and metrics
 * - Technology and service categorization
 * - External link management
 * - Type-safe project structure
 * - Background color theming
 *
 * @module PreviousWorksSpotlightContent
 */

import { getProjectDefaultImage } from '@/lib/portfolio-media';

/**
 * Project link interface
 * 
 * Defines the structure for external project links including
 * GitHub repositories and external websites.
 * 
 * @interface ProjectLink
 * @property {'github' | 'external'} type - Link type for proper icon display
 * @property {string} url - External link URL
 * @property {string} label - Display label for the link
 */
export interface ProjectLink {
  type: 'github' | 'external';
  url: string;
  label: string;
}

/**
 * Project metric interface
 * 
 * Defines the structure for project performance metrics
 * displayed in the spotlight section.
 * 
 * @interface ProjectMetric
 * @property {string} label - Metric label for display
 * @property {string} value - Metric value for display
 */
export interface ProjectMetric {
  label: string;
  value: string;
}

/**
 * Project interface
 * 
 * Defines the complete structure for spotlight project data
 * including all display information and metadata.
 * 
 * @interface Project
 * @property {string} id - Unique project identifier
 * @property {string} title - Project title
 * @property {string} subtitle - Project subtitle
 * @property {string} description - Detailed project description
 * @property {string} image - Default project image path
 * @property {string} [videoUrl] - Optional video URL for media slideshow
 * @property {string[]} technologies - Array of technologies used
 * @property {ProjectMetric[]} metrics - Array of project metrics
 * @property {string[]} serviceCategories - Array of service categories
 * @property {ProjectLink[]} [links] - Optional array of external links
 * @property {string} bgColor - Background color class for styling
 */
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoUrl?: string;
  technologies: string[];
  metrics: ProjectMetric[];
  serviceCategories: string[];
  links?: ProjectLink[];
  bgColor: string;
}

/**
 * Featured projects data
 * 
 * Comprehensive array of featured projects with detailed information,
 * metrics, and external links for the spotlight section.
 * 
 * @constant {Project[]} projects - Array of featured project objects
 */
export const projects: Project[] = [
  {
    id: 'pycat-napari',
    title: 'PyCAT-Napari',
    subtitle: 'Bio-image Analysis Platform',
    description:
      `An open-source scientific image analysis platform that provides biologists with a low-code/no-code solution for studying biomolecular condensates. Built on top of the popular napari image viewer, PyCAT-Napari streamlines complex analysis workflows into an intuitive, user-friendly graphical interface. The application equips researchers with a comprehensive suite of specialized tools for image segmentation, quantitative feature extraction, and advanced colocalization analysis. It features several pre-built, end-to-end analysis pipelines tailored for common biological research questions, such as characterizing in-cellulo condensates and analyzing fibril structures. The integrated condensate analysis provided the sensitivity and robustness needed to quantify saturation concentration of proteins in living cells, allowing investigation into the sequence grammar of proteins and nucleic acids. In addition, the platform's modular design and integration with napari's ecosystem make it a powerful and accessible tool for cutting-edge biological research.`,
    image: getProjectDefaultImage('pycat-napari'),
    technologies: ['Python', 'Napari'],
    metrics: [
      { label: 'Quantifiable Metrics', value: '50+' },
      { label: 'Specialized Analysis Tools', value: '30+' },
    ],
    serviceCategories: ['Custom Software', 'Data Analysis'],
    links: [
      { type: 'github', url: '#', label: 'Manuscript in Progress' },
    ],
    bgColor: 'bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt',
  },
  {
    id: 'banerjee-lab',
    title: 'Banerjee Lab',
    subtitle: 'Research Lab Website',
    description:
      `A comprehensive migration and modernization of an academic lab website, transforming the original site into a sleek, accessible, and feature-rich platform on Squarespace. The redesign focused on both public-facing outreach and information, as well as internal operational tools. On the front end, the site now features a modernized aesthetic, updated branding, and a new Outreach blog-style section to promote scientific communication and community engagement. Behind the scenes, a secure Members Portal was introduced to streamline access to internal resources, including aggregated protocols, ordering procedures, and shared data repositories — greatly enhancing efficiency and onboarding for lab personnel. The upgrade also addressed numerous usability issues, implemented content architecture improvements, and future-proofed the site with modular, scalable features. This work highlights the power of combining intuitive no-code platforms with custom integrations to meet the specialized needs of scientific research teams.`,
    image: getProjectDefaultImage('banerjee-lab'),
    technologies: ['Squarespace', 'CSS', 'Google Forms', 'Zapier'],
    metrics: [
      { label: 'Faster Content Updates', value: '3x' },
      { label: 'New Site Areas', value: '2' },
    ],
    serviceCategories: ['Web & App Development', 'SEO & Marketing', 'Design & Branding'],
    links: [
      { type: 'external', url: 'https://banerjeelab.org', label: 'Visit Site' },
    ],
    bgColor: 'bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt',
  },
  {
    id: 'dla-inverse-design',
    title: 'DLA Inverse Design',
    subtitle: 'Optimization of Dielectric Laser Accelerators',
    description:
      `Advanced photonics research that automated the design of high-performance, nanoscale photonic structures for next-generation particle-on-a-chip accelerators. Developed a novel optimization pipeline integrating Lumerical FDTD electromagnetic field simulations with custom algorithms featuring basin hopping global optimization to design devices that precisely control and boost electron energy. The breakthrough adjoint-based method with field gradient computation cut the computational cost of optimization—compared to traditional approaches—by such an extraordinary degree that it enabled robust convergence for complex problems in a non-convex parameter space with an arbitrary number of degrees of freedom. The research successfully simulated the first-ever non-periodic structures capable of generating arbitrarily complex, non-sinusoidal accelerating fields (sawtooth and superposition waveforms) through multi-cell electromagnetic interactions and field superposition analysis. Created comprehensive visualization tools and an empirical model for predicting optimal design parameters—providing crucial insights for future accelerator development.`,
    image: getProjectDefaultImage('dla-inverse-design'),
    technologies: ['Python', 'Ansys Lumerical'],
    metrics: [
      { label: 'Simulation Reduction', value: '10²⁸x' },
      { label: 'Optimized Parameters', value: '100+' },
    ],
    serviceCategories: ['Custom Software', 'Data Analysis', 'AI & Automation'],
    links: [
      { type: 'github', url: 'https://github.com/cneureuter/inverse-design-dla', label: 'Code' },
      { type: 'external', url: 'https://github.com/cneureuter/inverse-design-dla/blob/main/docs/master_thesis.pdf', label: 'Thesis' },
    ],
    bgColor: 'bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt',
  },
  {
    id: 'kiosk-app',
    title: 'Self-Service Kiosk App',
    subtitle: 'Electronics Repair Dropoff Kiosk App',
    description:
      `A custom self-service kiosk application built to streamline device intake for a local electronics repair shop during the COVID-19 pandemic. The app provided a contactless repair drop-off solution, allowing customers to initiate service without staff interaction. Through an intuitive touchscreen interface, users could select their device type (e.g., iPhone, iPad, MacBook), choose common repair services (e.g., screen replacement, battery replacement), and input their contact information. Once submitted, the system automatically generated a service ticket and airprinted a thermal label, which customers would affix to their device before placing it in a secure dropbox — enabling safe, organized, and traceable repair drop-offs.`,
    image: getProjectDefaultImage('kiosk-app'),
    technologies: ['JavaScript', 'Intuiface'],
    metrics: [
      { label: 'Contactless Intake Workflow', value: '100%' },
      { label: 'Average Drop-Off Time', value: '<2 minutes' },
    ],
    serviceCategories: ['Web & App Development', 'AI & Automation'],
    bgColor: 'bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt',
  },
  {
    id: 'inventory-app',
    title: 'Inventory Management App',
    subtitle: 'Lab Inventory Management Tool',
    description:
      `A lightweight, mobile-first inventory system built using Google AppSheet to support streamlined tracking of lab consumables and reagents within the free google workspace ecosystem. The app provided real-time inventory control through a simple and accessible interface. Users could log items in and out of inventory via mobile entries, browse the full item library with filtering and search, and access a visual "Monitor" dashboard that displayed inventory levels using dynamic bar plots for quick, at-a-glance status updates. The system maintained a complete timestamped inventory log, improving traceability and accountability.`,
    image: getProjectDefaultImage('inventory-app'),
    technologies: ['Google AppSheet', 'Google Sheets', 'JavaScript'],
    metrics: [
      { label: 'Inventory Modules', value: '3' },
      { label: 'Items Tracked', value: '100+' },
    ],
    serviceCategories: ['Web & App Development', 'AI & Automation'],
    bgColor: 'bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt',
  },
  {
    id: 'qaoa-max-sat',
    title: 'Quantum Approximate Optimization for MAX-SAT',
    subtitle: 'Quantum Computing Algorithm Development',
    description:
      `A deep dive into hybrid quantum-classical computing with a comprehensive implementation of the Quantum Approximate Optimization Algorithm (QAOA) to solve NP-hard combinatorial optimization problems. This project tackles multiple variants of the Maximum Satisfiability (MAX-SAT) problem, including Max-Cut on ring graphs (MAX-2-SAT) and general MAX-3-SAT with arbitrary boolean clauses. The implementation features a robust pipeline built with Python and Google's Cirq framework. It constructs parameterized quantum circuits that encode problem Hamiltonians, using standard ZZ gates for Max-Cut and novel, custom-built 3-qubit gates for the more complex MAX-3-SAT instances. A classical Nelder-Mead optimizer iteratively refines the circuit parameters to navigate the solution space and find high-quality approximate solutions. The project includes extensive performance analysis, calculating approximation ratios by benchmarking QAOA results against a classical brute-force solver and demonstrating performance scaling with increased circuit depth.`,
    image: getProjectDefaultImage('qaoa-max-sat'),
    technologies: ['Python', 'Google Cirq'],
    metrics: [
      { label: 'NP-Hard Problem Classes Solved', value: '2' },
      { label: 'Approximation Ratios Achieved', value: '90%+' },
    ],
    serviceCategories: ['Custom Software'],
    links: [
      { type: 'github', url: 'https://github.com/cneureuter/qaoa-max-sat', label: 'Code' },
      { type: 'external', url: 'https://github.com/cneureuter/qaoa-max-sat/blob/main/docs/QAOA_for_MAX_SAT.pdf', label: 'Report' },
    ],
    bgColor: 'bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt',
  },
]; 