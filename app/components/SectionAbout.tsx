import React from "react";

export const SectionAbout = () => {
  return (
    <main
      id="about"
      className="m-auto flex max-w-6xl flex-col gap-5 px-4 pt-16"
    >
      <section className="flex flex-col items-center gap-4 text-4xl md:flex-row">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold">About</h1>
          <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
        </div>
        <p></p>
      </section>
      <section className="flex flex-col w-full sm:flex-row gap-10">
        <div className="flex flex-col sm:w-1/2">
          <p className="text-justify pb-2 ">
            Hello! I&apos;m Nurul Izzah, a Frontend Developer based in Makassar,
            Indonesia.
          </p>
          <p className="text-justify pb-2 ">
            I have two years experience using various Frontend tools and
            frameworks.
            My goal is to always build products that provide pixel-perfect,
            performant experiences.
          </p>
          <p className="text-justify pb-2 ">
            As a continous learner, I&apos;m always excited to learn new things
            and improve my skills. I&apos;m currently learning Next.js and
            fetching API.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:w-1/2 gap-3">
          {/* <div className="bg-blue-950 w-full h-52 ">
          <h1>Problem Solving</h1>
          </div>
          <div className="bg-blue-950 w-full h-52 ">
          <h1>Problem Solving</h1>
          </div>
          <div className="bg-blue-950 w-full h-52 ">
          <h1>Problem Solving</h1>
          </div> */}
          <div className="">

          </div>
        </div>
      </section>
    </main>
  );
};
