import type { FC, ReactNode } from "react";
import Image from "next/image";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import typescriptIcon from "@icons/typescript.svg";
import nodejsIcon from "@icons/nodejs.svg";

type Tech = { name: string; icon?: string };

type Entry = {
  title: string;
  org?: string;
  orgUrl?: string | null;
  date: string;
  description: ReactNode;
  techs?: Tech[];
};

type Chapter = {
  id: string;
  title: string;
  meta: string;
  align: "left" | "right";
  tone: "paper" | "ink";
  entries: Entry[];
};

const linkCls = (dark: boolean) =>
  dark
    ? "text-paper underline decoration-2 underline-offset-2 hover:bg-paper hover:text-ink"
    : "text-underline";

const EntryRow: FC<{ entry: Entry; dark: boolean }> = ({ entry, dark }) => (
  <article
    className={`border-t-[3px] py-8 last:border-b-[3px] ${
      dark ? "border-paper" : "border-ink"
    }`}
  >
    <h3 className="font-display text-xl leading-snug md:text-2xl">
      {entry.title}
    </h3>
    <div className="mt-2 flex flex-col gap-1 font-mono text-xs font-bold uppercase tracking-[2px] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <p>
        @{" "}
        {entry.orgUrl ? (
          <a
            href={entry.orgUrl}
            target="_blank"
            rel="noreferrer"
            className={linkCls(dark)}
          >
            {entry.org}
          </a>
        ) : (
          entry.org
        )}
      </p>
      <p className="shrink-0">{entry.date}</p>
    </div>
    <div className="mt-4 max-w-[68ch] text-base leading-[1.7]">
      {entry.description}
    </div>
    {entry.techs && (
      <div className="mt-4 flex flex-wrap gap-2">
        {entry.techs.map((tech) => (
          <span
            key={tech.name}
            title={tech.name}
            className="chip inline-flex items-center gap-2"
          >
            {tech.icon ? (
              <Image src={tech.icon} alt={tech.name} width={16} height={16} />
            ) : null}
            {tech.name}
          </span>
        ))}
      </div>
    )}
  </article>
);

