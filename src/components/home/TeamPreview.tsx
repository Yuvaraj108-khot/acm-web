'use client';

import Link from 'next/link';
import { ArrowRight, Globe, ExternalLink } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { team } from '@/data/team';
import styles from './TeamPreview.module.css';

const leaders = team.filter(m => m.tier === 'leadership').slice(0, 4);

export function TeamPreview() {
  return (
    <section className="section" id="team" aria-labelledby="team-heading">
      <div className="container">
        <AnimatedSection>
          <div className="section-header section-header--center">
            <p className="eyebrow">The People</p>
            <div className="divider divider--center" />
            <h2 className="text-display" id="team-heading">Led by students.</h2>
            <p className="text-body text-secondary" style={{ maxWidth: '44ch', margin: '1rem auto 0' }}>
              Our leadership team brings together diverse skills and one shared obsession: building the best chapter possible.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className={styles.grid}>
          {leaders.map(member => (
            <StaggerItem key={member.id}>
              <article className={`card ${styles.card}`}>
                <div className={styles.imgWrap}>
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    className={styles.img}
                    loading="lazy"
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  <p className="text-xs text-muted">{member.department} · {member.year}</p>
                  <div className={styles.socials}>
                    {member.linkedin && (
                      <a href={member.linkedin} className={styles.socialBtn} aria-label={`${member.name} on LinkedIn`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className={styles.socialBtn} aria-label={`${member.name} on GitHub`} target="_blank" rel="noopener noreferrer">
                        <Globe size={15} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <Link href="/team" className="btn btn-outline">
              Meet the Full Team <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
