import React from "react";

import { Reveal } from "./Reveal";

export const SectionHighlights = () => {
  return (
    <main id="highlights" className="m-auto flex max-w-6xl flex-col gap-8 px-4 pt-16">
      <Reveal>
        <section className="flex flex-col items-center gap-3 text-4xl md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">Career Highlights</h1>
            <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
          </div>
          <p className="max-w-2xl text-center text-base text-slate-300 md:text-left">
            A quick snapshot of how I deliver value in real product and team environments.
          </p>
        </section>
      </Reveal>

      <section className="grid gap-4 md:grid-cols-3">
        <Reveal>
          <article className="h-full rounded-xl border border-slate-700/70 bg-[#0a1929] p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-400/60">
            <h2 className="text-lg font-semibold text-slate-100">What I Build</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Responsive and maintainable web interfaces designed for clarity,
              usability, and long-term scalability.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article className="h-full rounded-xl border border-slate-700/70 bg-[#0a1929] p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-400/60">
            <h2 className="text-lg font-semibold text-slate-100">How I Work</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Collaborative development with clear communication, structured
              testing/debugging, and smooth frontend to API integration.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article className="h-full rounded-xl border border-blue-500/40 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-300/80">
            <h2 className="text-lg font-semibold text-slate-100">Recent Focus</h2>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Bangkit Capstone (2024): backend and cloud implementation for a
              mobile travel itinerary app, including REST API integration and
              Google Cloud deployment setup.
            </p>
          </article>
        </Reveal>
      </section>
    </main>
  );
};
