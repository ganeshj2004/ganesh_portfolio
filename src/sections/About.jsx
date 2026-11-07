import React from 'react';
import { CheckCircle2, Award, Sparkles, Layers, ShieldCheck, Database, Code } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/animations/Reveal';
import './About.css';

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

          {/* Right Column: Key Stats & Focus Pillars */}
          <div className="about-stats-col">
            <Reveal direction="up" delay={0.2}>
              <div className="about-stats-grid">
                {personalInfo.stats.map((stat, index) => (
                  <div key={index} className="stat-card glass-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
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
