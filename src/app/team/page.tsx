"use client";

import { motion } from "framer-motion";

export default function TeamPage() {
  const members = [
    { 
      name: "Aravind Sharma", 
      role: "CHAIRPERSON", 
      skills: ["System Design", "Rust", "Leadership"],
      github: "aravind-s",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5AVO8s2YkIPfX63m1Sd_GnQBSjvLiKu9uJjqK8ojyHnrU-iv_xab_rKkhn6E4N7TFeESYkRj1efBJ-aUys3NxiHpxxK0j_Ikv99dzUDnEZkAtocNyI3RBWicF_FhChaPlvhfSCzMNeyqqOKN5uWpbZBM5AEVBeRUqdYTgujC2a8uFpmfxr2gRuuSQ5_889s6uKst0wqWbK5bYVm_EDLQd7QHiEx6qPUTmYmGa41fg4j_YTGcdh9sg"
    },
    { 
      name: "Mira Nair", 
      role: "VICE CHAIR", 
      skills: ["React", "UI/UX", "Product"],
      github: "mira-n",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4HRd3NIl6w4_0P2HMpjOsPIuiUE58Fuow0HPtsJricxhQuJ1JPjUyqnL-VlmSTYCi1Wok4LfibgGdXJKJV0GqyLa6lOhBbUZQCyNR1bkNnfe_K39c-RF8KRfQO2GEFQXAwmikue6vgckX7MgB_R6OQrbjv-HLuqPf0uT-T7APdvL4FPXXRNVUmCGO1OMzEXgCpNF2CQhuYAWRKHYEP4Z_WuKLxRhil8l1V-0nXKWyxedb6ig5vGvs"
    },
    { 
      name: "Rohit Varma", 
      role: "SECRETARY", 
      skills: ["Node.js", "Docker", "DevOps"],
      github: "rohit-v",
      image: ""
    },
    { 
      name: "Isha Shetty", 
      role: "WEBMASTER", 
      skills: ["Next.js", "TypeScript", "Tailwind"],
      github: "isha-s",
      image: ""
    },
  ];

  return (
    <main className="min-h-screen bg-bg-base pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section */}
        <section className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              The <span className="text-text-muted">Architects.</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto font-medium">
              A collective of engineers, researchers, and visionaries dedicated to pushing the boundaries of computing at NMAMIT.
            </p>
          </motion.div>
        </section>

        {/* Team Grid */}
        <section>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <h2 className="text-lg font-mono text-text-muted">EXECUTIVE COUNCIL '24</h2>
            <div className="text-xs text-text-muted font-mono">{members.length} MEMBERS</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="dev-card p-6 rounded-2xl group cursor-pointer"
              >
                <div className="aspect-square rounded-xl bg-bg-elevated mb-6 overflow-hidden border border-white/5 relative">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-muted font-mono text-4xl opacity-20">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <p className="text-[10px] text-primary-base font-mono font-bold tracking-widest mb-2 uppercase">{member.role}</p>
                <h3 className="text-xl font-bold mb-4">{member.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map(skill => (
                    <span key={skill} className="bg-white/5 border border-white/10 text-text-muted text-[10px] px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a href={`https://github.com/${member.github}`} className="text-text-muted hover:text-white transition-colors" title="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="#" className="text-text-muted hover:text-primary-base transition-colors" title="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recruitment CTA */}
        <section className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="dev-card p-12 md:p-24 rounded-3xl text-center relative overflow-hidden"
          >
            <div className="glow-orb-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Join the Revolution</h2>
              <p className="text-lg text-text-muted font-medium mb-10 max-w-xl mx-auto">
                We are always looking for students who prioritize craft and technical rigor. Recruitment cycles open every semester.
              </p>
              <button className="bg-white text-bg-base px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors shadow-glow-primary">
                Apply for Core '25
              </button>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
