import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { education } from '../data/education';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/animations/Reveal';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section-wrapper section-alt">
      <div className="container">
        <SectionTitle
          tag="ACADEMIC BACKGROUND"
          title="Education &amp; Qualifications"
          subtitle="Formal engineering education in Information Technology, computer science fundamentals, and academic excellence."
        />

        <div className="education-grid">
          {education.map((item, index) => (
            <Reveal
              key={item.id}
              direction="up"
              delay={0.15 * index}
              className="education-grid-item"
            >
              <div className="education-card glass-card">
                {/* Header */}
                <div className="education-header">
                  <div className="education-icon-box">
                    <GraduationCap size={22} />
                  </div>

                  <div className="education-title-group">
                    <div className="education-badges-row">
                      <div className="education-score-badge">
                        <Award size={13} />
                        <span>{item.score}</span>
                      </div>
                      {item.stream && (
                        <span className="education-stream-badge">
                          {item.stream}
                        </span>
                      )}
                    </div>
                    <h3 className="education-degree">{item.degree}</h3>
                    <p className="education-institution">{item.institution}</p>
                  </div>
                </div>

                {/* Meta Row: Period & Location */}
                <div className="education-meta-row">
                  <span className="edu-meta-pill">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </span>
                  <span className="edu-meta-pill">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="education-description">{item.description}</p>

                {/* Key Coursework */}
                <div className="education-coursework">
                  <div className="coursework-label">
                    <BookOpen size={14} />
                    <span>Key Coursework &amp; Foundations:</span>
                  </div>
                  <div className="coursework-pills">
                    {item.coursework.map((course, cIdx) => (
                      <span key={cIdx} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

