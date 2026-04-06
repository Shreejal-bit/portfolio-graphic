"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import TiltCard from "./TiltCard";
import { sendContactEmail } from "../actions/contact";

// Custom Social Icons as SVG components
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="1" fill="currentColor" />
  </svg>
);

const DribbbleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-2.72 3.5-5.25 6.08-10.53 7.33" />
    <path d="M2.5 12c4.5-1.5 9.5-1.5 19 0" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", icon: InstagramIcon, href: "#", color: "#ff5d8f" },
  { name: "Dribbble", icon: DribbbleIcon, href: "#", color: "#d4b5f0" },
  { name: "Twitter", icon: TwitterIcon, href: "#", color: "#a8e6cf" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(result.error || "Failed to send message");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffeef3 0%, #fff5f8 50%, #fef9f3 100%)"
      }}
    >
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-16 text-3xl opacity-30"
      >
              </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 right-20 text-3xl opacity-30"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute top-[40%] right-[8%] text-2xl"
      >
              </motion.div>
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] left-[5%] text-2xl opacity-25"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-[20%] left-[15%] text-3xl"
      >
        🎀
      </motion.div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: [0, 0.5, 0], 
            y: [-20, -150],
            x: [0, (Math.random() - 0.5) * 50]
          }}
          transition={{ 
            duration: 6 + Math.random() * 2, 
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut"
          }}
          className="absolute rounded-full blur-sm"
          style={{
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            background: "radial-gradient(circle, rgba(255,179,193,0.6) 0%, transparent 70%)",
            left: `${15 + i * 17}%`,
            bottom: "20%",
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
              background: "rgba(255, 93, 143, 0.2)",
              color: "#ff5d8f"
            }}
          >
            <Mail className="w-4 h-4" />
            Get In Touch
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
            Let&apos;s Create Something Cute
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you!           </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="p-8 rounded-3xl h-full"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 20px 60px rgba(255, 179, 193, 0.2)"
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#ff5d8f" }}>
                Contact Info 📬
              </h3>

              <div className="space-y-6 mb-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: "rgba(255, 179, 193, 0.1)" }}
                >
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #ffb3c1 0%, #ff85a1 100%)" }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-semibold" style={{ color: "#2d2d2d" }}>
                      lebaotran050603@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: "rgba(212, 181, 240, 0.1)" }}
                >
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #d4b5f0 0%, #9b59b6 100%)" }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold" style={{ color: "#2d2d2d" }}>
                      Available Worldwide 🌍
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-500 mb-4">
                  Follow my creative journey
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all"
                        style={{ 
                          background: `${social.color}25`, 
                          color: social.color,
                          boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
                        }}
                      >
                        <IconComponent />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="p-8 rounded-3xl h-full"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 20px 60px rgba(255, 179, 193, 0.2)"
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#ff5d8f" }}>
                Send a Message 📝
              </h3>

              <div className="space-y-5">
                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl text-sm text-center"
                    style={{ background: "rgba(255, 100, 100, 0.1)", color: "#ff4444" }}
                  >
                    {error}
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-2xl border-0 outline-none transition-all"
                    style={{
                      background: "rgba(255, 179, 193, 0.1)",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-2xl border-0 outline-none transition-all"
                    style={{
                      background: "rgba(255, 179, 193, 0.1)",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-2xl border-0 outline-none transition-all resize-none"
                    style={{
                      background: "rgba(255, 179, 193, 0.1)",
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #ff5d8f 0%, #d4b5f0 100%)",
                    boxShadow: "0 10px 30px rgba(255, 93, 143, 0.3)"
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <span>✨</span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
