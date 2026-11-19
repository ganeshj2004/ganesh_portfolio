import React, { useMemo } from 'react';
import { ArrowRight, Download, Send, Terminal, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { scrollToSection } from '../utils/helpers';
import Button from '../components/common/Button';
import SocialLinks from '../components/common/SocialLinks';
import Reveal from '../components/animations/Reveal';
import { useTypewriter } from '../hooks/useTypewriter';
import './Hero.css';

// Static floating code particles — rendered once, never change
const PARTICLES = [
  { text: '</>', top: '12%', left: '8%', size: '0.8rem', delay: '0s', dur: '18s' },
  { text: '{ }', top: '72%', left: '4%', size: '0.75rem', delay: '3s', dur: '22s' },
  { text: '//', top: '30%', left: '92%', size: '0.85rem', delay: '1.5s', dur: '20s' },
  { text: '[ ]', top: '80%', left: '88%', size: '0.7rem', delay: '5s', dur: '25s' },
  { text: '=>', top: '55%', left: '2%', size: '0.9rem', delay: '7s', dur: '19s' },
  { text: '&&', top: '18%', left: '78%', size: '0.75rem', delay: '2s', dur: '23s' },
  { text: '()', top: '90%', left: '45%', size: '0.8rem', delay: '4s', dur: '21s' },
  { text: ';', top: '42%', left: '95%', size: '1rem', delay: '6s', dur: '17s' },
];

const TYPEWRITER_ROLES = [
  'Digital Experiences',
  'Scalable REST APIs',
  'Full-Stack Platforms',
  'Clean Architecture',
  'React Applications',
];

export default function Hero() {
  const { displayed, isTyping } = useTypewriter(TYPEWRITER_ROLES, 85, 50, 2200);

  return (
    <section id="hero" className="hero-section">
      {/* Background atmospheric glows */}
      <div className="hero-ambient-glow anim-float-1" aria-hidden="true" />
      <div className="hero-ambient-glow-alt anim-float-2" aria-hidden="true" />

      {/* Floating code particles */}
      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              top: p.top,
              left: p.left,
              fontSize: p.size,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          >
            {p.text}
          </span>
        ))}
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* ── Left: Text & CTA ── */}
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

            {/* Heading with animated typewriter role */}
            <Reveal direction="up" delay={0.2}>
              <h1 className="hero-title">
                Building{' '}
                <span className="hero-typewriter-wrap">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={displayed.slice(0, 6)}
                      className="text-gradient hero-typewriter-text"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {displayed}
                      <span className={`hero-cursor ${isTyping ? 'hero-cursor--blink' : ''}`}>|</span>
                    </motion.span>
                  </AnimatePresence>
                </span>{' '}
                Through Code.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="hero-description">{personalInfo.heroDescription}</p>
            </Reveal>

            {/* Core Stack */}
            <Reveal direction="up" delay={0.35}>
              <div className="hero-tech-strip">
                <span className="tech-strip-label">CORE STACK:</span>
                <div className="tech-strip-pills">
                  {['React.js', 'Node.js', 'Express.js', 'JavaScript', 'Python', 'MySQL', 'PostgreSQL'].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={0.4}>
              <div className="hero-cta-group">
                <Button
                  onClick={() => scrollToSection('projects')}
                  variant="primary"
                  size="md"
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
                  size="md"
                  icon={Download}
                >
                  Download Resume
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="md"
                  icon={Send}
                >
                  Contact Me
                </Button>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal direction="up" delay={0.45}>
              <div className="hero-socials-wrapper">
                <span className="socials-label">Connect:</span>
                <SocialLinks variant="large" />
              </div>
            </Reveal>
          </div>

          {/* ── Right: Portrait ── */}
          <div className="hero-visual">
            <div className="hero-visual-wrapper">
              <div className="hero-portrait-composition">
                {/* Soft teal ambient bloom */}
                <div className="portrait-ambient-glow" aria-hidden="true" />

                {/* Portrait */}
                <motion.div
                  className="portrait-frame"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.0, 0.2, 1.0] }}
                >
                  <img
                    src={personalInfo.portraitUrl || '/images/profile-hero-sage.png'}
                    alt={`${personalInfo.name} - Full Stack Software Developer`}
                    className="portrait-image"
                    width="819"
                    height="1024"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </motion.div>

                {/* Software Developer glass badge */}
                <motion.div
                  className="portrait-role-badge"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.6, ease: [0.2, 0.0, 0.2, 1.0] }}
                >
                  <div className="portrait-role-badge-icon" aria-hidden="true">
                    <Code size={15} />
                  </div>
                  <span className="portrait-role-badge-text">Software Developer</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
