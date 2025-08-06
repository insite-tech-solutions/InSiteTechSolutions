/**
 * @fileoverview Related Posts Component
 * 
 * This component displays related blog posts at the bottom of individual blog posts.
 * It shows other posts with similar tags or from the same author.
 */

'use client';

import { memo, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/lib/blog-loader';

/**
 * Props interface for the RelatedPosts component
 */
interface RelatedPostsProps {
  /** The current blog post */
  currentPost: BlogPost;
  /** Array of all blog posts */
  allPosts: BlogPost[];
  /** Maximum number of related posts to show */
  maxPosts?: number;
}

/**
 * Related Posts Component
 * 
 * Displays related blog posts based on tags and author.
 * Shows posts with similar tags first, then other posts by the same author.
 * 
 * @param currentPost - The current blog post
 * @param allPosts - Array of all blog posts
 * @param maxPosts - Maximum number of related posts to show (default: 3)
 * @returns Rendered related posts component
 */
function RelatedPosts({ 
  currentPost, 
  allPosts, 
  maxPosts = 3 
}: RelatedPostsProps): JSX.Element {
  // Filter out the current post and find related posts
  const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug);
  
  // Find posts with similar tags
  const postsWithSimilarTags = otherPosts.filter(post =>
    post.tags.some(tag => currentPost.tags.includes(tag))
  );
  
  // Find posts by the same author
  const postsBySameAuthor = otherPosts.filter(post =>
    post.author === currentPost.author
  );
  
  // Combine and prioritize: similar tags first, then same author, then recent posts
  const relatedPosts = useMemo(() => {
    return [
      ...postsWithSimilarTags,
      ...postsBySameAuthor.filter(post => !postsWithSimilarTags.includes(post)),
      ...otherPosts.filter(post => 
        !postsWithSimilarTags.includes(post) && 
        !postsBySameAuthor.includes(post)
      )
    ].slice(0, maxPosts);
  }, [postsWithSimilarTags, postsBySameAuthor, otherPosts, maxPosts]);

  // Don't render if no related posts
  if (relatedPosts.length === 0) {
    return <></>;
  }

  return (
    <section aria-labelledby="related-posts-title" className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
      {/* Accessible landmark for Related Posts */}
      <h2 id="related-posts-title" className="sr-only">Related Posts</h2>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Related Posts
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
            {/* Post Title */}
            <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              <Link href={post.url}>
                {post.title}
              </Link>
            </h4>
            
            {/* Post Metadata */}
            <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime} min</span>
              </div>
            </div>
            
            {/* Post Description */}
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {post.description}
            </p>
            
            {/* Read More Link */}
            <Link
              href={post.url}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default memo(RelatedPosts);