/**
 * @fileoverview Overview Content for Previous Works Page
 *
 * This file contains the data for external platform links displayed in the
 * overview section of the Previous Works page. It includes links to various
 * professional platforms and research repositories where portfolio work can be found.
 *
 * Features:
 * - External platform links with descriptions
 * - Featured and additional link categorization
 * - Platform-specific styling and icons
 * - Type-safe link structure
 *
 * @module PreviousWorksOverviewContent
 */

import { Github, GraduationCap, FileText, Users } from 'lucide-react';

/**
 * External platform links for portfolio and research work
 * 
 * Contains links to various professional platforms where work can be found,
 * organized into featured (prominent display) and additional (secondary) categories.
 * 
 * @constant {Array} links - Array of external platform links
 */
export const links = [
  {
    platform: "GitHub",
    description: "Open source projects, code repositories, and development work.",
    url: "https://github.com/cneureuter",
    icon: Github,
    color: "bg-gray-800 hover:bg-gray-900",
    featured: true
  },
  {
    platform: "Google Scholar",
    description: "Published research, citations, and academic contributions.",
    url: "https://scholar.google.com/citations?hl=en&user=jAx2aTQAAAAJ&sortby=pubdate&view_op=list_works&gmla=AH8HC4yzvZ41hx5Qw4edMEElM_wNJGPJK7r-WXs16SOrSfMKqaM7kXG-EwQFEU5S2WW89QYtbqyV8Uhm6eAjS-dQEZaf-GI67g-Nw1lZke1tM3Sm0rwSOzwBcViuJfEHx6o",
    icon: GraduationCap,
    color: "bg-blue-600 hover:bg-blue-700",
    featured: true
  },
  {
    platform: "ORCiD",
    description: "Academic profile and research identifier.",
    url: "https://orcid.org/0009-0004-9631-1088",
    icon: FileText,
    color: "bg-green-600 hover:bg-green-700",
    featured: false
  },
  {
    platform: "ResearchGate",
    description: "Research publications and academic network.",
    url: "https://www.researchgate.net/profile/Christian-Neureuter",
    icon: Users,
    color: "bg-teal-600 hover:bg-teal-700",
    featured: false
  }
];

/**
 * Type definition for link items
 * 
 * @type {typeof links[0]}
 */
export type LinkItem = typeof links[0]; 