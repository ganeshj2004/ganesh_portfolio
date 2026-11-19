import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { personalInfo } from '../../data/personalInfo';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToSection } from '../../utils/helpers';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Section IDs for active highlighting
  const sectionIds = navLinks.map(link => link.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  // Monitor scroll for navbar blur & elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    scrollToSection(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="brand-logo"
          aria-label="Ganesh J - Home"
        >
          <div className="logo-badge">
            <Terminal size={17} className="logo-icon" />
          </div>
          <span className="brand-name">
            GANESH<span className="brand-dot">.</span>J
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-anchor ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                    {isActive && <span className="active-glow-dot"></span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button: Resume Download */}
        <div className="nav-actions">
          <Button
            href={personalInfo.resumeUrl}
            download="Ganesh_J_Resume.pdf"
            target="_blank"
            variant="outline"
            size="sm"
            icon={Download}
            iconPosition="right"
            className="resume-nav-btn"
          >
            Resume
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Backdrop & Menu */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="brand-logo">
            <div className="logo-badge">
              <Terminal size={16} />
            </div>
            <span className="brand-name">
              GANESH<span className="brand-dot">.</span>J
            </span>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-body" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="mobile-nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={16} className="mobile-nav-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-nav-footer">
          <Button
            href={personalInfo.resumeUrl}
            download="Ganesh_J_Resume.pdf"
            target="_blank"
            variant="primary"
            size="md"
            icon={Download}
            iconPosition="right"
            className="mobile-resume-btn"
          >
            Download Resume (PDF)
          </Button>
          <div className="mobile-status-indicator">
            <span className="status-ping"></span>
            <span>Available for Full-time Roles &amp; Projects</span>
          </div>
        </div>
      </div>
    </header>
  );
}

