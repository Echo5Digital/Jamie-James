"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Heart,
  FileText,
  Repeat,
  Home,
  ChevronDown,
  ChevronUp,
  Phone,
  ClipboardList,
  Map,
  LifeBuoy,
} from "lucide-react";
import Section from "@/components/Section";

interface FaqItem {
  question: string;
  answer: string;
}

interface ConsultingClientProps {
  faqData: FaqItem[];
}

const focusAreas = [
  {
    icon: Users,
    title: "Organizational & Workforce Development",
    description:
      "Build capacity, improve performance, and create options for long-term success. Jamie partners with your leadership team to assess organizational structure, develop workforce strategies, and strengthen team cohesion at every level.",
  },
  {
    icon: Heart,
    title: "Leadership Coaching & Staff Wellness",
    description:
      "Support leaders and teams in building resilience, clarity, and balance. Through individualized coaching and group sessions, Jamie helps leaders grow in self-awareness, emotional intelligence, and sustainable wellness practices.",
  },
  {
    icon: FileText,
    title: "Program, Policy & Practice Development",
    description:
      "Strengthen your programs with evidence-informed strategies and best practices. Jamie works alongside your team to develop, refine, or evaluate programs and policies that align with your mission and serve your population well.",
  },
  {
    icon: Repeat,
    title: "Trauma-Informed Organizational Change",
    description:
      "Guide your organization through meaningful, trauma-informed culture change. Jamie helps teams understand trauma's impact on staff and clients, embedding trauma-informed principles into policies, practices, and culture.",
  },
  {
    icon: Home,
    title: "Behavioral Health & Foster Care Consultation",
    description:
      "Support services and systems that promote safety, stability, and healing. Jamie offers specialized consultation for agencies and organizations serving children, families, and communities in behavioral health and child welfare contexts.",
  },
];

const engagementSteps = [
  {
    number: 1,
    icon: Phone,
    title: "Discovery Call",
    subtitle: "Understand needs",
    description:
      "We begin with a focused conversation to understand your organization's context, challenges, and what you're hoping to achieve through our partnership.",
  },
  {
    number: 2,
    icon: ClipboardList,
    title: "Assessment",
    subtitle: "Identify strengths & gaps",
    description:
      "Jamie conducts a thoughtful assessment to identify your organization's strengths, opportunities for growth, and key areas that need attention.",
  },
  {
    number: 3,
    icon: Map,
    title: "Plan",
    subtitle: "Create a tailored plan",
    description:
      "Together we develop a customized consulting plan that reflects your specific goals, culture, and timeline — practical and people-centered.",
  },
  {
    number: 4,
    icon: LifeBuoy,
    title: "Implementation & Support",
    subtitle: "Ongoing guidance",
    description:
      "Jamie provides hands-on support through implementation, offering guidance, adjustments, and encouragement as your organization moves forward.",
  },
];

