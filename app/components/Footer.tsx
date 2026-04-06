"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: "📸", label: "Instagram", href: "#" },
    { icon: "🎨", label: "Dribbble", href: "#" },
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "💼", label: "Behance", href: "#" },
  ];

  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffeef3 0%, #ffd6e7 50%, #ffb3c1 100%)"
      }}
    >
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#ffeef3"
            d="M0,64 C480,150 960,0 1440,64 L1440,0 L0,0 Z"
            style={{ opacity: 0.5 }}
          />
        </svg>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 text-4xl opacity-30"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-40 right-16 text-3xl opacity-30"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute top-40 right-20 text-2xl opacity-25"
      >
        💫
      </motion.div>

      <div className="relative pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            
            {/* Brand Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <Link href="#home" className="inline-flex items-center gap-2 mb-4">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #ff5d8f 0%, #d4b5f0 100%)"
                  }}
                >
                  <span className="text-white font-bold text-lg">✿</span>
                </motion.div>
                <span className="font-bold text-xl" style={{ color: "#2d2d2d" }}>
                  Bao Tran
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(45,45,45,0.7)" }}>
                Creating cute and aesthetic designs that bring joy to everyday life ✨
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ 
                      background: "rgba(255, 255, 255, 0.8)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                    }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold mb-4 text-sm tracking-wider uppercase" style={{ color: "#ff5d8f" }}>
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-pink-600 flex items-center gap-2"
                      style={{ color: "rgba(45,45,45,0.7)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ffb3c1" }} />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold mb-4 text-sm tracking-wider uppercase" style={{ color: "#ff5d8f" }}>
                Contact
              </h4>
              <div className="space-y-3">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(45,45,45,0.7)" }}
                >
                  <Mail className="w-4 h-4" style={{ color: "#ff5d8f" }} />
                  lebaotran050603@gmail.com
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(45,45,45,0.7)" }}
                >
                  <MapPin className="w-4 h-4" style={{ color: "#ff5d8f" }} />
                  Available Worldwide
                </motion.div>
              </div>
            </motion.div>

            {/* Back to Top */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-start md:items-end"
            >
              <h4 className="font-bold mb-4 text-sm tracking-wider uppercase" style={{ color: "#ff5d8f" }}>
                Back to Top
              </h4>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                style={{
                  background: "linear-gradient(135deg, #ff5d8f 0%, #ff85a1 100%)",
                  boxShadow: "0 10px 30px rgba(255, 93, 143, 0.4)"
                }}
              >
                <ArrowUp className="w-6 h-6 text-white" />
              </motion.button>
              <p className="text-xs" style={{ color: "rgba(45,45,45,0.6)" }}>
                Let&apos;s go up! 🚀
              </p>
            </motion.div>
          </div>

          {/* Divider with gradient */}
          <div 
            className="h-px w-full mb-8"
            style={{ 
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" 
            }}
          />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm flex items-center gap-1"
              style={{ color: "rgba(45,45,45,0.7)" }}
            >
              Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <Heart className="w-4 h-4" style={{ color: "#ff5d8f" }} fill="#ff5d8f" />
              </motion.span>{" "}
              by Bao Tran &copy; {new Date().getFullYear()}
            </motion.p>

            {/* Fun tags */}
            <div className="flex gap-2 flex-wrap justify-center">
              {["🌸 Pastel Lover", "✨ Creative Soul", " Dreamer"].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(255, 255, 255, 0.6)",
                    color: "#ff5d8f"
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
