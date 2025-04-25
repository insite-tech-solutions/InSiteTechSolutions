// src/templates/service-page/sections/value-prop/value-prop-section.tsx

import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { getIcon } from '@/utils/icon-registry';
import { ChevronUp, ChevronDown, CheckCircle } from 'lucide-react';
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
 * Component for displaying industry trends with expandable descriptions
 * @param {Object} props - Component props
 * @param {IndustryTrend} props.trend - The industry trend data to display
 * @returns {JSX.Element} A memoized trend card component
 */
const TrendCard = React.memo(function TrendCard({ trend }: { trend: IndustryTrend }) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, description } = trend;
  
  // Get the icon component using our utility
  const IconComponent = getIcon(trend.icon || 'Code');

  return (
    <motion.article
      variants={fadeInUp}
      className="bg-white rounded-lg shadow-md border border-gray-200 hover:border-medium-blue-alt transition-all hover:shadow-lg p-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <IconComponent className="h-6 w-6 text-medium-blue-alt" />
          <h4 className="text-gray-700">{title}</h4>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </header>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-gray-700">
          {description}
        </p>
      </motion.div>
    </motion.article>
  );
});

/**
 * Component for displaying market insights with inline animated stats
 * @param {Object} props - Component props
 * @param {MarketInsightType[]} props.insights - Array of market insights to display
 * @returns {JSX.Element} A memoized market insight card component
 */
const MarketInsightCard = React.memo(function MarketInsightCard({ insights }: { insights: MarketInsightType[] }) {
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
    </article>
  );
});

/**
 * Value Proposition Section for Service Pages
 * 
 * Displays the value proposition with industry trends and market insights.
 * Supports additional custom content at various points in the layout.
 * 
 * @param {Object} props - Component props
 * @param {ValuePropContent} props.content - Configuration object for the value prop section
 * @param {'default' | 'compact' | 'expanded'} [props.layoutVariant='default'] - Optional layout variant
 * @returns {JSX.Element} A memoized value proposition section component
 */
const ValuePropSectionWrapper = React.memo(function ValuePropSection({
  content,
  layoutVariant = 'default'
}: {
  content: ValuePropContent,
  layoutVariant?: 'default' | 'compact' | 'expanded'
}) {
  const {
    title,
    description,
    industryTrends,
    industryTrendsDescription,
    marketInsights,
    callToAction,
    additionalContent
  } = content;

  // Memoize the rendered trends list
  const renderedTrends = useMemo(() => (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-4"
    >
      {industryTrends.map((trend, index) => (
        <TrendCard key={index} trend={trend} />
      ))}
    </motion.div>
  ), [industryTrends]);

  return (
    <section className="pt-12 pb-12">
      <div className={`container mx-auto ${layoutVariant === 'compact' ? 'max-w-7xl' : ''}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold pb-8 text-center text-gray-900"
          >
            {title}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.p 
                variants={fadeInUp}
                className="text-lg px-2 text-gray-700 leading-relaxed"
              >
                {description}
              </motion.p>

              {/* Add additional content before trends if provided */}
              {additionalContent?.beforeTrends && (
                <motion.div variants={fadeInUp}>
                  {additionalContent.beforeTrends}
                </motion.div>
              )}

              <MarketInsightCard insights={marketInsights} />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Industry Trends</h3>
                {industryTrendsDescription && (
                  <p className="text-gray-700 mb-6">
                    {industryTrendsDescription}
                  </p>
                )}
                {renderedTrends}
              </article>
              
              {/* Add additional content after trends if provided */}
              {additionalContent?.afterTrends && (
                <motion.div variants={fadeInUp}>
                  {additionalContent.afterTrends}
                </motion.div>
              )}

              {/* Add additional content before CTA if provided */}
              {additionalContent?.beforeCta && (
                <motion.div variants={fadeInUp}>
                  {additionalContent.beforeCta}
                </motion.div>
              )}

              <motion.aside
                variants={fadeInUp}
                className="bg-gradient-to-br from-medium-blue to-blue-800 border border-medium-blue text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
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