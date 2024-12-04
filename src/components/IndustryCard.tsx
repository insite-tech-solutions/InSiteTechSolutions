// IndustryCard.tsx

'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface IndustryCardProps {
  title: string;
  items: string[];
  icon: React.ElementType;
  isActive?: boolean;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  items,
  icon: Icon,
  isActive = false,
}) => (
  <motion.div
    variants={fadeInUp}
    className={`
      relative
      bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg 
      rounded-xl shadow-lg p-6 
      transition-all duration-800 ease-in-out
      w-80 h-72 
      ${
        isActive
          ? 'border-2 border-blue-600 z-10'
          : 'border-2 filter blur-[1.65px] opacity-97'
      }
    `}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-full bg-blue-100">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default IndustryCard;

