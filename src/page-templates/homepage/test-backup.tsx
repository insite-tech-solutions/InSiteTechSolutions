"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

// Testimonial type definition
type Testimonial = {
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
  image: string
}

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc.",
    content:
      "Working with this team transformed our digital presence. Their technical expertise and attention to detail exceeded our expectations. The solutions they delivered were not only innovative but also perfectly aligned with our business goals.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder",
    company: "StartupLaunch",
    content:
      "I've worked with many developers, but this team stands out for their professionalism and technical skill. They delivered our project ahead of schedule and were incredibly responsive throughout the entire process.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "GrowthMedia",
    content:
      "The custom solution they built for our marketing team has dramatically improved our workflow efficiency. Their understanding of both technology and business needs made them the perfect partner for our project.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "David Park",
    position: "CEO",
    company: "InnovateX",
    content:
      "From the initial consultation to the final delivery, the experience was seamless. They took the time to understand our unique challenges and delivered a solution that perfectly addressed our needs.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // For infinite loop on mobile
  const [mobileIndex, setMobileIndex] = useState(1) // Start at 1 because of cloned first slide
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Prepare slides for mobile: [last, ...testimonials, first]
  const mobileSlides = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ]

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Handle next/prev for mobile
  const handleMobileNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setMobileIndex((prev) => prev + 1)
  }
  const handleMobilePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setMobileIndex((prev) => prev - 1)
  }

  // After transition, jump to real slide if at clone
  useEffect(() => {
    if (!isTransitioning) return
    const handle = setTimeout(() => {
      setIsTransitioning(false)
      if (mobileIndex === 0) {
        setMobileIndex(testimonials.length)
      } else if (mobileIndex === testimonials.length + 1) {
        setMobileIndex(1)
      }
    }, 500) // match transition duration
    return () => clearTimeout(handle)
  }, [mobileIndex, isTransitioning, testimonials.length])

  // Navigation handlers
  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={cn("w-4 h-4", i < rating ? "text-blue-500 fill-blue-500" : "text-gray-300")} />
      ))
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          {/* Updated with rounded-full class for rounded ends */}
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our tech services and solutions.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop View - Carousel with 3 cards */}
          <div className="hidden md:flex justify-center items-center gap-6">
            {testimonials.map((testimonial, index) => {
              // Only render prev, active, next
              const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length
              const nextIndex = (activeIndex + 1) % testimonials.length
              if (index !== prevIndex && index !== activeIndex && index !== nextIndex) return null
              // Positioning
              let position = ""
              if (index === activeIndex) position = "z-20 scale-105 ring-2 ring-blue-500 shadow-xl"
              else position = "z-10 opacity-80"
              return (
                <div
                  key={testimonial.id}
                  className={cn(
                    "bg-white rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:shadow-xl cursor-pointer",
                    position,
                    index === prevIndex ? "-translate-x-6" : "",
                    index === nextIndex ? "translate-x-6" : "",
                  )}
                  style={{ minWidth: "320px", maxWidth: "350px" }}
                  onClick={() => {
                    setActiveIndex(index)
                    setAutoplay(false)
                  }}
                >
                  {/* Added quote icon */}
                  <div className="relative mb-6">
                    <div className="absolute -top-4 -left-4 text-blue-400 opacity-20">
                      <Quote size={48} />
                    </div>
                    <div className="relative z-10">
                      <p className="text-gray-700 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                    </div>
                  </div>
                  {/* Moved details to bottom */}
                  <div className="flex items-center mt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-blue-100">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                      <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile View - Carousel with sliding transition and infinite loop */}
          <div className="md:hidden overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${mobileIndex * 100}%)`,
                transitionProperty: isTransitioning ? 'transform' : 'none',
              }}
              onTransitionEnd={() => {
                // This is handled by useEffect
              }}
            >
              {mobileSlides.map((testimonial) => (
                <div
                  key={testimonial.id + Math.random()} // ensure unique key for clones
                  className="min-w-full bg-white rounded-xl shadow-lg p-6"
                >
                  {/* Added quote icon to mobile view */}
                  <div className="relative mb-6">
                    <div className="absolute -top-4 -left-4 text-blue-400 opacity-20">
                      <Quote size={48} />
                    </div>
                    <div className="relative z-10">
                      <p className="text-gray-700 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                    </div>
                  </div>
                  {/* Moved details to bottom in mobile view */}
                  <div className="flex items-center mt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-blue-100">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                      <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Controls for mobile */}
            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={handleMobilePrev}
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isTransitioning) return
                      setMobileIndex(index + 1)
                    }}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      index + 1 === mobileIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-blue-400",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleMobileNext}
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index)
                    setAutoplay(false)
                  }}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-blue-400",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
