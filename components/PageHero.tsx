import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  tagline,
  children,
  actions,
}: {
  eyebrow?: string;
  title: string;
  tagline?: string;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/50"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        {eyebrow && (
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {tagline && (
          <p className="mb-5 max-w-2xl font-body text-lg text-accent md:text-xl">
            {tagline}
          </p>
        )}
        {children && (
          <div className="max-w-2xl font-body text-base leading-relaxed text-background/85">
            {children}
          </div>
        )}
        {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
      </div>
    </section>
  );
}
