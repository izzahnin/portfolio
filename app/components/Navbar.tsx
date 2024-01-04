"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

export const Navbar = () => {
  const [active, setActive] = useState<number | null>(null);

  const navItems = [
    { id: 1, title: "About", link: "/" },
    { id: 2, title: "Projects", link: "/" },
    { id: 3, title: "Contact", link: "/" },
  ];

  return (
    <nav className="flex h-14 items-center justify-between ">
      <Logo />
      <ul className="flex items-baseline gap-10 ">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={` transition-all delay-75 duration-100 ${
              active === item.id ? "" : "opacity-40 hover:opacity-100 "
            }`}
            onClick={() => setActive(item.id)}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
