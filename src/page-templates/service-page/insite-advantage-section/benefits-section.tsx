/**
 * @fileoverview BenefitsSection component that displays a list of benefits in a vertical timeline format.
 * This component includes a timeline for visual representation of benefits with titles and descriptions.
 * It's part of the InSite Advantage section in service pages, highlighting key benefits in a structured,
 * accessible format with visual indicators.
 */

import { memo } from 'react';
import { InSiteBenefitItem } from '../types';

/**
 * Props interface for the Timeline component
 * 
 * @interface TimelineProps
 * @property {InSiteBenefitItem[]} items - Array of benefit items with title and description
 */
interface TimelineProps {
  items: InSiteBenefitItem[];
}

/**
 * Timeline component for displaying benefits in a vertical timeline format.
 * Renders a vertical line with benefit items positioned along it, each with a
 * blue highlight indicator, title, and description.
 * 
 * @param {TimelineProps} props - Component props
 * @param {InSiteBenefitItem[]} props.items - Array of benefit items with title and description
 * @returns {JSX.Element} Rendered timeline component with vertical indicator and benefit items
 * 
 * @example
 * ```tsx
 * const benefits = [
 *   { title: "Benefit 1", description: "Description of benefit 1" },
 *   { title: "Benefit 2", description: "Description of benefit 2" }
 * ];
 * <Timeline items={benefits} />
 * ```
 */
const TimelineComponent: React.FC<TimelineProps> = ({ items }): JSX.Element => {
  return (
    <div className="p-6 md:p-10 mt-2 md:mt-0">
      <div className="relative">
        {/* Continuous vertical line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-300" />
        
        {items.map((item) => (
          <div key={item.title.toLowerCase().replace(/\s+/g, '-')} className="relative pl-8">
            {/* Blue highlight for current title - visual indicator for each benefit */}
            <div className="absolute left-0 w-0.5 top-1 h-5 bg-mild-blue" />
            
            <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
            <p className="text-gray-600 mb-8">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Memoized version of TimelineComponent for performance optimization
// Prevents unnecessary re-renders when parent components change but props remain the same
const Timeline = memo(TimelineComponent);

/**
 * Props interface for the BenefitsSection component
 * 
 * @interface BenefitsSectionProps
 * @property {string} title - Section title displayed at the top
 * @property {InSiteBenefitItem[]} items - Array of benefit items with title and description
 */
interface BenefitsSectionProps {
  title: string;
  items: InSiteBenefitItem[];
}

/**
 * BenefitsSection component displays a list of benefits in a timeline format.
 * This component provides an accessible section with a visible heading and a
 * vertical timeline of benefits. It's typically used in service pages to highlight
 * the advantages of working with InSite Tech.
 * 
 * @param {BenefitsSectionProps} props - Component props
 * @param {string} props.title - Section title displayed prominently
 * @param {InSiteBenefitItem[]} props.items - Array of benefit items with title and description
 * @returns {JSX.Element} Rendered benefits section component with title and timeline
 * 
 * @example
 * ```tsx
 * const benefits = [
 *   { title: "Benefit 1", description: "Description of benefit 1" },
 *   { title: "Benefit 2", description: "Description of benefit 2" }
 * ];
 * <BenefitsSection title="Our Benefits" items={benefits} />
 * ```
 */
const BenefitsSection: React.FC<BenefitsSectionProps> = ({ title, items }): JSX.Element => {
  return (
    <section aria-labelledby="benefits-section-title">
      {/* Accessible landmark for screen readers */}
      <h2 id="benefits-section-title" className="sr-only">{title}</h2>
      {/* Visible section title */}
      <h1 className="text-black text-3xl font-bold text-center mt-2">{title}</h1>
      {/* Timeline Section with benefit items */}
      <Timeline items={items} />
    </section>
  );
};

export default BenefitsSection;