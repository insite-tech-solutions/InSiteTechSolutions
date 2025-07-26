/**
 * @fileoverview ProcessSection module: renders a dynamic, animated timeline of service process steps.
 * - ProcessSectionWrapper manages orientation changes and preserves scroll position.
 * - ProcessSection uses GSAP and ScrollTrigger for scroll-driven animations of each step.
 */
'use client';

import React, { useEffect, useRef, useState, useCallback, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TracingBeam } from './tracing-beam';
import { ProcessContent } from '@/page-templates/service-page/types';
import { Clock, ExternalLink } from 'lucide-react';
import { getIcon } from '@/utils/icon-registry';
import { HEADER_HEIGHT } from '@/lib/constants';

/**
 * ProcessSectionWrapper Component
 *
 * Wrapper that handles device orientation changes and preserves the user's scroll position.
 * It forces a re-mount of the ProcessSection on orientation change to re-initialize animations
 * while seamlessly restoring the previous scroll position.
 *
 * @component
 * @param {ProcessContent} props.content - The data for rendering process steps.
 * @returns {React.ReactElement} The ProcessSection wrapped with orientation handling.
 */
const ProcessSectionWrapper: React.FC<{content: ProcessContent}> = ({ content }): JSX.Element => {
  /**
   * Tracks the current orientation of the device (landscape/portrait)
   * Initialized based on window dimensions
   */
  const [orientationKey, setOrientationKey] = useState<string>(() => {
    // Initialize with current orientation
    return typeof window !== 'undefined'
      ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')
      : 'portrait'; // Default for SSR
  });

  /**
   * Stores the scroll position before orientation change
   * Used to restore scroll position after remount
   */
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  /**
   * Stores previous window dimensions for comparison
   * Used to detect significant size changes
   */
  const prevDims = useRef<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  /**
   * Handles orientation changes and triggers necessary updates
   * - Updates orientation state
   * - Saves scroll position
   * - Refreshes ScrollTrigger for proper animation handling
   */
  const handleOrientationChange = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    // Add debounce to prevent rapid changes
    const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    if (newOrientation !== orientationKey) {
      setScrollPosition(window.scrollY);
      setOrientationKey(newOrientation);
      
      // Force a ScrollTrigger refresh after orientation change
      if (typeof ScrollTrigger !== 'undefined') {
        setTimeout(() => {
          ScrollTrigger.refresh(true);
        }, 50);
      }
    }
  }, [orientationKey, setScrollPosition]);

  /**
   * Debounced handler for orientation changes
   * Prevents rapid state updates during device rotation
   */
  const orientationChangeHandler = useCallback(() => {
    setTimeout(handleOrientationChange, 100);
  }, [handleOrientationChange]);

  /**
   * Handles window resize events
   * - Updates previous dimensions
   * - Triggers orientation check if significant size change detected
   */
  const handleResize = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    // Reduce threshold to be more responsive
    const widthChanged = Math.abs(window.innerWidth - prevDims.current.width) > 50;
    const heightChanged = Math.abs(window.innerHeight - prevDims.current.height) > 50;
    
    // Always update previous dimensions
    prevDims.current = { width: window.innerWidth, height: window.innerHeight };
    
    // If significant change, trigger orientation check
    if (widthChanged || heightChanged) {
      handleOrientationChange();
    }
  }, [handleOrientationChange]);

  /**
   * Sets up event listeners for orientation and resize events
   * - Handles orientation changes with debouncing
   * - Manages window resize events
   * - Cleans up listeners on unmount
   */
  useEffect(() => {
    window.addEventListener('orientationchange', orientationChangeHandler);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('orientationchange', orientationChangeHandler);
      window.removeEventListener('resize', handleResize);
    };
  }, [orientationChangeHandler, handleResize]);

  /**
   * Restores scroll position after orientation change
   * Uses setTimeout to ensure proper layout calculation
   */
  useEffect(() => {
    if (scrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 50);
    }
  }, [orientationKey, scrollPosition]);

  return (
    // Key change forces complete remount of ProcessSection
    <ProcessSection key={orientationKey} content={content} />
  );
};

