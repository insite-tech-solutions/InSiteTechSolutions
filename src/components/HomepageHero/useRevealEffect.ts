import { useMemo } from 'react';
import { CursorPosition } from './types';

export const useRevealEffect = (cursorPosition: CursorPosition) => {
  const revealStyle = useMemo(() => ({
    transform: `translate(${-cursorPosition.x}px, ${-cursorPosition.y}px)`,
    width: '200%',
    height: '200%'
  }), [cursorPosition]);

  return { revealStyle };
};