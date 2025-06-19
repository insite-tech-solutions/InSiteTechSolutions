/**
 * @fileoverview Pricing Overview Component
 * 
 * This component displays the main pricing overview section for the pricing page,
 * including flexible solutions messaging and key advantages of bundling services.
 * 
 * @author InSite Tech Solutions
 * @version 1.0.0
 */

import { Package, TrendingDown, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Type definition for advantage items displayed in the overview grid
 */
interface Advantage {
  /** Lucide React icon component */
  icon: React.ComponentType<{ className?: string }>
  /** Title text for the advantage card */
  title: string
  /** Description text explaining the advantage */
  description: string
}

/**
 * Static content for the flexible solutions section
 * Extracted as a constant for better maintainability and potential reuse
 */
const flexibleSolutionsContent = (
  <div className="max-w-7xl mx-auto px-2 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
      Flexible Solutions for Every Project
    </h2>
    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
      We believe in transparent, flexible pricing that works for your budget while respecting everyone&apos;s time and investment. 
      Whether you&apos;re an individual with a passion project, a freelancer building your online presence, a nonprofit advancing your mission, 
      an academic researcher, a growing small business, or an established enterprise with complex requirements—we&apos;ll work together 
      to find a solution that delivers genuine value.
    </p>
  </div>
)

/**
 * Configuration array for advantage cards
 * Each advantage highlights a key benefit of choosing InSite Tech Solutions
 */
const advantages: Advantage[] = [
  {
    icon: Package,
    title: "Complete Tech Stack",
    description: "Web development, branding, SEO, custom software, data analysis, and more-all from one trusted partner."
  },
  {
    icon: TrendingDown,
    title: "Bundle Savings",
    description: "Save money and unlock exclusive discounts when combining multiple services."
  },
  {
    icon: Users,
    title: "Consistent Quality",
    description: "Unified design language and technical standards across all your digital assets and systems."
  }
]

/**
 * PricingOverview Component
 * 
 * Renders the pricing overview section with flexible solutions messaging
 * and a grid of key advantages for bundling services.
 * 
 * Features:
 * - Responsive design with mobile-first approach
 * - Accessible markup with proper ARIA labels and semantic HTML
 * - Hover effects and smooth transitions
 * - Modular card-based layout
 * 
 * @returns {JSX.Element} The rendered pricing overview section
 * 
 * @example
 * ```tsx
 * // Usage in a pricing page
 * import PricingOverview from '@/page-templates/pricing-page/pricing-overview'
 * 
 * export default function PricingPage() {
 *   return (
 *     <div>
 *       <PricingOverview />
 *     </div>
 *   )
 * }
 * ```
 */
export default function PricingOverview(): JSX.Element {
  return (
    <section aria-labelledby="pricing-overview-title" className="pt-4">
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="pricing-overview-title" className="sr-only">Pricing Overview</h2>

      <div className="max-w-7xl mx-auto">
        {/* Flexible Solutions Content - Hoisted for better performance */}
        {flexibleSolutionsContent}
        
        {/* One-Stop Shop Header Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Your One-Stop Shop for All Things Tech
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            We also offer discounts when bundling services. 
            If you need a website, branding, and SEO, why juggle multiple vendors when you can get everything you need from one experienced partner? 
            Save time, money, and headaches with our comprehensive tech services.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {advantages.map((advantage) => (
            <Card 
              key={advantage.title.toLowerCase().replace(/\s+/g, '-')} 
              className="border-gray-200 hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-4 text-gray-800">
                <div className="flex items-center mb-3">
                  {/* Icon container with consistent styling */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <advantage.icon className="h-6 w-6 text-medium-blue" />
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {advantage.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}