import type { Metadata } from "next";
import { AlertTriangle, CalendarCheck, FileText, Link2, RefreshCw, Shield } from "lucide-react";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { OPEN_ARMS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using the Jamie James website, including how inquiries work, content use, disclaimers and external links.",
  alternates: { canonical: "/terms" },
};

const host = new URL(SITE.url).host;

const sections: LegalSection[] = [
  {
    id: "use-of-website",
    icon: FileText,
    title: "Use of This Website",
    body: (
      <>
        <p>
          These terms apply to visitors of {host}. By using the site you agree
          to use it lawfully and in a way that does not infringe the rights of
          others or restrict their use of it.
        </p>
        <p>
          The text, images and other content on this website belong to Jamie
          James or are used with permission. You may not reproduce,
          redistribute or create derivative works from it without prior written
          permission. Limited quotation with clear attribution is welcome.
        </p>
      </>
    ),
  },
  {
    id: "inquiries",
    icon: CalendarCheck,
    title: "Inquiries and Bookings",
    body: (
      <>
        <p>
          Submitting the inquiry form is a request, not a confirmed booking.
          Formats, fees and availability are confirmed by Jamie, and a booking
          exists only when Jamie confirms it.
        </p>
        <p>
          Please do not include confidential patient, client or case details in
          the form. Submitting a request does not create a client, therapeutic
          or other professional relationship.
        </p>
      </>
    ),
  },
  {
    id: "no-professional-advice",
    icon: AlertTriangle,
    title: "No Professional Advice",
    body: (
      <>
        <p>
          Content on this website is general information about Jamie’s speaking,
          training and consulting. It is not clinical, therapeutic, legal or
          other professional advice.
        </p>
        <p>
          If you are experiencing a mental health crisis, contact a licensed
          professional or emergency services. For therapy or foster care
          services, contact{" "}
          <a className="font-semibold text-secondary underline underline-offset-2" href={OPEN_ARMS.initiative.href} target="_blank" rel="noopener noreferrer">
            {OPEN_ARMS.initiative.name}
          </a>{" "}
          or{" "}
          <a className="font-semibold text-secondary underline underline-offset-2" href={OPEN_ARMS.fosterCare.href} target="_blank" rel="noopener noreferrer">
            {OPEN_ARMS.fosterCare.name}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    icon: Link2,
    title: "External Links",
    body: (
      <p>
        This website links to other sites, including Open Arms Initiative and
        Open Arms Foster Care. Those sites are operated by others, and their
        content and practices are their own responsibility.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    icon: Shield,
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by law, Jamie James is not liable for
          damages arising from your use of this website or reliance on its
          content. The website is provided “as is” and “as available.”
        </p>
        <p>
          Some places do not allow certain limitations of liability. Where that
          applies, liability is limited to the greatest extent the law permits.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    icon: RefreshCw,
    title: "Changes to These Terms",
    body: (
      <p>
        These terms may be updated from time to time. The date of the latest
        update is shown at the top of this page, and continued use of the site
        means you accept the current terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      icon={FileText}
      title="Terms of Use"
      intro="These terms explain how this website works and what to expect when you send an inquiry."
      sections={sections}
      contactNote="Questions about these terms? Use the inquiry form to reach out."
    />
  );
}
