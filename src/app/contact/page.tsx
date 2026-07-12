'use client';

import { useState } from 'react';
import { Mail, MapPin, Globe, Share2, X, Send, CheckCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import styles from './page.module.css';

const socials = [
  { icon: Globe,   href: '#', label: 'GitHub' },
  { icon: Share2,  href: '#', label: 'Instagram' },
  { icon: X,       href: '#', label: 'X / Twitter' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', interest: 'general' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: would send to API
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <p className="eyebrow">Get in Touch</p>
          <div className="divider" />
          <h1 className="text-display">Contact Us</h1>
          <p className="text-subheading text-secondary" style={{ maxWidth: '46ch', marginTop: '1rem' }}>
            Questions, partnership ideas, or just want to join? We would love to hear from you.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {/* Info panel */}
          <div className={styles.infoPanel}>
            <div className={styles.infoCard} id="join">
              <h2 className={styles.infoTitle}>Join ACM</h2>
              <p className="text-sm text-secondary" style={{ lineHeight: 1.7 }}>
                Membership is open to all students — no prior experience required. Fill out the form and we will reach out with next steps.
              </p>
              <ul className={styles.benefits} aria-label="Membership benefits">
                {['Access to all workshops & events', 'Project team participation', 'Mentorship & networking', 'ACM digital library access', 'Certificate of membership'].map(b => (
                  <li key={b} className={styles.benefit}>
                    <CheckCircle size={14} className={styles.checkIcon} aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <Mail size={16} aria-hidden="true" />
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <a href="mailto:acm@university.edu" className={styles.contactValue}>acm@university.edu</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} aria-hidden="true" />
                <div>
                  <p className={styles.contactLabel}>Location</p>
                  <p className={styles.contactValue}>Engineering Block, Room 301<br />University Campus</p>
                </div>
              </div>
            </div>

            <div className={styles.socials}>
              <p className={styles.contactLabel}>Follow Us</p>
              <div className={styles.socialLinks}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} className={styles.socialBtn} aria-label={label} target="_blank" rel="noopener noreferrer">
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success} role="alert">
                <CheckCircle size={40} className={styles.successIcon} aria-hidden="true" />
                <h2>Message Sent!</h2>
                <p className="text-secondary">Thanks for reaching out. We will get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate aria-label="Contact form">
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className="label" htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="name"
                      className="input"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className="label" htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                    <input
                      id="email"
                      className="input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className="label" htmlFor="interest">I am interested in</label>
                  <select
                    id="interest"
                    className="input"
                    value={form.interest}
                    onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="membership">Joining as a Member</option>
                    <option value="partnership">Sponsorship / Partnership</option>
                    <option value="speaker">Speaking at an Event</option>
                    <option value="alumni">Alumni / Mentorship</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className="label" htmlFor="subject">Subject <span aria-hidden="true">*</span></label>
                  <input
                    id="subject"
                    className="input"
                    type="text"
                    placeholder="What is it about?"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    required
                    aria-required="true"
                  />
                </div>

                <div className={styles.field}>
                  <label className="label" htmlFor="message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    className="input"
                    rows={6}
                    placeholder="Tell us more..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    aria-required="true"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message <Send size={15} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
