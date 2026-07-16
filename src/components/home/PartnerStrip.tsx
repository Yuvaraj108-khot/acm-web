'use client';

import React from 'react';

export function PartnerStrip() {
  const partners = [
    'ACM GLOBAL',
    'UNIVERSITY CS DEPT',
    'TECH SPONSOR CORP',
    'NATIONAL INNOVATION LAB',
    'DEV COMMUNITY NETWORK'
  ];

  return (
    <section style={{ backgroundColor: '#F5F5F5', padding: '40px 0', borderBottom: '1px solid #E0E0E0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#888888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
          Trusted & recognized by
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '24px', opacity: 0.5 }}>
          {partners.map(partner => (
            <span
              key={partner}
              style={{
                fontFamily: 'monospace',
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#0A0A0A',
                letterSpacing: '0.05em'
              }}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
