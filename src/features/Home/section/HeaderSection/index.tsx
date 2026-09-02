import type { FC } from "react";
import { Reveal } from "@/components";
import GraphMotif from "@/components/GraphMotif";

const HeaderSection: FC = () => {
  return (
    <section className="grid min-h-[100dvh] w-full grid-cols-1 items-center gap-10 pt-28 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-16">
      <div className="leading-relaxed">
        <Reveal>
          <p className="ml-1 pb-3 text-sm text-accent md:pb-5">
            Hi, my name is
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="pb-1 text-4xl font-semibold tracking-tight text-secondary md:pb-3 md:text-5xl lg:text-6xl">
            Muhammad Rizki Al-Fathir
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <h1 className="pb-6 text-4xl font-semibold tracking-tight text-primary md:pb-8 md:text-5xl lg:text-6xl">
            I build things in AI and Web
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="w-full text-sm leading-relaxed text-primary md:w-[480px] md:text-base">
            Backend and ML Engineer building high-throughput data platforms,
            agentic AI pipelines, and full-stack apps.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 text-sm md:mt-12">
            <a
              className="inline-block rounded-lg border-2 border-accent px-6 py-4 text-accent transition-[background-color,transform] duration-300 hover:bg-accent hover:bg-opacity-10 active:scale-[0.96]"
              href="https://drive.google.com/file/d/1UmpwUriO3WTtgplwykaFzg9vnyitPejL/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
          </div>
        </Reveal>

        <div className="mt-12 flex justify-end lg:hidden" aria-hidden="true">
          <Reveal delay={0.3}>
            <GraphMotif
              className="h-auto w-56 text-border_col opacity-70"
              variant="sparse"
            />
          </Reveal>
        </div>
      </div>

      <div className="hidden lg:block" aria-hidden="true">
        <Reveal delay={0.3}>
          <div className="rounded-xl border border-border_col bg-base_col_darker/40 p-6">
            <GraphMotif className="h-auto w-full text-border_col" variant="dense" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeaderSection;
