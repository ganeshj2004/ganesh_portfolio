import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import './SocialLinks.css';

/**
 * Reusable SocialLinks component for Hero, Contact, and Footer
 */
export default function SocialLinks({ variant = 'default', className = '' }) {
  const links = [
    {
      name: 'GitHub',
      href: personalInfo.socials.github,
      icon: Github,
      label: "View Ganesh J's GitHub profile"
    },
    {
      name: 'LinkedIn',
      href: personalInfo.socials.linkedin,
      icon: Linkedin,
      label: "Connect with Ganesh J on LinkedIn"
    },
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: `Send email to ${personalInfo.email}`
    }
  ];

  return (
    <div className={`social-links-list ${variant} ${className}`}>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="social-icon-btn"
            aria-label={link.label}
            title={link.name}
          >
            <IconComponent size={19} />
          </a>
        );
      })}
    </div>
  );
}
