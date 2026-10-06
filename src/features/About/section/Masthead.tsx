"use client";

import { motion, useReducedMotion } from "motion/react";

// Poster masthead: one giant word, one manifesto line, one meta strip.
// This is the single authored motion moment on the page.
const Masthead = () => {
  const reduce = useReducedMotion();

  return (
    <header className="pt-32 md:pt-40">
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
