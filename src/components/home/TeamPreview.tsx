'use client';

import Link from 'next/link';
import { team } from '@/data/team';
import styles from './TeamPreview.module.css';

export function TeamPreview() {
  // Get 5 members for the horizontal preview
  const leaders = team.slice(0, 5);

  return (
    <section className={styles.section} id="team" aria-labelledby="team-heading">
      <div className="container">
        <div className="badge-label">Team</div>
        <div className={styles.headerRow}>
          <h2 className="text-display" id="team-heading">Led by students.</h2>
          <Link href="/team" className="btn btn-outline btn-sm">
            Meet the Full Team &rarr;
          </Link>
        </div>

        <div className={styles.scrollWrapper}>
          <div className={styles.scrollContainer}>
            {leaders.map(member => {
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
                  <h3 className={styles.name}>{member.name || member.code}</h3>
                  <p className={styles.role}>{member.role}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
