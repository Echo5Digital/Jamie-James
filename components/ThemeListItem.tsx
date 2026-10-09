import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ThemeListItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  requestHref: string;
  faithIntegrated?: boolean;
}

export default function ThemeListItem({
  icon: Icon,
  title,
  description,
  requestHref,
  faithIntegrated = false,
}: ThemeListItemProps) {
  return (
    <li className="card-hover-sm flex list-none flex-col gap-5 rounded-md border border-[#E0D6C8] bg-background px-6 py-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:flex-row sm:items-center">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="mb-1 font-heading text-lg font-semibold leading-snug text-primary">
          {title}
          {faithIntegrated && (
            <span className="ml-2 inline-block rounded-full border border-accent-dark/40 px-2 py-0.5 align-middle font-body text-[10px] font-semibold uppercase tracking-widest text-accent-dark">
              Faith-integrated
            </span>
          )}
        </h3>
        <p className="font-body text-sm leading-relaxed text-foreground/75">
          {description}
        </p>
      </div>
      <Link
        href={requestHref}
        className="inline-block flex-shrink-0 self-start whitespace-nowrap rounded-md bg-accent px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-primary shadow-md transition-all duration-200 hover:brightness-95 active:scale-95 sm:self-center"
      >
        Request This Training
        <span className="sr-only"> — {title}</span>
      </Link>
    </li>
  );
}
