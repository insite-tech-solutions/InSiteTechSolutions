/**
 * @fileoverview Slideshow Context for Global State Management
 *
 * This module provides a React context for managing global slideshow state across
 * the application. It enables coordination between multiple slideshow components
 * and allows external controls to pause all slideshows simultaneously.
 *
 * Features:
 * - Global slideshow state management
 * - Active slideshow tracking and control
 * - Pause all slideshows functionality
 * - Type-safe context interface
 * - Custom hook for easy consumption
 * - Error handling for improper usage
 *
 * @module slideshow-context
 */

'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

/**
 * SlideshowContextType Interface
 * 
 * Defines the structure for the slideshow context value, providing
 * state management and control functions for slideshow components.
 * 
 * @interface SlideshowContextType
 * @property {string | null} activeSlideshow - ID of the currently active slideshow
 * @property {(id: string | null) => void} setActiveSlideshow - Function to set the active slideshow
 * @property {(id: string) => boolean} isSlideShowActive - Function to check if a slideshow is active
 * @property {() => void} pauseAll - Function to pause all slideshows
 */
interface SlideshowContextType {
  activeSlideshow: string | null;
  setActiveSlideshow: (id: string | null) => void;
  isSlideShowActive: (id: string) => boolean;
  pauseAll: () => void;
}

/**
 * Slideshow Context Instance
 * 
 * React context for managing global slideshow state.
 * Initialized as undefined to enable proper error handling.
 * 
 * @constant {React.Context<SlideshowContextType | undefined>}
 */
const SlideshowContext = createContext<SlideshowContextType | undefined>(undefined);

/**
 * SlideshowProvider Component
 * 
 * Context provider that manages global slideshow state and provides
 * control functions to child components.
 * 
 * Features:
 * - Global state management for active slideshow
 * - Memoized callback functions for performance
 * - Pause all functionality for external control
 * - Type-safe context value structure
 * 
 * @component SlideshowProvider
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to wrap with context
 * @returns {JSX.Element} Context provider with slideshow state management
 */
export function SlideshowProvider({ children }: { children: ReactNode }): JSX.Element {
  const [activeSlideshow, setActiveSlideshow] = useState<string | null>(null);

  /**
   * Check if a specific slideshow is currently active
   * 
   * @param {string} id - The slideshow ID to check
   * @returns {boolean} True if the slideshow is active, false otherwise
   */
  const isSlideShowActive = useCallback((id: string) => activeSlideshow === id, [activeSlideshow]);

  /**
   * Pause all slideshows by clearing the active slideshow state
   * 
   * This function allows external components (like page transitions)
   * to force-stop all slideshows simultaneously.
   */
  const pauseAll = useCallback(() => {
    setActiveSlideshow(null);
  }, []);

  return (
    <SlideshowContext.Provider value={{
      activeSlideshow,
      setActiveSlideshow,
      isSlideShowActive,
      pauseAll,
    }}>
      {children}
    </SlideshowContext.Provider>
  );
}

/**
 * useSlideshow Custom Hook
 * 
 * Custom hook that provides access to the slideshow context.
 * Includes error handling for improper usage outside of provider.
 * 
 * Features:
 * - Type-safe context access
 * - Error handling for missing provider
 * - Clean API for slideshow state management
 * 
 * @function useSlideshow
 * @returns {SlideshowContextType} The slideshow context value
 * @throws {Error} When used outside of SlideshowProvider
 */
export function useSlideshow(): SlideshowContextType {
  const context = useContext(SlideshowContext);
  if (context === undefined) {
    throw new Error('useSlideshow must be used within a SlideshowProvider');
  }
  return context;
} 