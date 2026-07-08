import Link from "next/link";
import React from "react";

export const Logo = () => {
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
    <Link href="/" className="flex select-none items-center gap-4">
      <span className="flex h-10 w-10 cursor-default items-center justify-center rounded-br-xl rounded-tl-xl border-r-4 border-t-4 border-[var(--accent)] bg-[var(--bg-surface)] align-middle text-xl font-black uppercase text-[var(--text-primary)] transition-all delay-75 duration-700 hover:rotate-90 hover:scale-75">
        Z
      </span>
      <section className="flex items-center text-xl font-black tracking-wide text-[var(--text-primary)]">
        {items.map((item) => (
          <span
            key={item.id}
            className="transition-all duration-500 hover:-mt-2 hover:text-[var(--accent)] hover:duration-100"
          >
            {item.abjad}
          </span>
        ))}
      </section>
    </Link>
  );
};
