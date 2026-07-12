"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 px-4 max-w-7xl mx-auto flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-8 text-white"
      >
        About <span className="text-accent-primary">Us</span>
      </motion.h1>
      <p className="text-gray-400 max-w-2xl text-center text-lg">
        The ACM NMAMIT chapter is dedicated to advancing computing as a science and profession.
        More content coming soon!
      </p>
    </div>
  );
}
