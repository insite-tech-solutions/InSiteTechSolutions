'use client'

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ServiceItem } from '../types'
import { CheckCircle } from 'lucide-react'
import { getIcon } from '@/utils/icon-registry'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Simple debounce function
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

interface CoreServicesProps {
  title: string
  description: string
  services: ServiceItem[]
}

/**
 * A memoized card component displaying a single service item
 * with icon, title, description, and benefits.
 */
const ServiceCard: React.FC<{
  service: ServiceItem
}> = ({ service }) => {
  // Get the icon using our registry
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
}

const MemoizedServiceCard = React.memo(ServiceCard)

// Wrapper component for orientation change handling
/**
 * CoreServicesWrapper handles orientation changes and scroll position
 * restoration to remount CoreServicesMain when device orientation changes.
 */
const CoreServicesWrapper: React.FC<CoreServicesProps> = (props) => {
  const [orientationKey, setOrientationKey] = useState<string>(() => {
    // Initialize with current orientation or default
    return typeof window !== 'undefined'
      ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')
      : 'portrait';
  });

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleOrientationOrResize = useCallback(() => {
    if (typeof window === 'undefined') return
    const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    if (newOrientation !== orientationKey) {
      setScrollPosition(window.scrollY)
      setOrientationKey(newOrientation)
    }
  }, [orientationKey, setScrollPosition])

  const debouncedResizeHandler = useMemo(() => debounce(handleOrientationOrResize, 200), [handleOrientationOrResize])

  useEffect(() => {
    // Add listeners
    window.addEventListener('resize', debouncedResizeHandler);
    window.addEventListener('orientationchange', handleOrientationOrResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
      window.removeEventListener('orientationchange', handleOrientationOrResize);
    };
  }, [debouncedResizeHandler, handleOrientationOrResize]);

  // Effect to restore scroll position after remount
  useEffect(() => {
    if (scrollPosition > 0) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: scrollPosition, behavior: 'instant' });
        setScrollPosition(0);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [orientationKey, scrollPosition]);

  // Render the main component with a key that changes on orientation
  return <CoreServicesMain key={orientationKey} {...props} />;
};

/**
 * CoreServicesMain renders the main section and sets up a GSAP
 * ScrollTrigger animation to pin the heading and scroll the service cards.
 */
const CoreServicesMain: React.FC<CoreServicesProps> = ({ title, description, services }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pinnedRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const ctx = gsap.context(() => {
      // Calculate the required scroll distance
      const calculateScrollDistance = () => {
        const cardsHeight = cardsRef.current?.offsetHeight || 0;
        const pinnedHeight = pinnedRef.current?.offsetHeight || 0;
        // Basic distance is the difference in heights
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
        const distance = isMobile
          ? cardsHeight - pinnedHeight + 48 + 236
          : cardsHeight - pinnedHeight + 48
        // Ensure distance is not negative
        return Math.max(0, distance);
      };

      gsap.to(cardsRef.current, {
        y: () => -calculateScrollDistance(), // Animate y based on dynamic calculation
        ease: 'none',
        force3D: true, // Add this for better GPU handling
        willChange: 'transform', // Add this to hint the browser about upcoming changes
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 128px', // 104px is the navbar height, 24px is the padding
          end: () => `+=${calculateScrollDistance()}`, // End based on dynamic calculation
          pin: pinnedRef.current,
          pinSpacing: true,
          scrub: true,
          markers: false, // Set to true for debugging
          invalidateOnRefresh: true, // Essential for re-calculating dynamic values
        },
      });

      // Debounced resize handler
      const handleResize = debounce(() => {
        // Refresh ScrollTrigger; true forces re-evaluation of function-based values
        ScrollTrigger.refresh(true);
      }, 150);

      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, containerRef);

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, []);

  return (
    <main className="container mx-auto relative">
      <section ref={containerRef} className="relative">
        <div className="w-full">
          {/* SINGLE BLUE CARD (Pinned) */}
          <div
            ref={pinnedRef}
            className="rounded-xl w-full mx-auto p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt
            shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            style={{
              height: `calc(100vh - 104px - 3rem)`, // Subtract navbar height and padding from viewport height
              minHeight: 0, // Prevent intrinsic height issues
            }}
          >
            {/* LEFT SIDE: Title & Description */}
            <header className="lg:w-1/2 lg:pr-6 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-50 text-center lg:text-left">
                {title}
              </h2>
              <p className="text-base lg:text-lg text-gray-50 mb-3 leading-relaxed text-center lg:text-left">
                {description}
              </p>
            </header>

            {/* RIGHT SIDE: Translucent Cards (Column) */}
            <div className="lg:w-1/2">
              <div ref={cardsRef} className="space-y-6 will-change-transform">
                {services.map((service) => (
                  <MemoizedServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CoreServicesWrapper