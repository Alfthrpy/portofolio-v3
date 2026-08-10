import type { FC } from "react";
import { Reveal } from "@/components";

const GetInTouchSection: FC = () => {
  return (
    <section className="my-40 flex flex-col items-center justify-center gap-3 text-center md:gap-5 md:my-52">
      <Reveal>
        <p className="font-mono text-accent">What's Next?</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="pb-1 text-4xl font-semibold tracking-tight text-secondary md:text-5xl">
          Get In Touch
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="w-full pb-8 text-sm leading-relaxed text-primary md:w-5/6 md:text-base lg:w-4/6 xl:w-1/2">
          I am currently seeking job opportunities to gain more experience in
          the industry. Whether you have any questions or simply want to say
          hi, I will do my best to get back to you!
        </p>
      </Reveal>
      <Reveal delay={0.18}>
        <a
          href="mailto:alfthr378@gmail.com"
          className="inline-block rounded-lg border-2 border-accent px-7 py-4 font-mono text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
        >
          Say Hello
        </a>
      </Reveal>
    </section>
  );
};

export default GetInTouchSection;
