import React from "react";
import Image from "next/image";
import { listIcon, IconCategory } from "../utils/listIcon";
import { Reveal } from "./Reveal";

const categories: { key: IconCategory; label: string; sublabel: string }[] = [
  { key: "frontend", label: "Frontend",      sublabel: "where it started"    },
  { key: "backend",  label: "Backend",       sublabel: "currently deepening" },
  { key: "database", label: "Database",      sublabel: ""                    },
  { key: "cloud",    label: "Cloud & Infra", sublabel: ""                    },
  { key: "devtool",  label: "Dev Tools",     sublabel: ""                    },
];

export const SectionTools = () => {
  return (
    <main id="tools" className="m-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-20">
      <Reveal>
        <section className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-display text-3xl font-semibold text-[var(--text-primary)]">Tools</h1>
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]"></span>
          </div>
          <p className="max-w-2xl text-center text-base text-[var(--text-secondary)] md:text-left">
            Technologies I use to build, test, and ship — grouped by where they sit in the stack.
          </p>
        </section>
      </Reveal>

      <div className="flex flex-col gap-8">
        {categories.map((cat) => {
          const icons = listIcon.filter((i) => i.category === cat.key);
          return (
            <Reveal key={cat.key}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-[var(--text-primary)]">{cat.label}</span>
                  {cat.sublabel && <span className="text-xs text-[var(--text-soft)]">{cat.sublabel}</span>}
                  <div className="h-px flex-1 bg-[var(--border-subtle)]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {icons.map((icon) => (
                    <div
                      key={icon.id}
                      className="flex items-center gap-2 rounded-lg bg-[var(--bg-surface)] px-3 py-2 transition duration-200 hover:bg-[var(--bg-surface-hover)]"
                    >
                      <Image
                        src={icon.svg}
                        alt={icon.name}
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] flex-shrink-0"
                        unoptimized
                      />
                      <span className="text-sm text-[var(--text-mid)]">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </main>
  );
};
