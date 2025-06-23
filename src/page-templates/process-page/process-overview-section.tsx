/**
 * @fileoverview Process Overview Section Component.
 *
 * This component displays the key steps of a process in an engaging and visual manner.
 * It features a responsive design with a grid layout for desktop and a timeline layout for mobile,
 * leveraging `framer-motion` for smooth animations.
 *
 * Features:
 * - **Animated Steps**: Each step is animated into view using Framer Motion.
 * - **Responsive Layout**: Adapts from a 5-column grid on desktop to a vertical timeline on mobile.
 * - **Dynamic Content**: Renders content (title, description, steps) fetched from `processPageOverviewContent`.
 * - **Icon Integration**: Displays relevant Lucide icons for each process step.
 * - **Visual Connectors**: Includes dashed lines for desktop and a continuous vertical line for mobile to connect steps.
 *
 * Architecture:
 * - Utilizes `framer-motion` for declarative animations.
 * - Employs `lucide-react` for scalable vector icons.
 * - Content is centralized in `@/content/about-pages/process-page/process-page-content.ts` for easy management.
 * - Styling is managed with Tailwind CSS classes and `clsx` for conditional classes.
 *
 * Technical Implementation:
 * - Defines `IconName` type to ensure type safety for icon mapping.
 * - `icons` constant maps string names to actual React component references for dynamic rendering.
 * - `containerVariants` and `itemVariants` define the animation properties for the main container and individual step items.
 * - Uses `initial="hidden"` and `whileInView="visible"` with `viewport={{ once: true, amount: 0.2 }}` for scroll-triggered animations.
 * - Conditional rendering for dashed line connectors on desktop and continuous line on mobile.
 */

'use client';

import { motion } from 'framer-motion';
import { Search, ClipboardList, Paintbrush, Code, Rocket } from 'lucide-react';
import { processPageOverviewContent } from '@/content/about-pages/process-page/process-page-content';
import { cn } from '@/lib/utils';

/**
 * Defines the allowed string literal names for the Lucide icons used in the process steps.
 * This ensures type safety when mapping icon names to their respective components.
 */
type IconName = "Search" | "ClipboardList" | "Paintbrush" | "Code" | "Rocket";

/**
 * A mapping of `IconName` strings to their corresponding Lucide React components.
 * This allows for dynamic rendering of icons based on the `iconName` property in step data.
 * @type {Record<IconName, React.ElementType>}
 */
const icons: { [key in IconName]: React.ElementType } = {
  Search,
  ClipboardList,
  Paintbrush,
  Code,
  Rocket,
};

/**
 * The main component for the Process Overview Section.
 * This component renders a visual representation of the process steps,
 * adapting its layout for desktop and mobile devices.
 *
 * @returns {JSX.Element} The JSX element for the process overview section.
 */
export default function ProcessOverviewSection(): JSX.Element {
  const { title, description, steps } = processPageOverviewContent;

  /**
   * Defines the animation variants for the main container of the process steps.
   * - `hidden`: Initial state with no children visible.
   * - `visible`: Reveals children with a staggered delay, creating a sequential animation effect.
   * @type {object}
   */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Staggers the animation of child elements
      },
    },
  };

  /**
   * Defines the animation variants for individual process step items.
   * - `hidden`: Initial state with opacity 0 and slightly offset y-position.
   * - `visible`: Animates to full opacity and original y-position, creating a fade-in-up effect.
   * @type {object}
   */
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts invisible and slightly below
    visible: {
      opacity: 1, // Fades in
      y: 0,       // Moves to original position
      transition: {
        duration: 0.5, // Animation duration
      },
    },
  };

  return (
    <section aria-labelledby="process-overview-title">
      {/* Accessible landmark for section to improve screen reader navigation */}
      <h2 id="process-overview-title" className="sr-only">{processPageOverviewContent.title}</h2>
      <div className="max-w-7xl w-full">
        {/* Section header with title and description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {description}
          </p>
        </div>

        {/* Desktop Steps Grid: Displays steps in a 5-column grid for larger screens */}
        <motion.div 
          className="hidden md:grid md:grid-cols-5 gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of the element is in view
        >
          {steps.map((step, index) => {
            const Icon = icons[step.iconName as IconName]; // Dynamically gets the icon component
            return (
              <motion.div 
                key={step.number} 
                className="flex flex-col items-center text-center group"
                variants={itemVariants}
              >
                <div className="relative flex flex-col items-center">
                  {/* Icon and Circle: Visual representation of each step */}
                  <div className={cn(
                    "relative z-10 flex items-center justify-center w-24 h-24 bg-white group-hover:bg-medium-blue rounded-xl border-4 border-gray-300 transition-colors duration-300 ease-out",
                    index % 2 === 0 ? "shadow-lg" : "shadow-xl" // Alternating shadow for visual variety
                  )}>
                    <Icon className="w-12 h-12 text-medium-blue group-hover:text-white transition-colors duration-300 ease-out" />
                  </div>
                  
                  {/* Dashed Line Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 left-full w-full h-1 bg-gray-200 -ml-4" style={{ transform: 'translateY(-50%)', width: 'calc(100% + 4rem)' }}>
                        <div className="h-full w-full border-t-2 border-dashed border-gray-300"></div>
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900">{step.number}. {step.title}</h3>
                  <p className="mt-2 text-base text-gray-600 px-2">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Steps Timeline: Displays steps as a vertical timeline for smaller screens */}
        <motion.div 
          className="md:hidden relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Continuous vertical line: Connects steps visually on mobile */}
          <div className="absolute left-12 top-24 bottom-32 w-px bg-gray-200 border-l-2 border-dashed border-gray-300"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = icons[step.iconName as IconName];
              return (
                <motion.div 
                  key={step.number} 
                  className="flex items-start group"
                  variants={itemVariants}
                >
                  {/* Icon Circle: Visual representation of each step in mobile timeline */}
                  <div className={cn(
                    "relative z-10 flex items-center justify-center w-24 h-24 bg-white group-hover:bg-medium-blue rounded-xl border-4 border-gray-300 transition-colors duration-300 ease-out flex-shrink-0",
                    index % 2 === 0 ? "shadow-lg" : "shadow-xl"
                  )}>
                    <Icon className="w-12 h-12 text-medium-blue group-hover:text-white transition-colors duration-300 ease-out" />
                  </div>

                  {/* Content for mobile step */}
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{step.number}. {step.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};