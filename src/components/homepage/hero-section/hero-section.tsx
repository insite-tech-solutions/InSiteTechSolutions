// HeroSection.tsx

"use client";

import React from 'react';
import MiniWebPage from './mini-webpage';
import CodeWebPage from './code-webpage';
import MagnifyingGlass from './magnifying-glass';
import { useInteraction } from './useInteraction';
import { useRevealEffect } from './useRevealEffect';
import styles from './hero-section.module.css';

/**
 * Represents the main hero section of the homepage,
 * including text content and interactive components.
 *
 * @returns {JSX.Element} The rendered hero section component.
 */
const HeroSection = (): JSX.Element => {
  const { cursorPosition, webpageRef, handleMouseMove } = useInteraction();
  const { revealStyle } = useRevealEffect(cursorPosition);

  return (
    <section className={`${styles.bgPrimary} ${styles.bgDecor} ${styles.heroHeight} flex items-center justify-center p-8`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Text content */}
        <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Innovative Website and Software Solutions
          </h1>
          <p className="text-xl">
            From simple web design to complex software applications, InSite Tech provides the
            expertise to tailor solutions to all your tech-related needs.
          </p>
        </div>

        {/* Right side - Interactive components */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div
            className="relative w-full max-w-lg"
            ref={webpageRef}
            onMouseMove={handleMouseMove}
            aria-label="Interactive code reveal area"
          >
            <MiniWebPage />
            <MagnifyingGlass cursorPosition={cursorPosition} />
            <CodeWebPage revealStyle={revealStyle} cursorPosition={cursorPosition} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
