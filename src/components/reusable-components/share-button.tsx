/**
 * @fileoverview Share Button Component
 * 
 * A client-side component that handles sharing functionality using the Web Share API
 * with fallback to clipboard copying.
 */

'use client';

import { memo, useCallback } from 'react';
import { Share2 } from 'lucide-react';

/**
 * Props interface for the ShareButton component
 */
interface ShareButtonProps {
  /** Title to share */
  title: string;
  /** Description/text to share */
  text: string;
  /** URL to share */
  url: string;
  /** Custom CSS classes */
  className?: string;
}

// Renders a share button using Web Share API with clipboard fallback
const ShareButton = ({ title, text, url, className = '' }: ShareButtonProps): JSX.Element => {
  // Handle share action via Web Share API or fallback to clipboard
  const handleShare = useCallback(async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url,
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(url);
        // You could add a toast notification here
        console.log('URL copied to clipboard');
      }
    } catch (error) {
      // Check if the error is due to user cancellation (AbortError)
      if (error instanceof Error && error.name === 'AbortError') {
        // User cancelled the share dialog - this is normal behavior, not an error
        return;
      }
      // Log other actual errors
      console.error('Error sharing:', error);
    }
  }, [title, text, url]);

  return (
    <button
      type="button"
      aria-label={`Share ${title}`}
      onClick={handleShare}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ${className}`}
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  );
}

export default memo(ShareButton);