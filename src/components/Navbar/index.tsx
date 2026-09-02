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
      className={`fixed top-0 z-[98] w-full ${
        !isNavbarHidden
          ? !isPageTop
            ? `translate-y-0 border-b border-border_col bg-base_col shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out ${
                !isOpen ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-100"
              }`
            : "bg-base_col bg-opacity-80 py-2 transition-all"
          : `transition-all duration-300 ease-in-out ${
              !isPageTop ? "-translate-y-full" : "translate-y-0"
            } `
      }`}
    >
      <div className="flex h-16 items-center justify-between px-7 lg:h-20 lg:px-14">
        <Link href="/" className="text-accent" scroll={false}>
          <h1 className="font-mono text-lg font-semibold">Alfthrpy</h1>
        </Link>

        {/* Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            aria-label={
              !isOpen ? "Open Navigation Menu" : "Close Navigation Menu"
            }
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-30 flex h-11 w-11 items-center justify-center"
          >
            <List
              className={`absolute h-9 w-9 text-accent transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                isOpen ? "scale-[0.25] opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute h-9 w-9 text-accent transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                isOpen ? "scale-100 opacity-100" : "scale-[0.25] opacity-0"
              }`}
            />
          </button>
        </div>

        {/* Navbar Text */}
        <div className="hidden gap-10 lg:flex">
          {NAVBAR_ITEMS.map((item, index) => (
            <Link
              href={item.href}
              className="flex items-baseline gap-2 font-mono text-sm text-primary transition-colors duration-300 hover:text-accent"
              key={index}
              scroll={false}
            >
              <span className="text-xs text-accent">{item.number}</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-[100dvh] w-full lg:hidden ${
          !isOpen
            ? "translate-x-full transition-all duration-300 ease-in"
            : "translate-x-0 transition-all duration-300 ease-out"
        }`}
      >
        <div className="fixed top-0 z-0 h-full w-full backdrop-blur-sm"></div>
        <div className="fixed right-0 top-0 z-[99] h-full w-3/4 border-l border-border_col bg-base_col_darker drop-shadow-lg md:w-1/2">
          <div className="mt-40 flex flex-col items-center justify-center gap-10 text-base md:text-lg">
            {NAVBAR_ITEMS.map((item, index) => (
              <Link
                href={item.href}
                className="text-center font-mono text-primary hover:text-accent"
                key={index}
                onClick={() => setIsOpen(false)}
              >
                <p className="flex flex-col items-center gap-1">
                  <span className="text-sm text-accent">{item.number}</span>
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
