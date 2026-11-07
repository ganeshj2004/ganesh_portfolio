import React from 'react';
import './Button.css';

/**
 * Reusable Button component supporting primary, secondary, outline, and ghost variants
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  download,
  target,
  rel,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  disabled = false
}) {
  const baseClasses = `btn-custom btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="btn-icon icon-left" size={18} />}
      <span className="btn-text">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn-icon icon-right" size={18} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
