import type { FC } from "react";
import {
  Masthead,
  PhotoStrip,
  Bio,
  Chapters,
  StackChapter,
} from "./section";

const About: FC = () => {
  return (
    <>
      <Masthead />
      <PhotoStrip />
      <Bio />
      <Chapters />
      <StackChapter />
    </>
  );
};

export default About;
