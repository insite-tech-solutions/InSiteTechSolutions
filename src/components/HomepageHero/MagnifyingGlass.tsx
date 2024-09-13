"use client";

import React from 'react';
import { CursorPosition } from './types';

interface MagnifyingGlassProps {
  cursorPosition: CursorPosition;
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({ cursorPosition }) => {
  const MAGNIFIER_SIZE = 100;

  return (
    <div 
      className="magnifier-container"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        width: `${MAGNIFIER_SIZE}px`,
        height: `${MAGNIFIER_SIZE}px`,
      }}
    >
      <div className="magnifier-content">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="magnifier-handle"></div>
      </div>
      <style jsx>{`
        .magnifier-container {
          position: absolute;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .magnifier-content {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .circle-1, .circle-2, .circle-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
        .circle-1 {
          width: 92%;
          height: 92%;
          background-color: #929699;
        }
        .circle-2 {
          width: 89%;
          height: 89%;
          background-color: #FFFFFF;
        }
        .circle-3 {
          width: 81%;
          height: 81%;
          background-color: #1472bb;
        }
        .magnifier-handle {
          position: absolute;
          bottom: -42%;
          right: -9%;
          width: 14%;
          height: 59%;
          background-color: #929699;
          transform: rotate(-40deg);
          border-radius: 5px;
        }
        .magnifier-handle::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 59%;
          bottom: 25%;
          left: 0;
          background-color: #1472bb;
        }
      `}</style>
    </div>
  );
};

export default MagnifyingGlass;