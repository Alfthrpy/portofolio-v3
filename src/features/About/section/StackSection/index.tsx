"use client";

import { useState, type FC } from "react";
import { stacks, tools } from "@/utils/datas";
import { CardAbout, Reveal } from "@/components";

const StackSection: FC = () => {
  const [active, setActive] = useState<"stack" | "tools">("stack");
  const data = active === "stack" ? stacks : tools;

  return (
    <section className="flex flex-col space-y-10 pb-32">
      <Reveal className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-12 bg-border_col"></div>
          <h1 className="text-xl font-semibold text-secondary md:text-2xl">
            Stack &amp; Tools
          </h1>
        </div>
        <div className="flex gap-1 rounded-lg border border-border_col p-1 font-mono text-xs md:text-sm">
          <button
            onClick={() => setActive("stack")}
            className={`rounded-md px-3 py-1.5 transition-colors duration-300 ${
              active === "stack"
                ? "bg-accent/10 text-accent"
                : "text-primary hover:text-accent"
            }`}
          >
            Languages &amp; Frameworks
          </button>
          <button
            onClick={() => setActive("tools")}
            className={`rounded-md px-3 py-1.5 transition-colors duration-300 ${
              active === "tools"
                ? "bg-accent/10 text-accent"
                : "text-primary hover:text-accent"
            }`}
          >
            Tools
          </button>
        </div>
      </Reveal>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
        {Object.keys(data).map((key, index) => (
          <Reveal key={key} delay={Math.min(index * 0.03, 0.3)}>
            <CardAbout
              images={data[key].src}
              title={data[key].name}
              informationLevel={data[key].level}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
