import React from 'react';
import { timelineItems, TimelineItem } from '@/components/CustomSoftwareServicePage/InSiteAdvantageSection/BenefitsText';

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="bg-gray-50 p-6 md:p-10">
      <div className="relative">
        {/* Continuous vertical line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-300" />
        
        {items.map((item, index) => (
          <div key={index} className="relative pl-8">
            {/* Blue highlight for current title */}
            <div className="absolute left-0 w-0.5 top-1 h-5 bg-blue-500" />
            
            <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
            <p className="text-gray-600 mb-8">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BenefitsSection: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-black text-3xl font-bold text-center my-8">Competitive Advantages and Client Benefits</h1>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default BenefitsSection;

