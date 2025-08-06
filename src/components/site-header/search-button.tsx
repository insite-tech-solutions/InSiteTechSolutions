/**
 * @fileoverview Search Button Component
 * 
 * Provides a search button that integrates with the global search context.
 * Displays a magnifying glass icon and triggers the search dropdown when clicked.
 * 
 * Features:
 * - Integrates with search context for state management
 * - Responsive design with hover and focus states
 * - Accessible with proper ARIA labels
 * - Smooth animations and transitions
 * - Performance optimized with React.memo
 * 
 * @module SearchButton
 */
'use client'

import { memo } from 'react';
import { Search } from 'lucide-react'
import { SearchButtonProps } from './types'
import { useSearch } from '@/contexts/search-context'

/**
 * SearchButton component displays a button with a magnifying glass icon
 * 
 * Renders a search button that integrates with the global search context.
 * Provides hover and focus states with smooth transitions and proper
 * accessibility support. Triggers the search dropdown when clicked.
 * 
 * Key Features:
 * - Global search context integration
 * - Hover and focus state animations
 * - Accessible button with proper ARIA labels
 * - Smooth color transitions on interaction
 * - Customizable styling with className prop
 * 
 * @param {SearchButtonProps} props - Component props
 * @param {string} [props.className] - Optional CSS class names for styling
 * @returns {JSX.Element} Search button component
 * 
 * @example
 * ```tsx
 * <SearchButton className="custom-search-btn" />
 * ```
 */
function SearchButton({ className = '' }: SearchButtonProps): JSX.Element {
  const { openSearch } = useSearch()

  /**
   * Handles search button click to open global search
   */
  const handleSearchClick = (): void => {
    openSearch()
  }

  return (
    <div className="group">
      {/* Search button with magnifying glass icon */}
      <button
        onClick={handleSearchClick}
        className={`
          p-3 rounded-md
          transition-colors duration-200
          bg-white hover:bg-medium-blue focus:bg-medium-blue
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mild-blue-alt
          transition-all duration-200
          ${className}
        `}
        aria-label="Search"
      >
        <Search 
          className="h-6 w-6 text-medium-blue group-hover:text-white group-focus:text-white transition-all duration-200" 
          aria-hidden="true" 
        />
      </button>
    </div>
  );
};

export default memo(SearchButton);