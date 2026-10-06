"use client";

import React, { FC } from "react";
import Image from "next/image";
import { CardAboutProps } from "@/types/Components";

const CardAbout: FC<CardAboutProps> = (props) => {
  const { images, title, informationLevel } = props;

  return (
    <div className="group flex items-center gap-4 border-[3px] border-ink bg-paper p-6 hover:bg-ink">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center border-[3px] border-ink bg-paper p-2">
        <Image src={images} alt={title} className="h-full w-full object-contain" />
      </div>
      <div className="min-w-0">
        <div className="truncate font-display text-lg text-ink group-hover:text-paper">
          {title}
        </div>
        <div className="mt-1 font-mono text-xs font-bold uppercase tracking-[1px] text-ink group-hover:text-paper">
          {informationLevel}
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
