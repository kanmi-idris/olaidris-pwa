"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, CreditCard, Palette, ArrowUpRight } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
        <p className="opacity-60">
          The things I build when I&apos;m not sleeping.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Energibot - Large Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-2 row-span-1 md:row-span-2 rounded-3xl bg-[#1A1A1A] p-8 border border-white/10 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
                <Bot className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Energibot</h3>
              <p className="text-gray-400 max-w-md">
                Offline AI assistant designed for remote engineering sites. Zero
                latency, 100% privacy, industrial grade security.
              </p>
              <div className="flex gap-2 mt-4 text-xs font-mono text-green-400">
                <span>#AI</span>
                <span>#OfflineFirst</span>
                <span>#Python</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flippay - FinTech */}
        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-3xl bg-[#1A1A1A] p-8 border border-white/10 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <CreditCard className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Flippay</h3>
              <p className="text-gray-400 text-sm">
                Fintech scale infrastructure processing millions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Design Portfolio */}
        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-3xl bg-[#1A1A1A] p-8 border border-white/10 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400">
                <Palette className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">UI/UX Labs</h3>
              <p className="text-gray-400 text-sm">
                Experimental interactions and emotional design studies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
