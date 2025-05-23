"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

// Testimonial type definition (can be imported from a shared types file if available)
interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
  image: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  isActive?: boolean // Injected by Swiper/CarouselSection for active slide styling
}

const renderStars = (rating: number) => {
  return Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < rating ? "text-blue-500 fill-blue-500" : "text-gray-300",
        )}
      />
    ))
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 transform mx-auto",
        "md:opacity-70", // Default opacity for desktop non-active slides
        isActive && "md:scale-105 md:opacity-100 md:shadow-xl ring-2 ring-blue-500", // Active slide styling on desktop, blue border
        !isActive && "md:scale-95", // Non-active side slides slightly smaller
        "w-full max-w-md md:max-w-2xl", // Wider card on desktop
      )}
    >
      <div className="relative mb-6">
        <div className="absolute -top-4 -left-4 text-blue-400 opacity-20">
          <Quote size={48} />
        </div>
        <div className="relative z-10">
          <p className="text-gray-700 italic leading-relaxed min-h-[120px] md:min-h-[160px] text-sm md:text-base">
            &ldquo;{testimonial.content}&rdquo;
          </p>
        </div>
      </div>
      <div className="flex items-center mt-auto pt-4"> {/* mt-auto pushes this to bottom, pt-4 for spacing */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-blue-100 flex-shrink-0">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-base md:text-lg">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">
            {testimonial.position}, {testimonial.company}
          </p>
          <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard 