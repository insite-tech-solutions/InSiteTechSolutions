// useInteraction.ts

import { useState, useRef, useCallback } from 'react';
import { CursorPosition } from './types';

interface UseInteractionReturn {
  cursorPosition: CursorPosition;
  webpageRef: React.RefObject<HTMLDivElement>;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Custom hook to manage cursor interaction within a webpage element.
 * Returns the cursor position relative to the element,
 * a ref to attach to the element, and a mouse move handler.
 */
export const useInteraction = (): UseInteractionReturn => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const webpageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (webpageRef.current) {
      const rect = webpageRef.current.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  return { cursorPosition, webpageRef, handleMouseMove };
};
