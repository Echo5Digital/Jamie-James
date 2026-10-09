import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadershipClient from "./LeadershipClient";

export const metadata: Metadata = {
  title: "Leadership & Workplace Wellness Training | Jamie James",
  description:
    "Strengthen your leaders and teams with Jamie James's Leadership & Workplace Wellness training — covering leadership development, burnout, culture, conflict resolution, and leading through change.",
  alternates: {
    canonical: "/training/leadership-workplace-wellness",
  },
};

const faqItems = [
  {
    question: "Who is the Leadership & Workplace Wellness training designed for?",
    answer:
      "This training is designed for leaders, managers, HR professionals, and teams across organizations, nonprofits, and human-services settings who want practical tools to strengthen leadership and workplace wellbeing.",
  },
  {
    question: "What themes are covered in the Leadership & Workplace Wellness category?",
    answer:
      "Key themes include Leadership Development, Burnout & Compassion Fatigue, Healthy Workplace Culture, Team Communication & Conflict Resolution, and Leading Through Change & Crisis.",
  },
  {
    question: "How do I request this training for my organization?",
    answer:
      "Click the 'Request This Training' button on this page to open the booking form, which will be pre-filled with the Leadership & Workplace Wellness category for your convenience.",
  },
  {
    question: "Can this training be customized for our team's specific needs?",
    answer:
      "Yes. Jamie can tailor the content and focus areas to fit your organization's context, challenges, and goals — simply describe your needs in the booking inquiry form.",
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

export default function LeadershipWorkplaceWellnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Interactive client sections */}
        <LeadershipClient faqItems={faqItems} />
      </main>
      <Footer />
    </>
  );
}