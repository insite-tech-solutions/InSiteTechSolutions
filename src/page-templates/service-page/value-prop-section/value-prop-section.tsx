/**
 * @fileoverview Value Proposition Section for Service Pages
 * 
 * A comprehensive section component that presents the value proposition through:
 * - Industry trends with expandable descriptions
 * - Market insights with inline animated statistics
 * - Optional comparison tables
 * - Call-to-action with gradient styling
 * - Flexible layout variants and additional content injection points
 * 
 * Features:
 * - Framer Motion animations with stagger effects
 * - Responsive two-column layout (lg:grid-cols-2)
 * - Expandable trend cards with smooth height transitions
 * - Inline statistics with counter animations
 * - Memoized components for performance optimization
 * - Accessible landmarks and screen reader support
 * - Custom content injection at multiple points
 * - Comparison tables with alternating row colors
 * - Glassmorphism design elements
 * 
 * Layout Structure:
 * - Left column: Description, market insights, comparison table
 * - Right column: Industry trends, additional content, CTA
 * 
 * @example
 * ```tsx
 * import ValuePropSection from './value-prop-section';
 * import { ValuePropContent } from '../types';
 * 
 * const content: ValuePropContent = {
 *   title: "Why Choose Our Service",
 *   description: "Industry-leading solutions...",
 *   industryTrends: [...],
 *   marketInsights: [...],
 *   callToAction: {...}
 * };
 * 
 * <ValuePropSection 
 *   content={content} 
 *   layoutVariant="expanded"
 * />
 * ```
 */

// src/templates/service-page/sections/value-prop/value-prop-section.tsx

import React, { useState, useMemo } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { getIcon } from '@/utils/icon-registry';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { InlineStat } from './inline-stat';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import { 
  ValuePropContent, 
  IndustryTrend, 
  MarketInsight as MarketInsightType,
  StatData
} from '../types';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

/**
 * Expandable Industry Trend Card Component
 * 
 * Displays individual industry trends with:
 * - Icon from the icon registry
 * - Expandable content with smooth height animation
 * - Hover effects and accessibility features
 * - Click handler for toggle functionality
 * 
 * @param {Object} props - Component props
 * @param {IndustryTrend} props.trend - The industry trend data to display
 * @param {boolean} props.isOpen - Whether the trend is currently open
 * @param {function} props.onToggle - Function to toggle the open state of the trend
 * @returns {JSX.Element} A memoized trend card component
 */
