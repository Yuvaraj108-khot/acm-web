'use client';

import { useState } from 'react';
import { Mail, MapPin, Globe, Share2, X, Check } from 'lucide-react';
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
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Page Hero */}
        <header className={styles.hero}>
          <span className="badge-label">Contact</span>
          <h1 className="text-hero" style={{ marginTop: '16px', marginBottom: '24px' }}>
            Let&apos;s Connect
          </h1>
        </header>

        <div className={styles.grid}>
          {/* Left Panel - Dark Card */}
          <div className={`${styles.card} ${styles.cardDark}`} id="join">
            <h2 className={styles.infoTitle}>Join ACM</h2>
            <p className={styles.infoSub}>
              Membership is open to all students — no prior experience required. Fill out the form and we will reach out with next steps.
            </p>
            
            <ul className={styles.benefits} aria-label="Membership benefits">
              {[
                'Access to all workshops & events',
                'Project team participation',
                'Mentorship & networking',
                'ACM digital library access',
                'Certificate of membership'
              ].map(b => (
                <li key={b} className={styles.benefit}>
                  <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} aria-hidden="true" />
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <a href="mailto:acm@university.edu" className={styles.contactValue}>acm@university.edu</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} aria-hidden="true" />
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
                    <Icon size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Form (White Card) */}
          <div className={`${styles.card} ${styles.cardLight}`}>
            {submitted ? (
              <div className={styles.success} role="alert">
                <div className={styles.successIconWrapper}>
                  <Check size={32} className={styles.successIcon} />
                </div>
                <h2>Message sent!</h2>
                <p className="text-secondary" style={{ marginTop: '12px' }}>
                  Thanks for reaching out. We will get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate aria-label="Contact form">
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className="label" htmlFor="name">Full Name *</label>
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
                    <label className="label" htmlFor="email">Email Address *</label>
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
                    style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")', backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="membership">Joining as a Member</option>
                    <option value="partnership">Sponsorship / Partnership</option>
                    <option value="speaker">Speaking at an Event</option>
                    <option value="alumni">Alumni / Mentorship</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className="label" htmlFor="subject">Subject *</label>
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
                  <label className="label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    className="input"
                    rows={5}
                    placeholder="Tell us more..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    aria-required="true"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
