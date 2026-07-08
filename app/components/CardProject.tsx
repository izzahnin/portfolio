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
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border-light)] bg-[var(--bg-surface)] transition duration-300 hover:border-[var(--accent)]">
      <div className="aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={1280}
          height={720}
          className="h-full w-full object-cover object-top"
          unoptimized
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">{title}</h3>
          <div className="flex shrink-0 gap-2 text-[var(--text-soft)]">
            {linkDemo && (
              <Link href={linkDemo} target="_blank" className="transition hover:text-[var(--accent)]" title="Live Demo">
                <FiExternalLink size={15} />
              </Link>
            )}
            {linkGithub && (
              <Link href={linkGithub} target="_blank" className="transition hover:text-[var(--accent)]" title="GitHub">
                <FiGithub size={15} />
              </Link>
            )}
          </div>
        </div>

        <p className="text-xs leading-5 text-[var(--text-muted)]">{description}</p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {tools.map((tool) => {
            const icon = listIcon.find((i) => i.name === tool);
            return (
              <li
                key={tool}
                className="flex items-center gap-1 rounded bg-[var(--bg)] px-2 py-0.5 text-xs"
                style={{ color: icon?.color ?? "var(--text-muted)" }}
              >
                {icon && <Image src={icon.svg} alt={tool} width={12} height={12} className="shrink-0" unoptimized />}
                {tool}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
