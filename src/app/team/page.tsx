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
        {/* Page Hero */}
        <header className={styles.hero}>
          <span className="badge-label">Team</span>
          <h1 className="text-hero" style={{ marginTop: '16px', marginBottom: '24px' }}>
            The People Behind ACM
          </h1>
        </header>

        {groups.map((group) => {
          const members = team.filter((member) => member.group === group);
          if (members.length === 0) return null;

          return (
            <section key={group} className={styles.tierSection} aria-labelledby={`group-${group}`}>
              <div className={styles.tierHeader}>
                <span className="badge-label">{group}</span>
              </div>

              <div className={styles.grid}>
                {members.map((member) => {
                  const avatarUrl = member.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name || member.id)}`;

                  return (
                    <article key={member.id} className={styles.card}>
                      <div className={styles.avatar}>
                        <img
                          src={avatarUrl}
                          alt={`Portrait of ${member.name ?? member.code}`}
                          className={styles.img}
                          loading="lazy"
                        />
                      </div>
                      
                      <div className={styles.body}>
                        <h3 className={styles.name}>{member.name ?? member.code}</h3>
                        <p className={styles.role}>{member.role}</p>
                        {member.name && <p className={styles.code}>{member.code}</p>}
                        {member.bio && (
                          <p className={styles.bio} title={member.bio}>
                            {member.bio}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
