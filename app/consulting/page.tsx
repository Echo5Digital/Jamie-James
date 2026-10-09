import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultingClient from "./ConsultingClient";

export const metadata: Metadata = {
  title: "Organizational Consulting Services | Jamie James",
  description:
    "Jamie James provides strategic organizational consulting in workforce development, leadership coaching, trauma-informed change, program development, and foster care consultation for nonprofits and human-services organizations.",
  alternates: {
    canonical: "/consulting",
  },
};

const faqData = [
  {
    question: "What types of organizations does Jamie consult with?",
    answer:
      "Jamie works with nonprofits, human-services organizations, foster care and child welfare agencies, healthcare and behavioral health organizations, and other mission-driven teams seeking sustainable organizational improvement.",
  },
  {
    question: "What does the consulting engagement process look like?",
    answer:
      "Jamie's four-step process begins with a Discovery Call to understand your needs, followed by an Assessment to identify strengths and gaps, a tailored Plan, and ongoing Implementation & Support.",
  },
  {
    question: "What are the five consulting focus areas?",
    answer:
      "The five areas are: Organizational & Workforce Development, Leadership Coaching & Staff Wellness, Program Policy & Practice Development, Trauma-Informed Organizational Change, and Behavioral Health & Foster Care Consultation.",
  },
  {
    question: "How do I start a consulting conversation with Jamie?",
    answer:
      "Click the 'Inquire About Consulting' button on this page to submit a booking inquiry. Jamie will review your information and follow up to discuss how she can support your organization's goals.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <ConsultingClient faqData={faqData} />
      </main>
      <Footer />
    </>
  );
}