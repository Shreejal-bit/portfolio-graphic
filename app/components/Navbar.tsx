"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #ffb3c1 0%, #d4b5f0 100%)",
              boxShadow: "0 4px 15px rgba(255, 179, 193, 0.4)"
            }}
          >
            <span className="text-white font-bold text-base">✿</span>
          </motion.div>
          <span 
            className="font-bold text-lg hidden sm:block"
            style={{ color: "#2d2d2d" }}
          >
            Sonu
          </span>
        </Link>

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

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8), 0 2px 8px rgba(0,0,0,0.1)"
          }}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Sun className="w-4 h-4" style={{ color: "#ff9a00" }} />
          ) : (
            <Moon className="w-4 h-4" style={{ color: "#9b59b6" }} />
          )}
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8), 0 2px 8px rgba(0,0,0,0.1)"
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-4 h-4" style={{ color: "#2d2d2d" }} />
          ) : (
            <Menu className="w-4 h-4" style={{ color: "#2d2d2d" }} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48"
          >
            <div 
              className="py-2 px-3 rounded-2xl space-y-1"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(255, 179, 193, 0.3)"
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-4 rounded-xl text-center text-sm font-medium transition-colors"
                    style={{ color: "#4a4a4a" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
