/**
 * @fileoverview InSite Advantage Section Component for Homepage
 * 
 * This component renders the InSite Advantage section for the Homepage by importing
 * and utilizing the existing InSite Advantage component from the service pages. This approach
 * ensures consistency across the site while providing a dedicated advantage showcase
 * in the Homepage context.
 * 
 * Features:
 * - Reuses existing InSite Advantage component for consistency
 * - Maintains the same animated advantage cards with glass-morphism effects
 * - Provides comprehensive advantage overview in Homepage context
 * - Responsive design with smooth animations
 * - Accessible markup with proper ARIA labels
 */

'use client';

import { memo } from 'react';
import InSiteAdvantageSectionWrapper from '@/page-templates/service-page/insite-advantage-section/insite-advantage-section';
import homepageInsiteAdvantageContent from '@/content/home-page/insite-advantage-content';
import { motion, Variants } from 'framer-motion';

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
// Homepage InSite Advantage showcase section
function InsiteAdvantageHomepageSection(): JSX.Element {
  return (
    <section aria-labelledby="insite-advantage-homepage-title">
      {/* Accessible landmark for InSite Advantage Section */}
      <h2 id="insite-advantage-homepage-title" className="sr-only">
        InSite Advantage
      </h2>
      {/* InSite Advantage Wrapper */}
      <div className="container mx-auto">
        <InSiteAdvantageSectionWrapper content={homepageInsiteAdvantageContent} />
        {/* CTA Button */}
        <motion.div variants={fadeInUp} className="flex justify-center -mt-8 md:-mt-12">
          <a
            href={"/about/about-us"}
            className="group inline-flex items-center gap-2 text-mild-blue hover:text-medium-blue-alt font-medium transition-colors"
          >
            Learn More About Us
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
}

export default memo(InsiteAdvantageHomepageSection);
