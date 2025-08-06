/**
 * @fileoverview Blog Listing Section Component
 * 
 * This component renders a list of blog posts with pagination, filtering, and search capabilities.
 * It displays blog post cards with metadata and excerpts, and provides navigation between pages.
 * 
 * Features:
 * - Responsive blog post cards with metadata display
 * - Pagination controls for navigation
 * - Search functionality for post filtering
 * - Tag-based filtering system
 * - Featured post highlighting
 * - Smooth animations and transitions
 */

'use client';

import { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, Search } from 'lucide-react';
import { BlogPost } from '@/lib/blog-loader';

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const filterControlsVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const blogCardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/**
 * Props interface for the BlogListingSection component
 * 
 * @interface BlogListingSectionProps
 * @property {BlogPost[]} posts - Array of all blog posts to display
 * @property {number} [postsPerPage] - Number of posts to show per page (default: 6)
 */
interface BlogListingSectionProps {
  /** Array of all blog posts to display */
  posts: BlogPost[];
  /** Number of posts to show per page */
  postsPerPage?: number;
}

/**
 * Blog Post Card Component
 * 
 * Renders a single blog post as a card with metadata and excerpt.
 * Features hover effects, featured badge, and responsive design.
 * 
 * @param {Object} props - Component props
 * @param {BlogPost} props.post - The blog post to display
 * @returns {JSX.Element} Rendered blog post card
 */
function BlogPostCard({ post }: { post: BlogPost }): JSX.Element {
  return (
    <motion.article
      variants={blogCardVariants}
      className="relative bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="bg-medium-blue text-white text-xs font-semibold px-3 py-1 absolute bottom-6 right-4 rounded-full z-10">
          Featured
        </div>
      )}

      <div className="p-6">
        {/* Post Title */}
        <h2 className="mt-1 text-xl font-bold text-gray-900 mb-3 hover:text-medium-blue transition-colors">
          <Link href={post.url}>
            {post.title}
          </Link>
        </h2>

        {/* Post Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Post Description */}
        <p className="text-gray-700 mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs bg-blue-50 text-medium-blue-alt rounded-full"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Read More Link */}
        <Link
          href={post.url}
          className="inline-flex items-center text-medium-blue hover:text-blue-700 font-medium text-sm"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

/**
 * Pagination Component
 * 
 * Renders pagination controls for navigating through blog posts.
 * Provides previous/next buttons and page number navigation.
 * 
 * @param {Object} props - Component props
 * @param {number} props.currentPage - Current page number
 * @param {number} props.totalPages - Total number of pages
 * @param {function} props.onPageChange - Callback function for page changes
 * @returns {JSX.Element} Rendered pagination component
 */
function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: { 
  currentPage: number; 
  totalPages: number; 
  onPageChange: (page: number) => void; 
}): JSX.Element {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 text-sm font-medium rounded-md ${
            currentPage === page
              ? 'bg-medium-blue text-white'
              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}

/**
 * Blog Listing Section Component
 * 
 * Renders a complete blog listing with pagination, filtering, and search.
 * Provides a comprehensive interface for browsing and discovering blog content.
 * 
 * @param {BlogListingSectionProps} props - Component props
 * @param {BlogPost[]} props.posts - Array of all blog posts to display
 * @param {number} [props.postsPerPage=6] - Number of posts to show per page
 * @returns {JSX.Element} Rendered blog listing section
 */
export default function BlogListingSection({ 
  posts, 
  postsPerPage = 6 
}: BlogListingSectionProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = posts.flatMap(post => post.tags);
    return [...new Set(tags)].sort();
  }, [posts]);

  // Filter posts based on search, tags, and featured status
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Tag filter
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => post.tags.includes(tag));

      // Featured filter
      const matchesFeatured = !showFeaturedOnly || post.featured;
      
      return matchesSearch && matchesTags && matchesFeatured;
    });
  }, [posts, searchTerm, selectedTags, showFeaturedOnly]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    handleFilterChange();
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    handleFilterChange();
  };

  const handleFeaturedToggle = (value: boolean) => {
    setShowFeaturedOnly(value);
    handleFilterChange();
  };

  return (
    <section>
      <div>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest insights, tutorials, and industry knowledge.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          className="mb-8 space-y-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          variants={filterControlsVariants}
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Featured Toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={(e) => handleFeaturedToggle(e.target.checked)}
                className="rounded border-gray-300 text-medium-blue focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Featured only</span>
            </label>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-medium-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center text-sm text-gray-600">
            Showing {currentPosts.length} of {filteredPosts.length} posts
            {searchTerm && ` for "${searchTerm}"`}
            {selectedTags.length > 0 && ` in ${selectedTags.join(', ')}`}
            {showFeaturedOnly && ' (featured only)'}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              {currentPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 