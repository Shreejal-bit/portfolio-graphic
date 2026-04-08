"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import AnimatedCursor from "./components/AnimatedCursor";
import Navbar from "./components/Navbar";
import MobileBottomNav from "./components/MobileBottomNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (minimum 1 second to show the cute loader)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{
          background: "linear-gradient(180deg, #ffb3c1 0%, #ffc8d6 25%, #ffe4e9 50%, #fff0f3 75%, #fef9f3 100%)"
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <Loader />
          <p 
            className="text-lg font-medium animate-pulse"
            style={{ 
              color: "#ff5d8f",
              fontFamily: "Georgia, serif",
              fontStyle: "italic"
            }}
          >
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="flex-1 min-h-screen bg-[var(--bg-primary)]">
        <AnimatedCursor />
        <Navbar />
        <MobileBottomNav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
