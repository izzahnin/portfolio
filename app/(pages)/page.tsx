import { Hero } from "@components/Hero";
import { SectionProjects } from "@components/SectionProjects";
import { SectionTools } from "@components/SectionTools";
import { SectionContact } from "@components/SectionContact";
import { SectionAbout } from "@/components/SectionAbout";

export default function Home() {
  return (
    <main className="flex h-full flex-col ">
      <Hero />
      <SectionAbout />
      <SectionTools />
      <SectionProjects />
      <SectionContact />
    </main>
  );
}
