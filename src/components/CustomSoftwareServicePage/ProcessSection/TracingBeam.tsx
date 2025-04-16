"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Define Props Interface
interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

// Define y2 as a constant outside the component
const Y2_CONSTANT = 0;

const TracingBeamComponent: React.FC<TracingBeamProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Set the offset so that:
  // 0 = top of section at viewport center
  // 1 = bottom of section at viewport center
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

  // Updated transforms to be [0,1] for simplicity and full sync with scroll
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, svgHeight + 50]),
    {
      stiffness: 1100,
      damping: 60,
    }
  );

  // Uncomment the following code if you want to use dynamic y2 in the future
  /*
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  */
  const y2 = Y2_CONSTANT;

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className || "")}
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
          aria-hidden="false"
          aria-label="Tracing Beam Visualization"
        >
          <motion.path
            d={`M 10 0V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="4.5"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 10 0V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="5.5"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop> {/* Cyan */}
              <stop offset="0.03" stopColor="#2563EB" stopOpacity="0.98"></stop> {/* Smaller light blue tip */}
              <stop stopColor="#2563EB"></stop> {/* Tailwind blue-600 */}
              <stop offset="0.325" stopColor="#1D4ED8"></stop> {/* Darker blue */}
              <stop offset="1" stopColor="#6002c9" stopOpacity="0.25"></stop> {/* Purple */}
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="h-full">{children}</div>
    </motion.div>
  );
};

// Export the memoized component
export const TracingBeam = memo(TracingBeamComponent);