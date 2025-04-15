// CoreServices.tsx
'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Cog, Cpu, Shield, Layers, CheckCircle } from 'lucide-react'


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
 * CoreServices: The pinned blue card with text on left, translucent cards on right.
 * The pinned container unpins once the final translucent card has fully scrolled into view.
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
      // Get the height of the cards container
      const cardsHeight = cardsRef.current?.getBoundingClientRect().height || 0;
      // Get the height of the pinned container (blue card)
      const pinnedHeight = pinnedRef.current?.getBoundingClientRect().height || 0;
      
      // Calculate the distance we need to scroll
      // This will be the total height of cards minus the visible height of the pinned container
      // Plus any padding you want at the bottom (matching the top padding)
      const scrollDistance = window.innerWidth < 768 // Tailwind's md breakpoint
        ? cardsHeight - pinnedHeight + 48 + 236 // Increase scroll distance for mobile
        : cardsHeight - pinnedHeight + 48; // Default for larger screens

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: () => `top 128px`, // 104px is the navbar height, 24px is the padding
          end: `+=${scrollDistance}`,
          pin: pinnedRef.current,
          pinSpacing: true,
          scrub: true,
          markers: true,
        },
      })

      // Move the cards container upward by the calculated scroll distance
      tl.to(cardsRef.current, { 
        y: -scrollDistance,
        ease: 'none'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="container mx-auto bg-gray-50">
      <section ref={containerRef} className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* SINGLE BLUE CARD (Pinned) */}
          <div
            ref={pinnedRef}
            // We set a fixed height so it only shows ~1 translucent card by default
            className="rounded-xl w-full mx-auto p-6 bg-gradient-to-br from-medium-blue via-blue-800 to-medium-blue-alt 
            shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            style={{
              // Subtract hardcoded navbar height and padding (top+bottom) from viewport height
              height: `calc(100vh - 104px - 3rem)`,
              minHeight: 0,
              overflow: 'hidden'
            }}
          >
            {/* LEFT SIDE: Title & Description */}
            <div className="lg:w-1/2 lg:pr-6 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-50 text-center md:text-left">
                Specialized Custom Software Development
              </h2>
              <p className="text-base md:text-lg text-gray-50 mb-3 leading-relaxed text-center md:text-left">
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
          </div>

          {/* SPACER to allow enough scroll for unpinning */}
          {/* <div className="h-[100vh]" /> */}
        </div>
      </section>
    </div>
  )
}

export default CoreServices