const Chapter: FC<{ chapter: Chapter }> = ({ chapter }) => {
  const dark = chapter.tone === "ink";
  const right = chapter.align === "right";

  return (
    <section
      className={`relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 ${
        dark ? "bg-ink text-paper" : "border-t-[5px] border-ink text-ink"
      }`}
    >
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-10 md:py-24">
        <div className={right ? "text-right" : ""}>
          <h2 className="font-display text-[clamp(2rem,9vw,5.5rem)] leading-[0.95]">
            {chapter.title}
          </h2>
          <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[2px]">
            {chapter.meta}
          </p>
        </div>
        <div className="mt-12">
          {chapter.entries.map((entry, i) => (
            <EntryRow key={i} entry={entry} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
};

const chapters: Chapter[] = [
  {
    id: "work",
    title: "WORK",
    meta: "Sep 2026 — Present / 3 roles",
    align: "left",
    tone: "ink",
    entries: [
      {
        title: "Backend Engineer",
        org: "Urbansolv.",
        orgUrl: "https://urbansolv.co.id/",
        date: "Sep 2026 — Present",
        description:
          "Developed and maintained RESTful APIs for web-based applications using NestJS and TypeScript. Designed and managed spatial data systems using PostgreSQL and PostGIS — districts, places, and map layers — including geospatial queries integrated with Prisma ORM, plus query optimization and response caching for API performance.",
        techs: [
          { name: "NestJS" },
          { name: "TypeScript", icon: typescriptIcon },
          { name: "PostgreSQL" },
          { name: "PostGIS" },
          { name: "Prisma" },
        ],
      },
      {
        title: "Intern Backend Engineer",
        org: "Tritronik Indonesia",
        orgUrl: "https://www.tritronik.com/",
        date: "Feb 2026 — Jul 2026",
        description:
          "Architected a high-throughput event-driven CDR processing system: three microservices on Apache Kafka with at-least-once and exactly-once delivery semantics, RocksDB as local state store for stream processing, concurrency and idempotency controls against duplication and race conditions, horizontal scalability studies with high-load benchmarking, and Grafana observability for real-time health tracking.",
        techs: [
          { name: "Apache Kafka" },
          { name: "RocksDB" },
          { name: "Node.js", icon: nodejsIcon },
          { name: "Grafana" },
        ],
      },
      {
        title: "Freelance Web Developer",
        org: "Self Employed",
        orgUrl: null,
        date: "Oct 2024 — Present",
        description:
          "Developed websites based on client requests — gathering requirements, designing, developing, and shipping tailored solutions on time with React.js and Next.js, keeping active communication throughout the project lifecycle for high-quality deliverables and repeat business.",
        techs: [
          { name: "React", icon: reactIcon },
          { name: "Next.js", icon: nextjsIcon },
        ],
      },
    ],
  },
  {
    id: "education",
    title: "EDUCATION",
    meta: "Aug 2020 — Jul 2026",
    align: "right",
    tone: "paper",
    entries: [
      {
        title: "Informatics Engineering",
        org: "Sunan Gunung Jati State Islamic University, Bandung",
        orgUrl: "https://if.uinsgd.ac.id/",
        date: "Aug 2020 — Jul 2026",
        description: (
          <ul className="flex list-inside list-disc flex-col gap-3">
            <li>
              I enrolled in the Informatics Engineering program with the
              motivation that commercial jobs would be replaced by technology
              in the future, so I decided to pursue this field of study.
            </li>
            <li>
              From the beginning of the semester, I was interested in AI and
              machine learning. In the second semester, I had already created
              a classification model.
            </li>
            <li>
              In my 4th semester, my team and I participated in the{" "}
              <a className="text-underline" href="https://www.iicyms.or.id/">
                IICYMS competition
              </a>{" "}
              where we won a gold medal in the computer science category. This
              achievement deepened my interest and sparked a growing passion
              for machine learning.
            </li>
            <li>
              For my undergraduate thesis, I built{" "}
              <a
                className="text-underline"
                href="https://github.com/Alfthrpy/STUD"
              >
                STUD
              </a>
              , a multi-agent AI pipeline that decomposes courses into atomic
              concepts and generates pedagogically sound slide decks, and
              graduated in July 2026.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "organizations",
    title: "ORGANIZATIONS",
    meta: "2022 — 2024 / 2 orgs",
    align: "left",
    tone: "paper",
    entries: [
      {
        title: "Pers Division",
        org: "HIMAJA Ma'had Al-Jami'ah UIN Bandung",
        orgUrl: "https://www.instagram.com/himaja_uinsgd/d",
        date: "Sep 2022 — Jul 2023",
        description:
          "As a member of the Press Division in our organization, I am responsible for communicating our activities and achievements to the public. I focus on creating engaging content that informs and inspires our audience. My role allows me to enhance my writing skills, collaborate with a dynamic team, and contribute to building our organization's brand and visibility.",
      },
      {
        title: "Member of Salman Digital Lab",
        org: "BMKA",
        orgUrl: "https://www.instagram.com/kaderisasisalman/",
        date: "Jul 2023 — Jan 2024",
        description:
          "As a member of Salman Digital Lab, I have the opportunity to deepen my knowledge of web development. Here, I engage in hands-on projects and collaborate with fellow members, enhancing my skills in programming and UI design. The lab provides a supportive environment for learning and innovation, allowing me to explore the latest technologies and trends in the digital space.",
      },
    ],
  },
  {
    id: "awards",
    title: "AWARDS",
    meta: "2022 — 2024 / 3 wins",
    align: "right",
    tone: "paper",
    entries: [
      {
        title: "3rd Place IT Cup IT Fair",
        org: "Informatics Engineering UIN Bandung",
        orgUrl:
          "https://idcamp.ioh.co.id/news/861/coding-scholarship-offline-training-gratis-idcamp-x-kadin",
        date: "Sep 2022",
        description:
          "Won the IT Cup programming competition, selected from numerous participants for my exceptional performance in solving programming problems and case studies. Successfully completed a series of challenging questions that emphasized programming logic and efficient coding practices.",
      },
      {
        title: "3rd Place Hackathon IT Fair",
        org: "Informatics Engineering UIN Bandung",
        orgUrl: "https://bdd.kemenparekraf.go.id/",
        date: "Sep 2023",
        description:
          "Won a hackathon focused on web development, where I collaborated with a team to create an innovative solution for a specific problem provided during the event. Designed and implemented a web application that effectively addressed the challenge, showcasing creativity and technical skills.",
      },
      {
        title: "Gold Medal IICYMS — Computer Science",
        org: "IYSA",
        orgUrl: "https://www.iysa.or.id/",
        date: "Aug 2024",
        description: (
          <>
            Won the IICYMS competition Gold Medal in the Computer Science
            category, where my team developed a semantic search engine
            application for the Quran. Link Application:{" "}
            <a
              className="text-underline"
              href="https://beta-sequran.vercel.app/"
            >
              Sequran
            </a>
          </>
        ),
      },
    ],
  },
  {
    id: "certification",
    title: "CERTIFICATION",
    meta: "Dicoding / Kaggle / FreeCodeCamp",
    align: "left",
    tone: "paper",
    entries: [
      {
        title: "Course",
        org: "Dicoding",
        orgUrl: "https://www.dicoding.com",
        date: "4 certificates",
        description: (
          <ul className="flex flex-col gap-2">
            {[
              ["Java Beginner", "https://www.dicoding.com/certificates/JMZV32KQRPN9"],
              ["Beginner Machine Learning Engineer", "https://www.dicoding.com/certificates/2VX3OJE7VZYQ"],
              ["Learn the Basics of Data Visualization", "https://www.dicoding.com/certificates/JLX1W7QWGP72"],
              ["Python Beginner", "https://www.dicoding.com/certificates/GRX52D802X0M"],
            ].map(([name, link]) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        ),
      },
      {
        title: "Course",
        org: "Kaggle",
        orgUrl: "https://www.kaggle.com/",
        date: "7 certificates",
        description: (
          <ul className="flex flex-col gap-2">
            {[
              ["Python", "https://www.kaggle.com/learn/certification/alfthrpy/python"],
              ["Introduction to Machine Learning", "https://www.kaggle.com/learn/certification/alfthrpy/intro-to-machine-learning"],
              ["Pandas Python", "https://www.kaggle.com/learn/certification/alfthrpy/pandas"],
              ["Intermediate Machine Learning", "https://www.kaggle.com/learn/certification/alfthrpy/intermediate-machine-learning"],
              ["Data Visualization", "https://www.kaggle.com/learn/certification/alfthrpy/data-visualization"],
              ["Feature Engineering", "https://www.kaggle.com/learn/certification/alfthrpy/feature-engineering"],
              ["Introduction to Deep Learning", "https://www.kaggle.com/learn/certification/alfthrpy/intro-to-deep-learning"],
            ].map(([name, link]) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        ),
      },
      {
        title: "Course",
        org: "FreeCodeCamp",
        orgUrl: "https://www.freecodecamp.org",
        date: "3 certificates",
        description: (
          <ul className="flex flex-col gap-2">
            {[
              ["Responsive Web Design", "https://www.freecodecamp.org/certification/fccd895ee9e-97f3-4be1-8665-c3385f3fb338/responsive-web-design"],
              ["Javascript Algorithms and Data Structures", "https://www.freecodecamp.org/certification/fccd895ee9e-97f3-4be1-8665-c3385f3fb338/javascript-algorithms-and-data-structures-v8"],
              ["Backend Development and APIs", "https://www.freecodecamp.org/certification/fccd895ee9e-97f3-4be1-8665-c3385f3fb338/back-end-development-and-apis"],
            ].map(([name, link]) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        ),
      },
    ],
  },
];

const Chapters: FC = () => {
  return (
    <>
      {chapters.map((chapter) => (
        <Chapter key={chapter.id} chapter={chapter} />
      ))}
    </>
  );
};

export default Chapters;
