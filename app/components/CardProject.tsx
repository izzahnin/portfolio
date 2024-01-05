import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FiGithub, FiExternalLink } from "react-icons/fi";

interface CardProjectProps {
  title: string;
  description: string;
  linkGithub: string;
  linkDemo: string;
  thumbnail: string;
  tools: string[];
}

export default function CardProject(props: CardProjectProps) {
  const { title, description, linkGithub, linkDemo, thumbnail, tools } = props;
  return (
    <main className="mx-auto flex max-w-sm max-h-min flex-col gap-5 md:justify-center">
      <Link href={linkDemo} target="_blank">
        <section className=" relative flex max-h-min max-w-sm flex-col justify-center rounded-xl border border-gray-300 p-2 transition-all delay-75 duration-200 hover:-translate-y-2 hover:border-blue-primary hover:opacity-75">
          <Image
            src={thumbnail}
            alt="Project 1"
            width={100}
            height={100}
            className="h-full  w-full rounded-md object-cover"
          />
        </section>
      </Link>
      <section>
        <div className="flex">
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
          <div className="flex gap-2 text-blue-primary">
            <Link href={linkDemo}>
              <FiExternalLink />
            </Link>
            <Link href={linkGithub}>
              <FiGithub />
            </Link>
          </div>
        </div>
        <ul className="my-2 flex gap-2 text-sm">
          {tools.map((tool) => (
            <li
              className="cursor-default rounded-lg bg-blue-950 px-2 py-1 hover:opacity-70"
              key={tool}
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
