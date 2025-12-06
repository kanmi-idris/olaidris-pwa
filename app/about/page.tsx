"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AboutHero from "../components/about/AboutHero";
import GPAStory from "../components/about/GPAStory";
import FaithSection from "../components/about/FaithSection";
import FamilyGallery from "../components/about/FamilyGallery";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative font-sans selection:bg-white/20">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-zinc-900/50 to-transparent opacity-50" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-refraction bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-bold active:scale-95 duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Terminal
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        <AboutHero />
        <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <GPAStory />
        <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <FaithSection />
        <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <FamilyGallery />

        {/* Footer Signature */}
        <footer className="py-20 text-center text-gray-600 text-sm font-mono">
          <p>End of Documentation.</p>
          <p className="mt-2">© {new Date().getFullYear()} Olasunkanmi Idris</p>
        </footer>
      </div>
    </main>
  );
}
