"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FamilyGallery() {
  const polaroids = [
    {
      id: 1,
      rotate: -6,
      emoji: "❤️",
      label: "Family",
      color: "bg-zinc-900",
    },
    {
      id: 2,
      rotate: 4,
      emoji: "👑",
      label: "My Queen",
      color: "bg-zinc-800",
    },
    {
      id: 3,
      rotate: -3,
      emoji: "🚀",
      label: "Brothers",
      color: "bg-zinc-900",
    },
  ];

  return (
    <section
      id="key-contributors"
      className="py-20 md:py-32 px-6 min-h-[80vh] flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4">
          Key Contributors.
        </h2>
        <p className="text-gray-400 text-lg">
          I don&apos;t build for ego. I build for them.
        </p>
      </div>

      <div className="relative w-full max-w-2xl h-[400px] flex justify-center items-center">
        {polaroids.map((item, i) => (
          <motion.div
            key={item.id}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            whileHover={{ scale: 1.1, zIndex: 50, cursor: "grab" }}
            whileDrag={{ scale: 1.2, zIndex: 100, cursor: "grabbing" }}
            initial={{ rotate: item.rotate }}
            className={`absolute w-56 h-72 ${item.color} border-8 border-white shadow-2xl rounded-sm flex flex-col`}
            style={{
              zIndex: i,
              left: `calc(50% - 112px + ${i * 20 - 20}px)`,
            }}
          >
            <div className="flex-1 bg-black/20 flex items-center justify-center m-2 overflow-hidden bg-gradient-to-br from-zinc-800 to-black">
              <span className="text-6xl filter grayscale hover:grayscale-0 transition-all duration-300">
                {item.emoji}
              </span>
            </div>
            <div className="h-12 flex items-center justify-center bg-white">
              <span className="font-handwriting text-black font-bold font-sans text-lg">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center max-w-md mx-auto">
        <p className="text-gray-400 text-sm leading-relaxed">
          Everything I do is to make my family proud and to build a future for
          the ones I love. My girlfriend has been my biggest cheerleader, and my
          brother-my biggest supporter, has always kept the vision alive, even
          when the code broke.
        </p>
        <div className="mt-6 flex justify-center">
          <Heart className="text-red-500 fill-current animate-pulse w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
