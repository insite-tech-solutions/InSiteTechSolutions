// hooks/useOrientation.ts
import { useState, useEffect } from 'react';

export type Orientation = 'portrait' | 'landscape';

export const useOrientation = () => {
  const [orientation, setOrientation] = useState<Orientation>(
    typeof window !== 'undefined' 
      ? window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      : 'portrait' // Default for SSR
  );
  
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  
  useEffect(() => {
    const handleOrientationChange = () => {
      const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
      
      if (newOrientation !== orientation) {
        // Store scroll position
        setScrollPosition(window.scrollY);
        // Update orientation
        setOrientation(newOrientation);
      }
    };
    
    // Handle both resize and orientationchange events
    window.addEventListener('orientationchange', () => {
      // Need a delay to get correct dimensions after orientation change
      setTimeout(handleOrientationChange, 100);
    });
    
    // Also handle regular resize that might be orientation changes
    let prevWidth = window.innerWidth;
    let prevHeight = window.innerHeight;
    
    const handleResize = () => {
      // Only check on significant size changes
      const widthChanged = Math.abs(window.innerWidth - prevWidth) > 100;
      const heightChanged = Math.abs(window.innerHeight - prevHeight) > 100;
      
      if (widthChanged || heightChanged) {
        prevWidth = window.innerWidth;
        prevHeight = window.innerHeight;
        handleOrientationChange();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [orientation]);
  
  // Restore scroll position after orientation change
  useEffect(() => {
    if (scrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 50);
    }
  }, [orientation, scrollPosition]);
  
  return { orientation, scrollPosition };
};