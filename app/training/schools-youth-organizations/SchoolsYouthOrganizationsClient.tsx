"use client";

import { useState } from "react";
import Link from "next/link";
import {
  School,
  Brain,
  ShieldAlert,
  Sparkles,
  HeartPulse,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Users,
  GraduationCap,
  MessagesSquare,
  Smile,
  Mic,
  Layers,
  Quote,
} from "lucide-react";
import Section from "@/components/Section";
import ThemeListItem from "@/components/ThemeListItem";

interface FaqItem {
  question: string;
  answer: string;
}

interface SchoolsYouthOrganizationsClientProps {
  faqItems: FaqItem[];
}

const CATEGORY_SLUG = "schools-youth-organizations";

const featuredThemes = [
  {
    icon: Brain,
    title: "Trauma-Informed Classrooms",
    description:
      "Build classrooms and programs where trauma-informed practices help every student feel safe, regulated, and ready to learn.",
  },
  {
    icon: HeartPulse,
    title: "Student Mental Health & Wellbeing",
    description:
      "Equip staff to recognize early signs of mental health struggles and respond with practical, supportive strategies.",
  },
  {
    icon: ShieldAlert,
    title: "Bullying & Peer Conflict Prevention",
    description:
      "Create a culture that prevents bullying before it starts and equips staff and students to respond effectively when it occurs.",
  },
  {
    icon: Sparkles,
    title: "Positive Youth Development",
    description:
      "Help young people build the skills, relationships, and mindset needed to thrive academically, socially, and emotionally.",
  },
  {
    icon: Smile,
    title: "Educator & Staff Wellness",
    description:
      "Support the people who support students — practical tools for managing stress and preventing burnout in high-demand roles.",
  },
];

const allTopics = [
  {
    category: "Trauma-Informed Education",
    icon: Brain,
    topics: [
      "Foundations of Trauma-Informed Schools",
      "Recognizing Trauma Behaviors in the Classroom",
      "Building Felt Safety for Students",
      "Trauma-Sensitive Classroom Management",
      "Restorative Practices vs. Punitive Discipline",
    ],
  },
  {
    category: "Student Mental Health",
    icon: HeartPulse,
    topics: [
      "Recognizing Signs of Student Distress",
      "Anxiety & Depression in School-Age Youth",
      "Youth Suicide Prevention Awareness",
      "Supporting Grieving Students",
      "Connecting Students to Mental Health Resources",
    ],
  },
  {
    category: "School Climate & Safety",
    icon: ShieldAlert,
    topics: [
      "Bullying Prevention & Intervention",
      "Peer Conflict Resolution Skills",
      "Building Inclusive School Cultures",
      "Responding to Crisis in the School Setting",
      "Threat Assessment Awareness for Staff",
    ],
  },
  {
    category: "Positive Youth Development",
    icon: Sparkles,
    topics: [
      "Social-Emotional Learning (SEL) Foundations",
      "Building Resilience in Youth",
      "Mentoring & Relationship-Building Strategies",
      "Youth Leadership Development",
      "Identity, Belonging & Self-Esteem",
    ],
  },
  {
    category: "Family & Community Engagement",
    icon: Users,
    topics: [
      "Partnering with Families of At-Risk Students",
      "Trauma-Informed Communication with Parents",
      "Community Partnerships for Student Support",
      "Supporting Students Experiencing Homelessness",
      "Cultural Responsiveness in Youth Programs",
    ],
  },
  {
    category: "Educator & Staff Wellness",
    icon: Smile,
    topics: [
      "Preventing Educator Burnout & Compassion Fatigue",
      "Secondary Traumatic Stress for School Staff",
      "Self-Care Strategies for Educators",
      "Building Staff Resilience Teams",
      "Sustaining Passion in Youth-Serving Work",
    ],
  },
];

const formats = [
  { icon: Mic, label: "Keynote (1-2 hours)" },
  { icon: Users, label: "Half-Day / Full-Day Workshop" },
  { icon: Layers, label: "Multi-Session Series" },
];

