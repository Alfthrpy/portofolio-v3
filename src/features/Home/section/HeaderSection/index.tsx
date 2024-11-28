import type { FC } from "react";
import Image from 'next/image';

const HeaderSection: FC = () => {
  return (
    <section className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 ">
      <div className="md:w-full">
        <p
          className="ml-1 pb-3 text-sm text-accent md:block md:pb-7 md:text-base"
          data-aos="fade-up"
        >
          Hi, my name is
        </p>
        <h1
          className="pb-1 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          Muhammad Rizki Al-Fathir
        </h1>
        <h1
          className="pb-4 text-4xl font-semibold text-primary md:pb-8 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          I build things in AI and Web
        </h1>
        <p
          className="w-full text-sm leading-relaxed text-primary md:w-[540px] md:text-base"
          data-aos="zoom-in-up"
        >
          I'm a Backend Engineer and Machine Learning Engineer with experience in
          Laravel and Next.js at a beginner level. I have strong knowledge of AI,
          Machine Learning, and Deep Learning, and I'm experienced in building
          models using ML and Neural Networks.
        </p>
    </div>

      <div
        className="mt-10 text-sm md:mt-14"
        data-aos="flip-up"
        data-aos-duration="600"
      >
        <a
          className="rounded-[4px] border-2 border-accent px-7 py-5 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          href="https://drive.google.com/file/d/1UmpwUriO3WTtgplwykaFzg9vnyitPejL/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button>View my cv here!</button>
        </a>
      </div>
    </section>
  );
};

export default HeaderSection;
