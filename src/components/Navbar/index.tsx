"use client";

import { NAVBAR_ITEMS } from "@/constants/components";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { List, X } from "@phosphor-icons/react";
import { useMotionValueEvent, useScroll } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isPageTop, setIsPageTop] = useState(true);
  const previousScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    setIsPageTop(current === 0);
    if (previousScrollY.current < current && !isNavbarHidden) {
      setIsNavbarHidden(true);
    } else if (previousScrollY.current > current && isNavbarHidden) {
      setIsNavbarHidden(false);
    }
    previousScrollY.current = current;
  });

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 z-[98] w-full border-b-[3px] border-ink bg-paper ${
        !isNavbarHidden
          ? "translate-y-0 transition-transform duration-300 ease-in-out"
          : `transition-transform duration-300 ease-in-out ${
              !isPageTop ? "-translate-y-full" : "translate-y-0"
            }`
      }`}
    >
      <div className="flex h-16 items-center justify-between px-6 lg:h-20 lg:px-14">
        <Link href="/" scroll={false} aria-label="Home">
          <span className="font-display text-xl tracking-wide text-ink">
            ALFTHRPY
          </span>
        </Link>

        {/* Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            aria-label={
              !isOpen ? "Open Navigation Menu" : "Close Navigation Menu"
            }
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-30 flex h-11 w-11 items-center justify-center border-[3px] border-ink text-ink"
          >
            <List
              className={`absolute h-7 w-7 transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <X
              className={`absolute h-7 w-7 transition-opacity duration-200 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>

        {/* Navbar Links */}
        <nav className="hidden items-stretch gap-2 lg:flex">
          {NAVBAR_ITEMS.map((item, index) => (
            <Link
              href={item.href}
              className="border-[3px] border-transparent px-4 py-2 font-mono text-sm font-bold uppercase tracking-[2px] text-ink hover:border-ink hover:bg-ink hover:text-paper"
              key={index}
              scroll={false}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-16 left-0 h-[calc(100dvh-4rem)] w-full border-t-[3px] border-ink bg-paper lg:hidden ${
          !isOpen ? "hidden" : "block"
        }`}
      >
        <nav className="flex flex-col p-6">
          {NAVBAR_ITEMS.map((item, index) => (
            <Link
              href={item.href}
              className="border-b-[3px] border-ink py-5 font-display text-3xl uppercase text-ink active:bg-ink active:text-paper"
              key={index}
              onClick={() => setIsOpen(false)}
              scroll={false}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
