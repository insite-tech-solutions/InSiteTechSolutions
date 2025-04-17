// src/app/page.tsx

import Image from 'next/image'
import Link from 'next/link'


//import HeroSection from '../components/HomepageHeroSec';
import HeroSection from '@/components/homepage/hero-section/hero-section';
import Header from '@/components/site-header/header';
import ScrollAnimationSection from '@/components/homepage/scroll-section/scroll-section';
import ServiceSection from '@/components/homepage/services-section/services-section';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/*
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image 
                src="/Insite Tech Solutions Light.svg" 
                alt="InSite Tech Solutions Logo"
                width={200}
                height={50}
                priority
              />
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink href="/">Home</NavLink>
              <NavDropdown title="About">
                <DropdownLink href="/about">About us</DropdownLink>
                <DropdownLink href="/about/process">Process</DropdownLink>
                <DropdownLink href="/about/pricing">Pricing & Payments</DropdownLink>
                <DropdownLink href="/about/terms">Privacy Policy & Terms</DropdownLink>
              </NavDropdown>
              <NavDropdown title="Services">
                <DropdownLink href="/services/web-development">Web & App Development</DropdownLink>
                <DropdownLink href="/services/seo">SEO & Online Marketing</DropdownLink>
                <DropdownLink href="/services/data-analysis">Data Analysis</DropdownLink>
                <DropdownLink href="/services/custom-software">Custom Software Solutions</DropdownLink>
                <DropdownLink href="/services/ai-automation">AI & Automation</DropdownLink>
                <DropdownLink href="/services/design">Graphic Design & Branding</DropdownLink>
                <DropdownLink href="/services/consulting">Consulting & Training</DropdownLink>
              </NavDropdown>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavDropdown title="Resources">
                <DropdownLink href="/resources/faq">FAQ</DropdownLink>
                <DropdownLink href="/resources/blog">Blog</DropdownLink>
              </NavDropdown>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
            <div className="md:hidden">
              <button className="text-dark-grey">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      */}

      <Header />
    

      {/* Add your main content here */}

      <HeroSection />
      <ScrollAnimationSection />
      <ServiceSection />

      {/* Hero Section */}
      <section className="bg-white h-screen flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center">
          <Image 
            src="/Insite Tech Solutions Light.svg" 
            alt="InSite Tech Solutions Logo"
            width={800}
            height={800}
          /></div>
        <div className="text-center text-dark-blue px-4">
          <h1 className="text-5xl font-bold mb-4">Innovative Website and Software Solutions</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">From simple web design to complex software applications, InSite Tech provides the expertise to tailor solutions to all your tech-related needs.</p>
          {/*
          <Link href="/contact" className="bg-dark-blue text-white font-bold py-3 px-6 rounded-full hover:bg-medium-blue transition duration-300">
            Get Started
          </Link>
          */}
        </div>
      </section>

      

      {/* Services Section */}
      <section className="py-20 bg-very-light-grey">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-dark-grey mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Web Development', 'AI Integrations', 'Data Analysis', 'Custom Software'].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-light-blue rounded-full flex items-center justify-center">
                  {/*<Image src={`/api/placeholder/64/64`} alt={`${service} Icon`} width={40} height={40} />*/}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-dark-grey">{service}</h3>
                <p className="text-medium-grey text-center">Custom solutions to help your business grow and innovate.</p>
                <Link href={`/services/${service.toLowerCase().replace(' ', '-')}`} className="block text-center mt-4 text-dark-blue hover:text-medium-blue">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-dark-grey mb-12">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
            {['Consultation', 'Planning', 'Design', 'Development', 'Deployment'].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-dark-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-dark-grey">{step}</h3>
                <p className="mt-2 text-medium-grey text-center">Expert guidance at every stage</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/process" className="text-dark-blue hover:text-medium-blue font-semibold">
              Learn more about our process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to start your next project?</h2>
          <p className="mb-8">Contact us today for a free consultation.</p>
          <Link href="/contact" className="bg-light-blue text-white font-bold py-3 px-6 rounded-full hover:bg-medium-blue transition duration-300">
            Contact Us
          </Link>
        </div>
      </section>
      
      <footer className="bg-dark-grey text-white py-8">
        <div className="container mx-auto px-4">
          {/* Add footer content here */}
        </div>
      </footer>
    </main>
  )
};