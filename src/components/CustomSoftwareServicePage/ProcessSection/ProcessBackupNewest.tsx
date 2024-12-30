'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//import { getHeaderHeight } from '@/lib/utils';
import { TracingBeam } from './TracingBeam';

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<HTMLDivElement[]>([]);
  const cardContentRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const section = sectionRef.current;
    if (!section) return;

    // Keep only the circle/card animations
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
      <TracingBeam>
        <div className="relative h-full">
          {[...Array(5)].map((_, index) => {
            const topPercent = ((index + 1) / (5 + 1)) * 100;
            return (
              <div
                key={index}
                className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                style={{ top: `${topPercent}%`, left: '50%' }}
              >
                <div
                  ref={(el: HTMLDivElement | null) => {
                    if (el) circleRefs.current[index] = el;
                  }}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden relative"
                >
                  <span className="text-white font-bold text-2xl text-center">{index + 1}</span>
                  <div
                    ref={(el: HTMLDivElement | null) => {
                      if (el) cardContentRefs.current[index] = el;
                    }}
                    className="absolute inset-0 text-center opacity-0 p-2 flex flex-col justify-center"
                  >
                    <p className="text-black font-bold">{`Step ${index + 1}`}</p>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </TracingBeam>
    </div>
  );
};

export default ProcessSection;