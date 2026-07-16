'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={`container ${styles.inner}`}>
        {/* Left Column */}
        <div className={styles.content}>
          <div className="badge-label">ACM Student Chapter</div>
          <h1 className="text-hero" style={{ margin: '16px 0' }}>
            Technology.<br />
            Community.<br />
            Impact.
          </h1>
          <p className="text-subheading" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', maxWidth: '50ch' }}>
            We are a vibrant community of passionate technologists, builders, and innovators. Join us to build projects, attend workshops, and grow your career.
          </p>
          <div className={styles.ctas}>
            <Link href="/contact#join" className="btn btn-primary">
              Join Us
            </Link>
            <Link href="/events" className="btn btn-outline">
              View Events
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.visual}>
          <div className={styles.illustrationFrame}>
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgIllustration}
            >
              {/* Outer Orbiting Circle */}
              <circle cx="200" cy="200" r="140" stroke="#0A0A0A" strokeWidth="2" strokeDasharray="6 6" />
              
              {/* Inner Circle */}
              <circle cx="200" cy="200" r="90" stroke="#0A0A0A" strokeWidth="2" />
              
              {/* Neon Green Filled Circle */}
              <circle cx="140" cy="140" r="28" fill="var(--color-accent)" stroke="#0A0A0A" strokeWidth="2" />

              {/* Black Filled Circle */}
              <circle cx="260" cy="260" r="16" fill="#0A0A0A" />

              {/* Orbit Line */}
              <line x1="60" y1="200" x2="340" y2="200" stroke="#0A0A0A" strokeWidth="1.5" />
              <line x1="200" y1="60" x2="200" y2="340" stroke="#0A0A0A" strokeWidth="1.5" />

              {/* Spark Marks */}
              <path d="M 200 110 L 200 130 M 190 120 L 210 120" stroke="#0A0A0A" strokeWidth="2" />
              <path d="M 280 130 L 290 120 L 300 130 L 290 140 Z" fill="var(--color-accent)" stroke="#0A0A0A" strokeWidth="1.5" />
              
              {/* Cross Marks */}
              <path d="M 100 270 L 110 280 M 110 270 L 100 280" stroke="#0A0A0A" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
