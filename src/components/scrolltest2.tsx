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
  // Array of text phrases to display
  const phrases = [
    'Digital branding',
    'Data Analytics',
    'AI integration',
    'Training',
    'Tech related needs',
    'Tech',
  ];

  // Create a ref to store references to each text phrase
  const phraseRefs = useRef<HTMLDivElement[]>([]);

  // Function to add refs to the array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !phraseRefs.current.includes(el)) {
      phraseRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Ensure GSAP runs only on the client-side
    if (typeof window !== 'undefined') {
      // For each phrase, create an animation
      phraseRefs.current.forEach((phrase, index) => {
        // Set initial position of each phrase to be off-screen to the left
        gsap.set(phrase, { x: -200 });

        // Create a timeline for each phrase
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: phrase,
            start: 'top 80%',
            end: 'bottom top',
            scrub: true,
          },
        });

        // Animation sequence: slide in, hold, and slide back
        tl.to(phrase, { x: 600, duration: 1, delay: index * 1.5 }) // Slide in to visible position
          .to(phrase, { x: 600, duration: 0.1 }) // Hold position briefly
          .to(phrase, { x: -200, duration: 0.5 }); // Slide back to the left
      });
    }
  }, []);

  return (
    <section className="relative bg-white h-screen overflow-hidden">
      {/* White rectangle covering the left half */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-white z-30"></div>
      {/* Text phrases */}
      <div className="relative z-20 flex items-center justify-start h-full">
        {phrases.map((text, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="text-black text-4xl absolute left-0"
            style={{ position: 'absolute', zIndex: 2 }}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedTextSection;