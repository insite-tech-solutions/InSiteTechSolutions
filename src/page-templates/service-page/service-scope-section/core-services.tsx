/**
 * @fileoverview Core Services Section Component
 * 
 * This component displays the core services offered, featuring an interactive GSAP ScrollTrigger
 * animation where a section title pins while service cards scroll. It includes responsive design,
 * dynamic scroll calculations, and performance optimizations like memoization and debouncing.
 * 
 * Architecture:
 * - `CoreServicesWrapper`: Handles orientation changes and scroll position restoration to remount the main component.
 * - `CoreServicesMain`: Renders the main content and orchestrates the GSAP ScrollTrigger animation.
 * - `ServiceCard`: Memoized component for individual service items, with glassmorphism styling.
 * 
 * Key Features:
 * - GSAP ScrollTrigger for pinning and parallax scrolling effects.
 * - Dynamic calculation of scroll distances for flexible content.
 * - Orientation change detection to ensure correct layout and animation recalculations.
 * - Debouncing for resize and orientation handlers to optimize performance.
 * - Memoization of components to prevent unnecessary re-renders.
 * - Accessible markup with proper ARIA attributes.
 * - Glassmorphism design for service cards within a gradient background.
 * 
 * @see https://greensock.com/docs/v3/GSAP/gsap.registerPlugin()
 * @see https://greensock.com/docs/v3/Plugins/ScrollTrigger
 */

'use client'

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ServiceItem } from '../types'
import { CheckCircle } from 'lucide-react'
import { getIcon } from '@/utils/icon-registry'
import { HEADER_HEIGHT } from '@/lib/constants'

// Register GSAP ScrollTrigger plugin only if window is defined (client-side)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Simple debounce function to limit the rate at which a function is called.
 * Useful for performance optimization on events like window resize or scroll.
 * 
 * @template F - Type of the function to debounce.
 * @param {F} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to wait before invoking the function.
 * @returns {(...args: Parameters<F>) => void} A debounced version of the function.
 */
const debounce = <F extends (...args: unknown[]) => unknown>(
  func: F,
  wait: number
) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<F>): void {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Props interface for CoreServicesWrapper and CoreServicesMain components.
 */
interface CoreServicesProps {
  /** The main title for the core services section. */
  title: string
  /** The descriptive text for the core services section. */
  description: string
  /** An array of service items to display in the section. */
  services: ServiceItem[]
}

/**
 * ServiceCard Component
 * 
 * A memoized card component displaying a single service item with:
 * - Icon from the icon registry
 * - Title, description, and a list of benefits
 * - Glassmorphism styling with semi-transparent background
 * - Hover effects for visual feedback
 * 
 * @param {Object} props - Component props
 * @param {ServiceItem} props.service - The service item data to display.
 * @returns {JSX.Element} A memoized service card component.
 */
const ServiceCard = React.memo(function ServiceCard({ service }: { service: ServiceItem }): JSX.Element {
  // Get the icon component dynamically using the utility function
  const IconComponent = getIcon(service.icon);

  return (
    <article className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg transition-all group">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-blue-100">
          <IconComponent className="h-6 w-6 text-medium-blue-alt" />
        </div>
        <h3 className="text-xl font-semibold text-gray-50">{service.title}</h3>
      </div>
      <p className="text-gray-50 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 rounded-full text-very-light-grey-alt mt-0.5 flex-shrink-0" />
            <span className="text-gray-100">{benefit}</span>
          </li>
        ))}
      </ul>
    </article>
  )
})

/**
 * CoreServicesWrapper Component
 * 
 * This wrapper component is responsible for handling device orientation changes
 * and ensuring the `CoreServicesMain` component is re-rendered correctly.
 * It tracks scroll position before re-mounting and restores it afterward to
 * provide a seamless user experience during orientation shifts.
 * 
 * Features:
 * - Detects `resize` and `orientationchange` events.
 * - Debounces resize handler for performance.
 * - Stores and restores scroll position on orientation change.
 * - Uses a `key` prop to force re-mounting of `CoreServicesMain`.
 * 
 * @param {CoreServicesProps} props - Props passed down to `CoreServicesMain`.
 * @returns {JSX.Element} The wrapper component which conditionally renders `CoreServicesMain`.
 */
function CoreServicesWrapper(props: CoreServicesProps): JSX.Element {
  const [orientationKey, setOrientationKey] = useState<string>(() => {
    // Initialize with current orientation or default on client-side
    return typeof window !== 'undefined'
      ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')
      : 'portrait';
  });

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  /**
   * Callback to handle orientation or window resize changes.
   * If orientation changes, it saves the current scroll position and updates the orientation key.
   * 
   * @returns {void}
   */
  const handleOrientationOrResize = useCallback(() => {
    if (typeof window === 'undefined') return
    const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    if (newOrientation !== orientationKey) {
      setScrollPosition(window.scrollY)
      setOrientationKey(newOrientation)
    }
  }, [orientationKey, setScrollPosition])

  // Debounced version of handleOrientationOrResize for resize events
  const debouncedResizeHandler = useMemo(() => debounce(handleOrientationOrResize, 200), [handleOrientationOrResize])

  // Add and remove event listeners for resize and orientation changes
  useEffect(() => {
    window.addEventListener('resize', debouncedResizeHandler);
    window.addEventListener('orientationchange', handleOrientationOrResize);

    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
      window.removeEventListener('orientationchange', handleOrientationOrResize);
    };
  }, [debouncedResizeHandler, handleOrientationOrResize]);

  // Effect to restore scroll position after CoreServicesMain remounts
  useEffect(() => {
    if (scrollPosition > 0) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: scrollPosition, behavior: 'instant' });
        setScrollPosition(0);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [orientationKey, scrollPosition]); // Re-run when orientationKey or scrollPosition changes

  // Render the main component with a key that changes on orientation to force remount
  return <CoreServicesMain key={orientationKey} {...props} />;
};

