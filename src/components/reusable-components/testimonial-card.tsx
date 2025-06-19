/**
 * @fileoverview Reusable Testimonial Card Component
 *
 * A presentational component designed to display individual customer testimonials.
 * It features a quote, author information (name, position, company, image), and a star rating.
 * The component is designed to be interactive, visually appealing, and optimized for use within carousels or testimonial sections.
 */
"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { memo } from 'react';

/**
 * Defines the structure for a testimonial object.
 * This interface ensures consistency for testimonial data used throughout the application.
 */
interface Testimonial {
  /** A unique identifier for the testimonial. */
  id: number
  /** The full name of the person giving the testimonial. */
  name: string
  /** The position or title of the person. */
  position: string
  /** The company or organization the person represents. */
  company: string
  /** The actual content of the testimonial quote. */
  content: string
  /** A numerical rating from 1 to 5, representing the customer's satisfaction. */
  rating: number
  /** The URL or path to the author's profile image. */
  image: string
}

/**
 * Props for the TestimonialCard component.
 */
interface TestimonialCardProps {
  /** The testimonial data object to be displayed in the card. */
  testimonial: Testimonial
  /** Optional. If true, applies active styling to the card, typically when it's the currently visible slide in a carousel. */
  isActive?: boolean // Injected by Swiper/CarouselSection for active slide styling
}

/**
 * Helper function to render a visual star rating.
 * Generates 5 star icons, filling them based on the provided `rating`.
 *
 * @param {number} rating - The rating value (1-5) to display.
 * @returns {JSX.Element[]} An array of `Star` icons representing the rating.
 */
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

/**
 * TestimonialCard component
 *
 * A visually appealing card component used to display individual customer testimonials.
 * It features the customer's quote, their name, position, company, a profile image,
 * and a star rating. The card includes styling for active/inactive states, making it ideal
 * for carousels or interactive displays.
 *
 * Features:
 * - **Quote Display**: Clearly presents the customer's testimonial text.
 * - **Author Information**: Shows the author's name, position, company, and profile picture.
 * - **Star Rating**: Visually represents the customer's rating out of five stars.
 * - **Dynamic Styling**: Adjusts appearance based on `isActive` prop for use in interactive contexts like carousels.
 * - **Responsive Design**: Adapts its layout and text size for different screen sizes.
 * - **Accessibility**: Uses semantic HTML and ARIA attributes where appropriate (e.g., `aria-hidden` for decorative icon).
 * - **Memoization**: Wrapped with `memo` to optimize performance by preventing unnecessary re-renders.
 *
 * @param {TestimonialCardProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered testimonial card component.
 *
 * @example
 * ```tsx
 * import TestimonialCard from '@/components/reusable-components/testimonial-card';
 *
 * const myTestimonial = {
 *   id: 1,
 *   name: "Jane Doe",
 *   position: "CEO",
 *   company: "Innovate Corp",
 *   content: "Working with InSite Tech was a game-changer for our business. Their custom software solution streamlined our operations and boosted efficiency!",
 *   rating: 5,
 *   image: "/images/jane-doe.jpg",
 * };
 *
 * <TestimonialCard testimonial={myTestimonial} isActive={true} />
 *
 * const anotherTestimonial = {
 *   id: 2,
 *   name: "John Smith",
 *   position: "Marketing Director",
 *   company: "Global Brands",
 *   content: "The SEO strategies implemented by InSite Tech significantly increased our online visibility and lead generation. Highly recommend!",
 *   rating: 4,
 *   image: "/images/john-smith.jpg",
 * };
 *
 * <TestimonialCard testimonial={anotherTestimonial} />
 * ```
 */
function TestimonialCard({ testimonial, isActive }: TestimonialCardProps): JSX.Element {
  return (
    // Card Container
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
          <Quote size={48} aria-hidden="true" />
        </div>
        {/* Quote Content */}
        <div className="relative z-10">
          <p className="text-gray-700 italic leading-relaxed min-h-[120px] md:min-h-[160px] text-sm md:text-base">
            &ldquo;{testimonial.content}&rdquo;
          </p>
        </div>
      </div>
      {/* Author Info */}
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

export default memo(TestimonialCard);