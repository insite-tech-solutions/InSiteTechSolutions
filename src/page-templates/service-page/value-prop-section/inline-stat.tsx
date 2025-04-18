// src/templates/service-page/sections/value-prop/inline-stat.tsx

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/**
 * Component for displaying animated inline statistics
 * 
 * Used within content files to create animated numbers within text.
 * 
 * @param value - The number to animate to
 * @param suffix - Optional suffix (e.g., "%", "h")
 * @param prefix - Optional prefix (e.g., "$")
 * @returns JSX.Element
 */
export function InlineStat({ 
  value, 
  suffix = '', 
  prefix = '' 
}: { 
  value: number, 
  suffix?: string, 
  prefix?: string 
}) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, controls]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="text-2xl font-bold text-medium-blue-alt inline-flex items-center"
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}