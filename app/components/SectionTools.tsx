import React from "react";
import Image from "next/image";

import { listIcon } from "../utils/listIcon";

export default function SectionTools() {
  return (
    <main className="flex flex-col gap-5">
      <section className="flex flex-col items-center gap-4 text-5xl md:flex-row">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold">Tools</h1>
          <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
        </div>
        <p></p>
      </section>
      <section className="grid w-full grid-cols-3 gap-4">
        {listIcon.map((icon) => (
          <div key={icon.id} className="flex flex-col items-center gap-1">
            <Image
              src={icon.svg}
              alt={icon.name}
              width={40}
              height={40}
              className="h-10 w-10 hover:scale-110 transition duration-300 ease-in-out"
            />
            <span className="text-center text-xs font-semibold text-gray-300 cursor-default">
              {icon.name}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
