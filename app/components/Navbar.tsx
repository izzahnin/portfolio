"use client";
import React, { useState } from "react";
import { Logo } from "@components/Logo";
import Link from "next/link";

export const Navbar = () => {
  const navItems = [
    { id: 1, title: "About", link: "/#about" },
    { id: 2, title: "Projects", link: "/#projects" },
    { id: 3, title: "Tools", link: "/#tools" },
    { id: 4, title: "Contact", link: "/#contact" },
  ];

  const [active, setActive] = useState<number | null>(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const onNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <main className="sticky top-0 z-50 bg-blue-dark">
      <nav className="m-auto flex h-14 w-full max-w-6xl  items-center justify-between px-4">
        <div className="flex w-full items-center justify-between px-2 sm:px-0">
          <Logo />
          <button
            title="menu"
            className="flex flex-col justify-between p-2 text-2xl transition duration-200 ease-in-out hover:text-blue-primary sm:hidden"
            onClick={onNavClick}
          >
            <span
              className={`mb-1 h-1 w-6 bg-white transition-all duration-700 ease-in-out ${
                isNavOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-white transition-all duration-700 ease-in-out ${
                isNavOpen
                  ? "opacity-0 transition-all duration-700 ease-in-out"
                  : ""
              }`}
            ></span>
            <span
              className={`mt-1 h-1 w-6 bg-white transition-all duration-700 ease-in-out ${
                isNavOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
        <ul className="hidden items-baseline gap-10 sm:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={`${
                  active === item.id ? "opacity-100" : "opacity-40"
                } scroll-smooth transition-all delay-75 duration-100 hover:opacity-100`}
                onClick={() => {
                  setActive(item.id);
                  onNavClick();
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <div
          className={`custom-height fixed flex w-full transform items-center justify-center bg-blue-dark bg-opacity-90 transition-transform duration-300 ease-in-out sm:hidden ${
            isNavOpen ? "" : ""
          }`}
        >
          <ul className="flex w-full flex-col ">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="flex h-16 w-full items-center justify-center opacity-40 transition-all delay-75 duration-200 hover:bg-blue-primary hover:text-white hover:opacity-100"
                onClick={() => {
                  setActive(item.id);
                  onNavClick();
                }}
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
