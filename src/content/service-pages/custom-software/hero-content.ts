// src/content/services/custom-software/hero-content.ts

import { HeroSectionContent } from '@/page-templates/service-page/types';
import React from 'react';

/**
 * Hero section content for the Custom Software Solutions service page.
 */
const customSoftwareHero: HeroSectionContent = {
  title: "Custom Software Solutions",
  subtitle: "Turn your technical challenges into opportunities with tailored software",
  description: "From streamlining operations to solving complex computational problems, we create custom software that perfectly aligns with your business processes or research goals. Our solutions combine innovative technology with practical business sense to deliver measurable results.",
  image: "/CustomSoftwareGraphic.svg",
  ctaText: "Start Your Project Today",
  ctaLink: "/contact",
  decorElements: [
    {
      type: 'icon',
      className: 'text-white/10 rotate-12',
      style: { top: '-19%', left: '-10%' },
      icon: 'Settings',
      size: 400,
    },
    {
      type: 'icon',
      className: 'text-white/10 rotate-[-15deg]',
      style: { bottom: '-16%', right: '-5%' },
      icon: 'CodeXml',
      size: 450,
    },
  ],
  bgClassName: "bg-gradient-to-br from-dark-blue to-blue-800 p-6"
};

export default customSoftwareHero;