/**
 * @fileoverview Blog News Section Component for Homepage
 *
 * This component creates a blog and news highlights section with a
 * "coming soon" placeholder. Features smooth animations, newsletter
 * signup promotion, and a call-to-action to the blog page.
 *
 * Features:
 * - Animated section header with news badge
 * - Coming soon placeholder with construction emoji
 * - Newsletter signup promotion
 * - Call-to-action link to blog page
 * - Framer Motion entrance animations
 * - Responsive design with proper spacing
 *
 * @module BlogNewsSection
 */

"use client";

import { memo } from "react";
import { motion, Variants } from "framer-motion";
import { Newspaper } from "lucide-react";

/**
 * Animation variant for fade-in-up effect
 * 
 * Simple fade-in animation with upward movement
 * for smooth entrance effects on section elements.
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
 * BlogNewsSection Component
 * 
 * Creates a blog and news highlights section with a "coming soon"
 * placeholder. Features animated elements, newsletter promotion,
 * and a call-to-action to the blog page.
 * 
 * The component includes:
 * - Animated section header with news badge and icon
 * - Coming soon placeholder with construction emoji
 * - Newsletter signup promotion message
 * - Call-to-action link to the blog page
 * - Smooth animations using Framer Motion
 * - Responsive design with proper spacing and typography
 * 
 * The section serves as a placeholder for future blog content
 * while maintaining visual consistency with the rest of the site
 * and encouraging newsletter signups for updates.
 * 
 * @returns {JSX.Element} Blog and news section with coming soon content
 * 
 * @example
 * ```tsx
 * <BlogNewsSection />
 * ```
 */
function BlogNewsSection(): JSX.Element {
  return (
    <section aria-labelledby="blog-news-section-title">
      {/* Accessible landmark for Blog News Section */}
      <h2 id="blog-news-section-title" className="sr-only">Latest from our Blog & News</h2>
      
      {/* Main container */}
      <div className="container mx-auto">
        {/* Section Header with animated badge and title */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          {/* News badge with icon */}
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-medium-blue-alt text-md font-medium mb-6">
            <Newspaper className="inline mr-2 h-5 w-5" />
            News & Blog
          </div>
          
          {/* Section title and description */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from our Blog & News
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with the latest insights, project spotlights, and tech strategies from InSite Tech Solutions.
          </p>
        </motion.div>

        {/* Coming Soon Content with construction placeholder */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          {/* Coming soon card with construction emoji */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Under Construction
            </h3>
            <p className="text-gray-600 mb-6">
              Our blog and news section is coming soon! We&apos;ll be sharing updates, insights, and the latest from InSite Tech Solutions here. Check back soon for fresh content and company news.
            </p>
            
            {/* Newsletter signup promotion */}
            <div className="inline-flex items-center gap-2 text-medium-blue font-medium transition-colors">
              <span>Signup for our newsletter below to get notified when we post!</span>
            </div>
          </div>
        </motion.div>

        {/* Call-to-Action Button with animated arrow */}
        <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
          <a
            href={"/insites/blog"}
            className="group inline-flex items-center gap-2 text-mild-blue hover:text-medium-blue-alt font-medium transition-colors"
          >
            View Our Blog
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
    </section>
  );
};

export default memo(BlogNewsSection);
