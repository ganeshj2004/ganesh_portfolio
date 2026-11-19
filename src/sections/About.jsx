import React, { useRef } from 'react';
import { CheckCircle2, Layers, ShieldCheck, Database } from 'lucide-react';
import { useInView } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/animations/Reveal';
import { useCountUp } from '../hooks/useCountUp';
import './About.css';

/* Individual animated stat card */
function StatCard({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const animated = useCountUp(stat.value, inView, 1800);

  return (
    <div ref={ref} className="stat-card glass-card">
      <span className="stat-value">{animated}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-wrapper section-alt">
      <div className="container">
        <SectionTitle
          tag="ENGINEERING PROFILE"
          title="About Me &amp; Technical Mindset"
          subtitle="An Information Technology graduate passionate about architecting scalable, data-driven web applications and robust services."
        />

        <div className="about-grid">
          {/* Left Column: Narrative & Key Competency Highlights */}
          <div className="about-narrative-col">
            <Reveal direction="up" delay={0.1}>
              <div className="about-bio-card glass-card">
                <h3 className="about-bio-title">
                  Turning Complex Logic into Seamless Web Architecture
                </h3>

                {personalInfo.aboutBio.map((paragraph, index) => (
                  <p key={index} className="about-bio-paragraph">
                    {paragraph}
                  </p>
                ))}

                <div className="about-competencies">
                  <h4 className="competencies-title">Core Engineering Strengths</h4>
                  <div className="competencies-list">
                    {personalInfo.highlights.map((highlight, index) => (
                      <div key={index} className="competency-item">
                        <CheckCircle2 size={18} className="competency-check-icon" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Animated Stats & Pillars */}
          <div className="about-stats-col">
            <Reveal direction="up" delay={0.2}>
              <div className="about-stats-grid">
                {personalInfo.stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} />
                ))}
              </div>
            </Reveal>

            {/* Architecture Pillars Card */}
            <Reveal direction="up" delay={0.3}>
              <div className="architecture-pillars-card glass-card">
                <h4 className="pillars-heading">Architectural Pillars</h4>
                <div className="pillar-row">
                  <div className="pillar-icon-box blue">
                    <Layers size={18} />
                  </div>
                  <div>
                    <h5 className="pillar-title">Component Reusability</h5>
                    <p className="pillar-text">Building modular, declarative UI components with React &amp; strict prop typing.</p>
                  </div>
                </div>

                <div className="pillar-row">
                  <div className="pillar-icon-box emerald">
                    <Database size={18} />
                  </div>
                  <div>
                    <h5 className="pillar-title">Database Efficiency</h5>
                    <p className="pillar-text">Optimizing indexing, normal forms, and stored procedures in MySQL &amp; PostgreSQL.</p>
                  </div>
                </div>

                <div className="pillar-row">
                  <div className="pillar-icon-box purple">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h5 className="pillar-title">Secure Access Control</h5>
                    <p className="pillar-text">Implementing stateless JWT authentication and granular Role-Based Access Control (RBAC).</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
