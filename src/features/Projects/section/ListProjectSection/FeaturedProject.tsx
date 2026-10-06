"use client";

import { useEffect, useRef, useState } from "react";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import Image from "next/image";
import { Reveal } from "@/components";
import { useHasHover } from "@/hooks/useHasHover";

export default function FeaturedProject({ project, flip, index }) {
  const [hover, setHover] = useState(false);
  const [inView, setInView] = useState(false);
  const imageRef = useRef(null);
  const hasHover = useHasHover();

  useEffect(() => {
    if (!project.gif || !imageRef.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, [project.gif]);

  const showGif = project.gif && (hasHover ? hover : inView);

  const stacks = project.stack.split(",").map((s) => s.trim());

  return (
    <Reveal>
      <article className="grid grid-cols-1 items-start gap-8 border-[3px] border-ink bg-paper p-6 md:p-8 lg:grid-cols-12 lg:gap-10">
        <div
          ref={imageRef}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
        >
          <a
            href={project.web || project.repo}
            target="_blank"
            rel="noreferrer"
            className="block border-[3px] border-ink hover:bg-sunken"
          >
            <Image
              src={showGif ? project.gif : project.image}
              alt={project.name}
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </a>
        </div>
        <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
          <p className="font-mono text-sm font-bold uppercase tracking-[2px]">
            Featured / 0{index + 1}
          </p>
          <h2 className="mt-2 font-display text-[32px] leading-[1.1] text-ink">
            {project.name}
          </h2>
          <p className="mt-4 text-base leading-[1.6] text-ink">{project.desc}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stacks.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {project.web && (
              <a
                href={project.web}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !px-6 !py-3 !text-xs"
              >
                Live Demo
                <ArrowSquareOut size={16} weight="bold" className="ml-2 inline" />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className={
                  project.web
                    ? "btn-secondary !px-6 !py-3 !text-xs"
                    : "btn-primary !px-6 !py-3 !text-xs"
                }
              >
                Source Code
                <GithubLogo size={16} weight="bold" className="ml-2 inline" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
