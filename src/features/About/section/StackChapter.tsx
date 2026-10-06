"use client";

import { useState, type FC } from "react";
import { stacks, tools } from "@/utils/datas";
import { CardAbout } from "@/components";

// Stack as the closing poster chapter: giant header, same toggle + grid.
const StackChapter: FC = () => {
  const [active, setActive] = useState<"stack" | "tools">("stack");
  const data = active === "stack" ? stacks : tools;

  return (
    <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-t-[5px] border-ink text-ink">
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="text-right">
            <h2 className="font-display text-[clamp(2rem,9vw,5.5rem)] leading-[0.95]">
              STACK
            </h2>
            <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[2px]">
              Languages / Frameworks / Tools
            </p>
          </div>
          <div className="flex gap-1 border border-ink p-1 font-mono text-xs md:text-sm">
            <button
              onClick={() => setActive("stack")}
              className={`px-3 py-1.5 transition-colors duration-150 ${
                active === "stack"
                  ? "bg-ink text-paper"
                  : "text-ink hover:bg-ink hover:text-paper"
              }`}
            >
              Languages &amp; Frameworks
            </button>
            <button
              onClick={() => setActive("tools")}
              className={`px-3 py-1.5 transition-colors duration-150 ${
                active === "tools"
                  ? "bg-ink text-paper"
                  : "text-ink hover:bg-ink hover:text-paper"
              }`}
            >
              Tools
            </button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10">
          {Object.keys(data).map((key) => (
            <CardAbout
              key={key}
              images={data[key].src}
              title={data[key].name}
              informationLevel={data[key].level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackChapter;
