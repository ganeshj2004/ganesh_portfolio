import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { navLinks } from '../../data/navigation';
import { scrollToSection, getCurrentYear } from '../../utils/helpers';
import SocialLinks from './SocialLinks';
import './Footer.css';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    scrollToSection(targetId);
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand & Tagline */}
          <div className="footer-brand-col">
            <div className="footer-brand-logo">
              <div className="footer-logo-badge">
                <Terminal size={18} />
              </div>
              <span className="footer-brand-name">
                GANESH<span className="brand-dot">.</span>J
              </span>
            </div>
            <p className="footer-tagline">
              Software Developer crafting reliable web solutions, scalable REST APIs, and modern user interfaces with passion and architectural rigor.
            </p>
            <div className="footer-socials">
              <SocialLinks variant="compact" />
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="footer-nav-anchor"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Availability Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Let's Connect</h4>
            <p className="footer-status-desc">
              Currently open to software engineering opportunities, internships, and technical collaborations.
            </p>
            <a href={`mailto:${personalInfo.email}`} className="footer-email-link">
              {personalInfo.email}
            </a>
            <div className="footer-location-tag">
              📍 {personalInfo.location}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-text">
            © {getCurrentYear()} Ganesh J. Designed &amp; Developed with engineering precision.
          </div>

          <button
            type="button"
            onClick={handleScrollTop}
            className="back-to-top-btn"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

