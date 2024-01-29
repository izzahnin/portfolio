import React from "react";
import { Reveal } from "./Reveal";

export const SectionAbout = () => {
  return (
    <main
      id="about"
      className="m-auto flex max-w-6xl flex-col gap-5 px-4 pt-16"
    >
      <Reveal>
        <section className="flex flex-col items-center gap-4 text-4xl md:flex-row">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">About</h1>
            <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
          </div>
          <p></p>
        </section>
      </Reveal>

      <section className="flex w-full flex-col gap-10 sm:flex-row">
        <div className="flex flex-col sm:w-1/2">
          <Reveal>
            <p className="pb-2 text-justify ">
              Hello! I&apos;m Nurul Izzah, a Frontend Developer based in
              Makassar, Indonesia.
            </p>
          </Reveal>
          <Reveal>
            <p className="pb-2 text-justify ">
              I have two years experience using various Frontend tools and
              frameworks. My goal is to always build products that provide
              pixel-perfect, performant experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className="pb-2 text-justify ">
              As a continous learner, I&apos;m always excited to learn new
              things and improve my skills. I&apos;m currently learning Next.js
              and fetching API.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-3 sm:w-1/2 sm:flex-row">
          {/* <div className="bg-blue-950 w-full h-52 ">
          <h1>Problem Solving</h1>
          </div>
          <div className="bg-blue-950 w-full h-52 ">
          <h1>Problem Solving</h1>
          </div>
          <div className="bg-blue-950 w-full h-52 ">
          <h1>Problem Solving</h1>
          </div> */}
          <div className=""></div>
        </div>
      </section>
    </main>
  );
};
