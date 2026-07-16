'use client';

import { useState } from 'react';
import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { events } from '@/data/events';
import type { Event } from '@/data/events';
import { GeomPlaceholder } from '@/components/ui/GeomPlaceholder';
import styles from './page.module.css';

const categories = ['All', 'Workshop', 'Hackathon', 'Talk', 'Competition', 'Social', 'Career Development', 'Coding Contest'] as const;

export default function EventsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [category, setCategory] = useState<string>('All');

  const filtered = events
    .filter(e => (tab === 'upcoming' ? !e.isPast : e.isPast))
    .filter(e => category === 'All' || e.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Page Hero */}
        <header className={styles.hero}>
          <span className="badge-label">Events</span>
          <h1 className="text-hero" style={{ marginTop: '16px', marginBottom: '24px' }}>
            Workshops, Hackathons &amp; More
          </h1>
        </header>

        {/* Filter Tabs */}
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

        {/* Category Filters */}
        <div className={styles.filters} role="group" aria-label="Filter events by category">
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${category === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid (Alternating white or dark cards) */}
        {filtered.length === 0 ? (
          <p className={styles.emptyState}>No events found matching your criteria.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map((event, index) => {
              // Alternating card layout: white/dark
              const isDark = index % 2 === 1;
              return (
                <EventCard key={event.id} event={event} isDark={isDark} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function EventCard({ event, isDark }: { event: Event; isDark: boolean }) {
  return (
    <article className={`${styles.card} ${isDark ? styles.cardDark : styles.cardLight}`}>
      {/* Event Image */}
      <div className={styles.visualWrap}>
        <img
          src={event.image}
          alt={event.title}
          className={styles.img}
          style={{ width: '100%', height: '100%', minHeight: '200px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className={styles.body}>
        <div className={styles.cardHeader}>
          {/* Status Badge */}
          <span className={`badge ${event.isPast ? 'badge-muted' : ''}`}>
            {event.isPast ? 'Completed' : 'Upcoming'}
          </span>
          <span className={styles.categoryLabel}>{event.category}</span>
        </div>

        <h2 className={styles.title}>{event.title}</h2>

        {/* Meta Info */}
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <CalendarDays size={14} style={{ marginRight: '6px' }} />
            {event.dateText || new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          {event.location && (
            <span className={styles.metaItem}>
              <MapPin size={14} style={{ marginRight: '6px' }} />
              {event.location}
            </span>
          )}
          {event.time && (
            <span className={styles.metaItem}>
              <Clock size={14} style={{ marginRight: '6px' }} />
              {event.time}
            </span>
          )}
        </div>

        <p className={styles.description}>{event.description}</p>

        {/* Speakers Section */}
        {event.speakers && event.speakers.length > 0 && (
          <div className={styles.speakers}>
            <div className={styles.speakerAvatar}>
              {event.speakers[0][0]}
            </div>
            <div>
              <p className={styles.speakerLabel}>Guest Speaker</p>
              <p className={styles.speakerName}>{event.speakers.join(', ')}</p>
            </div>
          </div>
        )}

        {/* Action Button */}
        {!event.isPast && event.registrationUrl ? (
          <a href={event.registrationUrl} className="btn btn-primary btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
            Register Now
          </a>
        ) : (
          <span className="btn btn-outline btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start', cursor: 'default', opacity: 0.5 }}>
            Completed
          </span>
        )}
      </div>
    </article>
  );
}
