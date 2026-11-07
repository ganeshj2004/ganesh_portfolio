import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

/**
 * Main Layout wrapper housing sticky navbar and global footer
 */
export default function MainLayout({ children }) {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main id="main-content" className="portfolio-main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
