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
            From frontend roots to fullstack projects.
          </p>
        </section>
      </Reveal>

      <section className="grid w-full gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-4 md:col-span-2">
          <Reveal>
            <p className="text-justify leading-7 text-[var(--text-primary)]">
              Hi, I&apos;m Nurul Izzah Nurhidayat — a Fresh Graduate in Informatics Engineering from Hasanuddin University, now working as a Fullstack Developer. I started in frontend during my internship at CoT UNHAS, then expanded into backend and cloud through Bangkit Academy and independent projects like Indonesia Seismic Monitor and Fleet Management System — both built solo, end to end.
            </p>
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

        <div>
          <Reveal>
            <section className="rounded-xl bg-[var(--bg-surface)] p-5">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Quick Profile
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[var(--text-mid)]">
                <div className="flex justify-between gap-4 border-b border-[var(--border-subtle)] pb-3">
                  <span className="text-[var(--text-muted)]">Location</span>
                  <span className="text-right text-[var(--text-primary)]">Makassar, Indonesia</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[var(--border-subtle)] pb-3">
                  <span className="text-[var(--text-muted)]">Role</span>
                  <span className="text-right text-[var(--text-primary)]">Fullstack Developer</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[var(--border-subtle)] pb-3">
                  <span className="text-[var(--text-muted)]">Education</span>
                  <span className="text-right text-[var(--text-primary)]">S1 Informatika — UNHAS</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[var(--text-muted)]">GPA</span>
                  <span className="text-right text-[var(--accent)]">3.80 / 4.00</span>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  );
};
