import React from "react";
import Link from "next/link";

import "../globals.css";
import { IoIosArrowDown } from "react-icons/io";

import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <main className="custom-height m-auto my-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 text-center">
      <section className="flex h-3/4 items-center justify-center">
        <div>
          <Reveal>
            <h1 className="text-3xl font-black">
              Hi, I&apos;m{" "}
              <span className="text-blue-primary">Nurul Izzah</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-3xl font-bold">I&apos;m a Frontend Developer</p>
          </Reveal>
        </div>
      </section>
      <section className="">
        <Reveal>
          <Link href="#about">
            <IoIosArrowDown className="animate-bounce text-5xl" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
};
