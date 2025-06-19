/**
 * @fileoverview Reusable Animated Carousel Section Component
 *
 * A flexible and animated slider component built using `Swiper.js` (a modern touch slider).
 * This component is designed to display a collection of React elements (cards) in a carousel format.
 * It supports various customization options, including autoplay, navigation, pagination, and a coverflow effect,
 * and can optionally incorporate background visuals. `framer-motion` is integrated for section-level animations.
 */

'use client';

import { useState, useMemo, cloneElement, memo } from 'react';
import { motion, Variants } from 'framer-motion';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import SwiperCore from 'swiper'
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'


// Initialize Swiper modules globally to ensure they are available for all Swiper instances.
SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow]);

/**
 * Defines the animation variants for a fade-in-up effect.
 * This variant is used with `framer-motion` to animate the section's header.
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Props for the CarouselSection component.
 */
interface CarouselSectionProps {
  /** The main title for the carousel section, displayed prominently above the carousel. */
  title: string;
  /** A descriptive text that provides context or further explanation for the carousel content. */
  description: string;
  /** An array of `React.ReactElement`s to be rendered as individual slides within the carousel.
   * These elements should typically be card components that can accept an `isActive` prop. */
  cards: React.ReactElement[];
  /** Optional. A ReactNode to be rendered as a background element behind the carousel.
   * This can be an SVG, image, or any other React component for visual flair. */
  background?: React.ReactNode;
  /** Optional. Partial `SwiperProps` object to override or extend the default Swiper carousel parameters.
   * Allows for fine-grained control over carousel behavior (e.g., breakpoints, speed, effects). */
  carouselParams?: Partial<SwiperProps>;
}

/**
 * CarouselSection component
 *
 * A highly customizable React component that renders an interactive and animated carousel.
 * It leverages Swiper.js for core carousel functionality and framer-motion for smooth entrance animations.
 * Each slide can contain any `React.ReactElement`, making it versatile for displaying various types of content, such as testimonial cards or feature highlights.
 * 
 * @param {CarouselSectionProps} props - Component props
 * @param {string} props.title - Title of the carousel section
 * @param {string} props.description - Description of the carousel section
 * @param {React.ReactElement[]} props.cards - Array of React elements to be displayed as slides
 * @param {React.ReactNode} [props.background] - Optional background element for the carousel
 * @param {Partial<SwiperProps>} [props.carouselParams={}] - Optional custom parameters for the Swiper carousel
 * @returns {JSX.Element} Rendered carousel section component
 */
const CarouselSection = ({
  title,
  description,
  cards,
  background,
  carouselParams = {},
}: CarouselSectionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Merge default parameters with any overrides from carouselParams
  const mergedSwiperParams: SwiperProps = useMemo(() => {
      // Default Swiper parameters
  const defaultSwiperParams: SwiperProps = {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: true,
    pagination: { clickable: true, el: '.swiper-pagination' },
    speed: 800,
    centeredSlides: true,
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      rotate: 10,
      scale: 0.85,
      depth: 50,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 5,
          scale: 0.85,
          depth: 5,
          modifier: 1,
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 10,
          scale: 0.85,
          depth: 50,
          modifier: 1,
        },
      },
    },
  };

  return {
    ...defaultSwiperParams,
    ...carouselParams,
  };

  }, [carouselParams]);

  return (
    <section className="w-full mx-auto px-6 md:px-8 lg:px-12 relative rounded-xl" aria-labelledby="carousel-section-title">
      {/* Accessible landmark for section */}
      <h2 id="carousel-section-title" className="sr-only">{title}</h2>
      {/* Section Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto mb-8 mt-2"
      >
        <h3 className="text-3xl font-bold mt-6 mb-6 text-gray-900">
          {title}
        </h3>
        <p className="text-lg text-gray-700">{description}</p>
      </motion.div>

      <div className="relative overflow-hidden rounded-xl">
        {/* Background Icon/Image */}
        <div className="absolute inset-0 flex justify-center items-center">
        {/* Background Icon/Image */}
        {background && (
          <div className="absolute inset-0 flex justify-center items-center">
            {background}
          </div>
        )}
        </div>

        {/* Carousel Container */}
        <Swiper
          {...mergedSwiperParams}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper relative mt-6 lg:mt-10 mb-6 lg:mb-10 rounded-xl flex justify-center items-center"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              {cloneElement(card, {
                isActive: index === activeIndex,
              })}
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-pagination"
          style={{ bottom: '10px' }}
        ></div>
      </div>
    </section>
  );
};

/**
 * Memoized version of CarouselSection to optimize performance.
 * Prevents unnecessary re-renders when parent components update but props remain the same.
 */
export default memo(CarouselSection);
