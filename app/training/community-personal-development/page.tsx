import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunityPersonalDevelopmentClient from "./CommunityPersonalDevelopmentClient";

export const metadata: Metadata = {
  title: "Community & Personal Development Training | Jamie James",
  description:
    "Build stronger communities and individuals with Jamie James's Community & Personal Development training — covering personal growth, resilience, community building, and civic and nonprofit leadership.",
  alternates: {
    canonical: "/training/community-personal-development",
  },
};

const faqItems = [
  {
    question:
      "Who is the Community & Personal Development training designed for?",
    answer:
      "This training is designed for community organizations, nonprofits, civic groups, and individuals who want practical tools for personal growth, resilience, and building stronger, more connected communities.",
  },
  {
    question:
      "What themes are covered in the Community & Personal Development category?",
    answer:
      "Key themes include Personal Growth & Resilience, Community Building & Belonging, Goal Setting & Purpose, Healthy Relationships, and Civic & Nonprofit Leadership.",
  },
  {
    question: "How do I request this training for my organization or event?",
    answer:
      "Click the 'Request This Training' button on this page to open the booking form, which will be pre-filled with the Community & Personal Development category for your convenience.",
  },
  {
    question: "Can this training be customized for our group's specific goals?",
    answer:
      "Yes. Jamie can tailor the content for community workshops, nonprofit teams, civic events, or personal development retreats — simply describe your audience and goals in the booking inquiry form.",
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

export default function CommunityPersonalDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Interactive client sections */}
        <CommunityPersonalDevelopmentClient faqItems={faqItems} />
      </main>
      <Footer />
    </>
  );
}
