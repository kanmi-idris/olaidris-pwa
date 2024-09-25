import { getData } from "./api/controllers";
import Accolades from "./components/Accolades";
import { CertificationsAccordion } from "./components/accordions/CertificationAccordion";
import { ExperiencesAccordion } from "./components/accordions/ExperienceAccordion";
import ResponsiveHero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import Skills from "./components/Skills";

export default async function Home() {
  const experiences = await getData("experiences");
  const certifications = await getData("certification");
  const accolades = await getData("accolades");

  return (
    <main className="pb-16">
      <ResponsiveHero />

      <section className="max-w-6xl mx-auto mb-10 lg:mb-24">
        <SectionTitle variant="circled" title="Experience" />
        <ExperiencesAccordion items={experiences} />
      </section>

      <section className="max-w-6xl mx-auto mb-10 lg:mb-24">
        <SectionTitle variant="underlined" title="My Skills" />
        <Skills />
      </section>

      <section className="max-w-6xl mx-auto mb-10 lg:mb-24">
        <SectionTitle variant="underlined" title="Certifications" />
        <CertificationsAccordion items={certifications} />
      </section>

      <section className="max-w-6xl mx-auto mb-10 lg:mb-24">
        <SectionTitle variant="underlined" title="Accolades" />
        <Accolades items={accolades} />
      </section>

      <section className="flex flex-col items-center max-w-6xl mx-auto mb-32 pt-10 lg:mb-24 px-5">
        <h3 className="mb-5 font-semibold text-offWhite text-center">
          🚀 Ready to Elevate Your Team?
        </h3>
        <p className="mb-5 text-[13.33px] text-center text-Black_9">
          With my tech sorcery, adaptable mindset, and passion for
          problem-solving, I’m the wizard your team needs. Let’s create magic
          together! 🌟
        </p>
        <button
          type="button"
          className="rounded-lg px-4 py-2 bg-gradient-to-r from-[#f3b61f] to-[#813405] cursor-pointer text-offWhite"
        >
          Contact Me
        </button>
      </section>
    </main>
  );
}
