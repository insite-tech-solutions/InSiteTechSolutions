/**
 * @fileoverview InSite Advantage Section Component for About Us Page
 * 
 * This component renders the InSite Advantage section for the About Us page by importing
 * and utilizing the existing InSite Advantage component from the service pages. This approach
 * ensures consistency across the site while providing a dedicated advantage showcase
 * in the About Us context.
 * 
 * Features:
 * - Reuses existing InSite Advantage component for consistency
 * - Maintains the same animated advantage cards with glass-morphism effects
 * - Provides comprehensive advantage overview in About Us context
 * - Responsive design with smooth animations
 * - Accessible markup with proper ARIA labels
 */

'use client';

import React from 'react';
import InSiteAdvantageSectionWrapper from '@/page-templates/service-page/insite-advantage-section/insite-advantage-section';
import aboutUsAdvantageContent from '@/content/about-pages/about-us-page/about-insite-advantage-content';

/**
 * InSiteAdvantageSection Component
 * 
 * Renders the InSite Advantage section for the About Us page by leveraging the existing
 * InSite Advantage component from the service pages. This ensures design consistency while
 * providing a dedicated advantage showcase in the About Us context.
 * 
 * The component imports the InSiteAdvantageSectionWrapper from the service pages
 * and uses the custom software advantage content as a base, adapting it for the
 * broader About Us context.
 * 
 * Features:
 * - Reuses proven InSite Advantage component for consistency
 * - Maintains animated advantage cards with glass-morphism effects
 * - Provides comprehensive advantage overview
 * - Responsive design with smooth animations
 * - Accessible markup with proper ARIA labels
 * 
 * @returns {JSX.Element} The rendered InSite Advantage section component
 */
export default function InSiteAdvantageSection(): JSX.Element {
  return (
    <section>
      {/* InSite Advantage Component - Reuses the proven service page component */}
      <div className="container mx-auto">
        <InSiteAdvantageSectionWrapper content={aboutUsAdvantageContent} />
      </div>
    </section>
  );
}
