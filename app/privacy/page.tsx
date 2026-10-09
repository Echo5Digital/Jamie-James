import type { Metadata } from "next";
import { Cookie, Database, ExternalLink, Lock, Mail } from "lucide-react";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { OPEN_ARMS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Jamie James website collects, uses and shares the information you submit through the inquiry form.",
  alternates: { canonical: "/privacy" },
};

const bullets = (items: string[]) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2">
        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const sections: LegalSection[] = [
  {
    id: "what-we-collect",
    icon: Database,
    title: "What We Collect",
    body: (
      <>
        <p>
          The only personal information this website collects is what you choose
          to enter in the inquiry form on the Book Jamie page.
        </p>
        <p className="font-semibold text-primary">Required:</p>
        {bullets([
          "Your name and email address",
          "Whether you are inquiring as an organization or an individual (and your organization’s name if so)",
          "The service you are interested in",
          "A brief summary of your request",
        ])}
        <p className="font-semibold text-primary">Optional:</p>
        {bullets([
          "Phone number",
          "Category and theme or topic",
          "Audience size, preferred or flexible date, and event location",
          "Delivery preference and budget range",
        ])}
        <p>
          Please do not include confidential patient, client or case details in
          the form.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    icon: Lock,
    title: "How We Use and Share It",
    body: (
      <>
        <p>
          We use your details only to respond to your request. When you submit
          the form, the request is sent by email to Jamie’s booking inbox, and
          an acknowledgment is sent to the email address you provided. We rely
          on an email service provider to deliver these messages.
        </p>
        <p>
          A request is not a confirmed booking. We do not sell your information
          or use it for marketing to unrelated third parties.
        </p>
        <p>
          We keep inquiry details only as long as needed to respond to your
          request and keep a record of the conversation. You can ask to see or
          delete the information you submitted by contacting us.
        </p>
      </>
    ),
  },
  {
    id: "analytics-third-parties",
    icon: Cookie,
    title: "Analytics, Cookies and Third Parties",
    body: (
      <>
        <p>
          This website does not currently use analytics or advertising cookies.
          If measurement is added in the future, it will count successful
          inquiries without recording form text or personal details.
        </p>
        <p>
          The site loads its fonts from Google Fonts, which may receive your IP
          address and browser details when a page loads.
        </p>
        <p>
          This website links to{" "}
          <a
            href={OPEN_ARMS.initiative.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-secondary underline underline-offset-2 hover:text-primary"
          >
            {OPEN_ARMS.initiative.name}
            <ExternalLink size={12} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>{" "}
          and{" "}
          <a
            href={OPEN_ARMS.fosterCare.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-secondary underline underline-offset-2 hover:text-primary"
          >
            {OPEN_ARMS.fosterCare.name}
            <ExternalLink size={12} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          . Those sites have their own privacy practices. Requests for therapy
          or foster care services are handled by those organizations, not by
          this website.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "Questions About Your Information",
    body: (
      <p>
        To ask a privacy question or request access to or deletion of your
        information, contact Jamie through the inquiry form on this website
        {SITE.contactEmail ? (
          <>
            {" "}or email{" "}
            <a className="font-semibold text-secondary underline underline-offset-2" href={`mailto:${SITE.contactEmail}`}>
              {SITE.contactEmail}
            </a>
          </>
        ) : null}
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      icon={Lock}
      title="Privacy Policy"
      intro="This policy explains what information the Jamie James website collects through its inquiry form, how it is used and who can see it."
      sections={sections}
      contactNote="Have a privacy-related question? Use the inquiry form to reach out."
    />
  );
}
