// useInteraction.ts

import { useState, useRef, useCallback } from 'react';
import { CursorPosition } from './types';

/**
 * Interface defining the return type of the `useInteraction` hook.
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
}

/**
 * Custom hook to manage cursor interaction within a webpage element.
 * Provides the cursor position relative to the element,
 * a ref to attach to the element, and a mouse move event handler.
 *
 * @returns An object containing `cursorPosition`, `webpageRef`, and `handleMouseMove`.
 */
export const useInteraction = (): UseInteractionReturn => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const webpageRef = useRef<HTMLDivElement>(null);

  /**
   * Handles mouse move events within the target element.
   *
   * @param e - The mouse event.
   */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      if (webpageRef.current) {
        const rect = webpageRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    },
    []
  );

  return { cursorPosition, webpageRef, handleMouseMove };
};
