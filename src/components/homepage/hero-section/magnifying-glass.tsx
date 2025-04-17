// MagnifyingGlass.tsx

"use client";

import React from 'react';
import { CursorPosition } from './types';
import styles from './magnifying-glass.module.css';

/**
 * Props interface for the MagnifyingGlass component.
 */
interface MagnifyingGlassProps {
  /**
   * The current cursor position within the element.
   */
  cursorPosition: CursorPosition;
}

/**
 * Displays a magnifying glass icon that follows the cursor position.
 *
 * @param props - The props for the component.
 * @returns The rendered MagnifyingGlass component.
 */
const MagnifyingGlass = (props: MagnifyingGlassProps): JSX.Element => {
  const { cursorPosition } = props;
  const MAGNIFIER_SIZE = 100;

  return (
    <div
      className={styles.magnifierContainer}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        width: `${MAGNIFIER_SIZE}px`,
        height: `${MAGNIFIER_SIZE}px`,
      }}
      aria-hidden="true"
    >
      <div className={styles.magnifierContent}>
        <div className={`${styles.circle1} shadow-xl`}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={`${styles.magnifierHandle} shadow-xl`}></div>
      </div>
    </div>
  );
};

export default MagnifyingGlass;
