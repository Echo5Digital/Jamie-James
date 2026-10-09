import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light";

const base =
  "inline-block font-body font-semibold text-xs uppercase tracking-widest rounded-md transition-all duration-200 text-center";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-primary px-7 py-3.5 shadow-md hover:brightness-105 active:scale-[0.98]",
  outline:
    "border-2 border-primary text-primary px-7 py-3 hover:bg-primary hover:text-background",
  "outline-light":
    "border-2 border-background/80 text-background px-7 py-3 hover:bg-background hover:text-primary",
};

export default function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
