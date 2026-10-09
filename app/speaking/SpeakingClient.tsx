"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Sunset,
  CalendarDays,
  Church,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  Quote,
} from "lucide-react";
import Section from "@/components/Section";

interface FaqItem {
  question: string;
  answer: string;
}

interface SpeakingClientProps {
  faqData: FaqItem[];
}

const audienceCards = [
  {
    icon: Users,
    label: "Conferences",
    description:
      "Keynotes and breakout sessions that energize large audiences and spark meaningful conversations.",
  },
  {
    icon: Sunset,
    label: "Retreats",
    description:
      "Immersive, reflective presentations that help teams reconnect with purpose and build resilience.",
  },
  {
    icon: CalendarDays,
    label: "Staff Days",
    description:
      "Practical, skills-based sessions designed for frontline staff, supervisors, and organizational leaders.",
  },
  {
    icon: Church,
    label: "Faith & Community Events",
    description:
      "Compassionate, values-grounded talks for faith communities and grassroots organizations.",
  },
];

export default function SpeakingClient({ faqData }: SpeakingClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ── Hero ── */}
      <div className="relative w-full min-h-[420px] md:min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/12962924/pexels-photo-12962924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Jamie James speaking on stage at a professional event"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24">
          <p className="font-body text-xs uppercase tracking-widest text-accent mb-3">
            Jamie James
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-background font-bold leading-tight mb-4">
            Speaking Engagements
          </h1>
          <p className="font-body text-lg sm:text-xl text-background/80 tracking-wide italic">
            Inspiring. Authentic. Actionable.
          </p>
        </div>
      </div>

      {/* ── Speaking Overview ── */}
      <Section variant="default" paddingSize="lg" maxWidth="xl">
        <div className="max-w-3xl">
          <p className="font-body text-xs uppercase tracking-widest text-accent mb-3">
            About Jamie's Speaking
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold mb-5 leading-snug">
            Speaking That Moves People to Action
          </h2>
          <div className="w-12 h-[3px] bg-accent rounded-full mb-6" />
          <p className="font-body text-base text-foreground leading-relaxed">
            Jamie's speaking engagements are designed to inspire meaningful
            conversation, build practical skills, and create lasting impact for
            your audience. Whether addressing a room of frontline workers,
            organizational leaders, or a faith community, Jamie brings warmth,
            depth, and real-world experience to every stage — meeting people
            where they are and equipping them with tools they can use
            immediately.
          </p>
        </div>
      </Section>

      {/* ── Ideal For — Audience Fit Cards ── */}
      <Section variant="alternate" paddingSize="lg" maxWidth="xl">
        <div className="mb-10 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-accent mb-2">
            Ideal For
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold leading-snug">
            Who Jamie Speaks To
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceCards.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center bg-background rounded-md shadow-md border border-[#E0D6C8] p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-md bg-secondary/10 flex items-center justify-center mb-4">
                <Icon size={28} strokeWidth={1.6} className="text-secondary" />
              </div>
              <h3 className="font-heading text-primary text-lg font-semibold mb-2">
                {label}
              </h3>
              <div className="w-8 h-[2px] bg-accent rounded-full mb-3" />
              <p className="font-body text-sm text-foreground/75 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Watch Jamie in Action ── */}
      <Section variant="default" paddingSize="lg" maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video Placeholder */}
          <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg bg-primary/10 group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Preview of Jamie James speaking on stage"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors duration-300" />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                <PlayCircle
                  size={38}
                  strokeWidth={1.5}
                  className="text-primary ml-1"
                />
              </div>
            </div>
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
              <p className="font-body text-xs text-background/80 uppercase tracking-widest">
                Watch Video (placeholder)
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-accent mb-3">
              Watch Jamie in Action
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold mb-5 leading-snug">
              Energy, Insight & Real-World Experience
            </h2>
            <div className="w-12 h-[3px] bg-accent rounded-full mb-6" />
            <p className="font-body text-base text-foreground leading-relaxed mb-4">
              See how Jamie brings energy, insight and real-world experience to
              every stage. Her presentations are grounded in compassion and
              practical strategy — leaving audiences not just inspired, but
              equipped.
            </p>
            <p className="font-body text-sm text-foreground/70 leading-relaxed">
              From keynote addresses to intimate workshop settings, Jamie adapts
              her delivery to meet the needs of each unique audience and
              environment.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Request Availability CTA ── */}
      <Section variant="primary" paddingSize="lg" maxWidth="xl" centered>
        <p className="font-body text-xs uppercase tracking-widest text-accent mb-3">
          Book Jamie
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl text-background font-bold mb-4 leading-snug">
          Ready to Bring Jamie to Your Event?
        </h2>
        <p className="font-body text-base text-background/70 leading-relaxed max-w-xl mx-auto mb-8">
          Spots fill quickly. Reach out now to check Jamie's availability for
          your conference, retreat, staff day, or faith and community event.
        </p>
        <Link
          href="/book"
          className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-md shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200"
        >
          Request Availability →
        </Link>
      </Section>

      {/* ── Testimonial Placeholder ── */}
      <Section variant="alternate" paddingSize="lg" maxWidth="md" centered>
        <div className="flex flex-col items-center">
          <Quote size={40} strokeWidth={1.4} className="text-accent mb-4" />
          {/* Placeholder testimonial — replace with real client quote */}
          <blockquote className="font-heading text-xl sm:text-2xl text-primary font-semibold italic leading-relaxed mb-6 text-center">
            "Real change happens when people feel seen, valued and supported.
            Jamie delivers that — and so much more."
          </blockquote>
          <div className="w-10 h-[2px] bg-accent rounded-full mb-5" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-heading font-bold text-base">
              C
            </div>
            <div className="text-left">
              {/* Placeholder client name */}
              <p className="font-heading text-primary text-sm font-semibold leading-tight">
                [Client Name, Organization]
              </p>
              <p className="font-body text-foreground/60 text-xs">
                Event Attendee
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ Section ── */}
      <Section variant="default" paddingSize="lg" maxWidth="xl">
        <div className="mb-10">
          <p className="font-body text-xs uppercase tracking-widest text-accent mb-2">
            Common Questions
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[3px] bg-accent rounded-full mt-4" />
        </div>
        <div className="divide-y divide-[#E0D6C8] border border-[#E0D6C8] rounded-md overflow-hidden">
          {faqData.map((item, idx) => (
            <div key={idx} className="bg-background">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent hover:bg-[#EAE2D6] transition-colors duration-200 group"
              >
                <span className="font-heading text-primary font-semibold text-base pr-4 group-hover:text-secondary transition-colors">
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-accent">
                  {openFaq === idx ? (
                    <ChevronUp size={20} strokeWidth={2} />
                  ) : (
                    <ChevronDown size={20} strokeWidth={2} />
                  )}
                </span>
              </button>
              {openFaq === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-6 pb-6 pt-1"
                >
                  <p className="font-body text-sm text-foreground/80 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}