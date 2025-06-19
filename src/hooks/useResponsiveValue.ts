/**
 * @fileoverview Custom React Hook for Responsive Value Selection
 *
 * This hook provides a mechanism to select a value based on the current responsive breakpoint,
 * utilizing Tailwind CSS's default breakpoint system. It allows for defining different values
 * for various screen sizes and includes a fallback mechanism for robustness.
 *
 * Features:
 * - Dynamically returns a value based on the active breakpoint detected by `useBreakpoint`.
 * - Supports explicit value definitions for 'xs', 'sm', 'md', 'lg', 'xl', and '2xl' breakpoints.
 * - Implements a fallback logic: if a value is not defined for the current breakpoint,
 *   it attempts to find the next *larger* breakpoint's value before falling back to a default.
 * - Ensures a graceful fallback to a required `default` value if no specific breakpoint match is found.
 *
 * Technical Implementation:
 * - Relies on `useBreakpoint` to determine the current screen size.
 * - Uses a predefined order of breakpoints (`BREAKPOINT_ORDER`) for consistent fallback behavior.
 * - Iterates through larger breakpoints to find an available value.
 */

import { useBreakpoint, Breakpoint } from './useBreakpoint';

// Ordered breakpoints from smallest to largest for fallback logic
const BREAKPOINT_ORDER: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

/**
 * Defines the configuration object for `useResponsiveValue`.
 * It allows specifying different values for various breakpoints and requires a default value.
 *
 * @template T The type of the value to be returned.
 * @property {T} [xs] - Value for extra-small screens (under 640px).
 * @property {T} [sm] - Value for small screens (640px and up).
 * @property {T} [md] - Value for medium screens (768px and up).
 * @property {T} [lg] - Value for large screens (1024px and up).
 * @property {T} [xl] - Value for extra-large screens (1280px and up).
 * @property {T} ['2xl'] - Value for 2x extra-large screens (1536px and up).
 * @property {T} default - The fallback value to use if no specific breakpoint match or larger fallback is found.
 */
type ResponsiveConfig<T> = {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
  default: T;
};

/**
 * `useResponsiveValue` Hook
 *
 * A custom React hook that intelligently returns a value based on the current
 * responsive breakpoint. This hook is particularly useful for adapting UI elements,
 * content, or behavior to different screen sizes in a declarative manner.
 * It provides a flexible way to manage responsive design without complex conditional rendering logic.
 *
 * @template T The type of the value that the hook will return.
 * @param {ResponsiveConfig<T>} config - An object specifying values for different breakpoints
 *                                       and a required `default` fallback value.
 * @returns {T} The responsive value corresponding to the current breakpoint, or a fallback value.
 *
 * @example
 * ```tsx
 * import { useResponsiveValue } from '@/hooks/useResponsiveValue';
 *
 * function MyResponsiveText() {
 *   const fontSize = useResponsiveValue({
 *     xs: '14px',
 *     sm: '16px',
 *     md: '18px',
 *     lg: '20px',
 *     default: '16px',
 *   });
 *
 *   return <p style={{ fontSize }}>This text adapts its size responsively.</p>;
 * }
 *
 * function MyResponsiveImage() {
 *   const imageUrl = useResponsiveValue({
 *     sm: '/images/hero-sm.jpg',
 *     md: '/images/hero-md.jpg',
 *     lg: '/images/hero-lg.jpg',
 *     default: '/images/hero-fallback.jpg',
 *   });
 *
 *   return <img src={imageUrl} alt="Responsive Hero" />;
 * }
 * ```
 */
export const useResponsiveValue = <T>(config: ResponsiveConfig<T>): T => {
  const { breakpoint } = useBreakpoint();
  
  // Return exact match if provided
  if (config[breakpoint]) return config[breakpoint]!;
  
  const breakpoints = BREAKPOINT_ORDER;
  const currentIndex = breakpoints.indexOf(breakpoint);
  
  // Fallback: find next larger breakpoint value
  for (let i = currentIndex + 1; i < breakpoints.length; i++) {
    const largerBreakpoint = breakpoints[i];
    if (config[largerBreakpoint]) return config[largerBreakpoint]!;
  }
  
  // Fallback to default if no larger breakpoint provided
  return config.default;
};