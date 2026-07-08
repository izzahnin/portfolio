import React from "react";
import Link from "next/link";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { Reveal } from "./Reveal";

export const SectionContact = () => {
  return (
    <main id="contact" className="m-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-20 pb-24">
      <Reveal>
        <section className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-display text-3xl font-semibold text-[var(--text-primary)]">Contact</h1>
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]"></span>
          </div>
          <p className="max-w-2xl text-center text-base text-[var(--text-secondary)] md:text-left">
            Open to Fullstack Developer opportunities and collaborative product teams.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">
              Let&apos;s Work Together
            </h2>
            <p className="max-w-md text-[var(--text-secondary)]">
              Whether it&apos;s a web development project, consultation, or just a chat
              about technology — feel free to reach out.
            </p>
            <div className="space-y-2 text-sm text-[var(--text-muted)]">
              <p><span className="text-[var(--text-mid)]">Email</span> — cacaizzah2008@gmail.com</p>
              <p><span className="text-[var(--text-mid)]">Location</span> — Makassar, Indonesia</p>
              <p>
                <span className="text-[var(--text-mid)]">Status</span> —{" "}
                <span className="text-emerald-600">Available for projects</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="mailto:cacaizzah2008@gmail.com?subject=Portfolio Contact - Let's Work Together"
              className="flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#1a1814] transition hover:bg-[#fdc500]/80"
            >
              <FiMail size={15} />
              Get In Touch
            </Link>
            <Link
              href="https://github.com/izzahnin"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-[var(--border-medium)] px-5 py-2.5 text-sm text-[var(--text-mid)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FiGithub size={15} />
              github.com/izzahnin
            </Link>
            <Link
              href="https://www.linkedin.com/in/nurul-izzah-nurhidayat-397346289/"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-[var(--border-medium)] px-5 py-2.5 text-sm text-[var(--text-mid)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FiLinkedin size={15} />
              LinkedIn
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
};
