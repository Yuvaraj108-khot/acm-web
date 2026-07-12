"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bg-base pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="glow-orb-purple top-0 left-1/2 -translate-x-1/2 opacity-50" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-mono px-3 py-1 rounded-full mb-6">
              OPEN SOURCE ECOSYSTEM
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Engineered for <br/>
            <span className="text-text-muted">Impact.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl font-medium"
          >
            Exploring the boundaries of high-performance computing, distributed systems, and modern web architectures.
          </motion.p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="dev-card p-8 rounded-2xl relative overflow-hidden group lg:col-span-2 cursor-pointer flex flex-col justify-between min-h-[350px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-base/10 rounded-full blur-3xl group-hover:bg-primary-base/20 transition-colors" />
            
            <div className="relative z-10 mb-8">
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 rounded-lg bg-bg-base border border-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-base"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <p className="font-mono text-sm">1.2k</p>
                    <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Stars</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-3 tracking-tight">Nexus Core</h3>
              <p className="text-text-muted font-medium max-w-lg leading-relaxed">
                A high-performance distributed orchestration engine built in Rust. Low-latency, memory-safe execution for edge computing clusters.
              </p>
            </div>
            
            <div className="flex gap-2 relative z-10">
              <span className="bg-bg-base border border-white/10 text-text-muted font-mono px-3 py-1 rounded-md text-xs">Rust</span>
              <span className="bg-bg-base border border-white/10 text-text-muted font-mono px-3 py-1 rounded-md text-xs">gRPC</span>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="dev-card p-8 rounded-2xl relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[350px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
            
            <div className="relative z-10 mb-8">
              <div className="w-10 h-10 rounded-lg bg-bg-base border border-white/10 flex items-center justify-center mb-8">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Synthesis DS</h3>
              <p className="text-text-muted font-medium leading-relaxed">
                A modern, token-based design system for institutional platforms focusing on accessibility and speed.
              </p>
            </div>
            
            <div className="flex gap-2 relative z-10">
              <span className="bg-bg-base border border-white/10 text-text-muted font-mono px-3 py-1 rounded-md text-xs">React</span>
              <span className="bg-bg-base border border-white/10 text-text-muted font-mono px-3 py-1 rounded-md text-xs">Figma</span>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
