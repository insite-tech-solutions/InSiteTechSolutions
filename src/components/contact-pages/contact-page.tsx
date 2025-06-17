/**
 * Contact Page Component
 *
 * This component assembles the complete contact page by integrating the site header,
 * the contact page template, and the site footer. It provides a clean, high-level
 * entry point for the contact page, consistent with the architecture of other
 * primary pages on the site.
 */
'use client';

import React from 'react';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import ContactPageTemplate from '@/page-templates/contact-page';

const ContactPage = () => {
  return (
    <div>
      <Header />
        <ContactPageTemplate />
      <Footer />
    </div>
  );
};

export default ContactPage; 