/**
 * @fileoverview Our Story Section Component for About Us Page
 * 
 * This component renders the company's origin story and mission statement.
 * Features narrative content about the company's founding principles, values,
 * and approach to technology solutions with thoughtful entrance animations.
 * 
 * Features:
 * - Narrative storytelling with structured content layout
 * - Mission statement with gradient background styling
 * - Responsive typography and spacing
 * - Accessible markup with proper ARIA labels
 * - Brand-consistent color scheme and visual hierarchy
 * - Smart three-moment animation sequence respecting content hierarchy
 */

'use client';

import { motion, Variants } from 'framer-motion';

/**
 * Animation variants for the our story section
 * Three-moment approach: title → content → mission
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

const contentReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const missionHighlight: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

/**
 * OurStory Component
 * 
 * Renders the company's story section including founding principles, approach,
 * and mission statement. Provides context about the business philosophy and
 * what sets the company apart in the technology industry.
 * 
 * Features:
 * - Multi-paragraph narrative about company origins and values
 * - Highlighted mission statement with gradient background
 * - Responsive layout with proper content hierarchy
 * - Accessible semantic markup
 * - Brand-consistent styling and visual elements
 * - Three-moment animation sequence that respects content hierarchy
 * 
 * @returns {JSX.Element} The rendered our story section
 */
export default function OurStory(): JSX.Element {

  return (
    <section aria-labelledby="our-story-title">
      {/* Accessible landmark for Our Story */}
      <h2 id="our-story-title" className="sr-only">Our Story</h2>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-medium-blue mx-auto mb-8"></div>
        </motion.div>

        {/* Story Content Section */}
        <motion.div 
          className="flex mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentReveal}
        >
          {/* Story Text */}
          <div className="space-y-6">
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                InSite Tech Solutions began with a simple goal: to do right by people in a tech industry that so often doesn&apos;t.
              </p>
              <p>
                Too much of modern technology feels like it&apos;s working against you—locked-down platforms, excessive subscriptions, walled gardens, endless upsells. Instead of solving problems, it creates new ones. I wanted to build something different: a business rooted in integrity, transparency, and utility. That means no dark patterns, no data harvesting, and no pushy upsells. If it&apos;s not useful, I won&apos;t build it. If I don&apos;t think it&apos;ll help you, I&apos;ll say so. Technology should empower people—not trap them.
              </p>
              <p>
                From my years immersed in academic research and tech-heavy environments, I know firsthand how effective problem-solving comes not from flashy jargon or rigid platforms, but from understanding context and constraints. My background in physics, computational modeling, and scientific software taught me how to approach every project like a research challenge. That means understanding the core problem, identifying the real bottlenecks, and designing solutions that actually work—no fluff, no jargon for jargon&apos;s sake. Just clean, elegant solutions tailored to each client.
              </p>
              <p>
                I also believe everyone deserves access to thoughtful, custom tech—without needing to hire a full development team or navigate layers of sales reps. Working with InSite Tech Solutions means working directly with the person who&apos;s building your solution. It means lower overhead, fewer misunderstandings, and a stronger partnership.
              </p>
              <p>
                Whether you&apos;re launching a site, streamlining operations, or bringing an idea to life, InSite Tech combines deep analytical expertise with real-world tech experience to deliver practical, purpose-driven solutions. With a background spanning both scientific computing and digital media, we specialize in bridging the gap between art and technology—helping you not just build something functional, but something beautiful, intuitive, and truly yours.
              </p>
              <p>
                In a noisy, complex tech landscape, our mission is simple: make technology work for you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement Section */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={missionHighlight}
        >
          <div className="container mx-auto bg-gradient-to-br from-light-blue to-blue-800 border border-light-blue text-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto text-white">
              To provide thoughtful, ethical technology solutions that solve real problems, 
              while maintaining the integrity and personal touch that big tech companies have forgotten.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}