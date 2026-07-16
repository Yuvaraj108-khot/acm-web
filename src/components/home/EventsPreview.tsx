'use client';

import Link from 'next/link';
import { CalendarDays, MapPin } from 'lucide-react';
import { events } from '@/data/events';
import { GeomPlaceholder } from '@/components/ui/GeomPlaceholder';
import styles from './EventsPreview.module.css';

export function EventsPreview() {
  // Get 4 events to showcase checkerboard pattern
  const previewEvents = events.slice(0, 4);

  // Checkerboard pattern for 4 cards: White, Dark, Dark, White
  const cardTypes = ['light', 'dark', 'dark', 'light'];

  return (
    <section className={styles.section} id="events" aria-labelledby="events-heading">
      <div className="container">
        <div className="badge-label">Events</div>
        <div className={styles.headerRow}>
          <h2 className="text-display" id="events-heading">What&apos;s on.</h2>
          <Link href="/events" className="btn btn-outline btn-sm">
            View All Events &rarr;
          </Link>
        </div>

        <div className={styles.grid}>
          {previewEvents.map((event, index) => {
            const isDark = cardTypes[index % 4] === 'dark';
            return (
              <article
                key={event.id}
                className={`${styles.card} ${isDark ? styles.cardDark : styles.cardLight}`}
              >
                {/* Category badge */}
                <div className={styles.cardHeader}>
                  <span className="badge">{event.category}</span>
                </div>

                {/* Real event image */}
                <div className={styles.imgWrap}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className={styles.img}
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '16px' }}
                    loading="lazy"
                  />
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.date}>
                    <CalendarDays size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <h3 className={styles.title}>{event.title}</h3>
                  <p className={styles.desc}>{event.description}</p>
                  
                  {event.registrationUrl && !event.isPast ? (
                    <a href={event.registrationUrl} className={styles.registerLink}>
                      Register &rarr;
                    </a>
                  ) : (
                    <span className={styles.completedLabel}>Completed</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
