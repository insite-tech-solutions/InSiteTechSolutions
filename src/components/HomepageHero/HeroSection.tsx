"use client";

import React from 'react';
import MiniWebPage from './MiniWebPage';
import CodeWebPage from './CodeWebPage';
import MagnifyingGlass from './MagnifyingGlass';
import { useInteraction } from './useInteraction';
import { useRevealEffect } from './useRevealEffect';

const HeroSection: React.FC = () => {
  const { cursorPosition, webpageRef, handleMouseMove } = useInteraction();
  const { revealStyle } = useRevealEffect(cursorPosition);

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Text content */}
        <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Innovative Website and Software Solutions
          </h1>
          <p className="text-xl">
            From simple web design to complex software applications, InSite Tech provides the expertise to tailor solutions to all your tech-related needs.
          </p>
        </div>

        {/* Right side - Interactive components */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div 
            className="relative w-full max-w-md"
            ref={webpageRef}
            onMouseMove={handleMouseMove}
          >
            <MiniWebPage />
            <MagnifyingGlass cursorPosition={cursorPosition} />
            <CodeWebPage revealStyle={revealStyle} cursorPosition={cursorPosition} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;