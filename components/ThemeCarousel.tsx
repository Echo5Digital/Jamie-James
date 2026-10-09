"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ThemeCarouselItem {
  label: string;
  image: string;
}

interface ThemeCarouselProps {
  items: ThemeCarouselItem[];
}

export default function ThemeCarousel({ items }: ThemeCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, items.length - 1));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
    setActiveIndex(clamped);
  }, [items.length]);

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  // Keep dot pagination in sync with manual scroll / swipe
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number | null = null;
    const handleScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const children = Array.from(track.children) as HTMLElement[];
        let closest = 0;
        let closestDist = Infinity;
        children.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            className="group relative flex-shrink-0 w-[200px] sm:w-[220px] aspect-[3/4] rounded-md overflow-hidden shadow-lg snap-start"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-heading text-background text-base font-semibold leading-snug">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow controls */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous theme"
        disabled={activeIndex === 0}
        className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-background text-primary shadow-md hover:bg-accent hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronLeft size={20} strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next theme"
        disabled={activeIndex === items.length - 1}
        className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-background text-primary shadow-md hover:bg-accent hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronRight size={20} strokeWidth={2} />
      </button>

      {/* Dot pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {items.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${item.label}`}
            aria-current={activeIndex === i}
            className={`h-2 rounded-full transition-all duration-200 ${
              activeIndex === i ? "w-6 bg-accent" : "w-2 bg-background/30 hover:bg-background/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
