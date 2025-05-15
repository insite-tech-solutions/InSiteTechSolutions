'use client'

import React, { useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ApplicationCategory } from '../types'
import { getIcon } from '@/utils/icon-registry';

interface ApplicationCategoriesProps {
  title: string
  description: string
  categories: ApplicationCategory[]
}

// Animation variants
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
 * CategoryCard component displays a category with its icon, title, and items
 */
const CategoryCard: React.FC<{
  category: ApplicationCategory
}> = ({ category }) => {
  // Dynamically import the icon
  const IconComponent = getIcon(category.icon);

  return (
    <motion.article
      variants={fadeInUp}
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
}
const MemoizedCategoryCard = memo(CategoryCard)

/**
 * A memoized component that displays application categories
 * in a responsive grid, each with its icon and item list,
 * with entry animations.
 */
const ApplicationCategories: React.FC<ApplicationCategoriesProps> = ({
  title,
  description,
  categories
}) => {
  const categoryCards = useMemo(() => {
    return categories.map((category) => (
      <MemoizedCategoryCard key={category.title} category={category} />
    ));
  }, [categories]);

  return (
    <section className="container mx-auto relative rounded-xl p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt shadow-xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        {/* Section Header */}
        <motion.header variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl font-bold mt-6 mb-6 text-gray-50">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-100 leading-relaxed">
            {description}
          </p>
        </motion.header>

        {/* Core Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-2">
          {categoryCards}
        </div>
      </motion.div>
    </section>
  )
}

export default memo(ApplicationCategories)