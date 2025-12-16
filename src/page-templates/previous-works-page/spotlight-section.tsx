/**
 * @fileoverview Spotlight Section Component for Previous Works Page
 *
 * This component showcases featured projects with detailed information, media slideshows,
 * and alternating layout patterns. It features a modular structure with sub-components
 * for project media, details, and responsive design considerations.
 *
 * Features:
 * - Featured project showcase with detailed information
 * - Media slideshows with image and video support
 * - Alternating layout pattern (left/right positioning)
 * - Service badges and technology tags
 * - Project metrics and external links
 * - Responsive design with mobile-first approach
 * - Smooth scroll-triggered animations
 *
 * @component SpotlightSection
 * @returns The complete spotlight section with featured projects
 */

'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects, Project } from '@/content/about-pages/previous-works-page/spotlight-content';
import ServiceBadge from '@/components/ui/service-badge';
import { getServicePageUrl } from '@/utils/service-badges';
import MediaSlideshow from '@/components/ui/media-slideshow';
import { getProjectMedia } from '@/lib/portfolio-media';
import { SlideshowProvider } from '@/contexts/slideshow-context';
import { memo } from 'react';

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const projectCardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

/**
 * Props interface for the ProjectMedia component
 */
interface ProjectMediaProps {
  project: Project;
  index: number;
}

/**
 * ProjectMedia Component
 * 
 * Renders project media with slideshow functionality and alternating
 * background positioning for visual interest.
 * 
 * Features:
 * - Media slideshow with image and video support
 * - Alternating background card positioning
 * - Responsive aspect ratio maintenance
 * - Smooth animations and transitions
 * 
 * @param props - Component props
 * @returns Project media container with slideshow
 */
const ProjectMedia = memo(function ProjectMedia({ project, index }: ProjectMediaProps): JSX.Element {
  const isEven = index % 2 === 0;
  const mediaItems = getProjectMedia(project.id);

  // The outer container uses padding to reserve layout space for the offset background card.
  // This is the key to preventing overflow on any screen size.
  return (
    <div className={`w-full ${isEven ? 'pl-6 pb-6' : 'pr-6 pb-6'}`}>
      <div className="relative aspect-square">
        {/* The blue card is positioned absolutely to fill its container and then
            visually offset using a CSS transform. This is robust and doesn't affect layout. */}
        <div
          className={`absolute inset-0 rounded-2xl shadow-2xl ${project.bgColor} transform ${
            isEven
              ? '-translate-x-6 -translate-y-6' // For even items (like the first), offset bottom-left
              : 'translate-x-6 -translate-y-6'   // For odd items, offset bottom-right
          }`}
        />

        {/* The main media card sits in a relative container, which places it on top. */}
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-100 shadow-xl">
          <MediaSlideshow
            media={mediaItems}
            projectTitle={project.title}
            videoUrl={project.videoUrl}
            projectId={project.id}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
});

/**
 * Props interface for the ProjectDetails component
 */
interface ProjectDetailsProps {
  project: Project;
}

/**
 * ProjectDetails Component
 * 
 * Renders detailed project information including title, description,
 * technologies, metrics, and external links.
 * 
 * Features:
 * - Comprehensive project information display
 * - Service badges with navigation links
 * - Technology tags with consistent styling
 * - Project metrics in grid layout
 * - External links with proper security attributes
 * 
 * @param props - Component props
 * @returns Project details with comprehensive information
 */
const ProjectDetails = memo(function ProjectDetails({ project }: ProjectDetailsProps): JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-xl lg:text-2xl text-gray-600 mb-3">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {project.serviceCategories.map((category) => (
            <ServiceBadge 
              key={category} 
              category={category} 
              href={getServicePageUrl(category)}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-50 rounded-full text-medium-blue-alt text-sm font-medium shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Metrics</h4>
        <div className="grid grid-cols-3 gap-4">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-xs text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.map((link) => (
            <a 
              key={link.url} 
              href={link.url} 
              target={link.url === '#' ? undefined : '_blank'} 
              rel={link.url === '#' ? undefined : 'noopener noreferrer'} 
              onClick={link.url === '#' ? (e) => e.preventDefault() : undefined}
              className="inline-flex items-center space-x-2 bg-medium-blue text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {link.type === 'github' ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
});

/**
 * SpotlightSection Component
 * 
 * Main component that renders the complete spotlight section showcasing
 * featured projects with alternating layouts and comprehensive details.
 * 
 * Features:
 * - Featured project showcase with detailed information
 * - Alternating layout pattern for visual interest
 * - Media slideshows with image and video support
 * - Service badges and technology tags
 * - Project metrics and external links
 * - Responsive design with mobile-first approach
 * 
 * Layout Pattern:
 * - Even-indexed projects: Media on left, details on right
 * - Odd-indexed projects: Media on right, details on left
 * - Mobile: Stacked layout with media above details
 * 
 * @returns The complete spotlight section with featured projects
 * 
 * @example
 * ```tsx
 * import SpotlightSection from '@/page-templates/previous-works-page/spotlight-section'
 * 
 * export default function PreviousWorksPage() {
 *   return <SpotlightSection />
 * }
 * ```
 */
const SpotlightSection = (): JSX.Element => {
  return (
    <SlideshowProvider>
      <section>
        <div className="mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Highlighting our most impactful projects across research, development, and client work.
            </p>
          </motion.div>
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.section
                key={project.id}
                id={project.id}
                className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.15 }}
                variants={projectCardVariants}
              >
                {/* For odd-indexed items, we apply 'lg:order-last' to this container,
                    which swaps its visual position with the details component on large screens.
                    The DOM order remains the same, ensuring correct stacking on mobile. */}
                <div className={index % 2 !== 0 ? 'lg:order-last' : ''}>
                  <ProjectMedia project={project} index={index} />
                </div>
                <div>
                  <ProjectDetails project={project} />
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>
    </SlideshowProvider>
  );
};

export default SpotlightSection;