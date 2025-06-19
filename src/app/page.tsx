// src/app/page.tsx


//import HeroSection from '../components/HomepageHeroSec';
import HeroSection from '@/page-templates/homepage/hero-section/hero-section';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import ScrollAnimationSection from '@/page-templates/homepage/scroll-section/scroll-section';
import ServiceSection from '@/page-templates/homepage/services-section/services-section';
import ProcessSection from '@/page-templates/homepage/process-section';
import HomepagePricingSection from '@/page-templates/homepage/pricing-section';
import InsiteAdvantageHomepageSection from '@/page-templates/homepage/insite-advantage';
import PortfolioSection from '@/page-templates/homepage/portfolio-section';
import TestimonialsSection from '@/page-templates/homepage/testimonials-section';
import BlogNewsSection from '@/page-templates/homepage/blog-news-section';
import HomepageFAQSection from '@/page-templates/homepage/faq-section';
import NewsletterSection from '@/page-templates/homepage/newsletter-section';
import ContactForm from '@/page-templates/homepage/cta-section';
import Layout from '@/components/reusable-components/layout';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <Header />
    
      <HeroSection />
      <ScrollAnimationSection />

      <Layout>
      <ServiceSection />

      <ProcessSection />

      <HomepagePricingSection />

      <InsiteAdvantageHomepageSection />

      <PortfolioSection />

      <TestimonialsSection />

      <BlogNewsSection />

      <HomepageFAQSection />

      <NewsletterSection />

      <ContactForm />
      </Layout>
      
      <Footer />

    </main>
  )
};