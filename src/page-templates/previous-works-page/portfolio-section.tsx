/**
 * @fileoverview Portfolio Section Component for Previous Works Page
 *
 * This component displays a comprehensive grid of portfolio projects with interactive
 * filtering, hover effects, and detailed project information. It features a modular
 * structure with reusable sub-components for cards, overlays, and filter controls.
 *
 * Features:
 * - Interactive project cards with hover animations
 * - Service-based filtering system with dropdown controls
 * - Responsive grid layout for different screen sizes
 * - Project overlays with detailed information
 * - Technology tags and service badges
 * - External link handling with security attributes
 * - Smooth scroll-triggered animations
 *
 * @component PortfolioSection
 * @returns {JSX.Element} The complete portfolio section with filtering and project grid
 */

'use client';

import { useState, memo } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Calendar, Filter, X } from 'lucide-react';
import { projects, PortfolioProject } from '@/content/about-pages/previous-works-page/portfolio-content';
import { Button } from '@/components/ui/button';
import ServiceBadge from '@/components/ui/service-badge';
import { getServicePageUrl } from '@/utils/service-badges';

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94],
      opacity: { duration: 0.4 },
      y: { duration: 0.6 },
      scale: { duration: 0.6 }
    }
  }
};

const filterVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

/**
 * Props interface for the CardOverlay component
 */
interface CardOverlayProps {
  project: PortfolioProject;
}

/**
 * CardOverlay Component
 * 
 * Renders an overlay that appears on hover, displaying detailed project
 * information including services, technologies, and external links.
 * 
 * @param {CardOverlayProps} props - Component props
 * @returns Project overlay with detailed information
 */
const CardOverlay = memo(function CardOverlay({ project }: CardOverlayProps): JSX.Element {
  return (
    <div className="absolute inset-0 bg-gradient-to-tl from-mild-blue-alt/90 via-blue-800/90 to-light-blue/90 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end">
      <div>
        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.services.map(service => (
            <ServiceBadge 
              key={service} 
              category={service} 
              size="sm" 
              href={getServicePageUrl(service)}
            />
          ))}
        </div>
        <p className="text-white/90 text-sm mb-3 leading-relaxed">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="bg-white/30 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-white/70 text-xs px-2 py-1">+{project.technologies.length - 3} more</span>
          )}
        </div>
        <div className="flex space-x-2">
          {project.links.map(link => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-white/30 text-white p-2 rounded-lg backdrop-blur-sm transition-colors" onClick={e => e.stopPropagation()}>
              {link.type === 'github' ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

/**
 * Props interface for the PortfolioCard component
 */
interface PortfolioCardProps {
  project: PortfolioProject;
}

/**
 * PortfolioCard Component
 * 
 * Renders an individual portfolio project card with image, hover effects,
 * and overlay information. Features smooth animations and responsive design.
 * 
 * @param {PortfolioCardProps} props - Component props
 * @returns A styled portfolio project card
 */
const PortfolioCard = memo(function PortfolioCard({ project }: PortfolioCardProps): JSX.Element {
  return (
    <motion.div 
      key={`portfolio-card-${project.id}`}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
      style={{ transition: "box-shadow 0.3s ease" }}
      variants={cardVariants}
    >
      <div className="relative overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          width={400}
          height={320}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-light-blue/90 via-blue-800/90 to-mild-blue-alt/90 p-6 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <Calendar className="w-4 h-4 text-white/80" />
            <span className="text-white/80 text-sm">{project.year}</span>
          </div>
        </div>
        <CardOverlay project={project} />
      </div>
    </motion.div>
  );
});

/**
 * Props interface for the FilterControls component
 */
interface FilterControlsProps {
  services: string[];
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

/**
 * FilterControls Component
 * 
 * Renders a dropdown filter control for filtering projects by service category.
 * Features animated dropdown with service buttons and state management.
 * 
 * @param {FilterControlsProps} props - Component props
 * @returns Interactive filter controls with dropdown
 */
const FilterControls = memo(function FilterControls({ services, onFilterChange, activeFilter }: FilterControlsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="relative mb-8 text-center"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={filterVariants}
    >
      <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
        <Filter className="w-4 h-4 mr-2" />
        Filter by Service
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute z-10 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">Services</h4>
              <button onClick={() => setIsOpen(false)}><X className="w-4 h-4" /></button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant={activeFilter === 'All' ? 'default' : 'ghost'} onClick={() => onFilterChange('All')} size="sm">All</Button>
              <div className="w-full"></div>
              {services.map(service => (
                <Button key={service} variant={activeFilter === service ? 'default' : 'ghost'} onClick={() => onFilterChange(service)} size="sm">{service}</Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

/**
 * PortfolioSection Component
 * 
 * Main component that renders the complete portfolio section with filtering
 * capabilities and a responsive grid of project cards.
 * 
 * Features:
 * - Service-based filtering system
 * - Responsive grid layout (1-3 columns based on screen size)
 * - Interactive project cards with hover effects
 * - Animated filter dropdown
 * - Project overlays with detailed information
 * 
 * @returns {JSX.Element} The complete portfolio section with filtering and project grid
 * 
 * @example
 * ```tsx
 * import PortfolioSection from '@/page-templates/previous-works-page/portfolio-section'
 * 
 * export default function PreviousWorksPage() {
 *   return <PortfolioSection />
 * }
 * ```
 */
const PortfolioSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState('All');
  const allServices = [...new Set(projects.flatMap(p => p.services))];
  
  // Ensure we always filter from the original projects array
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.services.includes(activeFilter));

  return (
    <section>
      <div className="mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore our full range of projects
          </p>
        </motion.div>
        
        <FilterControls services={allServices} onFilterChange={setActiveFilter} activeFilter={activeFilter} />

        <motion.div 
          key={`portfolio-grid-${activeFilter}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {filteredProjects.map(project => (
            <PortfolioCard key={`${project.id}-${activeFilter}`} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(PortfolioSection);