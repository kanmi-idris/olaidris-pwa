import Hero from "./components/home/Hero";
import Timeline from "./components/home/Timeline";
import SourceCodeGrid from "./components/home/SourceCodeGrid";
import UnifiedWorks from "./components/home/UnifiedWorks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Timeline />
      <SourceCodeGrid />
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
