import React from 'react';
import Reveal from '../animations/Reveal';
import './SectionTitle.css';

/**
 * Standardized Section Title Component for visual consistency across sections
 */
export default function SectionTitle({
  tag,
  title,
  subtitle,
  center = true,
  className = ''
}) {
  return (
    <div className={`section-header-block ${center ? 'text-center' : 'text-left'} ${className}`}>
      {tag && (
        <Reveal direction="down" delay={0.05}>
          <div className="section-tag-wrapper">
            <span className="section-badge-code">
              <span className="section-badge-dot"></span>
              {tag}
            </span>
          </div>
        </Reveal>
      )}

      <Reveal direction="up" delay={0.1}>
        <h2 className="section-main-heading">{title}</h2>
      </Reveal>

      {subtitle && (
        <Reveal direction="up" delay={0.15}>
          <p className="section-subtitle-text">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
