/**
 * @fileoverview Inline Stat Component
 * 
 * This component displays animated inline statistics with count-up animation
 * triggered by scroll visibility. Features customizable prefixes/suffixes
 * and smooth Framer Motion animations for enhanced user engagement.
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

/**
 * Animation variant for fade-in-up motion effect
 * Used when the stat component scrolls into view
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/**
 * Props interface for the InlineStat component
 */
interface InlineStatProps {
  /** The target number to animate to */
  value: number;
  /** Optional suffix text (e.g., "%", "h", "+") */
  suffix?: string;
  /** Optional prefix text (e.g., "$", "~") */
  prefix?: string;
}

/**
 * InlineStat Component
 * 
 * Displays an animated statistic that counts up from 0 to the target value
 * when it scrolls into view. Designed for embedding within text content
 * to highlight key metrics and achievements.
 * 
 * Features:
 * - Scroll-triggered count-up animation
 * - Customizable prefixes and suffixes
 * - Framer Motion fade-in effect
 * - Accessibility support with aria-live
 * - Performance optimization with intersection observer
 * - Once-only animation to prevent re-triggering
 * - Smooth easing and timing controls
 * 
 * @param {InlineStatProps} props - Component props
 * @param {number} props.value - The number to animate to
 * @param {string} [props.suffix=''] - Optional suffix (e.g., "%", "h")
 * @param {string} [props.prefix=''] - Optional prefix (e.g., "$")
 * @returns {JSX.Element} Animated inline statistic component
 * 
 * @example
 * ```tsx
 * // Usage within text content
 * <p>
 *   We've completed over <InlineStat value={500} suffix="+" /> projects
 *   with <InlineStat value={98} suffix="%" /> client satisfaction.
 * </p>
 * ```
 */
export function InlineStat({ 
  value, 
  suffix = '', 
  prefix = '' 
}: InlineStatProps): JSX.Element {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  
  // Reference element to detect scroll visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Handle count-up animation when component scrolls into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Animation configuration
      const duration = 2000; // 2 seconds total animation time
      const steps = 60; // Number of animation steps (60fps)
      const increment = value / steps;
      let current = 0;

      // Interval-based count-up animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      // Cleanup timer on unmount
      return () => clearInterval(timer);
    }
  }, [isInView, value, controls]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="text-2xl font-bold text-medium-blue inline-flex items-center"
      aria-live="polite"
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}