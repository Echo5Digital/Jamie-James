"use client";

import { useEffect, useRef } from "react";

// Counts from 0 up to `to` the first time it scrolls into view. The server
// renders the final number, so it is correct without JavaScript and for
// visitors with reduced motion.
export default function CountUp({
  to,
  delay = 0,
  duration = 1100,
}: {
  to: number;
  /** Milliseconds to wait after scrolling into view (match a surrounding Reveal). */
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    )
      return;

    el.textContent = "0";
    let frame = 0;
    let timer = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            el.textContent = String(Math.round((1 - Math.pow(1 - t, 3)) * to));
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }, delay);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [to, delay, duration]);

  return <span ref={ref}>{to}</span>;
}
