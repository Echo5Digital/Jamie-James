import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Jamie James | Speaker, Trainer & Consultant",
  description:
    "Meet Jamie James — speaker, trainer, and organizational consultant with a passion for trauma-informed care, leadership, mental health, and family and child welfare. Compassionate. Practical. Real.",
  alternates: {
    canonical: "/about-jamie",
  },
};

const valuePillars = [
  {
    icon: Heart,
    title: "Compassion & Empathy",
    description:
      "Every person and every system holds dignity. Jamie leads with genuine care and deep respect for lived experience.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based & Practical",
    description:
      "Grounded in research and real-world application, Jamie's work translates best practices into actionable tools.",
  },
  {
    icon: Users,
    title: "People-Centered & Strengths-Focused",
    description:
      "Organizations grow when the people within them feel seen, supported, and empowered to build on their strengths.",
  },
  {
    icon: Sparkles,
    title: "Hope & Possibility",
    description:
      "Change is possible. Jamie believes in the capacity of individuals and organizations to heal, grow, and thrive.",
  },
];

const affiliations = [
  {
    name: "Open Arms Initiative",
    description:
      "A community-rooted initiative committed to supporting families and individuals through trauma-informed care and wraparound services.",
    href: "https://www.openarmsinitiative.com",
    image: "https://images.pexels.com/photos/8815242/pexels-photo-8815242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Open Arms Initiative — community support gathering",
  },
  {
    name: "Open Arms Foster Care",
    description:
      "Dedicated to creating safe, nurturing foster care environments where children and families receive holistic, compassionate support.",
    href: "https://www.openarmsfostercare.com",
    image: "https://images.pexels.com/photos/7979599/pexels-photo-7979599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Open Arms Foster Care — nurturing family environment",
  },
];