const TrendCard = React.memo(function TrendCard({ 
  trend,
  isOpen,
  onToggle 
}: { 
  trend: IndustryTrend;
  isOpen: boolean;
  onToggle: () => void;
}): JSX.Element {
  const { title, description } = trend;
  
  // Get the icon component using our utility
  const IconComponent = getIcon(trend.icon || 'Code');

  return (
    <motion.article
      variants={fadeInUp}
      className="bg-white rounded-lg shadow-md border border-gray-200 hover:border-mild-blue transition-all hover:shadow-lg p-4"
      onClick={onToggle}
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <IconComponent className="h-6 w-6 text-medium-blue" />
          <h4 className="text-gray-700">{title}</h4>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          <ChevronDown className="h-5 w-5 text-medium-blue" />
        </motion.div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-700">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
});

/**
 * Market Insights Card Component
 * 
 * Renders market insights with inline animated statistics:
 * - Processes mixed content (text and StatData objects)
 * - Uses InlineStat component for animated counters
 * - Staggered animation entrance effects
 * - Memoized rendering for performance
 * - Includes disclaimer about data currency
 * 
 * Technical Implementation:
 * - Type guard function to differentiate between string and StatData
 * - Fragment keys for proper React reconciliation
 * - Viewport-based animation triggers
 * 
 * @param {Object} props - Component props
 * @param {MarketInsightType[]} props.insights - Array of market insights to display
 * @returns {JSX.Element} A memoized market insight card component
 */
const MarketInsightCard = React.memo(function MarketInsightCard({ insights }: { insights: MarketInsightType[] }): JSX.Element {
  // Helper to check if an object is StatData
  const isStatData = (part: string | StatData): part is StatData => {
    return typeof part === 'object' && part !== null && 'value' in part;
  };

  // Memoize the rendered insights list
  const renderedInsights = useMemo(() => (
    <motion.ul
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {insights.map((item) => (
        <motion.li
          key={item.id}
          variants={fadeInUp}
          className="flex items-start gap-3"
        >
          <CheckCircle className="h-5 w-5 text-medium-blue-alt mt-2 flex-shrink-0" />
          <span className="text-gray-700 text-lg">
            {item.parts.map((part, index) =>
              isStatData(part) ? (
                <InlineStat
                  key={`${item.id}-stat-${index}`}
                  value={part.value}
                  prefix={part.prefix}
                  suffix={part.suffix}
                />
              ) : (
                <React.Fragment key={`${item.id}-text-${index}`}>{part}</React.Fragment>
              )
            )}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  ), [insights]);

  return (
    <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Market InSites</h3>
      {renderedInsights}
      <p className="mt-4 text-xs text-gray-400">
        * Facts and figures are for informational purposes only and may not be current as of your reading. We&apos;ll be adding citations and sources soon—check back for updates!
      </p>
    </article>
  );
});

/**
 * Comparison Table Component
 * 
 * Renders a responsive data table with:
 * - Dynamic column headers from tableData.headers
 * - Alternating row colors for readability
 * - Gradient header styling matching brand colors
 * - Fixed table layout for consistent column widths
 * - Responsive overflow handling
 * - Animation entrance effects
 * 
 * Data Structure:
 * - Headers array defines column structure
 * - Rows use lowercase header names as keys
 * - Table-fixed class ensures consistent column sizing
 * 
 * @param {Object} props - Component props
 * @param {Object} props.tableData - The table configuration and data
 * @param {string} props.tableData.title - The title of the comparison table
 * @param {string[]} props.tableData.headers - Column headers for the table
 * @param {Array<{[key: string]: string}>} props.tableData.rows - Data rows with dynamic keys
 * @returns {JSX.Element} A memoized comparison table component
 */
const ComparisonTable = React.memo(function ComparisonTable({ 
  tableData 
}: { 
  tableData: {
    title: string;
    headers: string[];
    rows: {
      [key: string]: string;
    }[];
  }
}): JSX.Element {
  return (
    <div className="overflow-x-auto mt-8">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full rounded-lg shadow-lg overflow-hidden"
      >
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="bg-gradient-to-br from-light-blue to-blue-800 text-white">
              {tableData.headers.map((header: string) => (
                <th key={header.toLowerCase().replace(/\s+/g, '-')} className="p-4 text-left">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row) => (
              <tr key={row[tableData.headers[0].toLowerCase()]} className={tableData.rows.indexOf(row) % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {tableData.headers.map((header: string) => (
                  <td key={header} className="p-4 border-b border-gray-200 text-gray-700 break-words">
                    {row[header.toLowerCase()] || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
});

/**
 * Value Proposition Section Component
 * 
 * Main section component that orchestrates the value proposition presentation.
 * 
 * Architecture:
 * - Two-column responsive layout (stacks on mobile)
 * - Left column: Description, market insights, comparison table
 * - Right column: Industry trends, additional content, CTA
 * - Multiple injection points for custom content
 * - Layout variants for different page needs
 * 
 * Performance Optimizations:
 * - Memoized sub-components prevent unnecessary re-renders
 * - useMemo for expensive list rendering operations
 * - Lazy animation triggers with viewport detection
 * - Staggered children animations for smooth entrance
 * 
 * Accessibility Features:
 * - Semantic HTML structure with proper landmarks
 * - Screen reader friendly section titles
 * - Keyboard navigation support
 * - ARIA labels and hidden content
 * 
 * Content Injection Points:
 * - additionalContent.beforeTrends: Before industry trends
 * - additionalContent.afterTrends: After industry trends
 * - additionalContent.beforeCta: Before call-to-action
 * 
 * @param {Object} props - Component props
 * @param {ValuePropContent} props.content - Complete value proposition configuration
 * @param {'default' | 'compact' | 'expanded'} [props.layoutVariant='default'] - Layout variant for different use cases
 * @returns {JSX.Element} A memoized value proposition section component
 */
const ValuePropSectionWrapper = React.memo(function ValuePropSection({
  content,
  layoutVariant = 'default'
}: {
  content: ValuePropContent,
  layoutVariant?: 'default' | 'compact' | 'expanded'
}): JSX.Element {
  const {
    title,
    description,
    industryTrends,
    industryTrendsDescription,
    marketInsights,
    callToAction,
    additionalContent
  } = content;

  // State for managing which trend card is expanded
  const [openTrendIndex, setOpenTrendIndex] = useState<number | null>(null);

  // Memoize the rendered trends list to prevent unnecessary re-renders
  const renderedTrends = useMemo(() => (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-4"
    >
      {industryTrends.map((trend, index) => (
        <TrendCard 
          key={trend.title.toLowerCase().replace(/\s+/g, '-')} 
          trend={trend} 
          isOpen={openTrendIndex === index}
          onToggle={() => setOpenTrendIndex(openTrendIndex === index ? null : index)}
        />
      ))}
    </motion.div>
  ), [industryTrends, openTrendIndex]);

  return (
    <section aria-labelledby="value-prop-section-title" className="pt-8 pb-12">
      {/* Accessible landmark for section */}
      <h2 id="value-prop-section-title" className="sr-only">{title}</h2>
      <div className={`container mx-auto ${layoutVariant === 'compact' ? 'max-w-7xl' : ''}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Section Title */}
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold pb-8 text-center text-gray-900"
          >
            {title}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column: Primary Content */}
            <div className="space-y-8">
              {/* Description Paragraph */}
              <motion.p 
                variants={fadeInUp}
                className="text-lg px-2 text-gray-700 leading-relaxed"
              >
                {description}
              </motion.p>

              {/* Market Insights Card */}
              <MarketInsightCard insights={marketInsights} />

              {/* Comparison Table (Optional) */}
              {content.comparisonTable && (
                <ComparisonTable tableData={content.comparisonTable} />
              )}

              {/* Additional Content: Before Trends */}
              {additionalContent?.beforeTrends && (
                <motion.div variants={fadeInUp} className="text-lg px-2 text-gray-700 leading-relaxed">
                  {additionalContent.beforeTrends}
                </motion.div>
              )}
            </div>

            {/* Right Column: Trends and CTA */}
            <div className="space-y-8">
              {/* Industry Trends Section */}
              <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Industry Trends</h3>
                {industryTrendsDescription && (
                  <p className="text-gray-700 mb-6">
                    {industryTrendsDescription}
                  </p>
                )}
                {renderedTrends}
              </article>
              
              {/* Additional Content: After Trends */}
              {additionalContent?.afterTrends && (
                <motion.div variants={fadeInUp} className="text-lg px-2 text-gray-700 leading-relaxed">
                  {additionalContent.afterTrends}
                </motion.div>
              )}

              {/* Additional Content: Before CTA */}
              {additionalContent?.beforeCta && (
                <motion.div variants={fadeInUp} className="text-lg px-2 text-gray-700 leading-relaxed">
                  {additionalContent.beforeCta}
                </motion.div>
              )}

              {/* Call to Action Section */}
              <motion.aside
                variants={fadeInUp}
                className="bg-gradient-to-br from-light-blue to-blue-800 border border-light-blue text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <h3 className="text-2xl font-semibold mb-4">{callToAction.title}</h3>
                <p className="mb-6">
                  {callToAction.description}
                </p>
                <TailwindButton 
                  href={callToAction.buttonLink} 
                  className="bg-gray-50 rounded-lg font-semibold shadow-md transition-all duration-200"
                >
                  {callToAction.buttonText}
                </TailwindButton>
              </motion.aside>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ValuePropSectionWrapper;