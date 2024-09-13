// useRevealEffect.ts

import { useMemo } from 'react';
import { CursorPosition } from './types';

interface UseRevealEffectReturn {
  revealStyle: React.CSSProperties;
}

/**
 * Custom hook to compute the style for the reveal effect based on cursor position.
 * Returns a style object to be applied to the code reveal component.
 * @param cursorPosition - The current cursor position within the element.
 */
export const useRevealEffect = (cursorPosition: CursorPosition): UseRevealEffectReturn => {
  const revealStyle = useMemo(
    () => ({
      transform: `translate(${-cursorPosition.x}px, ${-cursorPosition.y}px)`,
      width: '200%',
      height: '200%',
    }),
    [cursorPosition]
  );

  return { revealStyle };
};
