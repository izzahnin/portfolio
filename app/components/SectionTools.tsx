import React from "react";
import Image from "next/image";

import { listIcon } from "../utils/listIcon";

export default function SectionTools() {
  return (
    <main className="grid w-full grid-cols-3 gap-4">
      {listIcon.map((icon) => (
        <div key={icon.id} className="flex flex-col items-center gap-1">
          <Image
            src={icon.svg}
            alt={icon.name}
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-center text-xs font-semibold text-gray-300">{icon.name}</span>
        </div>
      ))}
    </main>
  );
}
