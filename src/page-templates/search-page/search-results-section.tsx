/**
 * @fileoverview Search Results Section Component
 *
 * This component displays the search results with pagination, empty states,
 * and result cards. It handles the main search results display logic.
 * 
 * Features:
 * - Search results display with pagination
 * - Empty states for no results
 * - Loading states and transitions
 * - Result cards with type indicators
 * - Responsive design with proper spacing
 * - URL-based search state management
 * - Smooth scrolling pagination
 * - Type-specific icons and colors
 * - Tag display with overflow handling
 * 
 * Architecture:
 * - Client-side component for interactive search functionality
 * - Integration with search data and context
 * - Responsive design with mobile-first approach
 * - Consistent styling with the rest of the application
 * - Performance optimized with memoization
 * 
 * @module SearchResultsSection
 */
'use client';

import { useState, useEffect, useMemo, useRef, memo } from 'react';
// Static suggestions for empty search state
const emptySearchSuggestions = ['web development', 'ai automation', 'custom software', 'data analysis'];
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, Hash, ArrowRight, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchResult } from '@/contexts/search-context';
import { searchContent } from '@/lib/enhanced-search-data';
import { HEADER_HEIGHT } from '@/lib/constants';

/**
 * SearchResultCard Component
 *
 * Individual search result card with type indicators, tags, and metadata.
 * Provides a clickable card interface for each search result with
 * visual type differentiation and comprehensive result information.
 * 
 * Features:
 * - Type-specific icons and color coding
 * - Tag display with overflow handling
 * - Hover effects and transitions
 * - Responsive design with proper spacing
 * - Accessibility features with proper ARIA labels
 * - URL display for transparency
 * 
 * @param {Object} props - Component props
 * @param {SearchResult} props.result - The search result data
 * @param {number} props.index - The index for animation timing
 * @returns {JSX.Element} The search result card component
 * 
 * @example
 * ```tsx
 * <SearchResultCard result={searchResult} index={0} />
 * ```
 */
