/**
 * @fileoverview Application Categories Section Component
 * 
 * This component displays a categorized list of applications relevant to a service.
 * It features a responsive grid of `CategoryCard` components with entry animations
 * powered by Framer Motion. The component dynamically renders icons for each category
 * and optimizes performance using memoization.
 * 
 * Architecture:
 * - `ApplicationCategoriesProps`: Defines the props for the main component.
 * - `fadeInUp`, `staggerChildren`: Framer Motion variants for animation orchestration.
 * - `CategoryCard`: A memoized sub-component rendering individual application categories.
 * - `ApplicationCategories`: The main component that aggregates and displays the categories.
 * 
 * Key Features:
 * - Responsive grid layout for application categories.
 * - Framer Motion animations for a visually engaging entrance effect.
 * - Dynamic icon rendering for `CategoryCard` using `getIcon` utility.
 * - Memoization (`React.memo`, `useMemo`) for performance optimization.
 * - Accessible markup with `aria-labelledby` and `sr-only` for screen readers.
 * 
 * @see https://www.framer.com/motion/variants/
 * @see src/page-templates/service-page/types.ts (for ApplicationCategory type)
 * @see src/utils/icon-registry.ts
 */

'use client'

import { useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ApplicationCategory } from '../types'
import { getIcon } from '@/utils/icon-registry';

/**
 * Props interface for the `ApplicationCategories` component.
 */
interface ApplicationCategoriesProps {
  /** The main title for the application categories section. */
  title: string
  /** A descriptive text for the application categories section. */
  description: string
  /** An array of application categories to display. */
  categories: ApplicationCategory[]
}

/**
 * Framer Motion variant for a fade-in-up animation.
 * Elements will fade in and move upwards slightly from their initial hidden state.
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

/**
 * Framer Motion variant to stagger children animations.
 * Useful for applying `fadeInUp` to multiple items in sequence.
 */
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

/**
 * CategoryCard Component
 * 
 * A memoized component that displays a single application category.
 * It includes a dynamic icon, category title, and a list of items.
 * The card features a glassmorphism style and integrates with Framer Motion for animations.
 * 
 * @param {Object} props - Component props.
 * @param {ApplicationCategory} props.category - The application category data to display.
 * @returns {JSX.Element} A memoized React component for a category card.
 */
const CategoryCard = memo(function CategoryCard({ category }: { category: ApplicationCategory }): JSX.Element {
  // Dynamically retrieve the icon component using the icon registry utility
  const IconComponent = getIcon(category.icon);

  return (
    <motion.article
      variants={fadeInUp} // Apply the fade-in-up animation to each card
      className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-100">
          <IconComponent className="h-6 w-6 text-medium-blue-alt" />
        </div>
        <h3 className="text-xl font-semibold text-gray-50">{category.title}</h3>
      </div>
      <ul className="space-y-3">
        {category.items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-100">
            <ArrowRight className="h-4 w-4 text-very-light-grey-alt flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
})

/**
 * ApplicationCategories Component
 * 
 * This is the main component for the 'Application Categories' section.
 * It renders a header with a title and description, followed by a grid of `CategoryCard` components.
 * The entire section is wrapped in Framer Motion to orchestrate entrance animations for its children.
 * 
 * @param {ApplicationCategoriesProps} props - The properties for the component.
 * @returns {JSX.Element} A memoized React component displaying application categories.
 */
function ApplicationCategories({ title, description, categories }: ApplicationCategoriesProps): JSX.Element {
  // Memoize the creation of CategoryCard components to optimize performance.
  const categoryCards = useMemo(() => {
    return categories.map((category) => (
      <CategoryCard key={category.title} category={category} />
    ));
  }, [categories]); // Re-run memoization only if the 'categories' array changes

  return (
    <section aria-labelledby="application-categories-title" className="container mx-auto relative rounded-xl p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt shadow-xl">
      {/* Hidden heading for screen readers to provide accessible context for the section */}
      <h2 id="application-categories-title" className="sr-only">{title}</h2>
      <motion.div
        initial="hidden" // Initial state for Framer Motion animation
        whileInView="visible" // Animate to 'visible' when component enters viewport
        viewport={{ once: true }} // Trigger animation only once when it comes into view
        variants={staggerChildren} // Apply stagger animation to children
      >
        {/* Section Header with fade-in-up animation */}
        <motion.header variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6 text-gray-50">
            {title}
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-100 leading-relaxed">
            {description}
          </p>
        </motion.header>

        {/* Grid container for Category Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-2">
          {categoryCards}
        </div>
      </motion.div>
    </section>
  )
}

export default memo(ApplicationCategories)