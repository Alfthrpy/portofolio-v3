import type { FC } from "react";
import Image from "next/image";
import fathir from "@images/IMG-20240627-WA0018.jpg";
import { Reveal } from "@/components";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between gap-10 lg:mt-6 lg:min-h-[100dvh] lg:flex-row xl:mt-0">
      <div className="flex flex-col justify-center text-primary">
        <Reveal>
          <div className="flex items-center gap-5 pb-10">
            <h1 className="text-xl font-semibold text-secondary lg:text-2xl">
              <span className="font-mono text-lg font-normal text-accent lg:text-xl">
                02.{" "}
              </span>
              About Me
            </h1>
            <div className="h-[1px] w-32 bg-border_col md:w-96"></div>
          </div>
        </Reveal>
        <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
          <Reveal delay={0.06}>
            <p>
              Hello! My name is{" "}
              <span className="text-accent">Muhammad Rizki Al-Fathir</span>,
              an Informatics Engineering graduate with a strong interest in
              Backend Engineering and Machine Learning. I recently interned as
              a Backend Engineer at Tritronik Indonesia, where I worked on a
              mediation platform handling buffering, windowing, and a
              RocksDB-backed persistence layer. My knowledge extends to AI,
              Machine Learning, and Deep Learning, and I'm skilled in building
              models using ML and Neural Networks.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              I have strong knowledge in Backend Engineering, Machine
              Learning, and experience in web programming with Laravel and
              Next.js. I'm skilled at creating AI models and agentic AI
              pipelines, including Neural Networks, and I can design
              user-friendly and visually captivating websites and
              applications.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p>
              I'm always striving to enhance my skills and stay updated with
              the latest technologies through personal projects and
              continuous learning.
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal delay={0.16} className="pl-0 xl:pl-24">
        <div className="overflow-hidden rounded-xl border border-border_col grayscale transition-all duration-500 hover:grayscale-0">
          <Image src={fathir} alt="fathir" height={480} className="w-[280px] object-cover md:w-[340px]" />
        </div>
      </Reveal>
    </section>
  );
};

export default HeaderSection;
