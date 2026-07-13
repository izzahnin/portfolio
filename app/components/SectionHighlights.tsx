import React from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { listIcon } from "../utils/listIcon";

const groups = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "MaterialUI"],
  },
  {
    category: "Backend",
    items: ["NodeJS", "Express.js", "Go"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Cloud & Infra",
    items: ["Google Cloud Platform", "Docker"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "Postman", "VS Code", "DBeaver"],
  },
];

export const SectionHighlights = () => {
  return (
    <main id="highlights" className="m-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-20">
      <Reveal>
        <section className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-display text-3xl font-semibold text-[var(--text-primary)]">Stack</h1>
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]"></span>
          </div>
          <p className="max-w-2xl text-center text-base text-[var(--text-secondary)] md:text-left">
            Technologies I work with, grouped by layer.
          </p>
        </section>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Reveal key={group.category}>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const icon = listIcon.find((i) => i.name === item);
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-md border border-[var(--border-light)] bg-[var(--bg-surface)] px-3 py-1.5 text-sm text-[var(--text-mid)]"
                    >
                      {icon && (
                        <Image src={icon.svg} alt={item} width={15} height={15} className="shrink-0" unoptimized />
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
};
