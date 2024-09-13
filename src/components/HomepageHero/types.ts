// src/components/HeroSection/types.ts

import { ReactNode } from 'react';

// Constants
export const MAGNIFIER_SIZE = 100;

/**
 * Represents the cursor position within an element.
 */
export interface CursorPosition {
  x: number;
  y: number;
}

// Props for the main HeroSection component
export interface HeroSectionProps {
  // Add any props here if needed in the future
}

// Props for the MiniWebpage component
export interface MiniWebpageProps {
  // Add any props here if needed
}

// Props for the CodeWebpage component
export interface CodeWebpageProps {
  // Add any props here if needed
}

// Props for the Magnifier component
export interface MagnifierProps {
    cursorPosition: CursorPosition;
    children: ReactNode;
  }


export interface UseMagnifierReturn {
    cursorPosition: CursorPosition;
    handleMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
    handleMouseLeave: () => void;
}

// Return type for the useMagnifier hook
/*
export interface UseMagnifierReturn {
  cursorPosition: CursorPosition;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
}
*/