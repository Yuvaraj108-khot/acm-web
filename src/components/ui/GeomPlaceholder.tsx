'use client';

import React from 'react';

export function GeomPlaceholder({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`geom-placeholder ${dark ? 'geom-placeholder-dark' : ''}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '60px', height: '60px' }}
      >
        <rect x="10" y="10" width="80" height="80" stroke={dark ? '#333333' : '#E0E0E0'} strokeWidth="1.5" />
        <circle cx="50" cy="50" r="30" stroke={dark ? '#444444' : '#CCCCCC'} strokeWidth="1.5" />
        <path d="M 20 20 L 80 80 M 80 20 L 20 80" stroke={dark ? '#333333' : '#E0E0E0'} strokeWidth="1" />
        {/* Accent diamond in center */}
        <path d="M 50 40 L 60 50 L 50 60 L 40 50 Z" fill="var(--color-accent)" stroke="#0A0A0A" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
