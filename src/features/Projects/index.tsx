import type { FC } from "react";
import {
  ProjectGetInTouchSection,
  ProjectListProjectSection,
} from "./section";
import { Reveal } from "@/components";

const Project: FC = () => {
  return (
    <div className="mt-40 flex flex-col items-center">
      <Reveal className="flex w-full items-center gap-4 self-start">
        <h1 className="whitespace-nowrap text-xl font-semibold text-secondary md:text-2xl">
          <span className="font-mono text-lg font-normal text-accent lg:text-xl">
            03.{" "}
          </span>
          Past Project Experience
        </h1>
        <div className="h-[1px] w-16 flex-1 bg-border_col"></div>
      </Reveal>
      <Reveal delay={0.08} className="mt-3 w-full self-start">
        <p className="text-sm text-primary md:text-base">
          Explore how I consistently delivered maximum results in my previous
          projects.
        </p>
      </Reveal>
      <ProjectListProjectSection />
      <ProjectGetInTouchSection />
    </div>
  );
};

export default Project;
