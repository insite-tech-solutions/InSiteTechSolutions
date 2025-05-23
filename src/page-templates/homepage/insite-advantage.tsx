'use client';

import React from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef, useMemo } from 'react';
import homepageInsiteAdvantageContent from '@/content/homepage/insite-advantage-content';
import { getIcon } from '@/utils/icon-registry';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const AdvantageCard = React.memo(({ title, description, icon }: { title: string; description: string; icon: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const Icon = useMemo(() => getIcon(icon), [icon]);

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-5 shadow-md"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-full bg-blue-100">
          <Icon className="h-5 w-5 text-medium-blue-alt" />
        </div>
        <h3 className="text-lg font-semibold text-gray-50">{title}</h3>
      </div>
      <p className="text-gray-100 text-sm">{description}</p>
    </motion.div>
  );
});

AdvantageCard.displayName = 'AdvantageCard';

const InsiteAdvantageHomepageSection: React.FC = () => {
  const { title, description, advantages, benefits } = homepageInsiteAdvantageContent;

  return (
    <section className="pt-10 pb-6 w-full" aria-label="InSite Advantage Homepage Section">
      <div className="container rounded-xl mx-auto p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-3xl font-bold mb-3 text-gray-50">{title}</h2>
            <p className="text-base text-gray-100 leading-relaxed">{description}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-2">
            {advantages.map((adv) => (
              <AdvantageCard key={adv.title} {...adv} />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="pt-6 max-w-3xl mx-auto">
        <ul className="flex flex-col md:flex-row md:justify-center gap-4">
          {benefits.map((b) => (
            <li key={b.title} className="bg-white bg-opacity-10 rounded-lg px-4 py-3 text-gray-100 text-center text-sm font-medium shadow">
              <span className="block font-semibold text-gray-50 mb-1">{b.title}</span>
              <span>{b.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InsiteAdvantageHomepageSection;
