/**
 * @fileoverview Meet the Team Section Component for About Us Page
 * 
 * This component renders a team showcase section with individual team member cards.
 * Features a playful approach to presenting the solo business structure while maintaining
 * professional presentation and responsive design.
 * 
 * Features:
 * - Responsive grid layout for team member cards
 * - Image optimization with Next.js Image component
 * - Hover effects and smooth transitions
 * - Custom card ordering for large screens
 * - Accessible markup with proper ARIA labels
 * - Gradient overlays and visual enhancements
 * - Memoized component for performance optimization
 */

'use client'

import { memo } from 'react';
import Image from 'next/image';

/**
 * Interface representing a team member
 * 
 * @interface TeamMember
 * @property {string} name - Full name of the team member
 * @property {string} role - Job title or role description
 * @property {string} description - Brief description of the team member's expertise
 * @property {string} image - Path to the team member's image
 * @property {string} alt - Alt text for accessibility
 */
interface TeamMember {
  /** Full name of the team member */
  name: string;
  /** Job title or role description */
  role: string;
  /** Brief description of the team member's expertise */
  description: string;
  /** Path to the team member's image */
  image: string;
  /** Alt text for accessibility */
  alt: string;
}

/**
 * Static content: Meet the Team members
 * 
 * Array of team member data including the humorous reveal that it's actually
 * a solo operation. The data structure maintains consistency while telling
 * the story of a versatile one-person business.
 */
const teamMembers: TeamMember[] = [
  {
    name: "Alex Johnson",
    role: "President & Founder",
    description: "Visionary leader with a degree from the school of hard knocks and a passion for technology.",
    image: "/meet-the-team/founder.png",
    alt: "President in puffer vest looking entrepreneurial"
  },
  {
    name: "AJ Codewright",
    role: "Lead Developer",
    description: "Code wizard who speaks fluent Python, JavaScript, and caffeine. Turns coffee into beautiful applications.",
    image: "/meet-the-team/developer.png",
    alt: "Developer focused at computer setup"
  },
  {
    name: "Alex Johansson",
    role: "Creative Director & Designer",
    description: "Design genius who believes every pixel matters. Can make whatever you can dream up.",
    image: "/meet-the-team/designer.png",
    alt: "Creative director sketching on iPad"
  },
  {
    name: "Al Johnson",
    role: "Head of Sales",
    description: "Relationship builder extraordinaire. Can sell ice to penguins and make them thank him for it.",
    image: "/meet-the-team/sales.png",
    alt: "Professional business headshot"
  },
  {
    name: "Al Junior",
    role: "The Intern",
    description: "Eager to learn and surprisingly competent. Keeps the team caffeinated and motivated.",
    image: "/meet-the-team/intern.png",
    alt: "Intern holding coffee carrier with enthusiasm"
  },
  {
    name: "InSite Tech Solutions",
    role: "All This Talent in One Package!",
    description: "*I wear a lot of hats around here, because we're a lean, mean, one-person machine. InSite Tech Solutions is a solo operation—but with the diverse skills of an entire team. That means more flexibility, lower costs, and personalized attention you won't get from a big agency.*",
    image: "/InSite Magnifier White.svg",
    alt: "InSite Tech Solutions logo"
  }
];

/**
 * MeetTheTeam Component
 * 
 * Renders a team showcase section with individual team member cards in a responsive grid.
 * Uses a playful approach to reveal that the business is actually a solo operation while
 * highlighting the diverse skill set available.
 * 
 * Features:
 * - Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
 * - Custom card ordering for optimal visual flow on large screens
 * - Image optimization with hover effects and smooth transitions
 * - Accessible markup with proper ARIA labels and semantic structure
 * - Gradient overlays for enhanced visual appeal
 * - Performance optimization through memoization
 * 
 * @returns {JSX.Element} The rendered meet the team section
 */
export default memo(function MeetTheTeam(): JSX.Element {
  return (
    <section aria-labelledby="meet-team-title">
      {/* Accessible landmark for Meet the Team */}
      <h2 id="meet-team-title" className="sr-only">Meet the Team</h2>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            Meet the Team
          </h2>
          <div className="w-24 h-1 bg-medium-blue mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            We&apos;re a tight-knit group of professionals dedicated to delivering exceptional results. 
            Each team member brings unique expertise to every project.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name.toLowerCase().replace(/\s+/g,'-')}
              className={`group relative ${
                // On large screens, move the logo card (index 5) to position 4 (before intern)
                index === 5 ? 'lg:order-4' : 
                index === 4 ? 'lg:order-5' : 
                `lg:order-${index + 1}`
              }`}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 flex flex-col h-full">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-w-3 aspect-h-4">
                    <Image 
                      src={member.image}
                      alt={member.alt}
                      width={300}
                      height={400}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-medium-blue font-semibold mb-3 text-sm uppercase tracking-wide">
                    {member.role}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})