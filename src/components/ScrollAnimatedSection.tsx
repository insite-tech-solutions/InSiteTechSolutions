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
      'Digital Branding',
      'Data Analytics',
      'AI Integration',
      'Training',
      'related needs',
      'Tech',
    ],
    []
  );

  const text_left = React.useMemo(
    () => [
      'Web Development',
      'Custom Software',
      'Automation',
      'Consulting',
      'For all your tech',
      'InSite',
    ],
    []
  );

  // References to the word elements
  const wordRefsRight = useRef<Array<HTMLDivElement | null>>([]);
  const wordRefsLeft = useRef<Array<HTMLDivElement | null>>([]);

  // References to the image elements
  const imageRefLeft = useRef<HTMLImageElement>(null);
  const imageRefRight = useRef<HTMLImageElement>(null);

  // References to the circle element
  const circleRef = useRef<HTMLDivElement>(null);


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
      // Set initial positions of the words using 'x' instead of 'xPercent'
      text_right.forEach((_, index) => {
        const wordElRight = wordRefsRight.current[index];
        const wordElLeft = wordRefsLeft.current[index];

        if (wordElRight) {
          gsap.set(wordElRight, { x: '-100%', opacity: 0.7 });
        }
        if (wordElLeft) {
          gsap.set(wordElLeft, { x: '100%', opacity: 0.7 });
        }
      });

      // Set initial state of the images
      if (imageRefLeft.current) {
        gsap.set(imageRefLeft.current, {
          scale: 0,
          transformOrigin: '100% 50%',
        });
      }
      if (imageRefRight.current) {
        gsap.set(imageRefRight.current, {
          scale: 0,
          transformOrigin: '0% 50%',
        });
      }

      // Create a timeline for the animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${(text_right.length + 1) * 95}%`, // Adjusted to include images
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate the images to grow into frame
      tl.to([imageRefLeft.current, imageRefRight.current], {
        scale: 0.5,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animate the circle to fade in
      tl.to(
        circleRef.current,
        {
          opacity: 1,
          duration: 0.1, // Duration of the fade-in
          ease: 'power2.out',
        },
        '+=0.1' // Start this animation 0.5 seconds after the images
      );

      // Animate each pair of words
      text_right.forEach((_, index) => {
        const wordElRight = wordRefsRight.current[index];
        const wordElLeft = wordRefsLeft.current[index];

        if (wordElRight && wordElLeft) {
          tl.to(
            wordElRight,
            { x: '17%', opacity: 1, duration: 1.5 },
            '+=0.5' // Slight delay between each word
          )
            .to(
              wordElLeft,
              { x: '-15%', opacity: 1, duration: 1.5 },
              '<' // Start at the same time as the right word
            )
            .to({}, { duration: 1 }) // Pause
          // Only animate back to starting position if it's not the last pair of words
          if (index < text_right.length - 1) {
            tl.to(wordElRight, { x: '-100%', opacity: 0.7, duration: 1.5 })
              .to(wordElLeft, { x: '100%', opacity: 0.7, duration: 1.5 }, '<');
          }
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
          <div className="absolute left-0 top-0 h-full w-1/2 bg-white overflow-hidden ">
            {/* Render each word in text_left */}
            {text_left.map((word, index) => (
              <div
                key={index}
                ref={(el) => {
                  wordRefsLeft.current[index] = el;
                }}
                className="will-change-transform absolute whitespace-nowrap font-kohinoor font-normal text-black z-10 drop-shadow-lg w-full text-right"
                style={{
                  top: '50%',
                  right: 0,
                  transform: 'translateY(-50%)',
                  fontSize: 'clamp(1.5rem, 5vw, 10rem)',
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
              width={275}
              height={275}
              style={{
                width: 'clamp(125px, 25vw, 275px)', // Responsive width
                height: 'auto',                      // Maintain aspect ratio
                objectFit: 'contain',
                top: '50%',
                right: 0, // Align to the right
                transform: 'translateY(-44%)',
              }}
              className="absolute z-5 drop-shadow-lg"
            />
          </div>
          {/* Right box covering the right half */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-white overflow-hidden">
            {/* Render each word in text_right */}
            {text_right.map((word, index) => (
              <div
                key={index}
                ref={(el) => {
                  wordRefsRight.current[index] = el;
                }}
                className="will-change-transform absolute whitespace-nowrap font-kohinoor font-normal text-black drop-shadow-lg w-full text-left"
                style={{
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-50%)',
                  fontSize: 'clamp(1.5rem, 5vw, 10rem)',
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
              width={275}
              height={275}
              style={{
                width: 'clamp(125px, 25vw, 275px)', // Responsive width
                height: 'auto',                      // Maintain aspect ratio
                objectFit: 'contain',
                top: '50%',
                left: 0, // Start at 0
                transform: 'translateY(-44%)',
              }}
              className="absolute drop-shadow-lg"
            />
          </div>
            {/* White Circle to cover the dividing line between left and right sections */}
          <div
            ref={circleRef}
            className="absolute z-50"
            style={{
              width: 'clamp(16px, 4.5vw, 225px)',
              height: 'clamp(62px, 9vw, 225px)',
              backgroundColor: 'white',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-51%, -61%) rotate(41deg)',
              filter: 'blur(clamp(3px, 0.85vw, 16px))',
              opacity: 0, // Start invisible
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationSection;
