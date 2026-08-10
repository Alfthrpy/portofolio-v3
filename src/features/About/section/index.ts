import dynamic from "next/dynamic";

export const AboutHeaderSection = dynamic(() => import("./HeaderSection"));
export const AboutExperienceSection = dynamic(
  () => import("./ExperienceSection")
);
export const AboutStackSection = dynamic(() => import("./StackSection"));
