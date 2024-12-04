'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // If needed, else remove

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

interface BenefitsCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  isActive?: boolean;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({
  icon: Icon,
  title,
  description,
  isActive = false,
}) => (
  <motion.div
    variants={fadeInUp}
    className={`
      flex flex-col items-center text-center p-6 
      bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg 
      rounded-xl shadow-md transition-all duration-300 
      ${
        isActive
          ? 'shadow-lg border-2 border-blue-600'
          : 'shadow-md border-2 border-transparent'
      }
      hover:shadow-lg
    `}
  >
    <div className="p-3 rounded-full bg-blue-100 mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-800">{description}</p>
  </motion.div>
);

export default BenefitsCard;
