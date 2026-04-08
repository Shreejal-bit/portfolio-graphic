"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// 3D Glass Cube Component
function GlassCube({ 
  text, 
  delay = 0,
  position,
  size = "large"
}: { 
  text: string; 
  delay?: number;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  size?: "large" | "small";
}) {
  const isLarge = size === "large";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -30 }}
      animate={{ 
        opacity: 1, 
        y: [0, -15, 0],
        rotateY: [0, 360],
        rotateX: [0, 10, 0]
      }}
      transition={{ 
        duration: 2,
        delay,
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
        rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      className="absolute"
      style={position}
    >
      <div className={`relative ${isLarge ? 'w-20 h-20 md:w-24 md:h-24' : 'w-12 h-12 md:w-14 md:h-14'}`}>
        {/* 3D Cube with glass effect */}
        <div 
          className="w-full h-full rounded-2xl relative overflow-hidden"
          style={{ 
            background: "linear-gradient(135deg, rgba(255,179,193,0.9) 0%, rgba(255,133,161,0.8) 50%, rgba(255,179,193,0.7) 100%)",
            boxShadow: "0 25px 50px rgba(255,93,143,0.3), inset 0 2px 10px rgba(255,255,255,0.4), inset 0 -2px 10px rgba(255,93,143,0.2)",
            transformStyle: "preserve-3d",
            backdropFilter: "blur(4px)"
          }}
        >
          {/* Inner glow */}
          <div 
            className="absolute inset-2 rounded-xl opacity-60"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 50%, rgba(255,93,143,0.3) 100%)"
            }}
          />
          {/* Text */}
          <div 
            className={`absolute inset-0 flex items-center justify-center text-white ${isLarge ? 'text-xl md:text-2xl' : 'text-sm md:text-base'} font-bold tracking-wider`}
            style={{
              textShadow: "0 2px 8px rgba(255,93,143,0.5)"
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Cute Cat Character Component
function CatCharacter() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
      className="relative mx-auto w-full max-w-[420px]"
    >
      {/* Soft pink background cloud */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[360px] h-[140px] md:h-[160px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #ffc8d6 0%, #ffb3c1 50%, #ff8fa3 100%)",
          boxShadow: "0 30px 60px rgba(255,93,143,0.25), inset 0 -10px 30px rgba(255,255,255,0.3)"
        }}
      />
      
      {/* Character Container */}
      <div className="relative z-10 flex flex-col items-center pt-4">
        
        {/* Cat Face */}
        <div className="relative w-36 md:w-44 h-32 md:h-36">
          
          {/* Face base - soft rounded shape */}
          <div 
            className="absolute top-2 left-1/2 -translate-x-1/2 w-28 md:w-36 h-24 md:h-28 rounded-[45%] overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #fff5f0 0%, #ffe8e0 100%)",
              boxShadow: "inset 0 -8px 20px rgba(255,179,193,0.2)"
            }}
          />
          
          {/* Cat Ears */}
          <div 
            className="absolute top-0 left-6 w-0 h-0"
            style={{
              borderLeft: "16px solid transparent",
              borderRight: "16px solid transparent",
              borderBottom: "28px solid #2d2d2d",
              transform: "rotate(-20deg)"
            }}
          >
            {/* Inner ear */}
            <div 
              className="absolute -left-2 top-4 w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "14px solid #ffb3c1"
              }}
            />
          </div>
          <div 
            className="absolute top-0 right-6 w-0 h-0"
            style={{
              borderLeft: "16px solid transparent",
              borderRight: "16px solid transparent",
              borderBottom: "28px solid #2d2d2d",
              transform: "rotate(20deg)"
            }}
          >
            {/* Inner ear */}
            <div 
              className="absolute -left-2 top-4 w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "14px solid #ffb3c1"
              }}
            />
          </div>
          
          {/* Cat Eyes - Cute closed happy eyes */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-4">
            {/* Left eye */}
            <div 
              className="w-6 h-3 rounded-full"
              style={{ 
                borderBottom: "3px solid #2d2d2d",
                borderLeft: "2px solid transparent",
                borderRight: "2px solid transparent"
              }}
            />
            {/* Right eye */}
            <div 
              className="w-6 h-3 rounded-full"
              style={{ 
                borderBottom: "3px solid #2d2d2d",
                borderLeft: "2px solid transparent",
                borderRight: "2px solid transparent"
              }}
            />
          </div>
          
          {/* Rosy cheeks */}
          <div 
            className="absolute top-14 left-4 w-5 h-3 rounded-full"
            style={{ background: "rgba(255,179,193,0.5)" }}
          />
          <div 
            className="absolute top-14 right-4 w-5 h-3 rounded-full"
            style={{ background: "rgba(255,179,193,0.5)" }}
          />
          
          {/* Tiny nose */}
          <div 
            className="absolute top-16 left-1/2 -translate-x-1/2 w-2 h-1.5 rounded-full"
            style={{ background: "#ff85a1" }}
          />
          
          {/* Cute mouth - small w */}
          <div 
            className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-4 h-2"
            style={{
              borderBottom: "2px solid #2d2d2d",
              borderRadius: "0 0 50% 50%"
            }}
          />
        </div>
        
        {/* Paws peeking over the cloud */}
        <div className="absolute -bottom-3 left-8 flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ y: 10 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              className="w-5 h-6 rounded-full"
              style={{ 
                background: "linear-gradient(180deg, #2d2d2d 0%, #3d3d3d 100%)",
                marginTop: i === 1 ? -2 : 0
              }}
            />
          ))}
        </div>
        <div className="absolute -bottom-3 right-8 flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ y: 10 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              className="w-5 h-6 rounded-full"
              style={{ 
                background: "linear-gradient(180deg, #2d2d2d 0%, #3d3d3d 100%)",
                marginTop: i === 1 ? -2 : 0
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffb3c1 0%, #ffc8d6 25%, #ffe4e9 50%, #fff0f3 75%, #fef9f3 100%)"
      }}
    >
      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 left-[10%] text-4xl"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute top-1/3 right-[12%] text-3xl"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 left-[15%] text-3xl"
      >
        💫
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5.5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-1/3 right-[10%] text-4xl"
      >
        🎀
      </motion.div>
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[60%] left-[5%] text-2xl"
      >
              </motion.div>
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[70%] right-[8%] text-2xl"
      >
        ⭐
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-0 right-0 px-6 md:px-12 flex justify-between items-center text-white/95 font-light text-[11px] md:text-xs tracking-[0.2em] uppercase"
      >
        
        <span>/Graphic Design/</span>
       
      </motion.div>

      {/* Year */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-20 md:top-28 left-6 md:left-12"
      >
        <span 
          className="text-xl md:text-2xl font-light italic"
          style={{ 
            color: "#c9184a",
            fontFamily: "Georgia, serif"
          }}
        >
        
        </span>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-32 md:pt-40">
        
        {/* Star sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 180, 360] }}
          transition={{ 
            duration: 2, 
            delay: 0.5,
            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-24 md:top-32 right-8 md:right-20"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#ff5d8f">
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
          </svg>
        </motion.div>

        {/* PORTFOLIO Title - Elegant Serif Italic */}
        <div className="relative z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative -mt-8 md:-mt-12"
          >
            <h1 
              className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-[0.9] tracking-tight"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(180deg, #ff5d8f 0%, #ff6b8a 20%, #ff8fa3 40%, #ffb3c1 60%, #ffc8d6 80%, #ffd6e7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.02em",
                filter: "drop-shadow(0 20px 40px rgba(255,93,143,0.15))"
              }}
            >
              PORTFOLIO
            </h1>
          </motion.div>
        </div>

        {/* Floating Software Cubes - Left Side */}
        <GlassCube 
          text="Ai" 
          delay={0.8}
          position={{ top: "45%", left: "5%" }}
          size="large"
        />
        <GlassCube 
          text="Ai" 
          delay={1.2}
          position={{ top: "35%", left: "20%" }}
          size="small"
        />
        
        {/* Floating Software Cubes - Right Side */}
        <GlassCube 
          text="Ps" 
          delay={1}
          position={{ top: "40%", right: "8%" }}
          size="large"
        />
        <GlassCube 
          text="Ps" 
          delay={1.4}
          position={{ top: "30%", right: "22%" }}
          size="small"
        />

        {/* Character Section */}
        <div className="relative z-10 mt-8 md:mt-12 w-full flex flex-col items-center">
          <CatCharacter />
          
          {/* WELCOME Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-10 md:mt-14"
          >
            <span 
              className="text-base md:text-lg tracking-[0.3em] font-light"
              style={{ 
                color: "#ff5d8f",
                fontFamily: "Georgia, serif",
                fontStyle: "italic"
              }}
            >
              /WELCOME/
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
