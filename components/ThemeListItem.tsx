import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ThemeListItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  requestHref: string;
}

export default function ThemeListItem({
  icon: Icon,
  title,
  description,
  requestHref,
}: ThemeListItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-5 bg-background rounded-md border border-[#E0D6C8] shadow-sm hover:shadow-md transition-shadow duration-300 px-6 py-5">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-secondary/10 text-secondary">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <div className="flex-1">
        <h3 className="font-heading text-primary text-lg font-semibold leading-snug mb-1">
          {title}
        </h3>
        <p className="font-body text-sm text-foreground/75 leading-relaxed">
          {description}
        </p>
      </div>
      <Link
        href={requestHref}
        className="flex-shrink-0 self-start sm:self-center inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-md shadow-md hover:brightness-95 active:scale-95 transition-all duration-200 whitespace-nowrap"
      >
        Request This Training
      </Link>
    </div>
  );
}
