import React from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { listIcon } from "../utils/listIcon";

const layers = [
  {
    category: "Frontend",
    label: "where it started",
    items: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    description: "Responsive, accessible interfaces — where most of my project work lives.",
  },
  {
    category: "Backend",
    label: "currently deepening",
    items: ["NodeJS", "Express.js", "Go", "MySQL"],
    description: "REST APIs, data modeling, and server-side logic for fullstack projects.",
  },
  {
    category: "Cloud & Infra",
    label: "",
    items: ["Google Cloud Platform", "Docker", "Git"],
    description: "Deployment and infrastructure tooling used across academic and personal projects.",
  },
];

export const SectionHighlights = () => {
  return (
    <main id="highlights" className="m-auto flex max-w-6xl flex-col gap-10 px-4 pt-20">
      <Reveal>
        <section className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-display text-3xl font-semibold text-white">Stack</h1>
            <span className="h-2 w-2 rounded-full bg-[#fdc500]"></span>
          </div>
          <p className="max-w-2xl text-center text-base text-slate-400 md:text-left">
            Skills organized by where they sit in the stack — not every project uses all three.
          </p>
        </section>
      </Reveal>

      <div className="flex flex-col gap-8">
        {layers.map((layer) => (
          <Reveal key={layer.category}>
            <div className="flex items-start gap-5">
              {/* Yellow accent bar */}
              <div className="mt-1 h-5 w-0.5 flex-shrink-0 bg-[#fdc500]" />

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="font-display text-xl font-semibold text-white">{layer.category}</h2>
                  {layer.label && (
                    <span className="text-xs text-slate-600">{layer.label}</span>
                  )}
                </div>
                <p className="mt-1 mb-3 text-sm text-slate-500">{layer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => {
                    const icon = listIcon.find((i) => i.name === item);
                    return (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 rounded-md border border-white/8 bg-[#1a1b1e] px-3 py-1 text-sm text-slate-300"
                      >
                        {icon && (
                          <Image src={icon.svg} alt={item} width={16} height={16} className="shrink-0" unoptimized />
                        )}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
};
