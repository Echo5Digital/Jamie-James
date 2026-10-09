import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// Native <details>/<summary>: keyboard operable, announced as expandable by
// screen readers, and needs no client JavaScript.

export function Disclosure({
  summary,
  children,
  className = "",
}: {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <details
      className={`group bg-background rounded-md border border-[#D9CCBA] shadow-sm overflow-hidden ${className}`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-heading text-base font-semibold text-primary hover:bg-[#EAE2D6] [&::-webkit-details-marker]:hidden">
        <span>{summary}</span>
        <ChevronDown
          size={20}
          strokeWidth={2}
          aria-hidden="true"
          className="flex-shrink-0 text-secondary transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="border-t border-[#E0D6C8] px-5 pb-5 pt-4">{children}</div>
    </details>
  );
}

export function FaqList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <Disclosure key={item.question} summary={item.question}>
          <p className="font-body text-sm leading-relaxed text-foreground/80">
            {item.answer}
          </p>
        </Disclosure>
      ))}
    </div>
  );
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
