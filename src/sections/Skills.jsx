import React from 'react';
import {
  Code2,
  Terminal,
  Coffee,
  Database,
  Layout,
  Code,
  Palette,
  Layers,
  Cpu,
  Server,
  Network,
  Webhook,
  Key,
  Table2,
  FileSpreadsheet,
  Zap,
  GitBranch,
  Github,
  Send,
  TerminalSquare,
  Workflow,
  ShieldCheck,
  Binary,
  Box,
  FileCode2,
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/animations/Reveal';
import './Skills.css';

// Icon resolver map
const iconMap = {
  Code2,
  Terminal,
  Coffee,
  Database,
  Layout,
  Code,
  Palette,
  Layers,
  Cpu,
  Server,
  Network,
  Webhook,
  Key,
  Table2,
  FileSpreadsheet,
  Zap,
  GitBranch,
  Github,
  Send,
  TerminalSquare,
  Workflow,
  ShieldCheck,
  Binary,
  Box,
  FileCode2,
  Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        <SectionTitle
          tag="TECHNICAL CAPABILITIES"
          title="Skills &amp; Technology Stack"
          subtitle="A comprehensive toolkit spanning modern full-stack web technologies, relational databases, backend APIs, and computer science concepts."
        />

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = iconMap[category.iconName] || Code2;

            return (
              <Reveal
                key={category.id}
                direction="up"
                delay={0.08 * catIndex}
                className="skill-category-wrapper"
              >
                <div className="skill-category-card glass-card">
                  {/* Category Header */}
                  <div className="category-header">
                    <div className="category-icon-box">
                      <CategoryIcon size={20} />
                    </div>
                    <div>
                      <h3 className="category-title">{category.title}</h3>
                      <p className="category-desc">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills List in Category */}
                  <div className="category-skills-list">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = iconMap[skill.icon] || CheckCircle2;

                      return (
                        <div key={skillIndex} className="skill-item-pill">
                          <div className="skill-icon-wrap">
                            <SkillIcon size={15} />
                          </div>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level-tag">{skill.level}</span>
                        </div>
                      );
                    })}
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
