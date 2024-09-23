import { getData } from "./api/controllers";
import { ExperiencesAccordion } from "./components/accordions/ExperienceAccordion";
import ResponsiveHero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import Skills from "./components/Skills";

export default async function Home() {
  const experiences = await getData("experiences");

  return (
    <main className="pb-16">
      <ResponsiveHero />

      <section className="max-w-6xl mx-auto mb-10 lg:mb-24">
        <SectionTitle variant="circled" title="Experience" />
        <ExperiencesAccordion items={experiences} />
      </section>

      <section className="max-w-6xl mx-auto mb-32">
        <SectionTitle variant="underlined" title="My Skills" />
        <Skills />
      </section>
    </main>
  );
}