export default function AboutJamiePage() {
  return (
    <>
      {/* JSON-LD: AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Jamie James",
            description:
              "Meet Jamie James — speaker, trainer, and organizational consultant with a passion for trauma-informed care, leadership, mental health, and family and child welfare.",
            url: "https://jamiejames.com/about-jamie",
            mainEntity: {
              "@type": "Person",
              name: "Jamie James",
              jobTitle: "Speaker, Trainer & Organizational Consultant",
              description:
                "Jamie James is a speaker, trainer, and organizational consultant whose work is rooted in trauma-informed care, leadership development, mental health, and family and child welfare.",
            },
          }),
        }}
      />

      <Header />

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <Section variant="alternate" paddingSize="xl" maxWidth="2xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text side */}
          <div className="flex-1 order-2 lg:order-1">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
              Speaker · Trainer · Consultant
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary leading-tight mb-6">
              About Jamie
            </h1>
            <p className="font-body text-base text-foreground/80 leading-relaxed max-w-lg">
              Compassionate. Practical. Real-world strategies for healthier teams, stronger leaders,
              and more resilient communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-7 py-3 rounded-md shadow-md hover:brightness-105 transition-all duration-200"
              >
                Book Jamie
              </Link>
              <Link
                href="/speaking"
                className="inline-block border-2 border-primary text-primary font-body font-semibold text-xs uppercase tracking-widest px-7 py-3 rounded-md hover:bg-primary hover:text-background transition-all duration-200"
              >
                Explore Speaking
              </Link>
            </div>
          </div>

          {/* Portrait side */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-md overflow-hidden shadow-xl border-4 border-background">
              <img
                src="https://images.pexels.com/photos/4098273/pexels-photo-4098273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Jamie James — Speaker, Trainer & Organizational Consultant"
                className="w-full h-full object-cover object-top"
              />
              {/* decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary" />
            </div>
            {/* decorative offset box */}
            <div className="absolute hidden lg:block w-64 h-72 sm:w-80 sm:h-96 border-2 border-accent rounded-md -z-10 translate-x-4 translate-y-4 top-0 left-0 pointer-events-none" />
          </div>
        </div>
      </Section>

      {/* ── BIO & HEART STATEMENT ────────────────────────────────────── */}
      <Section variant="default" paddingSize="xl" maxWidth="xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary leading-snug mb-6">
            A heart for people, a passion for healthier systems.
          </h2>
          <div className="w-12 h-0.5 bg-accent mb-8" />
          <div className="space-y-5 font-body text-base text-foreground leading-relaxed">
            <p>
              Jamie James brings years of experience in trauma-informed care, leadership, mental health,
              and family and child welfare. Her work is rooted in a deep belief that real change happens
              when people feel genuinely seen, valued, and supported — not just in the hardest moments,
              but every day.
            </p>
            <p>
              Her approach is compassionate and evidence-informed, drawing on best practices and
              real-world experience to meet organizations and communities where they are. Whether
              she's speaking at a conference, facilitating a staff training, or consulting on
              organizational culture, Jamie brings clarity, warmth, and practical tools that people
              can actually use.
            </p>
            <p>
              Jamie's work spans diverse audiences — from frontline staff and foster care providers
              to executives, educators, faith communities, and healthcare teams. She believes in the
              transformative power of people and organizations, and she is committed to walking
              alongside them as they grow, strengthen, and create lasting impact.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CREDENTIALS & EXPERIENCE ─────────────────────────────────── */}
      <Section variant="alternate" paddingSize="xl" maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Credentials list */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-6 leading-snug">
              Credentials &amp; Experience
            </h2>
            <div className="w-10 h-0.5 bg-accent mb-8" />
            <ul className="space-y-4 font-body text-sm text-foreground leading-relaxed">
              {/* Placeholder credentials — replace with real values when available */}
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>
                  <strong className="text-primary font-semibold">Credentials / Degrees</strong> —
                  {" "}[Credentials / Degree Placeholder]
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>
                  <strong className="text-primary font-semibold">Years of Experience</strong> —
                  {" "}[Years of Experience Placeholder]
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>
                  <strong className="text-primary font-semibold">Areas of Expertise</strong> —
                  Trauma-Informed Care, Leadership Development, Mental Health, Family &amp; Child Welfare
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>
                  <strong className="text-primary font-semibold">Audiences Served</strong> —
                  Nonprofits, Healthcare Teams, Faith Communities, Schools &amp; Youth Organizations, Government Agencies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>
                  <strong className="text-primary font-semibold">Training Formats</strong> —
                  Keynotes, Half-Day &amp; Full-Day Workshops, Multi-Session Training Series, Organizational Consulting
                </span>
              </li>
            </ul>

            {/* Learn More CTA */}
            <div className="mt-10">
              <Link
                href="/book"
                className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-7 py-3 rounded-md shadow-md hover:brightness-105 transition-all duration-200"
              >
                Learn More About Jamie →
              </Link>
            </div>
          </div>

          {/* Pull-quote */}
          <div className="flex items-start">
            <blockquote className="relative bg-primary rounded-md p-8 sm:p-10 shadow-xl">
              <div className="text-accent text-6xl font-heading leading-none select-none mb-4">
                &ldquo;
              </div>
              <p className="font-heading text-xl sm:text-2xl text-background leading-relaxed italic mb-6">
                Real change happens when people feel seen, valued and supported.
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-accent" />
                <cite className="font-body text-sm text-background/70 not-italic tracking-wide">
                  Jamie James
                </cite>
              </footer>
              {/* decorative corner accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-md bg-gradient-to-r from-accent via-secondary to-primary" />
            </blockquote>
          </div>
        </div>
      </Section>

      {/* ── APPROACH & VALUES ────────────────────────────────────────── */}
      <Section variant="default" paddingSize="xl" maxWidth="xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Approach &amp; Values
          </h2>
          <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Jamie's work is guided by four core convictions that shape every training, speaking
            engagement, and consulting partnership.
          </p>
          <div className="mt-5 w-12 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col items-center text-center bg-background border border-[#E0D6C8] rounded-md p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-5 w-14 h-14 rounded-md bg-secondary/10 flex items-center justify-center">
                  <Icon size={26} strokeWidth={1.75} className="text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <div className="w-8 h-0.5 bg-accent mb-4" />
                <p className="font-body text-sm text-foreground/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── AFFILIATIONS ─────────────────────────────────────────────── */}
      <Section variant="alternate" paddingSize="xl" maxWidth="xl">
        <div className="mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Affiliations
          </h2>
          <p className="font-body text-base text-foreground/70 max-w-2xl leading-relaxed">
            Jamie is proud to be affiliated with organizations that share a commitment to
            compassionate, trauma-informed care and support for families and children.
          </p>
          <div className="mt-5 w-12 h-0.5 bg-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {affiliations.map((affiliate) => (
            <div
              key={affiliate.name}
              className="group bg-background rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#E0D6C8] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={affiliate.image}
                  alt={affiliate.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/30" />
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                  {affiliate.name}
                </h3>
                <div className="w-8 h-0.5 bg-accent mb-4" />
                <p className="font-body text-sm text-foreground/75 leading-relaxed flex-1">
                  {affiliate.description}
                </p>
                <a
                  href={affiliate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-start inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-md shadow-md hover:brightness-105 transition-all duration-200"
                  aria-label={`Learn more about ${affiliate.name}`}
                >
                  Learn More →
                </a>
              </div>

              {/* Bottom accent */}
              <div className="h-[3px] w-full bg-gradient-to-r from-accent via-secondary to-primary opacity-70" />
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}