import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { FileText, Globe, AlertTriangle, Link2, Shield, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Jamie James",
  description:
    "Review the terms and conditions governing use of the Jamie James website, including content use, disclaimers, and affiliate link disclosures.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    id: "use-of-website",
    icon: Globe,
    title: "Use of This Website",
    content: [
      "By accessing and using this website, you agree to use it for lawful purposes only and in a manner that does not infringe the rights of others or restrict their use of the site.",
      "All content on this website — including text, graphics, logos, images, training descriptions, and downloadable materials — is the intellectual property of Jamie James and is protected by applicable copyright and intellectual property laws.",
      "You may not reproduce, redistribute, republish, transmit, modify, adapt, or create derivative works from any content on this site without prior written permission from Jamie James. Limited quotation for educational, journalistic, or personal purposes may be permissible with clear attribution.",
      "Unauthorized use of site content may give rise to a claim for damages and/or constitute a criminal offense.",
    ],
  },
  {
    id: "no-professional-advice",
    icon: AlertTriangle,
    title: "No Professional Advice Disclaimer",
    content: [
      "The content published on this website is provided for general informational and educational purposes only. It is not intended to substitute for, or constitute, clinical, therapeutic, legal, financial, or any other form of professional advice.",
      "Nothing on this website should be construed as establishing a client relationship, a therapeutic relationship, or any other professional relationship between you and Jamie James.",
      "If you are experiencing a mental health crisis or require clinical support, please contact a licensed mental health professional or emergency services. For foster care or child welfare concerns, please reach out to the appropriate licensed agency in your area.",
      "Always seek the advice of a qualified professional with any questions you may have regarding a specific issue or situation.",
    ],
  },
  {
    id: "affiliate-links",
    icon: Link2,
    title: "Affiliate and External Links",
    content: [
      "This website may contain links to third-party websites and organizations, including but not limited to affiliated organizations such as Open Arms Initiative and Open Arms Foster Care. These links are provided for your convenience and informational purposes.",
      "Jamie James is not responsible for the content, accuracy, privacy practices, or availability of any third-party websites. The inclusion of a link does not imply endorsement of that site or its operators.",
      "Some links on this website may be affiliate or partner links. If you click on such links and take action (such as making a purchase or registering for a service), Jamie James may receive a referral benefit. This does not affect the price you pay or the editorial independence of content on this site.",
      "You access third-party websites at your own risk and are encouraged to review their respective terms of service and privacy policies.",
    ],
  },
  {
    id: "limitation-of-liability",
    icon: Shield,
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, Jamie James shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your access to, or use of, this website or any content found herein.",
      "This includes, without limitation, damages for loss of profits, goodwill, data, or other intangible losses — even if Jamie James has been advised of the possibility of such damages.",
      "Jamie James makes no warranties, express or implied, regarding the accuracy, completeness, reliability, or suitability of any information on this website. The website and its content are provided on an 'as is' and 'as available' basis.",
      "Some jurisdictions do not allow the exclusion or limitation of liability for certain types of damages. In such jurisdictions, Jamie James's liability is limited to the greatest extent permitted by law.",
    ],
  },
  {
    id: "changes-to-terms",
    icon: RefreshCw,
    title: "Changes to Terms",
    content: [
      "Jamie James reserves the right to update, modify, or replace these Terms of Service at any time without prior notice. Changes become effective immediately upon posting to this page.",
      "Your continued use of this website following the posting of any changes constitutes your acceptance of those changes. It is your responsibility to review these terms periodically.",
      "The date of the most recent revision will be reflected at the bottom of this page. If you do not agree to the revised terms, you should discontinue use of this website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <Section variant="primary" paddingSize="lg" maxWidth="md" centered>
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-accent">
              <FileText size={28} strokeWidth={1.5} />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight">
              Terms of Service
            </h1>
            <p className="font-body text-base text-background/75 max-w-xl leading-relaxed">
              By using the Jamie James website, you agree to the terms and
              conditions outlined below. Please read them carefully before
              accessing or using this site.
            </p>
            <div className="w-12 h-[2px] bg-accent rounded-full mt-2" />
          </div>
        </Section>

        {/* Intro / Effective Notice */}
        <Section variant="alternate" paddingSize="sm" maxWidth="md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-background border border-[#E0D6C8] rounded-[0.375rem] px-6 py-4 shadow-sm">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary whitespace-nowrap">
              Effective Notice
            </span>
            <div className="hidden sm:block w-px h-4 bg-[#C9B99A]" />
            <p className="font-body text-sm text-foreground/70 leading-relaxed">
              These terms apply to all visitors and users of{" "}
              <span className="font-semibold text-primary">
                jamiejames.com
              </span>
              . Continued use of this site constitutes your acceptance of these
              terms. If you do not agree, please discontinue use.
            </p>
          </div>
        </Section>

        {/* Terms Sections */}
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isAlternate = index % 2 !== 0;
          return (
            <Section
              key={section.id}
              id={section.id}
              variant={isAlternate ? "alternate" : "default"}
              paddingSize="lg"
              maxWidth="md"
            >
              {/* Section Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-[0.375rem] bg-secondary/10 text-secondary mt-0.5">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary leading-snug">
                    {section.title}
                  </h2>
                  <div className="mt-2 w-10 h-[2px] bg-accent rounded-full" />
                </div>
              </div>

              {/* Section Content */}
              <div className="space-y-4 pl-0 md:pl-16">
                {section.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-body text-sm md:text-base text-foreground/80 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Section>
          );
        })}

        {/* Footer Note / Last Updated */}
        <Section variant="alternate" paddingSize="sm" maxWidth="md">
          <div className="border-t border-[#E0D6C8] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-body text-xs text-foreground/50 leading-relaxed">
              These terms were last reviewed and updated in 2024. Jamie James
              reserves the right to amend these terms at any time.
            </p>
            <a
              href="/privacy"
              className="flex-shrink-0 font-body text-xs font-semibold uppercase tracking-widest text-secondary hover:text-primary transition-colors underline underline-offset-4"
            >
              View Privacy Policy →
            </a>
          </div>
        </Section>

        {/* CTA Band */}
        <Section variant="primary" paddingSize="lg" maxWidth="xl" centered>
          <div className="flex flex-col items-center gap-5">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-background leading-snug max-w-xl">
              Questions About These Terms?
            </h2>
            <p className="font-body text-sm text-background/70 max-w-md leading-relaxed">
              If you have questions about how this site is used or these terms,
              you're welcome to reach out through the booking page.
            </p>
            <a
              href="/book"
              className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-7 py-3 rounded-md shadow-md hover:brightness-105 transition-all duration-200"
            >
              Contact Jamie →
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}