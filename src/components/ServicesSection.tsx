'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Code, Cpu, Smartphone, Globe, Zap, Users } from 'lucide-react';

const ImmersiveHeroSection = () => {
  const [activeTab, setActiveTab] = useState('webDev');

  const tabs = [
    { id: 'webDev', icon: Code, title: 'Web Development' },
    { id: 'software', icon: Cpu, title: 'Custom Software' },
    { id: 'mobile', icon: Smartphone, title: 'Mobile Apps' },
  ];

  type ContentType = {
    [key: string]: {
      title: string;
      description: string;
      features: string[];
      image: string;
    };
  };

  const content: ContentType = {
    webDev: {
      title: 'Cutting-edge Web Development',
      description: 'We create responsive, fast, and user-friendly websites that drive results.',
      features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps'],
      image: '/api/placeholder/600/400',
    },
    software: {
      title: 'Tailored Software Solutions',
      description: 'Custom software designed to streamline your business processes and boost productivity.',
      features: ['Enterprise Applications', 'Cloud Solutions', 'AI & Machine Learning Integration'],
      image: '/api/placeholder/600/400',
    },
    mobile: {
      title: 'Innovative Mobile Applications',
      description: 'Engaging mobile apps that provide seamless experiences across all devices.',
      features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization'],
      image: '/api/placeholder/600/400',
    },
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 via-blue-800 to-blue-600 min-h-screen text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 animate-fade-in-down">
          InSite Tech Solutions
        </h1>
        <p className="text-xl text-center mb-12 animate-fade-in-up">
          Empowering your digital journey with innovative technology solutions
        </p>

        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-2xl">
          <div className="flex justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 mx-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-indigo-900'
                    : 'bg-transparent text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
              <tab.icon className="mr-2" />
                {tab.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-3xl font-bold">{content[activeTab].title}</h2>
              <p className="text-lg">{content[activeTab].description}</p>
              <ul className="space-y-2">
                {content[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Zap size={20} className="mr-2 text-yellow-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Learn More
              </button>
            </div>
              <Image
                src={content[activeTab].image}
                alt={content[activeTab].title}
                className="rounded-lg shadow-2xl"
                width={600}
                height={400}
              />
            <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
              <Globe size={32} />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Why Choose InSite Tech Solutions?</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Users, text: 'Expert Team' },
              { icon: Zap, text: 'Cutting-edge Tech' },
              { icon: Globe, text: 'Global Reach' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white bg-opacity-20 p-4 rounded-full mb-2">
                  <item.icon size={32} />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveHeroSection;