// src/content/services/web-development/hero-content.ts

import { HeroSectionContent } from '@/page-templates/service-page/types';

/**
 * Hero section content for the Web & App Development service page.
 */
const webDevelopmentHero: HeroSectionContent = {
  title: "Web & App Development",
  subtitle: "Transform your ideas into powerful digital solutions",
  description: "From responsive websites to powerful applications, we create digital solutions that drive real business results. Our development services combine modern technology with practical business sense to deliver exactly what your organization needs.",
  image: "/graphics/responsive-design.svg",
  ctaText: "Start Your Project Today",
  ctaLink: "/contact",
  decorElements: [
    {
      type: 'icon',
      className: 'text-white/10 rotate-6',
      style: { top: '-15%', right: '-5%' },
      icon: 'Globe',
      size: 350,
    },
    {
      type: 'icon',
      className: 'text-white/10 rotate-[-10deg]',
      style: { bottom: '-10%', left: '-8%' },
      icon: 'Smartphone',
      size: 300,
    },
    {
      type: 'icon',
      className: 'text-white/10 rotate-12',
      style: { top: '20%', left: '5%' },
      icon: 'Code',
      size: 200,
    },
  ],
  bgClassName: "bg-gradient-to-r from-blue-600 to-purple-600 p-6"
};

export default webDevelopmentHero;