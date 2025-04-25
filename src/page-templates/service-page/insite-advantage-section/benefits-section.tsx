/**
 * @fileoverview BenefitsSection component that displays a list of benefits in a vertical timeline format.
 * This component includes a timeline for visual representation of benefits with titles and descriptions.
 */

import React from 'react';
import { InSiteBenefitItem } from '../types';

interface TimelineProps {
  items: InSiteBenefitItem[];
}

/**
 * Timeline component for displaying benefits in a vertical timeline format.
 * 
 * @param {TimelineProps} props - Component props
 * @param {InSiteBenefitItem[]} props.items - Array of benefit items with title and description
 * @returns {JSX.Element} Rendered timeline component
 */
const TimelineComponent: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="p-6 md:p-10 mt-2 md:mt-0">
      <div className="relative">
        {/* Continuous vertical line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-300" />
        
        {items.map((item, index) => (
          <div key={index} className="relative pl-8">
            {/* Blue highlight for current title */}
            <div className="absolute left-0 w-0.5 top-1 h-5 bg-blue-500" />
            
            <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
            <p className="text-gray-600 mb-8">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Memoized version of TimelineComponent for performance optimization
const Timeline = React.memo(TimelineComponent);

interface BenefitsSectionProps {
  title: string;
  items: InSiteBenefitItem[];
}

/**
 * BenefitsSection component displays a list of benefits in a timeline format.
 * 
 * @param {BenefitsSectionProps} props - Component props
 * @param {string} props.title - Section title
 * @param {InSiteBenefitItem[]} props.items - Array of benefit items with title and description
 * @returns {JSX.Element} Rendered benefits section component
 */
const BenefitsSection: React.FC<BenefitsSectionProps> = ({ title, items }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-black text-3xl font-bold text-center mt-2">{title}</h1>
      <Timeline items={items} />
    </div>
  );
};

export default BenefitsSection;