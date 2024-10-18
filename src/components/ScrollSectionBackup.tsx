// components/ScrollAnimationSection.tsx

'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationSection: React.FC = () => {
  // Arrays of words to animate
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

  const text_left = React.useMemo(
    () => [
      'Web development',
      'Custom Software',
      'Automation',
      'Consulting',
      'For all your',
      'InSite',
    ],
    []
  );

  // References to the word elements
  const wordRefsRight = useRef<Array<HTMLDivElement | null>>([]);
  const wordRefsLeft = useRef<Array<HTMLDivElement | null>>([]);

  // **References to the image elements**
  const imageRefLeft = useRef<HTMLImageElement>(null);
  const imageRefRight = useRef<HTMLImageElement>(null);

  // Reference to the section element
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure both arrays have the same length
    if (text_right.length !== text_left.length) {
      console.error('The text arrays must be of equal length.');
      return;
    }

    // Create a GSAP context for scoping and cleanup
    const ctx = gsap.context(() => {
      // **Set initial positions of the words**
      text_right.forEach((_, index) => {
        const wordElRight = wordRefsRight.current[index];
        const wordElLeft = wordRefsLeft.current[index];

        if (wordElRight) {
          gsap.set(wordElRight, { xPercent: -105, opacity: 0.75 });
        }
        if (wordElLeft) {
          gsap.set(wordElLeft, { xPercent: 105, opacity: 0.75 });
        }
      });

      // **Set initial state of the images**
      if (imageRefLeft.current) {
        gsap.set(imageRefLeft.current, { scale: 0, transformOrigin: '100% 50%'});
      }
      if (imageRefRight.current) {
        gsap.set(imageRefRight.current, { scale: 0, transformOrigin: '0% 50%' });
      }

      // Create a timeline for the animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${(text_right.length + 1) * 100}%`, // Adjusted to include images
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // **Animate the images to grow into frame**
      tl.to(
        [imageRefLeft.current, imageRefRight.current],
        {
          scale: 0.5,
          duration: 1.5,
          ease: 'power2.out',
        }
      );

      // Animate each pair of words
      text_right.forEach((_, index) => {
        const wordElRight = wordRefsRight.current[index];
        const wordElLeft = wordRefsLeft.current[index];

        if (wordElRight && wordElLeft) {
          tl.to(wordElRight, { xPercent: 25, opacity: 1, duration: 1.5 })
            .to(wordElLeft, { xPercent: -25, opacity: 1, duration: 1.5 }, '<')
            .to({}, { duration: 1 }) // Pause
            .to(wordElRight, { xPercent: -105, opacity: 0.75, duration: 1.5 })
            .to(wordElLeft, { xPercent: 105, opacity: 0.75, duration: 1.5 }, '<');
        }
      });


    }, sectionRef);

    // Cleanup function to remove animations when component unmounts
    return () => ctx.revert();
  }, [text_right, text_left]);

  return (
    <div className="relative">
      {/* Adjusted height to include images animation */}
      <div style={{ height: `${(text_right.length + 1) * 110}vh` }}>
        {/* The section that will be pinned and animated */}
        <div
          ref={sectionRef}
          className="sticky top-0 h-screen overflow-hidden"
        >
          {/* Left box covering the left half */}
          <div className="absolute left-0 top-0 h-full w-1/2 bg-gray-300 overflow-hidden ">
            {/* Render each word in text_left */}
            {text_left.map((word, index) => (
              <div
                key={index}
                ref={(el) => {
                  wordRefsLeft.current[index] = el;
                }}
                className="will-change-transform absolute whitespace-nowrap font-bold text-black z-10 drop-shadow-lg"
                style={{
                  top: '50%',
                  right: 0,
                  transform: 'translateY(-50%)',
                  fontSize: 'clamp(3rem, 5vw, 10rem)'
                }}
              >
                {word}
              </div>
            ))}
            {/* Left Image Wrapper */}
            <Image
              ref={imageRefLeft}
              src="/Magnifying glass left.svg"
              alt="Magnifying glass left"
              width={350}
              height={350}
              style={{
                objectFit: 'contain',
                top: '50%',
                right: 0, // Align to the right
                transform: 'translateY(-45%)',
              }}
              className="absolute z-5 drop-shadow-lg"
            />
          </div>
          {/* Right box covering the right half */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-500 overflow-hidden">
            {/* Render each word in text_right */}
            {text_right.map((word, index) => (
              <div
                key={index}
                ref={(el) => {
                  wordRefsRight.current[index] = el;
                }}
                className="will-change-transform absolute whitespace-nowrap font-bold text-black drop-shadow-lg"
                style={{
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-50%)',
                  fontSize: 'clamp(3rem, 5vw, 10rem)'
                }}
              >
                {word}
              </div>
            ))}
            {/* Right Image Wrapper */}
            <Image
              ref={imageRefRight}
              src="/Magnifying glass right.svg"
              alt="Magnifying glass right"
              width={350}
              height={350}
              style={{
                objectFit: 'contain',
                top: '50%',
                left: 0, // Start at 0
                transform: 'translateY(-45%)',
              }}
              className="absolute drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationSection;
