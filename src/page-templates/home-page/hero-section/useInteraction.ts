/**
 * @fileoverview useInteraction Hook for Hero Section
 *
 * This custom hook manages cursor interaction within a webpage element,
 * providing cursor position tracking, element references, and mouse event
 * handlers. Includes responsive positioning based on screen size.
 *
 * Features:
 * - Cursor position tracking relative to element
 * - Responsive initial positioning for different screen sizes
 * - Mouse event handling with proper cleanup
 * - Client-side mounting detection
 * - Breakpoint-aware positioning
 *
 * @module useInteraction
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import { CursorPosition } from './types';
import { useBreakpoint } from '@/hooks/useBreakpoint';

/**
 * Interface defining the return type of the `useInteraction` hook
 * 
 * @interface UseInteractionReturn
 * @property {CursorPosition} cursorPosition - The current cursor position relative to the element
 * @property {React.RefObject<HTMLDivElement>} webpageRef - A ref to attach to the target HTMLDivElement
 * @property {(e: React.MouseEvent<HTMLDivElement>) => void} handleMouseMove - Event handler for mouse move events
 * @property {boolean} isMounted - Whether the component has mounted on the client
 */
interface UseInteractionReturn {
  /**
   * The current cursor position relative to the element.
   */
  cursorPosition: CursorPosition;
  /**
   * A ref to attach to the target HTMLDivElement.
   */
  webpageRef: React.RefObject<HTMLDivElement>;
  /**
   * Event handler for mouse move events.
   *
   * @param e - The mouse event.
   */
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Whether the component has mounted on the client.
   */
  isMounted: boolean;
}

/**
 * useInteraction Hook
 * 
 * Custom hook to manage cursor interaction within a webpage element.
 * Provides cursor position tracking, element reference, and mouse event
 * handling with responsive positioning based on screen size.
 * 
 * The hook includes:
 * - Responsive initial positioning for mobile and desktop
 * - Cursor position calculation relative to element bounds
 * - Client-side mounting detection to prevent hydration issues
 * - Breakpoint-aware positioning updates
 * - Mouse move event handling with proper coordinate calculation
 * 
 * @returns {UseInteractionReturn} Object containing cursor position, element ref, event handlers, and mount status
 * 
 * @example
 * ```tsx
 * const { cursorPosition, webpageRef, handleMouseMove, isMounted } = useInteraction();
 * 
 * return (
 *   <div ref={webpageRef} onMouseMove={handleMouseMove}>
 *     <MagnifyingGlass cursorPosition={cursorPosition} />
 *   </div>
 * );
 * ```
 */
export const useInteraction = (): UseInteractionReturn => {
  const { breakpoint } = useBreakpoint();
  
  /**
   * Get initial cursor position based on screen size
   * 
   * Returns different initial positions for mobile and desktop devices
   * to ensure optimal magnifier placement across different screen sizes.
   * 
   * @returns {CursorPosition} Initial cursor position coordinates
   */
  const getInitialPosition = useCallback((): CursorPosition => {
    // Mobile devices (xs, sm) - position the magnifying glass more towards the center
    if (breakpoint === 'xs' || breakpoint === 'sm') {
      return { x: 5, y: 20 }; // Adjust these values as needed
    }
    // Desktop devices - keep the original position
    return { x: 10, y: 25 };
  }, [breakpoint]);

  const [cursorPosition, setCursorPosition] = useState<CursorPosition>(getInitialPosition());
  const [isMounted, setIsMounted] = useState(false);
  const webpageRef = useRef<HTMLDivElement>(null);

  // Ensure we only run on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update initial position when breakpoint changes
  useEffect(() => {
    if (isMounted) {
      setCursorPosition(getInitialPosition());
    }
  }, [breakpoint, isMounted, getInitialPosition]);

  /**
   * Handles mouse move events within the target element
   * 
   * Calculates cursor position relative to the element bounds
   * and updates the cursor position state. Only processes events
   * when the component is mounted to prevent hydration issues.
   * 
   * @param {React.MouseEvent<HTMLDivElement>} e - The mouse event
   */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      if (webpageRef.current && isMounted) {
        const rect = webpageRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    },
    [isMounted]
  );

  return { cursorPosition, webpageRef, handleMouseMove, isMounted };
};
