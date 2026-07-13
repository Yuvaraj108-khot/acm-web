'use client';

import React from 'react';
import styles from './BackgroundEffects.module.css';

export function BackgroundEffects() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.glowGreen} />
      <div className={styles.glowGold} />
      <div className={styles.beam} />
    </div>
  );
}
