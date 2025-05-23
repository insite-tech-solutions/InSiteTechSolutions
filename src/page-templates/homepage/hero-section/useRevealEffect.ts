// useRevealEffect.ts

import { useMemo } from 'react';
import { CursorPosition } from './types';

/**
 * Interface defining the return type of the `useRevealEffect` hook.
 */
interface UseRevealEffectReturn {
  /**
   * The style object to be applied for the reveal effect.
   */
  revealStyle: React.CSSProperties;
}

/**
 * Custom hook to compute the style for the reveal effect based on cursor position.
 * Returns a style object to be applied to the code reveal component.
 *
 * @param cursorPosition - The current cursor position within the element.
 * @returns An object containing `revealStyle` for the reveal effect.
 */
export const useRevealEffect = (cursorPosition: CursorPosition): UseRevealEffectReturn => {
  /**
   * Computes the style for the reveal effect based on the cursor position.
   * Memoizes the result to prevent unnecessary recalculations.
   */
  const revealStyle = useMemo<React.CSSProperties>(
    () => ({
      transform: `translate(${-cursorPosition.x}px, ${-cursorPosition.y}px)`,
      width: '200%',
      height: '200%',
    }),
    [cursorPosition.x, cursorPosition.y]
  );

  return { revealStyle };
};
