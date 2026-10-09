import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import TrainingCategoryCard from "@/components/TrainingCategoryCard";
import ThemeCarousel from "@/components/ThemeCarousel";
import { StatCard, TestimonialStatCard } from "@/components/StatCard";
import Link from "next/link";
import {
  Mic,
  BookOpen,
  Building2,
  Briefcase,
  HeartPulse,
  Baby,
  Home,
  School,
  Church,
  Sprout,
  Stethoscope,
  ArrowRight,
  Award,
  Users2,
  ExternalLink,
  HandHeart,
  Lightbulb,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jamie James | Speaker, Trainer & Consultant",
  description:
    "Jamie James offers speaking, training, and organizational consulting in trauma-informed care, leadership, mental health, and child welfare — practical tools that strengthen people and organizations.",
  alternates: {
    canonical: "/",
  },
};

const trainingCategories = [
  {
    icon: Briefcase,
    label: "Leadership & Workplace Wellness",
    href: "/training/leadership-workplace-wellness",
  },
  {
    icon: HeartPulse,
    label: "Trauma & Mental Health",
    href: "/training/trauma-mental-health",
  },
  {
    icon: Baby,
    label: "Foster Care, Adoption & Child Welfare",
    href: "/training/foster-care-adoption",
  },
  {
    icon: Home,
    label: "Parenting & Family",
    href: "/training/parenting-family",
  },
  {
    icon: School,
    label: "Schools & Youth Organizations",
    href: "/training/schools-youth-organizations",
  },
  {
    icon: Church,
    label: "Faith & Ministry",
    href: "/training/faith-ministry",
  },
  {
    icon: Sprout,
    label: "Community & Personal Development",
    href: "/training/community-personal-development",
  },
  {
    icon: Stethoscope,
    label: "Clinical Training",
    href: "/training/clinical-training",
  },
];

