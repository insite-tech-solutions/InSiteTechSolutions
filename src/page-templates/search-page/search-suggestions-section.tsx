/**
 * @fileoverview Search Suggestions Section Component
 *
 * This component provides search suggestions and related content to help users
 * discover more content. It includes popular searches and trending topics.
 * 
 * Features:
 * - Popular search suggestions
 * - Trending topics and keywords
 * - Related content recommendations
 * - Quick search buttons
 * - Responsive design with proper spacing
 * - Clean and accessible interface
 * - Search history management
 * - Clear history functionality
 * - Smooth animations with Framer Motion
 * 
 * Architecture:
 * - Client-side component for interactive suggestions
 * - Integration with search functionality
 * - Responsive design with mobile-first approach
 * - Consistent styling with the rest of the application
 * - Performance optimized with memoization
 * 
 * @module SearchSuggestionsSection
 */
'use client';

import { memo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, TrendingUp, Sparkles, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearch } from '@/contexts/search-context';

/**
 * Popular search suggestions for user discovery
 * 
 * @constant {Array} POPULAR_SEARCHES
 */
const POPULAR_SEARCHES = [
  'web development',
  'ai automation',
  'custom software',
  'data analysis',
  'mobile apps',
  'consulting',
  'graphic design',
  'seo marketing'
];

/**
 * Trending topics with search counts
 * 
 * @constant {Array} TRENDING_TOPICS
 */
const TRENDING_TOPICS = [
  { topic: 'Artificial Intelligence', count: 15 },
  { topic: 'Web Development', count: 12 },
  { topic: 'Data Analytics', count: 10 },
  { topic: 'Mobile Apps', count: 8 },
  { topic: 'Automation', count: 7 },
  { topic: 'Consulting', count: 6 }
];

/**
 * SearchSuggestionsSection Component
 *
 * Interactive suggestions component that helps users discover content
 * through popular searches, trending topics, and search history.
 * Provides multiple ways to find relevant content quickly.
 * 
 * The component includes:
 * - Recent search history with clear functionality
 * - Popular search suggestions for discovery
 * - Trending topics with search counts
 * - Quick navigation to services and contact
 * - Smooth animations for enhanced UX
 * - Responsive design for all devices
 * 
 * Search History Management:
 * - Displays recent searches from context
 * - Clear history functionality
 * - Limited display to prevent clutter
 * - Quick search execution on click
 * 
 * Content Discovery:
 * - Popular searches for common queries
 * - Trending topics with engagement metrics
 * - Service and contact navigation
 * - Helpful guidance for users
 * 
 * Performance Optimizations:
 * - Memoized component to prevent re-renders
 * - Efficient search parameter updates
 * - Smooth animations with proper timing
 * - Responsive design with mobile optimization
 * 
 * @returns {JSX.Element} The search suggestions section with interactive content
 * 
 * @example
 * ```tsx
 * <SearchSuggestionsSection />
 * ```
 */
function SearchSuggestionsSection(): JSX.Element {
  const searchParams = useSearchParams();
  const { searchHistory, clearSearchHistory } = useSearch();

  /**
   * Handles search suggestion clicks and navigates to search results
   * 
   * @param {string} suggestion - The search term to execute
   */
  const handleSuggestionClick = (suggestion: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('q', suggestion);
    window.location.href = `/search?${params.toString()}`;
  };

  return (
    <section aria-labelledby="search-suggestions-section-title">
      {/* Accessible landmark for Search Suggestions Section */}
      <h2 id="search-suggestions-section-title" className="sr-only">
        Search Suggestions
      </h2>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
                 >
           {/* Recent Searches Section */}
           {searchHistory.length > 0 && (
             <div className="mb-8">
               <div className="flex items-center justify-between mb-4">
                 <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                   <Search className="h-5 w-5 text-mild-blue" />
                   Recent Searches
                 </h2>
                 <button
                   onClick={clearSearchHistory}
                   className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                   title="Clear search history"
                 >
                   <Trash2 className="h-4 w-4" />
                   Clear
                 </button>
               </div>
               <div className="flex flex-wrap gap-2">
                 {searchHistory.slice(0, 6).map((search, index) => (
                   <motion.button
                     key={search}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: index * 0.1 }}
                     onClick={() => handleSuggestionClick(search)}
                     className="px-4 py-2 text-sm bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 shadow-sm"
                   >
                     {search}
                   </motion.button>
                 ))}
               </div>
             </div>
           )}

           {/* Popular Searches Section */}
           <div className="mb-8">
             <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
               <Search className="h-5 w-5 text-mild-blue" />
               Popular Searches
             </h2>
             <div className="flex flex-wrap gap-2">
               {POPULAR_SEARCHES.map((search, index) => (
                 <motion.button
                   key={search}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: index * 0.1 }}
                   onClick={() => handleSuggestionClick(search)}
                   className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 shadow-sm"
                 >
                   {search}
                 </motion.button>
               ))}
             </div>
           </div>

          {/* Trending Topics Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Trending Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TRENDING_TOPICS.map((topic, index) => (
                <motion.div
                  key={topic.topic}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium text-gray-900">{topic.topic}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {topic.count} searches
                    </span>
                  </div>
                  <button
                    onClick={() => handleSuggestionClick(topic.topic.toLowerCase())}
                    className="mt-2 text-sm text-mild-blue hover:text-blue-800 transition-colors duration-200"
                  >
                    Search this topic →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Can&apos;t find what you&apos;re looking for? Try our services or contact us directly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/services"
                className="px-4 py-2 text-sm bg-medium-blue text-white rounded-lg hover:bg-dark-blue-alt transition-colors duration-200"
              >
                Browse Services
              </a>
              <a
                href="/contact"
                className="px-4 py-2 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(SearchSuggestionsSection);