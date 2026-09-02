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

  return (
    <div className="mx-auto w-full max-w-[350px] rounded-xl border border-border_col bg-base_col_darker/60 px-7 py-5 text-secondary transition-[color,border-color] duration-300 hover:border-accent/40 hover:text-accent">
      <div className="flex items-center justify-between">
        <a
          href={props.web ? props.web : props.github}
          target="_blank"
          rel="noreferrer"
          className="text-xl font-semibold tracking-wide"
        >
          {props.name}
        </a>

        <div className="flex items-end gap-2 text-primary">
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              title="View github repository"
              className="p-1 transition-colors hover:text-accent"
            >
              <GithubLogo size={16} weight="light" />
            </a>
          )}
          {props.web && (
            <a
              href={props.web}
              target="_blank"
              rel="noreferrer"
              title="View finished project"
              className="p-1 transition-colors hover:text-accent"
            >
              <ArrowSquareOut size={18} weight="light" />
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
        className="relative my-2 flex h-[180px] items-center justify-center transition-transform duration-150 active:scale-[0.96]"
      >
        <Image
          src={props.image}
          alt={props.name}
          className="m-auto h-full w-full rounded-lg object-cover ring-1 ring-inset ring-border_col"
        />
        {showGif ? (
          <div className="absolute top-0 left-0 h-full w-full rounded-lg ">
            <Image
              src={props.gif}
              alt={`${props.name} demo`}
              onLoad={() => setLoading(false)}
              className="m-auto h-full rounded-lg object-cover ring-1 ring-inset ring-border_col"
            />
            {hasHover && (
              <p className="absolute top-0 flex h-full w-full items-center justify-center bg-base_col_darker/80 text-secondary">
                {props.web && "Live Demo"}
                {!props.web && "Source Code"}
              </p>
            )}
            {loading && (
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-lg bg-base_col_darker/80">
                <LoadingSpinner />
              </div>
            )}
          </div>
        ) : null}
      </div>
      <p className="max-h-[130px] min-h-[130px] overflow-auto text-sm text-primary">
        {props.desc}
      </p>
      <div className="mt-5 font-mono text-xs text-primary">{props.stack}</div>
    </div>
  );
}
