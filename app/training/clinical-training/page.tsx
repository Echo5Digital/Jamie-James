import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClinicalTrainingClient from "./ClinicalTrainingClient";

export const metadata: Metadata = {
  title: "Clinical Training | Jamie James",
  description:
    "Advance clinical practice with Jamie James's Clinical Training — covering evidence-based trauma treatment, clinical supervision, ethics, assessment, and continuing education for mental health professionals.",
  alternates: {
    canonical: "/training/clinical-training",
  },
};

const faqItems = [
  {
    question: "Who is the Clinical Training designed for?",
    answer:
      "This training is designed for therapists, clinicians, clinical supervisors, and mental health agencies seeking evidence-informed, practice-ready training to strengthen clinical skill and client outcomes.",
  },
  {
    question: "What themes are covered in the Clinical Training category?",
    answer:
      "Key themes include Evidence-Based Trauma Treatment, Clinical Supervision & Consultation, Ethics & Risk Management, Assessment & Diagnosis, and Continuing Education for Clinicians.",
  },
  {
    question: "How do I request this training for my practice or agency?",
    answer:
      "Click the 'Request This Training' button on this page to open the booking form, which will be pre-filled with the Clinical Training category for your convenience.",
  },
  {
    question: "Can this training be customized for our clinical team's needs?",
    answer:
      "Yes. Jamie can tailor the depth, modality focus, and case examples to fit your clinical team's setting, client population, and professional development goals — simply describe your needs in the booking inquiry form.",
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

export default function ClinicalTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Interactive client sections */}
        <ClinicalTrainingClient faqItems={faqItems} />
      </main>
      <Footer />
    </>
  );
}
