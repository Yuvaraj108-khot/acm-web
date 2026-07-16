'use client';

import { testimonials } from '@/data/content';
import styles from './Testimonials.module.css';

export function Testimonials() {
  // Use first 3 testimonials for a clean 3-column layout
  const previewTestimonials = testimonials.slice(0, 3);

  return (
    <section className={styles.section} id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="badge-label">Testimonials</div>
        <div className={styles.headerRow}>
          <h2 className="text-display" id="testimonials-heading">What members say.</h2>
        </div>

        <div className={styles.grid}>
          {previewTestimonials.map((t) => (
            <article key={t.id} className={styles.card}>
              <blockquote className={styles.quote}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <h4 className={styles.name}>{t.name}</h4>
                <p className={styles.role}>{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
