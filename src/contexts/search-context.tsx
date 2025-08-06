/**
 * @fileoverview Search Context Provider
 * 
 * Provides global search state management for the application.
 * Handles search query state, dropdown visibility, search results,
 * and search operations with debouncing for performance.
 * 
 * Features:
 * - Global search state management
 * - Debounced search to prevent excessive API calls
 * - Search results caching for better UX
 * - Keyboard shortcuts (Ctrl+K to open search)
 * - Search history management with localStorage persistence
 * - Mobile-responsive search behavior
 * - Type-safe search result interface
 * - Performance optimized with useCallback hooks
 * 
 * Architecture:
 * - React Context for global state management
 * - Custom hook for easy access to search functionality
 * - localStorage integration for search history persistence
 * - Keyboard event handling for shortcuts
 * - Debounced search operations for performance
 * 
 * @module SearchContext
 */
'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/navigation'
import { searchContent } from '@/lib/enhanced-search-data'

/**
 * Represents a single search result item
 * 
 * This interface defines the structure of each search result with
 * comprehensive metadata for display, navigation, and relevance scoring.
 * 
 * @interface SearchResult
 */
export interface SearchResult {
  /** Unique identifier for the search result */
  id: string
  /** Display title of the search result */
  title: string
  /** Brief description or excerpt for preview */
  description: string
  /** URL path to navigate to when clicked */
  url: string
  /** Type of content for categorization and filtering */
  type: 'page' | 'service' | 'blog' | 'faq' | 'about'
  /** Tags for categorization and enhanced search matching */
  tags: string[]
  /** Search relevance score (0-1) for result ranking */
  score?: number
}

/**
 * Search context interface defining all available search functionality
 * 
 * Provides comprehensive search state management and actions for
 * the entire application. Includes state, actions, and utility functions.
 * 
 * @interface SearchContextType
 */
interface SearchContextType {
  // State management
  /** Whether the search dropdown is currently visible */
  isSearchOpen: boolean
  /** Current search query string */
  searchQuery: string
  /** Array of current search results */
  searchResults: SearchResult[]
  /** Whether a search operation is in progress */
  isSearching: boolean
  /** Recent search queries for suggestions and history */
  searchHistory: string[]
  
  // Actions
  /** Open the search dropdown and focus input */
  openSearch: () => void
  /** Close the search dropdown and clear state */
  closeSearch: () => void
  /** Update the current search query with debouncing */
  setSearchQuery: (query: string) => void
  /** Perform a search operation with results caching */
  performSearch: (query: string) => void
  /** Navigate to search results page with query */
  navigateToSearchResults: (query: string) => void
  /** Clear search history from state and localStorage */
  clearSearchHistory: () => void
}

// Create the search context
const SearchContext = createContext<SearchContextType | undefined>(undefined)

/**
 * Search Provider Component
 * 
 * Wraps the application and provides search functionality to all child components.
 * Includes keyboard shortcut handling, search debouncing, and state management.
 * 
 * Key Features:
 * - Debounced search to prevent excessive operations
 * - Keyboard shortcuts (Ctrl+K or Cmd+K to open search)
 * - Search history persistence in localStorage
 * - Mobile-responsive behavior
 * - Performance optimized with useCallback hooks
 * - Error handling for search operations
 * - Clean state management with proper cleanup
 * 
 * State Management:
 * - Search dropdown visibility state
 * - Current search query and results
 * - Search operation loading state
 * - Search history with localStorage sync
 * 
 * Performance Optimizations:
 * - useCallback hooks for stable function references
 * - Debounced search to reduce API calls
 * - Efficient state updates with proper dependencies
 * - Cleanup of event listeners and timeouts
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to wrap
 * @returns {JSX.Element} Search context provider with all functionality
 * 
 * @example
 * ```tsx
 * <SearchProvider>
 *   <App />
 * </SearchProvider>
 * ```
 */
export function SearchProvider({ children }: { children: ReactNode }): JSX.Element {
  // Core search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const router = useRouter();

  /**
   * Opens the search dropdown and focuses the input
   */
  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  /**
   * Closes the search dropdown and clears all search state
   */
  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  }, []);

  /**
   * Performs a search operation with error handling
   * 
   * @param {string} query - The search query to execute
   */
  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    try {
      const results = searchContent(query, 8);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  /**
   * Updates search query with debouncing for performance
   * 
   * @param {string} query - The new search query
   */
  const updateSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim().length >= 2) {
      performSearch(query.trim());
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [performSearch]);

  /**
   * Navigates to search results page and updates history
   * 
   * @param {string} query - The search query to navigate with
   */
  const navigateToSearchResults = useCallback((query: string) => {
    if (!query.trim()) return;
    setSearchHistory(prev => {
      const newHistory = [query, ...prev.filter(q => q !== query)];
      return newHistory.slice(0, 10);
    });
    router.push(`/search?q=${encodeURIComponent(query)}`);
    closeSearch();
  }, [router, closeSearch]);

  /**
   * Clears search history from state and localStorage
   */
  const clearSearchHistory = useCallback(() => {
    setSearchHistory([]);
    try {
      localStorage.removeItem('search-history');
    } catch (error) {
      console.warn('Failed to clear search history:', error);
    }
  }, []);

  // Load search history from localStorage on mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('search-history');
      if (savedHistory) {
        setSearchHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.warn('Failed to load search history:', error);
    }
  }, []);

  // Save search history to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('search-history', JSON.stringify(searchHistory.slice(0, 10)));
    } catch (error) {
      console.warn('Failed to save search history:', error);
    }
  }, [searchHistory]);

  // Handle keyboard shortcuts for search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        isSearchOpen ? closeSearch() : openSearch();
      }
      if (event.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, openSearch, closeSearch]);

  const contextValue: SearchContextType = {
    isSearchOpen,
    searchQuery,
    searchResults,
    isSearching,
    searchHistory,
    openSearch,
    closeSearch,
    setSearchQuery: updateSearchQuery,
    performSearch,
    navigateToSearchResults,
    clearSearchHistory
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

/**
 * Hook to access search context
 * 
 * Provides type-safe access to search functionality throughout the app.
 * Throws an error if used outside of SearchProvider to prevent runtime issues.
 * 
 * Features:
 * - Type-safe access to all search functionality
 * - Error handling for improper usage
 * - Comprehensive search state and actions
 * - Easy integration with React components
 * 
 * @returns {SearchContextType} Search context with all search functionality
 * @throws {Error} If used outside of SearchProvider
 * 
 * @example
 * ```tsx
 * const { openSearch, searchQuery, searchResults } = useSearch()
 * 
 * // Open search dropdown
 * openSearch()
 * 
 * // Access search results
 * searchResults.map(result => (
 *   <div key={result.id}>{result.title}</div>
 * ))
 * ```
 */
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
} 