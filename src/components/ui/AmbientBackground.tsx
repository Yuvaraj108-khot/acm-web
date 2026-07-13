'use client';

import { useEffect, useRef } from 'react';
import styles from './AmbientBackground.module.css';

interface Particle {
  x: number;
  y: number;
  speed: number;
  char: string;
  opacity: number;
  size: number;
}

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

    // Generate falling code particles
    const particles: Particle[] = [];
    const particleCount = 40;
    const chars = '01<>/\\{}+-*#@%[]$!?';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-populate particles based on width
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 0.5 + Math.random() * 1.5,
          char: chars[Math.floor(Math.random() * chars.length)],
          opacity: 0.12 + Math.random() * 0.18,
          size: 10 + Math.floor(Math.random() * 14)
        });
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.003;

      // 1. Draw drifting radial blooms
      const blooms = [
        { x: 0.2 + 0.05 * Math.sin(t), y: 0.3 + 0.04 * Math.cos(t * 0.7), r: 0.35, color: '197,140,63' }, // Copper/Gold
        { x: 0.75 + 0.06 * Math.cos(t * 0.8), y: 0.6 + 0.05 * Math.sin(t * 0.9), r: 0.30, color: '140,176,197' }, // Acc secondary
      ];

      blooms.forEach(({ x, y, r, color }) => {
        const cx = canvas.width * x;
        const cy = canvas.height * y;
        const radius = Math.min(canvas.width, canvas.height) * r;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(${color}, 0.07)`);
        grad.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // 2. Draw Subtle Tech Grid Lines
      ctx.strokeStyle = 'rgba(197, 140, 63, 0.07)'; // more visible copper grid
      ctx.lineWidth = 1;
      const gridSize = 60;
      
      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal grid lines with a scrolling offset
      const gridOffset = (t * 20) % gridSize;
      for (let y = gridOffset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 3. Draw Cyber Binary / Code Rain Particles
      ctx.fillStyle = 'rgba(197, 140, 63, 1)'; // copper color
      particles.forEach((p) => {
        ctx.font = `500 ${p.size}px monospace`;
        ctx.fillStyle = `rgba(197, 140, 63, ${p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);
        
        // Update particle position
        p.y += p.speed;
        
        // Slowly change characters
        if (Math.random() < 0.01) {
          p.char = chars[Math.floor(Math.random() * chars.length)];
        }
        
        // Reset if it goes off bottom
        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
          p.speed = 0.5 + Math.random() * 1.5;
        }
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
