/**
 * @fileoverview MediaSlideshow Component for Project Media Display
 *
 * This component creates an interactive slideshow for displaying project media
 * including images and videos. Features automatic playback, manual controls,
 * global slideshow state management, and responsive design.
 *
 * Features:
 * - Automatic slideshow with configurable timing
 * - Manual navigation controls (arrows, indicators, play/pause)
 * - Video support with autoplay and end handling
 * - Global slideshow state management (only one active at a time)
 * - Responsive design with mobile-specific interactions
 * - Crossfade transitions between media items
 * - Progress bar and visual indicators
 * - External video link support
 *
 * @module MediaSlideshow
 */

'use client';

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import Image from 'next/image';
import { Play, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import { MediaItem } from '@/lib/portfolio-media';
import { useSlideshow } from '@/contexts/slideshow-context';

/**
 * Props for the MediaSlideshow component
 * 
 * @interface MediaSlideshowProps
 * @property {MediaItem[]} media - Array of media items to display
 * @property {string} projectTitle - Title of the project for accessibility
 * @property {string} [className] - Additional CSS classes
 * @property {string} [videoUrl] - Optional external video URL
 * @property {string} projectId - Unique identifier for the slideshow
 */
interface MediaSlideshowProps {
  media: MediaItem[];
  projectTitle: string;
  className?: string;
  videoUrl?: string;
  projectId: string; // Add this to identify each slideshow uniquely
}

/**
 * MediaSlideshow Component
 * 
 * Creates an interactive slideshow for displaying project media with
 * automatic playback, manual controls, and global state management.
 * Supports both images and videos with smooth transitions.
 * 
 * The component includes:
 * - Automatic slideshow with 2.5-second intervals for images
 * - Video autoplay with end-of-video handling
 * - Manual navigation with arrow buttons and indicators
 * - Play/pause controls with visual feedback
 * - Global slideshow state management (only one active at a time)
 * - Responsive design with mobile-specific interactions
 * - Crossfade transitions between media items
 * - Progress bar showing slideshow progress
 * - External video link support
 * 
 * Interaction Modes:
 * - Desktop: Hover to start, mouse leave to stop
 * - Mobile: Click to toggle slideshow state
 * - Global: Only one slideshow active at a time
 * 
 * @param {MediaSlideshowProps} props - Component props
 * @returns {JSX.Element} Interactive media slideshow
 * 
 * @example
 * ```tsx
 * <MediaSlideshow
 *   media={projectMedia}
 *   projectTitle="Project Name"
 *   projectId="project-1"
 *   className="w-full"
 * />
 * ```
 */
function MediaSlideshow({
  media,
  projectTitle,
  className = '',
  videoUrl,
  projectId,
}: MediaSlideshowProps): JSX.Element {
  // Local state management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showControls, setShowControls] = useState(false);
  
  // Refs for timers and DOM elements
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Global slideshow state management
  const { activeSlideshow, setActiveSlideshow, isSlideShowActive } = useSlideshow();
  const slideshowId = `project-${projectId}`;
  const isThisSlideShowActive = isSlideShowActive(slideshowId);
  const [isMounted, setIsMounted] = useState(false);

  // Detect mobile on mount only
  useEffect(() => {
    setIsMounted(true);
    
    const checkMobile = () => {
      if (isMounted) {
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    if (isMounted) {
      checkMobile();
    }

    let resizeTimeout: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 150);
    };

    if (isMounted) {
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [isMounted]);

  // Clean up all timers on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  /**
   * Start the slideshow with automatic progression
   */
  const startSlideshow = useCallback(() => {
    if (media.length <= 1) return;
    
    setIsPlaying(true);
    
    const currentMedia = media[currentIndex];
    
    // If current item is a video, don't start interval - video will control timing
    if (currentMedia.type === 'video') {
      // Video autoplay will be handled by the useEffect above
      return;
    }
    
    // For images, use normal interval timing
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % media.length);
      }, 2500); // Consistent 2.5 second timing
    }
  }, [media, currentIndex]);

  /**
   * Stop the slideshow and pause all videos
   */
  const stopSlideshow = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Stop all videos
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    
    setIsPlaying(false);
  }, []);

  // Reset to first slide when media changes
  useEffect(() => {
    setCurrentIndex(0);
    stopSlideshow();
  }, [media, stopSlideshow]);

  // Auto-play video when current slide changes to a video
  useEffect(() => {
    if (!isPlaying) return;
    
    const currentMedia = media[currentIndex];
    if (currentMedia?.type === 'video') {
      // Clear any existing interval when we hit a video
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      const video = videoRefs.current[currentIndex];
      if (video) {
        video.currentTime = 0;
        video.play().catch(err => {
          if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.log('Video autoplay failed:', err);
          }
        });
      }
    } else if (currentMedia?.type === 'image' && isPlaying) {
      // If we're on an image and playing, make sure interval is running
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex(prev => (prev + 1) % media.length);
        }, 2500);
      }
    }
  }, [currentIndex, isPlaying, media]);

  /**
   * Reset slideshow to initial state
   */
  const resetToStart = useCallback(() => {
    stopSlideshow();
    setCurrentIndex(0);
    setShowControls(false);
  }, [stopSlideshow]);

  // Stop this slideshow if another one becomes active
  useEffect(() => {
    if (activeSlideshow && activeSlideshow !== slideshowId && isPlaying) {
      stopSlideshow();
      resetToStart();
    }
  }, [activeSlideshow, slideshowId, isPlaying, stopSlideshow, resetToStart]);

  // Handle mouse enter with delay to prevent accidental triggers
  const handleMouseEnter = useCallback(() => {
    if (isMobile || media.length <= 1) return;
    
    setIsHovered(true);
    
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Delay before starting slideshow to prevent accidental triggers
    hoverTimeoutRef.current = setTimeout(() => {
      if (containerRef.current?.matches(':hover')) {
        setShowControls(true);
        startSlideshow();
      }
    }, 300);
  }, [isMobile, media.length, startSlideshow]);

  // Handle mouse leave with immediate stop
  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    
    setIsHovered(false);
    
    // Clear hover timeout if still pending
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    // Immediate stop and reset
    resetToStart();
  }, [isMobile, resetToStart]);

  // Handle mobile click toggle
  const handleClick = useCallback(() => {
    if (!isMobile || media.length <= 1) return;
    
    if (isThisSlideShowActive && isPlaying) {
      // Stop this slideshow
      setActiveSlideshow(null);
      resetToStart();
    } else {
      // Start this slideshow (will stop others automatically)
      setActiveSlideshow(slideshowId);
      setShowControls(true);
      startSlideshow();
    }
  }, [isMobile, media.length, isThisSlideShowActive, isPlaying, resetToStart, startSlideshow, setActiveSlideshow, slideshowId]);

  // Manual navigation functions
  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= media.length) return;
    
    stopSlideshow();
    setCurrentIndex(index);
    
    // Restart slideshow if it was playing
    if (showControls && (isHovered || isMobile)) {
      setTimeout(startSlideshow, 100);
    }
  }, [media.length, stopSlideshow, showControls, isHovered, isMobile, startSlideshow]);

  const goToPrevious = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? media.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, media.length, goToSlide]);

  const goToNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % media.length;
    goToSlide(newIndex);
  }, [currentIndex, media.length, goToSlide]);

  const togglePlayPause = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isPlaying) {
      stopSlideshow();
    } else {
      startSlideshow();
    }
  }, [isPlaying, stopSlideshow, startSlideshow]);

  // Handle video end - advance to next slide or restart
  const handleVideoEnd = useCallback(() => {
    // Move to next slide or restart slideshow
    setTimeout(() => {
      const nextIndex = currentIndex === media.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
      
      // The useEffect will handle starting the next slide (video or image interval)
    }, 500); // Small delay before transitioning
  }, [currentIndex, media.length]);

  // Handle video ref assignment
  const setVideoRef = useCallback((index: number) => (ref: HTMLVideoElement | null) => {
    videoRefs.current[index] = ref;
  }, []);

  const currentMedia = media[currentIndex];
  const hasMultipleItems = media.length > 1;

  if (!currentMedia) {
    return (
      <div className={`relative aspect-video bg-gray-100 rounded-xl flex items-center justify-center ${className}`}>
        <span className="text-gray-500">No media available</span>
      </div>
    );
  }

  return (
    <>
      {/* Slideshow Container */}
      <div
        ref={containerRef}
        className={`relative aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer group ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Image Container with Crossfade */}
        <div className="relative w-full h-full">
          {media.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === currentIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              style={{
                transitionDelay: index === currentIndex ? '50ms' : '0ms'
              }}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={`${projectTitle} - Image ${index + 1}`}
                  fill
                  className="object-contain bg-gray-100"
                  style={{
                    transform: 'scale(1.05)',
                    transformOrigin: 'center'
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                  quality={90}
                />
              ) : (
                <video
                  ref={setVideoRef(index)}
                  src={item.src}
                  className="w-full h-full object-contain bg-gray-100"
                  style={{
                    transform: 'scale(1.05)',
                    transformOrigin: 'center'
                  }}
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                />
              )}
            </div>
          ))}
        </div>

        {/* Controls Overlay */}
        {showControls && hasMultipleItems && (
          <div className="absolute inset-0">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 transform hover:scale-110 hover:-translate-x-1 z-10"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>

            <button
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 transform hover:scale-110 hover:translate-x-1 z-10"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 transform hover:scale-110 z-10"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-gray-700" />
              ) : (
                <Play className="w-4 h-4 text-gray-700 ml-0.5" />
              )}
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {media.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentIndex
                      ? 'bg-white scale-110 shadow-md'
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-white via-white to-white/80 transition-all duration-500 ease-out shadow-sm"
                  style={{
                    width: `${((currentIndex + 1) / media.length) * 100}%`,
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* External Video Play Button */}
        {videoUrl && currentIndex === 0 && !showControls && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 left-4 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-3 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Play className="h-4 w-4 text-gray-700 ml-0.5 transition-transform duration-200" />
          </a>
        )}
      </div>
    </>
  );
};

export default memo(MediaSlideshow);