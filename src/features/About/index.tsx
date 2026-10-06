import type { FC } from "react";
import { Masthead, Bio, Chapters, StackChapter } from "./section";

const About: FC = () => {
  return (
    <>
      <Masthead />
      <Bio />
      <Chapters />
      <StackChapter />
    </>
  );
};

export default About;
