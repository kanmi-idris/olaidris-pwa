"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server } from "lucide-react";

export default function FaithSection() {
  return (
    <section
      id="core-dependencies"
      className="py-20 md:py-32 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-8">
          <Server className="w-3 h-3" />
          <span>System Status: 100% Uptime</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Cross Icon */}
          <div className="mx-auto w-16 h-16 mb-8 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">
            Core Dependencies.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
            &quot;My code runs on logic, but my life runs on Faith.
            <br />
            <span className="text-blue-400 font-medium">Christ</span> is the
            dependency I cannot remove.
            <br />
            He is the reason for the excellence.&quot;
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {["Grace", "Wisdom", "Patience", "Love"].map((item, i) => (
            <div
              key={item}
              className="p-4 rounded-xl bg-white/5 border border-white/5 text-center"
            >
              <span className="block text-sm text-gray-500 mb-1 font-mono">
                import
              </span>
              <span className="font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
