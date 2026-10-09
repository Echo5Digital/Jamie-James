import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";

interface TrainingCategoryCardProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export default function TrainingCategoryCard({
  icon: Icon,
  label,
  href,
}: TrainingCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 p-5 bg-background rounded-md shadow-sm hover:shadow-md border border-[#E0D6C8] hover:border-accent transition-all duration-200"
    >
      <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-md bg-secondary/10 text-secondary group-hover:bg-accent/15 group-hover:text-accent transition-colors duration-200">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <span className="flex-1 font-body text-sm font-medium text-primary leading-snug">
        {label}
      </span>
      <ChevronRight
        size={18}
        strokeWidth={2}
        className="flex-shrink-0 text-secondary/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200"
      />
    </Link>
  );
}
