import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeakingClient from "./SpeakingClient";

export const metadata: Metadata = {
  title: "Speaking Engagements | Jamie James",
  description:
    "Book Jamie James for your next conference, retreat, staff day, or faith event. Inspiring, authentic, and actionable speaking on trauma-informed care, leadership, and mental health.",
  alternates: {
    canonical: "/speaking",
  },
};

const faqData = [
  {
    question: "What types of events is Jamie available to speak at?",
    answer:
      "Jamie is available for conferences, retreats, staff days, and faith and community events, delivering engaging and practical presentations tailored to each audience.",
  },
  {
    question: "What topics does Jamie cover in her speaking engagements?",
    answer:
      "Jamie speaks on trauma-informed care, leadership development, mental health, burnout and compassion fatigue, foster care and child welfare, and organizational resilience, among other related themes.",
  },
  {
    question: "How can I book Jamie for a speaking engagement?",
    answer:
      "You can request Jamie's availability by completing the booking inquiry form on the Book Jamie page, where you can describe your event, audience, and service interests.",
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

export default function SpeakingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <div className="bg-background">
        <SpeakingClient faqData={faqData} />
      </div>
      <Footer />
    </>
  );
}