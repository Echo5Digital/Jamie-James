"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// "Stacking sheets" scroll effect. The wrapped section is pinned (position:
// sticky) so the NEXT sibling, which must sit in a higher layer, slides up over
// it. As it is covered, the pinned section shrinks slightly and darkens.
//
// - If the section is taller than the screen, it pins by its bottom edge
//   (negative `top`) so all of it is seen before it is covered.
// - For visitors who prefer reduced motion the pin is switched off (see
//   .stack-pin in globals.css) and the effects below are skipped.
export default function StickyStack({
  children,
  className = "",
}: {
  children: ReactNode;
  /** Give it the section's own background colour so the shrink never shows the page behind. */
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const shade = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const measure = () => setTop(Math.min(0, window.innerHeight - el.offsetHeight));

    const update = () => {
      frame = 0;
      const i = inner.current;
      const s = shade.current;
      if (!i || !s) return;
      const next = el.nextElementSibling as HTMLElement | null;
      if (reduced.matches || !next) {
        i.style.transform = "";
        s.style.opacity = "0";
        return;
      }
      // How much of this section the next one has slid over (0 → 1).
      const overlap = Math.max(0, el.getBoundingClientRect().bottom - next.getBoundingClientRect().top);
      const p = Math.min(1, overlap / Math.max(1, el.offsetHeight));
      i.style.transform = `scale(${1 - p * 0.05})`;
      s.style.opacity = String(p * 0.6);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    const ro = new ResizeObserver(onResize);
    ro.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={root} className={`stack-pin ${className}`} style={{ top }}>
      <div ref={inner} className="origin-top will-change-transform">
        {children}
      </div>
      <div
        ref={shade}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-primary opacity-0"
      />
    </div>
  );
}
