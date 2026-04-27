import React from "react";
import "../globals.css";
import Link from "next/link";

import { Reveal } from "./Reveal";

export const SectionContact = () => {
  return (
    <Reveal>
      <main
        id="contact"
        className="custom-height m-auto flex w-full max-w-6xl flex-col gap-5 px-4"
      >
        <section className="m-auto flex w-4/5 max-w-3xl flex-col items-start gap-5 sm:flex-row  sm:items-center  sm:justify-between sm:gap-0">
          <div className="flex w-4/5 flex-col gap-4 sm:w-1/2 md:w-3/6 ">
            <h1 className="text-3xl font-bold">Let&apos;s Work Together!</h1>
            <p className="text-blue-300">
              I&apos;m always interested in discussing new opportunities, collaborations, or project ideas.
              Whether it&apos;s a web development project, consultation, or just a chat about technology, feel free to reach out!
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p><strong>Email:</strong> cacaizzah2008@gmail.com</p>
              <p><strong>Location:</strong> Makassar, Indonesia</p>
              <p><strong>Status:</strong> Available for projects</p>
            </div>
          </div>
          <button className="h-fit rounded-md border border-blue-primary px-10 py-2 delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:bg-blue-primary">
            <Link href="mailto:cacaizzah2008@gmail.com?subject=Portfolio Contact - Let's Work Together">Get In Touch</Link>
          </button>
        </section>
      </main>
    </Reveal>
  );
};
