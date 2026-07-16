'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';
import { GeomPlaceholder } from '@/components/ui/GeomPlaceholder';
import styles from './ProjectsPreview.module.css';

export function ProjectsPreview() {
  const featured = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="badge-label">Projects</div>
        <div className={styles.headerRow}>
          <h2 className="text-display" id="projects-heading">What we ship.</h2>
          <Link href="/projects" className="btn btn-outline btn-sm">
            All Projects &rarr;
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((project) => (
            <article key={project.id} className={styles.card}>
              {/* Real project image */}
              <div className={styles.imgWrap} style={{ marginBottom: '16px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
                  loading="lazy"
                />
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                
                {/* Tech stack tags */}
                <div className={styles.tags}>
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="badge badge-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/projects" className={styles.viewLink}>
                  View Project &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
