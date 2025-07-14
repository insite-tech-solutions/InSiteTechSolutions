/**
 * @fileoverview Best Practices Section Component.
 *
 * This component showcases the best practices and methodologies followed in the development process.
 * It presents these practices in an engaging, animated grid layout, featuring a gradient background
 * and interactive elements for a modern user experience.
 *
 * Features:
 * - **Animated Grid**: Practices are displayed in a responsive grid with entrance animations using Framer Motion.
 * - **Dynamic Content**: Content (title, description, individual practices) is sourced from `bestPracticesContent`.
 * - **Visual Design**: Features a strong gradient background and translucent cards with blur effects for practices.
 * - **Icon Integration**: Each practice is accompanied by a relevant icon for quick visual identification.
 * - **Accessibility**: Includes `aria-labelledby` for proper screen reader navigation.
 *
 * Architecture:
 * - Leverages `framer-motion` for complex UI animations and transitions.
 * - Uses `memo` for performance optimization, preventing unnecessary re-renders of the component.
 * - Content is centralized in `@/content/about-pages/process-page/process-page-content.ts`.
 * - Styling is implemented using Tailwind CSS classes, including gradients, shadows, and backdrop filters.
 *
 * Technical Implementation:
 * - `containerVariants` and `itemVariants` define the animation properties for the grid container and individual practice cards.
 * - `whileInView="visible"` with `viewport={{ once: true }}` triggers animations when the component enters the viewport.
 * - Dynamic rendering of icons is achieved by mapping `practice.icon` to a React component.
 * - Uses `bg-opacity-15 backdrop-filter backdrop-blur-lg` for the translucent card effect.
 */

'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { bestPracticesContent } from '@/content/about-pages/process-page/process-page-content';

/**
 * `BestPracticesSection` Component.
 *
 * This component renders a section dedicated to outlining the best practices
 * and methodologies. It displays a title, a brief description, and an animated grid
 * of individual practices, each with an icon, title, and description.
 *
 * @returns {JSX.Element} The JSX element for the best practices section.
 */
function BestPracticesSection(): JSX.Element {
    const { title, description, practices } = bestPracticesContent;

    /**
     * Defines the animation variants for the main container of the best practices grid.
     * - `hidden`: Initial state with no children visible.
     * - `visible`: Reveals children with a staggered delay, creating a sequential animation effect.
     * @type {object}
     */
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    /**
     * Defines the animation variants for individual practice items within the grid.
     * - `hidden`: Initial state with opacity 0 and slightly scaled down.
     * - `visible`: Animates to full opacity and original scale, creating a subtle pop-in effect.
     * @type {object}
     */
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 }, // Starts invisible and slightly scaled down
        visible: {
            opacity: 1, // Fades in
            scale: 1,   // Scales to original size
            transition: {
                duration: 0.3, // Animation duration
            },
        },
    };

    return (
        <section className="pt-6 lg:pt-8 pb-6 w-full" aria-labelledby="best-practices-section-title">
            {/* Accessible landmark for section: Ensures screen readers can properly identify the section's purpose. */}
            <h2 id="best-practices-section-title" className="sr-only">{title}</h2>
            
            {/* Main Content Container with Gradient Background: A visually striking container for the section's content. */}
            <div className="container rounded-xl mx-auto p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* Section Header: Displays the main title and description for the best practices section. */}
                    <motion.div variants={itemVariants} className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6 text-gray-50">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
                            {description}
                        </p>
                    </motion.div>

                    {/* Practices Grid: A responsive grid layout for displaying individual best practice cards. */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {practices.map((practice) => {
                            const Icon = practice.icon;
                            return (
                                <motion.div
                                    key={practice.title.toLowerCase().replace(/\s+/g, '-')}
                                    className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
                                    variants={itemVariants}
                                >
                                    {/* Icon Container: A circular background for the practice icon. */}
                                    <div className="bg-blue-100 rounded-full p-4 mb-4">
                                        <Icon className="w-8 h-8 text-medium-blue-alt" />
                                    </div>
                                    {/* Practice Title: The heading for each individual best practice. */}
                                    <h3 className="text-xl font-semibold text-gray-50 mb-2">{practice.title}</h3>
                                    {/* Practice Description: A brief explanation of the best practice. */}
                                    <p className="text-gray-100 text-sm">{practice.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

/**
 * Memoized export of the `BestPracticesSection` component.
 * This optimizes performance by preventing the component from re-rendering
 * unless its props change.
 */
export default memo(BestPracticesSection);