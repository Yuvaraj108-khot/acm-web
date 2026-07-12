import { ExternalLink, Globe, Mail } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { team } from '@/data/team';
import styles from './page.module.css';

const tiers = [
  { key: 'leadership', label: 'Chapter Leadership' },
  { key: 'core',       label: 'Core Team' },
] as const;

export const metadata = {
  title: 'Team',
  description: 'Meet the students driving the ACM chapter forward.',
};

export default function TeamPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <p className="eyebrow">Our People</p>
          <div className="divider" />
          <h1 className="text-display">The Team</h1>
          <p className="text-subheading text-secondary" style={{ maxWidth: '48ch', marginTop: '1rem' }}>
            Meet the students leading ACM — from organizing events to shipping projects and building community.
          </p>
        </AnimatedSection>

        {tiers.map(({ key, label }) => {
          const members = team.filter(m => m.tier === key);
          return (
            <section key={key} className={styles.tierSection} aria-labelledby={`tier-${key}`}>
              <h2 className={styles.tierLabel} id={`tier-${key}`}>{label}</h2>
              <StaggerContainer className={key === 'leadership' ? styles.leaderGrid : styles.coreGrid}>
                {members.map(member => (
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
                        <p className="text-sm text-secondary" style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>{member.bio}</p>
                        <div className={styles.socials}>
                          {member.email && (
                            <a href={`mailto:${member.email}`} className={styles.socialBtn} aria-label={`Email ${member.name}`}>
                              <Mail size={15} aria-hidden="true" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a href={member.linkedin} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}>
                              <ExternalLink size={15} aria-hidden="true" />
                            </a>
                          )}
                          {member.github && (
                            <a href={member.github} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on GitHub`}>
                              <Globe size={15} aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          );
        })}
      </div>
    </div>
  );
}
