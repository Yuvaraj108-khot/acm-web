"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamPage() {
  const members = [
    { name: "Rohit Varma", role: "SECRETARY", color: "from-primary to-primary/80" },
    { name: "Ananya Hegde", role: "TREASURER", color: "from-secondary to-secondary/80" },
    { name: "Karan Bhat", role: "MEMBERSHIP CHAIR", color: "from-accent to-accent/80" },
    { name: "Isha Shetty", role: "WEBMASTER", color: "from-primary to-secondary" },
  ];

  return (
    <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Hero Section */}
      <section className="mb-24 text-center">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-text-dark"
        >
          The <span className="gradient-text">Architects.</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-text-light max-w-2xl mx-auto font-medium"
        >
          A collective of engineers, researchers, and visionaries dedicated to pushing the boundaries of computing at NMAMIT.
        </motion.p>
      </section>

      {/* The Chairs */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div 
            whileHover={{ y: -10, rotate: -2 }}
            className="bg-white p-6 rounded-[2.5rem] shadow-card hover:shadow-card-hover transition-all relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] pointer-events-none -z-10 group-hover:scale-105 transition-transform" />
            <div className="aspect-[4/5] rounded-[2rem] bg-slate-200 mb-6 overflow-hidden relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5AVO8s2YkIPfX63m1Sd_GnQBSjvLiKu9uJjqK8ojyHnrU-iv_xab_rKkhn6E4N7TFeESYkRj1efBJ-aUys3NxiHpxxK0j_Ikv99dzUDnEZkAtocNyI3RBWicF_FhChaPlvhfSCzMNeyqqOKN5uWpbZBM5AEVBeRUqdYTgujC2a8uFpmfxr2gRuuSQ5_889s6uKst0wqWbK5bYVm_EDLQd7QHiEx6qPUTmYmGa41fg4j_YTGcdh9sg" alt="Chairperson" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="px-4">
              <span className="bg-primary/10 text-primary font-bold px-4 py-1 rounded-full text-sm mb-4 inline-block">CHAIRPERSON</span>
              <h3 className="text-4xl font-black mb-2">Aravind Sharma</h3>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10, rotate: 2 }}
            className="bg-white p-6 rounded-[2.5rem] shadow-card hover:shadow-card-hover transition-all relative group md:mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-[2.5rem] pointer-events-none -z-10 group-hover:scale-105 transition-transform" />
            <div className="aspect-[4/5] rounded-[2rem] bg-slate-200 mb-6 overflow-hidden relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4HRd3NIl6w4_0P2HMpjOsPIuiUE58Fuow0HPtsJricxhQuJ1JPjUyqnL-VlmSTYCi1Wok4LfibgGdXJKJV0GqyLa6lOhBbUZQCyNR1bkNnfe_K39c-RF8KRfQO2GEFQXAwmikue6vgckX7MgB_R6OQrbjv-HLuqPf0uT-T7APdvL4FPXXRNVUmCGO1OMzEXgCpNF2CQhuYAWRKHYEP4Z_WuKLxRhil8l1V-0nXKWyxedb6ig5vGvs" alt="Vice Chair" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="px-4">
              <span className="bg-secondary/10 text-secondary font-bold px-4 py-1 rounded-full text-sm mb-4 inline-block">VICE CHAIR</span>
              <h3 className="text-4xl font-black mb-2">Mira Nair</h3>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Core Members */}
      <section className="mb-32">
        <h2 className="text-5xl font-black mb-12 text-center">EXECUTIVE COUNCIL</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className={`p-6 rounded-[2rem] text-white bg-gradient-to-br ${member.color} shadow-bouncy flex flex-col justify-end min-h-[300px] relative overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
              <p className="font-bold text-sm mb-2 opacity-90">{member.role}</p>
              <h4 className="text-3xl font-black">{member.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent rounded-[3rem] p-12 md:p-24 text-center text-white shadow-bouncy relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"
        />
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-6">Join the Revolution</h2>
          <p className="text-xl font-medium mb-12 max-w-2xl mx-auto opacity-90">
            We are always looking for students who prioritize craft and technical rigor. Recruitment cycles open every semester.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-text-dark px-10 py-4 rounded-full font-bold text-xl shadow-lg"
          >
            Apply for Core '25 🚀
          </motion.button>
        </div>
      </section>

    </main>
  );
}
