"use client";

import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 relative overflow-hidden z-10"
      style={{
        background: "linear-gradient(180deg, #fef9f3 0%, #fff5f8 50%, #ffeef3 100%)"
      }}
    >
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-4xl opacity-40"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 right-16 text-3xl opacity-40"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
        className="absolute top-1/2 right-[5%] text-2xl"
      >
              </motion.div>
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-[8%] text-2xl opacity-30"
      >
        💫
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute top-[30%] left-[3%] text-3xl opacity-30"
      >
        🎨
      </motion.div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: [0, 0.5, 0], 
            y: [-30, -150],
            x: [0, (Math.random() - 0.5) * 60]
          }}
          transition={{ 
            duration: 6 + Math.random() * 3, 
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut"
          }}
          className="absolute rounded-full blur-sm"
          style={{
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            background: "radial-gradient(circle, rgba(255,179,193,0.6) 0%, transparent 70%)",
            left: `${15 + i * 18}%`,
            bottom: "20%",
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <TiltCard className="relative aspect-square max-w-md mx-auto" tiltAmount={15}>
              {/* Decorative background blobs */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-full h-full rounded-[2rem] opacity-60"
                style={{ background: "linear-gradient(135deg, #ffb3c1 0%, #d4b5f0 100%)" }}
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 w-full h-full rounded-[2rem] opacity-60"
                style={{ background: "linear-gradient(135deg, #a8e6cf 0%, #ffb3c1 100%)" }}
              />
              
              {/* Main card */}
              <div 
                className="relative w-full h-full rounded-[2rem] overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #fff0f3 0%, #ffe4e9 100%)",
                  boxShadow: "0 30px 60px rgba(255, 179, 193, 0.2)"
                }}
              >
                <div className="text-center p-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #ffb3c1 0%, #d4b5f0 100%)"
                    }}
                  >
                    <span className="text-6xl">👩‍🎨</span>
                  </motion.div>
                  <p className="text-lg font-medium" style={{ color: "#ff5d8f" }}>
                    Sonu
                  </p>
                  <p className="text-sm" style={{ color: "#8b8b8b" }}>
                    Graphic Designer
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #ffb3c1 0%, #ff85a1 100%)",
                  color: "white"
                }}
              >
                <Star className="w-4 h-4 inline mr-1" fill="currentColor" />
                1+ Years
              </motion.div>
            </TiltCard>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5" style={{ color: "#ff85a1" }} />
              <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "#ff85a1" }}>
                About Me
              </span>
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ 
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                background: "linear-gradient(135deg, #ff5d8f 0%, #ff85a1 50%, #ffb3c1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Creating with Passion & Love
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hello! I&apos;m Sonu, a passionate graphic designer who believes in the 
                power of cute and aesthetic design. My journey began 1 years ago when I 
                discovered my love for creating digital art that makes people smile.
              </p>
              <p>
                I specialize in crafting soft, pastel-themed designs that bring warmth 
                and joy to brands and products. From adorable illustrations to elegant 
                brand identities, I pour my heart into every project.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: "☕", label: "Coffee Lover" },
                { icon: "🐱", label: "Cat Person" },
                { icon: "🌸", label: "Spring Fan" },
                { icon: "✨", label: "Detail Oriented" },
              ].map((fact, index) => (
                <TiltCard key={index} tiltAmount={12}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-5 py-3 rounded-2xl text-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      boxShadow: "0 4px 20px rgba(255, 179, 193, 0.2)"
                    }}
                  >
                    <span className="text-2xl mb-1 block">{fact.icon}</span>
                    <span className="text-xs font-medium" style={{ color: "#ff5d8f" }}>
                      {fact.label}
                    </span>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
