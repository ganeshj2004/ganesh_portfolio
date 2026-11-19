import React, { useState } from 'react';
import { ExternalLink, Github, Info, X, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { projects } from '../data/projects';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import Reveal from '../components/animations/Reveal';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <SectionTitle
          tag="SELECTED WORK"
          title="Featured Engineering Projects"
          subtitle="Explore full-stack platforms, institutional portals, and machine learning initiatives built with clean architecture and scalability."
        />

        {/* Dynamic Project Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              direction="up"
              delay={0.1 * index}
              className="project-grid-item"
            >
              <article className="project-card glass-card">
                {/* Image / Mockup Banner */}
                <div className="project-image-box">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot preview`}
                    className="project-cover-img"
                    loading="lazy"
                  />
                  <div className="project-category-overlay">
                    <span className="badge project-category-badge">{project.category}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">{project.description}</p>

                  {/* Technology Badges */}
                  <div className="project-tech-badges">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="project-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="project-actions-row">
                    <button
                      type="button"
                      className="project-details-btn"
                      onClick={() => openProjectDetails(project)}
                      aria-label={`View details for ${project.title}`}
                    >
                      <Info size={16} />
                      <span>View Details</span>
                    </button>

                    <div className="project-links-group">
                      {project.github && project.github.trim() !== '' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          aria-label={`View GitHub repository for ${project.title}`}
                          title="Source Code"
                        >
                          <Github size={17} />
                        </a>
                      )}

                      {project.liveDemo && project.liveDemo.trim() !== '' && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          aria-label={`View Live Demo for ${project.title}`}
                          title="Live Demo"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={closeProjectDetails}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="project-modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div>
                <span className="badge modal-category-badge">{selectedProject.category}</span>
                <h3 id="modal-project-title" className="modal-title">{selectedProject.title}</h3>
                {selectedProject.subtitle && (
                  <p className="modal-subtitle">{selectedProject.subtitle}</p>
                )}
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={closeProjectDetails}
                aria-label="Close details modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="modal-image-preview">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} detail banner`}
                  className="modal-img"
                />
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Architecture Overview</h4>
                <p className="modal-paragraph">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>

              {selectedProject.highlights && (
                <div className="modal-section">
                  <h4 className="modal-section-title">Key Engineering Highlights</h4>
                  <ul className="modal-highlights-list">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="modal-highlight-item">
                        <CheckCircle2 size={16} className="modal-check-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-section">
                <h4 className="modal-section-title">Technologies &amp; Frameworks</h4>
                <div className="modal-tech-list">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons inside modal */}
              {(selectedProject.github || selectedProject.liveDemo) && (
                <div className="modal-footer-actions">
                  {selectedProject.liveDemo && (
                    <Button
                      href={selectedProject.liveDemo}
                      target="_blank"
                      variant="primary"
                      size="sm"
                      icon={ExternalLink}
                    >
                      Visit Live Demo
                    </Button>
                  )}
                  {selectedProject.github && (
                    <Button
                      href={selectedProject.github}
                      target="_blank"
                      variant="secondary"
                      size="sm"
                      icon={Github}
                    >
                      Source Code
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

