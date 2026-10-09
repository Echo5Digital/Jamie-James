import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import TrainingCategoryCard from "@/components/TrainingCategoryCard";
import Link from "next/link";
import {
  Briefcase,
  Heart,
  Home,
  Users,
  School,
  BookOpen,
  Globe,
  Stethoscope,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Training & Workshops | Jamie James",
  description:
    "Explore Jamie James's 8 core training categories — trauma-informed care, leadership, mental health, foster care, parenting, schools, faith, and clinical training. Practical tools for lasting impact.",
  alternates: {
    canonical: "/training",
  },
};

const trainingCategories = [
  {
    icon: Briefcase,
    label: "Leadership & Workplace Wellness",
    href: "/training/leadership-workplace-wellness",
  },
  {
    icon: Heart,
    label: "Trauma & Mental Health",
    href: "/training/trauma-mental-health",
  },
  {
    icon: Home,
    label: "Foster Care, Adoption & Child Welfare",
    href: "/training/foster-care-adoption",
  },
  {
    icon: Users,
    label: "Parenting & Family",
    href: "/training/parenting-family",
  },
  {
    icon: School,
    label: "Schools & Youth Organizations",
    href: "/training/schools-youth-organizations",
  },
  {
    icon: BookOpen,
    label: "Faith & Ministry",
    href: "/training/faith-ministry",
  },
  {
    icon: Globe,
    label: "Community & Personal Development",
    href: "/training/community-personal-development",
  },
  {
    icon: Stethoscope,
    label: "Clinical Training",
    href: "/training/clinical-training",
  },
];

const faqItems = [
  {
    question: "How many training categories does Jamie offer?",
    answer:
      "Jamie offers 8 core training categories, ranging from Leadership & Workplace Wellness and Trauma & Mental Health to Foster Care, Faith & Ministry, and Clinical Training.",
  },
  {
    question: "Are Jamie's trainings available in person, virtually, or both?",
    answer:
      "The booking form includes a delivery format option for in-person, virtual, or hybrid — you can specify your preference when making an inquiry.",
  },
  {
    question: "Can Jamie create a custom training for our organization?",
    answer:
      "Yes. If a specific topic isn't listed, Jamie can discuss custom training or speaking options — simply reach out through the Request Availability form.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function TrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* Hero Banner */}
      <section className="relative w-full min-h-[320px] md:min-h-[380px] flex items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/9871139/pexels-photo-9871139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Books and a workspace representing training and professional development"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-background leading-tight mb-4">
            Training Overview
          </h1>
          <p className="font-body text-lg md:text-xl text-accent mb-4">
            Eight categories. Tailored to your needs.
          </p>
          <p className="font-body text-base text-background/80 max-w-2xl leading-relaxed">
            Jamie offers 8 core training categories designed to meet the needs
            of diverse audiences — from leaders and frontline staff to
            parents, educators, and faith communities. Each category draws on
            evidence-informed practice, real-world experience, and a deep
            commitment to compassionate, lasting change.
          </p>
        </div>
      </section>

      {/* Training Category Cards Grid */}
      <Section variant="mint" paddingSize="xl" maxWidth="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainingCategories.map((cat) => (
            <TrainingCategoryCard key={cat.href} {...cat} />
          ))}
        </div>
      </Section>

      {/* Custom Training CTA */}
      <Section variant="primary" paddingSize="lg" maxWidth="xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-14 h-14 rounded-md bg-secondary/30 flex items-center justify-center">
              <Search size={26} className="text-accent" strokeWidth={1.75} />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-background mb-2 leading-snug">
                Can't find what you're looking for?
              </h2>
              <p className="font-body text-sm text-background/75 leading-relaxed max-w-xl">
                Jamie is happy to discuss a custom training or speaking option
                tailored to your organization's unique needs, audience, and
                goals. Reach out to start the conversation.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/book"
              className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-md shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200"
            >
              Request Availability
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="default" paddingSize="lg" maxWidth="xl">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs uppercase tracking-widest text-accent mb-3 text-center">
            Common Questions
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 text-center leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[3px] bg-accent rounded-full mb-10 mx-auto" />

          <div className="flex flex-col gap-6">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-background border border-[#E0D6C8] rounded-md shadow-sm p-6"
              >
                <h3 className="font-heading text-primary text-lg font-semibold mb-3 leading-snug">
                  {item.question}
                </h3>
                <p className="font-body text-sm text-foreground/80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
