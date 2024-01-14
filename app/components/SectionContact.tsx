import React from "react";
import "../globals.css";
import Link from "next/link";

export const SectionContact = () => {
  return (
    <main
      id="contact"
      className="custom-height w-fullflex-col m-auto flex max-w-6xl gap-5 px-4"
    >
      <section className="m-auto flex w-4/5 max-w-3xl flex-col items-start gap-5 sm:flex-row  sm:items-center  sm:justify-between sm:gap-0">
        <div className="flex w-2/3 flex-col gap-4 sm:w-1/2 md:w-3/6 ">
          <h1 className="text-3xl font-bold">Interested in Collaboration?</h1>
          <p className="text-blue-300">
            Feel free to send me an email. I&apos;ll try to respond as soon as
            possible.
          </p>
        </div>
        <button className="h-fit rounded-md border border-blue-primary px-10 py-2 delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:bg-blue-primary">
          <Link href="mailto:cacaizzah2008@gmail.com">Let&apos;s Talk</Link>
        </button>
      </section>
    </main>
  );
};
