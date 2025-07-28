/**
 * @fileoverview Search Hero Section Component
 *
 * This component provides the main search interface for the search page.
 * It includes a search input with debounced URL updates, breadcrumb navigation,
 * and real-time query synchronization with URL parameters.
 *
 * Features:
 * - Debounced search input with URL synchronization
 * - Breadcrumb navigation back to home
 * - Real-time query display and updates
 * - Form submission for immediate search
 * - Accessibility features with proper ARIA labels
 * - Responsive design with mobile optimization
 * - Smooth animations with Framer Motion
 * - Auto-focus on search input for better UX
 *
 * @module SearchHeroSection
 */
'use client';

import { useState, useEffect, useRef, memo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, ChevronLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * SearchHeroSection Component
 *
 * Main search interface component that provides a comprehensive search experience.
 * Handles search input with debouncing, URL synchronization, and user navigation.
 * 
 * The component includes:
 * - Search input with debounced URL updates (300ms delay)
 * - Breadcrumb navigation for easy site navigation
 * - Real-time query display showing current search term
 * - Form submission for immediate search execution
 * - Auto-focus on search input for better user experience
 * - Proper cleanup of timeouts to prevent memory leaks
 * 
 * URL Synchronization:
 * - Maintains search query in URL parameters for shareable links
 * - Updates URL without page refresh for smooth UX
 * - Handles empty queries by removing parameter from URL
 * - Synchronizes local state with URL parameters on navigation
 * 
 * Performance Optimizations:
 * - Debounced search to reduce unnecessary URL updates
 * - Proper timeout cleanup to prevent memory leaks
 * - Memoized component to prevent unnecessary re-renders
 * - Efficient state management with minimal re-renders
 * 
 * @returns {JSX.Element} The search hero section with input and navigation
 * 
 * @example
 * ```tsx
 * <SearchHeroSection />
 * ```
 */
function SearchHeroSection(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get query from URL parameters
  const query = searchParams.get('q') || '';
  const [searchValue, setSearchValue] = useState(query);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Synchronize local state with URL parameters
  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  /**
   * Updates the URL with the new search query
   * 
   * @param {string} newQuery - The search query to update in URL
   */
  const updateQuery = (newQuery: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newQuery.trim()) {
      params.set('q', newQuery.trim());
    } else {
      params.delete('q');
    }
    router.push(`/search?${params.toString()}`);
  };

  /**
   * Handles search input changes with debouncing
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    
    // Clear existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    
    // Set new timeout for URL update
    debounceTimeoutRef.current = setTimeout(() => {
      updateQuery(value);
    }, 300);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  /**
   * Handles form submission for immediate search
   * 
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    updateQuery(searchValue);
  };

  return (
    <section
      aria-labelledby="search-hero-title"
      className="bg-gray-50 mt-header"
    >
      {/* Accessible landmark for Search Hero Section */}
      <h2 id="search-hero-title" className="sr-only">Search Results</h2>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumb Navigation */}
          <div className="bg-gradient-to-br from-medium-blue via-mild-blue to-blue-800 text-white text-left pt-5 pb-6 px-4 ">
          <div className="mb-4">
            <Link 
              href="/" 
              className="text-sm text-white hover:text-gray-200 flex items-center gap-1 mb-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Search Header */}
          <div>
            <h1 className="text-3xl font-bold text-white drop-shadow">Search Results</h1>
          </div>
          </div>

          {/* Query Display */}
          {query && (
            <div className="my-6 text-center">
              <p className="text-gray-600">
                Searching for &quot;{query}&quot;
              </p>
            </div>
          )}

          {/* Search Input Form */}
          <div className="max-w-2xl mx-auto px-3 mt-6">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Search for services, articles, or anything..."
                  className="w-full pl-10 pr-12 py-3 text-gray-700 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-mild-blue focus:border-mild-blue outline-none transition-all duration-200"
                  autoComplete="off"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-mild-blue-alt transition-colors duration-200"
                  aria-label="Search"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(SearchHeroSection);