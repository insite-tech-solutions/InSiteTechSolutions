"use client"

import CarouselSection from "@/components/reusable-components/carousel-section"
import TestimonialCard from "@/components/reusable-components/testimonial-card" // Adjusted import path
import { SwiperProps } from "swiper/react";
import { motion } from 'framer-motion';

// Testimonial type definition (ensure this matches or is imported if defined elsewhere)
interface Testimonial {
  id: number
  name: string
  position?: string
  company?: string
  content: string
  image?: string
  isBusiness?: boolean
}

// Sample testimonial data (can be fetched or imported)
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc.",
    content:
      "Working with this team transformed our digital presence. Their technical expertise and attention to detail exceeded our expectations. The solutions they delivered were not only innovative but also perfectly aligned with our business goals.",
    isBusiness: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder",
    company: "StartupLaunch",
    content:
      "I've worked with many developers, but this team stands out for their professionalism and technical skill. They delivered our project ahead of schedule and were incredibly responsive throughout the entire process.",
    isBusiness: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "GrowthMedia",
    content:
      "The custom solution they built for our marketing team has dramatically improved our workflow efficiency. Their understanding of both technology and business needs made them the perfect partner for our project.",
    isBusiness: true,
  },
  {
    id: 4,
    name: "David Park",
    position: "CEO",
    company: "InnovateX",
    content:
      "From the initial consultation to the final delivery, the experience was seamless. They took the time to understand our unique challenges and delivered a solution that perfectly addressed our needs.",
    isBusiness: true,
  },
  {
    id: 5,
    name: "Alex Thompson",
    content:
      "The website redesign completely transformed our online presence. The team was incredibly responsive and delivered exactly what we envisioned.",
  },
  {
    id: 6,
    name: "Maria Garcia",
    position: "Operations Manager",
    content:
      "Their automation solutions saved us countless hours every week. The implementation was smooth and the results were immediate.",
  },
];

export default function TestimonialsSection() {
  if (!testimonialsData || testimonialsData.length === 0) {
    return (
      <section>
        <div className="container mx-auto px-4 text-center">
          <p>No testimonials yet.</p>
        </div>
      </section>
    );
  }

  const testimonialCards = testimonialsData.map((testimonial) => (
    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
  ));

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
      <CarouselSection
        title="What Our Clients Say"
        description="Don't just take our word for it. Here's what our clients have to say about our tech services and solutions."
        cards={testimonialCards}
        carouselParams={swiperParams}
        // Optional: pass a background element if desired, similar to KeyBenefits
        // background={<YourBackgroundElement />}
      />
      {/* Add global styles for Swiper navigation and pagination to match site theme */}
      <style jsx global>{`
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
        .swiper-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          gap: 0.5rem;
        }
        .swiper-pagination-bullet {
          background-color: #9CA3AF; /* gray-400 */
          opacity: 0.7;
          width: 8px;
          height: 8px;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
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
        .mySwiper .swiper-pagination {
          bottom: -8px !important;
        }
      `}</style>
    </motion.section>
  );
}
