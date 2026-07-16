'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './About.module.css';

export function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="badge-label">About</div>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <h2 className="text-display" id="about-heading">
              Bridging academia and industry.
            </h2>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <p className="text-subheading" style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
              We are a vibrant community of programmers, designers, builders, and technology enthusiasts. Our mission is to bridge the gap between academic theory and industry practice through hands-on learning, collaborative projects, and mentorship.
            </p>
            <Link href="/about" className={styles.ctaLink}>
              Learn more about us &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
