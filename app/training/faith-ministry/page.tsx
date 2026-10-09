import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaithMinistryClient from "./FaithMinistryClient";

export const metadata: Metadata = {
  title: "Faith & Ministry Training | Jamie James",
  description:
    "Equip pastors, ministry leaders, and faith communities with Jamie James's Faith & Ministry training — covering trauma-informed ministry, pastoral care, congregational care teams, and minister wellness.",
  alternates: {
    canonical: "/training/faith-ministry",
  },
};

const faqItems = [
  {
    question: "Who is the Faith & Ministry training designed for?",
    answer:
      "This training is designed for pastors, ministry leaders, church staff, and faith-based organizations who want trauma-informed, practical tools to care for their congregations and communities well.",
  },
  {
    question: "What themes are covered in the Faith & Ministry category?",
    answer:
      "Key themes include Trauma-Informed Ministry, Pastoral Care & Crisis Response, Building Congregational Care Teams, Faith & Mental Health, and Minister & Staff Wellness.",
  },
  {
    question: "How do I request this training for my church or organization?",
    answer:
      "Click the 'Request This Training' button on this page to open the booking form, which will be pre-filled with the Faith & Ministry category for your convenience.",
  },
  {
    question: "Can this training be customized for our congregation's context?",
    answer:
      "Yes. Jamie can tailor the content and examples to fit your congregation's size, denomination, and ministry focus — simply describe your needs in the booking inquiry form.",
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

export default function FaithMinistryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Interactive client sections */}
        <FaithMinistryClient faqItems={faqItems} />
      </main>
      <Footer />
    </>
  );
}
