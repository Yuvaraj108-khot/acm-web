"use client";

import { motion } from "framer-motion";

export default function EventsPage() {
  const events = [
    { title: "Career Connect", date: "Sep 15", tag: "Workshop", color: "text-primary border-primary", bg: "bg-primary/10" },
    { title: "Great Code Auction", date: "Oct 02", tag: "Competition", color: "text-secondary border-secondary", bg: "bg-secondary/10" },
    { title: "The Interview Room", date: "Oct 20", tag: "Mock Interview", color: "text-accent border-accent", bg: "bg-accent/10" },
    { title: "Manual Testing Webinar", date: "Nov 05", tag: "Webinar", color: "text-emerald-500 border-emerald-500", bg: "bg-emerald-500/10" },
  ];

  return (
    <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header Section */}
      <header className="mb-20 text-center relative z-10">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-secondary opacity-5 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          Upcoming <span className="gradient-text">Events.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-text-light text-xl max-w-2xl mx-auto font-medium"
        >
          Join us for workshops, hackathons, and webinars designed to level up your technical skills.
        </motion.p>
      </header>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-card-hover border-2 border-transparent transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-12">
              <span className={`font-bold px-4 py-1 rounded-full text-sm ${event.bg} ${event.color}`}>
                {event.tag}
              </span>
              <span className="font-bold text-text-light bg-slate-100 px-4 py-1 rounded-full text-sm">
                {event.date}
              </span>
            </div>
            
            <h3 className="text-4xl font-black mb-4 group-hover:translate-x-2 transition-transform">{event.title}</h3>
            
            <div className="flex justify-between items-center mt-8">
              <p className="text-text-light font-medium">Register Now</p>
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center group-hover:scale-110 transition-transform ${event.color}`}>
                →
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  );
}
