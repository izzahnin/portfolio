import React from "react";
import Link from "next/link";

import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <main className="flex flex-col w-full items-center gap-4 my-4"> 
      <section className="flex align-middle items-center w-1/3 justify-between text-2xl">
        <Link href="https://github.com/izzahnin" target="_blank" className="hover:text-blue-primary" >
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/nurul-izzah-nurhidayat-397346289/" target="_blank" className="hover:text-blue-primary">
          <FaLinkedin />
        </Link>
        <Link href="https://www.instagram.com/izzah_nin/" target="_blank" className="hover:text-blue-primary">
          <FaInstagramSquare />
        </Link>
      </section>
    </main>
  );
};
