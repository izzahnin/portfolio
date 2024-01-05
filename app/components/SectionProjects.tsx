import React from "react";
import Image from "next/image";
import CardProject from "./CardProject";
import { getAllData } from "../data";

export default function SectionProjects() {
  return (
    <main className="flex flex-col gap-5">
      <section className="flex flex-col-reverse items-center gap-4 md:flex-row">
        <h1 className="min-w-max overflow-hidden  text-center text-3xl font-bold md:text-left">
          Here are a few of my favorite projects.
        </h1>
        <span className="h-1 w-1/4 flex-grow bg-blue-primary  md:w-full"></span>
      </section>
      <section className="grid gap-4 lg:grid-cols-3">
        {getAllData().slice(0,3).map((project) => (
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
