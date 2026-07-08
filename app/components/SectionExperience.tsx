import React from "react";
import { Reveal } from "./Reveal";

const experiences = [
  {
    role: "Frontend Developer — Internship",
    company: "Center of Technology (CoT), Fakultas Teknik UNHAS",
    period: "Mar 2024 – Nov 2024",
    location: "Gowa, Indonesia",
    bullets: [
      "Built internal management application interfaces using React and Ionic to digitalize administrative processes.",
      "Implemented responsive designs using Ionic Framework to optimize accessibility across mobile and web platforms.",
      "Integrated frontend components with REST APIs through team collaboration for accurate data synchronization.",
      "Performed routine interface testing and debugging to improve UX quality of developing systems.",
      "Managed code version control using Git/GitHub to support organized technical collaboration.",
    ],
    tags: ["React", "Ionic", "JavaScript", "HTML", "CSS", "REST API", "Git/GitHub"],
  },
  {
    role: "Backend Developer — Bangkit Capstone Project",
    company: "Bangkit Academy, Cloud Computing Track",
    period: "2024",
    location: "Remote",
    bullets: [
      "Contributed backend development for Melali, a mobile travel itinerary application, as part of a 2-person cloud team.",
      "Implemented and integrated 6 RESTful API endpoints to support core application features.",
      "Deployed the application on Google Cloud Platform (App Engine).",
    ],
    tags: ["REST API", "Google Cloud Platform", "App Engine"],
  },
];

export const SectionExperience = () => {
  return (
    <main id="experience" className="m-auto flex w-full max-w-6xl flex-col gap-8 px-4 pt-20">
      <Reveal>
        <section className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-display text-3xl font-semibold text-[var(--text-primary)]">Experience</h1>
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]"></span>
          </div>
          <p className="max-w-2xl text-center text-base text-[var(--text-secondary)] md:text-left">
            Practical experience delivering real systems in collaborative development teams and academic programs.
          </p>
        </section>
      </Reveal>

      <section className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <Reveal key={i}>
            <div className="flex gap-5">
              <div className="flex flex-col items-center pt-1">
                <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                <div className="mt-1 w-px flex-1 bg-[var(--accent)]/20" />
              </div>

              <div className="flex-1 pb-2">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">{exp.role}</h3>
                    <p className="text-sm text-[var(--accent)]">{exp.company}</p>
                  </div>
                  <div className="text-xs text-[var(--text-soft)] md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--text-secondary)]">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--text-soft)]" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border-light)] bg-[var(--bg-surface)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
};
