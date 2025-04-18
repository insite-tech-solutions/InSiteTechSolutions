// src/page-templates/service-page/process-section/process-timeline.tsx

'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProcessStep } from '../types'
import TracingBeam from './tracing-beam'
import { Clock } from 'lucide-react'

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

// Simple debounce function
const debounce = <F extends (...args: unknown[]) => unknown>(
  func: F,
  wait: number
) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<F>): void {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * ProcessTimelineWrapper handles orientation changes and remounts the component
 */
const ProcessTimelineWrapper: React.FC<ProcessTimelineProps> = (props) => {
  const [orientationKey, setOrientationKey] = useState<string>(() => {
    return typeof window !== 'undefined'
      ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')
      : 'portrait';
  });

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleOrientationChange = () => {
      const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
      
      if (newOrientation !== orientationKey) {
        setScrollPosition(window.scrollY);
        setOrientationKey(newOrientation);
      }
    };
    
    window.addEventListener('orientationchange', () => {
      setTimeout(handleOrientationChange, 100);
    });
    
    let prevWidth = window.innerWidth;
    let prevHeight = window.innerHeight;
    
    const handleResize = debounce(() => {
      const widthChanged = Math.abs(window.innerWidth - prevWidth) > 100;
      const heightChanged = Math.abs(window.innerHeight - prevHeight) > 100;
      
      if (widthChanged || heightChanged) {
        prevWidth = window.innerWidth;
        prevHeight = window.innerHeight;
        handleOrientationChange();
      }
    }, 200);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [orientationKey]);
  
  useEffect(() => {
    if (scrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 50);
    }
  }, [orientationKey, scrollPosition]);
  
  return <ProcessTimelineMain key={orientationKey} {...props} />;
};

/**
 * ProcessTimelineMain contains the main timeline implementation with GSAP animations
 */
