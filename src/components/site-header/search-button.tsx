'use client'

import React from 'react'
import { Search } from 'lucide-react'
import { SearchButtonProps } from './types'

/**
 * SearchButton component displays a button with a magnifying glass icon to trigger search functionality.
 * The button changes appearance on hover and focus.
 * 
 * @param className - Optional CSS class names to be applied to the button
 */
const SearchButton: React.FC<SearchButtonProps> = ({ className = '' }) => {
  const handleSearchClick = (): void => {
    // TODO: Implement search functionality
    console.log('Search button clicked')
  }

  return (
    <div className="group">
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

export default SearchButton;