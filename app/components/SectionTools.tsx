import React from "react";
import Image from "next/image";

import { listIcon } from "../utils/listIcon";

export const SectionTools = () => {
  return (
    <main
      id="tools"
      className="m-auto flex w-full max-w-sm flex-col gap-8 px-4 pt-16 sm:px-0 md:max-w-3xl lg:max-w-6xl lg:px-4  "
    >
      <section className="flex flex-col items-center gap-4 md:items-start ">
        <div className="flex items-center gap-2 text-4xl">
          <h1 className="font-semibold">Tools</h1>
          <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
        </div>
        <p>Tech stack and tools that i use</p>
      </section>
      <section className="grid h-full grid-cols-3 gap-10  sm:grid-cols-4 md:gap-14">
        {listIcon.map((icon) => (
          <section key={icon.id} className="flex flex-col items-center gap-5">
            <div className="flex h-20 w-20 flex-col items-center  justify-center gap-1 rounded-full border border-transparent bg-[#092039] md:h-24 md:w-24 ">
              <Image
                src={icon.svg}
                alt={icon.name}
                width={40}
                height={40}
                className="h-10 w-10 transition duration-300 ease-in-out hover:scale-110 md:h-14 md:w-14"
              />
            </div>
            <span className="cursor-default text-center text-xs font-semibold text-gray-300 md:text-sm">
              {icon.name}
            </span>
          </section>
        ))}
      </section>
    </main>
  );
};
