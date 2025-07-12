/**
 * @fileoverview Reusable Testimonial Card Component
 *
 * A presentational component designed to display individual customer testimonials.
 * It features a quote, author information (name, position, company, image), and an initials avatar.
 * The component is designed to be interactive, visually appealing, and optimized for use within carousels or testimonial sections.
 */
"use client"

import { Quote, User, Building } from "lucide-react"
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
  /** The position or title of the person (optional). */
  position?: string
  /** The company or organization the person represents (optional). */
  company?: string
  /** The actual content of the testimonial quote. */
  content: string
  /** The URL or path to the author's profile image (optional). */
  image?: string
  /** Whether this is a business testimonial (affects avatar icon). */
  isBusiness?: boolean
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
 * Helper function to generate initials from a name.
 * Extracts first letter of first name and first letter of last name.
 *
 * @param {string} name - The full name to extract initials from.
 * @returns {string} The initials (e.g., "JD" for "John Doe").
 */
const getInitials = (name: string): string => {
  const parts = name.trim().split(' ')
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase()
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

/**
 * Helper function to render the avatar for a testimonial.
 * Uses initials if available, falls back to appropriate icon.
 *
 * @param {Testimonial} testimonial - The testimonial data.
 * @returns {JSX.Element} The avatar element.
 */
const renderAvatar = (testimonial: Testimonial): JSX.Element => {
  const initials = getInitials(testimonial.name)
  
  // If we have initials (more than 0 characters), use them
  if (initials.length > 0) {
    return (
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <span className="text-medium-blue font-semibold text-xl">
          {initials}
        </span>
      </div>
    )
  }
  
  // Fallback to icon
  const IconComponent = testimonial.isBusiness ? Building : User
  return (
    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
      <IconComponent className="w-6 h-6 text-white" />
    </div>
  )
}

/**
 * TestimonialCard component
 *
 * A visually appealing card component used to display individual customer testimonials.
 * It features the customer's quote, their name, position, company, and an initials avatar.
 * The card includes styling for active/inactive states, making it ideal for carousels or interactive displays.
 *
 * Features:
 * - **Quote Display**: Clearly presents the customer's testimonial text.
 * - **Author Information**: Shows the author's name, position, and company (when available).
 * - **Initials Avatar**: Uses initials in a blue circle, with fallback to appropriate icons.
 * - **Dynamic Styling**: Adjusts appearance based on `isActive` prop for use in interactive contexts like carousels.
 * - **Responsive Design**: Adapts its layout and text size for different screen sizes.
 * - **Accessibility**: Uses semantic HTML and ARIA attributes where appropriate.
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
 *   isBusiness: true,
 * };
 *
 * <TestimonialCard testimonial={myTestimonial} isActive={true} />
 *
 * const anotherTestimonial = {
 *   id: 2,
 *   name: "John Smith",
 *   content: "The SEO strategies implemented by InSite Tech significantly increased our online visibility and lead generation. Highly recommend!",
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
        <div className="ring-2 ring-blue-100 rounded-full mr-4 flex-shrink-0">
          {renderAvatar(testimonial)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-base md:text-lg">{testimonial.name}</h3>
          {(testimonial.position || testimonial.company) && (
            <p className="text-sm text-gray-600">
              {testimonial.position && testimonial.company 
                ? `${testimonial.position}, ${testimonial.company}`
                : testimonial.position || testimonial.company
              }
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(TestimonialCard);