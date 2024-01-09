import React from "react";
import { getAllData } from "../../data";
import CardProject from "@/app/components/CardProject";

export default function Projects() {
  return (
    <main className="flex flex-col gap-5">
      <section>
        <h1 className="text-6xl font-extrabold">Projects</h1>
      </section>
      <section className="grid gap-4 lg:grid-cols-3">
        {getAllData().map((project) => (
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
