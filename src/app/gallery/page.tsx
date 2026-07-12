import { AnimatedSection } from '@/components/ui/AnimatedSection';
import styles from './page.module.css';

const photos = [
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', alt: 'Members working together in a collaborative session' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', alt: 'Crowd at an ACM annual event' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80', alt: 'Students coding intensely during a hackathon' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80', alt: 'Team meeting around a whiteboard' },
  { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80', alt: 'ACM team celebrating after a competition win' },
  { src: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80', alt: 'Speaker presenting at a technical workshop' },
  { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80', alt: 'Workshop participants in a classroom setting' },
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80', alt: 'Students gathered for a club photo' },
  { src: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80', alt: 'Code on a laptop screen during an open source sprint' },
];

export const metadata = {
  title: 'Gallery',
  description: 'Photos from ACM chapter events, workshops, hackathons, and community moments.',
};

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <p className="eyebrow">Moments & Memories</p>
          <div className="divider" />
          <h1 className="text-display">Gallery</h1>
          <p className="text-subheading text-secondary" style={{ maxWidth: '44ch', marginTop: '1rem' }}>
            A visual record of workshops, hackathons, talks, and the community behind it all.
          </p>
        </AnimatedSection>

        <div className={styles.grid} role="list" aria-label="Event photo gallery">
          {photos.map((photo, i) => (
            <AnimatedSection key={i} delay={i * 0.05} className={styles.item}>
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
    </div>
  );
}
