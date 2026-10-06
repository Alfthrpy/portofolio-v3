import type { FC } from "react";
import { Reveal } from "@/components";

const FACTS = [
  { label: "BASE", value: "BANDUNG, ID" },
  { label: "FOCUS", value: "BACKEND / ML / AGENTIC AI" },
  { label: "STATUS", value: "OPEN TO WORK" },
  { label: "STACK", value: "PYTHON / JAVA / TS" },
];

const HeaderSection: FC = () => {
  return (
    <section className="grid min-h-[100dvh] w-full grid-cols-1 items-center gap-10 pt-28 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-16">
      <div>
        <Reveal>
          <p className="section-label pb-4">Hi, my name is</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display text-[40px] leading-[1.0] text-ink md:text-[64px]">
            Muhammad Rizki Al-Fathir
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <h2 className="mt-4 border-t-[3px] border-ink pt-4 font-display text-[24px] leading-[1.1] text-ink md:text-[32px]">
            I build things in AI and Web
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[52ch] text-base leading-[1.6] text-ink md:text-lg">
            Backend and ML Engineer building high-throughput data platforms,
            agentic AI pipelines, and full-stack apps.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10">
            <a
              className="btn-primary"
              href="https://drive.google.com/file/d/1UmpwUriO3WTtgplwykaFzg9vnyitPejL/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div className="border-[3px] border-ink bg-paper">
          <div className="border-b-[3px] border-ink bg-ink px-4 py-2">
            <p className="font-mono text-xs font-bold uppercase tracking-[2px] text-paper">
              Spec Sheet
            </p>
          </div>
          <dl>
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[110px_1fr] border-b-[3px] border-ink last:border-b-0"
              >
                <dt className="border-r-[3px] border-ink px-4 py-3 font-mono text-xs font-bold uppercase tracking-[1px]">
                  {fact.label}
                </dt>
                <dd className="px-4 py-3 font-mono text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
};

export default HeaderSection;
