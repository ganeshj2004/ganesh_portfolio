import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experiences } from '../data/experience';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/animations/Reveal';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper section-alt">
      <div className="container">
        <SectionTitle
          tag="CAREER MILESTONES"
          title="Practical Experience &amp; Internships"
          subtitle="Real-world engineering contributions in enterprise API architecture, database query performance, and secure portal development."
        />

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              {/* Timeline Connector Line & Glowing Node Badge */}
              <div className="timeline-badge">
                <Briefcase size={16} />
              </div>

              <Reveal direction="up" delay={0.15 * index}>
                <div className="timeline-card glass-card">
                  {/* Header */}
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role-row">
                        <h3 className="timeline-role">{exp.role}</h3>
                        <span className="badge timeline-type-badge">{exp.type}</span>
                      </div>

                      <div className="timeline-company-row">
                        <span className="timeline-company">
                          <Building2 size={15} />
                          {exp.company}
                        </span>
                        <span className="timeline-location">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="timeline-period-badge">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="timeline-overview">{exp.description}</p>

                  {/* Bullet Responsibilities */}
                  <div className="timeline-responsibilities">
                    <h4 className="responsibilities-title">Key Engineering Achievements:</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((item, respIndex) => (
                        <li key={respIndex} className="responsibility-item">
                          <CheckCircle2 size={16} className="resp-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="timeline-tech-stack">
                    {exp.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-badge-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

