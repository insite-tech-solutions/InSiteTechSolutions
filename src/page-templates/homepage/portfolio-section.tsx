"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * Interface for a featured project.
 * @property {string} id - Unique identifier for the project.
 * @property {string} title - Title of the project.
 * @property {string} description - Brief description of the project.
 * @property {string} image - URL or path to the project's image.
 * @property {string[]} technologies - Array of technologies used in the project.
 * @property {string} link - URL to the project's case study or live version.
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
 * `FeaturedPortfolio` component displays a selection of recent projects.
 * It features an interactive hover effect on project cards to reveal more details,
 * with enhanced animations and improved code documentation.
 *
 */
export default function FeaturedPortfolio() {
  /**
   * State to track the ID of the project currently being hovered over.
   * Null if no project is hovered. Used to trigger animations on project cards.
   */
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

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
      technologies: ["Squarespace", "CSS", "Zapier", "Google Forms"],
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

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Showcasing some of my recent projects that demonstrate my expertise in building modern, scalable web
              applications.
            </p>
          </div>
          <Link href="/portfolio" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-400 hover:shadow-lg flex-1"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

                {/* Overlay that expands on hover */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 bg-gradient-to-br from-light-blue/90 via-blue-800/90 to-mild-blue-alt/90 backdrop-blur-sm transition-all duration-400 ease-in-out p-6",
                    hoveredProject === project.id ? "h-2/3" : "h-1/6",
                  )}
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 shrink-0">
                      {project.title}
                    </h3>

                    <div
                      className={cn(
                        "transition-opacity duration-400 flex flex-col justify-between h-full",
                        hoveredProject === project.id ? "opacity-100" : "opacity-0",
                      )}
                    >
                      <p className="text-gray-100 mb-4 text-sm line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-auto">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
