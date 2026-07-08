import React from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import CardProject from "./CardProject";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { getFeaturedProjects, getOtherProjects } from "../data";
import { Reveal } from "./Reveal";

export const SectionProjects = () => {
  const featured = getFeaturedProjects();
  const others = getOtherProjects();

  return (
    <main id="projects" className="m-auto flex w-full max-w-6xl flex-col gap-14 px-4 pt-20">
      {/* Featured */}
      <div className="flex flex-col gap-8">
        <Reveal>
          <section className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2">
              <h1 className="font-display text-3xl font-semibold text-[var(--text-primary)]">Featured Projects</h1>
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </div>
            <p className="max-w-3xl text-center text-base text-[var(--text-secondary)] md:text-left">
              Selected work that reflects fullstack thinking, interface quality, and implementation discipline.
            </p>
          </section>
        </Reveal>

        <div className="flex flex-col gap-5">
          {featured.map((project) => (
            <Reveal key={project.id}>
              <FeaturedProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="flex flex-col gap-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <h2 className="font-display text-xl font-semibold text-[var(--text-primary)]">Other Projects</h2>
            <div className="h-px flex-1 bg-[var(--border-light)]" />
          </div>
        </Reveal>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((project) => (
            <Reveal key={project.id} className="h-full">
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

        <Reveal>
          <div className="flex justify-center">
            <Link
              href="https://github.com/izzahnin?tab=repositories"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-[var(--border-medium)] px-6 py-2.5 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FiGithub size={15} />
              + more on GitHub
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
};
