"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]">
      <div className="glass-nav rounded-2xl px-6 h-16 flex items-center justify-between border border-white/10 shadow-2xl">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-primary-base rounded flex items-center justify-center shadow-glow-primary transition-transform group-hover:scale-105">
            <span className="text-white font-mono text-[12px] font-bold">A</span>
          </div>
          <span className="font-bold text-text-title text-sm tracking-widest uppercase hidden sm:block">
            ACM NMAMIT
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-text-title relative ${
                pathname === link.path ? "text-text-title" : "text-text-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium text-text-muted hover:text-text-title transition-colors hidden sm:block">
            Sign In
          </Link>
          <button className="bg-white text-bg-base px-5 py-2 rounded-lg text-sm font-bold hover:bg-white/90 transition-colors">
            Join ACM
          </button>
        </div>

      </div>
    </nav>
  );
}
