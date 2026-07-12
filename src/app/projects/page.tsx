"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header Section */}
      <header className="mb-20 text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary opacity-5 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-accent/10 text-accent font-bold px-4 py-2 rounded-full mb-6"
        >
          OPEN SOURCE ECOSYSTEM
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          Engineered for <br/>
          <span className="gradient-text">Impact.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-light text-xl max-w-2xl mx-auto font-medium"
        >
          Exploring the boundaries of high-performance computing, distributed systems, and modern web architectures.
        </motion.p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Project 1 */}
        <motion.div 
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden group lg:col-span-2"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
          
          <div className="flex justify-between items-start mb-6">
            <span className="bg-primary/10 text-primary font-bold px-4 py-1 rounded-full text-sm">Flagship</span>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="font-bold text-xl">1.2k</p>
                <p className="text-xs text-text-light font-bold uppercase">Stars</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-4xl font-black mb-4">NEXUS CORE</h3>
          <p className="text-text-light font-medium mb-8 max-w-lg">
            A high-performance distributed orchestration engine built in Rust. Low-latency, memory-safe execution for edge computing clusters.
          </p>
          
          <div className="flex gap-3">
            <span className="bg-slate-100 text-slate-600 font-bold px-4 py-2 rounded-xl text-sm">Rust</span>
            <span className="bg-slate-100 text-slate-600 font-bold px-4 py-2 rounded-xl text-sm">gRPC</span>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-secondary/20 transition-all cursor-pointer relative overflow-hidden group"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors" />
          
          <span className="bg-secondary/10 text-secondary font-bold px-4 py-1 rounded-full text-sm mb-6 inline-block">UI/UX</span>
          
          <h3 className="text-3xl font-black mb-4">SYNTHESIS DS</h3>
          <p className="text-text-light font-medium mb-8">
            A modern, token-based design system for institutional platforms focusing on accessibility and speed.
          </p>
          
          <div className="flex gap-3">
            <span className="bg-slate-100 text-slate-600 font-bold px-4 py-2 rounded-xl text-sm">Figma</span>
            <span className="bg-slate-100 text-slate-600 font-bold px-4 py-2 rounded-xl text-sm">React</span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div 
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-card-hover border-2 border-transparent hover:border-accent/20 transition-all cursor-pointer relative overflow-hidden group"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
          
          <span className="bg-accent/10 text-accent font-bold px-4 py-1 rounded-full text-sm mb-6 inline-block">Graphics</span>
          
          <h3 className="text-3xl font-black mb-4">PRISM RENDER</h3>
          <p className="text-text-light font-medium mb-8">
            Real-time ray tracing experiments running directly in the browser via WebGL 2.0.
          </p>
          
          <div className="flex gap-3">
            <span className="bg-slate-100 text-slate-600 font-bold px-4 py-2 rounded-xl text-sm">WebGL</span>
            <span className="bg-slate-100 text-slate-600 font-bold px-4 py-2 rounded-xl text-sm">GLSL</span>
          </div>
        </motion.div>

      </div>

    </main>
  );
}
