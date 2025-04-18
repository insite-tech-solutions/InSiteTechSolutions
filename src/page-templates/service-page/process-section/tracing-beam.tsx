// src/page-templates/service-page/process-section/tracing-beam.tsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * TracingBeam creates a animated beam that follows the scrolling
 * to create a visual path through the timeline.
 */
const TracingBeam: React.FC<TracingBeamProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Set the offset for scrolling
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  // Track progress for the beam
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, svgHeight + 50]),
    {
      stiffness: 1100,
      damping: 60,
    }
  );

  // Fixed y2
  const y2 = 0;

  return (
    <motion.div
      ref={ref}
      className={`relative w-full max-w-4xl mx-auto h-full ${className || ""}`}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex justify-center">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="block"
          style={{ 
            minHeight: '100%',
            width: '100%',
          }}
          aria-hidden="true"
        >
          {/* Background path */}
          <motion.path
            d={`M 10 0V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="4.5"
          />
          
          {/* Animated foreground path */}
          <motion.path
            d={`M 10 0V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="5.5"
            className="motion-reduce:hidden"
          />
          
          {/* Gradient for the beam */}
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop offset="0.03" stopColor="#2563EB" stopOpacity="0.98" />
              <stop stopColor="#2563EB" />
              <stop offset="0.325" stopColor="#1D4ED8" />
              <stop offset="1" stopColor="#6002c9" stopOpacity="0.25" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="h-full">{children}</div>
    </motion.div>
  );
};

export default TracingBeam;