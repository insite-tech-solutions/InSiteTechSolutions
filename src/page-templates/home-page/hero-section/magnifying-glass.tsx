/**
 * @fileoverview Magnifying Glass Component for Hero Section
 *
 * This component creates a visual magnifying glass that follows the cursor
 * position. It provides a realistic magnifier effect with concentric circles
 * and a handle, enhancing the interactive experience of the hero section.
 *
 * Features:
 * - Cursor-following magnifier with smooth positioning
 * - Multi-layered circular design with realistic appearance
 * - Handle with 3D styling and accent elements
 * - Performance optimizations with memo
 * - Accessibility considerations
 *
 * @module MagnifyingGlass
 */

"use client";

import { memo } from 'react';
import { CursorPosition } from './types';
import styles from './magnifying-glass.module.css';

/**
 * Size of the magnifier in pixels
 * 
 * Defines the dimensions of the magnifying glass component.
 * Used for consistent sizing across the application.
 */
const MAGNIFIER_SIZE = 100;

/**
 * Props interface for the MagnifyingGlass component
 * 
 * @interface MagnifyingGlassProps
 * @property {CursorPosition} cursorPosition - The current cursor position coordinates
 */
interface MagnifyingGlassProps {
  /**
   * The current cursor position within the element.
   */
  cursorPosition: CursorPosition;
}

/**
 * MagnifyingGlass Component
 * 
 * Displays a visual magnifying glass that follows the cursor position.
 * Creates a realistic magnifier effect with concentric circles and a handle
 * that enhances the interactive experience of the hero section.
 * 
 * The component renders a multi-layered circular design with:
 * - Outer frame (gray circle)
 * - Middle border (white circle) 
 * - Inner lens (blue circle)
 * - Handle with accent styling
 * 
 * The magnifier is positioned absolutely and follows the cursor with
 * smooth positioning while maintaining accessibility.
 * 
 * @param {MagnifyingGlassProps} props - Component props
 * @param {CursorPosition} props.cursorPosition - Current cursor position coordinates
 * @returns {JSX.Element} Rendered magnifying glass component
 * 
 * @example
 * ```tsx
 * <MagnifyingGlass 
 *   cursorPosition={{ x: 150, y: 200 }}
 * />
 * ```
 */
const MagnifyingGlass = memo(function MagnifyingGlass({ cursorPosition }: MagnifyingGlassProps): JSX.Element {
  // Validate cursor position to prevent hydration mismatches
  const isValidPosition = cursorPosition.x >= 0 && cursorPosition.y >= 0;
  const left = isValidPosition ? `${cursorPosition.x}px` : '0px';
  const top = isValidPosition ? `${cursorPosition.y}px` : '0px';

  return (
    <div
      className={styles.magnifierContainer}
      style={{
        left,
        top,
        width: `${MAGNIFIER_SIZE}px`,
        height: `${MAGNIFIER_SIZE}px`,
      }}
      aria-hidden="true"
    >
      <div className={styles.magnifierContent}>
        {/* Outer frame circle */}
        <div className={`${styles.circle1} shadow-xl`}></div>
        {/* Middle border circle */}
        <div className={styles.circle2}></div>
        {/* Inner lens circle */}
        <div className={styles.circle3}></div>
        {/* Magnifier handle with shadow */}
        <div className={`${styles.magnifierHandle} shadow-xl`}></div>
      </div>
    </div>
  );
});

export default MagnifyingGlass;
