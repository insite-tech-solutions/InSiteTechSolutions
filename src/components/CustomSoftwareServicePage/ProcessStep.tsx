// ProcessStep.tsx

'use client';

import React from 'react'
import { Clock } from 'lucide-react'
import { gsap } from 'gsap'

interface ProcessStepProps {
  step: number
  title: string
  description: string
  items: string[]
  timeline: string
  icon: React.ElementType
  animationDelay: number
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  items,
  timeline,
  icon: Icon,
  animationDelay
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const iconRef = React.useRef<HTMLDivElement | null>(null)
  const titleRef = React.useRef<HTMLHeadingElement | null>(null)
  const dividerRef = React.useRef<HTMLHRElement | null>(null)
  const descRef = React.useRef<HTMLParagraphElement | null>(null)
  const listRef = React.useRef<HTMLUListElement | null>(null)
  const timelineRef = React.useRef<HTMLDivElement | null>(null)
  const liRefs = React.useRef<(HTMLLIElement | null)[]>([])

  const [isInView, setIsInView] = React.useState(false)

  // Set initial states via gsap.set() to prevent flicker
  React.useLayoutEffect(() => {
    // Set all initial states to match the original "hidden" states
    if (!containerRef.current) return

    gsap.set(containerRef.current, { opacity: 0 })
    gsap.set(iconRef.current, { opacity: 0, scale: 0.8 })
    gsap.set(titleRef.current, { opacity: 0, y: 20 })
    gsap.set(dividerRef.current, { width: 0 })
    gsap.set(descRef.current, { opacity: 0, y: 20 })
    gsap.set(listRef.current, { opacity: 0 })
    liRefs.current.forEach((li) => {
      if (li) gsap.set(li, { opacity: 0, x: -20 })
    })
    gsap.set(timelineRef.current, { opacity: 0, y: 20 })
  }, [])

  // Intersection Observer to trigger animation when in view
  React.useEffect(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      }, { rootMargin: "-100px", threshold: 0.1 })

      observer.observe(containerRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  // GSAP animation when inView
  React.useEffect(() => {
    if (isInView && containerRef.current) {
      const tl = gsap.timeline({ paused: true })

      // Show container immediately, then delay children by animationDelay
      tl.to(containerRef.current, { opacity: 1, duration: 0.01 })
        .addLabel("startChildren", `+=${animationDelay}`)

        // Icon animation
        .to(iconRef.current,
          { opacity: 1, scale: 1, duration: 0.5, ease: "power1.out" },
          "startChildren"
        )

        // Title animation
        .to(titleRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
          "<+0.2" // starts 0.2s after icon animation starts
        )

        // Divider animation
        .to(dividerRef.current,
          { width: "calc(100% + 1.5rem)", duration: 0.8, ease: "power1.inOut" },
          "<+0.2"
        )

        // Description animation
        .to(descRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
          "<+0.2"
        )

        // List container fade in
        .to(listRef.current,
          { opacity: 1, duration: 0.5, ease: "power1.out" },
          "<+0.2"
        )

        // Animate list items in a staggered fashion
        .to(liRefs.current,
          { opacity: 1, x: 0, duration: 0.3, ease: "power1.out", stagger: 0.1 },
          "<" // start with list container's animation
        )

        // Timeline text animation
        .to(timelineRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
          "<+0.2"
        )

      tl.play()
    }
  }, [isInView, animationDelay])

  return (
    <div ref={containerRef} className="relative w-full md:w-2/3 mx-auto">
      {/* Step Content */}
      <div className="relative bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg border-[3px] border-blue-600">
        <div className="flex items-center gap-4 mb-4">
          <div
            ref={iconRef}
            className="p-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-900"
            aria-hidden="true"
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3
              ref={titleRef}
              className="text-2xl my-1 font-semibold text-gray-800"
            >
              {title}
            </h3>
            <hr
              ref={dividerRef}
              className="border-2 border-gray-300 my-1"
              aria-hidden="true"
            />
          </div>
        </div>

        <p
          ref={descRef}
          className="text-gray-700 mb-4"
        >
          {description}
        </p>

        <ul
          ref={listRef}
          className="space-y-2 mb-4 list-disc list-inside"
        >
          {items.map((item, index) => (
            <li
              key={index}
              ref={el => { liRefs.current[index] = el; }}
              className="text-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>

        <div
          ref={timelineRef}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
        >
          <Clock className="h-4 w-4" />
          <span>Timeline: {timeline}</span>
        </div>
      </div>
    </div>
  )
}

export default ProcessStep
