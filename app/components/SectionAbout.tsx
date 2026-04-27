import React from "react";
import { Reveal } from "./Reveal";

export const SectionAbout = () => {
  return (
    <main
      id="about"
      className="m-auto flex max-w-6xl flex-col gap-8 px-4 pt-16"
    >
      <Reveal>
        <section className="flex flex-col items-center gap-3 text-4xl md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">About</h1>
            <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
          </div>
          <p className="max-w-3xl text-center text-base text-slate-300 md:text-left">
            Building useful web products with clean code, clear collaboration, and
            production-ready implementation.
          </p>
        </section>
      </Reveal>

      <section className="grid w-full gap-8 md:grid-cols-3">
        <div className="flex flex-col md:col-span-2">
          <Reveal>
            <p className="rounded-xl border border-slate-700/70 bg-[#0b1f35]/70 p-6 text-justify leading-7 shadow-lg shadow-blue-950/20">
              Hello! I&apos;m Nurul Izzah Nurhidayat, a Web Developer based in
              Makassar, Indonesia. I focus on turning product needs into reliable web
              applications with practical engineering standards.
            </p>
          </Reveal>
          <Reveal>
            <p className="pt-4 text-justify leading-7 text-slate-300">
              I have hands-on experience creating responsive interfaces, collaborating in
              teams, and integrating frontend applications with backend services through
              REST APIs. I also use AI-assisted rapid prototyping (vibe coding) to explore
              ideas quickly before refining them into clean, maintainable code.
            </p>
          </Reveal>
          <Reveal>
            <p className="pt-2 text-justify leading-7 text-slate-300">
              My main stack includes React, Next.js, JavaScript, and TypeScript, with
              attention to code quality, performance, and continuous improvement.
            </p>
          </Reveal>
        </div>
        <div className="space-y-4">
          <Reveal>
            <section className="rounded-xl border border-slate-700/70 bg-[#0a1929] p-5 shadow-lg">
              <h2 className="text-lg font-semibold text-slate-100">Quick Profile</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p><span className="font-semibold text-slate-100">Location:</span> Makassar, Indonesia</p>
                <p><span className="font-semibold text-slate-100">Role:</span> Web Developer</p>
                <p><span className="font-semibold text-slate-100">Experience:</span> 2+ years</p>
                <p><span className="font-semibold text-slate-100">Focus:</span> Responsive UI and API integration</p>
              </div>
            </section>
          </Reveal>
          <Reveal>
            <section className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-5 text-sm text-blue-100">
              Open to Web Developer opportunities and collaborative product teams.
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  );
};
