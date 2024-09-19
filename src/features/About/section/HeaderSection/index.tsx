import type { FC } from "react";
import Image from "next/image";
import fathir from "@images/IMG-20240627-WA0018.jpg";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
      <div className="flex flex-col justify-center text-primary">
        <div className="flex items-center gap-5 pb-10">
          <h1
            className="text-xl font-semibold text-secondary lg:text-2xl"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <span className="font-mono text-lg font-normal text-accent lg:text-xl">
              02.{" "}
            </span>
            About Me
          </h1>
          <div
            className="h-[1px] w-32 bg-primary md:w-96"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
        <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
          <p data-aos="zoom-in-right">
          Hello! My name is <span className="text-accent">Muhammad Rizki Al-Fathir</span>, an Informatics Engineering student with a strong interest in Backend Engineering and Machine Learning. I have experience working with Laravel and Next.js at a beginner level. My knowledge extends to AI, Machine Learning, and Deep Learning, and I’m skilled in building models using ML and Neural Networks.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
          As an Informatics Engineering student, I have strong knowledge in Backend Engineering, Machine Learning, and experience in web programming with Laravel and Next.js. I’m skilled at creating AI models, including Neural Networks, and I can design user-friendly and visually captivating websites and applications.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
          I'm always striving to enhance my skills and stay updated with the latest technologies through personal projects and continuous learning.
          </p>
        </div>
      </div>
      <div
        className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="grayscale transition-all duration-500 hover:grayscale-0">
          <Image
            src={fathir}
            alt="fathir"
            height={1800}
            className="scale-50 lg:scale-100 2xl:scale-75"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
