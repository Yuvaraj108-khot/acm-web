'use client';

import Link from 'next/link';
import styles from './JoinCTA.module.css';

export function JoinCTA() {
  return (
    <section className={styles.section} id="join" aria-labelledby="join-heading">
      <div className="container">
        <div className={styles.panel}>
          {/* Left Column */}
          <div className={styles.content}>
            <h2 className="text-display" id="join-heading" style={{ marginBottom: '16px' }}>
              Ready to be part of something real?
            </h2>
            <p className="text-subheading" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
              Join ACM today. No experience required — just curiosity and the drive to grow. Connect with mentors, build real products, and launch your career.
            </p>
            <Link href="/contact#join" className="btn btn-primary">
              Join the Chapter
            </Link>
          </div>

          {/* Right Column */}
          <div className={styles.visual}>
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgCTA}
            >
              {/* Smiley/Abstract shape from template */}
              <circle cx="100" cy="100" r="70" stroke="#0A0A0A" strokeWidth="2.5" />
              {/* Left Eye (Cross) */}
              <path d="M 70 85 L 80 95 M 80 85 L 70 95" stroke="#0A0A0A" strokeWidth="2.5" />
              {/* Right Eye (Spark/Diamond) */}
              <path d="M 125 75 L 133 85 L 125 95 L 117 85 Z" fill="var(--color-accent)" stroke="#0A0A0A" strokeWidth="2" />
              {/* Smile curve */}
              <path d="M 65 125 Q 100 155 135 125" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
