import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FiGithub, FiExternalLink } from "react-icons/fi";

import { listIcon } from "../utils/listIcon";
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
    <main className="mx-auto flex max-h-min max-w-sm flex-col gap-3 md:justify-center">
      <section>
        <section className=" relative flex  flex-col justify-center rounded-xl border border-gray-300 object-cover p-2 transition-all delay-75 duration-200 hover:border-blue-primary">
          <div className="aspect-video overflow-hidden rounded-md">
            <Image
              src={thumbnail}
              alt="Project 1"
              width={1920}
              height={100}
              className="h-max w-full transition-transform ease-linear hover:-translate-y-1/4 hover:duration-1000"
            />
          </div>
        </section>
      </section>
      <section>
        <div className="flex">
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
          <div className="flex gap-2 text-blue-primary">
            <Link href={linkDemo} target="_blank">
              <FiExternalLink />
            </Link>
            <Link href={linkGithub}>
              <FiGithub />
            </Link>
          </div>
        </div>
        <ul className="my-2 flex gap-2 text-xs">
          {tools.map((tool) => (
            <li
              key={tool}
              className="flex cursor-default items-center gap-2 rounded-md  "
              style={{
                color: listIcon.find((icon) => icon.name === tool)?.color,
              }}
            >
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
