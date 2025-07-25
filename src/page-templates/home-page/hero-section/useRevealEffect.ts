/**
 * @fileoverview useRevealEffect Hook for Hero Section
 *
 * This custom hook computes the style for the reveal effect based on cursor position.
 * Provides a memoized style object that creates a dynamic reveal animation
 * for code content overlay effects.
 *
 * Features:
 * - Dynamic style computation based on cursor position
 * - Memoized calculations for performance optimization
 * - Hydration-safe mounting detection
 * - Transform-based positioning for smooth animations
 *
 * @module useRevealEffect
 */

import { useMemo } from 'react';
import type { CSSProperties } from 'react';
import { CursorPosition } from './types';

/**
 * Interface defining the return type of the `useRevealEffect` hook
 * 
 * @interface UseRevealEffectReturn
 * @property {CSSProperties} revealStyle - The style object to be applied for the reveal effect
 */
interface UseRevealEffectReturn {
  /**
   * The style object to be applied for the reveal effect.
   */
  revealStyle: CSSProperties;
}

/**
 * useRevealEffect Hook
 * 
 * Custom hook to compute the style for the reveal effect based on cursor position.
 * Returns a memoized style object that creates a dynamic reveal animation
 * for code content overlay effects.
 * 
 * The hook provides:
 * - Dynamic transform calculations based on cursor coordinates
 * - Memoized style objects for performance optimization
 * - Hydration-safe mounting detection to prevent SSR issues
 * - Responsive positioning for smooth reveal animations
 * 
 * The reveal effect works by applying a negative transform that moves
 * the content in the opposite direction of the cursor, creating a
 * "magnifying glass" effect that reveals underlying content.
 * 
 * @param {CursorPosition} cursorPosition - The current cursor position within the element
 * @param {boolean} isMounted - Whether the component has mounted on the client
 * @returns {UseRevealEffectReturn} Object containing the computed reveal style
 * 
 * @example
 * ```tsx
 * const { revealStyle } = useRevealEffect(cursorPosition, isMounted);
 * 
 * return (
 *   <div style={revealStyle}>
 *     <CodeContent />
 *   </div>
 * );
 * ```
 */
export const useRevealEffect = (cursorPosition: CursorPosition, isMounted: boolean): UseRevealEffectReturn => {
  /**
   * Computes the style for the reveal effect based on the cursor position
   * 
   * Memoizes the result to prevent unnecessary recalculations and
   * only calculates when mounted to prevent hydration mismatches.
   * 
   * The style includes:
   * - Transform: Negative cursor position for reveal effect
   * - Width/Height: 200% to ensure content coverage
   * - Fallback: Default position when not mounted
   * 
   * @returns {CSSProperties} Computed style object for reveal effect
   */
  const revealStyle = useMemo<CSSProperties>(
    () => {
      if (!isMounted) {
        return {
          transform: 'translate(0px, 0px)',
          width: '200%',
          height: '200%',
        };
      }
      
      return {
        transform: `translate(${-cursorPosition.x}px, ${-cursorPosition.y}px)`,
        width: '200%',
        height: '200%',
      };
    },
    [cursorPosition.x, cursorPosition.y, isMounted]
  );

  return { revealStyle };
};
