/**
 * @fileoverview Service Badge Component
 *
 * A reusable badge component for displaying service categories with consistent
 * styling and colors across the application. Can be rendered as a clickable link
 * when an href is provided.
 */

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  getServiceColor,
  getServiceTextColor,
  getBadgeSizeClasses,
  ServiceBadgeProps
} from '@/utils/service-badges';

/**
 * ServiceBadge component
 *
 * Renders a badge for service categories with consistent styling and colors.
 * Can be rendered as a clickable link when href is provided.
 * Uses the unified service badge system for consistent appearance across components.
 *
 * @param {ServiceBadgeProps} props - The component props
 * @param {string} props.category - The service category name
 * @param {string} [props.className] - Additional CSS classes
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size of the badge
 * @param {string} [props.href] - Optional URL to make the badge clickable
 * @returns {JSX.Element} The rendered service badge
 *
 * @example
 * ```tsx
 * <ServiceBadge category="Custom Software" />
 * <ServiceBadge category="Web & App Development" size="lg" />
 * <ServiceBadge category="AI & Automation" className="my-2" />
 * <ServiceBadge category="Custom Software" href="/services/custom-software-solutions" />
 * ```
 */
const ServiceBadge: React.FC<ServiceBadgeProps> = ({
  category,
  className,
  size = 'md',
  href
}) => {
  const bgColor = getServiceColor(category);
  const textColor = getServiceTextColor(category);
  const sizeClasses = getBadgeSizeClasses(size);

  const badgeClasses = cn(
    'inline-flex items-center justify-center rounded-full font-medium shadow-sm transition-all duration-200',
    textColor,
    sizeClasses,
    href && 'hover:shadow-xs cursor-pointer hover:brightness-95',
    className
  );

  const badgeContent = (
    <span
      className={badgeClasses}
      style={{ backgroundColor: bgColor }}
      {...(href && { 'aria-label': `Learn more about ${category} services` })}
    >
      {category}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {badgeContent}
      </Link>
    );
  }

  return badgeContent;
};

export default ServiceBadge; 