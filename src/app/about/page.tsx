'use client';

import styles from './page.module.css';

const focusAreas = [
  {
    id: 'who',
    label: 'Focus 01',
    title: 'Who We Are',
    text: 'We are a vibrant community of programmers, designers, builders, and technology enthusiasts at the university. We bridge the gap between classroom theory and real-world software craft.',
  },
  {
    id: 'mission',
    label: 'Focus 02',
    title: 'Our Mission',
    text: 'Our mission is to advance computing as a science and a profession, fostering a community of passionate student builders who want to create high-impact products.',
  },
  {
    id: 'what',
    label: 'Focus 03',
    title: 'What We Do',
    text: 'Throughout the year, we host hands-on bootcamps, 24-hour hackathons, tech talks from guest speakers, and coding competitions to build practical skills.',
  },
  {
    id: 'values',
    label: 'Focus 04',
    title: 'Our Values',
    text: 'We value curiosity, collaboration, and continuous improvement. We believe in building open-source tools, helping peers learn, and pushing our limits.',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className="badge-label">About</div>
          <h1 className="text-hero" style={{ marginTop: '16px', marginBottom: '24px' }}>
            About ACM Student Chapter
          </h1>
          <p className="text-subheading" style={{ maxWidth: '60ch', color: 'var(--color-text-secondary)' }}>
            Dedicated to advancing computing as a science and a profession, fostering a community of passionate builders who want to create high-impact software.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {focusAreas.map((area, index) => {
              // 2x2 checkerboard pattern: White (light), Dark, Dark, White (light)
              const cardTypes = ['light', 'dark', 'dark', 'light'];
              const isDark = cardTypes[index % 4] === 'dark';

              return (
                <div
                  key={area.id}
                  className={`${styles.card} ${isDark ? styles.cardDark : styles.cardLight}`}
                >
                  <span className={styles.cardLabel}>{area.label}</span>
                  <h3 className={styles.cardTitle}>{area.title}</h3>
                  <p className={styles.cardText}>{area.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
