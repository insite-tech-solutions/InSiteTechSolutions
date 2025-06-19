/**
 * @fileoverview Custom React Hook for Device Orientation Detection and Scroll Restoration
 *
 * This hook detects the current device orientation (portrait or landscape) and provides
 * a mechanism to maintain the scroll position across orientation changes.
 * It is designed for client-side use in React applications.
 *
 * Features:
 * - Detects `portrait` or `landscape` orientation based on `window.innerWidth` and `window.innerHeight`.
 * - Stores and restores scroll position (`window.scrollY`) across orientation changes to prevent jarring jumps.
 * - Utilizes `useEffect` to listen for `orientationchange` and `resize` events.
 * - Includes debouncing for resize events to optimize performance.
 * - Provides a default orientation for Server-Side Rendering (SSR) environments.
 *
 * Technical Implementation:
 * - Compares `window.innerWidth` and `window.innerHeight` to determine orientation.
 * - Attaches and detaches event listeners for `orientationchange` and `resize`.
 * - Implements a timeout for scroll restoration to ensure elements are rendered before scrolling.
 * - Addresses potential issues with rapid resize events by debouncing.
 */

import { useState, useEffect } from 'react';

/**
 * Defines the possible device orientations.
 */
export type Orientation = 'portrait' | 'landscape';

/**
 * `useOrientation` Hook
 *
 * A custom React hook that provides the current device orientation and manages
 * scroll position across orientation changes. It is particularly useful for
 * ensuring a smooth user experience on mobile devices or resizable windows
 * where orientation shifts can disrupt the view.
 *
 * @returns {{ orientation: Orientation; scrollPosition: number }} An object containing:
 * - `orientation`: The current orientation of the device ('portrait' or 'landscape').
 * - `scrollPosition`: The scroll position recorded just before an orientation change, useful for restoration.
 *
 * @example
 * ```tsx
 * import { useOrientation } from '@/hooks/useOrientation';
 *
 * function MyResponsiveLayout() {
 *   const { orientation, scrollPosition } = useOrientation();
 *
 *   useEffect(() => {
 *     // Log scroll position after orientation change
 *     console.log(`Orientation changed to ${orientation}, last scroll was at ${scrollPosition}`);
 *   }, [orientation, scrollPosition]);
 *
 *   return (
 *     <div>
 *       <p>Device Orientation: {orientation}</p>
 *       {orientation === 'portrait' ? (
 *         <p>This content is optimized for portrait view.</p>
 *       ) : (
 *         <p>This content is optimized for landscape view.</p>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
export const useOrientation = (): { orientation: Orientation; scrollPosition: number } => {
  const [orientation, setOrientation] = useState<Orientation>(
    typeof window !== 'undefined' 
      ? window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      : 'portrait' // Default for SSR
  );
  
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleOrientationChange = () => {
      const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
      
      if (newOrientation !== orientation) {
        // Store scroll position
        setScrollPosition(window.scrollY);
        // Update orientation
        setOrientation(newOrientation);
      }
    };

    const orientationListener = () => {
      setTimeout(handleOrientationChange, 100);
    };
    
    // Handle both resize and orientationchange events
    window.addEventListener('orientationchange', orientationListener, { passive: true });
    
    // Also handle regular resize that might be orientation changes
    let prevWidth = window.innerWidth;
    let prevHeight = window.innerHeight;
    
    const handleResize = () => {
      // Only check on significant size changes
      const widthChanged = Math.abs(window.innerWidth - prevWidth) > 100;
      const heightChanged = Math.abs(window.innerHeight - prevHeight) > 100;
      
      if (widthChanged || heightChanged) {
        prevWidth = window.innerWidth;
        prevHeight = window.innerHeight;
        handleOrientationChange();
      }
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('orientationchange', orientationListener);
      window.removeEventListener('resize', handleResize);
    };
  }, [orientation]);
  
  // Restore scroll position after orientation change
  useEffect(() => {
    if (scrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 50);
    }
  }, [orientation, scrollPosition]);
  
  return { orientation, scrollPosition };
};