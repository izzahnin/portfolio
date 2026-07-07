import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiBook } from "react-icons/fi";
import { FeaturedProject } from "../data";
import { listIcon } from "../utils/listIcon";

const findIcon = (tech: string) =>
  listIcon.find(
    (i) =>
      tech.toLowerCase().includes(i.name.toLowerCase()) ||
      i.name.toLowerCase() === tech.toLowerCase().split(/[\s.]/)[0]
  );

interface Props {
  project: FeaturedProject;
}

export default function FeaturedProjectCard({ project }: Props) {
  const { title, label, problemStatement, stats, stack, features, links, thumbnail } = project;

  return (
    <article className="overflow-hidden rounded-2xl bg-[#1a1b1e]">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <span className="text-xs tracking-widest text-[#fdc500] uppercase">{label}</span>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fdc500]/50" />
        </div>
      </div>

      <div className="flex flex-col gap-6 p-5 lg:flex-row lg:gap-7">
        {/* Thumbnail */}
        <div className="w-full flex-shrink-0 lg:w-80">
          <div className="aspect-video overflow-hidden rounded-xl bg-[#111214]">
            <Image
              src={thumbnail}
              alt={title}
              width={1280}
              height={720}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">{problemStatement}</p>
          </div>

          {/* Stats grid — 4 cells for both cards */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-[#111214] p-3 text-center">
                <p className="font-display text-xl font-semibold text-[#fdc500]">{s.value}</p>
                <p className="mt-0.5 text-xs text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          {features.length > 0 && (
            <ul className="space-y-1.5">
              {features.map((f, i) => (
                <li key={i} className="flex gap-2 text-sm leading-6 text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#fdc500]" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => {
              const icon = findIcon(s);
              return (
                <span key={s} className="flex items-center gap-1.5 rounded-md border border-white/8 bg-[#111214] px-2.5 py-1 text-xs text-slate-400">
                  {icon && <Image src={icon.svg} alt={s} width={13} height={13} className="shrink-0" unoptimized />}
                  {s}
                </span>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 pt-1">
            {links.demo && (
              <Link href={links.demo} target="_blank"
                className="flex items-center gap-1.5 rounded-md bg-[#fdc500] px-4 py-1.5 text-sm font-semibold text-[#111214] transition hover:bg-[#fdc500]/80">
                <FiExternalLink size={13} /> Live Demo
              </Link>
            )}
            {links.github && (
              <Link href={links.github} target="_blank"
                className="flex items-center gap-1.5 rounded-md border border-white/10 px-4 py-1.5 text-sm text-slate-300 transition hover:border-[#fdc500] hover:text-[#fdc500]">
                <FiGithub size={13} /> GitHub
              </Link>
            )}
            {links.readme && (
              <Link href={links.readme} target="_blank"
                className="flex items-center gap-1.5 rounded-md border border-white/10 px-4 py-1.5 text-sm text-slate-300 transition hover:border-[#fdc500] hover:text-[#fdc500]">
                <FiBook size={13} /> README
              </Link>
            )}
            {links.backendReadme && (
              <Link href={links.backendReadme} target="_blank"
                className="flex items-center gap-1.5 rounded-md border border-white/10 px-4 py-1.5 text-sm text-slate-300 transition hover:border-[#fdc500] hover:text-[#fdc500]">
                <FiBook size={13} /> Backend README
              </Link>
            )}
            {links.frontendReadme && (
              <Link href={links.frontendReadme} target="_blank"
                className="flex items-center gap-1.5 rounded-md border border-white/10 px-4 py-1.5 text-sm text-slate-300 transition hover:border-[#fdc500] hover:text-[#fdc500]">
                <FiBook size={13} /> Frontend README
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
