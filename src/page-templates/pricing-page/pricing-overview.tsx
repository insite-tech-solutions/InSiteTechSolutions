import { Package, TrendingDown, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingOverview() {
  // Original "Flexible Solutions" content - merge/edit as needed
  const flexibleSolutionsContent = (
    <div className="max-w-7xl mx-auto px-2 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">
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

  const advantages = [
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

  return (
    <section className="pt-4">
      <div className="max-w-7xl mx-auto">
        {/* Original Flexible Solutions Content */}
        {flexibleSolutionsContent}
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Your One-Stop Shop for All Things Tech
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We also offer discounts when bundling services. 
            If you need a website, branding, and SEO, why juggle multiple vendors when you can get everything you need from one experienced partner? 
            Save time, money, and headaches with our comprehensive tech services.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-4 text-gray-800">
                <div className="flex items-center mb-3">
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