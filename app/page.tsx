import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "./components/home/Hero";
import Timeline from "./components/home/Timeline";
import UnifiedWorks from "./components/home/UnifiedWorks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Timeline />
      {/* Documentation Link */}
      <section className="py-12 flex justify-center">
        <Link
          href="/about"
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
        >
          <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
            Read Documentation
          </span>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-1" />
        </Link>
      </section>

      <UnifiedWorks />

      {/* Footer / Contact Section */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
          Let&apos;s build the future.
        </h2>
        <a
          href="mailto:hello@olaidris.com"
          className="inline-block px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform glass-refraction bg-white/10 text-white border border-white/20 hover:bg-white/20"
        >
          Get in touch
        </a>
      </section>
    </main>
  );
}
