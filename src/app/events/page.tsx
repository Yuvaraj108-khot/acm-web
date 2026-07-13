'use client';

import { useState } from 'react';
import { CalendarDays, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { events } from '@/data/events';
import type { Event } from '@/data/events';
import styles from './page.module.css';

const categories = ['All', 'Workshop', 'Hackathon', 'Talk', 'Competition', 'Social', 'Career Development', 'Coding Contest'] as const;

export default function EventsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [category, setCategory] = useState<string>('All');

  const filtered = events
    .filter(e => (tab === 'upcoming' ? !e.isPast : e.isPast))
    .filter(e => category === 'All' || e.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // sort past events newer first (or custom order)

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <AnimatedSection className={styles.header}>
          <p className="eyebrow">Chapter Events</p>
          <div className="divider" />
          <h1 className="text-display">Events & Workshops</h1>
          <p className="text-subheading text-secondary" style={{ maxWidth: '44ch', marginTop: '1rem' }}>
            From hands-on workshops to competitive hackathons — there is always something happening at ACM.
          </p>
        </AnimatedSection>

        {/* Tab bar */}
        <div className={styles.tabs} role="tablist" aria-label="Event filter by time">
          {(['upcoming', 'past'] as const).map(t => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
              onClick={() => setTab(t)}
            >
              {t === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
            </button>
          ))}
        </div>

        {/* Category filter */}
        <div className={styles.filters} role="group" aria-label="Filter events by category">
          {categories.map(cat => (
            <button
              key={cat}
              className={`badge ${category === cat ? 'badge-accent' : 'badge-muted'} ${styles.filterBtn}`}
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events grid */}
        {filtered.length === 0 ? (
          <p className="text-secondary" style={{ textAlign: 'center', padding: '4rem 0' }}>
            No events found for this filter.
          </p>
        ) : (
          <StaggerContainer className={styles.grid}>
            {filtered.map(event => (
              <StaggerItem key={event.id} className={styles.gridItem}>
                <EventCard event={event} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  // Helper to resolve CSS classes for categories
  const getCategoryClass = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'career development': return styles.careerDevelopment;
      case 'workshop': return styles.workshop;
      case 'coding contest': return styles.codingContest;
      case 'hackathon': return styles.hackathon;
      case 'talk': return styles.talk;
      case 'competition': return styles.competition;
      case 'social': return styles.social;
      default: return '';
    }
  };

  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.imgWrap}>
        <img src={event.image} alt={`${event.title}`} className={styles.img} loading="lazy" />
        <span className={styles.statusBadge}>
          <span className={`${styles.statusDot} ${event.isPast ? styles.completedDot : styles.upcomingDot}`} />
          {event.isPast ? 'Completed' : 'Upcoming'}
        </span>
      </div>
      <div className={styles.body}>
        <div>
          <span className={`badge ${styles.categoryTag} ${getCategoryClass(event.category)}`}>
            {event.category}
          </span>
        </div>
        <h2 className={styles.title}>{event.title}</h2>
        <div className={styles.meta}>
          <span className={styles.dateMeta}>
            <CalendarDays size={13} aria-hidden="true" />
            {event.dateText || new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          {event.time && (
            <span><Clock size={13} aria-hidden="true" />{event.time}</span>
          )}
          {event.location && (
            <span><MapPin size={13} aria-hidden="true" />{event.location}</span>
          )}
          {event.attendees && (
            <span><Users size={13} aria-hidden="true" />{event.attendees} attendees</span>
          )}
        </div>
        <p className={`text-sm text-secondary ${styles.description}`}>{event.description}</p>
        {event.speakers && (
          <p className={`text-xs text-muted ${styles.speakers}`}>Speakers: {event.speakers.join(', ')}</p>
        )}
        {event.registrationUrl && !event.isPast && (
          <a href={event.registrationUrl} className="btn btn-primary btn-sm" style={{ marginTop: 'auto' }}>
            Register Now <ArrowRight size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
