// hooks/useBreakpoint.ts
import { useState, useEffect } from 'react';

// Define breakpoints to match Tailwind's defaults
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('md');
  const [width, setWidth] = useState<number>(0);
  
  useEffect(() => {
    // Function to determine breakpoint based on window width
    const calculateBreakpoint = () => {
      const width = window.innerWidth;
      setWidth(width);
      
      if (width < 640) return 'xs';
      if (width < 768) return 'sm';
      if (width < 1024) return 'md';
      if (width < 1280) return 'lg';
      if (width < 1536) return 'xl';
      return '2xl';
    };
    
    // Set initial breakpoint
    setBreakpoint(calculateBreakpoint());
    
    // Add event listener for resize
    const handleResize = () => {
      setBreakpoint(calculateBreakpoint());
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return { breakpoint, width };
};