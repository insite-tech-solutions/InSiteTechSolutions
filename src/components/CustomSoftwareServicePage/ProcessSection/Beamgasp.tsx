"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const outerCircleRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (!ref.current || !gradientRef.current || svgHeight === 0) return;

    const section = ref.current;

    // Setup ScrollTrigger
    // Match the original offsets: "start center" and "end center" means:
    // When top of section hits center of viewport and when bottom hits center of viewport.
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        // self.progress goes from 0 to 1 as we scroll
        const progress = self.progress;

        // Update gradient y1 attribute based on scroll progress
        // Initially y1: 1 at progress=0 and y1: svgHeight at progress=1
        const newY1 = 1 + (svgHeight - 1) * progress;
        gsap.set(gradientRef.current, { attr: { y1: newY1 } });

        // Based on progress, update boxShadow and circle colors
        // Replicating:
        // When scrollYProgress > 0 => no box shadow, white inner circle
        // When scrollYProgress = 0 => drop shadow, emerald inner circle
        if (outerCircleRef.current && innerCircleRef.current) {
          if (progress > 0) {
            // Remove box shadow from outer circle container
            gsap.set(outerCircleRef.current, {
              boxShadow: "none",
            });
            // Inner circle white background
            gsap.set(innerCircleRef.current, {
              backgroundColor: "white",
              borderColor: "white",
            });
          } else {
            // Restore box shadow to outer circle container
            gsap.set(outerCircleRef.current, {
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            });
            // Inner circle emerald color
            gsap.set(innerCircleRef.current, {
              backgroundColor: "var(--emerald-500)",
              borderColor: "var(--emerald-600)",
            });
          }
        }
      },
    });

    // Animate the gradient path (if needed)
    // You could also animate the SVG path similarly if you want any additional effects.

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [svgHeight]);

  return (
    <div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className || "")}
    >
      <div className="absolute -left-4 md:-left-20 top-3">
        <div
          ref={outerCircleRef}
          className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center"
        >
          <div
            ref={innerCircleRef}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="2"
          ></path>
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2.5"
            className="motion-reduce:hidden"
          ></path>
          <defs>
            <linearGradient
              ref={gradientRef}
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1="1"
              y2="0"
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop offset="0.03" stopColor="#2563EB" stopOpacity="0.97"></stop>
              <stop stopColor="#2563EB"></stop>
              <stop offset="0.325" stopColor="#1D4ED8"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0.25"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
