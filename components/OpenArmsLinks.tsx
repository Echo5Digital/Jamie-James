import { ExternalLink } from "lucide-react";
import { OPEN_ARMS } from "@/lib/site";

const link =
  "inline-flex items-center gap-1 font-semibold text-secondary underline underline-offset-2 hover:text-primary";

// Routes therapy and foster-care service requests to the right organization.
export default function OpenArmsRouting({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      Looking for {OPEN_ARMS.initiative.serves}? Visit{" "}
      <a href={OPEN_ARMS.initiative.href} target="_blank" rel="noopener noreferrer" className={link}>
        {OPEN_ARMS.initiative.name}
        <ExternalLink size={12} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      . Looking for {OPEN_ARMS.fosterCare.serves}? Visit{" "}
      <a href={OPEN_ARMS.fosterCare.href} target="_blank" rel="noopener noreferrer" className={link}>
        {OPEN_ARMS.fosterCare.name}
        <ExternalLink size={12} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      . Those requests are handled there, not through this form.
    </p>
  );
}
