"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Boxes, GraduationCap } from "lucide-react";

interface YearCardProps {
  year: string;
  title: string;
  subtitle: string;
  stats: string[];
  color: string;
  icon: React.ReactNode;
}

const years: YearCardProps[] = [
  {
    year: "2025",
    title: "Softbert Nexus & Jet Engines",
    subtitle: "Merging Tech & Engineering",
    stats: ["Flow Assurance Lead", "AI Researcher", "Full Stack Architect"],
    color: "bg-purple-900/50",
    icon: <Briefcase className="w-8 h-8 text-purple-300" />,
  },
  {
    year: "2024",
    title: "The Grind Year",
    subtitle: "Shipped Mmuta & Coursemate",
    stats: [
      "Lines of Code: ∞",
      "Coffee Consumed: Illegal amounts",
      "Sleep: Myth",
    ],
    color: "bg-blue-900/50",
    icon: <Boxes className="w-8 h-8 text-blue-300" />,
  },
  {
    year: "2023",
    title: "TotalEnergies & Hard Hats",
    subtitle: "Industrial Experience",
    stats: ["Excel Wizardry", "Field Operations", "Safety First"],
    color: "bg-orange-900/50",
    icon: <GraduationCap className="w-8 h-8 text-orange-300" />,
  },
];

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto mb-10 px-4">
        <h2 className="text-3xl font-bold mb-2">Highlights</h2>
        <p className="opacity-60">Swipe to travel through time.</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 no-scrollbar touch-pan-x pl-[max(1rem,calc((100%-72rem)/2+1rem))] pr-4">
        {years.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex-shrink-0 w-[85vw] md:w-[400px] snap-center rounded-3xl p-8 ${item.color} backdrop-blur-sm border border-white/10 relative overflow-hidden group transition-transform duration-200 active:scale-[0.98]`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <span className="text-9xl font-black">{item.year}</span>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
              <div>
                {/* <div className="mb-6 p-3 bg-white/10 w-fit rounded-xl">
                  {item.icon}
                </div> */}
                <h3 className="text-2xl font-bold mb-2 pr-10 mt-20">
                  {item.title}
                </h3>
                <p className="opacity-80 font-mono text-sm">{item.subtitle}</p>
              </div>

              <div className="space-y-3 mt-8">
                {item.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm opacity-70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        {/* Spacer for end of scroll */}
        <div className="w-6 flex-shrink-0" />
      </div>
    </section>
  );
}