function SearchResultCard({ result, index }: { result: SearchResult; index: number }): JSX.Element {
  /**
   * Returns the appropriate icon for the content type
   * 
   * @param {SearchResult['type']} type - The content type
   * @returns {JSX.Element} The icon component
   */
  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'service':
        return <Hash className="h-5 w-5 text-blue-500" />;
      case 'page':
        return <ArrowRight className="h-5 w-5 text-green-500" />;
      case 'blog':
        return <Clock className="h-5 w-5 text-purple-500" />;
      case 'faq':
        return <Search className="h-5 w-5 text-orange-500" />;
      case 'about':
        return <ArrowRight className="h-5 w-5 text-gray-500" />;
      default:
        return <ArrowRight className="h-5 w-5 text-gray-500" />;
    }
  };

  /**
   * Returns the appropriate color classes for the content type
   * 
   * @param {SearchResult['type']} type - The content type
   * @returns {string} The CSS classes for styling
   */
  const getTypeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'service':
        return 'bg-blue-100 text-blue-800';
      case 'page':
        return 'bg-green-100 text-green-800';
      case 'blog':
        return 'bg-purple-100 text-purple-800';
      case 'faq':
        return 'bg-orange-100 text-orange-800';
      case 'about':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 p-6"
    >
      <Link href={result.url} className="block group">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            {getTypeIcon(result.type)}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-medium-blue transition-colors duration-200 mb-2">
              {result.title}
            </h2>
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {result.description}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTypeColor(result.type)}`}>
                {result.type}
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {result.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
                {result.tags.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{result.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2 font-mono">
              {result.url}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const MemoizedSearchResultCard = memo(SearchResultCard);

/**
 * Pagination Component
 *
 * Pagination controls for search results with smart page number display.
 * Provides navigation between pages with proper accessibility and
 * smooth scrolling to results after page changes.
 * 
 * Features:
 * - Smart page number display with ellipsis
 * - Previous/Next navigation buttons
 * - Disabled states for edge cases
 * - Smooth scrolling to results
 * - Responsive design with proper spacing
 * - Accessibility features with proper ARIA labels
 * 
 * @param {Object} props - Component props
 * @param {number} props.currentPage - The current page number
 * @param {number} props.totalPages - The total number of pages
 * @param {Function} props.onPageChange - Callback for page changes
 * @returns {JSX.Element | null} The pagination component or null if not needed
 * 
 * @example
 * ```tsx
 * <Pagination 
 *   currentPage={1} 
 *   totalPages={5} 
 *   onPageChange={handlePageChange} 
 * />
 * ```
 */
function Pagination({ currentPage, totalPages, onPageChange }: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}): JSX.Element | null {
  if (totalPages <= 1) return null;

  /**
   * Generates smart page numbers with ellipsis for large page counts
   * 
   * @returns {Array} Array of page numbers and ellipsis
   */
  const getPageNumbers = () => {
    const delta = 2;
    const range: (number)[] = [];
    const rangeWithDots: (number | string)[] = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Previous
      </button>

      {getPageNumbers().map((page, idx) => (
        <button
          key={typeof page === 'number' ? `page-${page}` : `dots-${idx}`}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
          className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
            page === currentPage
              ? 'bg-medium-blue text-white'
              : page === '...'
              ? 'cursor-default text-gray-400'
              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        Next
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

const MemoizedPagination = memo(Pagination);

/**
 * SearchResultsSection Component
 *
 * Main search results display component with pagination, filtering, and
 * various state handling. Provides comprehensive search results interface
 * with empty states, loading states, and result cards.
 * 
 * The component includes:
 * - Search results display with pagination
 * - Empty states for no query and no results
 * - Filtering and sorting integration
 * - Smooth scrolling pagination
 * - Result count display
 * - Search suggestions for empty results
 * 
 * State Management:
 * - URL parameter synchronization for search query
 * - Filter and sort parameter handling
 * - Pagination state management
 * - Page reset on filter changes
 * 
 * Performance Optimizations:
 * - Memoized search results calculation
 * - Memoized filtering and sorting
 * - Efficient pagination with slice
 * - Memoized components to prevent re-renders
 * 
 * @returns {JSX.Element} The complete search results section
 * 
 * @example
 * ```tsx
 * <SearchResultsSection />
 * ```
 */
function SearchResultsSection(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  
  // Get query from URL parameters
  const query = searchParams.get('q') || '';
  
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  // Get filter parameters from URL
  const selectedType = searchParams.get('type') || 'all';
  const sortBy = searchParams.get('sort') || 'relevance';

  // Perform search and get results
  const allResults = useMemo(() => {
    if (!query.trim()) return [];
    return searchContent(query, 100); // Get more results for pagination
  }, [query]);

  // Filter and sort results
  const filteredAndSortedResults = useMemo(() => {
    let results = [...allResults];

    // Filter by content type
    if (selectedType !== 'all') {
      results = results.filter(result => result.type === selectedType);
    }

    // Sort results
    switch (sortBy) {
      case 'title-asc':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        results.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'relevance':
      default:
        // Already sorted by relevance from search function
        break;
    }

    return results;
  }, [allResults, selectedType, sortBy]);

  // Paginate results
  const totalPages = Math.ceil(filteredAndSortedResults.length / resultsPerPage);
  const paginatedResults = filteredAndSortedResults.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, sortBy, query]);

  /**
   * Handles page changes with smooth scrolling to results
   * 
   * @param {number} page - The page number to navigate to
   */
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Use a timeout to ensure the scroll happens *after* the state update and re-render.
      // This prevents a race condition where the scroll triggers before the new content is rendered.
      setTimeout(() => {
        if (sectionRef.current) {
          const elementTop = sectionRef.current.offsetTop;
          const headerOffset = HEADER_HEIGHT + 16; // Header height + some padding
          window.scrollTo({
            top: elementTop - headerOffset,
            behavior: 'smooth'
          });
        }
      }, 200);
    }
  };

  return (
    <section aria-labelledby="search-results-section-title">
      {/* Accessible landmark for Search Results Section */}
      <h2 id="search-results-section-title" className="sr-only">Search Results</h2>
      <div ref={sectionRef}>
        {/* Empty Query State */}
        {!query.trim() ? (
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Start your search</h2>
            <p className="text-gray-500">Enter a search term to find relevant content</p>
          </div>
        ) : 
        /* No Results Found State */
        filteredAndSortedResults.length === 0 ? (
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">No results found</h2>
            <p className="text-gray-500 mb-4">Try different keywords or browse our services</p>
            <div className="flex flex-wrap justify-center gap-2">
              {emptySearchSuggestions.map(suggestion => (
                <button
                  key={suggestion}
                  onClick={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('q', suggestion);
                    window.location.href = `/search?${params.toString()}`;
                  }}
                  className="px-3 py-1 text-sm bg-blue-50 text-medium-blue rounded-full hover:bg-blue-100 transition-colors duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Results count */}
            <div className="px-2 mb-6 mt-6 lg:mt-1">
              <p className="text-gray-600 text-center lg:text-left">
                Found {filteredAndSortedResults.length} results for &quot;{query}&quot;
              </p>
            </div>

            {/* Results List */}
            <div className="space-y-4">
              <AnimatePresence>
                {paginatedResults.map((result, index) => (
                  <MemoizedSearchResultCard key={result.id} result={result} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <MemoizedPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default memo(SearchResultsSection);