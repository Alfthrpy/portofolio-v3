"use client";

import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import Image from "next/image";
import { Reveal } from "@/components";

export default function FeaturedProject({ project, flip, index }) {
  const stacks = project.stack.split(",").map((s) => s.trim());

  return (
    <Reveal>
      <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          <a
            href={project.web || project.repo}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-xl transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99]"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={450}
              className="w-full rounded-xl object-cover ring-1 ring-inset ring-border_col transition-shadow duration-300 group-hover:shadow-[0_32px_64px_-32px_rgba(95,212,255,0.25)]"
            />
          </a>
        </div>
        <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
          <p className="font-mono text-sm text-accent">
            0{index + 1}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary md:text-3xl">
            {project.name}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
            {project.desc}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stacks.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-border_col px-2.5 py-1 font-mono text-xs text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-5">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-accent"
              >
                <GithubLogo size={18} weight="light" />
                Source Code
              </a>
            )}
            {project.web && (
              <a
                href={project.web}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-accent"
              >
                <ArrowSquareOut size={18} weight="light" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
