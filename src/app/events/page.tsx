"use client";

import { motion } from "framer-motion";

export default function EventsPage() {
  const events = [
    { title: "Career Connect", date: "Sep 15", tag: "Workshop", color: "text-primary-base border-primary-base", bg: "bg-primary-base/10" },
    { title: "Great Code Auction", date: "Oct 02", tag: "Competition", color: "text-primary-base border-primary-base", bg: "bg-primary-base/10" },
    { title: "The Interview Room", date: "Oct 20", tag: "Mock Interview", color: "text-accent border-accent", bg: "bg-accent/10" },
    { title: "Manual Testing Webinar", date: "Nov 05", tag: "Webinar", color: "text-highlight border-highlight", bg: "bg-highlight/10" },
  ];

  return (
    <main className="min-h-screen bg-bg-base pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="glow-orb-blue top-0 right-1/4 -translate-x-1/2 opacity-30" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Upcoming <span className="text-text-muted">Events.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-text-muted text-xl max-w-2xl font-medium"
          >
            Join us for workshops, hackathons, and webinars designed to level up your technical skills.
          </motion.p>
        </header>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="dev-card p-8 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/10 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className={`font-mono font-bold px-3 py-1 rounded-md text-[10px] uppercase tracking-wider border ${event.bg} ${event.color}`}>
                    {event.tag}
                  </span>
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                    {event.date}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:translate-x-2 transition-transform">{event.title}</h3>
              </div>
              
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/5">
                <p className="text-sm font-medium text-text-muted">Register Now</p>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform ${event.color}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
