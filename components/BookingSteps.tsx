import Reveal from "@/components/Reveal";

const STEPS = [
  {
    title: "Tell us what you need",
    body: "Choose a service, and a category or theme if you know it. The form can open with your choices already selected.",
  },
  {
    title: "Jamie reviews your request",
    body: "Jamie looks over your request and follows up with you.",
  },
  {
    title: "Details are confirmed with Jamie",
    body: "Formats and availability require Jamie’s confirmation. A request is not a confirmed booking.",
  },
];

// Three navy step cards, built for a gold (#C49A62) background. They rise in one
// after another as they scroll into view.
export default function BookingSteps() {
  return (
    <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
      {STEPS.map(({ title, body }, i) => (
        <Reveal as="li" key={title} delay={i * 150} className="flex">
          <div className="card-hover relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-primary p-8 shadow-xl">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-3 select-none font-heading text-7xl font-bold leading-none text-background/[0.06]"
            >
              0{i + 1}
            </span>
            <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Step {i + 1}
            </p>
            <h3 className="mb-3 font-heading text-xl font-semibold leading-snug text-background">
              {title}
            </h3>
            <p className="font-body text-sm leading-relaxed text-background/85">{body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
