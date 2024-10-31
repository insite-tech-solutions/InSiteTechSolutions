import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  Smartphone,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

// Types
interface StatisticProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface TrendCardProps {
  icon: typeof Smartphone | typeof TrendingUp | typeof Users | typeof ShieldCheck;
  text: string;
}

interface MarketInsight {
  id: string;
  insight: string;
}

// Animation variants
const fadeInUp = {
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

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Statistic: React.FC<StatisticProps> = ({ value, suffix = '', prefix = '', label }) => {
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="text-center"
    >
      <div className="text-4xl font-bold text-blue-600">
        {prefix}{count}{suffix}
      </div>
      <p className="mt-2 text-gray-600">{label}</p>
    </motion.div>
  );
};

const TrendCard: React.FC<TrendCardProps> = ({ icon: Icon, text }) => (
  <motion.div
    variants={fadeInUp}
    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-blue-600 transition-colors"
  >
    <Icon className="h-6 w-6 text-blue-600" />
    <span className="text-gray-600">{text}</span>
  </motion.div>
);

const MarketInsightCard: React.FC<{ insights: MarketInsight[] }> = ({ insights }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <h3 className="text-xl font-semibold mb-4">Key Market Insights</h3>
    <motion.ul
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-4"
    >
      {insights.map((item) => (
        <motion.li
          key={item.id}
          variants={fadeInUp}
          className="flex items-start gap-2"
        >
          <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{item.insight}</span>
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

const ComparisonTable: React.FC = () => (
  <div className="overflow-x-auto mt-8">
    <motion.table
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full border-collapse"
    >
      <thead>
        <tr>
          <th className="p-4 border border-gray-200 text-left bg-gray-50 text-blue-600">Feature</th>
          <th className="p-4 border border-gray-200 text-left bg-gray-50 text-blue-600">Digital Marketing</th>
          <th className="p-4 border border-gray-200 text-left bg-gray-50 text-blue-600">Traditional Marketing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-4 border border-gray-200 text-blue-600">Cost Efficiency</td>
          <td className="p-4 border border-gray-200 text-gray-900">Lower long-term costs, scalable</td>
          <td className="p-4 border border-gray-200 text-gray-600">Higher ongoing costs</td>
        </tr>
        <tr>
          <td className="p-4 border border-gray-200 text-blue-600">Reach</td>
          <td className="p-4 border border-gray-200 text-gray-900">Global, 24/7 availability</td>
          <td className="p-4 border border-gray-200 text-gray-600">Limited by geography</td>
        </tr>
        <tr>
          <td className="p-4 border border-gray-200 text-blue-600">Measurability</td>
          <td className="p-4 border border-gray-200 text-gray-900">Precise analytics and tracking</td>
          <td className="p-4 border border-gray-200 text-gray-600">Limited measurement options</td>
        </tr>
      </tbody>
    </motion.table>
  </div>
);

const ValuePropSection = () => {
  const industryTrends = [
    { icon: Smartphone, text: "Mobile-first design" },
    { icon: TrendingUp, text: "Performance optimization" },
    { icon: Users, text: "User experience focus" },
    { icon: ShieldCheck, text: "Security & compliance" }
  ];

  const marketInsights = [
    {
      id: "1",
      insight: "67% of B2B purchases are influenced by digital research"
    },
    {
      id: "2",
      insight: "88% of users are less likely to return after a poor experience"
    },
    {
      id: "3",
      insight: "Mobile apps are projected to generate $935 billion in revenue by 2025"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-8 text-center text-gray-900"
          >
            Why Your Digital Presence Matters
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Today&apos;s business success is increasingly tied to digital presence. Your online presence 
                is often the first point of contact with potential customers. A well-designed website 
                or application isn&apos;t just a digital business card - it&apos;s a powerful tool for growth.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <Statistic 
                    value={73}
                    suffix="%"
                    label="consumers research companies online"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <Statistic 
                    value={935}
                    prefix="$"
                    suffix="B"
                    label="projected app revenue by 2025"
                  />
                </div>
              </div>

              <ComparisonTable />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <MarketInsightCard insights={marketInsights} />
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-2">Current Industry Trends</h3>
                <p className="text-gray-600 mb-6">
                  As mobile usage continues to dominate, responsive, user-friendly, and 
                  optimized digital solutions are essential for staying competitive.
                </p>
                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-4"
                >
                  {industryTrends.map((trend, index) => (
                    <TrendCard key={index} {...trend} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropSection;