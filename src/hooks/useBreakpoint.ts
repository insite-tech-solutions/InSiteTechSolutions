/**
 * @fileoverview Custom React Hook for Responsive Breakpoint Detection
 *
 * This hook provides the current responsive breakpoint and window width,
 * aligning with Tailwind CSS's default breakpoint system. It's designed
 * for client-side use to enable responsive logic in React components.
 *
 * Features:
 * - Detects the current Tailwind CSS breakpoint ('xs', 'sm', 'md', 'lg', 'xl', '2xl').
 * - Provides the current `window.innerWidth` for precise responsive control.
 * - Utilizes `useLayoutEffect` for initial synchronous measurement to prevent FOUC.
 * - Employs `useEffect` with a debounced resize event listener for performance optimization.
 * - Ensures server-side rendering compatibility by checking for `window` existence.
 *
 * Technical Implementation:
 * - Maps `window.innerWidth` to predefined Tailwind breakpoint values.
 * - Uses a debounce mechanism (`setTimeout`) to limit resize event processing.
 * - Cleans up event listeners on component unmount.
 */

import { useState, useEffect, useLayoutEffect } from 'react';

/**
 * Defines the possible responsive breakpoints based on Tailwind CSS's default configuration.
 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * `useBreakpoint` Hook
 *
 * A custom React hook that provides the current responsive breakpoint and the current
 * window width. It dynamically updates these values based on window resize events,
 * mapping the `window.innerWidth` to a predefined set of breakpoints that mirror
 * Tailwind CSS's default responsive sizes.
 *
 * This hook is ideal for components that need to adjust their behavior or rendering
 * based on the screen size, providing a consistent way to work with breakpoints
 * across the application.
 *
 * @returns {{ breakpoint: Breakpoint; width: number }} An object containing:
 * - `breakpoint`: The current active breakpoint ('xs', 'sm', 'md', 'lg', 'xl', '2xl').
 * - `width`: The current `window.innerWidth` in pixels.
 *
 * @example
 * ```tsx
 * import { useBreakpoint } from '@/hooks/useBreakpoint';
 *
 * function MyResponsiveComponent() {
 *   const { breakpoint, width } = useBreakpoint();
 *
 *   return (
 *     <div>
 *       <p>Current Breakpoint: {breakpoint}</p>
 *       <p>Window Width: {width}px</p>
 *       {breakpoint === 'lg' && <p>This content only shows on large screens.</p>}
 *     </div>
 *   );
 * }
 * ```
 */
export const useBreakpoint = (): { breakpoint: Breakpoint; width: number } => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('md');
  const [width, setWidth] = useState<number>(0);
  
  const updateBreakpoint = () => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
    setBreakpoint(
      currentWidth < 640 ? 'xs' :
      currentWidth < 768 ? 'sm' :
      currentWidth < 1024 ? 'md' :
      currentWidth < 1280 ? 'lg' :
      currentWidth < 1536 ? 'xl' :
      '2xl'
    );
  };

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    updateBreakpoint();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let timerId: number;
    const handleResize = () => {
      clearTimeout(timerId);
      timerId = window.setTimeout(updateBreakpoint, 100);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timerId);
    };
  }, []);
  
  return { breakpoint, width };
};