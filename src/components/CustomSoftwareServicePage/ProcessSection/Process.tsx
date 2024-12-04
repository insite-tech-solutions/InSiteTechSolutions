'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getHeaderHeight } from '@/lib/utils';

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const litLineContainerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<HTMLDivElement[]>([]);
  const cardContentRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const section = sectionRef.current;
    const litLineContainer = litLineContainerRef.current;

    if (!section || !litLineContainer) return;

    // Calculate where the last circle is as a percentage of section height
    const lastCirclePosition = ((5) / (5 + 1)) * 100; // matches calculation in JSX

    gsap.fromTo(
      litLineContainer,
      {
        clipPath: 'inset(0 0 100% 0)',
      },
      {
        clipPath: 'inset(0 0 0% 0)', // Changed this to reveal everything for testing
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top center', // Changed to see if trigger points are the issue
          end: 'bottom center',
          scrub: true,
          markers: true,
        },
      }
    );

    // Animate circles to cards
    circleRefs.current.forEach((circle, index) => {
      const cardContent = cardContentRefs.current[index];

      gsap.timeline({
        scrollTrigger: {
          trigger: circle,
          start: 'center center',
          toggleActions: 'play none reverse none',
        },
      })
        .to(circle, {
          width: 250,
          height: 150,
          borderRadius: '0.75rem',
          backgroundColor: '#ffffff',
          duration: 0.3,
        })
        .to(
          cardContent,
          {
            opacity: 1,
            duration: 0.3,
          },
          '<'
        );
    });
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[400vh] bg-gray-50">
      {/* Unlit Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-light-grey" />

      {/* Lit Line Container with Clip Path */}
      <div
        ref={litLineContainerRef}
        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"
        style={{
          clipPath: 'inset(0% 0 100% 0)', // Start fully clipped
        }}
      />

      {/* Cover div for bottom lines */}
      <div 
        className="absolute left-0 w-full bg-gray-50" 
        style={{ 
          top: `${((5) / (5 + 1)) * 100}%`,
          height: `${100 - ((5) / (5 + 1)) * 100}%`
        }}
      />

      {/* Circles and Cards */}
      {[...Array(5)].map((_, index) => {
        const topPercent = ((index + 1) / (5 + 1)) * 100;
        return (
          <div
            key={index}
            className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            style={{ top: `${topPercent}%` }}
          >
            <div
              ref={(el: HTMLDivElement | null) => {
                if (el) circleRefs.current[index] = el;
              }}
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden"
            >
              <div
                ref={(el: HTMLDivElement | null) => {
                  if (el) cardContentRefs.current[index] = el;
                }}
                className="text-center opacity-0 p-2"
              >
                <p className="text-black font-bold">{`Step ${index + 1}`}</p>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProcessSection;