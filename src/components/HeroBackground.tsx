// components/HeroBackground.tsx
"use client";
import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a utility function for class merging

// Types for the props
type GradientDirection = 
  | 'to-r' | 'to-br' | 'to-b' | 'to-bl' | 'to-l' | 'to-tl' | 'to-t' | 'to-tr';

type DecorType = 'circles' | 'squares' | 'icons' | 'none';

type DecorDensity = 'low' | 'medium' | 'high';

type HeightOption = 'screen' | 'tall' | 'short' | string;

// Color options using Tailwind's color palette
type ColorOption = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' 
  | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' 
  | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' 
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'white';

// Intensity options for colors
type ColorIntensity = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

interface HeroBackgroundProps {
  children: ReactNode;
  startColor?: `${ColorOption}-${ColorIntensity}`;
  endColor?: `${ColorOption}-${ColorIntensity}`;
  height?: HeightOption;
  decorType?: DecorType;
  decorColor?: `${ColorOption}-${ColorIntensity}`;
  decorOpacity?: number;
  decorIcons?: LucideIcon[];
  decorDensity?: DecorDensity;
  gradientDirection?: GradientDirection;
  className?: string;
}

const HeroBackground = ({
  children,
  startColor = 'blue-500',
  endColor = 'blue-700',
  height = 'screen',
  decorType = 'circles',
  decorColor = 'white-50',
  decorOpacity = 0.2,
  decorIcons = [],
  decorDensity = 'medium',
  gradientDirection = 'to-br',
  className = '',
}: HeroBackgroundProps) => {
  // Convert height to Tailwind class
  const heightClass = 
    height === 'screen' ? 'min-h-screen' :
    height === 'tall' ? 'min-h-[120vh]' :
    height === 'short' ? 'min-h-[80vh]' : 
    height.startsWith('min-h-') ? height : `min-h-[${height}]`;

  // Process color classes
  const fromColorClass = `from-${startColor}`;
  const toColorClass = `to-${endColor}`;
  const gradientClass = `bg-gradient-${gradientDirection}`;

  // Generate decorative elements
  const renderDecorElements = () => {
    if (decorType === 'none') return null;
    
    // Set number of elements based on density
    const count = decorDensity === 'low' ? 3 : decorDensity === 'medium' ? 6 : 10;
    const elements = [];

    // Helper function to get a random value within a range
    const getRandomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Generate random positions for decorative elements
    for (let i = 0; i < count; i++) {
      const size = getRandomValue(100, 250); // Random size between 100-250px
      const posX = getRandomValue(0, 100); // Random X position 0-100%
      const posY = getRandomValue(0, 100); // Random Y position 0-100%
      const rotation = getRandomValue(0, 360); // Random rotation 0-360 degrees
      const delay = getRandomValue(0, 5); // Random animation delay 0-5s
      
      const commonStyles = {
        width: `${size}px`,
        height: decorType === 'icons' ? 'auto' : `${size}px`,
        top: `${posY}%`,
        left: `${posX}%`,
        opacity: decorOpacity,
        '--rotation': `${rotation}deg`,
        animationDelay: `${delay}s`,
      } as React.CSSProperties;

      if (decorType === 'circles') {
        elements.push(
          <div 
            key={`decor-${i}`} 
            className={`rounded-full bg-${decorColor} absolute animate-float z-0`}
            style={commonStyles}
          />
        );
      } else if (decorType === 'squares') {
        elements.push(
          <div 
            key={`decor-${i}`} 
            className={`rounded-lg bg-${decorColor} absolute animate-float z-0`}
            style={commonStyles}
          />
        );
      } else if (decorType === 'icons' && decorIcons.length > 0) {
        const IconComponent = decorIcons[i % decorIcons.length];
        elements.push(
          <div 
            key={`decor-${i}`} 
            className="absolute animate-float z-0"
            style={commonStyles}
          >
            <IconComponent className={`text-${decorColor}`} size={size} />
          </div>
        );
      }
    }

    return elements;
  };

  return (
    <section 
      className={cn(
        'relative overflow-hidden flex items-center justify-center p-8',
        heightClass,
        gradientClass,
        fromColorClass,
        toColorClass,
        className
      )}
    >
      {/* Decorative elements */}
      {decorType !== 'none' && (
        <div className="absolute inset-0 overflow-hidden">
          {renderDecorElements()}
        </div>
      )}
      
      {/* Gradient overlay at the bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-gray-900 pointer-events-none z-10" />
      
      {/* Content container */}
      <div className="container mx-auto relative z-20">
        {children}
      </div>
    </section>
  );
};

export default HeroBackground;