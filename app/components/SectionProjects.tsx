import React from "react";
import CardProject from "./CardProject";
import { getAllData } from "../data";

import { Reveal } from "./Reveal";

export const SectionProjects = () => {
  return (
    <main
      id="projects"
      className="m-auto flex max-w-6xl flex-col gap-5 px-4 pt-16"
    >
      <Reveal>
        <section className="flex flex-col items-center gap-4 text-4xl md:flex-row">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">Projects</h1>
            <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
          </div>
          <p></p>
        </section>
      </Reveal>
      <section className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {getAllData().map((project) => (
          <Reveal key={project.id}>
            <CardProject
              title={project.title}
              description={project.description}
              linkGithub={project.linkGithub}
              linkDemo={project.linkDemo}
              thumbnail={project.thumbnail}
              tools={project.tools}
            />
          </Reveal>
        ))}
      </section>
    </main>
  );
};
