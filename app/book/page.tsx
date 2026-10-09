import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookClient from "./BookClient";

export const metadata: Metadata = {
  title: "Book Jamie James — Speaking, Training & Consulting",
  description:
    "Submit a booking request for Jamie James's speaking engagements, training workshops, or organizational consulting. Fill out the inquiry form to get started.",
  alternates: {
    canonical: "/book",
  },
};

const faqItems = [
  {
    question: "Is submitting this form a confirmed booking?",
    answer:
      "No. Submitting the form is a request, not a confirmed booking. Jamie will review your information and follow up as soon as possible.",
  },
  {
    question: "Should I include confidential client or patient details in the form?",
    answer:
      "Please do not include confidential patient, client, or case details in the inquiry form.",
  },
  {
    question:
      "I'm looking for foster care or adoption support — is this the right place?",
    answer:
      "For foster care or adoption family resources, visit Open Arms Initiative or Open Arms Foster Care through the affiliate links on the site.",
  },
  {
    question: "What information do I need to complete the booking request?",
    answer:
      "Required fields include your name, email, organization or individual status, service interest, and a brief request summary. Optional details like event date, location, audience size, and budget help Jamie respond more specifically.",
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

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Book Jamie James — Speaking, Training & Consulting",
  description:
    "Submit a booking request for Jamie James's speaking engagements, training workshops, or organizational consulting.",
  url: "https://jamiejames.com/book",
};

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Header />

      {/* Page Hero */}
      <section className="relative w-full bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/6037391/pexels-photo-6037391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Speaking · Training · Consulting
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
              Book Jamie
            </h1>
            <p className="font-body text-base md:text-lg text-background/75 leading-relaxed max-w-xl">
              Request information about speaking, training, or consulting.
              Fill out the form below and Jamie will follow up as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form + FAQ */}
      <BookClient faqItems={faqItems} />

      <Footer />
    </>
  );
}