import type { FC } from "react";
import {
  AboutExperienceSection,
  AboutHeaderSection,
  AboutStackSection,
} from "./section";

const About: FC = () => {
  return (
    <>
      <AboutHeaderSection />
      <AboutExperienceSection />
      <AboutStackSection />
    </>
  );
};

export default About;
