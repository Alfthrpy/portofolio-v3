import type { FC } from "react";
import {
  ProjectGetInTouchSection,
  ProjectListProjectSection,
} from "./section";
import { Reveal } from "@/components";

const Project: FC = () => {
  return (
    <div className="mt-32 flex flex-col md:mt-40">
      <Reveal>
        <p className="section-label">03.</p>
        <h1 className="mt-2 font-display text-[40px] leading-[1.0] text-ink md:text-[64px]">
          Past Project Experience
        </h1>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-4 max-w-[60ch] border-l-[5px] border-ink pl-4 text-base leading-[1.6] text-ink">
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
