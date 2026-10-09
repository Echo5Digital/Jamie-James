import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Received — Thank You | Jamie James",
  description:
    "Your inquiry has been received. Jamie James will review your request and be in touch soon. Thank you for reaching out.",
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />

      {/* Confirmation Hero */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.pexels.com/photos/9649050/pexels-photo-9649050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Warm sunlit meadow with wildflowers"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/70" />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-20 sm:py-28 max-w-2xl mx-auto">
          <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 border-2 border-accent">
            <CheckCircle className="w-10 h-10 text-accent" aria-hidden="true" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-background leading-tight mb-4">
            Thank You!
          </h1>
          <p className="font-body text-lg sm:text-xl text-background/80 leading-relaxed">
            Your request has been received.
          </p>
        </div>
      </div>

      {/* Next Steps Message */}
      <Section variant="default" paddingSize="xl" maxWidth="md" centered>
        <div className="flex flex-col items-center text-center gap-6">
          {/* Accent rule */}
          <div className="w-12 h-[3px] bg-accent rounded-full" />

          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary leading-snug">
            What Happens Next?
          </h2>

          <p className="font-body text-base text-foreground/80 leading-relaxed max-w-lg">
            Jamie will review your information and get back to you as soon as
            possible. In the meantime, feel free to explore the site to learn
            more about speaking engagements, training workshops, and
            organizational consulting — or connect with Jamie on social media.
          </p>

          <blockquote className="mt-4 border-l-4 border-accent pl-5 text-left max-w-sm">
            <p className="font-heading text-base italic text-primary/80 leading-relaxed">
              "Real change happens when people feel seen, valued and supported."
            </p>
            <footer className="mt-2 font-body text-xs text-foreground/60 uppercase tracking-widest">
              — Jamie James
            </footer>
          </blockquote>

          {/* Explore links */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm font-body">
            <Link
              href="/speaking"
              className="text-secondary font-semibold hover:text-primary underline underline-offset-4 transition-colors"
            >
              Speaking Engagements
            </Link>
            <span className="text-foreground/30" aria-hidden="true">·</span>
            <Link
              href="/training"
              className="text-secondary font-semibold hover:text-primary underline underline-offset-4 transition-colors"
            >
              Training &amp; Workshops
            </Link>
            <span className="text-foreground/30" aria-hidden="true">·</span>
            <Link
              href="/consulting"
              className="text-secondary font-semibold hover:text-primary underline underline-offset-4 transition-colors"
            >
              Consulting
            </Link>
          </div>
        </div>
      </Section>

      {/* Return Home CTA */}
      <Section variant="alternate" paddingSize="lg" maxWidth="md" centered>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-body text-sm text-foreground/70 leading-relaxed">
            Ready to keep exploring? Head back to the homepage to discover how
            Jamie James can support your team, organization, or community.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-md shadow-md hover:brightness-95 active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Return to Home
          </Link>
        </div>
      </Section>

      <Footer />
    </>
  );
}