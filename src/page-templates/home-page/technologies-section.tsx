/**
 * @fileoverview Technologies Section Component for About Page
 * 
 * Interactive carousel section showcasing the technologies and tools used by the company.
 * Features an auto-scrolling carousel with pause-on-hover functionality, gradient fade
 * effects, and a call-to-action for custom technology discussions.
 * 
 * Key Features:
 * - Auto-scrolling horizontal carousel with Swiper.js
 * - Pause-on-hover functionality for user interaction
 * - Gradient fade effects on carousel edges
 * - Technology icons with consistent styling
 * - Responsive design for all screen sizes
 * - Call-to-action section for technology discussions
 * - Smooth animations with Framer Motion
 * 
 * Technical Implementation:
 * - Swiper.js for carousel functionality with Autoplay and FreeMode
 * - Next.js Image component for optimized icon loading
 * - Framer Motion for entrance and CTA animations
 * - Memoized component for performance optimization
 * - CSS gradients for fade effects
 * 
 * @component Technologies
 * @returns {JSX.Element} Interactive technologies carousel section
 */

'use client';

import { memo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { motion } from 'framer-motion';
import TailwindButton from '@/components/reusable-components/tailwind-button';

/**
 * Technology item data structure
 * @interface Technology
 * @property {string} name - Display name of the technology
 * @property {string} logo - Path to the technology logo/icon
 */
interface Technology {
  name: string;
  logo: string;
}

// Static list of technologies for the TechnologiesSection
const technologies: Technology[] = [
  { name: "Python", logo: "/technologies-icons/python.svg" },
  { name: "JavaScript", logo: "/technologies-icons/javascript.svg" },
  { name: "TypeScript", logo: "/technologies-icons/typescript.svg" },
  { name: "HTML", logo: "/technologies-icons/html5.svg" },
  { name: "CSS", logo: "/technologies-icons/css.svg" },
  { name: "Tailwind", logo: "/technologies-icons/tailwindcss.svg" },
  { name: "React", logo: "/technologies-icons/react.svg" },
  { name: "Next.js", logo: "/technologies-icons/nextdotjs.svg" },
  { name: "Node.js", logo: "/technologies-icons/nodedotjs.svg" },
  { name: "C", logo: "/technologies-icons/c.svg" },
  { name: "Docker", logo: "/technologies-icons/docker.svg" },
  { name: "PostgreSQL", logo: "/technologies-icons/postgresql.svg" },
  { name: "Git", logo: "/technologies-icons/git.svg" },
  { name: "Mathematica", logo: "/technologies-icons/wolframmathematica.svg" },
  { name: "MATLAB", logo: "/technologies-icons/Matlab_Logo.png" },
  { name: "LaTeX", logo: "/technologies-icons/latex.svg" },
  { name: "Markdown", logo: "/technologies-icons/markdown.svg" },
  { name: "reST", logo: "/technologies-icons/ReStructuredText_Logo.svg" },
  { name: "Squarespace", logo: "/technologies-icons/squarespace.svg" },
  { name: "WordPress", logo: "/technologies-icons/wordpress.svg" },
  // { name: "Wix", logo: "/technologies-icons/wix.svg" },
  { name: "Shopify", logo: "/technologies-icons/shopify.svg" },
  { name: "WooCommerce", logo: "/technologies-icons/woocommerce.svg" },
  { name: "Zapier", logo: "/technologies-icons/zapier.svg" },
  { name: "Frappe", logo: "/technologies-icons/frappe.svg" }
];

/**
 * Technologies Section Component
 * 
 * Displays an interactive carousel of technologies and tools with auto-scrolling
 * functionality. Includes a call-to-action section for discussing custom technology
 * requirements with potential clients.
 * 
 * Features:
 * - Auto-scrolling carousel with smooth transitions
 * - Pause-on-hover for user interaction
 * - Gradient fade effects on carousel edges
 * - Consistent technology icon styling
 * - Responsive layout for all devices
 * - Call-to-action with viewport-triggered animation
 * - Accessibility-compliant with proper alt text
 * 
 * Carousel Configuration:
 * - Infinite loop with continuous scrolling
 * - Free mode for natural scrolling feel
 * - Auto-sizing slides based on content
 * - 5-second scroll speed for readability
 * 
 * @component
 * @returns {JSX.Element} Technologies carousel section with CTA
 */
function Technologies(): JSX.Element {
  return (
    <section aria-labelledby="technologies-section-title">
      {/* Accessible landmark for Technologies Section */}
      <h2 id="technologies-section-title" className="sr-only">Technologies We Use</h2>
      <div className="container mx-auto">
        {/* Main Content - Section Introduction and Carousel */}
        <motion.div
          key="technologies-main-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            opacity: { duration: 0.6 },
            y: { duration: 0.8 }
          }}
        >
          {/* Section Introduction */}
          <div className="text-center mb-6">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              These are the tools and technologies we&apos;re most experienced with, but our broad skillset 
              allows us to adapt to many other tools to meet your needs as best we can.
            </p>
          </div>

          {/* Scrolling Technologies Carousel */}
          <div className="relative overflow-hidden group">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <style jsx global>{`
              .technologies-carousel .swiper-wrapper {
                transition-timing-function: linear !important;
              }
            `}</style>
            <Swiper
              className="technologies-carousel"
              modules={[Autoplay, FreeMode]}
              loop={true}
              freeMode={true}
              slidesPerView="auto"
              spaceBetween={16}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
            >
              {technologies.map((tech) => (
                <SwiperSlide key={tech.name.toLowerCase().replace(/\s+/g, '-') } style={{ width: 'auto' }}> 
                  <div 
                    className="flex-shrink-0 rounded-xl px-1 md:px-4 py-1"
                  >
                    <div className="flex flex-col items-center space-y-2">
                     <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-light-blue to-blue-900 rounded-md p-2">
                        <Image
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          width={48}
                          height={48}
                          className="object-contain invert"
                        />
                      </div>
                    <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                      {tech.name}
                    </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* CTA: Discuss Your Tech Stack */}
        <motion.div
          key="technologies-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.15,
            opacity: { duration: 0.4 },
            y: { duration: 0.6 }
          }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-light-blue to-blue-800 border border-light-blue text-white rounded-xl p-8 text-center mt-6 md:mt-8 shadow-md hover:shadow-lg"
          style={{ transition: "box-shadow 0.2s ease" }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h4 className="text-2xl font-semibold">
              Don&apos;t See Your Technology?
            </h4>
          </div>
          <p className="mb-6 text-white">
            With years of computational experience, we&apos;re skilled at rapidly 
            learning new technologies and adapting to your specific tech stack. If you have a unique 
            tool or framework requirement, we&apos;re up for the challenge.
          </p>
          <TailwindButton 
            href="/contact"
            className="bg-gray-50 rounded-lg font-semibold shadow-md transition-all duration-200"
          >
            Discuss Your Tech Stack
          </TailwindButton>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Technologies);