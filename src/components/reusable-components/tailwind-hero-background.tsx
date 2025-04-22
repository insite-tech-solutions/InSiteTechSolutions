// components/TailwindHeroBackground.tsx
"use client";
import React, { ReactNode } from 'react';
import { DecorElement } from '@/page-templates/service-page/types';

// Simple utility function to combine class names
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * A flexible Tailwind-based hero background component that can be easily reused
 * across different pages with customizable colors and decorative elements.
 */
interface TailwindHeroBackgroundProps {
  /** Content to render inside the hero section */
  children: ReactNode;
  /** Additional Tailwind classes for the section element */
  className?: string;
  /** Decorative elements to render in the background */
  decorElements?: DecorElement[];
}

const TailwindHeroBackground = ({
  children,
  className = "",
  decorElements = [],
}: TailwindHeroBackgroundProps) => {
  return (
    <section className={cn(
      'relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700',
      className
    )}
    style={{ minHeight: `calc(100vh - 104px)` }}
    >
      {/* Decorative elements */}
      {decorElements.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {decorElements.map((element, index) => {
            const { type, className: elementClass = "", style = {}, icon: Icon, size = 48 } = element;
            
            if (type === 'circle') {
              return (
                <div
                  key={`decor-${index}`}
                  className={cn('rounded-full absolute', elementClass)}
                  style={style}
                />
              );
            } else if (type === 'square') {
              return (
                <div
                  key={`decor-${index}`}
                  className={cn('rounded-lg absolute', elementClass)}
                  style={style}
                />
              );
            } else if (type === 'icon' && Icon) {
              return (
                <div
                  key={`decor-${index}`}
                  className={cn('absolute', elementClass)}
                  style={style}
                >
                  <Icon size={size} />
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
      
      {/* Content container */}
      <div className="container max-w-full relative z-10">
        {children}
      </div>
    </section>
  );
};

export default TailwindHeroBackground;