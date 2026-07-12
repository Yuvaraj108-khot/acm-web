'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import styles from './GalleryPreview.module.css';

const photos = [
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', alt: 'Members collaborating at a workshop session' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Audience at an ACM speaker event' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80', alt: 'Students coding during a hackathon' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80', alt: 'Team discussion around a whiteboard' },
  { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80', alt: 'Members celebrating a hackathon win' },
  { src: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600&q=80', alt: 'Workshop presenter on stage' },
];

export function GalleryPreview() {
  return (
    <section className="section" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <AnimatedSection>
          <div className="section-header section-header--center">
            <p className="eyebrow">Moments</p>
            <div className="divider divider--center" />
            <h2 className="text-display" id="gallery-heading">Life at ACM.</h2>
          </div>
        </AnimatedSection>

        <div className={styles.grid} role="list" aria-label="Gallery photos">
          {photos.map((photo, i) => (
            <AnimatedSection key={i} delay={i * 0.06} className={`${styles.item} ${i === 0 ? styles.tall : ''} ${i === 3 ? styles.wide : ''}`}>
              <div className={styles.imgWrap} role="listitem">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={styles.img}
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
