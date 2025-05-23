/**
 * @fileoverview CarouselSection is a reusable animated slider component built with Swiper.js.
 * It accepts custom React cards and optional background visuals.
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import SwiperCore from 'swiper'
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'


// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow]);

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
  title: string;
  description: string;
  cards: React.ReactElement[];
  background?: React.ReactNode;
  carouselParams?: Partial<SwiperProps>;
}

/**
 * CarouselSection component displays a customizable carousel of cards with animations.
 * 
 * @param {CarouselSectionProps} props - Component props
 * @param {string} props.title - Title of the carousel section
 * @param {string} props.description - Description of the carousel section
 * @param {React.ReactElement[]} props.cards - Array of React elements to be displayed as slides
 * @param {React.ReactNode} [props.background] - Optional background element for the carousel
 * @param {Partial<SwiperProps>} [props.carouselParams={}] - Optional custom parameters for the Swiper carousel
 * @returns {JSX.Element} Rendered carousel section component
 */
const CarouselSection: React.FC<CarouselSectionProps> = ({
  title,
  description,
  cards,
  background,
  carouselParams = {},
}) => {
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
    <div className="w-full mx-auto px-6 md:px-8 lg:px-12 relative rounded-xl">
      {/* Section Title and Description */}
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

        {/* Carousel */}
        <Swiper
          {...mergedSwiperParams}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper relative mt-6 lg:mt-10 mb-6 lg:mb-10 rounded-xl flex justify-center items-center"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              {React.cloneElement(card, {
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
    </div>
  );
};

export default CarouselSection;