const featuredThemes = [
  {
    label: "Trauma-Informed Care",
    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Leadership Development",
    image:
      "https://images.pexels.com/photos/8636598/pexels-photo-8636598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Burnout & Compassion Fatigue",
    image:
      "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Trauma-Informed Foster Care",
    image:
      "https://images.pexels.com/photos/7979599/pexels-photo-7979599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    label: "Trauma-Informed Schools",
    image:
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const approachPoints = [
  { icon: HandHeart, label: "Compassion over judgment" },
  { icon: Lightbulb, label: "Practical, research-informed tools" },
  { icon: TrendingUp, label: "Strengths-based and solution-focused" },
  { icon: Sparkles, label: "Meaningful, lasting change" },
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section className="relative w-full bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-16 lg:py-24">
            {/* Text */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Speaker
                </span>
                <span className="w-1 h-1 rounded-full bg-accent/60" />
                <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Trainer
                </span>
                <span className="w-1 h-1 rounded-full bg-accent/60" />
                <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Organizational Consultant
                </span>
              </div>
              <div className="w-16 h-[2px] bg-accent/50 rounded-full mb-6" />
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                Speaking and Training That Strengthen People and Organizations.
              </h1>
              <p className="font-body text-base sm:text-lg text-foreground/75 leading-relaxed mb-8">
                Practical tools. Compassionate insight. Real-world strategies
                for healthier teams, stronger leaders and more resilient
                communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-md shadow-md hover:brightness-105 transition-all duration-200"
                >
                  Request Availability →
                </Link>
                <Link
                  href="/training"
                  className="inline-block border-2 border-primary text-primary font-body font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-md hover:bg-primary hover:text-background transition-all duration-200"
                >
                  Explore Training
                </Link>
              </div>
            </div>

            {/* Portrait */}
            <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/8761727/pexels-photo-8761727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Jamie James — speaker, trainer, and organizational consultant"
                  className="w-full h-full object-cover"
                />
                {/* Decorative accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-secondary to-primary opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW CARDS ── */}
      <Section variant="default" paddingSize="xl" maxWidth="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Speaking */}
          <div className="group flex flex-col bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#E0D6C8]">
            <div className="flex flex-col flex-1 p-7">
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary">
                <Mic size={24} strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3 leading-snug">
                Speaking Engagements
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed flex-1">
                Inspiring, authentic, and actionable presentations for your next
                event, conference, or staff day.
              </p>
              <Link
                href="/speaking"
                className="mt-5 self-start inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Training */}
          <div className="group flex flex-col bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#E0D6C8]">
            <div className="flex flex-col flex-1 p-7">
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary">
                <BookOpen size={24} strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3 leading-snug">
                Training &amp; Workshops
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed flex-1">
                Interactive, evidence-informed training designed for lasting
                impact and real change.
              </p>
              <Link
                href="/training"
                className="mt-5 self-start inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Consulting */}
          <div className="group flex flex-col bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#E0D6C8]">
            <div className="flex flex-col flex-1 p-7">
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary">
                <Building2 size={24} strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3 leading-snug">
                Organizational Consulting
              </h3>
              <p className="font-body text-sm text-foreground/75 leading-relaxed flex-1">
                Strategic support to help your organization grow, strengthen
                impact and create sustainable change.
              </p>
              <Link
                href="/consulting"
                className="mt-5 self-start inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TRAINING CATEGORIES GRID ── */}
      <Section variant="mint" paddingSize="xl" maxWidth="xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-3">
              Training Categories
            </h2>
            <p className="font-body text-base text-foreground/70">
              Eight core areas. Real-world tools. Lasting impact.
            </p>
          </div>
          <Link
            href="/training"
            className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200 whitespace-nowrap"
          >
            View All Training <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainingCategories.map((cat) => (
            <TrainingCategoryCard key={cat.href} {...cat} />
          ))}
        </div>
      </Section>

      {/* ── FEATURED THEMES CAROUSEL ── */}
      <section className="w-full bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-background mb-3">
              Featured Themes
            </h2>
            <p className="font-body text-sm text-background/70 max-w-xl mx-auto">
              Popular topics that create safer, healthier and more resilient
              environments.
            </p>
          </div>
          <ThemeCarousel items={featuredThemes} />
        </div>
      </section>

      {/* ── ABOUT JAMIE PREVIEW ── */}
      <Section variant="default" paddingSize="xl" maxWidth="xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Portrait */}
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm mx-auto lg:mx-0">
            <div className="relative rounded-md overflow-hidden shadow-lg aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/8171180/pexels-photo-8171180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Jamie James — independent speaker, trainer, and organizational consultant"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary opacity-80" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                About Jamie
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-5 leading-tight">
                Jamie James is a speaker, trainer and organizational
                consultant with a passion for trauma-informed care,
                leadership, mental health and family/child welfare.
              </h2>

              <div className="mb-6">
                <Link
                  href="/about-jamie"
                  className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-md shadow-md hover:brightness-105 transition-all duration-200"
                >
                  Learn More About Jamie
                </Link>
              </div>

              <div className="pt-5 border-t border-[#E0D6C8]">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-3">
                  Also affiliated with
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href="https://www.openarmsinitiative.com"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-secondary hover:text-primary underline underline-offset-2 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Arms Initiative <ExternalLink size={13} />
                  </a>
                  <span className="text-foreground/30 select-none">·</span>
                  <a
                    href="https://www.openarmsfostercare.com"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-secondary hover:text-primary underline underline-offset-2 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Arms Foster Care <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Her Approach card */}
            <div className="lg:col-span-2">
              <div className="bg-mint rounded-md border border-[#D9E4D6] shadow-sm p-7">
                <h3 className="font-heading text-primary text-lg font-bold mb-5">
                  Her Approach
                </h3>
                <ul className="flex flex-col gap-4">
                  {approachPoints.map((point) => (
                    <li key={point.label} className="flex items-center gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-secondary/10 text-secondary">
                        <point.icon size={17} strokeWidth={1.75} />
                      </span>
                      <span className="font-body text-sm text-foreground leading-snug">
                        {point.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── BY THE NUMBERS ── */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-background mb-2">
              By the Numbers
            </h2>
            <p className="font-body text-sm text-background/70">
              A track record of meaningful impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard icon={Award} value="[XX]+" label="Years Experience" />
            <StatCard icon={Users2} value="[XX]" label="Organizations Served" />
            <TestimonialStatCard
              quote="[Testimonial client quote placeholder — real testimonial to be added here.]"
              author="[Client Name]"
              organization="[Organization]"
            />
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA BANNER ── */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/11629429/pexels-photo-11629429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Peaceful natural landscape background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-4 leading-tight">
            Ready to Bring Jamie to Your Organization?
          </h2>
          <p className="font-body text-base text-background/75 mb-10 max-w-xl mx-auto">
            Let&apos;s create meaningful change together.
          </p>
          <Link
            href="/book"
            className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-md shadow-md hover:brightness-105 transition-all duration-200"
          >
            Request Availability →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
