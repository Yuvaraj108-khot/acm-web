'use client';

import { useState } from 'react';
import { Globe, ExternalLink, Trophy, Users, Calendar } from 'lucide-react';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { GeomPlaceholder } from '@/components/ui/GeomPlaceholder';
import styles from './page.module.css';

const categories = ['All', 'AI/ML', 'Web', 'Mobile', 'Research', 'Open Source', 'Hardware'] as const;

export default function ProjectsPage() {
  const [category, setCategory] = useState<string>('All');

  const filtered = projects.filter(p => category === 'All' || p.category === category);

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Page Hero */}
        <header className={styles.hero}>
          <span className="badge-label">Projects</span>
          <h1 className="text-hero" style={{ marginTop: '16px', marginBottom: '24px' }}>
            What We&apos;ve Built
          </h1>
        </header>

        {/* Filter chips (pill toggle pattern) */}
        <div className={styles.filters} role="group" aria-label="Filter projects by category">
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

        {/* Projects 3-column Grid */}
        <div className={styles.grid}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      {/* Project Image */}
      <div className={styles.visualWrap}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
          loading="lazy"
        />
        {/* Award Badge inside card */}
        {project.award && (
          <span className={styles.awardBadge}>
            <Trophy size={12} style={{ marginRight: '4px' }} />
            {project.award}
          </span>
        )}
      </div>

      <div className={styles.body}>
        <span className={styles.categoryLabel}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        {/* Tech Stack */}
        <div className={styles.tags} role="list" aria-label="Technologies used">
          {project.tags.map(t => (
            <span key={t} className="badge badge-muted" role="listitem">
              {t}
            </span>
          ))}
        </div>

        {/* Metadata row */}
        <div className={styles.metaRow}>
          <span>
            <Users size={13} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
            {project.teamSize} members
          </span>
          <span>
            <Calendar size={13} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
            {project.year}
          </span>
        </div>

        {/* Footer links */}
        <div className={styles.links}>
          {project.githubUrl && (
            <a href={project.githubUrl} className={styles.textLink} target="_blank" rel="noopener noreferrer">
              <Globe size={14} style={{ marginRight: '4px' }} /> GitHub &rarr;
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} className={styles.textLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} style={{ marginRight: '4px' }} /> Live Demo &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
