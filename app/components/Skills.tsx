"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Palette,
  PenTool,
  Layout,
  Smartphone,
  Camera,
  Sparkles,
} from "lucide-react";
import TiltCard from "./TiltCard";

const skills = [
  {
    name: "Illustration",
    level: 95,
    icon: PenTool,
    color: "#ff5d8f",
    description: "Digital art & character design",
  },
  {
    name: "Brand Identity",
    level: 90,
    icon: Sparkles,
    color: "#d4b5f0",
    description: "Logo & visual identity design",
  },
  {
    name: "UI/UX Design",
    level: 88,
    icon: Layout,
    color: "#a8e6cf",
    description: "Interface & experience design",
  },
  {
    name: "Motion Graphics",
    level: 82,
    icon: Palette,
    color: "#ff85a1",
    description: "Animation & video editing",
  },
  {
    name: "Photography",
    level: 78,
    icon: Camera,
    color: "#ffc8d6",
    description: "Product & lifestyle photography",
  },
  {
    name: "App Design",
    level: 85,
    icon: Smartphone,
    color: "#b8e0ff",
    description: "Mobile app interface design",
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffeef3 0%, #fff5f8 50%, #fef9f3 100%)"
      }}
    >
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 text-3xl opacity-30"
      >
        🎨
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-16 text-3xl opacity-30"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
        className="absolute top-1/3 left-[8%] text-2xl"
      >
        💡
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-[10%] text-2xl opacity-25"
      >
        ⚡
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
        className="absolute top-[60%] right-[5%] text-3xl"
      >
        🌟
      </motion.div>

      {/* Floating Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: [0, 0.5, 0], 
            y: [-20, -120],
            x: [0, (Math.random() - 0.5) * 40]
          }}
          transition={{ 
            duration: 5 + Math.random() * 2, 
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
          className="absolute rounded-full blur-sm"
          style={{
            width: `${5 + Math.random() * 8}px`,
            height: `${5 + Math.random() * 8}px`,
            background: "radial-gradient(circle, rgba(212,181,240,0.5) 0%, transparent 70%)",
            left: `${20 + i * 20}%`,
            bottom: "15%",
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
          className="text-center mb-16"
        >
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(255, 179, 193, 0.3)",
              color: "#ff5d8f"
            }}
          >
            <Sparkles className="w-4 h-4" />
            My Expertise
          </span>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              background: "linear-gradient(135deg, #ff5d8f 0%, #d4b5f0 50%, #a8e6cf 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Skills & Superpowers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Here are the magical skills I&apos;ve developed over the years ✨
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <TiltCard key={skill.name} tiltAmount={10}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative p-6 rounded-3xl overflow-hidden h-full"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 10px 40px rgba(255, 179, 193, 0.15)"
                  }}
                >
                  {/* Animated background on hover */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredSkill === index ? 1 : 0,
                      opacity: hoveredSkill === index ? 0.1 : 0,
                    }}
                    className="absolute inset-0 rounded-3xl"
                    style={{ backgroundColor: skill.color }}
                  />

                  <div className="relative z-10">
                    {/* Icon & Name */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="w-12 h-12 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${skill.color}25` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: skill.color }} />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-gray-800">
                            {skill.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xl font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="h-3 rounded-full overflow-hidden bg-gray-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}dd 100%)`,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6" style={{ color: "#ff5d8f" }}>
            My Creative Toolkit 🛠️
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Figma",
              "Adobe Illustrator",
              "Photoshop",
              "After Effects",
              "Canva",
              "Adobe XD",
              "Procreate",
              "Blender",
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-5 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  color: "#ff5d8f",
                  boxShadow: "0 4px 15px rgba(255, 179, 193, 0.2)"
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
