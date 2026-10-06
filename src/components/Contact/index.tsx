"use client";
import React from "react";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Contact() {
  const sosmeds = [
    {
      name: "Github",
      icon: <GithubLogo size={20} weight="bold" />,
      link: "https://github.com/alfthrpy",
    },
    {
      name: "Instagram",
      icon: <InstagramLogo size={20} weight="bold" />,
      link: "https://www.instagram.com/alfthrpy/",
    },
    {
      name: "Linkedin",
      icon: <LinkedinLogo size={20} weight="bold" />,
      link: "https://www.linkedin.com/in/alfthrpy/",
    },
  ];
  return (
    <div className="hidden lg:block">
      <div className="fixed bottom-0 left-0 z-[97] w-[105px]">
        <div className="flex flex-col items-center border-r-[3px] border-t-[3px] border-ink bg-paper">
          {sosmeds.map((sosmed, index) => (
            <a
              key={index}
              href={sosmed.link}
              target="_blank"
              rel="noreferrer"
              aria-label={sosmed.name}
              title={sosmed.name}
              className="flex w-full items-center justify-center border-b-[3px] border-ink px-2 py-3 text-ink last:border-b-0 hover:bg-ink hover:text-paper"
            >
              {sosmed.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 right-0 z-[97] w-[105px]">
        <div className="flex flex-col items-center border-l-[3px] border-t-[3px] border-ink bg-paper">
          <a
            href="mailto:alfthr378@gmail.com"
            className="px-2 py-4 font-mono text-xs font-bold tracking-[0.075em] text-ink hover:bg-ink hover:text-paper"
            style={{ writingMode: "vertical-rl" }}
          >
            alfthr378@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
