"use client";

import { createElement, useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "pop";

// Reveals its children the first time they scroll into view. The hidden
// starting state is pure CSS (see globals.css, gated on html.reveal-js and on
// prefers-reduced-motion), so nothing flashes and nothing is hidden for
// visitors who have reduced motion on or JavaScript off.
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  variant = "up",
  className = "",
}: {
  children?: ReactNode;
  /** Milliseconds to wait after becoming visible; use it to stagger siblings. */
  delay?: number;
  as?: "div" | "li";
  /** Direction the element arrives from. "pop" scales up with a spring. */
  variant?: Variant;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${variant === "up" ? "" : `reveal-${variant}`} ${className}`
        .replace(/\s+/g, " ")
        .trim(),
      style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
    },
    children
  );
}
