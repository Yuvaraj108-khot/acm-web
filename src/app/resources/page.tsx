'use client';

import { useState } from 'react';
import { ExternalLink, FileText, BookOpen, Map, Layout, Wrench } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { resources } from '@/data/content';
import type { Resource } from '@/data/content';
import styles from './page.module.css';

const categories = ['All', 'Workshop', 'Guide', 'Roadmap', 'Template', 'Tool'] as const;

const fileTypeIcon = { PDF: FileText, Notion: BookOpen, GitHub: Map, Slides: Layout, Video: Wrench };

const fileTypeLabel = {
  PDF: '📄 PDF',
  Notion: '📝 Notion',
  GitHub: '🔗 GitHub',
  Slides: '🖥️ Slides',
  Video: '🎥 Video',
};

export default function ResourcesPage() {
  const [category, setCategory] = useState('All');

  const filtered = resources.filter(r => category === 'All' || r.category === category);
  const featured = resources.filter(r => r.featured);

  return (
    <div className={styles.page}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <p className="eyebrow">Learning & Materials</p>
          <div className="divider" />
          <h1 className="text-display">Resources</h1>
          <p className="text-subheading text-secondary" style={{ maxWidth: '48ch', marginTop: '1rem' }}>
            Workshop slides, guides, roadmaps, and templates curated by ACM members. Free to access, always growing.
          </p>
        </AnimatedSection>

        {/* Featured */}
        <section className={styles.featuredSection} aria-labelledby="featured-heading">
          <h2 className={styles.sectionLabel} id="featured-heading">Featured Resources</h2>
          <StaggerContainer className={styles.featuredGrid}>
            {featured.map(resource => (
              <StaggerItem key={resource.id}>
                <ResourceCard resource={resource} featured />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* All Resources */}
        <section aria-labelledby="all-resources-heading">
          <div className={styles.filterRow}>
            <h2 className={styles.sectionLabel} id="all-resources-heading">All Resources</h2>
            <div className={styles.filters} role="group" aria-label="Filter by category">
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
          </div>
          <StaggerContainer className={styles.grid}>
            {filtered.map(resource => (
              <StaggerItem key={resource.id}>
                <ResourceCard resource={resource} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </div>
  );
}

function ResourceCard({ resource: r, featured }: { resource: Resource; featured?: boolean }) {
  return (
    <article className={`card ${styles.card} ${featured ? styles.featuredCard : ''}`}>
      <div className={styles.body}>
        <div className={styles.topRow}>
          <span className="badge badge-muted">{r.category}</span>
          {r.fileType && (
            <span className="text-xs text-muted">{fileTypeLabel[r.fileType]}</span>
          )}
        </div>
        <h2 className={styles.title}>{r.title}</h2>
        <p className="text-sm text-secondary">{r.description}</p>
        <div className={styles.tags} role="list" aria-label="Topics">
          {r.tags.map(tag => <span key={tag} className="badge badge-secondary" role="listitem">{tag}</span>)}
        </div>
        <div className={styles.footer}>
          <time className="text-xs text-muted" dateTime={r.date}>
            {new Date(r.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </time>
          <a
            href={r.link}
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${r.title}`}
          >
            Open <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
