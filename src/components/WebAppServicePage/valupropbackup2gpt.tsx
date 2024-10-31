// /app/services/page.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const ServicePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Web & App Development Services | InSite Tech</title>
        <meta
          name="description"
          content="Transform your ideas into powerful digital solutions with our web and app development services. Start your project today!"
        />
      </Head>
      <div className="font-sans">
        <HeroSection />
        <MarketContextSection />
        <ServiceScopeSection />
        <UseCasesSection />
        <OurApproachSection />
        <InvestmentValueSection />
        <PartnerWithUsSection />
        <QuickFAQsSection />
        <FinalCTASection />
      </div>
    </>
  );
};

export default ServicePage;

// Hero Section
const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Web &amp; App Development
        </h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
          Transform your ideas into powerful digital solutions
        </p>
        <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl drop-shadow-lg">
          From responsive websites to powerful applications, we create digital solutions that drive real business results. Our development services combine modern technology with practical business sense to deliver exactly what your organization needs.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Start Your Project Today
        </Link>
        <div className="mt-12">
          <Image
            src="/graphics/responsive-design.gif" // Ensure this path is correct
            alt="Responsive Design Animation"
            width={600}
            height={400}
            className="mx-auto rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        {/* Add any decorative SVGs or shapes here for visual enhancement */}
      </div>
    </section>
  );
};

// Market Context & Value Proposition
const MarketContextSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Your Digital Presence Matters</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2">
            <p className="mb-4 text-gray-700">
              Today's business success is increasingly tied to digital presence. Whether you're looking to attract customers, streamline operations, or create new revenue streams, the right web or app solution is critical.
            </p>
            <p className="mb-4 text-gray-700">
              Your online presence is often the first point of contact with potential customers. A well-designed website or application isn't just a digital business card - it's a powerful tool for growth. Compared to traditional advertising methods like billboards, yard signs, or radio ads, websites offer broader reach, lower long-term costs, and better results.
            </p>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Key Market Insights:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>73% of consumers research companies online before making purchasing decisions</li>
              <li>67% of B2B purchases are influenced by digital research</li>
              <li>Mobile apps are projected to generate $935 billion in revenue by 2025</li>
              <li>88% of users are less likely to return to a website after a poor experience</li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Industry Trends:</h3>
              <p className="mb-4 text-gray-700">
                As mobile usage continues to dominate, responsive, user-friendly, and optimized digital solutions are no longer optional—they’re essential for staying competitive.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Marketing Method
                      </th>
                      <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        ROI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-6 text-sm text-gray-700">Digital Marketing</td>
                      <td className="py-4 px-6 text-sm text-gray-700">High</td>
                    </tr>
                    <tr className="border-b bg-gray-100">
                      <td className="py-4 px-6 text-sm text-gray-700">Traditional Marketing</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Moderate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-700">
                Websites can be surprisingly affordable, especially after the initial development costs. Maintenance and hosting are minimal compared to the ongoing costs of traditional marketing, and they easily pay for themselves by driving engagement and growth. Websites also offer broad integrations, from reservations and scheduling to client portals and e-commerce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Scope
const ServiceScopeSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Service Scope</h2>
        <p className="mb-8 text-gray-700">
          We provide end-to-end development services for websites and applications, ensuring that your digital presence is not only functional but engaging and optimized for growth.
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Core Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Website Design & Development',
              description: 'Custom websites that are fast, responsive, and tailored to your brand.',
              icon: '/icons/web-design.svg', // Ensure you have appropriate icons
            },
            {
              title: 'Full-Stack Mobile, Desktop, & Web App Development',
              description:
                'From conception to deployment, we build apps from the ground up that work seamlessly across platforms like iOS, Android, Windows, and Mac.',
              icon: '/icons/full-stack.svg',
            },
            {
              title: 'Cross-Platform Development',
              description: 'Unified experiences across devices to ensure consistency for users.',
              icon: '/icons/cross-platform.svg',
            },
            {
              title: 'Modern Tech Frameworks & Responsive Design',
              description:
                'Leveraging the latest frameworks like React, Next.js, and Swift for a sleek, future-proof solution.',
              icon: '/icons/tech-frameworks.svg',
            },
            {
              title: 'Ongoing Maintenance & Support',
              description:
                'Long-term partnerships to keep your site or app running smoothly with updates, feature enhancements, and performance optimization.',
              icon: '/icons/support.svg',
            },
          ].map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Image src={service.icon} alt={`${service.title} Icon`} width={50} height={50} />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{service.title}</h4>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mt-12 mb-4 text-gray-800">Key Benefits:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Custom websites and apps can improve user experience</li>
          <li>Increase engagement and result in higher conversion rates</li>
          <li>Provide scalable solutions that optimize efficiency and accuracy in business logistics</li>
          <li>Grow with your business</li>
        </ul>
      </div>
    </section>
  );
};

