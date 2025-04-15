'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TracingBeam } from './TracingBeam';
import { processSteps } from './ProcessContent';
import { Clock } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const measurementRef = useRef<HTMLDivElement>(null);

  // Store dimensions for each card
  const cardDimensionsRef = useRef<{ width: string; height: string }[]>([]);

  // Refs for each step
  const circleRefs = useRef<HTMLDivElement[]>([]);
  const iconRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const dividerRefs = useRef<HTMLHRElement[]>([]);
  const descRefs = useRef<HTMLParagraphElement[]>([]);
  const listRefs = useRef<HTMLUListElement[]>([]);
  const liRefs = useRef<(HTMLLIElement[])[]>([]);
  const timelineRefs = useRef<HTMLDivElement[]>([]);
  const stepNumberRefs = useRef<HTMLSpanElement[]>([]);

  liRefs.current = processSteps.map(() => []);

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
    processSteps.forEach((_, index) => {
      const icon = iconRefs.current[index];
      const title = titleRefs.current[index];
      const divider = dividerRefs.current[index];
      const desc = descRefs.current[index];
      const list = listRefs.current[index];
      const lis = liRefs.current[index];
      const timeline = timelineRefs.current[index];

      if (icon) gsap.set(icon, { opacity: 0, scale: 0.8 });
      if (title) gsap.set(title, { opacity: 0, y: 20 });
      if (divider) gsap.set(divider, { width: 0 });
      if (desc) gsap.set(desc, { opacity: 0, y: 20 });
      if (list) gsap.set(list, { opacity: 0 });
      lis.forEach(li => {
        gsap.set(li, { opacity: 0, x: -20 });
      });
      if (timeline) gsap.set(timeline, { opacity: 0, y: 20 });
    });

    // Create scroll-triggered timelines
    processSteps.forEach((stepData, index) => {
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
          start: 'center center',
          toggleActions: 'play none reverse none',
        },
      });

      // Morph circle into card using measured dimensions for this step
      tl.to(circle, {
        width: () => cardDimensionsRef.current[index]?.width || '300px',
        height: () => cardDimensionsRef.current[index]?.height || '200px',
        borderRadius: '0.75rem',
        backgroundColor: 'rgba(255,255,255,0.8)',
        duration: 0.3,
        transformOrigin: 'center center',
        y: (index, element) => {
          // Calculate offset to keep center position
          const finalHeight = parseFloat(cardDimensionsRef.current[index]?.height || '200');
          const initialHeight = element.offsetHeight;
          return -((finalHeight - initialHeight) / 2) * 0.75;
        },
      })
      .to(circle, {
        border: '3px solid #2563eb',
        boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
        onComplete: () => {
          gsap.set(circle, {
            backdropFilter: 'blur(8px)',
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
          { opacity: 1, scale: 1, duration: 0.4, ease: "power1.out" },
          "startChildren"
        )
        .to(title,
          { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" },
          "<+0.1"
        )
        .to(divider,
          { width: "calc(100% + 1.3rem)", duration: 0.7, ease: "power1.inOut" },
          "<+0.1"
        )
        .to(desc,
          { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" },
          "<+0.2"
        )
        .to(list,
          { opacity: 1, duration: 0.4, ease: "power1.out" },
          "<+0.2"
        )
        .to(lis,
          { opacity: 1, x: 0, duration: 0.3, ease: "power1.out", stagger: 0.1 },
          "<"
        )
        .to(timeline,
          { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" },
          "<+0.2"
        );
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="text-center max-w-4xl mx-auto py-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
          Our Approach
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          We follow a systematic, collaborative approach to ensure your
          custom software solution meets all requirements while maintaining
          flexibility for future growth:
        </p>
      </div>
      <div ref={sectionRef} className="relative h-[400vh] md:h-[500vh]">
        {/* Hidden measurement div with all steps */}
        <div
          ref={measurementRef}
          className="w-full md:w-1/2 mx-auto opacity-0 pointer-events-none absolute -z-10"
          aria-hidden="true"
        >
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="measurement-card relative bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg border-[3px] border-blue-600 mb-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-900">
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
            {processSteps.map((step, index) => {
              const topPercent = ((index + 1) / (processSteps.length + 1)) * 100;
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
                          <step.icon className="h-7 w-7 text-white" />
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

            <div 
              className="absolute left-0 w-full bg-gray-50 flex flex-col justify-end"
              style={{ 
                top: `${((processSteps.length) / (processSteps.length + 1)) * 100}%`,
                bottom: '0',
                zIndex: 10
              }}
            >
              <div className="container mx-auto px-6 lg:px-16 pb-16">
                <div
                  className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 max-w-4xl mx-auto shadow-md border border-blue-600"
                >
                  <p className="text-gray-300 mb-4">
                    We cannot provide exact timelines until we have a well-defined
                    project and plan. Projects can range from a few weeks to several
                    months; however, as a simple reference point, most small business
                    software projects are completed in 6–8 weeks, while larger, more
                    complex solutions can range from 8–16+ weeks, depending on the
                    complexity.
                  </p>
                  <a
                    href="/about/process"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Learn more about our process
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

export default ProcessSection;
