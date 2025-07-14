/**
 * @fileoverview Location Image Section Component
 * 
 * This component displays a location/service area visualization with an optimized image
 * and descriptive text. Features Next.js Image optimization, responsive sizing,
 * and accessibility support for geographic information presentation.
 */

import Image from "next/image";
import { Globe } from "lucide-react";

/**
 * LocationImageSection Component
 * 
 * Renders a section displaying the company's service area with an optimized map image
 * and supporting descriptive text. Uses Next.js Image component for performance
 * optimization and responsive image delivery.
 * 
 * Features:
 * - Next.js Image optimization with priority loading
 * - Responsive image sizing with srcset generation
 * - Accessible markup with proper ARIA labels
 * - Card-style layout with shadow effects
 * - Semantic HTML structure for geographic content
 * - Optimized image loading for above-the-fold content
 * - Responsive text highlighting with brand colors
 * 
 * @returns {JSX.Element} The rendered location image section
 * 
 * @example
 * ```tsx
 * // Usage in a contact page
 * import LocationImageSection from '@/page-templates/contact-page/location-image-section'
 * 
 * export default function ContactPage() {
 *   return (
 *     <div>
 *       <LocationImageSection />
 *     </div>
 *   )
 * }
 * ```
 */
export default function LocationImageSection(): JSX.Element {
  return (
    <section aria-labelledby="location-image-section-title" className="bg-white p-6 rounded-lg shadow-md text-gray-900 relative">
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="location-image-section-title" className="sr-only">Our Reach</h2>
      
      {/* Section Header - Visible title for the service area */}
      <h3 className="text-xl md:text-2xl font-semibold text-medium-blue mb-4">Our Reach</h3>
      
      {/* Optimized Map Image - Next.js Image component with performance optimizations */}
      <Image
        src="/wny-map.png"
        alt="Serving WNY and the Globe"
        width={800}
        height={400}
        className="rounded-md mb-4 object-cover"
        priority
        sizes="(max-width: 720px) 100vw, 800px"
      />
      
      {/* Service Area Description - Text with highlighted geographic terms */}
      <p className="text-lg text-gray-700">
        Proudly serving <span className="font-semibold text-medium-blue">Western New York</span> locally,
        and the <span className="font-semibold text-medium-blue">globe</span> remotely.
      </p>
      
      {/* Globe Icon - Positioned in bottom right corner */}
      <div className="absolute bottom-24 right-6 rounded-full bg-medium-blue p-2 shadow-lg">
        <Globe className="w-12 h-12 text-white" />
      </div>
    </section>
  );
}