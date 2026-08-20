import React from "react";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { Reveal } from "./Reveal";

export const SectionAbout = () => {
  return (
    <main id="about" className="m-auto flex w-full max-w-6xl flex-col gap-2 px-4 pt-20">
      <Reveal>
        <section className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-display text-3xl font-semibold text-[var(--text-primary)]">About</h1>
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]"></span>
          </div>
          <p className="max-w-3xl text-center text-base text-[var(--text-secondary)] md:text-left">
            From frontend foundations to full-stack web development.
          </p>
        </section>
      </Reveal>

      <section className="w-full">
        <div className="flex max-w-4xl flex-col gap-5">
          <Reveal>
            <p className="leading-7 text-[var(--text-primary)]">
              Hi, I&apos;m Nurul Izzah Nurhidayat, an Informatics Engineering graduate from Hasanuddin University. My work started with frontend interfaces during my internship at CoT UNHAS, then expanded into backend and cloud development through Bangkit Academy and independent full-stack projects.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-2 text-sm text-[var(--text-mid)]">
              <span className="rounded-md border border-[var(--border-light)] px-3 py-1.5">
                Makassar, Indonesia
              </span>
              <span className="rounded-md border border-[var(--border-light)] px-3 py-1.5">
                Full-stack Developer
              </span>
              <span className="rounded-md border border-[var(--border-light)] px-3 py-1.5">
                Bachelor&apos;s in Informatics
              </span>
              <span className="rounded-md border border-[var(--border-light)] px-3 py-1.5 text-[var(--accent)]">
                GPA 3.80 / 4.00
              </span>
            </div>
          </Reveal>

          <Reveal>
            <Link
              href="/Nurul_Izzah_Nurhidayat-CV.pdf"
              target="_blank"
              className="mt-2 inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] px-5 py-2 text-sm font-semibold text-[var(--text-mid)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FiDownload size={14} />
              Download CV
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};
