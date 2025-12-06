"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Zap, Cross } from "lucide-react";

export default function SourceCodeGrid() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
          The Source Code
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          Behind the screen. The bugs I fixed in real life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Card 1: The Refactor (GPA Graph) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 md:row-span-1 bg-[#0A0A0A] border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-green-900/10 opacity-50" />

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold font-sans">The Refactor</h3>
                <p className="text-gray-400 text-sm mt-1 max-w-md">
                  &quot;Determination &gt; Talent. Rising from a 2.36 to a 4.07
                  at the University of Lagos taught me how to debug life.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-red-500">2.36</span>
                <span>→</span>
                <span className="text-green-400 font-bold">4.07 GPA</span>
              </div>
            </div>

            {/* Graph Visualization */}
            <div className="h-32 w-full mt-6 relative flex items-end">
              {/* SVG Line */}
              <svg
                className="absolute inset-0 w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,120 C100,120 150,80 250,50 S400,0 600,10"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient
                    id="gradient"
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
                transition={{ delay: 0.5 }}
                className="absolute left-0 bottom-0 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="absolute right-0 top-[10px] w-4 h-4 bg-green-400 rounded-full shadow-[0_0_20px_rgba(74,222,128,0.8)] animate-pulse"
              />
            </div>
          </div>
        </motion.div>

        {/* Card 2: The Kernel (Faith) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 md:row-span-1 bg-[#0A0A0A] border border-zinc-800 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group"
        >
          {/* Ethereal Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-400/30 transition-colors duration-700" />

          <div className="relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {/* Using a generic Plus/Cross icon representation since Lucide 'Cross' might differ */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-sans text-white drop-shadow-lg">
              The Kernel
            </h3>
          </div>
          <div className="relative z-10">
            <p className="text-gray-300 text-sm italic">
              &quot;My code runs on logic, but I run on faith. God is my
              foundation.&quot;
            </p>
          </div>
        </motion.div>

        {/* Card 3: The Why (Family) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-3 md:row-span-1 bg-[#0A0A0A] border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-center items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none" />

          {/* Polaroid Effect */}
          <div className="relative w-48 h-56 z-0 group-hover:scale-105 transition-transform duration-500">
            {/* Back Photo */}
            <div className="absolute top-2 -right-4 w-full h-full bg-zinc-800 border-4 border-white shadow-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 rounded-sm" />
            {/* Front Photo */}
            <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 border-4 border-white shadow-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500 rounded-sm flex items-center justify-center overflow-hidden">
              <span className="opacity-20 font-mono text-5xl">❤️</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-8 z-20">
            <h3 className="text-xl font-bold font-sans text-white">
              My Shareholders
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              Building for family & my
              <span className="line-through"> woman </span>
              biggest supporter.
            </p>
          </div>

          <Heart className="absolute top-8 right-8 text-red-500 w-6 h-6 fill-current animate-pulse z-20" />
        </motion.div>

        {/* Card 4: Relentless (Determination) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-3 md:row-span-1 bg-gradient-to-br from-[#0A0A0A] to-orange-900/10 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 p-32 bg-orange-500/10 rounded-full blur-[60px] group-hover:bg-orange-500/20 transition-all duration-500" />

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold font-sans">Relentless.</h3>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <Zap className="w-8 h-8 text-orange-500 fill-current" />
              </motion.div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-orange-500"
                  />
                </div>
                <span className="font-mono text-orange-500 font-bold text-sm">
                  110%
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                &quot;I don&apos;t stop when it compiles. I stop when it works
                perfectly.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
