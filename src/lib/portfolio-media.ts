/**
 * @fileoverview Portfolio Media Management Utilities
 *
 * This module provides utility functions for managing portfolio project media files,
 * including image and video assets for project showcases and slideshows.
 *
 * Features:
 * - Project media folder mapping and organization
 * - Static media file definitions with ordering
 * - Support for both images and videos
 * - Default image fallback handling
 * - Type-safe media item interfaces
 *
 * Media Organization:
 * - Each project has a dedicated media folder
 * - Files are ordered numerically for consistent display
 * - Supports both image (webp, jpg, jpeg) and video (mp4) formats
 * - Fallback placeholder images for missing content
 *
 * @module portfolio-media
 */

/**
 * MediaItem Interface
 * 
 * Defines the structure for portfolio media items including
 * source path, media type, and display order.
 * 
 * @interface MediaItem
 * @property {string} src - File path to the media asset
 * @property {'image' | 'video'} type - Media type for proper rendering
 * @property {number} order - Display order for slideshow sequencing
 * 
 * @example
 * ```typescript
 * const mediaItem: MediaItem = {
 *   src: '/portfolio-media/pycat/1_pycat_logo_512.webp',
 *   type: 'image',
 *   order: 1
 * };
 * ```
 */
export interface MediaItem {
  src: string;
  type: 'image' | 'video';
  order: number;
}

/**
 * Project Media Folder Mapping
 * 
 * Maps project IDs to their corresponding media folder names.
 * This allows for flexible folder naming while maintaining
 * consistent project ID references throughout the application.
 * 
 * @constant {Record<string, string>}
 */
const projectMediaFolders: Record<string, string> = {
  'pycat-napari': 'pycat',
  'banerjee-lab': 'banerjee-lab', 
  'dla-inverse-design': 'inverse-design',
  'kiosk-app': 'irepair-app',
  'inventory-app': 'inventory-app',
  'qaoa-max-sat': 'qaoa',
};

/**
 * Get Project Media Folder Name
 * 
 * Retrieves the media folder name for a given project ID.
 * Returns null if no folder mapping exists for the project.
 * 
 * @function getProjectMediaFolder
 * @param {string} projectId - The unique project identifier
 * @returns {string | null} The media folder name or null if not found
 * 
 * @example
 * ```typescript
 * const folder = getProjectMediaFolder('pycat-napari');
 * // Returns 'pycat'
 * 
 * const unknown = getProjectMediaFolder('unknown-project');
 * // Returns null
 * ```
 */
export function getProjectMediaFolder(projectId: string): string | null {
  return projectMediaFolders[projectId] || null;
}

/**
 * Get Project Media Files
 * 
 * Retrieves all media files for a project in their defined order.
 * Uses static definitions based on known files in each project folder.
 * 
 * Features:
 * - Static file definitions for consistent ordering
 * - Support for both images and videos
 * - Automatic base path generation
 * - Fallback to empty array for unknown projects
 * 
 * @function getProjectMedia
 * @param {string} projectId - The unique project identifier
 * @returns {MediaItem[]} Array of media items in display order
 * 
 * @example
 * ```typescript
 * const media = getProjectMedia('pycat-napari');
 * // Returns array of MediaItem objects for pycat project
 * 
 * const empty = getProjectMedia('unknown-project');
 * // Returns empty array
 * ```
 */
export function getProjectMedia(projectId: string): MediaItem[] {
  const folder = getProjectMediaFolder(projectId);
  if (!folder) return [];

  const basePath = `/portfolio-media/${folder}/`;
  
  // Define media files for each project
  const mediaFiles: Record<string, MediaItem[]> = {
    'pycat': [
      { src: `${basePath}1_pycat_logo_512.webp`, type: 'image', order: 1 },
      { src: `${basePath}2_viewer_and_menu_highlights.jpg`, type: 'image', order: 2 },
      { src: `${basePath}3_opened_image_in_viewer.jpg`, type: 'image', order: 3 },
      { src: `${basePath}4_measuring_lines.jpg`, type: 'image', order: 4 },
      { src: `${basePath}5_preprocessed_images.jpg`, type: 'image', order: 5 },
      { src: `${basePath}6_cell_analyzer.jpg`, type: 'image', order: 6 },
      { src: `${basePath}7_condensate_segmentation.jpg`, type: 'image', order: 7 },
      { src: `${basePath}8_save_and_clear_popup.jpg`, type: 'image', order: 8 },
    ],
    'banerjee-lab': [
      { src: `${basePath}1_banerjee_lab_homepage.jpg`, type: 'image', order: 1 },
      { src: `${basePath}2_banerjee_lab_outreach.jpg`, type: 'image', order: 2 },
      { src: `${basePath}3_banerjee_lab_member.jpg`, type: 'image', order: 3 },
      { src: `${basePath}4_banerjee_lab_logo.jpeg`, type: 'image', order: 4 },
    ],
    'inverse-design': [
      { src: `${basePath}1_sem_image.jpg`, type: 'image', order: 1 },
      { src: `${basePath}2_dla_graphic.jpg`, type: 'image', order: 2 },
      { src: `${basePath}3_adjoint_graphic.jpg`, type: 'image', order: 3 },
      { src: `${basePath}4_gradient_graphic.jpg`, type: 'image', order: 4 },
      { src: `${basePath}5_parameter_map.jpg`, type: 'image', order: 5 },
      { src: `${basePath}6_phase_map.jpg`, type: 'image', order: 6 },
      { src: `${basePath}7_sinusoid_optimization.jpg`, type: 'image', order: 7 },
      { src: `${basePath}8_superposition_optimization.jpg`, type: 'image', order: 8 },
      { src: `${basePath}9_sawtooth_optimization.jpg`, type: 'image', order: 9 },
    ],
    'irepair-app': [
      { src: `${basePath}1_home_image.jpg`, type: 'image', order: 1 },
      { src: `${basePath}2_irepair_hover.mp4`, type: 'video', order: 2 },
    ],
    'inventory-app': [
      { src: `${basePath}1_inventory_homepage.jpg`, type: 'image', order: 1 },
      { src: `${basePath}2_inventory_app_hover.mp4`, type: 'video', order: 2 },
    ],
    'qaoa': [
      { src: `${basePath}1_circuit_graphic.jpg`, type: 'image', order: 1 },
      { src: `${basePath}2_circuit_code.jpg`, type: 'image', order: 2 },
      { src: `${basePath}3_ring_graphic.jpg`, type: 'image', order: 3 },
    ],
  };
  
  return mediaFiles[folder] || [];
}

/**
 * Get Project Default Image
 * 
 * Retrieves the default (first) image for a project, typically used
 * for project cards and preview thumbnails.
 * 
 * Features:
 * - Returns the first media item (order: 1) for the project
 * - Falls back to placeholder image if no media exists
 * - Ensures consistent image display across the application
 * 
 * @function getProjectDefaultImage
 * @param {string} projectId - The unique project identifier
 * @returns {string} Path to the default image or placeholder
 * 
 * @example
 * ```typescript
 * const defaultImage = getProjectDefaultImage('pycat-napari');
 * // Returns '/portfolio-media/pycat/1_pycat_logo_512.webp'
 * 
 * const placeholder = getProjectDefaultImage('unknown-project');
 * // Returns '/api/placeholder/600/400'
 * ```
 */
export function getProjectDefaultImage(projectId: string): string {
  const media = getProjectMedia(projectId);
  const defaultImage = media.find(item => item.order === 1);
  return defaultImage?.src || '/api/placeholder/600/400';
} 