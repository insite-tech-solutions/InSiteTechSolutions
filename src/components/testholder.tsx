// AnimatedTextSection.tsx

'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedTextSection: React.FC = () => {
  // Array of text lines to display
  const lines = [
    'Digital branding',
    'Data Analytics',
    'AI integration',
    'Training',
    'Tech related needs',
    'Tech',
  ];

  // Create a ref to store references to each text line
  const lineRefs = useRef<HTMLDivElement[]>([]);

  // Function to add refs to the array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Ensure GSAP runs only on the client-side
    if (typeof window !== 'undefined') {
      // For each line, create an animation
      lineRefs.current.forEach((line) => {
        // Set initial position of each line to be off-screen to the left
        gsap.set(line, { x: -200 });

        // Create a timeline for each line
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'bottom top',
            scrub: true,
          },
        });

        // Animation sequence: slide in and slide back
        tl.to(line, { x: 600, duration: 1 }) // Slide in to original position
          .to(line, { x: 600, duration: 1 }) // Hold position briefly
          .to(line, { x: -200, duration: 1 }); // Slide back to the left
      });
    }
  }, []);

  return (
    <section className="relative bg-white h-screen overflow-hidden">
      {/* White rectangle covering the left half */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-white z-30"></div>
      {/* Text lines */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full">
        {lines.map((text, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="text-black text-4xl mb-4"
            style={{ position: 'relative', zIndex: 2 }}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedTextSection;