/**
 * ProcessSection Component
 *
 * Renders the service process timeline with GSAP-powered scroll-triggered animations.
 * Each step transitions from a circular marker to an expanded card as it scrolls into view.
 *
 * @component
 * @param {ProcessContent} props.content - The data for process steps and related content.
 * @returns {React.ReactElement} The animated process timeline section.
 */
const ProcessSection: React.FC<{content: ProcessContent}> = ({ content }): JSX.Element => {
  // Main container reference for the process section
  const sectionRef = useRef<HTMLDivElement>(null);

  // Reference for measuring card dimensions
  const measurementRef = useRef<HTMLDivElement>(null);

  // Prevents double initialization of animations
  const isInitializedRef = useRef(false);

  // Store dimensions for each card
  const cardDimensionsRef = useRef<{ width: string; height: string }[]>([]);

  /**
   * Array of refs for each step's elements
   * Used to target specific elements for animations
   */
  const circleRefs = useRef<HTMLDivElement[]>([]);
  const iconRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const dividerRefs = useRef<HTMLHRElement[]>([]);
  const descRefs = useRef<HTMLParagraphElement[]>([]);
  const listRefs = useRef<HTMLUListElement[]>([]);
  const liRefs = useRef<(HTMLLIElement[])[]>([]);
  const timelineRefs = useRef<HTMLDivElement[]>([]);
  const stepNumberRefs = useRef<HTMLSpanElement[]>([]);

  liRefs.current = content.steps.map(() => []);

  /**
   * Measures and stores the dimensions of each card
   * Called during initialization and on resize
   */
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

  /**
   * Initializes GSAP animations and sets up scroll triggers
   * - Registers ScrollTrigger plugin
   * - Measures card dimensions
   * - Sets up resize observer
   * - Creates animation timelines for each step
   * - Sets initial states for content elements
   */
  useEffect(() => {
    
    // Prevent double initialization
    if (isInitializedRef.current) {
      return;
    }
    
    gsap.registerPlugin(ScrollTrigger);
  
    // Add a delay to ensure proper layout calculation
    const initAnimations = () => {      
      const section = sectionRef.current;
      if (!section) return;
      
      // Force a layout calculation
      section.getBoundingClientRect();
      
      // Rest of your existing animation code follows:
      // Measurement
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
    content.steps.forEach((_, index) => {
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
        gsap.set(li, { opacity: 0, x: -20 });
      });
      if (timeline) gsap.set(timeline, { opacity: 0, y: 20 });
    });

    // Array to store all created timelines for cleanup
    const timelines: gsap.core.Timeline[] = [];

    // Create scroll-triggered timelines
    content.steps.forEach((stepData, index) => {
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
        force3D: true, // Add this for better GPU handling
        willChange: 'transform', // Add this to hint the browser about upcoming changes
        scrollTrigger: {
          trigger: circle,
          start: `center center+=${HEADER_HEIGHT / 2}px`, // Offset by half the header height
          toggleActions: 'play none reverse none',
          markers: false,
        },
      });

      timelines.push(tl); // Store the timeline for cleanup

      // Morph circle into card using measured dimensions for this step
      tl.to(circle, {
        width: () => cardDimensionsRef.current[index]?.width || '300px',
        height: () => cardDimensionsRef.current[index]?.height || '200px',
        borderRadius: '0.75rem', // rounded-xl equivalent
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(8px)',
        padding: '1rem', // p-4 equivalent - Apply padding during morph
        duration: 0.3, // Slightly increased duration for smoother morph + padding
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
        border: '3px solid #0773d6',
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

      // Mark as initialized after setup is complete
      isInitializedRef.current = true;

        return () => {
          resizeObserver.disconnect();
          
          // Kill all created timelines to prevent memory leaks
          timelines.forEach(tl => tl.kill());
          
          // Kill all ScrollTriggers created by this component
          ScrollTrigger.getAll().forEach(st => {
            st.kill();
          });
        };
      };
    
    // Use setTimeout to delay initialization
    const timer = setTimeout(initAnimations, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, [content]);

  /**
   * Handles window resize events
   * Refreshes ScrollTrigger to ensure proper animation behavior
   */
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh(true); // true forces a full refresh
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full relative">
      {/* Process Section Container */}
      <section aria-labelledby="process-section-title">
        {/* Accessible landmark for section */}
        <h2 id="process-section-title" className="sr-only">{content.title}</h2>
        <div className="text-center max-w-4xl mx-auto py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
            {content.title}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>
      <div ref={sectionRef} className="relative h-[440vh] md:h-[465vh] pb-12 lg:pb-0">
        {/*
          Hidden measurement div:
          - Contains clones of the final card state for each step.
          - Used to accurately measure the required width/height for the morph animation *before* the animation runs.
          - Uses styles that EXACTLY match the final animated state defined in the GSAP timeline below.
          - opacity-0, pointer-events-none, absolute, -z-10 ensure it doesn't affect layout or interaction.
        */}
        {/* Hidden Measurement Cards (aria-hidden) */}
        <div
          ref={measurementRef}
          // Use inset-x-0 to define bounds respecting padding, then apply width/centering
          className="absolute inset-x-0 lg:w-3/5 max-w-3xl mx-auto opacity-0 pointer-events-none -z-10"
          aria-hidden="true"
        >
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="measurement-card rounded-xl relative bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg border-[3px] border-blue-600 mb-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900">
                  {/* Placeholder for icon dimensions */}
                  <div className="h-7 w-7" />
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
          ))}
        </div>

        <TracingBeam>
          <div className="relative h-full">
            {content.steps.map((step, index) => {
              const topPercent = ((index + 1) / (content.steps.length + 1)) * 100;
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
                      width: '4.5rem', 
                      height: '4.5rem', 
                      borderRadius: '9999px', 
                      backgroundColor: '#0773d6',
                    }}
                  >
                    <span
                      ref={(el) => {
                        if (el) stepNumberRefs.current[index] = el;
                      }}
                      className="text-white font-bold text-4xl text-center"
                    >
                      {index + 1}
                    </span>

                    <div className="absolute inset-0 flex flex-col p-6" style={{pointerEvents: 'none'}}>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          ref={(el) => {
                            if (el) iconRefs.current[index] = el;
                          }}
                          className="p-3 rounded-lg bg-gradient-to-br from-light-blue to-blue-900"
                          style={{ pointerEvents: 'auto' }}
                          aria-hidden="true"
                        >
                          {(() => {
                            const IconComponent = getIcon(step.icon);
                            return <IconComponent className="h-7 w-7 text-white" />;
                          })()}
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
                            className="border-2 border-light-grey my-1"
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
          className="absolute left-0 w-full bg-gray-50 flex flex-col justify-end pb-6 lg:pb-8"
          style={{ 
            top: `${((content.steps.length) / (content.steps.length + 1)) * 100}%`,
            bottom: '0',
            zIndex: 15
          }}
        >
          <div className="container mx-auto lg:px-4 lg:pb-4">
            <div
              className="bg-gradient-to-br from-light-blue to-blue-800 border border-light-blue rounded-xl p-6 max-w-4xl mx-auto shadow-md"
            >
            <p className="text-gray-50 mb-4">
              {content.note}
            </p>
            {content.linkText && content.linkUrl && (
              <a
                href={content.linkUrl}
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-400 font-medium"
              >
                {content.linkText}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the wrapper instead of the base component
export default memo(ProcessSectionWrapper);
