import type { FC } from "react";
import { Reveal } from "@/components";

const GetInTouchSection: FC = () => {
  return (
    <section className="my-24 flex flex-col items-center justify-center border-[3px] border-ink bg-paper px-6 py-16 text-center md:my-32 md:py-20">
      <Reveal>
        <p className="section-label">What&apos;s Next?</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="mt-3 font-display text-[40px] leading-[1.0] text-ink md:text-[64px]">
          Get In Touch
        </h1>
      </Reveal>
      <Reveal delay={0.12} className="w-full">
        <p className="mx-auto mt-6 w-full max-w-xl text-base leading-[1.6] text-ink">
          I am currently seeking job opportunities to gain more experience in
          the industry. Whether you have any questions or simply want to say
          hi, I will do my best to get back to you!
        </p>
      </Reveal>
      <Reveal delay={0.18}>
        <a href="mailto:alfthr378@gmail.com" className="btn-primary mt-8">
          Say Hello
        </a>
      </Reveal>
    </section>
  );
};

export default GetInTouchSection;
