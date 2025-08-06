/**
 * @fileoverview Overview Section Component for Previous Works Page
 *
 * This component displays a comprehensive overview of portfolio and research work,
 * featuring external platform links organized into featured and additional categories.
 * It provides an interactive grid layout with animated cards that link to various
 * professional platforms and research repositories.
 *
 * Features:
 * - Interactive link cards with hover animations
 * - Featured and additional link categorization
 * - Responsive grid layout for different screen sizes
 * - Smooth scroll-triggered animations
 * - External link handling with security attributes
 * - Platform-specific styling and icons
 *
 * @component OverviewSection
 * @returns {JSX.Element} The complete overview section with portfolio links
 */

'use client';

import { motion, Variants } from 'framer-motion';
import { memo } from 'react';
import { ExternalLink } from 'lucide-react';
import { links, LinkItem } from '@/content/about-pages/previous-works-page/overview-content';

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
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/**
 * Props interface for the LinkCard component
 */
interface LinkCardProps {
  link: LinkItem;
  className?: string;
}

/**
 * LinkCard Component
 * 
 * Renders an individual link card with platform-specific styling,
 * hover animations, and external link handling.
 * 
 * @param {LinkCardProps} props - Component props
 * @returns A styled link card component
 */
const LinkCard = memo(function LinkCard({ link, className }: LinkCardProps): JSX.Element {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${className}`}
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 h-full">
        <div className="flex items-start space-x-4">
          <div className={`${link.color} text-white p-3 rounded-xl transition-colors duration-300`}>
            <link.icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {link.platform}
              </h3>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <p className="text-gray-600 leading-relaxed">
              {link.description}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
});

/**
 * OverviewSection Component
 * 
 * Main component that renders the complete overview section for the
 * Previous Works page. Organizes portfolio and research links into
 * featured and additional categories with responsive grid layouts.
 * 
 * Features:
 * - Content-driven link categorization
 * - Responsive grid layouts for different screen sizes
 * - Scroll-triggered animations with viewport detection
 * - Featured links in prominent 2-column grid
 * - Additional links in smaller grid layout
 * 
 * @returns {JSX.Element} The complete overview section with portfolio links
 * 
 * @example
 * ```tsx
 * import OverviewSection from '@/page-templates/previous-works-page/overview-section'
 * 
 * export default function PreviousWorksPage() {
 *   return <OverviewSection />
 * }
 * ```
 */
const OverviewSection = (): JSX.Element => {
  const featuredLinks = links.filter(link => link.featured);
  const additionalLinks = links.filter(link => !link.featured);

  return (
    <section>
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Portfolio & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Explore our work across software development, research publications, and technical projects.
            From open-source contributions to peer-reviewed research, the projects showcased represent a combination of academic work,
              open-source contributions, and client projects.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {featuredLinks.map((link) => (
            <LinkCard key={link.platform} link={link} />
          ))}
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {additionalLinks.map((link) => (
            <LinkCard key={link.platform} link={link} className="text-sm" />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default memo(OverviewSection);