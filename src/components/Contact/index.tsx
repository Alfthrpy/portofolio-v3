"use client";
import React from "react";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Reveal } from "@/components";

export default function Contact() {
  const sosmeds = [
    {
      name: "Github",
      icon: <GithubLogo size={20} weight="light" />,
      link: "https://github.com/alfthrpy",
    },
    {
      name: "Instagram",
      icon: <InstagramLogo size={20} weight="light" />,
      link: "https://www.instagram.com/alfthrpy/",
    },
    {
      name: "Linkedin",
      icon: <LinkedinLogo size={20} weight="light" />,
      link: "https://www.linkedin.com/in/alfthrpy/",
    },
  ];
  return (
    <div className="hidden lg:block">
      <div className="fixed bottom-0 left-0 w-[105px]">
        <div className="flex flex-col items-center">
          {sosmeds.map((sosmed, index) => (
            <Reveal key={index} delay={index * 0.08} y={12}>
              <div
                className="cursor-pointer px-2 py-3 text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                title={sosmed.name}
              >
                <a
                  href={sosmed.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={sosmed.name}
                >
                  {sosmed.icon}
                </a>
              </div>
            </Reveal>
          ))}
          <div className="mt-4 h-20 w-[1px] bg-border_col"></div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-[105px]">
        <div className="flex flex-col items-center">
          <Reveal delay={0.1} y={12}>
            <a
              href="mailto:alfthr378@gmail.com"
              className="px-2 py-3 font-mono text-xs tracking-[0.075em] text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              style={{ writingMode: "vertical-rl" }}
            >
              alfthr378@gmail.com
            </a>
          </Reveal>
          <div className="mt-4 h-20 w-[1px] bg-border_col"></div>
        </div>
      </div>
    </div>
  );
}
