import React, { useState } from "react";

export default function Logo() {
  // const [isHover, setIsHover] = useState<number | null>(null);
  const items = [
    { id: 1, abjad: "I" },
    { id: 2, abjad: "z" },
    { id: 3, abjad: "z" },
    { id: 4, abjad: "a" },
    { id: 5, abjad: "h" },
    { id: 6, abjad: "n" },
    { id: 7, abjad: "i" },
    { id: 8, abjad: "n" },
  ];
  return (
    <main className="flex select-none items-center gap-4">
      <span className="flex h-10 w-10 border-separate cursor-default items-center justify-center rounded-br-xl rounded-tl-xl border-r-4 border-t-4 border-blue-primary bg-white align-middle text-xl font-black uppercase text-gray-950 transition-all delay-75 duration-700 hover:rotate-90">
        Z
      </span>
      <section className="item-center flex cursor-pointer text-xl font-black tracking-wide">
        {items.map((item) => (
          <span
            key={item.id}
            className="transition-all duration-500 hover:-mt-2 hover:text-blue-primary hover:duration-100"
          >
            {item.abjad}
          </span>
        ))}
      </section>
    </main>
  );
}