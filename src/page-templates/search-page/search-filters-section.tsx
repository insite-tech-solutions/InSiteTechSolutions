/**
 * @fileoverview Search Filters Section Component
 *
 * This component provides filtering and sorting options for search results.
 * It includes content type filters, sorting options, and mobile-responsive design.
 * 
 * Features:
 * - Content type filtering (services, pages, blog, etc.)
 * - Multiple sorting options (relevance, alphabetical)
 * - Mobile-responsive design with collapsible filters
 * - Real-time filter updates with URL synchronization
 * - Dynamic count display for each content type
 * - Clean and accessible filter interface
 * - Sticky positioning for better UX
 * - Smooth animations with Framer Motion
 * 
 * Architecture:
 * - Client-side component for interactive filtering
 * - URL parameter synchronization for SEO-friendly filters
 * - Responsive design with mobile-first approach
 * - Integration with Next.js navigation and search params
 * - Consistent styling with the rest of the application
 * 
 * @module SearchFiltersSection
 */
'use client';

import { useMemo, useState, memo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Filter, SortDesc, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchContent } from '@/lib/enhanced-search-data';

/**
 * Available content types for filtering
 * 
 * @constant {Array} CONTENT_TYPES
 */
const CONTENT_TYPES = [
  { value: 'all', label: 'All Content', count: 0 },
  { value: 'service', label: 'Services', count: 0 },
  { value: 'page', label: 'Pages', count: 0 },
  { value: 'about', label: 'About', count: 0 },
  { value: 'blog', label: 'Blog', count: 0 },
  { value: 'faq', label: 'FAQ', count: 0 },
] as const

/**
 * Available sorting options for search results
 * 
 * @constant {Array} SORT_OPTIONS
 */
const SORT_OPTIONS = [
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'title-asc', label: 'Title A-Z' },
  { value: 'title-desc', label: 'Title Z-A' },
] as const

/**
 * SearchFiltersSection Component
 *
 * Interactive filter and sort interface for search results. Provides
 * content type filtering and sorting options with real-time updates.
 * 
 * The component includes:
 * - Content type filters with dynamic counts
 * - Multiple sorting options (relevance, alphabetical)
 * - Mobile-responsive collapsible interface
 * - URL synchronization for shareable filtered results
 * - Sticky positioning for better user experience
 * - Smooth animations for mobile interactions
 * 
 * Filter State Management:
 * - Synchronizes filter state with URL parameters
 * - Updates URL without page refresh for smooth UX
 * - Maintains filter state across navigation
 * - Provides shareable links with applied filters
 * 
 * Mobile Responsiveness:
 * - Collapsible sections for mobile devices
 * - Touch-friendly interface with proper spacing
 * - Smooth animations for expand/collapse
 * - Always-visible filters on desktop
 * 
 * Performance Optimizations:
 * - Memoized content type counts calculation
 * - Efficient URL parameter updates
 * - Minimal re-renders with proper state management
 * - Memoized component to prevent unnecessary updates
 * 
 * @returns {JSX.Element} The search filters section with interactive controls
 * 
 * @example
 * ```tsx
 * <SearchFiltersSection />
 * ```
 */
function SearchFiltersSection(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Mobile collapsible state
  const [isSortExpanded, setIsSortExpanded] = useState(false);
  const [isContentTypeExpanded, setIsContentTypeExpanded] = useState(false);
  
  // Get current filter state from URL
  const query = searchParams.get('q') || '';
  const selectedType = searchParams.get('type') || 'all';
  const sortBy = searchParams.get('sort') || 'relevance';

  // Get all search results for calculating counts
  const allResults = useMemo(() => {
    if (!query.trim()) return [];
    return searchContent(query, 100);
  }, [query]);

  // Calculate counts for each content type
  const contentTypesWithCounts = useMemo(() => {
    return CONTENT_TYPES.map(type => ({
      ...type,
      count: type.value === 'all' ? allResults.length : allResults.filter(r => r.type === type.value).length
    }));
  }, [allResults]);

  /**
   * Updates the URL with new filter and sort parameters
   * 
   * @param {string} newType - The selected content type filter
   * @param {string} newSort - The selected sort option
   */
  const updateFilters = (newType: string, newSort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (newType !== 'all') {
      params.set('type', newType);
    } else {
      params.delete('type');
    }
    
    if (newSort !== 'relevance') {
      params.set('sort', newSort);
    } else {
      params.delete('sort');
    }
    
    router.push(`/search?${params.toString()}`);
  };

  /**
   * Handles content type filter changes
   * 
   * @param {string} type - The selected content type
   */
  const handleTypeChange = (type: string) => {
    updateFilters(type, sortBy);
  };

  /**
   * Handles sort option changes
   * 
   * @param {string} sort - The selected sort option
   */
  const handleSortChange = (sort: string) => {
    updateFilters(selectedType, sort);
  };

  return (
    <section aria-labelledby="search-filters-section-title">
      {/* Accessible landmark for Search Filters Section */}
      <h2 id="search-filters-section-title" className="sr-only">
        Search Filters
      </h2>
      <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-20">
        {/* Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Sort Options */}
          <div className="mb-6">
            <button
              onClick={() => setIsSortExpanded(!isSortExpanded)}
              className="w-full flex items-center justify-between font-semibold text-gray-900 mb-3 lg:mb-3"
            >
              <div className="flex items-center gap-2">
                <SortDesc className="h-4 w-4" />
                Sort by
              </div>
              <div className="lg:hidden">
                {isSortExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </button>
            
            {/* Desktop: Always visible */}
            <div className="hidden lg:block space-y-2">
              {SORT_OPTIONS.map(option => (
                <label key={option.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={sortBy === option.value}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
            
            {/* Mobile: Collapsible */}
            <AnimatePresence>
              {isSortExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="lg:hidden space-y-2 overflow-hidden"
                >
                  {SORT_OPTIONS.map(option => (
                    <label key={option.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="sort"
                        value={option.value}
                        checked={sortBy === option.value}
                        onChange={(e) => handleSortChange(e.target.value)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content Type Filters */}
          <div>
            <button
              onClick={() => setIsContentTypeExpanded(!isContentTypeExpanded)}
              className="w-full flex items-center justify-between font-semibold text-gray-900 mb-3 lg:mb-3"
            >
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Content Type
              </div>
              <div className="lg:hidden">
                {isContentTypeExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </button>
            
            {/* Desktop: Always visible */}
            <div className="hidden lg:block space-y-2">
              {contentTypesWithCounts.map(type => (
                <label key={type.value} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="contentType"
                      value={type.value}
                      checked={selectedType === type.value}
                      onChange={(e) => handleTypeChange(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{type.label}</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {type.count}
                  </span>
                </label>
              ))}
            </div>
            
            {/* Mobile: Collapsible */}
            <AnimatePresence>
              {isContentTypeExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="lg:hidden space-y-2 overflow-hidden"
                >
                  {contentTypesWithCounts.map(type => (
                    <label key={type.value} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="contentType"
                          value={type.value}
                          checked={selectedType === type.value}
                          onChange={(e) => handleTypeChange(e.target.value)}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type.label}</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {type.count}
                      </span>
                    </label>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(SearchFiltersSection);