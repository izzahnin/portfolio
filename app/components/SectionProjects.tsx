import React from "react";
import CardProject from "./CardProject";
import { getAllData } from "../data";

export default function SectionProjects() {
  return (
    <main className="flex flex-col gap-5">
      <section className="flex flex-col items-center gap-4 text-5xl md:flex-row">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold">Projects</h1>
          <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
        </div>
        <p></p>
      </section>
      <section className="grid gap-4 lg:grid-cols-3">
        {getAllData()
          .slice(0, 7)
          .map((project) => (
            <CardProject
              key={project.id}
              title={project.title}
              description={project.description}
              linkGithub={project.linkGithub}
              linkDemo={project.linkDemo}
              thumbnail={project.thumbnail}
              tools={project.tools}
            />
          ))}
      </section>
    </main>
  );
}