/**
 * CoreServicesMain Component
 * 
 * This component renders the main core services section with a pinned title/description
 * and a scrolling list of service cards using GSAP ScrollTrigger.
 * It dynamically calculates scroll distances to ensure smooth and accurate animations.
 * 
 * Features:
 * - Pinned header/description section on scroll.
 * - Vertical scrolling animation for service cards.
 * - Dynamic calculation of scroll distance based on content heights.
 * - Responsive adjustments for mobile vs desktop layouts.
 * - GSAP ScrollTrigger setup with `invalidateOnRefresh` for responsive recalculations.
 * - Performance hints (`force3D`, `willChange`) for smoother animations.
 * 
 * Technical Implementation:
 * - `useRef` for DOM element references for GSAP targeting.
 * - `gsap.context` for isolated GSAP animations and proper cleanup.
 * - `ScrollTrigger.refresh(true)` for re-calculating values on resize.
 * - Debounced resize handler for optimized performance.
 * 
 * @param {CoreServicesProps} props - Props containing title, description, and service items.
 * @returns {JSX.Element} The main core services section with GSAP animations.
 */
function CoreServicesMain({ title, description, services }: CoreServicesProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const pinnedRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // GSAP ScrollTrigger setup and cleanup
  useEffect(() => {
    if (!containerRef.current || !cardsRef.current || !pinnedRef.current) return;
    
    const ctx = gsap.context(() => {
      /**
       * Calculates the necessary scroll distance for the animation.
       * Accounts for dynamic heights of cards and pinned elements, and mobile-specific offsets.
       * 
       * @returns {number} The calculated scroll distance in pixels.
       */
      const calculateScrollDistance = () => {
        const cardsHeight = cardsRef.current?.offsetHeight || 0;
        const pinnedHeight = pinnedRef.current?.offsetHeight || 0;
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
        // Adjust distance for mobile to accommodate different layout/spacing
        const distance = isMobile
          ? cardsHeight - pinnedHeight + HEADER_HEIGHT / 2 + 248 // Additional offset for mobile
          : cardsHeight - pinnedHeight + HEADER_HEIGHT / 2 // Standard offset for desktop
        
        // Ensure scroll distance is not negative
        return Math.max(0, distance);
      };

      // GSAP animation for the service cards
      gsap.to(cardsRef.current, {
        y: () => -calculateScrollDistance(), // Animate y based on dynamic calculation
        ease: 'none',
        force3D: true, // Optimizes for GPU rendering
        willChange: 'transform', // Hints browser about upcoming transform changes
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top ${HEADER_HEIGHT + 18}px`, // Start pinning when trigger top hits header height + padding from viewport top
          end: () => `+=${calculateScrollDistance()}`, // End pinning after scrolling calculated distance
          pin: pinnedRef.current, // Pin the header/description element
          pinSpacing: true, // Add padding to prevent content from jumping
          scrub: true, // Link scroll position to animation progress
          markers: false, // Set to true for debugging ScrollTrigger in browser
          invalidateOnRefresh: true, // Re-calculates dynamic values on refresh (e.g., resize)
        },
      });

      // Debounced resize handler to refresh ScrollTrigger on window resize
      const handleResize = debounce(() => {
        ScrollTrigger.refresh(true); // Forces re-evaluation of all ScrollTrigger values
      }, 150);

      // Add resize event listener
      window.addEventListener('resize', handleResize);

      // Cleanup function for event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, containerRef); // Context scope ensures GSAP animations and triggers are managed together

    // Cleanup GSAP context and kill all ScrollTriggers on component unmount
    return () => {
      ctx.revert() // Reverts all GSAP animations and ScrollTriggers created in this context
    }
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <main className="container mx-auto relative">
      <section aria-labelledby="core-services-title">
        {/* Hidden heading for screen readers - provides accessible section context */}
        <h2 id="core-services-title" className="sr-only">{title}</h2>
        <section ref={containerRef} className="relative">
          <div className="w-full">
            {/* Pinned Section Container (Title & Description) - Styled with gradient and glassmorphism effect */}
            <div
              ref={pinnedRef}
              className="rounded-xl w-full mx-auto p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt
              shadow-2xl overflow-hidden flex flex-col lg:flex-row"
              style={{
                height: `calc(100vh - ${HEADER_HEIGHT}px - 2rem)`, // Dynamic height calculation: viewport height - navbar height - padding
                minHeight: 0, // Prevents intrinsic height issues for flexible layout
              }}
            >
              {/* Left Side: Pinned Content (Title & Description) */}
              <header className="lg:w-1/2 lg:pr-6 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-50 text-center lg:text-left">
                  {title}
                </h2>
                <p className="text-base lg:text-lg text-gray-50 mb-3 leading-relaxed text-center lg:text-left">
                  {description}
                </p>
              </header>

              {/* Right Side: Scrollable Service Cards (Column) - Glassmorphism cards */}
              <div className="lg:w-1/2">
                <div ref={cardsRef} className="space-y-6 will-change-transform">
                  {services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default CoreServicesWrapper