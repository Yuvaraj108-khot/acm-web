"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="glass-pill px-6 py-3 rounded-full flex items-center gap-8 shadow-bouncy"
      >
        <Link href="/" className="font-display font-bold text-xl gradient-text pr-4 border-r border-slate-200">
          ACM NMAMIT
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`font-body font-medium transition-colors hover:text-primary relative ${
                pathname === link.path ? "text-primary" : "text-text-light"
              }`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
        <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all active:scale-95 ml-4">
          Join Us
        </button>
      </motion.div>
    </nav>
  );
}
