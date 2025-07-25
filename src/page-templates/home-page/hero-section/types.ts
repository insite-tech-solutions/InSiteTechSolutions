/**
 * @fileoverview Type Definitions for Hero Section Components
 *
 * This module provides TypeScript interfaces and types for the hero section
 * components including cursor position tracking, component props, and hook
 * return types.
 *
 * Features:
 * - Cursor position interface for mouse tracking
 * - Component prop interfaces for extensibility
 * - Hook return type definitions
 * - Constants for component sizing
 *
 * @module HeroSectionTypes
 */

import { ReactNode } from 'react';

/**
 * Size of the magnifier in pixels
 * 
 * Defines the dimensions of the magnifying glass component.
 * Used for consistent sizing across the hero section.
 */
export const MAGNIFIER_SIZE = 100;

/**
 * Represents the cursor position within an element
 * 
 * Defines the coordinates for tracking mouse position relative
 * to a specific element. Used by magnifier and reveal effects.
 * 
 * @interface CursorPosition
 * @property {number} x - The horizontal coordinate (X-axis) of the cursor position
 * @property {number} y - The vertical coordinate (Y-axis) of the cursor position
 */
export interface CursorPosition {
  /**
   * The horizontal coordinate (X-axis) of the cursor position.
   */
  x: number;
  /**
   * The vertical coordinate (Y-axis) of the cursor position.
   */
  y: number;
}

/**
 * Props interface for the main HeroSection component
 * 
 * Currently empty but defined for future extensibility.
 * Allows for adding props like custom content, styling options,
 * or configuration parameters.
 * 
 * @interface HeroSectionProps
 */
export interface HeroSectionProps {
  // Add any props here if needed in the future
}

/**
 * Props interface for the MiniWebpage component
 * 
 * Currently empty but defined for future extensibility.
 * Could include props for custom content, styling, or
 * interactive behavior configuration.
 * 
 * @interface MiniWebpageProps
 */
export interface MiniWebpageProps {
  // Add any props here if needed
}

/**
 * Props interface for the CodeWebpage component
 * 
 * Currently empty but defined for future extensibility.
 * Could include props for custom code content, styling,
 * or reveal effect configuration.
 * 
 * @interface CodeWebpageProps
 */
export interface CodeWebpageProps {
  // Add any props here if needed
}

/**
 * Props interface for the Magnifier component
 * 
 * Defines the props required for the magnifier component,
 * including cursor position and child elements.
 * 
 * @interface MagnifierProps
 * @property {CursorPosition} cursorPosition - The current cursor position coordinates
 * @property {ReactNode} children - Child elements to be rendered within the magnifier
 */
export interface MagnifierProps {
    cursorPosition: CursorPosition;
    children: ReactNode;
  }

/**
 * Return type for the useMagnifier hook
 * 
 * Defines the structure of the object returned by the useMagnifier hook,
 * including cursor position and event handlers for mouse interactions.
 * 
 * @interface UseMagnifierReturn
 * @property {CursorPosition} cursorPosition - The current cursor position coordinates
 * @property {(e: React.MouseEvent<HTMLElement>) => void} handleMouseMove - Mouse move event handler
 * @property {() => void} handleMouseLeave - Mouse leave event handler
 */
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