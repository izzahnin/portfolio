import React from "react";
import { Reveal } from "./Reveal";

export const SectionExperience = () => {
  return (
    <main
      id="experience"
      className="m-auto flex max-w-6xl flex-col gap-8 px-4 pt-16"
    >
      <Reveal>
        <section className="flex flex-col items-center gap-3 text-4xl md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">Experience</h1>
            <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
          </div>
          <p className="max-w-2xl text-center text-base text-slate-300 md:text-left">
            Practical internship experience delivering real internal systems in a
            collaborative development team.
          </p>
        </section>
      </Reveal>

      <section className="flex w-full flex-col gap-6">
        <Reveal>
          <div className="rounded-2xl border border-slate-700/70 bg-gradient-to-br from-[#0a1929] to-[#0f2742] p-6 shadow-xl shadow-blue-950/20">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Frontend Developer - Internship</h3>
                <p className="text-lg text-blue-300">OWA, Indonesia</p>
              </div>
              <div className="rounded-lg border border-slate-600/60 bg-slate-900/30 px-4 py-2 text-sm text-slate-300 md:text-right">
                <p>Jul 2024 - Nov 2024</p>
                <p>Indonesia</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-200">
              <ul className="ml-1 list-disc space-y-2 pl-5 leading-7">
                <li>
                  Built internal management application interfaces using React and Ionic to
                  digitalize internal administrative processes.
                </li>
                <li>
                  Implemented responsive designs using HTML, CSS, and JavaScript to optimize
                  accessibility across mobile and web platforms.
                </li>
                <li>
                  Integrated frontend components with REST APIs through team collaboration to
                  ensure seamless and accurate user data synchronization.
                </li>
                <li>
                  Performed routine interface testing and debugging to improve the user
                  experience (UX) quality of developing systems.
                </li>
                <li>
                  Managed code version control using Git/GitHub to support organized technical
                  collaboration within the development team.
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1 text-sm text-blue-100">JavaScript</span>
                <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1 text-sm text-blue-100">HTML</span>
                <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1 text-sm text-blue-100">CSS</span>
                <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1 text-sm text-blue-100">React</span>
                <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1 text-sm text-blue-100">Ionic</span>
                <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1 text-sm text-blue-100">REST API</span>
                <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1 text-sm text-blue-100">Git/GitHub</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};