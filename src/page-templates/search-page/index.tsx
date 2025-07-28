/**
 * @fileoverview Search Page Template Components
 *
 * Main template components for the search results page using the existing
 * search components. Provides page loading context and layout structure.
 * 
 * Features:
 * - Page loading context management
 * - Responsive layout with sidebar filters
 * - Component composition pattern
 * - Smooth page transitions
 * - Loading state handling
 * - Clean component hierarchy
 * 
 * Architecture:
 * - Template composition with multiple search components
 * - Context-based loading state management
 * - Responsive grid layout for filters and results
 * - Component delegation pattern for clean separation
 * - Performance optimized with proper memoization
 * 
 * @module SearchPageTemplate
 */
'use client';

import { useEffect } from 'react';
import Layout from '@/components/reusable-components/layout';
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';

// Import all search page components
import SearchHeroSection from './search-hero-section';
import SearchFiltersSection from './search-filters-section';
import SearchSuggestionsSection from './search-suggestions-section';
import SearchResultsSection from './search-results-section';

/**
 * SearchPageContent Component
 *
 * Main content component that assembles all search page sections
 * into a cohesive layout. Handles page loading state and provides
 * the complete search experience.
 * 
 * The component includes:
 * - Hero section with search input (full-width)
 * - Responsive layout with sidebar filters
 * - Search results with pagination
 * - Search suggestions for discovery
 * - Proper spacing and responsive design
 * 
 * Layout Structure:
 * - Hero section spans full width at top
 * - Main content uses responsive grid layout
 * - Filters sidebar (1 column on desktop)
 * - Results area (3 columns on desktop)
 * - Suggestions section at bottom
 * 
 * Performance Features:
 * - Page loading state management
 * - Efficient component composition
 * - Responsive design optimization
 * - Clean separation of concerns
 * 
 * @returns {JSX.Element} The complete search page content
 * 
 * @example
 * ```tsx
 * <SearchPageContent />
 * ```
 */
export function SearchPageContent(): JSX.Element {
  const { setIsPageLoading } = usePageLoading();

  // Handle page loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsPageLoading]);
  
  return (
    <>
      {/* Hero Section - Full-width */}
      <SearchHeroSection />
      
      {/* Main Content Layout */}
      <Layout>
        <div className="pt-12">
          {/* Search layout with filters and results */}
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filters sidebar - Column span 1 */}
            <div className="lg:col-span-1">
              <SearchFiltersSection />
            </div>

            {/* Search results - Column span 3 */}
            <div className="lg:col-span-3">
              <SearchResultsSection />
            </div>
          </div>
          <div className="py-8">
            <SearchSuggestionsSection />
          </div>
        </div>
      </Layout>
    </>
  );
}

/**
 * SearchPageLoaderWrapper Component
 * 
 * Wrapper component that conditionally renders the page transition loader
 * based on the loading state from context. Provides smooth transitions
 * between loading and content states.
 * 
 * Features:
 * - Conditional loader rendering
 * - Smooth transition effects
 * - Always renders content for seamless UX
 * - Context-based loading state management
 * - Proper cleanup and state handling
 * 
 * Loading State Management:
 * - Uses page loading context for state
 * - Conditionally shows loader during transitions
 * - Always renders content for immediate display
 * - Smooth transitions between states
 * 
 * @returns {JSX.Element} Loader and content with conditional rendering
 * 
 * @example
 * ```tsx
 * <SearchPageLoaderWrapper />
 * ```
 */
function SearchPageLoaderWrapper(): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {/* Conditional Page Loader - Shows during initial page load */}
      {isPageLoading && <PageTransitionLoader />}
      
      {/* Main Page Content - Always rendered for smooth transitions */}
      <SearchPageContent />
    </>
  );
}

/**
 * SearchPageTemplate Component
 * 
 * Root template component that provides the page loading context to all child components.
 * This is the main export used by the Next.js page component and ensures proper
 * loading state management throughout the search page.
 * 
 * Features:
 * - Page loading context provider wrapper
 * - Consistent loading behavior across the application
 * - Proper component hierarchy for state management
 * - Clean separation of concerns between loading and content
 * - Component composition pattern for maintainability
 * 
 * Component Hierarchy:
 * - PageLoadingProvider (context provider)
 * - SearchPageLoaderWrapper (conditional loader)
 * - SearchPageContent (main content)
 * - Individual search components
 * 
 * Usage Pattern:
 * - Imported by Next.js page component
 * - Provides complete search page functionality
 * - Handles all loading and state management
 * - Maintains consistent UX across the site
 * 
 * @returns {JSX.Element} The complete search page template with context
 * 
 * @example
 * ```tsx
 * // Usage in Next.js page
 * import SearchPageTemplate from '@/page-templates/search-page'
 * 
 * export default function SearchPage() {
 *   return <SearchPageTemplate />
 * }
 * ```
 */
export default function SearchPageTemplate(): JSX.Element {
  return (
    <PageLoadingProvider>
      <SearchPageLoaderWrapper />
    </PageLoadingProvider>
  );
} 