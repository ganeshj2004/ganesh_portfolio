import React from 'react';
import { BarChart3, BrainCircuit, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/certifications';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/animations/Reveal';
import './Certifications.css';

const certIconMap = {
  BarChart3,
  BrainCircuit,
  Award,
  CheckCircle2
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <div className="container">
        <SectionTitle
          tag="PROFESSIONAL CREDENTIALS"
          title="Certifications &amp; Training"
          subtitle="Specialized industry programs across Artificial Intelligence, enterprise analytics, web technologies, and Java engineering."
        />

        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const IconComp = certIconMap[cert.icon] || Award;

            return (
              <Reveal
                key={cert.id}
                direction="up"
                delay={0.1 * index}
                className="cert-grid-item"
              >
                <div className="cert-card glass-card">
                  <div className="cert-header">
                    <div className="cert-icon-box">
                      <IconComp size={22} />
                    </div>
                    <span className="cert-badge">{cert.badge}</span>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">Issued by: <strong>{cert.issuer}</strong></div>
                  <p className="cert-desc">{cert.description}</p>

                  <div className="cert-footer">
                    <span className="cert-category-tag">{cert.category}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