const ProcessTimelineMain: React.FC<ProcessTimelineProps> = ({ steps }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const measurementRef = useRef<HTMLDivElement>(null);

  // Store dimensions for each card
  const cardDimensionsRef = useRef<{ width: string; height: string }[]>([]);

  // Refs for each step
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const dividerRefs = useRef<(HTMLHRElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const listRefs = useRef<(HTMLUListElement | null)[]>([]);
  const liRefs = useRef<(HTMLLIElement | null)[][]>([]);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepNumberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Initialize refs for step elements
  useEffect(() => {
    circleRefs.current = Array(steps.length).fill(null);
    iconRefs.current = Array(steps.length).fill(null);
    titleRefs.current = Array(steps.length).fill(null);
    dividerRefs.current = Array(steps.length).fill(null);
    descRefs.current = Array(steps.length).fill(null);
    listRefs.current = Array(steps.length).fill(null);
    liRefs.current = steps.map(() => []);
    timelineRefs.current = Array(steps.length).fill(null);
    stepNumberRefs.current = Array(steps.length).fill(null);
  }, [steps]);

  // Function to measure card dimensions for each step
  const measureCardDimensions = () => {
    if (!measurementRef.current) return;

    // Query all measurement cards
    const cards = Array.from(measurementRef.current.querySelectorAll('.measurement-card')) as HTMLDivElement[];
    if (cards.length === 0) return;

    cardDimensionsRef.current = cards.map(card => {
      const computedStyle = window.getComputedStyle(card);
      const width = computedStyle.width;
      const height = `${card.scrollHeight}px`;
      return { width, height };
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    // Initial measurement
    measureCardDimensions();

    // Set up resize observer
    const resizeObserver = new ResizeObserver(() => {
      measureCardDimensions();
      ScrollTrigger.refresh();
    });

    if (measurementRef.current) {
      resizeObserver.observe(measurementRef.current);
    }

    // Set initial "hidden" states for content
    steps.forEach((_, index) => {
      const icon = iconRefs.current[index];
      const title = titleRefs.current[index];
      const divider = dividerRefs.current[index];
      const desc = descRefs.current[index];
      const list = listRefs.current[index];
      const lis = liRefs.current[index];
      const timeline = timelineRefs.current[index];

      if (icon) gsap.set(icon, { opacity: 0, scale: 0.75 });
      if (title) gsap.set(title, { opacity: 0, y: 20 });
      if (divider) gsap.set(divider, { opacity: 0, width: 0 });
      if (desc) gsap.set(desc, { opacity: 0, y: 20 });
      if (list) gsap.set(list, { opacity: 0 });
      lis.forEach(li => {
        if (li) gsap.set(li, { opacity: 0, x: -20 });
      });
      if (timeline) gsap.set(timeline, { opacity: 0, y: 20 });
    });

    // Array to store all created timelines for cleanup
    const timelines: gsap.core.Timeline[] = [];

    // Create scroll-triggered timelines
    steps.forEach((stepData, index) => {
      const circle = circleRefs.current[index];
      const icon = iconRefs.current[index];
      const title = titleRefs.current[index];
      const divider = dividerRefs.current[index];
      const desc = descRefs.current[index];
      const list = listRefs.current[index];
      const lis = liRefs.current[index];
      const timeline = timelineRefs.current[index];
      const stepNumber = stepNumberRefs.current[index];

      if (!circle) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: circle,
          start: 'center center+=48px', // Offset by half the header height
          toggleActions: 'play none reverse none',
        },
      });

      timelines.push(tl); // Store the timeline for cleanup

      // Morph circle into card using measured dimensions
      tl.to(circle, {
        width: () => cardDimensionsRef.current[index]?.width || '300px',
        height: () => cardDimensionsRef.current[index]?.height || '200px',
        borderRadius: '0.75rem', // rounded-xl equivalent
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(8px)',
        padding: '1rem', // p-4 equivalent
        duration: 0.3, // Slightly increased duration for smoother morph
        transformOrigin: 'center center',
        y: (idx, element) => {
          // Calculate vertical offset to keep the element centered during height change
          const finalHeight = parseFloat(cardDimensionsRef.current[index]?.height || '200');
          const initialHeight = element.offsetHeight;
          // Offset is half the difference in height
          return -((finalHeight - initialHeight) / 2) * 0.9;
        },
      })
      .to(circle, {
        border: '3px solid #2563eb',
        boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
        onComplete: () => {
          gsap.set(circle, {
            padding: '1.5rem'
          });
        },
        duration: 0.2,
      });

      // Fade out step number
      tl.to(stepNumber, {
        opacity: 0,
        duration: 0.2,
      }, '<');

      // Card content animations
      const animationDelay = 0.1;
      tl.addLabel("startChildren", `+=${animationDelay}`)
        .to(icon,
          { opacity: 1, scale: 1, duration: 0.3, ease: "power1.out" },
          "startChildren"
        )
        .to(title,
          { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" },
          "<+0.05"
        )
        .to(divider,
          { opacity: 1, width: "calc(100% + 1.15rem)", duration: 0.6, ease: "power1.inOut" },
          "<+0.05"
        )
        .to(desc,
          { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" },
          "<+0.15"
        )
        .to(list,
          { opacity: 1, duration: 0.3, ease: "power1.out" },
          "<+0.15"
        )
        .to(lis,
          { opacity: 1, x: 0, duration: 0.3, ease: "power1.out", stagger: 0.1 },
          "<"
        )
        .to(timeline,
          { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" },
          "<+0.15"
        );
    });

    return () => {
      resizeObserver.disconnect();
      
      // Kill all created timelines to prevent memory leaks
      timelines.forEach(tl => tl.kill());
      
      // Kill all ScrollTriggers created by this component
      ScrollTrigger.getAll().forEach(st => {
        st.kill();
      });
    };
  }, [steps]);

  return (
    <div ref={sectionRef} className="relative h-[400vh] md:h-[450vh] pb-16">
      {/*
        Hidden measurement div:
        - Contains clones of the final card state for each step.
        - Used to accurately measure the required width/height for the morph animation *before* it runs.
        - Uses styles that match the final animated state in the GSAP timeline.
      */}
      <div
        ref={measurementRef}
        className="w-5/6 lg:w-1/2 mx-auto opacity-0 pointer-events-none absolute -z-10"
        aria-hidden="true"
      >
        {steps.map((step, index) => {
          // Use the icon component directly from step.icon
          const IconComponent = step.icon;

          return (
            <div
              key={index}
              className="measurement-card rounded-xl relative bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg border-[3px] border-blue-600 mb-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-900">
                  {/* Render icon component directly */}
                  {IconComponent ? <IconComponent className="h-7 w-7 text-white" /> : <div className="h-7 w-7" />}
                </div>
                <div>
                  <h3 className="text-2xl my-1 font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <hr className="border-2 border-gray-300 my-1" />
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {step.description}
              </p>
              <ul className="space-y-2 mb-4 list-disc list-inside">
                {step.items.map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Timeline: {step.timeline}</span>
              </div>
            </div>
          );
        })}
      </div>

      <TracingBeam>
        <div className="relative h-full">
          {steps.map((step, index) => {
            // Use the icon component directly from step.icon
            const IconComponent = step.icon;
            
            const topPercent = ((index + 1) / (steps.length + 1)) * 100;
            
            return (
              <div
                key={index}
                className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                style={{ top: `${topPercent}%`, left: '50%', zIndex: 20 }}
              >
                <div
                  ref={(el) => {
                    if (el) circleRefs.current[index] = el;
                  }}
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    width: '3rem', 
                    height: '3rem', 
                    borderRadius: '9999px', 
                    backgroundColor: '#2563eb',
                  }}
                >
                  <span
                    ref={(el) => {
                      if (el) stepNumberRefs.current[index] = el;
                    }}
                    className="text-white font-bold text-2xl text-center"
                  >
                    {index + 1}
                  </span>

                  <div className="absolute inset-0 flex flex-col p-6" style={{pointerEvents: 'none'}}>
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        ref={(el) => {
                          if (el) iconRefs.current[index] = el;
                        }}
                        className="p-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-900"
                        style={{ pointerEvents: 'auto' }}
                        aria-hidden="true"
                      >
                        {/* Render icon component directly */}
                        {IconComponent ? <IconComponent className="h-7 w-7 text-white" /> : null}
                      </div>
                      <div>
                        <h3
                          ref={(el) => {
                            if (el) titleRefs.current[index] = el;
                          }}
                          className="text-2xl my-1 font-semibold text-gray-800"
                          style={{ pointerEvents: 'auto' }}
                        >
                          {step.title}
                        </h3>
                        <hr
                          ref={(el) => {
                            if (el) dividerRefs.current[index] = el;
                          }}
                          className="border-2 border-gray-300 my-1"
                          aria-hidden="true"
                          style={{ pointerEvents: 'none' }}
                        />
                      </div>
                    </div>

                    <p
                      ref={(el) => {
                        if (el) descRefs.current[index] = el;
                      }}
                      className="text-gray-700 mb-4"
                      style={{ pointerEvents: 'auto' }}
                    >
                      {step.description}
                    </p>

                    <ul
                      ref={(el) => {
                        if (el) listRefs.current[index] = el;
                      }}
                      className="space-y-2 mb-4 list-disc list-inside"
                      style={{ pointerEvents: 'auto' }}
                    >
                      {step.items.map((item, i) => (
                        <li
                          key={i}
                          ref={(liEl) => {
                            if (liEl) {
                              if (!liRefs.current[index]) {
                                liRefs.current[index] = [];
                              }
                              liRefs.current[index][i] = liEl;
                            }
                          }}
                          className="text-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div
                      ref={(el) => {
                        if (el) timelineRefs.current[index] = el;
                      }}
                      className="flex items-center gap-2 text-sm text-gray-600"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Clock className="h-4 w-4" />
                      <span>Timeline: {step.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </TracingBeam>

      {/* Background element extending from last step to end */}
      <div
        className="absolute left-0 w-full bg-gray-50 flex flex-col justify-end pb-16"
        style={{ 
          top: `${((steps.length) / (steps.length + 1)) * 99}%`,
          bottom: '0',
          zIndex: 15
        }}
      />
    </div>
  );
};

export default ProcessTimelineWrapper;