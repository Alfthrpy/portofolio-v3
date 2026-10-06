import type { FC } from "react";
import Image from "next/image";
import fathir from "@images/IMG-20240627-WA0018.jpg";
import { Reveal } from "@/components";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-start justify-between gap-10 lg:mt-10 lg:min-h-[100dvh] lg:flex-row lg:items-center">
      <div className="flex max-w-2xl flex-col justify-center">
        <Reveal>
          <div className="flex items-center gap-5 pb-8">
            <p className="section-label">02. About Me</p>
            <div className="h-[3px] w-32 bg-ink md:w-64" />
          </div>
        </Reveal>
        <div className="flex flex-col gap-5 text-base leading-[1.6] text-ink">
          <Reveal delay={0.06}>
            <p>
              Hello! My name is{" "}
              <span className="bg-ink px-1 font-semibold text-paper">
                Muhammad Rizki Al-Fathir
              </span>
              , an Informatics Engineering graduate with a strong interest in
              Backend Engineering and Machine Learning. I work as a Backend
              Engineer at Urbansolv, building REST APIs with NestJS and
              spatial data systems with PostgreSQL/PostGIS, and previously
              interned at Tritronik Indonesia on high-throughput
              event-driven data pipelines.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              I have strong knowledge in Backend Engineering, Machine
              Learning, and experience in web programming with Laravel and
              Next.js. I&apos;m skilled at creating AI models and agentic AI
              pipelines, including Neural Networks, and I can design
              user-friendly and visually captivating websites and
              applications.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p>
              I&apos;m always striving to enhance my skills and stay updated
              with the latest technologies through personal projects and
              continuous learning.
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal delay={0.16} className="shrink-0">
        <div className="border-[3px] border-ink">
          <Image
            src={fathir}
            alt="Muhammad Rizki Al-Fathir"
            height={480}
            className="w-[280px] object-cover grayscale md:w-[340px]"
          />
          <p className="border-t-[3px] border-ink bg-ink px-3 py-2 font-mono text-xs font-bold uppercase tracking-[2px] text-paper">
            The engineer
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default HeaderSection;
