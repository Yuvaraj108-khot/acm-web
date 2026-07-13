'use client';

import Link from 'next/link';
import { ArrowRight, CalendarDays, Users, Trophy, Code2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { AmbientBackground } from '@/components/ui/AmbientBackground';
import { InteractiveTerminal } from '@/components/ui/InteractiveTerminal';
import styles from './Hero.module.css';

const stats = [
  { icon: Users,       value: '400+', label: 'Members' },
  { icon: CalendarDays,value: '50+',  label: 'Events Hosted' },
  { icon: Trophy,      value: '12',   label: 'Awards Won' },
  { icon: Code2,       value: '30+',  label: 'Projects Built' },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.hero} aria-label="Hero">
      <AmbientBackground />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {/* Eyebrow */}
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.dot} aria-hidden="true" />
            <span className="eyebrow">ACM Student Chapter</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className={`text-hero ${styles.headline}`}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Where great
            <br />
            <span className={styles.accentText}>engineers</span>
            <br />
            are made.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className={`text-subheading ${styles.subtext}`}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            A vibrant community of technologists, builders, and innovators.
            We run workshops, hackathons, talks, and projects that shape your career.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact#join" className="btn btn-primary">
              Join ACM <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/events" className="btn btn-outline">
              Explore Events
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className={styles.stat}>
                <Icon size={16} className={styles.statIcon} aria-hidden="true" />
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          aria-hidden="true"
        >
          <div className={styles.imageFrame}>
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80"
              alt="ACM members collaborating at a hackathon"
              className={styles.heroImg}
              loading="eager"
            />
            <div className={styles.imageOverlay} />
            <div className={styles.imageBorder} />
          </div>

          {/* Floating pill */}
          <div className={styles.floatingPill}>
            <CalendarDays size={14} aria-hidden="true" />
            <span>Next Event: Aug 15 — Full-Stack Bootcamp</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>

      <InteractiveTerminal />
    </section>
  );
}
