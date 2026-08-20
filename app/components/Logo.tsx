import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="group select-none text-xl font-black tracking-normal text-[var(--text-primary)] transition duration-200 hover:text-[var(--accent)]"
    >
      Izzahnin<span className="text-[var(--accent)]">.</span>
    </Link>
  );
};
