// src/templates/service-page/sections/value-prop/value-prop-section.tsx

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import { 
  ValuePropContent, 
  IndustryTrend, 
  MarketInsight, 
  Statistic as StatisticType 
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
      staggerChildren: 0.2
    }
  }
};

/**
 * Component for displaying animated inline statistics
 */
function InlineStat({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, controls]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="text-2xl font-bold text-medium-blue-alt inline-flex items-center"
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}

/**
 * Component for displaying industry trends with expandable descriptions
 */
function TrendCard({ trend }: { trend: IndustryTrend }) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, description } = trend;
  
  // Get the icon component from the trend
  const IconComponent = typeof trend.icon === 'string' 
    ? LucideIcons[trend.icon as keyof typeof LucideIcons] || LucideIcons.Code
    : trend.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-lg shadow-md border border-gray-200 hover:border-medium-blue-alt transition-all hover:shadow-lg p-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <IconComponent className="h-6 w-6 text-medium-blue-alt" />
          <h4 className="text-gray-700">{title}</h4>
        </div>
        {isOpen ? (
          <LucideIcons.ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <LucideIcons.ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </div>
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
    </motion.div>
  );
}

/**
 * Component for displaying market insights with inline animated stats
 */
function MarketInsightCard({ insights }: { insights: MarketInsight[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Market Insights</h3>
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
            <LucideIcons.CheckCircle className="h-5 w-5 text-medium-blue-alt mt-2 flex-shrink-0" />
            <span className="text-gray-700 text-lg">
              {typeof item.content === 'string' ? item.content : item.content}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

/**
 * Value Proposition Section for Service Pages
 * 
 * Displays the value proposition with industry trends and market insights.
 * Supports additional custom content at various points in the layout.
 * 
 * @param content - Configuration object for the value prop section
 * @param layoutVariant - Optional layout variant (default, compact, expanded)
 * @returns JSX.Element
 */
export default function ValuePropSection({
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
    marketInsights,
    callToAction,
    additionalContent
  } = content;
  
  // Get the icon for the CTA button
  const CtaIcon = callToAction.buttonIcon 
    ? LucideIcons[callToAction.buttonIcon as keyof typeof LucideIcons] 
    : LucideIcons.ArrowRight;

  return (
    <section className="mt-16 mb-20 bg-gray-50">
      <div className={`container mx-auto px-4 ${layoutVariant === 'compact' ? 'max-w-5xl' : ''}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-12 text-center text-gray-900"
          >
            {title}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
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
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Industry Trends</h3>
                <p className="text-gray-700 mb-6">
                As businesses face increasing pressure to digitize and automate operations, custom software has become essential for staying competitive. Integrated systems that utilize 3rd party APIs and cloud computing have become a necessity for increasing efficiency and scalability.
                </p>
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
              </div>
              
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

              <motion.div
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
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}