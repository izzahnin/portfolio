import React from "react";
import Logo from "./Logo";

export const Navbar = () => {
  return (
    <nav>
      <Logo />
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
