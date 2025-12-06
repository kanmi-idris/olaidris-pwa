"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "./ModeContext";
import {
  Code2,
  PenTool,
  Wrench,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Phone,
} from "lucide-react";

const content = {
  dev: {
    title: "I Speak Machine.",
    subtitle:
      "I don't just write code; I engineer 100% offline AI systems and scalable fintech infrastructures that serve 5,000+ daily users.",
    desc: "", // Removed generic desc
    icon: <Code2 className="w-6 h-6" />,
    color: "text-dev-text",
    accent: "bg-dev-text",
    badges: [
      "🚀 5k+ Active Users",
      "🛡️ Offline-First AI",
      "📱 React Native Expert",
    ],
  },
  eng: {
    title: "I Solve Problems.",
    subtitle:
      "Merging petroleum engineering with machine learning. I simulate flow assurance risks and predict jet fuel ice accretion rates using XGBoost & LSTM.",
    desc: "",
    icon: <Wrench className="w-6 h-6" />,
    color: "text-eng-text",
    accent: "bg-eng-text",
    badges: [
      "📜 Elsevier Researcher",
      "🛢️ TotalEnergies Alum",
      "⚡ Flow Assurance (OLGA)",
      "🎓 4.07 GPA",
    ],
  },
  creative: {
    title: "I Design Feelings.",
    subtitle:
      "Pixels are cheap. I craft emotional, accessible experiences that translate complex data into human stories.",
    desc: "",
    icon: <PenTool className="w-6 h-6" />,
    color: "text-creative-text",
    accent: "bg-creative-text",
    badges: ["✨ Emotional Design", "🎨 Design Systems", "👁️ A11y Focused"],
  },
};

export default function Hero() {
  const { mode, setMode } = useMode();
  const current = content[mode];

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Mode Switcher */}
      {/* Unified Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
      >
        {/* Left Icons */}
        <div className="hidden md:flex items-center gap-2 p-1 rounded-full glass-refraction bg-white/5 border border-white/10">
          <a
            href="mailto:hello@olaidris.com"
            className="p-2 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 text-gray-400 hover:text-white/80"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/olaidris"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 text-gray-400 hover:text-white/80"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Mode Switcher (Centered) */}
        <div className="flex gap-1 p-1.5 rounded-full glass-refraction bg-white/5 border border-white/10 mx-auto md:mx-0">
          {(["dev", "eng", "creative"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                mode === m ? "text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              {mode === m && (
                <motion.div
                  layoutId="activeMode"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 capitalize">{m}</span>
            </button>
          ))}
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-2 py-1 p-1 rounded-full glass-refraction bg-white/5 border border-white/10">
          <a
            href="https://github.com/olaidris"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 text-gray-400 hover:text-white/80"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="tel:+234000000000"
            className="p-2 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 text-gray-400 hover:text-white/80"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl w-full text-center space-y-8 mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Icon */}
            <div
              className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${current.color} shadow-2xl glass-refraction`}
            >
              {current.icon}
            </div>

            {/* Title */}
            <h1
              className={`text-6xl md:text-8xl font-black tracking-tighter ${current.color} drop-shadow-sm`}
            >
              {current.title}
            </h1>

            {/* Narrative Subtitle */}
            <h2 className="text-lg md:text-2xl font-sans font-medium text-gray-300 max-w-2xl leading-relaxed">
              {current.subtitle}
            </h2>

            {/* Credibility Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {current.badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="px-4 py-1.5 rounded-full text-sm font-mono glass-refraction bg-white/5 border border-white/10 text-gray-300"
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <button
              className={`group flex items-center gap-2 px-8 py-4 rounded-full font-bold mt-8 glass-refraction border transition-all duration-300 hover:scale-105 active:scale-95 ${
                mode === "dev"
                  ? "bg-dev-text/10 text-dev-text border-dev-text/20 hover:bg-dev-text/20"
                  : mode === "eng"
                  ? "bg-eng-text/10 text-eng-text border-eng-text/20 hover:bg-eng-text/20"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              }`}
            >
              Start specific conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
