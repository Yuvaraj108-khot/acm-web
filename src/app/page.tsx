"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-[200vh] bg-bg-base overflow-x-hidden">
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        
        {/* Soft Glowing Orbs */}
        <div className="glow-orb-blue top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2" />
        <div className="glow-orb-purple top-1/3 right-1/4 -translate-y-1/2 translate-x-1/2" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block border border-white/10 bg-white/5 backdrop-blur-md text-text-muted text-xs font-mono px-3 py-1 rounded-full mb-8">
              ACM NMAMIT 2024
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            Build the <br className="hidden md:block" />
            <span className="gradient-text-accent">Impossible.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 font-medium"
          >
            The definitive platform for the next generation of engineers.
            Join a community dedicated to shipping high-quality software, mastering algorithms, and exploring the frontiers of technology.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <button className="w-full bg-text-title text-bg-base px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors shadow-glow-primary">
                Explore Projects
              </button>
            </Link>
            <Link href="/events" className="w-full sm:w-auto">
              <button className="w-full bg-transparent border border-white/10 text-text-body px-8 py-3 rounded-md font-medium hover:bg-white/5 transition-colors">
                View Schedule
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Developer Universe (Parallax) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          <motion.div 
            animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute top-[20%] left-[15%] hidden lg:block"
          >
            <div className="glass-panel p-4 rounded-lg w-48 text-xs font-mono text-text-muted">
              <div className="flex gap-1 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
              &gt; npm run dev<br/>
              <span className="text-primary-base">ready</span> - started server on 0.0.0.0:3000, url: http://localhost:3000
            </div>
          </motion.div>

          <motion.div 
            animate={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
            transition={{ type: "spring", stiffness: 40, damping: 25 }}
            className="absolute top-[30%] right-[10%] hidden lg:block"
          >
            <div className="glass-panel p-4 rounded-lg w-56 text-xs text-text-muted shadow-glow-accent">
              <div className="font-bold text-text-title mb-1">Git Commit</div>
              <div className="font-mono opacity-60">feat: implement CRED aesthetic</div>
              <div className="text-[10px] mt-2 border-t border-white/10 pt-2 text-green-400">+ 12 files changed</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ x: mousePosition.x * 0.5, y: mousePosition.y * -2 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="absolute bottom-[25%] left-[25%] hidden lg:block"
          >
            <div className="glass-panel p-4 rounded-lg w-40 flex items-center justify-center gap-3">
              <div className="w-6 h-6 rounded-md bg-[#2563EB]/20 flex items-center justify-center border border-[#2563EB]/50 text-[#2563EB]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div className="text-xs font-medium">Kubernetes</div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-text-muted to-transparent"></div>
        </motion.div>

      </section>

      {/* Placeholder for Content below Hero */}
      <section className="h-screen bg-bg-elevated border-t border-white/5 relative z-10 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Engineering Excellence</h2>
          <p className="text-text-muted max-w-lg mx-auto">This section will contain the Apple-style scroll reveals mapping to the Finite Loop Club architecture.</p>
        </div>
      </section>

    </main>
  );
}
