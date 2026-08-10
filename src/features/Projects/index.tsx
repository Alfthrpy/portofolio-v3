import type { FC } from "react";
import {
  ProjectGetInTouchSection,
  ProjectListProjectSection,
} from "./section";
import { Reveal } from "@/components";

const Project: FC = () => {
  return (
    <div className="mt-40 flex flex-col items-center">
      <Reveal className="flex w-full max-w-3xl items-center gap-4 self-start">
        <h1 className="text-xl font-semibold text-secondary md:text-2xl">
          <span className="font-mono text-lg font-normal text-accent lg:text-xl">
            03.{" "}
          </span>
          Past Project Experience
        </h1>
        <div className="h-[1px] w-32 bg-border_col md:w-96"></div>
      </Reveal>
      <Reveal delay={0.08} className="mt-3 w-full max-w-3xl self-start">
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
