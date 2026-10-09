import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";

interface TrainingCategoryCardProps {
  icon: LucideIcon;
  label: string;
  href: string;
  faithIntegrated?: boolean;
  // Optional: the category's five featured theme labels (training overview).
  themes?: string[];
  cta?: string;
}

export default function TrainingCategoryCard({
  icon: Icon,
  label,
  href,
  faithIntegrated = false,
  themes,
  cta,
}: TrainingCategoryCardProps) {
  return (
    <Link
      href={href}
      className="card-hover group flex h-full flex-col gap-3 rounded-md border border-[#E0D6C8] bg-background p-5 shadow-sm transition-all duration-200 hover:border-accent hover:shadow-md"
    >
      <span className="flex items-center gap-4">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary transition-colors duration-200 group-hover:bg-accent/15 group-hover:text-accent-dark">
          <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="flex-1 font-body text-sm font-medium leading-snug text-primary">
          {label}
          {faithIntegrated && (
            <span className="mt-1 block font-body text-[10px] font-semibold uppercase tracking-widest text-accent-dark">
              Faith-integrated
            </span>
          )}
        </span>
        <ChevronRight
          size={18}
          strokeWidth={2}
          aria-hidden="true"
          className="flex-shrink-0 text-secondary/70 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent-dark"
        />
      </span>
      {themes && (
        <ul className="mt-1 flex flex-1 flex-col gap-1.5 border-t border-[#E0D6C8] pt-3">
          {themes.map((t) => (
            <li
              key={t}
              className="flex items-start gap-2 font-body text-xs leading-snug text-foreground/75"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
              />
              {t}
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <span className="mt-auto pt-1 font-body text-xs font-semibold uppercase tracking-widest text-secondary group-hover:text-primary">
          {cta} →
        </span>
      )}
    </Link>
  );
}
