'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const AnimatedMagnifier: React.FC = () => {
  // Refs for DOM elements
  const containerRef = useRef<HTMLDivElement | null>(null);
  const magnifierRef = useRef<SVGCircleElement | null>(null);
  const leftTextRefs = useRef<SVGTextElement[]>([]);
  const rightTextRefs = useRef<SVGTextElement[]>([]);
  const companyNameRef = useRef<SVGTextElement | null>(null);

  // Text pairs to animate
  const textPairs = React.useMemo(() => [
    ['Web development', 'Digital branding'],
    ['Custom Software', 'Data Analytics'],
    ['Automation', 'AI integration'],
    ['Consulting', 'Training'],
    ['For all your', 'tech related needs'],
    ['InSite', 'Tech'],
  ], []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          // markers: true, // Uncomment for debugging
        },
      });

      // Animate the magnifying glass appearing and growing
      tl.from(magnifierRef.current, {
        scale: 0,
        duration: 1,
        ease: 'power2.out',
        transformOrigin: 'center center',
      });

      // Loop over each text pair
      textPairs.forEach((_, index) => {
        // Right text animation: Move from left to right
        tl.fromTo(
          rightTextRefs.current[index],
          { x: 0 }, // Start from left side
          { x: 300, duration: 1, ease: 'power1.inOut' },
          '-=0.5' // Overlap with previous animation
        );

        // Left text animation: Move from right to left
        tl.fromTo(
          leftTextRefs.current[index],
          { x: 600 }, // Start from right side
          { x: 300, duration: 1, ease: 'power1.inOut' },
          '<' // Start at the same time as right text
        );

        // Hold the text at the center
        tl.to({}, { duration: 0.5 });

        // Animate texts back to their starting positions
        tl.to(
          rightTextRefs.current[index],
          { x: 0, duration: 1, ease: 'power1.inOut' }
        );

        tl.to(
          leftTextRefs.current[index],
          { x: 600, duration: 1, ease: 'power1.inOut' },
          '<' // Start at the same time as right text
        );
      });

      // Animate the company name appearing
      tl.to(companyNameRef.current, { opacity: 1, duration: 1, ease: 'power2.in' });
    }
  }, [textPairs]);

  return (
    <div className="h-[200vh]">
      <div
        ref={containerRef}
        className="h-screen flex justify-center items-center sticky top-0"
      >
        <svg
          viewBox="0 0 600 100"
          className="w-full max-w-4xl"
        >
          {/* Define clipping paths */}
          <defs>
            {/* Clip path for right half */}
            <clipPath id="clipRight">
              <rect x="300" y="0" width="300" height="100" />
            </clipPath>
            {/* Clip path for left half */}
            <clipPath id="clipLeft">
              <rect x="0" y="0" width="300" height="100" />
            </clipPath>
          </defs>

          {/* Right Text Elements */}
          {textPairs.map((pair, index) => (
            <text
              key={`right-${index}`}
              ref={(el) => {
                if (el) rightTextRefs.current[index] = el;
              }}
              x="0"
              y="55"
              textAnchor="start"
              clipPath="url(#clipRight)"
              style={{ fontSize: '16px' }}
            >
              {pair[1]}
            </text>
          ))}

          {/* Left Text Elements */}
          {textPairs.map((pair, index) => (
            <text
              key={`left-${index}`}
              ref={(el) => {
                if (el) leftTextRefs.current[index] = el;
              }}
              x="600"
              y="55"
              textAnchor="end"
              clipPath="url(#clipLeft)"
              style={{ fontSize: '16px' }}
            >
              {pair[0]}
            </text>
          ))}

          {/* Company Name */}
          <text
            ref={companyNameRef}
            x="300"
            y="90"
            textAnchor="middle"
            opacity="0"
            style={{ fontSize: '18px' }}
          >
            InSite Tech Solutions
          </text>

          {/* Magnifying Glass Circle */}
          <circle
            ref={magnifierRef}
            cx="300"
            cy="50"
            r="30"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedMagnifier;
