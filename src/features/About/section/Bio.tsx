import type { FC } from "react";

// Editorial bio: two-column spread on desktop, large measure, no labels.
const Bio: FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="gap-10 text-lg leading-[1.7] text-ink md:columns-2">
        <p className="mb-6 max-w-[68ch] break-inside-avoid">
          Hello! My name is{" "}
          <span className="bg-ink px-1 font-semibold text-paper">
            Muhammad Rizki Al-Fathir
          </span>
          , an Informatics Engineering graduate with a strong interest in
          Backend Engineering and Machine Learning. I work as a Backend
          Engineer at Urbansolv, building REST APIs with NestJS and spatial
          data systems with PostgreSQL/PostGIS, and previously interned at
          Tritronik Indonesia on high-throughput event-driven data pipelines.
        </p>
        <p className="mb-6 max-w-[68ch] break-inside-avoid">
          I have strong knowledge in Backend Engineering, Machine Learning,
          and experience in web programming with Laravel and Next.js. I&apos;m
          skilled at creating AI models and agentic AI pipelines, including
          Neural Networks, and I can design user-friendly and visually
          captivating websites and applications.
        </p>
        <p className="max-w-[68ch] break-inside-avoid">
          I&apos;m always striving to enhance my skills and stay updated with
          the latest technologies through personal projects and continuous
          learning.
        </p>
      </div>
    </section>
  );
};

export default Bio;