// Use Cases & Applications
const UseCasesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Use Cases &amp; Applications</h2>
        <p className="mb-8 text-gray-700">
          With experience spanning several domains, we are able to provide a one-stop-shop for all your tech-related needs. Our digital strategies empower businesses by enhancing their:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              category: 'Digital Presence',
              items: [
                'Professional company websites',
                'Landing pages and marketing sites',
                'Blog and content management systems',
                'Social media integration',
              ],
            },
            {
              category: 'e-Commerce & Customer Engagement',
              items: [
                'Full-featured e-commerce platforms',
                'Secure customer portals and membership sites',
                'Appointment booking and reservation systems',
                'Interactive product catalogs and configurators',
              ],
            },
            {
              category: 'Business Operations',
              items: [
                'Custom business management applications',
                'Inventory and supply chain management systems',
                'Employee portals and workflow automation tools',
                'Analytics and reporting dashboards',
              ],
            },
          ].map((useCase, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{useCase.category}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {useCase.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 mb-8 text-gray-700">
          Leveraging our technical expertise across various sectors, we deliver specialized solutions tailored to your industry's unique requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              category: 'Wellness',
              items: [
                'Client portals and scheduling systems',
                'Progress monitoring applications',
                'Business management tools',
              ],
            },
            {
              category: 'Retail & E-commerce',
              items: [
                'Online stores with inventory management',
                'Product customization tools',
                'Virtual showrooms',
              ],
            },
            {
              category: 'Education & Training',
              items: [
                'Learning management systems',
                'Interactive course platforms',
                'Student progress tracking',
              ],
            },
            {
              category: 'Professional Services',
              items: [
                'Client management portals',
                'Service tracking platforms',
                'Resource scheduling systems',
              ],
            },
          ].map((useCase, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{useCase.category}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {useCase.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-gray-700">And many more!</p>
      </div>
    </section>
  );
};

// Our Approach
const OurApproachSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Approach</h2>
        <p className="mb-8 text-gray-700">
          We follow a collaborative, transparent, and iterative approach to ensure that every project meets your unique needs while staying on time and on budget. We believe in right-sized solutions - no overengineering, no unnecessary complexity. Our process consists of:
        </p>
        <ol className="list-decimal list-inside space-y-6">
          {[
            {
              title: 'Discovery',
              details: [
                'Understanding your goals and vision',
                'Analyzing current and future needs',
                'Determining budget and timeline',
                <strong key="timeline">Timeline: 1 week</strong>,
              ],
            },
            {
              title: 'Planning',
              details: [
                'Defining project scope',
                'Establishing success criteria',
                'Creating detailed plans',
                <strong key="timeline">Timeline: 1-2 weeks</strong>,
              ],
            },
            {
              title: 'Design',
              details: [
                'Creating wireframes and mockups',
                'Developing UI and branding designs',
                'Iterative feedback and refinement',
                <strong key="timeline">Timeline: 1-3 weeks</strong>,
              ],
            },
            {
              title: 'Development',
              details: [
                'Iterative development sprints',
                'Regular progress updates',
                'Continuous feedback integration',
                <strong key="timeline">Timeline: 2-12 weeks (project dependent)</strong>,
              ],
            },
            {
              title: 'Testing & Launch',
              details: [
                'Comprehensive testing',
                'Performance optimization',
                'Post-launch support',
                <strong key="timeline">Timeline: 1-2 weeks</strong>,
              ],
            },
          ].map((phase, index) => (
            <li key={index}>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{phase.title}</h3>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                {phase.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-12 mb-8 text-gray-700">
          We cannot provide exact timelines until we have a well-defined project and plan. Projects can range from a few weeks to several months; however, a simple reference point is most small business website projects are completed in 6–8 weeks, while app development can range from 8–16+ weeks, depending on the complexity.
        </p>
        <Link
          href="/process"
          className="text-blue-600 underline hover:text-blue-800 transition duration-300"
        >
          Learn more about our process &raquo;
        </Link>
      </div>
    </section>
  );
};

// Investment & Value
const InvestmentValueSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Investment &amp; Value</h2>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Determining Project Cost</h3>
        <p className="mb-8 text-gray-700">
          Our pricing is tailored to the scope and complexity of each project, with flexible options to suit your budget. Whether that be a simple WordPress site or a highly integrated mobile app, we will do our best to find the strategy that meets your needs and budget.
        </p>
        <h4 className="text-xl font-semibold mb-4 text-gray-800">Primary Project Cost Factors</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            {
              title: 'Project Scope',
              items: [
                'Number of pages/screens',
                'Customization of features and functionality',
                'Integration requirements',
                'Content creation needs (Stock vs Custom)',
                'Size/scalability (e-commerce vs. informational site)',
              ],
            },
            {
              title: 'Technical Complexity',
              items: [
                'Platform requirements (mobile app vs. web)',
                'Feature requirements',
                'Plugins, APIs, and other third-party integrations',
                'Special requirements',
                'Performance specifications',
              ],
            },
            {
              title: 'Timeline',
              items: [
                'Project urgency',
                'Number of requested revisions',
                'Size and complexity of the project',
                'Implementation Schedule',
                'Support requirements',
              ],
            },
          ].map((factor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h5 className="text-lg font-semibold mb-2 text-gray-800">{factor.title}</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {factor.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <PriceCalculator />
        <p className="mt-8 mb-8 text-gray-700">
          Please note these are middle-of-the-road estimates, and we will always do our best to find a solution within your budget. If you have any questions, contact us for a free consultation.
        </p>
        <p className="mb-8 text-gray-700">
          The true cost of a website or app extends beyond development expenses. An outdated or poorly functioning digital presence can result in lost revenue, decreased engagement, reduced efficiency, and diminished market presence. Investing in a high-quality digital solution provides long-term returns through increased user engagement, higher conversion rates, and improved operational efficiency.
        </p>
        <Link
          href="/pricing"
          className="text-blue-600 underline hover:text-blue-800 transition duration-300"
        >
          View detailed pricing &raquo;
        </Link>
      </div>
    </section>
  );
};

// Interactive Price Calculator Component
const PriceCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('website');
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>('standard');
  const [estimate, setEstimate] = useState<number | null>(null);

  const handleFeatureChange = (feature: string) => {
    setFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const calculateEstimate = () => {
    let base = 0;
    switch (projectType) {
      case 'website':
        base = 5000;
        break;
      case 'app':
        base = 10000;
        break;
      case 'ecommerce':
        base = 7000;
        break;
      default:
        base = 5000;
    }

    const featureCost = features.length * 1000;
    const timelineMultiplier = timeline === 'fast' ? 1.5 : 1;
    setEstimate(Math.round((base + featureCost) * timelineMultiplier));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">Interactive Price Calculator</h4>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Project Type</label>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="website">Website</option>
          <option value="app">Mobile App</option>
          <option value="ecommerce">E-commerce</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Desired Features</label>
        <div className="grid grid-cols-2 gap-4">
          {['Responsive Design', 'E-commerce', 'CMS Integration', 'User Authentication'].map((feature) => (
            <label key={feature} className="flex items-center space-x-2 text-gray-700">
              <input
                type="checkbox"
                value={feature}
                checked={features.includes(feature)}
                onChange={() => handleFeatureChange(feature)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{feature}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Timeline Requirements</label>
        <select
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="standard">Standard (8 weeks)</option>
          <option value="fast">Fast (4 weeks)</option>
        </select>
      </div>
      <button
        onClick={calculateEstimate}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Get Estimate
      </button>
      {estimate !== null && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
          <p className="text-lg">
            Your estimated project cost is: <strong>${estimate.toLocaleString()}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

// Partner With Us
const PartnerWithUsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Partner With Us</h2>
        <p className="mb-6 text-gray-700">
          <strong>The InSite Advantage</strong>
        </p>
        <p className="mb-8 text-gray-700">
          Why Partner With Us? At InSite Tech, we bridge the gap between technical expertise and practical business solutions. Our advantage lies in our ability to understand both your business needs and the technical landscape, delivering digital strategies that are perfectly matched to your goals and budget. We don't just build websites and apps – we create digital tools that drive your business forward.
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">What Sets Us Apart:</h3>
        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
          <li>
            <strong>Client-First Approach:</strong> We prioritize your business goals and tailor solutions to fit your needs and budget.
          </li>
          <li>
            <strong>End-to-End Expertise:</strong> From design to development, we provide full-service solutions that deliver results.
          </li>
          <li>
            <strong>Adaptable Solutions:</strong> Whether it’s a fully custom web app or a simple, efficient WordPress site, we match the solution to your project—not the other way around.
          </li>
          <li>
            <strong>Long-Term Support:</strong> We build partnerships, offering ongoing support and maintenance to keep your digital assets performing optimally.
          </li>
          <li>
            <strong>Technical Excellence with Business Sense:</strong> Our recommendations balance technical capabilities with practical business value, ensuring you get solutions that drive real results.
          </li>
          <li>
            <strong>Local Partnership:</strong> As a local business, we provide personalized attention and direct communication throughout your project and beyond.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Competitive Advantages and Client Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Measurable outcomes, such as improved performance and increased conversion rates.</li>
          <li>Custom solutions that don’t overcomplicate or oversell unnecessary features.</li>
          <li>Personal, hands-on service from a small business that cares about relationships, not just transactions.</li>
          <li>Flexibility and transparency in all stages of the project, ensuring we deliver on your vision.</li>
        </ul>
      </div>
    </section>
  );
};

// Quick FAQs
const QuickFAQsSection: React.FC = () => {
  const faqs = [
    {
      question: 'Do I need a custom website or app, or will a template suffice?',
      answer:
        'We assess your needs and budget to recommend the best solution, whether that’s a custom build or a cost-effective template.',
    },
    {
      question: 'How long does a typical website project take?',
      answer:
        'Simple websites typically take 3-6 weeks, while complex applications can take 2-4 months.',
    },
    {
      question: 'Do you work with specific technologies or platforms?',
      answer:
        'We choose the best technology for your specific needs, whether that\'s WordPress, custom development, or anything in between.',
    },
    {
      question: 'What about ongoing maintenance and updates?',
      answer:
        'We offer flexible maintenance plans to keep your site secure, updated, and performing well.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Quick FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-xl font-medium text-gray-800">{faq.question}</span>
                <span className="text-2xl font-bold">{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <p id={`faq-answer-${index}`} className="mt-4 text-gray-700">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <Link
          href="/faq"
          className="mt-6 inline-block text-blue-600 underline hover:text-blue-800 transition duration-300"
        >
          View all FAQs &raquo;
        </Link>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
          Ready to Transform Your Online Presence?
        </h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          Let's discuss how we can help bring your vision to life!
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Schedule Free Consultation
        </Link>
      </div>
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        {/* Add any decorative SVGs or shapes here for visual enhancement */}
      </div>
    </section>
  );
};
