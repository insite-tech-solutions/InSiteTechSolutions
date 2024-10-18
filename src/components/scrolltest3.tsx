// components/ScrollAnimationSection.tsx

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationSection: React.FC = () => {
  // The array of words to animate
  const text_right = React.useMemo(
    () => [
      'Digital branding',
      'Data Analytics',
      'AI integration',
      'Training',
      'Tech related needs',
      'Tech',
    ],
    []
  );

  // References to the word elements
  const wordRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Reference to the section element
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a GSAP context for scoping and cleanup
    const ctx = gsap.context(() => {
      // Create a timeline for the animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current, // Element that triggers the animation
          start: 'top top', // Start when the top of the trigger hits the top of the viewport
          end: `+=${text_right.length * 100}%`, // End after scrolling 100% per word
          scrub: true, // Smoothly scrubs the animation based on scroll position
          pin: true, // Pins the trigger element during the animation
          anticipatePin: 1, // Anticipate pinning for smoother scrolling
        },
      });

      // For each word, add the animations to the timeline
      text_right.forEach((word, index) => {
        const wordEl = wordRefs.current[index];
        if (wordEl) {
          tl.fromTo(
            wordEl,
            { xPercent: -100, opacity: 1 },
            { xPercent: 10, opacity: 1, duration: 1.5 }
          )
            .to({}, { duration: 1 }) // Pause
            .to(wordEl, { xPercent: -100, opacity: 1, duration: 1.5 });
        }
      });
    }, sectionRef);

    // Cleanup function to remove animations when component unmounts
    return () => ctx.revert();
  }, [text_right]);

  return (
    <div className="relative">
      {/* This div provides enough height to allow scrolling */}
      <div style={{ height: `${text_right.length * 110}vh` }}>
        {/* The section that will be pinned and animated */}
        <div
          ref={sectionRef}
          className="sticky top-0 h-screen overflow-hidden"
        >
          {/* Blue box covering the right half, now used as a mask */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-500 overflow-hidden">
            {/* Render each word */}
            {text_right.map((word, index) => (
              <div
                key={index}
                ref={(el) => {
                  wordRefs.current[index] = el;
                }}
                className="will-change-transform absolute whitespace-nowrap text-6xl font-bold text-black"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationSection;
