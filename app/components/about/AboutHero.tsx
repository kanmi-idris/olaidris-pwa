"use client";

import React from "react";
import { ArrowDown, Database, GitBranch, Heart } from "lucide-react";

export default function AboutHero() {
  const sections = [
    {
      id: "version-control",
      icon: <GitBranch className="w-5 h-5 text-green-400" />,
      title: "Version Control",
      desc: "The GPA Story (2.36 → 4.07)",
    },
    {
      id: "core-dependencies",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      title: "Core Dependencies",
      desc: "Faith & Grace",
    },
    {
      id: "key-contributors",
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: "Key Contributors",
      desc: "Family & Support",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12">
        <span className="font-mono text-sm text-gray-500 mb-4 block">
          README.md
        </span>
        <h1 className="text-4xl md:text-7xl font-bold font-sans tracking-tight mb-6">
          The Man Behind <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            The Machine.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
          A 2.36 GPA start. A 4.07 finish. Powered by Grace. Building for Love.
        </p>
      </div>

      {/* Table of Contents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="mb-4 p-3 rounded-full bg-white/5 w-fit border border-white/5 group-hover:border-white/20 transition-colors">
              {section.icon}
            </div>
            <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors">
              {section.title}
            </h3>
            <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
              {section.desc}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-2 text-sm text-gray-500 font-mono animate-bounce">
        <ArrowDown className="w-4 h-4" />
        Scroll to read documentation
      </div>
    </section>
  );
}
