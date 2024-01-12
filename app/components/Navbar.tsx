"use client";
import React, { useState } from "react";
import { Logo } from "./Logo";
import Link from "next/link";

export const Navbar = () => {
  const navItems = [
    { id: 1, title: "About", link: "/", as: "/#about" },
    { id: 2, title: "Projects", link: "/", as: "#projects" },
    { id: 3, title: "Contact", link: "/", as: "/#contact" },
  ];

  const [active, setActive] = useState<number | null>(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const onNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <main className="sticky top-0 z-50 bg-blue-dark">
      <nav className="flex h-14 w-full items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <button
            title="menu"
            className="flex flex-col justify-between p-2 text-2xl transition duration-200 ease-in-out hover:text-blue-primary sm:hidden"
            onClick={onNavClick}
          >
            <span
              className={`mb-1 h-1 w-6 bg-white transition-all duration-700 ease-in-out ${
                isNavOpen ? "translate-y-1.5 rotate-45 bg-blue-primary" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-white transition-all duration-700 ease-in-out ${
                isNavOpen
                  ? "hidden transition-opacity duration-700 ease-in-out"
                  : ""
              }`}
            ></span>
            <span
              className={`mt-1 h-1 w-6 bg-white transition-all duration-700 ease-in-out ${
                isNavOpen ? "-translate-y-1.5 -rotate-45 bg-blue-primary" : ""
              }`}
            ></span>
          </button>
        </div>
        <ul className="hidden items-baseline gap-10 sm:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                as={item.as}
                href={item.link}
                className={`${
                  active === item.id ? "opacity-100" : "opacity-40"
                } transition-all delay-75 duration-100 hover:opacity-100`}
                onClick={() => setActive(item.id)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <div className="flex overflow-hidden border-b border-blue-primary bg-blue-dark transition-all duration-700 ease-in-out sm:hidden">
          <ul className=" my-7 flex w-full flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                as={item.as}
                key={item.id}
                href={item.link}
                className="opacity-40 transition-all delay-75 duration-100 hover:opacity-100"
                onClick={() => setActive(item.id)}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};
