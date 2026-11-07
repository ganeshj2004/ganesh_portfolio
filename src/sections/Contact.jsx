import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import SectionTitle from '../components/common/SectionTitle';
import SocialLinks from '../components/common/SocialLinks';
import Button from '../components/common/Button';
import Reveal from '../components/animations/Reveal';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject line is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters long';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Compose formatted mailto URL as requested
    const recipient = personalInfo.email;
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Ganesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Ganesh J Developer Portfolio`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper section-alt">
      <div className="container">
        <SectionTitle
          tag="GET IN TOUCH"
          title="Let's Discuss Opportunities"
          subtitle="Interested in hiring, collaborating on a project, or discussing full-stack engineering roles? Reach out directly."
        />

        <div className="contact-grid">
          {/* Contact Direct Info */}
          <div className="contact-info-col">
            <Reveal direction="up" delay={0.1}>
              <div className="contact-info-card glass-card">
                <h3 className="contact-card-title">Direct Channels</h3>
                <p className="contact-card-intro">
                  Feel free to send an email or connect on LinkedIn. I generally respond within 24 hours.
                </p>

                <div className="contact-items-list">
                  {/* Email */}
                  <div className="contact-method-item">
                    <div className="contact-icon-box">
                      <Mail size={20} />
                    </div>
                    <div className="contact-method-details">
                      <span className="method-label">Email Address</span>
                      <a href={`mailto:${personalInfo.email}`} className="method-value link">
                        {personalInfo.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="copy-btn"
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="contact-method-item">
                    <div className="contact-icon-box">
                      <Phone size={20} />
                    </div>
                    <div className="contact-method-details">
                      <span className="method-label">Phone / WhatsApp</span>
                      <span className="method-value">{personalInfo.phone}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="copy-btn"
                      title="Copy phone to clipboard"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="contact-method-item">
                    <div className="contact-icon-box">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-method-details">
                      <span className="method-label">Base Location</span>
                      <span className="method-value">{personalInfo.location}</span>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="contact-socials-box">
                  <h4 className="socials-box-title">Professional Profiles</h4>
                  <SocialLinks variant="large" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Interactive Form */}
          <div className="contact-form-col">
            <Reveal direction="up" delay={0.2}>
              <div className="contact-form-card glass-card">
                <h3 className="contact-card-title">Send a Direct Message</h3>
                <p className="contact-card-intro">
                  Fill out the form below. It triggers a verified message dispatch directly to my inbox.
                </p>

                {submitted && (
                  <div className="form-success-alert">
                    <CheckCircle2 size={20} className="alert-icon" />
                    <div>
                      <strong>Message Initiated!</strong>
                      <p>Your mail composer has been launched. Thank you for reaching out!</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  <div className="form-group-row">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Your Name <span className="req">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                        required
                      />
                      {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        required
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">
                      Subject <span className="req">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Developer Opportunity / Interview"
                      className={`form-input ${errors.subject ? 'input-error' : ''}`}
                      required
                    />
                    {errors.subject && <span className="error-text">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Ganesh, I reviewed your portfolio and would like to connect regarding an opportunity at..."
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      required
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    className="form-submit-btn"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
