/**
 * @fileoverview Portfolio Content for Previous Works Page
 *
 * This file contains the data for the portfolio grid section, including
 * project information, service category colors, and comprehensive project details.
 *
 * Features:
 * - Complete portfolio project data
 * - Service category color mapping
 * - Technology and service categorization
 * - External link management
 * - Type-safe project structure
 *
 * @module PreviousWorksPortfolioContent
 */

/**
 * Service category color mapping
 * 
 * Maps service categories to their corresponding Tailwind CSS color classes
 * for consistent styling across portfolio components.
 * 
 * @constant {Object} serviceColors - Service category to color class mapping
 */
export const serviceColors: { [key: string]: string } = {
  "Web Development": "bg-blue-500",
  "E-commerce": "bg-green-500",
  "Custom Software": "bg-purple-500",
  "Research Software": "bg-orange-500",
  "App Development": "bg-red-500",
  "Database Design": "bg-indigo-500",
  "Content Management": "bg-pink-500",
  "UI/UX Design": "bg-yellow-500",
  "Custom Development": "bg-teal-500",
  "Scientific Computing": "bg-cyan-500",
  "Systems Engineering": "bg-gray-500",
  "Aerospace": "bg-blue-700",
  "Academic Sites": "bg-green-700"
};

/**
 * Portfolio projects data
 * 
 * Comprehensive array of portfolio projects with detailed information
 * including descriptions, technologies, services, and external links.
 * 
 * @constant {Array} projects - Array of portfolio project objects
 */
export const projects = [
  {
    id: 1,
    title: "EagleBeak",
    shortDesc: "Complete e-commerce transformation, SEO, and social media marketing campaign with 400% engagement increase and 50% sales boost.",
    image: "/portfolio-media/eaglebeak/1_eaglebeak_ig.jpg",
    technologies: ["WordPress", "WooCommerce", "Facebook"],
    services: ["Web & App Development", "SEO & Marketing"],
    year: "2021",
    links: [
      { type: "external", url: "https://www.facebook.com/eaglebeakgalleries/" }
    ]
  },
  {
    id: 2,
    title: "Medium Kathleen",
    shortDesc: "Spiritual blog and web platform for a local medium, built for discoverability and ease of content publishing.",
    image: "/portfolio-media/medium-kathleen/1_kathleen_podcast.jpg",
    technologies: ["Squarespace", "YouTube"],
    services: ["Web & App Development", "Consulting & Training"],
    year: "2024",
    links: [
      { type: "external", url: "https://www.mediumkathleen.com" }
    ]
  },
  {
    id: 3,
    title: "Hardwood Trader",
    shortDesc: "Developed brand identity, domain strategy, and full site for lumber business seeking greater search visibility.",
    image: "/portfolio-media/hardwood-trader/1_hardwood_homepage.jpg",
    technologies: ["Squarespace"],
    services: ["Web & App Development", "SEO & Marketing"],
    year: "2022",
    links: []
  },
  {
    id: 4,
    title: "Lab Ordering Automation",
    shortDesc: "Streamlined $100K+ lab purchasing and receiving processes with standardized and automated workflows.",
    image: "/portfolio-media/ordering-automation/1_ordering_bot.jpg",
    technologies: ["Zapier", "Google Forms", "Google Sheets"],
    services: ["AI & Automation"],
    year: "2023",
    links: []
  },
  {
    id: 5,
    title: "Banerjee Lab SOPs",
    shortDesc: "Improved lab efficiency and onboarding through comprehensive SOP creation and internal documentation strategy.",
    image: "/portfolio-media/lab-sops/1_ordering_sop.png",
    technologies: ["LaTeX", "Microsoft Word"],
    services: ["Consulting & Training"],
    year: "2024",
    links: []
  },
  {
    id: 6,
    title: "LaTeX Docs - Calspan",
    shortDesc: "Modernized outdated technical documents into clean, branded formats for professional presentation and usability.",
    image: "/portfolio-media/calspan-latex/1_calspan_doc.jpeg",
    technologies: ["LaTeX"],
    services: ["Consulting & Training", "Design & Branding"],
    year: "2020",
    links: []
  },
  {
    id: 7,
    title: "Sonic Legacy Branding",
    shortDesc: "End-to-end branding package for local band, including logo, cards, and social assets for consistent identity.",
    image: "/portfolio-media/graphic-designs/1_sonic_legacy.jpg",
    technologies: ["Affinity Photo", "Affinity Designer"],
    services: ["Design & Branding"],
    year: "2025",
    links: [
      { type: "external", url: "https://www.instagram.com/sonic_legacy_band/?utm_source=ig_web_button_share_sheet" }
    ]
  },
  {
    id: 8,
    title: "Blues Formula Branding",
    shortDesc: "Custom visual identity, logo, and print collateral for blues/rock music project focused on local branding and visibility.",
    image: "/portfolio-media/graphic-designs/1_blues_formula.jpg",
    technologies: ["Affinity Photo", "Affinity Designer"],
    services: ["Design & Branding"],
    year: "2019",
    links: []
  },
  {
    id: 9,
    title: "ERPNext",
    shortDesc: "Custom ERP setup with automated invoicing, document templates, and Stripe integration for streamlined business ops.",
    image: "/portfolio-media/erpnext/1_erpnext_accounting.jpg",
    technologies: ["Frappe", "Jinja", "Docker"],
    services: ["Custom Software", "AI & Automation"],
    year: "2025",
    links: []
  },
  {
    id: 10,
    title: "Mesoswimmers",
    shortDesc: "Developed custom simulation tools for low Reynolds number microswimmer models to visualize and analyze fluid dynamics.",
    image: "/portfolio-media/mesoswimmers/1_mesoswimmer_plots.jpg",
    technologies: ["Wolfram Mathematica", "Python"],
    services: ["Custom Software", "Data Analysis"],
    year: "2022",
    links: [
      { type: "github", url: "https://github.com/cneureuter/mesoswimmer-fluid-simulations" },
      { type: "external", url: "https://github.com/cneureuter/mesoswimmer-fluid-simulations/blob/main/docs/final_report.pdf", label: "Thesis" }
    ]
  }
];

/**
 * Type definition for portfolio project objects
 * 
 * @type {typeof projects[0]}
 */
export type PortfolioProject = typeof projects[0]; 