/**
 * @fileoverview Portfolio Section Component for Homepage
 *
 * This component creates a featured portfolio showcase with interactive
 * project cards that expand on hover. Features smooth animations,
 * technology badges, and links to detailed case studies.
 *
 * Features:
 * - Interactive project cards with hover expansion effects
 * - Technology badges with overflow handling
 * - Smooth animations with Framer Motion for entrance and hover interactions
 * - Responsive design with flexible layouts
 * - Image optimization with Next.js Image component
 * - Call-to-action link to full portfolio
 *
 * @module PortfolioSection
 */

"use client"

import { useState, memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, Variants } from 'framer-motion';

/**
 * Static content: featured portfolio projects
 * 
 * Defines the featured projects to showcase on the homepage
 * with detailed descriptions, technologies, and case study links.
 * 
 * @constant {Project[]} featuredProjects
 */
const featuredProjects: Project[] = [
  {
    id: "pycat-napari",
    title: "PyCAT-Napari",
    description:
      "An open-source bio-image analysis platform that provides biologists with a low-code solution for studying biomolecular condensates. Built on napari, it streamlines complex analysis workflows into an intuitive graphical interface.",
    image: "/portfolio-media/pycat/1_pycat_logo_512.webp",
    technologies: ["Python", "Napari"],
    link: "/about/previous-works#pycat-napari",
  },
  {
    id: "banerjee-lab",
    title: "Banerjee Lab Website",
    description:
      "A comprehensive migration and modernization of an academic lab website, transforming it into a sleek, accessible platform with modernized branding and a secure Members Portal for internal resources.",
    image: "/portfolio-media/banerjee-lab/1_banerjee_lab_homepage.jpg",
    technologies: ["Squarespace", "CSS", "Zapier"],
    link: "/about/previous-works#banerjee-lab",
  },
  {
    id: "dla-inverse-design",
    title: "DLA Inverse Design",
    description:
      "Advanced photonics research that automated the design of high-performance, nanoscale photonic structures for next-generation particle-on-a-chip accelerators using novel optimization algorithms.",
    image: "/portfolio-media/inverse-design/1_sem_image.jpg",
    technologies: ["Python", "Ansys Lumerical"],
    link: "/about/previous-works#dla-inverse-design",
  },
]

/**
 * Interface for a featured project
 * 
 * Defines the structure for portfolio project data including
 * identification, content, media, and navigation properties.
 * 
 * @interface Project
 * @property {string} id - Unique identifier for the project
 * @property {string} title - Title of the project
 * @property {string} description - Brief description of the project
 * @property {string} image - URL or path to the project's image
 * @property {string[]} technologies - Array of technologies used in the project
 * @property {string} link - URL to the project's case study or live version
 */
interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

/**
 * Animation variant for fade-in-up effect
 * 
 * Simple fade-in animation with upward movement
 * for smooth entrance effects on portfolio elements.
 * 
 * @constant {Variants} fadeInUp
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

/**
 * Animation variant for staggered container
 * 
 * Provides staggered animation timing for child elements
 * to create a sequential entrance effect for portfolio cards.
 * 
 * @constant {Variants} staggerContainer
 */
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

/**
 * Animation variant for portfolio cards
 * 
 * Card entrance animation with scale and fade effect
 * for engaging visual introduction without interfering with hover.
 * 
 * @constant {Variants} cardVariants
 */
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/**
 * FeaturedPortfolio Component
 * 
 * Creates a featured portfolio showcase with interactive project cards
 * that expand on hover to reveal detailed information. Features smooth
 * animations, technology badges, and links to detailed case studies.
 * 
 * The component includes:
 * - Interactive project cards with hover expansion effects
 * - Technology badges with overflow handling (+X more indicator)
 * - Smooth animations using Framer Motion for entrance and hover interactions
 * - Responsive design with flexible layouts
 * - Image optimization with Next.js Image component
 * - Call-to-action link to full portfolio
 * 
 * Each project card features:
 * - Project image with aspect ratio preservation
 * - Expandable overlay with gradient background
 * - Technology badges with hover effects
 * - Case study link with external link icon
 * - Smooth transitions for all interactive elements
 * 
 * @returns {JSX.Element} Interactive portfolio showcase section
 * 
 * @example
 * ```tsx
 * <FeaturedPortfolio />
 * ```
 */
function FeaturedPortfolio(): JSX.Element {
  /**
   * State to track the ID of the project currently being hovered over
   * 
   * Null if no project is hovered. Used to trigger animations
   * and expand overlays on project cards.
   * 
   * @type {string | null}
   */
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <motion.section 
      aria-labelledby="featured-portfolio-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Accessible landmark for Featured Portfolio */}
      <h2 id="featured-portfolio-title" className="sr-only">Featured Work</h2>
      
      {/* Main container */}
      <div className="container mx-auto">
        {/* Section Header with title and description */}
        <motion.div className="text-center max-w-4xl mx-auto mb-12" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-lg text-gray-600">
            Showcasing some of our recent projects which demonstrate our expertise in building effective tech solutions.
          </p>
        </motion.div>

        {/* Portfolio Cards Container with responsive layout */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 lg:gap-6 mb-8"
          variants={staggerContainer}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-400 hover:shadow-lg flex-1"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              variants={cardVariants}
            >
              {/* Project image container with aspect ratio */}
              <div className="relative aspect-[5/6] w-full overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

                {/* Expandable overlay with gradient background */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 bg-gradient-to-br from-light-blue/90 via-blue-800/90 to-mild-blue-alt/90 backdrop-blur-sm transition-all duration-400 ease-in-out p-6 md:p-4 lg:px-6 lg:py-4",
                    hoveredProject === project.id ? "h-3/4 md:h-full lg:h-5/6" : "h-1/6",
                  )}
                >
                  <div className="flex flex-col h-full">
                    {/* Project title - always visible */}
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 shrink-0">
                      {project.title}
                    </h3>

                    {/* Expandable content with description and actions */}
                    <div
                      className={cn(
                        "transition-opacity duration-400 flex flex-col justify-between h-full",
                        hoveredProject === project.id ? "opacity-100" : "opacity-0",
                      )}
                    >
                      {/* Project description */}
                      <p className="text-gray-100 mb-4 text-sm md:line-clamp-5 lg:line-clamp-none">
                        {project.description}
                      </p>

                      {/* Technology badges and call-to-action */}
                      <div className="mt-auto">
                        {/* Technology badges with overflow handling */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-white border-white/30 text-xs">
                              +{project.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Case study link with external icon */}
                        <Link href={project.link}>
                          <Button
                            variant="outline"
                            className="text-white border-white/50 hover:bg-white/10 hover:text-white group"
                          >
                            View case study
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio CTA with animation */}
        <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
                <a
                  href={"/about/previous-works"}
                  className="group inline-flex items-center gap-2 text-mild-blue hover:text-medium-blue-alt font-medium transition-colors"
                >
                  View All Projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
      </div>
    </motion.section>
  )
}

export default memo(FeaturedPortfolio);