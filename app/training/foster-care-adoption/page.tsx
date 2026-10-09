import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FosterCareAdoptionClient from "./FosterCareAdoptionClient";

export const metadata: Metadata = {
  title: "Foster Care, Adoption & Child Welfare Training | Jamie James",
  description:
    "Equip caseworkers, foster and adoptive families, and child welfare teams with Jamie James's Foster Care, Adoption & Child Welfare training — covering attachment, trauma-informed placement, reunification, and caregiver support.",
  alternates: {
    canonical: "/training/foster-care-adoption",
  },
};

const faqItems = [
  {
    question:
      "Who is the Foster Care, Adoption & Child Welfare training designed for?",
    answer:
      "This training is designed for child welfare caseworkers, foster and adoptive parents, agency staff, and support organizations who want deeper skills in trauma-informed, attachment-focused care for children and families in the system.",
  },
  {
    question:
      "What themes are covered in the Foster Care, Adoption & Child Welfare category?",
    answer:
      "Key themes include Attachment & Bonding, Trauma-Informed Placement, Navigating Reunification & Loss, Supporting Foster & Adoptive Families, and Caseworker Resilience & Burnout Prevention.",
  },
  {
    question: "How do I request this training for my organization?",
    answer:
      "Click the 'Request This Training' button on this page to open the booking form, which will be pre-filled with the Foster Care, Adoption & Child Welfare category for your convenience.",
  },
  {
    question: "Can this training be customized for our team's specific needs?",
    answer:
      "Yes. Jamie can tailor the content to fit caseworkers, foster families, adoptive families, or agency leadership — simply describe your audience and goals in the booking inquiry form.",
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

export default function FosterCareAdoptionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Interactive client sections */}
        <FosterCareAdoptionClient faqItems={faqItems} />
      </main>
      <Footer />
    </>
  );
}
