import { useState, useRef, useCallback } from 'react';
import { CursorPosition } from './types';

export const useInteraction = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const webpageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (webpageRef.current) {
      const rect = webpageRef.current.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  }, []);

  return { cursorPosition, webpageRef, handleMouseMove };
};