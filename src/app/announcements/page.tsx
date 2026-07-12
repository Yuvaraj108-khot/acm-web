'use client';

import { useState } from 'react';
import { Bell, Trophy, Info, BookOpen, Pin, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { announcements } from '@/data/content';
import type { Announcement } from '@/data/content';
import styles from './page.module.css';

const categories = ['All', 'News', 'Achievement', 'Opportunity', 'Notice'] as const;

const categoryIcon = {
  News: Bell,
  Achievement: Trophy,
  Opportunity: ArrowRight,
  Notice: Info,
};

export default function AnnouncementsPage() {
  const [filter, setFilter] = useState('All');

  const filtered = announcements.filter(a => filter === 'All' || a.category === filter);

  return (
    <div className={styles.page}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <p className="eyebrow">Latest Updates</p>
          <div className="divider" />
          <h1 className="text-display">Announcements</h1>
          <p className="text-subheading text-secondary" style={{ maxWidth: '44ch', marginTop: '1rem' }}>
            Stay in the loop with news, opportunities, achievements, and notices from the ACM chapter.
          </p>
        </AnimatedSection>

        <div className={styles.filters} role="group" aria-label="Filter announcements by category">
          {categories.map(cat => (
            <button
              key={cat}
              className={`badge ${filter === cat ? 'badge-accent' : 'badge-muted'} ${styles.filterBtn}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <StaggerContainer className={styles.list}>
          {filtered.map(announcement => (
            <StaggerItem key={announcement.id}>
              <AnnouncementCard announcement={announcement} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}

function AnnouncementCard({ announcement: a }: { announcement: Announcement }) {
  const Icon = categoryIcon[a.category] || Bell;

  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.iconCol}>
        <div className={`${styles.icon} ${styles[`icon${a.category}`]}`} aria-hidden="true">
          <Icon size={18} />
        </div>
        {a.pinned && (
          <span className={styles.pinned} title="Pinned announcement">
            <Pin size={12} aria-label="Pinned" />
          </span>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={`badge ${a.category === 'Achievement' ? 'badge-accent' : a.category === 'Opportunity' ? 'badge-secondary' : 'badge-muted'}`}>
            {a.category}
          </span>
          <time className="text-xs text-muted" dateTime={a.date}>
            {new Date(a.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
        <h2 className={styles.title}>{a.title}</h2>
        <p className="text-sm text-secondary">{a.content}</p>
        {a.link && (
          <a href={a.link} className="btn btn-outline btn-sm" style={{ marginTop: 'var(--space-2)', alignSelf: 'flex-start' }}>
            {a.linkLabel ?? 'Learn More'} <ArrowRight size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
