/**
 * @fileoverview Development Process Page Component
 *
 * This component assembles the complete development process page following the standard
 * page composition pattern used throughout the application. It combines the site header,
 * footer, and the process-specific template.
 */

'use client';

import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import ProcessPageTemplate from '@/page-templates/process-page';

/**
 * `ProcessPage` Component.
 *
 * This is the root client-side component for the Development Process page.
 * It orchestrates the layout by including the `Header`, the `ProcessPageTemplate`
 * (which contains all the specific process content and loading logic), and the `Footer`.
 * This structure ensures a consistent presentation across the application while delivering
 * specialized content.
 *
 * @returns {JSX.Element} The complete JSX structure for the Development Process page.
 */
export default function ProcessPage(): JSX.Element {
  return (
        <div>
            <Header /> {/* Renders the global site header. */}
                <ProcessPageTemplate /> {/* Renders the main content template for the process page. */}
            <Footer /> {/* Renders the global site footer. */}
        </div>
  );
};
