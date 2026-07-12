"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center mt-20 relative z-10">
        
        {/* Animated Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary to-secondary opacity-10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent opacity-10 blur-[80px] rounded-full pointer-events-none -z-10 blob-shape" />
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="inline-block bg-white text-primary font-bold px-6 py-2 rounded-full mb-8 shadow-card border border-primary/20"
        >
          🚀 Welcome to the Future of Tech
        </motion.div>

        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight"
        >
          Build. Break.<br />
          <span className="gradient-text">Innovate.</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-light max-w-2xl mb-12 font-medium"
        >
          We are the ACM NMAMIT student chapter. A community of passionate developers, designers, and creators building awesome things together.
        </motion.p>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/projects">
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-4 rounded-full font-bold text-xl shadow-bouncy w-full sm:w-auto"
            >
              Explore Projects 🌟
            </motion.button>
          </Link>
          <Link href="/events">
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-full font-bold text-xl shadow-card w-full sm:w-auto"
            >
              Upcoming Events 📅
            </motion.button>
          </Link>
        </motion.div>

        {/* Bouncy Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] text-6xl hidden lg:block"
        >
          💻
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute right-[15%] top-[30%] text-6xl hidden lg:block"
        >
          🎨
        </motion.div>
        <motion.div 
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute left-[20%] bottom-[10%] text-6xl hidden lg:block"
        >
          ⚡
        </motion.div>

      </div>
    </main>
  );
}
