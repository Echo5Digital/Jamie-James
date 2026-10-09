import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TraumaMentalHealthClient from "./TraumaMentalHealthClient";

export const metadata: Metadata = {
  title: "Trauma & Mental Health Training | Jamie James",
  description:
    "Build trauma-informed knowledge and practical mental health skills with Jamie James's Trauma & Mental Health training — covering trauma-informed care, secondary traumatic stress, grief, and mental health first aid.",
  alternates: {
    canonical: "/training/trauma-mental-health",
  },
};

const faqItems = [
  {
    question: "Who is the Trauma & Mental Health training designed for?",
    answer:
      "This training is designed for helping professionals, educators, caregivers, first responders, and organizational teams who want a deeper, practical understanding of trauma and mental health so they can respond with skill and compassion.",
  },
  {
    question: "What themes are covered in the Trauma & Mental Health category?",
    answer:
      "Key themes include Trauma-Informed Care, Secondary Traumatic Stress & Vicarious Trauma, Mental Health First Aid, Grief & Loss, and Anxiety & Stress Regulation.",
  },
  {
    question: "How do I request this training for my organization?",
    answer:
      "Click the 'Request This Training' button on this page to open the booking form, which will be pre-filled with the Trauma & Mental Health category for your convenience.",
  },
  {
    question: "Can this training be customized for our team's specific needs?",
    answer:
      "Yes. Jamie can tailor the depth, examples, and focus areas to match your team's role, population served, and current challenges — simply describe your needs in the booking inquiry form.",
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

export default function TraumaMentalHealthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Interactive client sections */}
        <TraumaMentalHealthClient faqItems={faqItems} />
      </main>
      <Footer />
    </>
  );
}
