/**
 * @fileoverview Scroll Animation Section Component for Homepage
 *
 * This component creates a scroll-triggered animation section with dynamic
 * text animations, image scaling, and visual effects. Uses GSAP for smooth
 * animations and ScrollTrigger for scroll-based timing.
 *
 * Features:
 * - Scroll-triggered text animations with staggered timing
 * - Image scaling animations with transform origins
 * - Center circle overlay with blur effects
 * - Responsive design with clamp functions
 * - GSAP timeline animations with pinning
 * - Hydration-safe mounting detection
 *
 * @module ScrollAnimationSection
 */

'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * Static words for right side scroll animation
 * 
 * Array of text strings that animate from right to left
 * during the scroll sequence. Each word pairs with the
 * corresponding left side word for synchronized animation.
 * 
 * @constant {string[]} text_right
 */
const text_right: string[] = [
  'Digital Branding',
  'Data Analytics',
  'AI Integration',
  'Training',
  'related needs',
  'Tech',
];

/**
 * Static words for left side scroll animation
 * 
 * Array of text strings that animate from left to right
 * during the scroll sequence. Each word pairs with the
 * corresponding right side word for synchronized animation.
 * 
 * @constant {string[]} text_left
 */
const text_left: string[] = [
  'Web Development',
  'Custom Software',
  'Automation',
  'Consulting',
  'For all your tech',
  'InSite',
];

/**
 * ScrollAnimationSection Component
 * 
 * Creates a scroll-triggered animation section with dynamic text
 * animations, image scaling, and visual effects. The component
 * uses GSAP for smooth animations and ScrollTrigger for precise
 * scroll-based timing control.
 * 
 * The animation sequence includes:
 * - Image scaling animations with transform origins
 * - Staggered text animations from opposite sides
 * - Center circle overlay with blur effects
 * - Pinned section during animation
 * - Responsive design with fluid typography
 * 
 * The component is divided into left and right halves, each
 * containing animated text and images that move in response
 * to scroll position. The center features a blurred circle
 * overlay that fades in during the animation sequence.
 * 
 * @returns {JSX.Element} Rendered scroll animation section component
 * 
 * @example
 * ```tsx
 * <ScrollAnimationSection />
 * ```
 */
export default function ScrollAnimationSection(): JSX.Element {
  // Track client-side mounting to prevent hydration mismatches
  const [isMounted, setIsMounted] = useState(false);

  // References to the word elements for animation
  const wordRefsRight = useRef<Array<HTMLDivElement | null>>([]);
  const wordRefsLeft = useRef<Array<HTMLDivElement | null>>([]);

  // References to the image elements for scaling animations
  const imageRefLeft = useRef<HTMLImageElement>(null);
  const imageRefRight = useRef<HTMLImageElement>(null);

  // Reference to the center circle overlay element
  const circleRef = useRef<HTMLDivElement>(null);

  // Reference to the main section element for ScrollTrigger
  const sectionRef = useRef<HTMLDivElement>(null);

  // Set mounted state on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // GSAP animation setup with useGSAP hook
  useGSAP(() => {
    // Register ScrollTrigger plugin only on client side
    gsap.registerPlugin(ScrollTrigger);

    // Only run GSAP animations after mounting
    if (!isMounted || !sectionRef.current) return;

    // Validate that both text arrays have the same length
    if (text_right.length !== text_left.length) {
      console.error('The text arrays must be of equal length.');
      return;
    }

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

    // Set initial state of the images with scale 0
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

    // Create a timeline for the animation sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start:'top top',
        end: `+=${(text_right.length + 1) * 95}%`, // Adjusted to include images
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false,
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
      '+=0.1' // Start this animation 0.1 seconds after the images
    );

    // Animate each pair of words with staggered timing
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
          .to({}, { duration: 1 }) // Pause between animations
        
        // Only animate back to starting position if it's not the last pair of words
        if (index < text_right.length - 1) {
          tl.to(wordElRight, { x: '-100%', opacity: 0.7, duration: 1.5 })
            .to(wordElLeft, { x: '100%', opacity: 0.7, duration: 1.5 }, '<');
        }
      }
    });
  }, { scope: sectionRef, dependencies: [text_right, text_left, isMounted] });

  return (
    <section aria-labelledby="scroll-section-title">
      {/* Accessible landmark for scroll animation */}
      <h2 id="scroll-section-title" className="sr-only">Scroll Animation Section</h2>
      
      {/* Main container with relative positioning */}
      <div className="relative">
        {/* Adjusted height to include images animation */}
        <div style={{ height: `${(text_right.length + 1) * 110}vh` }}>
          {/* Animated Pin Container */}
          <div
            ref={sectionRef}
            className="sticky top-0 h-screen overflow-hidden"
          >
            {/* Left box covering the left half */}
            <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-b from-white to-gray-50 overflow-hidden ">
              {/* Left Words Animation */}
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
                    fontSize: 'clamp(1.25rem, 5vw, 10rem)',
                    // Set initial position for SSR to prevent hydration mismatch
                    ...(isMounted ? {} : { transform: 'translateY(-50%) translateX(100%)', opacity: 0.7 }),
                  }}
                >
                  {word}
                </div>
              ))}
              
              {/* Left Image Wrapper */}
              <div 
                className="absolute"
                style={{
                  top: '50%',
                  right: 0,
                  transform: 'translateY(-50%)',
                  width: 'clamp(115px, 25vw, 275px)',
                  height: 'clamp(115px, 25vw, 275px)',
                }}
              >
                <Image
                  ref={imageRefLeft}
                  src="/Magnifying glass left.svg"
                  alt="Magnifying glass left"
                  width={275}
                  height={275}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    position: 'relative',
                    top: '-36%', // Fine-tune the vertical alignment within the wrapper
                    // Set initial scale for SSR to prevent hydration mismatch
                    ...(isMounted ? {} : { transform: 'scale(0)' }),
                  }}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
            
            {/* Right box covering the right half */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
              {/* Right Words Animation */}
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
                    fontSize: 'clamp(1.25rem, 5vw, 10rem)',
                    // Set initial position for SSR to prevent hydration mismatch
                    ...(isMounted ? {} : { transform: 'translateY(-50%) translateX(-100%)', opacity: 0.7 }),
                  }}
                >
                  {word}
                </div>
              ))}
              
              {/* Right Image Wrapper */}
              <div 
                className="absolute"
                style={{
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-50%)',
                  width: 'clamp(115px, 25vw, 275px)',
                  height: 'clamp(115px, 25vw, 275px)',
                }}
              >
                <Image
                  ref={imageRefRight}
                  src="/Magnifying glass right.svg"
                  alt="Magnifying glass right"
                  width={275}
                  height={275}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    position: 'relative',
                    top: '-36%', // Fine-tune the vertical alignment within the wrapper
                    // Set initial scale for SSR to prevent hydration mismatch
                    ...(isMounted ? {} : { transform: 'scale(0)' }),
                  }}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
            
            {/* Center Circle Overlay */}
            <div
              ref={circleRef}
              className="absolute z-50"
              style={{
                width: 'clamp(14px, 4.5vw, 225px)',
                height: 'clamp(60px, 9vw, 225px)',
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
    </section>
  );
}
