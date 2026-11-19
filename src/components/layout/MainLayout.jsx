import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollProgressBar from '../common/ScrollProgressBar';
import CustomCursor from '../common/CustomCursor';

/**
 * Main Layout wrapper housing sticky navbar and global footer
 */
export default function MainLayout({ children }) {
  return (
    <div className="portfolio-app-root">
      {/* Global premium UI enhancements */}
      <CustomCursor />
      <ScrollProgressBar />
      {/* Background atmospheric glows (previously body::before / ::after) */}
      <div className="ambient-bg-glow-1" aria-hidden="true" />
      <div className="ambient-bg-glow-2" aria-hidden="true" />

      <Navbar />
      <main id="main-content" className="portfolio-main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

