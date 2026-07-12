'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <p className="eyebrow">Who We Are</p>
          <div className="divider" />
          <h1 className="text-display">About Us</h1>
          <p className="text-subheading text-secondary" style={{ maxWidth: '48ch', marginTop: '1rem' }}>
            The ACM Student Chapter is dedicated to advancing computing as a science and a profession, fostering a community of passionate builders.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              We are a vibrant community of programmers, designers, builders, and technology enthusiasts. Our mission is to bridge the gap between academic theory and industry practice through hands-on learning, collaborative projects, and mentorship.
            </p>
            <p className={styles.paragraph}>
              Throughout the year, we organize workshops on modern web technologies, AI/ML hackathons, guest lectures, and coding contests. Whether you are just writing your first line of code or design complex systems, you'll find a place to learn, grow, and collaborate.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
