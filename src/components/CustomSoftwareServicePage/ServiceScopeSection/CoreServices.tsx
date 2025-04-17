// CoreServices.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Cog, Cpu, Shield, Layers, CheckCircle } from 'lucide-react'

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

// *** Wrapper Component for Orientation Change Handling ***
const CoreServicesWrapper: React.FC = () => {
  const [orientationKey, setOrientationKey] = useState<string>(() => {
    // Initialize with current orientation or default
    return typeof window !== 'undefined'
      ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')
      : 'portrait';
  });

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const currentOrientation = orientationKey;

    const handleOrientationOrResize = () => {
      const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

      if (newOrientation !== currentOrientation) {
        // Store scroll position before remount
        setScrollPosition(window.scrollY);
        // Update key to trigger remount
        setOrientationKey(newOrientation); // This also updates currentOrientation via state
      }
    };

    // Debounced handler for resize events
    const debouncedResizeHandler = debounce(() => {
        handleOrientationOrResize();
    }, 200); // Use debounce to avoid excessive checks during resize drag

    // Add listeners
    window.addEventListener('resize', debouncedResizeHandler);
    // Use orientationchange for direct detection on mobile
    window.addEventListener('orientationchange', handleOrientationOrResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
      window.removeEventListener('orientationchange', handleOrientationOrResize);
    };
  }, [orientationKey]); // Rerun effect if orientationKey changes (to update currentOrientation)

  // Effect to restore scroll position after remount
  useEffect(() => {
    if (scrollPosition > 0) {
      // Use a short timeout to allow the layout to settle after remount
      const timer = setTimeout(() => {
        window.scrollTo({ top: scrollPosition, behavior: 'instant' });
        // Reset scroll position state after restoring
        setScrollPosition(0);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [orientationKey, scrollPosition]); // Depend on key change and stored position

  // Render the main component with a key that changes on orientation
  return <CoreServices key={orientationKey} />;
};

/**
 * ServiceCard: A single translucent "white" card
 */
interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  benefits: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  benefits,
}) => {
  return (
    <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg transition-all group">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-blue-100 group-hover:bg-medium-blue-alt transition-colors">
          <Icon className="h-6 w-6 text-medium-blue-alt group-hover:text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-50">{title}</h3>
      </div>
      <p className="text-gray-50 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 rounded-full bg-blue-100 text-medium-blue-alt mt-1 flex-shrink-0" />
            <span className="text-gray-100">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * CoreServices: The main component with the GSAP animation. pinned blue card with text on left, translucent cards on right
 * Handles standard resize events internally.
 * Remounted by CoreServicesWrapper on orientation change.
 */
const CoreServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)  // Section wrapping everything
  const pinnedRef = useRef<HTMLDivElement>(null)     // The single blue pinned card
  const cardsRef = useRef<HTMLDivElement>(null)      // Container holding the translucent cards

  // Sample service data
  const services = [
    {
      icon: Code,
      title: 'Bespoke Software & Desktop Application Development',
      description:
        "We develop custom software that addresses your specific business or research objectives, whether that's automating workflows, integrating systems, or solving complex computational problems.",
      benefits: [
        'Custom desktop and server applications',
        'Industry-specific tools and utilities',
        'Data processing and analytics platforms',
        'Enterprise Resource Planning (ERP) systems',
      ],
    },
    {
      icon: Cog,
      title: 'System Integration & API Development',
      description:
        'Seamlessly connect disparate systems and ensure smooth data flow across your organization.',
      benefits: [
        'Seamless connection of disparate systems',
        'Custom API design and implementation',
        'Legacy system integration',
        'Cloud service integration',
      ],
    },
    {
      icon: Cpu,
      title: 'Computational Science & Simulations',
      description:
        'Harness the power of computational science to drive innovation and research.',
      benefits: [
        'Scientific computing solutions',
        'Process simulation and modeling',
        'Data analysis and visualization tools',
        'Research and development tools',
      ],
    },
    {
      icon: Shield,
      title: 'Legacy Software Modernization',
      description:
        'Upgrade and enhance your existing software to meet current standards and performance requirements.',
      benefits: [
        'Codebase modernization',
        'Platform migration',
        'Performance optimization',
        'Security updates and improvements',
      ],
    },
    {
      icon: Layers,
      title: 'Inverse Design & Process Optimization',
      description:
        'Optimize your design processes and operations through advanced algorithms and machine learning.',
      benefits: [
        'Automated design optimization',
        'Machine learning integration',
        'Performance modeling',
        'Predictive analytics',
      ],
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Simplified function to calculate the required scroll distance
      const calculateScrollDistance = () => {
        const cardsHeight = cardsRef.current?.offsetHeight || 0;
        const pinnedHeight = pinnedRef.current?.offsetHeight || 0;
        // Basic distance is the difference in heights
        const distance = window.innerWidth < 1024 // Tailwind's lg breakpoint
        ? cardsHeight - pinnedHeight + 48 + 236 // Increase scroll distance for mobile
        : cardsHeight - pinnedHeight + 48; // Default for larger screens
        // Ensure distance is not negative
        return Math.max(0, distance);
      };

      gsap.to(cardsRef.current, {
        y: () => -calculateScrollDistance(), // Animate y based on dynamic calculation
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 128px', // 104px is the navbar height, 24px is the padding
          end: () => `+=${calculateScrollDistance()}`, // End based on dynamic calculation
          pin: pinnedRef.current,
          pinSpacing: true,
          scrub: true,
          markers: true, // Keep markers for debugging
          invalidateOnRefresh: true, // Essential for re-calculating dynamic values
        },
      });

      // Debounced resize handler *within* CoreServices for standard resize
      const handleResize = debounce(() => {
        // Refresh ScrollTrigger; true forces re-evaluation of function-based values
        ScrollTrigger.refresh(true);
      }, 150);

      window.addEventListener('resize', handleResize);

      // Cleanup function for this component's listeners
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []) // Empty dependency array ensures this runs only once on mount

  return (
    <div className="container mx-auto bg-gray-50">
      <section ref={containerRef} className="relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* SINGLE BLUE CARD (Pinned) */}
          <div
            ref={pinnedRef}
            // We set a fixed height so it only shows ~1 translucent card by default
            className="rounded-xl w-full mx-auto p-6 bg-gradient-to-br from-medium-blue via-blue-800 to-medium-blue-alt
            shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            style={{
              height: `calc(100vh - 104px - 3rem)`, // Subtract navbar height and padding (top+bottom) from viewport height
              minHeight: 0, // Prevent intrinsic height issues
            }}
          >
            {/* LEFT SIDE: Title & Description */}
            <div className="lg:w-1/2 lg:pr-6 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-50 text-center lg:text-left">
                Specialized Custom Software Development
              </h2>
              <p className="text-base lg:text-lg text-gray-50 mb-3 leading-relaxed text-center lg:text-left">
                We develop custom software that addresses your specific business
                or research objectives, whether that&apos;s automating workflows,
                integrating systems, or solving complex computational problems.
              </p>
            </div>

            {/* RIGHT SIDE: Translucent Cards (Column) */}
            <div className="lg:w-1/2">
              <div ref={cardsRef} className="space-y-6">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>

            {/* SPACER to allow enough scroll for unpinning */}
           {/* <div className="h-[100vh]" /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

// Export the wrapper component as the default
export default CoreServicesWrapper
