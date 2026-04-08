"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      {/* Curved glass pill container */}
      <div 
        className="flex items-center gap-4 md:gap-8 px-4 md:px-8 py-3 rounded-full"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 8px 32px rgba(255, 179, 193, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.5)"
        }}
      >
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-all duration-300 relative group"
              style={{ color: "#4a4a4a" }}
            >
              <span className="group-hover:text-[#ff5d8f] transition-colors">
                {link.label}
              </span>
              <span 
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
                style={{ background: "linear-gradient(90deg, #ffb3c1, #d4b5f0)" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
