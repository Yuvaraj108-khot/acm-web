'use client';

import Link from 'next/link';
import { ArrowRight, Globe, ExternalLink, Trophy } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { projects } from '@/data/projects';
import styles from './ProjectsPreview.module.css';

const featured = projects.filter(p => p.featured).slice(0, 3);

export function ProjectsPreview() {
  return (
    <section className={`section bg-secondary ${styles.section}`} id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <p className="eyebrow">Built by Members</p>
            <div className="divider" />
            <div className={styles.headerRow}>
              <h2 className="text-display" id="projects-heading">What we ship.</h2>
              <Link href="/projects" className="btn btn-outline btn-sm">
                All Projects <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className={styles.grid}>
          {featured.map((project, i) => (
            <StaggerItem key={project.id}>
              <article className={`card ${styles.card} ${i === 0 ? styles.wide : ''}`}>
                <div className={styles.imgWrap}>
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className={styles.img}
                    loading="lazy"
                  />
                  <div className={styles.imgOverlay} />
                  <span className="badge badge-muted" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    {project.category}
                  </span>
                </div>
                <div className={styles.body}>
                  {project.award && (
                    <div className={styles.award}>
                      <Trophy size={12} aria-hidden="true" />
                      <span>{project.award}</span>
                    </div>
                  )}
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className="text-sm text-secondary">{project.description}</p>
                  <div className={styles.tags} role="list" aria-label="Technologies used">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="badge badge-secondary" role="listitem">{tag}</span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="btn btn-ghost btn-sm" aria-label={`View ${project.title} on GitHub`} target="_blank" rel="noopener noreferrer">
                        <Globe size={15} aria-hidden="true" /> Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="btn btn-primary btn-sm" aria-label={`View ${project.title} live demo`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={15} aria-hidden="true" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
