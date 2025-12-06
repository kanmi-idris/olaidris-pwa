"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GPAStory() {
  return (
    <section id="version-control" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Col: The Graph */}
        <div className="relative h-[300px] md:h-[400px] w-full bg-[#0A0A0A] border border-zinc-800 rounded-3xl p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-green-900/10 opacity-50" />

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div className="font-mono text-xs p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-gray-500">commit: refactor-life</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-sm p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-red-500">2.36</span>
                <span>→</span>
                <span className="text-green-400 font-bold">4.07 GPA</span>
              </div>
            </div>

            {/* Graph Visualization */}
            <div className="h-48 w-full mt-6 relative flex items-end">
              <svg
                className="absolute inset-0 w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,180 C100,180 150,120 250,80 S400,10 600,20"
                  fill="none"
                  stroke="url(#gradient-large)"
                  strokeWidth="6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                <defs>
                  <linearGradient
                    id="gradient-large"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ef4444" /> {/* Red */}
                    <stop offset="100%" stopColor="#4ade80" /> {/* Green */}
                  </linearGradient>
                </defs>
              </svg>

              {/* Points */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute left-0 bottom-0 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5 }}
                className="absolute right-0 top-[20px] w-6 h-6 bg-green-400 rounded-full shadow-[0_0_30px_rgba(74,222,128,0.8)] animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* Right Col: The Narrative */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
              The Refactor.
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                My first year at the University of Lagos ended with a{" "}
                <span className="text-red-400 font-mono">2.36 GPA</span>. In
                engineering terms, my system was failing. I wasn&apos;t just
                struggling academically; I was debugging my entire approach to
                learning.
              </p>
              <p>
                Most people would have pivoted. I decided to patch the kernel.
              </p>
              <p>
                I rewrote my study algorithms. I optimized my time management. I
                treated every semester like a sprint and every exam like a
                production deployment.
              </p>
              <p>
                The result? I graduated with a{" "}
                <span className="text-green-400 font-mono">4.07 GPA</span>.
              </p>
            </div>
          </div>

          <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-zinc-800 font-mono text-sm text-gray-400">
            <div className="flex gap-4 mb-2">
              <span className="text-blue-400">class</span>
              <span className="text-yellow-400">Student</span>
              <span className="text-white">implements</span>
              <span className="text-yellow-400">Resilience</span>
            </div>
            <div className="pl-4 border-l border-zinc-800">
              <p>
                <span className="text-purple-400">while</span> (gpa &lt; 4.0){" "}
                {"{"}
              </p>
              <p className="pl-4 text-gray-500">
                {"// optimize: determination_level = 100%"}
              </p>
              <p className="pl-4">study();</p>
              <p className="pl-4">pray();</p>
              <p className="pl-4">grind();</p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
