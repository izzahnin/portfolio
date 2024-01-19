import React from "react";
import Link from "next/link";

import "../globals.css";
import { IoIosArrowDown } from "react-icons/io";

export const Hero = () => {
  return (
    <main className="custom-height m-auto my-auto flex w-full max-w-6xl flex-col items-center justify-center text-center px-4">
      <section className="flex h-3/4 items-center justify-center">
        <div>
          <h1 className="text-3xl font-black">
            Hi, I&apos;m <span className="text-blue-primary">Nurul Izzah</span>
          </h1>
          <p className="text-3xl font-bold">I&apos;m a Frontend Developer</p>
        </div>
      </section>
      <section className="">
        <Link href="#about">
          <IoIosArrowDown className="animate-bounce text-5xl" />
        </Link>
      </section>
    </main>
  );
};
