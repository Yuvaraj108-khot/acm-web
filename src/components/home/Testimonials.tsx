'use client';

import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { testimonials } from '@/data/content';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className={`section bg-secondary ${styles.section}`} id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <AnimatedSection>
          <div className="section-header section-header--center">
            <p className="eyebrow">Community Voices</p>
            <div className="divider divider--center" />
            <h2 className="text-display" id="testimonials-heading">What members say.</h2>
          </div>
        </AnimatedSection>

        <div className={styles.carousel} role="region" aria-label="Member testimonials" aria-roledescription="carousel">
          <button
            onClick={prev}
            className={styles.navBtn}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              className={styles.slide}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              transition={{ duration: 0.35 }}
              aria-live="polite"
              aria-atomic="true"
            >
              <Quote className={styles.quoteIcon} size={32} aria-hidden="true" />
              <blockquote className={styles.quote}>
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <div className={styles.author}>
                <img
                  src={t.image}
                  alt={`Portrait of ${t.name}`}
                  className={styles.avatar}
                  loading="lazy"
                />
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                  <p className="text-xs text-muted">{t.year}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className={styles.navBtn}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots} role="tablist" aria-label="Testimonial pagination">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
