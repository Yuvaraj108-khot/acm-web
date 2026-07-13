import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { team } from '@/data/team';
import styles from './page.module.css';

const groups = [
  'Leadership',
  'Administration',
  'Documentation',
  'Event Team',
  'Tech Team',
  'Graphics Team',
  'Media Team',
  'Social Media Team',
  'Publicity Team',
  '3rd Year Representative',
  '2nd Year Representative',
] as const;

export const metadata = {
  title: 'Team',
  description: 'Meet the members driving the ACM chapter forward.',
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
            Meet the members currently shaping the ACM chapter across leadership, administration, documentation, and events.
          </p>
        </AnimatedSection>

        {groups.map((group) => {
          const members = team.filter((member) => member.group === group);
          if (members.length === 0) return null;

          return (
            <section key={group} className={styles.tierSection} aria-labelledby={`group-${group}`}>
              <h2 className={styles.tierLabel} id={`group-${group}`}>{group}</h2>
              <StaggerContainer className={styles.grid}>
                {members.map((member) => (
                  <StaggerItem key={member.id} className={styles.gridItem}>
                    <article className={`card ${styles.card}`}>
                      {member.image ? (
                        <div className={styles.imgWrap}>
                          <img
                            src={member.image}
                            alt={`Portrait of ${member.name ?? member.code}, ${member.role}`}
                            className={styles.img}
                            loading="lazy"
                          />
                        </div>
                      ) : null}
                      <div className={styles.body}>
                        <h3 className={styles.name}>{member.name ?? member.code}</h3>
                        <p className={styles.role}>{member.role}</p>
                        {member.name ? <p className="text-xs text-muted">{member.code}</p> : null}
                        {member.bio ? <p className={`text-sm text-secondary ${styles.bio}`}>{member.bio}</p> : null}
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
