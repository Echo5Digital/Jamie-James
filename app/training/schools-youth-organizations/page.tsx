import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchoolsYouthOrganizationsClient from "./SchoolsYouthOrganizationsClient";

export const metadata: Metadata = {
  title: "Schools & Youth Organizations Training | Jamie James",
  description:
    "Equip educators and youth-serving staff with Jamie James's Schools & Youth Organizations training — covering trauma-informed classrooms, student mental health, bullying prevention, and staff wellness.",
  alternates: {
    canonical: "/training/schools-youth-organizations",
  },
};

const faqItems = [
  {
    question: "Who is the Schools & Youth Organizations training designed for?",
    answer:
      "This training is designed for teachers, school counselors, administrators, and staff at youth-serving organizations who want practical, trauma-informed tools to support students and young people.",
  },
  {
    question: "What themes are covered in the Schools & Youth Organizations category?",
    answer:
      "Key themes include Trauma-Informed Classrooms, Student Mental Health & Wellbeing, Bullying & Peer Conflict Prevention, Positive Youth Development, and Educator & Staff Wellness.",
  },
  {
    question: "How do I request this training for my school or organization?",
    answer:
      "Click the 'Request This Training' button on this page to open the booking form, which will be pre-filled with the Schools & Youth Organizations category for your convenience.",
  },
  {
    question: "Can this training be customized for our staff or student population?",
    answer:
      "Yes. Jamie can tailor the content for classroom teachers, administrators, counselors, or youth program staff — simply describe your audience and goals in the booking inquiry form.",
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

export default function SchoolsYouthOrganizationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Interactive client sections */}
        <SchoolsYouthOrganizationsClient faqItems={faqItems} />
      </main>
      <Footer />
    </>
  );
}
