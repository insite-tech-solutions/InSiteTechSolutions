/**
 * @fileoverview Reusable Industry Card Component
 *
 * A specialized card component for displaying industry-specific information with a consistent visual style.
 * This component combines an icon, title, and a list of related items to create a cohesive presentation
 * of industry solutions or services. It includes animation effects and an active state for interactive displays.
 * Commonly used in industry solutions sections or service category displays.
 */
'use client';

import { useMemo, memo } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
 * Props for the IndustryCard component.
 */
interface IndustryCardProps {
  /** The title of the industry or category being displayed. */
  title: string;
  /** An array of strings representing features, services, or characteristics related to the industry. */
  items: string[];
  /** The identifier for the icon to be displayed. This string is used to retrieve the SVG component from the icon registry. */
  icon: string;
  /** Optional. If true, applies an active styling to the card, typically indicating selection or focus. Defaults to false. */
  isActive?: boolean;
}

/**
 * IndustryCard component
 * 
 * A visually appealing card component designed to showcase industry-specific solutions or services.
 * It features a consistent layout with an icon, title, and a bulleted list of related items.
 * 
 * Features:
 * - Displays an industry icon and title in a header section
 * - Presents a list of industry-specific items with arrow bullet points
 * - Integrates `framer-motion` for a subtle fade-in-up animation on mount
 * - Supports an `isActive` prop for conditional styling, highlighting the current selection
 * - Uses glassmorphism styling for a modern UI appearance
 * - Utilizes `useMemo` for icon retrieval to optimize performance
 * - Responsive design with appropriate sizing for different screen widths
 * 
 * @param {IndustryCardProps} props - The properties passed to the component
 * @param {string} props.title - The title of the industry or category
 * @param {string[]} props.items - List of items or features related to the industry
 * @param {string} props.icon - Icon identifier for the card header
 * @param {boolean} [props.isActive=false] - Whether the card should be displayed in an active/highlighted state
 * @returns {JSX.Element} The rendered industry card component
 * 
 * @example
 * ```tsx
 * <IndustryCard
 *   title="Healthcare"
 *   icon="MedicalCrossIcon"
 *   items={[
 *     "Patient management systems",
 *     "Medical record digitization",
 *     "Appointment scheduling solutions",
 *     "Healthcare analytics dashboards"
 *   ]}
 *   isActive={true}
 * />
 * 
 * <IndustryCard
 *   title="Finance"
 *   icon="ChartIcon"
 *   items={[
 *     "Investment portfolio tracking",
 *     "Automated reporting systems",
 *     "Secure transaction processing",
 *     "Compliance management tools"
 *   ]}
 * />
 * ```
 */
const IndustryCardComponent = ({
  title,
  items,
  icon,
  isActive = false,
}: IndustryCardProps): JSX.Element => {
  const IconComponent = useMemo(() => getIcon(icon), [icon]);

  {/* Industry Card Container */}
  return (
    <motion.div
      variants={fadeInUp}
      className={`
        relative
        bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg 
        rounded-xl shadow-md p-6 
        transition-all duration-500 ease-in-out
        w-79 md:w-80 min-h-[17rem] h-auto 
        ${
          isActive
            ? 'shadow-lg border-2 border-medium-blue z-10'
            : 'shadow-md border-2 border-transparent filter blur-[1.5px] opacity-97'
        }
      `}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-full bg-blue-100">
          <IconComponent className="h-6 w-6 text-medium-blue-alt" />
        </div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.toLowerCase().replace(/\s+/g, '-')} className="flex items-start gap-2">
            <ArrowRight className="h-4 w-4 text-medium-blue-alt mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

/**
 * Memoized version of IndustryCardComponent for performance optimization.
 * Prevents unnecessary re-renders when parent components update but props remain the same.
 */
const IndustryCard = memo(IndustryCardComponent);

export default IndustryCard;