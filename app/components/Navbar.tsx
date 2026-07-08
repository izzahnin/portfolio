"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiGithub, FiSun, FiMoon } from "react-icons/fi";
import { Logo } from "@components/Logo";
import { useTheme } from "@components/ThemeProvider";

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
  const { theme, toggle } = useTheme();
  const onNavClick = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-light)] bg-[var(--navbar-bg)] backdrop-blur-sm">
      <nav className="m-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-4 sm:flex">
          <ul className="flex items-baseline gap-7">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`text-sm transition-all duration-150 hover:text-[var(--text-primary)] ${
                    active === item.id ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"
                  }`}
                  onClick={() => setActive(item.id)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggle}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="rounded-md border border-[var(--border-medium)] p-1.5 text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {theme === "light" ? <FiMoon size={14} /> : <FiSun size={14} />}
          </button>

          <Link
            href="https://github.com/izzahnin"
            target="_blank"
            className="flex items-center gap-1.5 rounded-md border border-[var(--border-medium)] px-3 py-1.5 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FiGithub size={14} />
            GitHub
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button title="menu" className="flex flex-col gap-1.5 p-2 sm:hidden" onClick={onNavClick}>
          <span className={`h-px w-6 bg-[var(--text-primary)] transition-all duration-300 ${isNavOpen ? "translate-y-[0.4375rem] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-[var(--text-primary)] transition-all duration-300 ${isNavOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-[var(--text-primary)] transition-all duration-300 ${isNavOpen ? "-translate-y-[0.4375rem] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isNavOpen && (
        <div className="custom-height fixed w-full bg-[var(--mobile-menu-bg)] backdrop-blur-sm sm:hidden">
          <ul className="flex flex-col border-t border-[var(--border-light)]">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="flex h-14 w-full items-center justify-center text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                onClick={() => { setActive(item.id); onNavClick(); }}
              >
                {item.title}
              </Link>
            ))}
            <button
              onClick={() => { toggle(); onNavClick(); }}
              className="flex h-14 w-full items-center justify-center gap-2 text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent)]"
            >
              {theme === "light" ? <FiMoon size={15} /> : <FiSun size={15} />}
              {theme === "light" ? "Dark mode" : "Light mode"}
            </button>
            <Link
              href="https://github.com/izzahnin"
              target="_blank"
              className="flex h-14 w-full items-center justify-center gap-2 text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent)]"
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
