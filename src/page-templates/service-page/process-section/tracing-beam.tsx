/**
 * @fileoverview TracingBeam component for visualizing scroll progress
 * with a customizable gradient beam using Framer Motion.
 */

"use client";

/**
 * TracingBeam component that creates a visual tracking beam following scroll movement
 * 
 * This component renders a vertical beam that follows the user's scroll position,
 * creating a visual indicator of progress through the content.
 */

import React, { useEffect, useRef, useState, memo } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

/**
 * Utility function to conditionally join CSS class names.
 * @param classes - A list of strings, which can be CSS class names.
 * @returns A single string of joined CSS class names.
 */
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

/**
 * Props interface for the TracingBeam component.
 * Defines the expected properties for rendering the tracing beam.
 * @interface TracingBeamProps
 * @property {React.ReactNode} children - The child elements to be rendered within the tracing beam's scrollable area.
 * @property {string} [className] - Optional additional CSS classes to apply to the main container div.
 */
interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A constant representing the fixed `y2` value for the linear gradient.
 * This ensures the gradient's end point is static, contributing to the beam's visual effect.
 */
const Y2_CONSTANT = 0;

/**
 * TracingBeam component that creates a visual tracking beam following scroll movement.
 * This component renders a vertical beam that dynamically adjusts its gradient based on
 * the user's scroll position within its children content. It uses Framer Motion for
 * smooth animations and scroll tracking.
 *
 * The beam visually indicates scroll progress, appearing as a dynamic gradient line.
 * It's designed to be a subtle, non-intrusive scroll indicator.
 *
 * @component
 * @param {TracingBeamProps} props - The properties passed to the component.
 * @returns {JSX.Element} A React functional component that renders a tracing beam.
 */
const TracingBeamComponent: React.FC<TracingBeamProps> = ({
  children,
  className,
}: TracingBeamProps): JSX.Element => {
  /**
   * Ref for the main container div, used as the scroll target for `useScroll`.
   * This ref helps in determining the scroll progress relative to this specific section.
   */
  const ref = useRef<HTMLDivElement>(null);

  /**
   * `scrollYProgress` from `useScroll` hook.
   * Tracks the scroll progress within the `ref` element, normalized to a [0, 1] range.
   * The offset ensures that 0 corresponds to the top of the section at the viewport center
   * and 1 corresponds to the bottom of the section at the viewport center.
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  /**
   * Ref for the content wrapper div.
   * Used to measure the `offsetHeight` of the children content, which in turn determines
   * the SVG height to ensure the beam covers the entire content length.
   */
  const contentRef = useRef<HTMLDivElement>(null);

  /**
   * State to store the calculated height of the SVG.
   * This height is dynamically set based on the `offsetHeight` of the `contentRef`
   * to ensure the SVG beam spans the entire length of the content.
   */
  const [svgHeight, setSvgHeight] = useState(0);

  /**
   * Effect hook to measure the content height after initial render and on updates.
   * It sets the `svgHeight` state based on the `contentRef.current.offsetHeight`.
   */
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []); // Empty dependency array ensures this runs only once after mount

  /**
   * `y1` value for the linear gradient, animated using `useSpring`.
   * It transforms `scrollYProgress` from [0, 1] to [1, svgHeight + 50],
   * effectively moving the start point of the gradient (and thus the beam's head)
   * from the top to the bottom of the content as the user scrolls.
   * `stiffness` and `damping` control the spring animation's physics for a smooth feel.
   */
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
  /**
   * `y2` value for the linear gradient. Currently a constant, but can be made dynamic.
   * This determines the end point of the gradient.
   */
  const y2 = Y2_CONSTANT;

  {/* Container & SVG Beam */}
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
          aria-hidden="true"
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
              <stop stopColor="#2398ff" stopOpacity="0"></stop> {/* Cyan, zero opacity keeps the track mostly transparent until the tip */}
              <stop offset="0.03" stopColor="#0173e3" stopOpacity="0.98"></stop> {/* Smaller light blue tip */}
              <stop stopColor="#0773d6"></stop> {/* mild blue alt */}
              <stop offset="0.325" stopColor="#1d64cd"></stop> {/* medium blue alt */}
              <stop offset="1" stopColor="#0e72c8" stopOpacity="0.75"></stop> {/* medium blue */}
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      {/* Content Wrapper */}
      <div ref={contentRef} className="h-full">{children}</div>
    </motion.div>
  );
};

// Export the memoized component
export const TracingBeam = memo(TracingBeamComponent);