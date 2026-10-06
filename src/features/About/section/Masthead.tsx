"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import fathir from "@images/IMG-20240627-WA0018.jpg";

// Poster masthead: giant word + manifesto beside a framed portrait plate.
// The wipe on ABOUT is the single authored motion moment on the page.
const Masthead = () => {
  const reduce = useReducedMotion();

  return (
    <header className="pt-32 md:pt-40">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <motion.h1
            initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3.5rem,14vw,6rem)] leading-[0.9] text-ink"
          >
            ABOUT
          </motion.h1>
          <p className="mt-8 max-w-3xl font-display text-xl leading-snug text-ink md:text-3xl">
            Backend and ML Engineer building high-throughput data platforms,
            agentic AI pipelines, and full-stack apps.
          </p>
        </div>
        <figure className="border-[3px] border-ink md:col-span-4">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={fathir}
              alt="Muhammad Rizki Al-Fathir"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <figcaption className="border-t-[3px] border-ink bg-ink px-3 py-2 font-mono text-xs font-bold uppercase tracking-[2px] text-paper">
            The engineer — Bandung, ID
          </figcaption>
        </figure>
      </div>
      <div className="mt-10 grid grid-cols-1 border-y-[3px] border-ink font-mono text-xs font-bold uppercase tracking-[2px] text-ink md:grid-cols-3">
        <p className="border-b-[3px] border-ink py-3 md:border-b-0 md:border-r-[3px] md:pr-6">
          Base — Bandung, ID
        </p>
        <p className="border-b-[3px] border-ink py-3 md:border-b-0 md:border-r-[3px] md:px-6">
          Focus — Backend / ML / Agentic AI
        </p>
        <p className="py-3 md:pl-6">Status — Open to work</p>
      </div>
    </header>
  );
};

export default Masthead;
