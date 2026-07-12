'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import styles from './JoinCTA.module.css';

export function JoinCTA() {
  return (
    <section className={`section ${styles.section}`} id="join" aria-labelledby="join-heading">
      <div className="container">
        <AnimatedSection>
          <div className={styles.card}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.content}>
              <div className={styles.icon} aria-hidden="true">
                <Sparkles size={28} />
              </div>
              <p className="eyebrow" style={{ color: 'rgba(196,127,44,0.8)' }}>Open to All Students</p>
              <h2 className={`text-display ${styles.headline}`} id="join-heading">
                Ready to build something great?
              </h2>
              <p className={`text-subheading ${styles.sub}`}>
                Join ACM today. No experience required — just curiosity and the drive to grow.
              </p>
              <div className={styles.ctas}>
                <Link href="/contact#join" className="btn btn-primary">
                  Apply for Membership <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/events" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'inherit' }}>
                  Explore First
                </Link>
              </div>
              <p className={styles.note}>Free to join · No experience required · Open year-round</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
