/**
 * @fileoverview Testimonials Section Component for Homepage
 *
 * This component creates a client testimonials carousel with automatic
 * sliding, responsive design, and custom styling. Features Swiper.js
 * integration with custom navigation and pagination styling.
 *
 * Features:
 * - Automatic carousel with loop and autoplay functionality
 * - Responsive design with different slides per view
 * - Custom navigation buttons and pagination styling
 * - Framer Motion entrance animations
 * - Reusable CarouselSection and TestimonialCard components
 * - Global CSS styling for Swiper elements
 *
 * @module TestimonialsSection
 */

"use client"

import { memo } from 'react';

import CarouselSection from "@/components/reusable-components/carousel-section"
import TestimonialCard from "@/components/reusable-components/testimonial-card" // Adjusted import path
import { SwiperProps } from "swiper/react";
import { motion } from 'framer-motion';

/**
 * Testimonial data structure
 * 
 * Defines the structure for client testimonial data including
 * identification, personal information, and content.
 * 
 * @interface Testimonial
 * @property {number} id - Unique identifier for the testimonial
 * @property {string} name - Client's name
 * @property {string} [position] - Client's position (optional)
 * @property {string} [company] - Client's company (optional)
 * @property {string} content - The testimonial content/quote
 * @property {string} [image] - Client's profile image (optional)
 * @property {boolean} [isBusiness] - Whether this is a business testimonial
 */
interface Testimonial {
  id: number
  name: string
  position?: string
  company?: string
  content: string
  image?: string
  isBusiness?: boolean
}

/**
 * Sample testimonial data
 * 
 * Static array of client testimonials showcasing
 * positive feedback and experiences with the company.
 * 
 * @constant {Testimonial[]} testimonialsData
 */
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Alex R.",
    content:
      "[InSite Tech] was incredibly responsive and made the entire development process feel seamless. They translated my vision into a website that works beautifully.",
    isBusiness: true,
  },
  {
    id: 2,
    name: "Michael C.",
    content:
      "I had a rough idea of what I needed, and [InSite Tech] helped turn it into a complete solution. Highly recommended.",
    isBusiness: true,
  },
  {
    id: 3,
    name: "Anonymous",
    content:
      "[InSite Tech]'s technical skill and attention to detail really impressed me. I appreciated the clear communication throughout the project.",
    isBusiness: true,
  },
  {
    id: 4,
    name: "David Park",
    content:
      "The website redesign completely transformed our online presence. They were incredibly responsive and helped build exactly what we envisioned.",
    isBusiness: true,
  },
];

/**
 * TestimonialsSection Component
 * 
 * Creates a client testimonials carousel with automatic sliding,
 * responsive design, and custom styling. Uses Swiper.js for
 * carousel functionality with custom navigation and pagination.
 * 
 * The component includes:
 * - Automatic carousel with loop and autoplay functionality
 * - Responsive design with different slides per view for different screen sizes
 * - Custom navigation buttons with circular styling
 * - Custom pagination with elongated active bullet
 * - Framer Motion entrance animations
 * - Reusable CarouselSection and TestimonialCard components
 * - Global CSS styling for Swiper elements
 * 
 * Carousel Configuration:
 * - Loop: Continuous carousel with infinite scrolling
 * - Autoplay: 4-second delay between slides
 * - Centered slides for better visual focus
 * - Responsive breakpoints for different screen sizes
 * - Custom navigation and pagination styling
 * 
 * @returns {JSX.Element} Client testimonials carousel section
 * 
 * @example
 * ```tsx
 * <TestimonialsSection />
 * ```
 */
function TestimonialsSection(): JSX.Element {
  // Handle empty testimonials case
  if (!testimonialsData || testimonialsData.length === 0) {
    return (
      <section>
        <div className="container mx-auto px-4 text-center">
          <p>No testimonials yet.</p>
        </div>
      </section>
    );
  }

  // Generate testimonial cards from data
  const testimonialCards = testimonialsData.map((testimonial) => (
    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
  ));

  /**
   * Swiper configuration parameters
   * 
   * Defines the carousel behavior including autoplay,
   * responsive breakpoints, navigation, and pagination.
   * 
   * @constant {SwiperProps} swiperParams
   */
  const swiperParams: SwiperProps = {
    loop: true,
    centeredSlides: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 800,
    // No effect: 'coverflow' needed, let slidesPerView and centeredSlides handle the layout
    // For effect: 'slide' or simply not defining 'effect' would be fine.
    // The styling for active/inactive slides is handled in TestimonialCard based on `isActive` prop.
    breakpoints: {
      // Mobile: Show one primary card, hints of others if space allows
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10, 
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20, // less space for wider cards
      },
    },
    pagination: {
        clickable: true,
    },
    navigation: true, // Use Swiper's built-in navigation
  };

  return (
    <motion.section
      aria-labelledby="testimonials-section-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
    >
      {/* 
        The <CarouselSection> already includes a container, title, and description structure.
        We pass our specific title and description. 
        The Swiper navigation/pagination styling will need to be handled globally or via ::ng-deep like selectors for Swiper's classes if needed.
      */}
      {/* Accessible landmark for Testimonials Section */}
      <h2 id="testimonials-section-title" className="sr-only">
        What Our Clients Say
      </h2>
      
      {/* Render testimonials carousel with custom parameters */}
      <CarouselSection
        title="What Our Clients Say"
        description="Don't just take our word for it. Here's what our clients have to say about our tech services and solutions."
        cards={testimonialCards}
        carouselParams={swiperParams}
        // Optional: pass a background element if desired, similar to KeyBenefits
        // background={<YourBackgroundElement />}
      />
      
      {/* Global styles for Swiper navigation and pagination to match site theme */}
      <style jsx global>{`
        /* Navigation button styling */
        .swiper-button-next, .swiper-button-prev {
          color: #0e72c8; /* medium-blue */
          width: 28px;
          height: 28px;
          background-color: white;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 14px;
          font-weight: bold;
        }
        
        /* Pagination container styling */
        .swiper-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          gap: 0.5rem;
        }
        
        /* Pagination bullet styling */
        .swiper-pagination-bullet {
          background-color: #9CA3AF; /* gray-400 */
          opacity: 0.7;
          width: 8px;
          height: 8px;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        
        /* Active pagination bullet styling */
        .swiper-pagination-bullet-active {
          background-color: #0e72c8; /* medium-blue */
          opacity: 1;
          width: 24px; /* elongated active bullet */
          border-radius: 4px;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        
        /* Ensure the carousel section itself has enough vertical padding if nav buttons are outside */
        .mySwiper {
            padding-bottom: 40px;
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 12px; /* Add top padding to prevent clipping */
        }
        
        /* Slide styling for proper alignment */
        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: stretch;
            height: auto;
        }
        .swiper-slide > div {
            width: 100%;
            height: 100%;
        }
        
        /* Pagination positioning */
        .mySwiper .swiper-pagination {
          bottom: -8px !important;
        }
      `}</style>
    </motion.section>
  );
}

export default memo(TestimonialsSection);
