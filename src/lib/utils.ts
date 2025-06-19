/**
 * @fileoverview General Utility Functions for Tailwind CSS and DOM Manipulation
 *
 * This module consolidates various utility functions used throughout the project,
 * primarily for streamlining Tailwind CSS class management and basic DOM interactions.
 * These functions are designed to be reusable and enhance code readability and maintainability.
 *
 * Features:
 * - `cn`: A powerful utility for conditionally combining and merging Tailwind CSS class names,
 *         handling conflicts gracefully and ensuring correct class application.
 * - `getHeaderHeight`: A helper function to dynamically retrieve the height of the main header element,
 *                     useful for layout calculations and scroll offsets.
 *
 * Technical Implementation:
 * - `cn` leverages `clsx` for conditional class joining and `tailwind-merge` for intelligent Tailwind class merging.
 * - `getHeaderHeight` directly queries the DOM for the 'header' element and its `offsetHeight` property.
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, intelligently merging Tailwind CSS classes.
 * This utility helps in building dynamic class lists for React components while ensuring
 * that Tailwind's utility classes are applied correctly without conflicts.
 *
 * @param {ClassValue[]} inputs - An array of class strings, objects, or arrays to be merged.
 *                                 `ClassValue` is a type from `clsx` that allows flexible input types.
 * @returns {string} A single string containing the merged and optimized class names.
 *
 * @example
 * ```tsx
 * import { cn } from '@/lib/utils';
 *
 * function MyButton({ isActive }: { isActive: boolean }) {
 *   return (
 *     <button
 *       className={cn(
 *         'p-2', 'rounded',
 *         isActive && 'bg-blue-500 text-white',
 *         !isActive && 'bg-gray-200 text-gray-800',
 *         'hover:opacity-80',
 *       )}
 *     >
 *       Click Me
 *     </button>
 *   );
 * }
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Retrieves the computed height of the HTML `<header>` element from the DOM.
 * This function is useful for scenarios where dynamic header height is needed
 * for layout adjustments, such as calculating scroll offsets to place content below the header.
 *
 * @returns {number} The `offsetHeight` of the first `<header>` element found in the document,
 *                    or `0` if no header element is found. The height is returned in pixels.
 *
 * @example
 * ```typescript
 * import { getHeaderHeight } from '@/lib/utils';
 *
 * // In a component or effect that needs header height:
 * const headerOffset = getHeaderHeight();
 * console.log(`Header height: ${headerOffset}px`);
 *
 * // Usage for scrolling to an element with offset:
 * const element = document.getElementById('my-section');
 * if (element) {
 *   window.scrollTo({
 *     top: element.getBoundingClientRect().top + window.scrollY - getHeaderHeight(),
 *     behavior: 'smooth',
 *   });
 * }
 * ```
 */
export const getHeaderHeight = () => {
  const header = document.querySelector('header');
  return header ? header.offsetHeight : 0;
};