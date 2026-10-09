import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import LinkButton from "@/components/LinkButton";
import BookingSteps from "@/components/BookingSteps";

// Homepage "How Booking Works" on the gold background (#C49A62). On gold, text
// is navy (5.7:1) and the usual gold button is swapped for a navy one.
export default function BookingSection() {
  return (
    <Section variant="gold" paddingSize="xl" maxWidth="xl">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <Reveal>
          <p className="mb-5 flex items-center justify-center gap-3 font-body text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
            Three simple steps
            <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="booking-heading"
            className="mb-4 font-heading text-4xl font-bold leading-tight text-primary md:text-5xl"
          >
            How Booking <span className="italic">Works</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-body text-base leading-relaxed text-primary sm:text-lg">
            One shared inquiry form covers speaking, training and consulting.
          </p>
        </Reveal>
      </div>

      <BookingSteps />

      <Reveal delay={150}>
        <div className="mt-14 text-center">
          <LinkButton href="/book" className="!bg-primary !text-background px-8 py-4">
            Start Your Request →
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
