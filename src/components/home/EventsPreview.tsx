'use client';

import Link from 'next/link';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { events } from '@/data/events';
import styles from './EventsPreview.module.css';

const upcoming = events.filter(e => !e.isPast).slice(0, 3);

export function EventsPreview() {
  return (
    <section className="section" id="events" aria-labelledby="events-heading">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <p className="eyebrow">Upcoming</p>
            <div className="divider" />
            <div className={styles.headerRow}>
              <h2 className="text-display" id="events-heading">What's on.</h2>
              <Link href="/events" className="btn btn-outline btn-sm" aria-label="View all events">
                All Events <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className={styles.grid} staggerChildren={0.12}>
          {upcoming.map((event, i) => (
            <StaggerItem key={event.id} className={styles.gridItem}>
              <article className={`card ${styles.eventCard} ${i === 0 ? styles.featured : ''}`}>
                <div className={styles.imgWrap}>
                  <img
                    src={event.image}
                    alt={`${event.title} event`}
                    className={styles.img}
                    loading="lazy"
                  />
                  <span className={`badge badge-accent ${styles.categoryBadge}`}>{event.category}</span>
                </div>
                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <CalendarDays size={13} aria-hidden="true" />
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className={styles.metaItem}>
                      <MapPin size={13} aria-hidden="true" />
                      {event.location}
                    </span>
                  </div>
                  <h3 className={styles.title}>{event.title}</h3>
                  <p className={`text-sm text-secondary ${styles.desc}`}>{event.description}</p>
                  {event.registrationUrl && (
                    <a href={event.registrationUrl} className="btn btn-primary btn-sm" style={{ marginTop: 'auto' }}>
                      Register <ArrowRight size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
