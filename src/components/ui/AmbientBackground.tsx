'use client';

import { useEffect, useRef } from 'react';
import styles from './AmbientBackground.module.css';

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.003;

      // Draw 2–3 slow drifting radial blooms
      const blooms = [
        { x: 0.2 + 0.05 * Math.sin(t), y: 0.3 + 0.04 * Math.cos(t * 0.7), r: 0.35, color: '196,127,44' },
        { x: 0.75 + 0.06 * Math.cos(t * 0.8), y: 0.6 + 0.05 * Math.sin(t * 0.9), r: 0.30, color: '91,143,168' },
        { x: 0.5 + 0.04 * Math.sin(t * 1.2), y: 0.85 + 0.03 * Math.cos(t), r: 0.25, color: '196,127,44' },
      ];

      blooms.forEach(({ x, y, r, color }) => {
        const cx = canvas.width * x;
        const cy = canvas.height * y;
        const radius = Math.min(canvas.width, canvas.height) * r;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(${color}, 0.06)`);
        grad.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-hidden="true"
      />
      <div className={styles.noise} aria-hidden="true" />
    </>
  );
}
