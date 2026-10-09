import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParentingFamilyClient from "./ParentingFamilyClient";

export const metadata: Metadata = {
  title: "Parenting & Family Training | Jamie James",
  description:
    "Strengthen families with Jamie James's Parenting & Family training — covering trauma-informed parenting, positive discipline, family communication, blended families, and co-parenting.",
  alternates: {
    canonical: "/training/parenting-family",
  },
};

const faqItems = [
  {
    question: "Who is the Parenting & Family training designed for?",
    answer:
      "This training is designed for parents, caregivers, family support organizations, and the professionals who serve them — anyone looking for practical, trauma-informed tools to strengthen family relationships.",
  },
  {
    question: "What themes are covered in the Parenting & Family category?",
    answer:
      "Key themes include Trauma-Informed Parenting, Positive Discipline & Behavior Support, Family Communication, Blended Families & Co-Parenting, and Raising Resilient Children.",
  },
  {
    question: "How do I request this training for my organization?",
    answer:
      "Click the 'Request This Training' button on this page to open the booking form, which will be pre-filled with the Parenting & Family category for your convenience.",
  },
  {
    question: "Can this training be customized for our audience's specific needs?",
    answer:
      "Yes. Jamie can tailor the content for parent workshops, staff training, or family support programs — simply describe your audience and goals in the booking inquiry form.",
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

export default function ParentingFamilyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Interactive client sections */}
        <ParentingFamilyClient faqItems={faqItems} />
      </main>
      <Footer />
    </>
  );
}
