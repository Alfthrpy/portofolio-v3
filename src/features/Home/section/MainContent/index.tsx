import type { FC } from "react";
import { Reveal } from "@/components";
import GraphMotif from "@/components/GraphMotif";

const MainContent: FC = () => {
  return (
    <section className="relative flex min-h-[420px] w-full flex-col items-center justify-center overflow-hidden py-24 text-center">
      <GraphMotif
        variant="sparse"
        className="pointer-events-none absolute inset-0 m-auto h-[420px] w-[420px] opacity-[0.15] md:h-[560px] md:w-[560px]"
      />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-secondary md:text-4xl lg:text-5xl">
            Building intelligent,
            <br />
            reliable &amp; scalable AI solutions
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[46ch] text-sm text-primary md:text-base">
            I enjoy creating advanced machine learning models and backend
            systems to help businesses leverage data and technology
            effectively.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default MainContent;
