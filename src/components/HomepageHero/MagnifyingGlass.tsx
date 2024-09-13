// MagnifyingGlass.tsx

"use client";

import React from 'react';
import { CursorPosition } from './types';
import styles from './MagnifyingGlass.module.css';

interface MagnifyingGlassProps {
  cursorPosition: CursorPosition;
}

/**
 * MagnifyingGlass component displays a magnifying glass icon
 * that follows the cursor position.
 */
const MagnifyingGlass = ({ cursorPosition }: MagnifyingGlassProps): JSX.Element => {
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
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.magnifierHandle}></div>
      </div>
    </div>
  );
};

export default MagnifyingGlass;
