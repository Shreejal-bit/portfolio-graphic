"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";

const categories = ["All", "Branding", "Illustration", "UI/UX", "Print"];

const projects = [
  {
    id: 1,
    title: "Sakura Cafe Branding",
    category: "Branding",
    image: "🌸",
    color: "#ff5d8f",
    description: "Cute pastel branding for a Japanese-inspired cafe",
  },
  {
    id: 2,
    title: "Kawaii Character Set",
    category: "Illustration",
    image: "🐰",
    color: "#d4b5f0",
    description: "Adorable character illustrations for a sticker app",
  },
  {
    id: 3,
    title: "Bloom Skincare App",
    category: "UI/UX",
    image: "✨",
    color: "#a8e6cf",
    description: "Soft and elegant mobile app design for skincare brand",
  },
  {
    id: 5,
    title: "Cloud Nine Kids Brand",
    category: "Branding",
    image: "☁️",
    color: "#b8e0ff",
    description: "Playful brand identity for children's clothing line",
  },
  {
    id: 6,
    title: "Pastel Social Templates",
    category: "UI/UX",
    image: "📱",
    color: "#ffc8d6",
    description: "Instagram templates with soft aesthetic design",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #fef9f3 0%, #fff5f8 50%, #ffeef3 100%)"
      }}
    >
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-32 left-10 text-4xl opacity-30"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-40 right-12 text-3xl opacity-30"
      >
        💫
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="absolute top-[60%] left-[5%] text-3xl"
      >
        🎨
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[8%] text-2xl opacity-25"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[15%] left-[12%] text-2xl"
      >
              </motion.div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: [0, 0.5, 0], 
            y: [-30, -200],
            x: [0, (Math.random() - 0.5) * 50]
          }}
          transition={{ 
            duration: 7 + Math.random() * 3, 
            repeat: Infinity,
            delay: i * 1.3,
            ease: "easeInOut"
          }}
          className="absolute rounded-full blur-sm"
          style={{
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            background: "radial-gradient(circle, rgba(212,181,240,0.6) 0%, transparent 70%)",
            left: `${12 + i * 19}%`,
            bottom: "10%",
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(212, 181, 240, 0.3)",
              color: "#9b59b6"
            }}
          >
            <span>🎨</span>
            Portfolio
          </span>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              background: "linear-gradient(135deg, #ff5d8f 0%, #d4b5f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            My Creative Works
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A collection of my favorite projects           </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeCategory === category 
                  ? "linear-gradient(135deg, #ff5d8f 0%, #ff85a1 100%)" 
                  : "rgba(255, 255, 255, 0.9)",
                color: activeCategory === category ? "white" : "#ff5d8f",
                boxShadow: activeCategory === category 
                  ? "0 4px 20px rgba(255, 93, 143, 0.3)" 
                  : "0 2px 10px rgba(0,0,0,0.05)"
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <TiltCard tiltAmount={8}>
                  <div 
                    className="rounded-3xl overflow-hidden h-full"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 10px 40px rgba(255, 179, 193, 0.15)"
                    }}
                  >
                    {/* Image Area */}
                    <div
                      className="aspect-square flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: `${project.color}20` }}
                    >
                      <motion.span
                        className="text-7xl"
                        whileHover={{ scale: 1.3, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.image}
                      </motion.span>

                      {/* Hover Overlay */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: "rgba(0,0,0,0.1)" }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="bg-white rounded-full p-4 shadow-xl"
                        >
                          <ExternalLink className="w-6 h-6" style={{ color: "#ff5d8f" }} />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                        }}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold mt-3 mb-2" style={{ color: "#2d2d2d" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm" style={{ color: "#8b8b8b" }}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
