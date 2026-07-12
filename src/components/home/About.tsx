'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { Lightbulb, Users, Globe } from 'lucide-react';
import styles from './About.module.css';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Learn by Building',
    description:
      'We believe the fastest way to grow as an engineer is to build real things. Our workshops, projects, and hackathons put you in the driver\'s seat from day one.',
  },
  {
    icon: Users,
    title: 'Community First',
    description:
      'From study groups to speaker nights, every ACM event is designed to connect people. Your network here will outlast your degree.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description:
      'As a chapter of the world\'s largest computing society, we connect you to a global community of 100,000+ professionals, researchers, and innovators.',
  },
];

export function About() {
  return (
    <section className={`section bg-secondary ${styles.about}`} id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Left — text */}
          <AnimatedSection>
            <div className={styles.textCol}>
              <p className="eyebrow">Who We Are</p>
              <div className="divider" />
              <h2 className="text-display" id="about-heading">
                A chapter built on curiosity and craft.
              </h2>
              <p className="text-body text-secondary" style={{ maxWidth: '44ch', marginTop: '1.5rem' }}>
                The ACM Student Chapter is more than a club. It is a launchpad —
                for careers, for ideas, and for the kind of friendships that form
                when ambitious people work on hard problems together.
              </p>
              <p className="text-body text-secondary" style={{ maxWidth: '44ch', marginTop: '1rem' }}>
                Founded by students, for students, we operate with one goal in mind:
                make this the most useful and inspiring technical community on campus.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — pillars */}
          <StaggerContainer className={styles.pillars} staggerChildren={0.15}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className={styles.pillar}>
                  <div className={styles.pillarIcon} aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-subheading" style={{ marginBottom: '0.5rem' }}>{title}</h3>
                    <p className="text-sm text-secondary">{description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
