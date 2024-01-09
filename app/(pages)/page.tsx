import Hero from "../components/Hero";
import SectionProjects from "../components/SectionProjects";
import SectionTools from "../components/SectionTools";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <SectionProjects />
      <SectionTools />
    </main>
  );
}
