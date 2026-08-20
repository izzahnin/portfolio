import React from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <main className="relative m-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:py-20 max-[height:700px]:py-10">
      <section className="flex flex-col items-center justify-center gap-5 sm:gap-6 max-[height:700px]:gap-4">
        <Reveal>
          <div className="flex flex-col items-center gap-1 py-0.5">
            <p className="text-sm text-[var(--text-muted)]">
              Nurul Izzah Nurhidayat, fresh graduate in Informatics Engineering
            </p>
            <p className="text-sm font-medium text-[var(--text-mid)]">
              Open to full-stack developer opportunities
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h1 className="font-display max-w-4xl text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-6xl max-[height:700px]:text-3xl">
            Full-stack developer focused on building web applications, from{" "}
            <span className="text-[var(--text-primary)]">frontend interfaces</span> to{" "}
            <span className="text-[var(--accent)]">backend systems.</span>
          </h1>
        </Reveal>

        <Reveal>
          <div className="flex justify-center py-0.5">
            <p className="max-w-4xl text-base text-[var(--text-secondary)] md:text-lg">
              Informatics Engineering graduate from Hasanuddin University. I started with React interfaces and have been growing into full-stack development through backend services and API work.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            <span>React</span>
            <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
            <span>Next.js</span>
            <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
            <span>Backend APIs</span>
            <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
            <span>PostgreSQL</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            <Link
              href="#projects"
              className="rounded-md bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-[#1a1814] transition duration-200 hover:bg-[#fdc500]/80 max-[height:700px]:px-5 max-[height:700px]:py-2"
            >
              View Featured Work
            </Link>
            <Link
              href="https://github.com/izzahnin"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-[var(--border-strong)] px-6 py-2.5 text-sm font-semibold text-[var(--text-mid)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] max-[height:700px]:px-5 max-[height:700px]:py-2"
            >
              <FiGithub />
              GitHub
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-[var(--border-strong)] px-6 py-2.5 text-sm font-semibold text-[var(--text-mid)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] max-[height:700px]:px-5 max-[height:700px]:py-2"
            >
              Contact
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="absolute bottom-8 hidden lg:block max-[height:760px]:hidden">
        <Reveal>
          <Link href="#about">
            <IoIosArrowDown className="animate-bounce text-4xl text-[var(--text-soft)]" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
};
