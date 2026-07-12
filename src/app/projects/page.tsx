'use client';

import { useState } from 'react';
import { Globe, ExternalLink, Trophy, Users } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import styles from './page.module.css';

const categories = ['All', 'AI/ML', 'Web', 'Mobile', 'Research', 'Open Source', 'Hardware'] as const;

export default function ProjectsPage() {
  const [category, setCategory] = useState('All');

  const filtered = projects.filter(p => category === 'All' || p.category === category);

  return (
    <div className={styles.page}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <p className="eyebrow">What We Build</p>
          <div className="divider" />
          <h1 className="text-display">Projects & Achievements</h1>
          <p className="text-subheading text-secondary" style={{ maxWidth: '48ch', marginTop: '1rem' }}>
            Real products built by real students. From AI tools to hardware hacks — here is what our members have shipped.
          </p>
        </AnimatedSection>

        <div className={styles.filters} role="group" aria-label="Filter projects by category">
          {categories.map(cat => (
            <button
              key={cat}
              className={`badge ${category === cat ? 'badge-accent' : 'badge-muted'} ${styles.filterBtn}`}
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <StaggerContainer className={styles.grid}>
          {filtered.map(project => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.imgWrap}>
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className={styles.img}
          loading="lazy"
        />
        <div className={styles.overlay} />
        <span className="badge badge-muted" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          {project.category}
        </span>
      </div>
      <div className={styles.body}>
        {project.award && (
          <p className={styles.award}><Trophy size={12} aria-hidden="true" /> {project.award}</p>
        )}
        <h2 className={styles.title}>{project.title}</h2>
        <p className="text-sm text-secondary" style={{ flex: 1 }}>{project.longDescription}</p>
        <div className={styles.footer}>
          <div className={styles.tags} role="list" aria-label="Technologies">
            {project.tags.slice(0, 3).map(t => (
              <span key={t} className="badge badge-secondary" role="listitem">{t}</span>
            ))}
          </div>
          <p className="text-xs text-muted" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Users size={12} aria-hidden="true" /> {project.teamSize} members · {project.year}
          </p>
        </div>
        <div className={styles.links}>
          {project.githubUrl && (
            <a href={project.githubUrl} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
              <Globe size={14} aria-hidden="true" /> Code
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
              <ExternalLink size={14} aria-hidden="true" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
