import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import typescriptIcon from "@icons/typescript.svg";
import nodejsIcon from "@icons/nodejs.svg";
import Image from "next/image";

export const ContentWorkExperience = () => {
  const datas = [
    {
      title: "Backend Engineer",
      url: "https://urbansolv.co.id/",
      company: "Urbansolv.",
      date: "Sep 2026 - Present",
      description: (
        <p>
          Developed and maintained RESTful APIs for web-based applications
          using NestJS and TypeScript. Designed and managed spatial data
          systems using PostgreSQL and PostGIS — districts, places, and map
          layers — including geospatial queries integrated with Prisma ORM,
          plus query optimization and response caching for API performance.
        </p>
      ),
      techs: [
        { name: "NestJS", icon: null },
        { name: "TypeScript", icon: typescriptIcon },
        { name: "PostgreSQL", icon: null },
        { name: "PostGIS", icon: null },
        { name: "Prisma", icon: null },
      ],
    },
    {
      title: "Intern Backend Engineer",
      url: "https://www.tritronik.com/",
      company: "Tritronik Indonesia",
      date: "Feb 2026 - Jul 2026",
      description: (
        <p>
          Architected a high-throughput event-driven CDR processing system:
          three microservices on Apache Kafka with at-least-once and
          exactly-once delivery semantics, RocksDB as local state store for
          stream processing, concurrency and idempotency controls against
          duplication and race conditions, horizontal scalability studies
          with high-load benchmarking, and Grafana observability for
          real-time health tracking.
        </p>
      ),
      techs: [
        { name: "Apache Kafka", icon: null },
        { name: "RocksDB", icon: null },
        { name: "Node.js", icon: nodejsIcon },
        { name: "Grafana", icon: null },
      ],
    },
    {
      title: "Freelance Web Developer",
      url: null,
      company: "Self Employed",
      date: "Oct 2024 - Present",
      description: (
        <p>
          Developed websites based on client requests — gathering
          requirements, designing, developing, and shipping tailored
          solutions on time with React.js and Next.js, keeping active
          communication throughout the project lifecycle for high-quality
          deliverables and repeat business.
        </p>
      ),
      techs: [
        { name: "React", icon: reactIcon },
        { name: "Next.js", icon: nextjsIcon },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {datas.map((data, index) => (
        <div key={index} className="border-b-[3px] border-ink py-6 first:pt-0">
          <h3 className="font-display text-xl leading-snug text-ink">
            {data.title}
            <span className="font-mono text-base font-bold">
              {" "}
              @{" "}
              {data.url ? (
                <a
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {data.company}
                </a>
              ) : (
                data.company
              )}
            </span>
          </h3>
          <p className="pt-2 font-mono text-sm font-bold uppercase tracking-[1px]">
            {data.date}
          </p>
          <div className="pt-3 text-base leading-[1.6] text-ink">
            {data.description}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.techs.map((tech, index) => (
              <span
                key={index}
                title={tech.name}
                className="chip inline-flex items-center gap-2"
              >
                {tech.icon ? (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={18}
                    height={18}
                  />
                ) : null}
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
