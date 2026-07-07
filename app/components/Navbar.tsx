"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { Logo } from "@components/Logo";

export const Navbar = () => {
  const navItems = [
    { id: 1, title: "About",      link: "/#about"      },
    { id: 2, title: "Stack",      link: "/#highlights" },
    { id: 3, title: "Experience", link: "/#experience" },
    { id: 4, title: "Projects",   link: "/#projects"   },
    { id: 5, title: "Contact",    link: "/#contact"    },
  ];

  const [active, setActive] = useState<number | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const onNavClick = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#111214]/95 backdrop-blur-sm">
      <nav className="m-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-baseline gap-7">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`text-sm transition-all duration-150 hover:text-white ${
                    active === item.id ? "text-white" : "text-slate-500"
                  }`}
                  onClick={() => setActive(item.id)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://github.com/izzahnin"
            target="_blank"
            className="flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-sm text-slate-400 transition hover:border-[#fdc500] hover:text-[#fdc500]"
          >
            <FiGithub size={14} />
            GitHub
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button title="menu" className="flex flex-col gap-1.5 p-2 sm:hidden" onClick={onNavClick}>
          <span className={`h-px w-6 bg-white transition-all duration-300 ${isNavOpen ? "translate-y-[0.4375rem] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-white transition-all duration-300 ${isNavOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-white transition-all duration-300 ${isNavOpen ? "-translate-y-[0.4375rem] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isNavOpen && (
        <div className="custom-height fixed w-full bg-[#111214]/98 backdrop-blur-sm sm:hidden">
          <ul className="flex flex-col border-t border-white/5">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="flex h-14 w-full items-center justify-center text-sm text-slate-400 transition hover:text-white"
                onClick={() => { setActive(item.id); onNavClick(); }}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="https://github.com/izzahnin"
              target="_blank"
              className="flex h-14 w-full items-center justify-center gap-2 text-sm text-slate-400 transition hover:text-[#fdc500]"
              onClick={onNavClick}
            >
              <FiGithub size={15} /> GitHub
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};