export default function ConsultingClient({ faqData }: ConsultingClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openFocusArea, setOpenFocusArea] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/34587/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Professional consulting workspace with open notebook and warm ambient lighting"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Consulting
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-4 max-w-2xl">
            Organizational Consulting
          </h1>
          <p className="font-body text-lg md:text-xl text-background/80 leading-relaxed max-w-xl">
            Strategy. People. Sustainable Change.
          </p>
        </div>
      </section>

      {/* Intro paragraph */}
      <Section variant="default" paddingSize="lg" maxWidth="xl">
        <div className="max-w-3xl">
          <p className="font-body text-base text-foreground leading-relaxed">
            Jamie James partners with nonprofits, human-services organizations, and
            mission-driven teams to build capacity, strengthen leadership, and embed
            lasting, values-aligned change. Her consulting work is rooted in
            trauma-informed practice, evidence-based approaches, and a genuine belief
            in the power of people and organizations to grow.
          </p>
        </div>
      </Section>

      {/* Five Areas of Focus */}
      <Section variant="alternate" paddingSize="xl" maxWidth="xl" id="focus-areas">
        <div className="mb-10">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
            Consulting Services
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">
            Five Areas of Focus
          </h2>
          <div className="w-12 h-[3px] bg-accent rounded-full" />
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden flex flex-col gap-3">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            const isOpen = openFocusArea === idx;
            return (
              <div
                key={idx}
                className="bg-background rounded-[0.375rem] shadow-md border border-[#E0D6C8] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFocusArea(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-[0.375rem] bg-secondary/10 text-secondary flex items-center justify-center">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="font-heading text-primary font-semibold text-base leading-snug">
                      {area.title}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={18} className="flex-shrink-0 text-secondary" />
                  ) : (
                    <ChevronDown size={18} className="flex-shrink-0 text-secondary" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop: Cards grid */}
        <div className="hidden md:flex flex-col gap-4">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-background rounded-[0.375rem] shadow-md border border-[#E0D6C8] px-6 py-5 flex items-start gap-5 hover:shadow-lg transition-shadow duration-200"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-[0.375rem] bg-secondary/10 text-secondary flex items-center justify-center mt-0.5">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-heading text-primary text-xl font-semibold leading-snug">
                      {area.title}
                    </h3>
                    <ChevronDown
                      size={16}
                      className="flex-shrink-0 text-accent opacity-60"
                    />
                  </div>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Engagement Process */}
      <Section variant="primary" paddingSize="xl" maxWidth="xl" id="engagement-process">
        <div className="mb-12 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            How It Works
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-background leading-tight mb-3">
            The Engagement Process
          </h2>
          <p className="font-body text-sm text-background/70 max-w-xl mx-auto leading-relaxed">
            Jamie's four-step consulting process is designed to be collaborative,
            transparent, and tailored to your organization's unique needs.
          </p>
          <div className="mt-4 w-12 h-[3px] bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-background/10 border border-background/20 rounded-[0.375rem] px-6 py-7 flex flex-col items-start gap-4 hover:bg-background/15 transition-colors duration-200"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-accent text-primary font-heading font-bold text-sm flex items-center justify-center shadow-md">
                  {step.number}
                </div>
                <div className="mt-2 w-11 h-11 rounded-[0.375rem] bg-secondary/30 text-accent flex items-center justify-center flex-shrink-0">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading text-background text-lg font-semibold leading-snug mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-xs text-accent uppercase tracking-widest font-semibold mb-3">
                    {step.subtitle}
                  </p>
                  <p className="font-body text-sm text-background/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="default" paddingSize="xl" maxWidth="xl" id="faq">
        <div className="mb-10">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
            Common Questions
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[3px] bg-accent rounded-full" />
        </div>

        <div className="max-w-3xl flex flex-col gap-3">
          {faqData.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-[#E0D6C8] rounded-[0.375rem] bg-background overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-primary font-semibold text-base leading-snug">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={18} className="flex-shrink-0 text-secondary" />
                  ) : (
                    <ChevronDown size={18} className="flex-shrink-0 text-secondary" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 border-t border-[#E0D6C8]">
                    <p className="font-body text-sm text-foreground leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Consulting Inquiry CTA */}
      <Section variant="alternate" paddingSize="xl" maxWidth="xl" id="consulting-cta">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 bg-background rounded-[0.375rem] shadow-lg border border-[#E0D6C8] px-8 py-10 md:px-12 md:py-14">
          <div className="max-w-xl text-center md:text-left">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
              Let's Connect
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              Ready to start the conversation?
            </h2>
            <p className="font-body text-sm text-foreground leading-relaxed">
              Let's discuss how Jamie can support your organization's goals. Click
              below to submit a consulting inquiry and Jamie will follow up to explore
              how she can best serve your team.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <Link
              href="/book?service=consulting"
              className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-[0.375rem] shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              Inquire About Consulting
            </Link>
            <p className="font-body text-xs text-foreground/50 text-center">
              No commitment required
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}