export default function SchoolsYouthOrganizationsClient({
  faqItems,
}: SchoolsYouthOrganizationsClientProps) {
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative w-full bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Students and educators in a supportive school environment"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-4">
            Schools &amp; Youth Organizations
          </h1>
          <p className="font-body text-lg md:text-xl text-accent mb-6 max-w-xl">
            Safer classrooms. Stronger students. Supported staff.
          </p>
          <p className="font-body text-base text-background/80 max-w-2xl leading-relaxed mb-8">
            Designed for teachers, counselors, administrators, and
            youth-serving organizations who want practical, trauma-informed
            tools to support students and build healthier school and program
            cultures.
          </p>
          <Link
            href={`/book?category=${CATEGORY_SLUG}`}
            className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-md shadow-md hover:brightness-105 active:scale-95 transition-all duration-200"
          >
            Request This Training
          </Link>
        </div>
      </section>

      {/* Featured Themes — vertical list */}
      <Section variant="default" paddingSize="xl" id="featured-themes">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Themes
          </h2>
          <div className="w-12 h-[2px] bg-accent rounded-full mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {featuredThemes.map((theme) => (
            <ThemeListItem
              key={theme.title}
              icon={theme.icon}
              title={theme.title}
              description={theme.description}
              requestHref={`/book?category=${CATEGORY_SLUG}&theme=${encodeURIComponent(
                theme.title
              )}`}
            />
          ))}
        </div>

        {/* View All Topics accordion toggle */}
        <div className="max-w-3xl mx-auto mt-6">
          <div className="bg-background rounded-md border border-[#E0D6C8] overflow-hidden shadow-sm">
            <button
              onClick={() => setTopicsOpen((prev) => !prev)}
              aria-expanded={topicsOpen}
              aria-controls="view-all-topics-panel"
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#EAE2D6] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
            >
              <span className="font-heading text-primary text-base font-semibold">
                View All Topics
              </span>
              <span className="text-secondary flex-shrink-0 ml-4">
                {topicsOpen ? (
                  <Minus size={18} strokeWidth={2} />
                ) : (
                  <Plus size={18} strokeWidth={2} />
                )}
              </span>
            </button>
            {topicsOpen && (
              <div
                id="view-all-topics-panel"
                role="region"
                className="px-6 pb-6 pt-2 border-t border-[#E0D6C8] flex flex-col gap-5"
              >
                {allTopics.map((group) => (
                  <div key={group.category}>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-secondary/10 text-secondary flex-shrink-0">
                        <group.icon size={16} strokeWidth={1.75} />
                      </span>
                      <span className="font-heading text-primary text-sm font-semibold">
                        {group.category}
                      </span>
                    </div>
                    <ul className="space-y-1.5 pl-[42px]">
                      {group.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="font-body text-sm text-foreground leading-relaxed">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Formats & Outcomes */}
      <Section variant="mint" paddingSize="xl" id="formats-outcomes">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
            Formats &amp; Outcomes
          </h2>
          <p className="font-body text-xs uppercase tracking-widest text-foreground/40">
            (Pending Approval)
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {formats.map((format) => (
            <div
              key={format.label}
              className="flex flex-col items-center text-center gap-3 bg-background rounded-md border border-[#D9E4D6] shadow-sm px-5 py-7"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary">
                <format.icon size={22} strokeWidth={1.75} />
              </span>
              <span className="font-body text-sm font-semibold text-primary leading-snug">
                {format.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center font-body text-xs text-foreground/60">
          Available in-person, virtually or hybrid.
        </p>
      </Section>

      {/* Dark band + View All Topics link + Testimonial */}
      <section className="relative w-full bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="#featured-themes"
            className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-widest text-accent hover:text-background transition-colors duration-200 mb-12"
          >
            View All Topics →
          </a>

          <Quote size={36} strokeWidth={1.4} className="text-accent mx-auto mb-5" />
          <blockquote className="font-heading text-xl sm:text-2xl text-background italic leading-relaxed mb-5">
            &ldquo;[Testimonial placeholder from an event or audience
            member]&rdquo;
          </blockquote>
          <p className="font-body text-sm text-background/60">
            — Client Name, Organization
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <Section variant="default" paddingSize="xl" id="faq">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[2px] bg-accent rounded-full mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openFaq.includes(index);
            return (
              <div
                key={index}
                className="bg-background rounded-md border border-[#E0D6C8] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full flex items-start justify-between px-6 py-5 text-left hover:bg-[#EAE2D6] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary gap-4"
                >
                  <span className="font-heading text-primary text-base font-semibold leading-snug">
                    {item.question}
                  </span>
                  <span className="text-secondary flex-shrink-0 mt-0.5">
                    {isOpen ? (
                      <ChevronUp size={20} strokeWidth={2} />
                    ) : (
                      <ChevronDown size={20} strokeWidth={2} />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className="px-6 pb-5 pt-1 border-t border-[#E0D6C8]"
                  >
                    <p className="font-body text-sm text-foreground leading-relaxed mt-3">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Request CTA */}
      <Section variant="primary" paddingSize="xl" id="request-cta" centered>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight mb-5">
          Ready to Bring This Training to Your Team?
        </h2>
        <p className="font-body text-base text-background/75 max-w-2xl mx-auto leading-relaxed mb-8">
          Whether you need a single session or a full series, Jamie will work
          with you to design training that meets your organization's goals —
          delivered in person, virtually, or in a hybrid format.
        </p>
        <Link
          href={`/book?category=${CATEGORY_SLUG}`}
          className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-md shadow-md hover:brightness-105 active:scale-95 transition-all duration-200"
        >
          Request This Training
        </Link>
      </Section>
    </>
  );
}
