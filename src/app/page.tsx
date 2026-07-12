"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <main className="bg-bg-base overflow-x-hidden text-text-body">
      
      {/* Cinematic Hero Section */}
      <section ref={containerRef} className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-6 pt-16">
        
        {/* Animated Background Mesh & Noise */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <motion.div style={{ y: y1 }} className="glow-orb-blue top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 opacity-60" />
          <motion.div style={{ y: y2 }} className="glow-orb-purple top-1/3 right-1/4 -translate-y-1/2 translate-x-1/2 opacity-60" />
        </div>
        
        {/* Content */}
        <motion.div style={{ opacity: opacityFade }} className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-block border border-white/10 bg-white/5 backdrop-blur-md text-text-muted text-xs font-mono px-4 py-2 rounded-full tracking-widest uppercase">
              ACM NMAMIT
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[1.05] mb-8 text-white"
          >
            Code. Create.<br className="hidden md:block" />
            <span className="gradient-text-accent">Innovate. Lead.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Official ACM Student Chapter dedicated to empowering students through projects, hackathons, research, open source, and industry collaboration.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-white text-bg-base px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors shadow-glow-primary">
              Join ACM
            </button>
            <Link href="/events" className="w-full sm:w-auto">
              <button className="w-full bg-transparent border border-white/10 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/5 transition-colors">
                Explore Events
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Developer Universe (Parallax) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          <motion.div 
            animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute top-[20%] left-[10%] hidden lg:block"
          >
            <div className="glass-panel p-4 rounded-xl w-64 text-xs font-mono text-text-muted border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path></svg>
                <span className="text-white">Terminal</span>
              </div>
              <span className="text-primary-base">~</span> $ cargo build --release<br/>
              <span className="text-green-400">Compiling</span> nexus_core v1.0.0<br/>
              <span className="text-green-400">Finished</span> release [optimized] target(s) in 2.45s
            </div>
          </motion.div>

          <motion.div 
            animate={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
            transition={{ type: "spring", stiffness: 40, damping: 25 }}
            className="absolute top-[30%] right-[10%] hidden lg:block"
          >
            <div className="glass-panel p-4 rounded-xl w-56 text-xs text-text-muted shadow-glow-accent border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <div className="font-bold text-white">AI Agent Active</div>
              </div>
              <div className="font-mono opacity-80 text-[10px]">Processing 45,021 parameters...</div>
              <div className="h-1 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-accent"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ x: mousePosition.x * 0.5, y: mousePosition.y * -2 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="absolute bottom-[20%] left-[20%] hidden lg:block"
          >
            <div className="glass-panel px-4 py-3 rounded-xl flex items-center justify-center gap-3 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center border border-[#F59E0B]/50 text-[#F59E0B]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              </div>
              <div>
                <div className="text-xs font-bold text-white">Database Replicated</div>
                <div className="text-[10px] font-mono text-text-muted">99.99% Uptime</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-bg-elevated">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <span className="text-primary-base font-mono text-sm uppercase tracking-widest mb-4 block">About ACM</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Empowering the next generation of technologists.</h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                We are a collective of driven engineers, designers, and researchers at NMAM Institute of Technology. Our mission is to bridge the gap between academia and industry by fostering a culture of rigorous engineering and open-source contribution.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm font-mono text-text-muted uppercase">Active Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-sm font-mono text-text-muted uppercase">Projects Shipped</div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-base/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative h-full min-h-[400px] rounded-3xl border border-white/10 bg-bg-base overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="p-8 h-full flex flex-col justify-end">
                  <div className="glass-panel p-6 rounded-2xl">
                    <h3 className="text-white font-bold text-xl mb-2">Our Vision</h3>
                    <p className="text-text-muted text-sm">To be the premier technical community globally, driving innovation and excellence in computer science.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIG Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">Special Interest Groups</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Master your craft.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Artificial Intelligence", icon: "🧠", color: "text-purple-400" },
              { name: "Web Development", icon: "🌐", color: "text-blue-400" },
              { name: "Cyber Security", icon: "🔒", color: "text-green-400" },
              { name: "Cloud Computing", icon: "☁️", color: "text-sky-400" },
              { name: "Open Source", icon: "🚀", color: "text-orange-400" },
              { name: "UI/UX Design", icon: "✨", color: "text-pink-400" }
            ].map((sig, i) => (
              <motion.div 
                key={sig.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="dev-card p-8 rounded-2xl group cursor-pointer"
              >
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">{sig.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${sig.color}`}>{sig.name}</h3>
                <p className="text-text-muted text-sm mb-6">Deep dive into advanced concepts, build real-world projects, and collaborate with domain experts.</p>
                <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Explore SIG <span className="ml-2">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Features */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-bg-elevated">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Why join the elite?</h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Membership isn't just about events. It's about surrounding yourself with the top 1% of engineers who will push you to build better, faster, and smarter.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  "Exclusive access to HackLoop and flagship hackathons.",
                  "1-on-1 mentorship from industry veterans and alumni.",
                  "Priority access to computing resources and cloud credits.",
                  "A network of driven peers who will become your co-founders."
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary-base/20 flex items-center justify-center text-primary-base shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-base/10 rounded-[3rem] blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="glass-panel p-6 rounded-3xl aspect-square flex flex-col justify-end border border-white/10 hover:border-white/30 transition-colors">
                    <h3 className="text-white font-bold text-xl">Networking</h3>
                  </div>
                  <div className="glass-panel p-6 rounded-3xl aspect-square flex flex-col justify-end border border-white/10 hover:border-white/30 transition-colors bg-gradient-to-tr from-bg-base to-primary-base/20">
                    <h3 className="text-white font-bold text-xl">Hackathons</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="glass-panel p-6 rounded-3xl aspect-square flex flex-col justify-end border border-white/10 hover:border-white/30 transition-colors bg-gradient-to-tr from-bg-base to-accent/20">
                    <h3 className="text-white font-bold text-xl">Research</h3>
                  </div>
                  <div className="glass-panel p-6 rounded-3xl aspect-square flex flex-col justify-end border border-white/10 hover:border-white/30 transition-colors">
                    <h3 className="text-white font-bold text-xl">Open Source</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
