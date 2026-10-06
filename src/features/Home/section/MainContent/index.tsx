import type { FC } from "react";
import { Reveal } from "@/components";

const MainContent: FC = () => {
  return (
    <section className="flex w-full flex-col border-y-[5px] border-ink bg-ink py-16 text-center md:py-24">
      <Reveal>
        <h2 className="mx-auto max-w-[20ch] font-display text-[32px] leading-[1.05] text-paper md:text-[48px]">
          Building intelligent, reliable &amp; scalable AI solutions
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-6 max-w-[52ch] text-base leading-[1.6] text-paper">
          I enjoy creating advanced machine learning models and backend
          systems to help businesses leverage data and technology
          effectively.
        </p>
      </Reveal>
      <Reveal delay={0.18}>
        <div className="mt-8">
          <a href="/projects" className="btn-secondary !border-paper !bg-paper !text-ink hover:!bg-ink hover:!text-paper">
            See the work
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default MainContent;
