import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-background/10 border border-background/20 rounded-md p-8 backdrop-blur-sm">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/15 text-accent mb-4">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <p className="font-heading text-4xl font-bold text-background mb-2">{value}</p>
      <p className="font-body text-sm font-semibold uppercase tracking-widest text-background/70">
        {label}
      </p>
    </div>
  );
}

interface TestimonialStatCardProps {
  quote: string;
  author: string;
  organization: string;
}

export function TestimonialStatCard({
  quote,
  author,
  organization,
}: TestimonialStatCardProps) {
  return (
    <div className="flex flex-col items-start bg-background/10 border border-background/20 rounded-md p-8 backdrop-blur-sm">
      <div className="text-accent text-5xl font-heading leading-none select-none mb-3">
        &ldquo;
      </div>
      <p className="font-body text-sm italic text-background/85 leading-relaxed flex-1">
        {quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-heading font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-background text-sm font-semibold leading-tight">
            {author}
          </p>
          <p className="font-body text-background/60 text-xs">{organization}</p>
        </div>
      </div>
    </div>
  );
}
