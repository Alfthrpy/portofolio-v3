"use client";

import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LoadingSpinner } from "@/components";

export default function CardProject(props) {
  const [hover, setHover] = useState(false);
  const { loading, setLoading } = props;

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
    <div className="w-[330px] rounded-xl bg-accent/10 px-7 py-5 text-secondary shadow-[0_8px_30px_-12px_rgba(0,0,0,0)] transition-[color,box-shadow] duration-300 hover:text-accent hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] lg:w-[350px]">
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
              className="transition-colors hover:text-accent"
            >
              <FiGithub size={16} />
            </a>
          )}
          {props.web && (
            <a
              href={props.web}
              target="_blank"
              rel="noreferrer"
              title="View finished project"
              className="transition-colors hover:text-accent"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <div
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
          className="m-auto h-full w-full rounded-md object-cover ring-1 ring-inset ring-white/10"
        />
        {hover ? (
          <div className="absolute top-0 left-0 h-full w-full rounded-md ">
            {props.gif && (
              <Image
                src={props.gif}
                alt={props.name}
                onLoad={() => setLoading(false)}
                className="m-auto h-full rounded-md object-cover ring-1 ring-inset ring-white/10"
              />
            )}
            <p className="absolute top-0 flex h-full w-full items-center justify-center bg-base_col_darker/60 text-white">
              {props.gif && props.web && "Live Demo"}
              {!props.gif && props.web && "Checkout Site"}
              {!props.web && "Source Code"}
            </p>
            {loading && (
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-base_col_darker/60">
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
