import {Hero} from "../components/Hero";
import {SectionProjects} from "../components/SectionProjects";
import {SectionTools} from "../components/SectionTools";
import {SectionContact} from "../components/SectionContact";

export default function Home() {
  return (
    <main className="flex my-10 flex-col gap-10 p-5">
      <Hero />
      <SectionProjects />
      <SectionTools />
      <SectionContact />
    </main>
  );
}
