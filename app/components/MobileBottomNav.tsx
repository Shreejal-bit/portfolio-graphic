"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, User, Sparkles, FolderHeart, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Sparkles },
  { href: "#portfolio", label: "Work", icon: FolderHeart },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div 
        className="flex items-center gap-1 px-2 py-2 rounded-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "0 8px 32px rgba(255, 179, 193, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.8)"
        }}
      >
        {/* First half: Home, About */}
        {navItems.slice(0, 2).map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileNavBg"
                    className="absolute inset-0 -m-1 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #ffb3c1 0%, #ff85a1 100%)"
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon 
                  className="w-5 h-5 relative z-10" 
                  style={{ 
                    color: isActive ? "white" : "#8b8b8b",
                    strokeWidth: isActive ? 2.5 : 2
                  }} 
                />
              </motion.div>
              <span 
                className="text-[10px] font-medium relative z-10"
                style={{ 
                  color: isActive ? "#ff5d8f" : "#8b8b8b"
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Logo in middle */}
        <Link href="#home" className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
            style={{
              background: "linear-gradient(135deg, #ffb3c1 0%, #d4b5f0 100%)",
              boxShadow: "0 4px 15px rgba(255, 179, 193, 0.4)"
            }}
          >
            <span className="text-white font-bold text-lg">✿</span>
          </motion.div>
        </Link>

        {/* Second half: Work, Contact */}
        {navItems.slice(3, 5).map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileNavBg"
                    className="absolute inset-0 -m-1 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #ffb3c1 0%, #ff85a1 100%)"
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon 
                  className="w-5 h-5 relative z-10" 
                  style={{ 
                    color: isActive ? "white" : "#8b8b8b",
                    strokeWidth: isActive ? 2.5 : 2
                  }} 
                />
              </motion.div>
              <span 
                className="text-[10px] font-medium relative z-10"
                style={{ 
                  color: isActive ? "#ff5d8f" : "#8b8b8b"
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
