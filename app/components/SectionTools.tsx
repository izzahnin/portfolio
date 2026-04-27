import React from "react";
import Image from "next/image";

import { listIcon } from "../utils/listIcon";

import { Reveal } from "./Reveal";

export const SectionTools = () => {
  return (
    <main
      id="tools"
      className="m-auto flex w-full max-w-6xl flex-col gap-8 px-4 pt-16"
    >
      <Reveal>
        <section className="flex flex-col items-center gap-3 text-4xl md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">Tools</h1>
            <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
          </div>
          <p className="max-w-2xl text-center text-base text-slate-300 md:text-left">
            Technologies and tools I use to build, test, and ship web products.
          </p>
        </section>
      </Reveal>

      <section className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
        {listIcon.map((icon) => (
          <Reveal key={icon.id}>
            <section className="flex h-full flex-col items-center gap-3 rounded-xl border border-slate-700/70 bg-[#0a1929]/80 px-3 py-4 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-400/60">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/20 bg-[#092039]">
              <Image
                src={icon.svg}
                alt={icon.name}
                width={40}
                height={40}
                  className="h-9 w-9 transition duration-300 ease-in-out hover:scale-110"
              />
              </div>
              <span className="cursor-default text-xs font-semibold text-slate-300 md:text-sm">
                {icon.name}
              </span>
            </section>
          </Reveal>
        ))}
      </section>
    </main>
  );
};
