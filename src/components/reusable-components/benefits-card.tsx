/**
 * @fileoverview A reusable card component that displays an icon, title, and description.
 * This component is used in benefits sections or feature lists and supports animations.
 */
'use client';

import React, { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { getIcon } from '@/utils/icon-registry';


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

/**
 * Props for the BenefitsCard component.
 */
interface BenefitsCardProps {
  icon: string;
  title: string;
  description: string;
  isActive?: boolean;
}

/**
 * BenefitsCard component displays an icon, title, and description in a card format.
 * 
 * @param {BenefitsCardProps} props - Component props
 * @param {string} props.icon - Icon identifier for the card
 * @param {string} props.title - Title of the benefit
 * @param {string} props.description - Description of the benefit
 * @param {boolean} [props.isActive=false] - Indicates if the card is currently active
 * @returns {JSX.Element} Rendered benefits card component
 */
const BenefitsCardComponent: React.FC<BenefitsCardProps> = ({
  icon,
  title,
  description,
  isActive = false,
}) => {
  const IconComponent = useMemo(() => getIcon(icon), [icon]);

  return (
    <motion.div
      variants={fadeInUp}
      className={`
      flex flex-col items-center text-center
      bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg 
      rounded-xl shadow-md p-6 
      transition-all duration-500 ease-in-out
      w-78 min-h-[16rem] h-auto
      ${
        isActive
          ? 'shadow-lg border-2 border-blue-600 z-10'
          : 'shadow-md border-2 border-transparent blur-[1.5px] opacity-97'
      }
    `}
    >
      <div className="p-2 rounded-full bg-blue-100 mb-4 mt-2">
        <IconComponent className="h-6 w-6 text-blue-600" />
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

// Memoized version of BenefitsCardComponent for performance optimization
const BenefitsCard = React.memo(BenefitsCardComponent);

export default BenefitsCard;
