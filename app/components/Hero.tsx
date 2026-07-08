import React from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <main className="h-svh m-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 text-center">
      <section className="flex h-3/4 flex-col items-center justify-center gap-6">
        <Reveal>
          <div className="flex flex-col items-center gap-1 py-0.5">
            <p className="text-sm text-[var(--text-muted)]">
              Nurul Izzah Nurhidayat · Fresh Graduate, Informatics Engineering
            </p>
            <p className="text-sm text-[var(--accent)]">
              Open to Fullstack Developer opportunities
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            Building products from the interface down to the{" "}
            <em className="not-italic text-[var(--accent)]">infrastructure</em> that runs them.
          </h1>
        </Reveal>

        <Reveal>
          <div className="flex justify-center py-0.5">
            <p className="max-w-3xl text-base text-[var(--text-secondary)] md:text-lg">
              Fresh Graduate in Informatics Engineering from Universitas Hasanuddin. Started in frontend, growing into fullstack — from React interfaces to Go-powered backends.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#projects"
              className="rounded-md bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-[#1a1814] transition duration-200 hover:bg-[#fdc500]/80"
            >
              View Featured Work
            </Link>
            <Link
              href="https://github.com/izzahnin"
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-[var(--border-strong)] px-6 py-2.5 text-sm font-semibold text-[var(--text-mid)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FiGithub />
              GitHub
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-[var(--border-strong)] px-6 py-2.5 text-sm font-semibold text-[var(--text-mid)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mt-4">
        <Reveal>
          <Link href="#about">
            <IoIosArrowDown className="animate-bounce text-4xl text-[var(--text-soft)]" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
};
