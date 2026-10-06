"use client";

import { useEffect, useRef, useState } from "react";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import Image from "next/image";
import { LoadingSpinner } from "@/components";
import { useHasHover } from "@/hooks/useHasHover";

export default function CardProject(props) {
  const [hover, setHover] = useState(false);
  const [inView, setInView] = useState(false);
  const imageRef = useRef(null);
  const { loading, setLoading } = props;
  const hasHover = useHasHover();

  useEffect(() => {
    if (!props.gif || !imageRef.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, [props.gif]);

  const showGif = props.gif && (hasHover ? hover : inView);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const stacks = props.stack.split(",").map((s) => s.trim());

  return (
    <div className="mx-auto flex h-full w-full flex-col border-[3px] border-ink bg-paper p-6 text-ink">
      <div className="flex items-start justify-between gap-3">
        <a
          href={props.web ? props.web : props.github}
          target="_blank"
          rel="noreferrer"
          className="font-display text-xl leading-tight text-ink hover:bg-ink hover:text-paper"
        >
          {props.name}
        </a>

        <div className="flex shrink-0 items-center gap-2">
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              title="View github repository"
              className="border-2 border-ink p-1.5 text-ink hover:bg-ink hover:text-paper"
            >
              <GithubLogo size={16} weight="bold" />
            </a>
          )}
          {props.web && (
            <a
              href={props.web}
              target="_blank"
              rel="noreferrer"
              title="View finished project"
              className="border-2 border-ink p-1.5 text-ink hover:bg-ink hover:text-paper"
            >
              <ArrowSquareOut size={16} weight="bold" />
            </a>
          )}
        </div>
      </div>
      <div
        ref={imageRef}
        onClick={() => {
          handleClick(props.web ? props.web : props.github);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative my-4 flex h-[180px] cursor-pointer items-center justify-center border-[3px] border-ink"
      >
        <Image
          src={props.image}
          alt={props.name}
          className="m-auto h-full w-full object-cover"
        />
        {showGif ? (
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={props.gif}
              alt={`${props.name} demo`}
              onLoad={() => setLoading(false)}
              className="m-auto h-full w-full object-cover"
            />
            {hasHover && (
              <p className="absolute top-0 flex h-full w-full items-center justify-center bg-ink font-mono text-xs font-bold uppercase tracking-[2px] text-paper">
                {props.web && "Live Demo"}
                {!props.web && "Source Code"}
              </p>
            )}
            {loading && (
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-paper">
                <LoadingSpinner />
              </div>
            )}
          </div>
        ) : null}
      </div>
      <p className="max-h-[130px] min-h-[130px] overflow-auto text-sm leading-[1.6] text-ink">
        {props.desc}
      </p>
      <div className="mt-5 flex flex-wrap gap-2 border-t-[3px] border-ink pt-4">
        {stacks.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
