import React from 'react';
import { ArrowRight, Download, Send, Sparkles, Terminal, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { scrollToSection } from '../utils/helpers';
import Button from '../components/common/Button';
import SocialLinks from '../components/common/SocialLinks';
import Reveal from '../components/animations/Reveal';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Decorative ambient elements */}
      <div className="hero-ambient-glow anim-float-1" aria-hidden="true" />
      <div className="hero-ambient-glow-alt anim-float-2" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Hero Left: Text & CTA */}
          <div className="hero-content">
            <Reveal direction="down" delay={0.1}>
              <div className="hero-badge-container">
                <span className="hero-pill-badge">
                  <span className="status-ping"></span>
                  <span>{personalInfo.greeting}</span>
                </span>
                <span className="hero-role-badge">
                  <Terminal size={14} />
                  <span>Software Developer</span>
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="hero-title">
                Building <span className="text-gradient">Digital Experiences</span> Through Code.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="hero-description">
                {personalInfo.heroDescription}
              </p>
            </Reveal>

            {/* Quick Skills Tagline */}
            <Reveal direction="up" delay={0.35}>
              <div className="hero-tech-strip">
                <span className="tech-strip-label">CORE STACK:</span>
                <div className="tech-strip-pills">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>MySQL</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={0.4}>
              <div className="hero-cta-group">
                <Button
                  onClick={() => scrollToSection('projects')}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  View Projects
                </Button>

                <Button
                  href={personalInfo.resumeUrl}
                  download="Ganesh_J_Resume.pdf"
                  target="_blank"
                  variant="secondary"
                  size="lg"
                  icon={Download}
                >
                  Download Resume
                </Button>

                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  icon={Send}
                >
                  Contact Me
                </Button>
              </div>
            </Reveal>

            {/* Social Links & Trust Indicator */}
            <Reveal direction="up" delay={0.45}>
              <div className="hero-socials-wrapper">
                <span className="socials-label">Connect:</span>
                <SocialLinks variant="large" />
              </div>
            </Reveal>
          </div>

          {/* Hero Right: Profile Visual & Floating Code Cards */}
          <div className="hero-visual">
            <Reveal direction="left" delay={0.25} className="hero-visual-wrapper">
              <div className="hero-avatar-wrapper">
                {/* Glowing ring behind avatar */}
                <div className="avatar-ring-glow"></div>

                <div className="avatar-frame">
                  <img
                    src="/images/avatar.svg"
                    alt="Ganesh J - Software Developer"
                    className="avatar-image"
                    width="360"
                    height="360"
                    loading="eager"
                  />
                </div>

                {/* Floating Decorative Cards */}
                <motion.div
                  className="floating-card floating-card-top"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="floating-card-icon icon-react">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <div className="floating-card-title">Full Stack Ready</div>
                    <div className="floating-card-sub">React &amp; Node.js</div>
                  </div>
                </motion.div>

                <motion.div
                  className="floating-card floating-card-bottom"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div className="floating-card-icon icon-speed">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div className="floating-card-title">35% Query Speedup</div>
                    <div className="floating-card-sub">MySQL Optimization</div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
