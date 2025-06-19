/**
 * @fileoverview Reusable Benefits Card Component
 *
 * A presentational component that displays an icon, title, and description within a card format.
 * It is designed for use in sections highlighting benefits, features, or key advantages.
 * The component integrates `framer-motion` for smooth animation effects, enhancing user experience.
 */
'use client';

import { useMemo, memo } from 'react';
import { motion, Variants } from 'framer-motion';
import { getIcon } from '@/utils/icon-registry';

/**
 * Defines the animation variants for a fade-in-up effect.
 * Used with `framer-motion` to animate the card's appearance.
 */
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
  /** The identifier for the icon to be displayed on the card. This string is used to retrieve the SVG component from the icon registry. */
  icon: string;
  /** The main title or heading for the benefit/feature. */
  title: string;
  /** A brief description detailing the benefit or feature. */
  description: string;
  /** Optional. If true, applies an active styling to the card, typically indicating selection or focus. Defaults to false. */
  isActive?: boolean;
}

/**
 * BenefitsCard component
 *
 * A functional React component that renders a visually appealing card to showcase a specific benefit or feature.
 * It dynamically retrieves an SVG icon based on the `icon` prop and applies conditional styling for active states.
 *
 * Features:
 * - Displays an icon, title, and description.
 * - Integrates `framer-motion` for a subtle fade-in-up animation on mount.
 * - Supports an `isActive` prop for conditional styling, highlighting the card.
 * - Utilizes `useMemo` for icon retrieval to optimize performance.
 *
 * @param {BenefitsCardProps} props - The properties passed to the component.
 * @param {string} props.icon - The identifier for the icon to be displayed on the card.
 * @param {string} props.title - The main title or heading for the benefit/feature.
 * @param {string} props.description - A brief description detailing the benefit or feature.
 * @param {boolean} [props.isActive=false] - If true, applies an active styling to the card, typically indicating selection or focus.
 * @returns {JSX.Element} The rendered benefits card component.
 *
 * @example
 * ```tsx
 * <BenefitsCard
 *   icon="CustomSoftwareGraphic"
 *   title="Tailored Solutions"
 *   description="Develop software precisely designed to meet your business needs."
 *   isActive={true}
 * />
 *
 * <BenefitsCard
 *   icon="DataAnalysisGraphic"
 *   title="Data-Driven Insights"
 *   description="Leverage your data to make informed strategic decisions."
 * />
 * ```
 */
const BenefitsCardComponent = ({
  icon,
  title,
  description,
  isActive = false,
}: BenefitsCardProps): JSX.Element => {
  const IconComponent = useMemo(() => getIcon(icon), [icon]);

  return (
    <>
      {/* Card Container with animation */}
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
            ? 'shadow-lg border-2 border-medium-blue z-10'
            : 'shadow-md border-2 border-transparent blur-[1.5px] opacity-97'
        }
      `}
      >
        {/* Icon */}
        <div className="p-2 rounded-full bg-blue-100 mb-4 mt-2">
          <IconComponent className="h-6 w-6 text-medium-blue-alt" />
        </div>
        {/* Title */}
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
        {/* Description */}
        <p className="text-gray-700">{description}</p>
      </motion.div>
    </>
  );
};

/**
 * Memoized version of BenefitsCardComponent for performance optimization.
 * Prevents unnecessary re-renders when parent components update but props remain the same.
 */
const BenefitsCard = memo(BenefitsCardComponent);

export default BenefitsCard;
