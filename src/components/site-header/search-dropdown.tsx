'use client';

/**
 * @fileoverview Search Dropdown Component
 * 
 * An animated search dropdown that appears below the header when activated.
 * Provides real-time search functionality with keyboard navigation,
 * search suggestions, and smooth animations.
 * 
 * Features:
 * - Real-time search with debouncing
 * - Keyboard navigation (Arrow keys, Enter, Escape)
 * - Search history and suggestions
 * - Smooth animations with framer-motion
 * - Mobile-responsive design
 * - Accessibility support
 * - Loading states and empty states
 * 
 * @module SearchDropdown
 */

import { useEffect, useRef, useState, memo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Clock, ArrowRight, Hash, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/contexts/search-context';
import { SearchResult } from '@/contexts/search-context';
import { getSearchSuggestions } from '@/lib/enhanced-search-data';

/**
 * SearchResultItem component displays individual search results
 * 
 * Renders a search result item with appropriate icon, title, description,
 * and metadata. Includes hover states and click handling for navigation.
 * 
 * @param {Object} props - Component props
 * @param {SearchResult} props.result - Search result data
 * @param {boolean} props.isHighlighted - Whether this item is keyboard highlighted
 * @param {() => void} props.onClick - Click handler for navigation
 * @returns {JSX.Element} Search result item component
 */
function SearchResultItem({
  result,
  isHighlighted,
  onClick,
}: {
  result: SearchResult;
  isHighlighted: boolean;
  onClick: () => void;
}): JSX.Element {
  /**
   * Returns appropriate icon based on content type
   * 
   * @param {SearchResult['type']} type - The content type
   * @returns {JSX.Element} Icon component for the content type
   */
  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'service':
        return <Hash className="h-4 w-4 text-blue-500" />;
      case 'page':
        return <ArrowRight className="h-4 w-4 text-green-500" />;
      case 'blog':
        return <Search className="h-4 w-4 text-purple-500" />;
      case 'faq':
        return <Search className="h-4 w-4 text-orange-500" />;
      case 'about':
        return <ArrowRight className="h-4 w-4 text-gray-500" />;
      default:
        return <ArrowRight className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`
        px-4 py-3 cursor-pointer transition-colors duration-150
        ${isHighlighted ? 'bg-blue-50 border-l-4 border-medium-blue' : 'hover:bg-gray-50'}
      `}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          {getTypeIcon(result.type)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium text-sm ${isHighlighted ? 'text-blue-900' : 'text-gray-900'}`}>
            {result.title}
          </h3>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
            {result.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600`}>
              {result.type}
            </span>
            {result.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-gray-500">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
const MemoizedSearchResultItem = memo(SearchResultItem);

/**
 * SearchSuggestions component displays search history and popular searches
 * 
 * Shows recent search history and popular search suggestions when
 * no search query is entered. Includes clear history functionality.
 * 
 * @param {Object} props - Component props
 * @param {string[]} props.history - Recent search history
 * @param {(suggestion: string) => void} props.onSelectSuggestion - Suggestion selection handler
 * @param {() => void} props.onClearHistory - Clear history handler
 * @returns {JSX.Element | null} Search suggestions component or null
 */
function SearchSuggestions({
  history,
  onSelectSuggestion,
  onClearHistory,
}: {
  history: string[];
  onSelectSuggestion: (suggestion: string) => void;
  onClearHistory: () => void;
}): JSX.Element | null {
  // Get dynamic popular searches based on actual content
  const popularSearches = getSearchSuggestions('', 4);
  
  if (history.length === 0 && popularSearches.length === 0) {
    return null;
  }

  return (
    <div className="px-4 py-3 border-t border-gray-100">
      {history.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-medium text-gray-500 flex items-center gap-2">
              <Clock className="h-3 w-3" />
              Recent Searches
            </h4>
            <button
              onClick={onClearHistory}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-150"
              title="Clear search history"
            >
              Clear
            </button>
          </div>
          <div className="space-y-1">
            {history.slice(0, 3).map((item) => (
              <button
                key={item}
                onClick={() => onSelectSuggestion(item)}
                className="block w-full text-left text-sm text-gray-700 hover:text-medium-blue transition-colors duration-150"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div>
        <h4 className="text-xs font-medium text-gray-500 mb-2">Popular Searches</h4>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search) => (
            <button
              key={search}
              onClick={() => onSelectSuggestion(search)}
              className="text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-2 py-1 rounded-full transition-colors duration-150"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
const MemoizedSearchSuggestions = memo(SearchSuggestions);

/**
 * SearchDropdown component provides the main search interface
 * 
 * Renders a full-screen search dropdown with real-time search,
 * keyboard navigation, search suggestions, and result display.
 * Integrates with the global search context for state management.
 * 
 * Key Features:
 * - Real-time search with debouncing
 * - Keyboard navigation (Arrow keys, Enter, Escape)
 * - Search history and suggestions display
 * - Animated search results with type icons
 * - Loading states and empty states
 * - Mobile-responsive design
 * 
 * State Management:
 * - Integrates with global search context
 * - Manages keyboard navigation highlighting
 * - Handles input focus and form submission
 * 
 * @returns {JSX.Element | null} Search dropdown component or null if closed
 */
function SearchDropdown(): JSX.Element | null {
  const {
    isSearchOpen,
    searchQuery,
    searchResults,
    isSearching,
    searchHistory,
    closeSearch,
    setSearchQuery,
    navigateToSearchResults,
    clearSearchHistory
  } = useSearch();

  const router = useRouter();

  // Refs for managing focus and keyboard navigation
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Focus input when opened
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Reset highlighted index when results change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [searchResults]);

  /**
   * Handles keyboard navigation for search dropdown
   * 
   * @param {React.KeyboardEvent} e - Keyboard event
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isSearchOpen) return;

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeSearch();
        break;
      
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && searchResults[highlightedIndex]) {
          // Navigate to specific result
          router.push(searchResults[highlightedIndex].url);
          closeSearch();
        } else if (searchQuery.trim()) {
          // Navigate to search results page
          navigateToSearchResults(searchQuery);
        }
        break;
    }
  };

  /**
   * Handles search form submission
   * 
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateToSearchResults(searchQuery);
    }
  };

  /**
   * Handles search result click navigation
   * 
   * @param {SearchResult} result - The search result to navigate to
   */
  const handleResultClick = (result: SearchResult) => {
    router.push(result.url);
    closeSearch();
  };

  /**
   * Handles search suggestion selection
   * 
   * @param {string} suggestion - The selected search suggestion
   */
  const handleSuggestionSelect = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  // Don't render if not open
  if (!isSearchOpen) return null;

  return (
    <section aria-labelledby="search-dropdown-title">
      {/* Accessible landmark for search dropdown */}
      <h2 id="search-dropdown-title" className="sr-only">Site Search</h2>

      {/* Backdrop - closes search when clicked */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-20 z-40"
        onClick={closeSearch}
      />

      {/* Search dropdown container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed top-0 left-0 right-0 mt-header z-[60] bg-white shadow-xl border-b border-gray-200"
        onKeyDown={handleKeyDown}
      >
        <div className="max-w-10xl mx-auto">
          {/* Search input section */}
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for services, articles, or anything... (Ctrl+K / Cmd+K)"
                    className="w-full pl-10 pr-12 py-3 text-gray-700 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-mild-blue focus:border-mild-blue outline-none transition-all duration-200"
                    autoComplete="off"
                  />
                  {isSearching ? (
                    <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-mild-blue-alt animate-spin" />
                  ) : (
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-mild-blue-alt transition-colors duration-200"
                      aria-label="Search"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  )}
                </div>
                
                <button
                  type="button"
                  onClick={closeSearch}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Search results or suggestions */}
          <div>
            <AnimatePresence mode="wait">
              {searchQuery.trim() === '' && !isSearching && (
                <motion.div
                  key="suggestions"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <MemoizedSearchSuggestions
                    history={searchHistory}
                    onSelectSuggestion={handleSuggestionSelect}
                    onClearHistory={clearSearchHistory}
                  />
                </motion.div>
              )}

              {searchQuery.trim() !== '' && !isSearching && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {searchResults.length > 0 && (
                    <div className="divide-y divide-gray-100">
                      {searchResults.slice(0, 4).map((result, index) => (
                        <MemoizedSearchResultItem
                          key={result.id}
                          result={result}
                          isHighlighted={index === highlightedIndex}
                          onClick={() => handleResultClick(result)}
                        />
                      ))}
                    </div>
                  )}
                  
                  {searchResults.length === 0 && (
                    <div className="px-4 py-6 text-center text-gray-500">
                      <Search className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                      <p className="text-sm">No results found for &quot;{searchQuery}&quot;</p>
                      <p className="text-xs mt-1">Try different keywords or browse our services</p>
                    </div>
                  )}
                  
                  {/* Always show View all results link when there's a search query */}
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                    <button
                      onClick={() => navigateToSearchResults(searchQuery)}
                      className="w-full text-left text-sm text-mild-blue-alt hover:text-dark-blue-alt font-medium flex items-center gap-2 transition-colors duration-200"
                    >
                      <Search className="h-4 w-4" />
                      {searchResults.length > 0 
                        ? `View all ${searchResults.length} results for "${searchQuery}"` 
                        : `Search for "${searchQuery}" on results page`
                      }
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default memo(SearchDropdown);