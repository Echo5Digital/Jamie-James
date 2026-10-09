// Public content model: Service, Category, Display Theme (+ Topic in ./topics).
// Display themes group related topics for navigation; they are NOT 40 new
// courses or 40 pages. Wording is draft copy pending Jamie's approval.

import { PHOTOS } from "./site";
import {
  TOPICS_BY_ID,
  type ConsultingGroupSlug,
  type TrainingCategorySlug,
} from "./topics";

export type IconName =
  | "briefcase"
  | "heart-pulse"
  | "baby"
  | "home"
  | "school"
  | "church"
  | "sprout"
  | "stethoscope";

export interface Faq {
  question: string;
  answer: string;
}

export interface DisplayTheme {
  id: string;
  category: TrainingCategorySlug;
  label: string;
  description: string;
  topicIds: string[];
  faithIntegrated?: boolean;
}

export interface TrainingCategory {
  slug: TrainingCategorySlug;
  label: string;
  icon: IconName;
  // Plan page 2 vs page 3 grouping of the public training menu.
  group: "organizations-families" | "schools-professional";
  tagline: string;
  intro: string;
  audience: string;
  faithIntegrated?: boolean;
  extraFaqs?: Faq[];
  // Optional real proof for this audience. Omitted until supplied.
  proof?: { photo: keyof typeof PHOTOS; heading: string };
}

export interface ConsultingGroup {
  slug: ConsultingGroupSlug;
  title: string;
  description: string;
  offerings: string[];
}

export const SERVICES = [
  {
    slug: "speaking",
    label: "Speaking Engagements",
    href: "/speaking",
    summary:
      "A speaking engagement for an event, conference or retreat; specific formats and availability require Jamie’s confirmation.",
  },
  {
    slug: "training",
    label: "Training & Workshops",
    href: "/training",
    summary:
      "Practical education tailored to an audience, organized into eight categories.",
  },
  {
    slug: "consulting",
    label: "Organizational Consulting",
    href: "/consulting",
    summary:
      "Support with leadership, organizational development, programs and staff wellness.",
  },
] as const;

export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    slug: "leadership-workplace-wellness",
    label: "Leadership & Workplace Wellness",
    icon: "briefcase",
    group: "organizations-families",
    tagline: "Stronger leaders. Healthier teams.",
    intro:
      "For leaders, managers, HR professionals and teams in organizations, nonprofits and human-services settings who want healthier, more resilient workplaces.",
    audience:
      "leaders, managers, HR professionals and teams across organizations, nonprofits and human-services settings",
  },
  {
    slug: "trauma-mental-health",
    label: "Trauma & Mental Health",
    icon: "heart-pulse",
    group: "organizations-families",
    tagline: "Understanding trauma. Supporting mental health.",
    intro:
      "For organizations, professionals and community groups that want to understand trauma, respond with care and support mental health.",
    audience:
      "organizations, professionals and community groups that want to understand trauma and support mental health",
  },
  {
    slug: "foster-care-adoption",
    label: "Foster Care, Adoption & Child Welfare",
    icon: "baby",
    group: "organizations-families",
    tagline: "Support for the people who care for children.",
    intro:
      "For foster and adoptive parents, caseworkers and child welfare teams supporting children, youth and families.",
    audience:
      "foster and adoptive parents, caseworkers and child welfare teams",
    proof: { photo: "training1", heading: "In the room" },
  },
  {
    slug: "parenting-family",
    label: "Parenting & Family",
    icon: "home",
    group: "organizations-families",
    tagline: "Understanding children. Strengthening families.",
    intro:
      "For parents, caregivers and family-serving organizations who want practical ways to support children and strengthen family relationships.",
    audience:
      "parents, caregivers and organizations that serve families",
  },
  {
    slug: "schools-youth-organizations",
    label: "Schools & Youth Organizations",
    icon: "school",
    group: "schools-professional",
    tagline: "Helping schools understand and support students.",
    intro:
      "For schools, educators and youth-serving organizations supporting students, school staff and at-risk youth.",
    audience:
      "schools, educators and youth-serving organizations",
  },
  {
    slug: "faith-ministry",
    label: "Faith & Ministry",
    icon: "church",
    group: "schools-professional",
    tagline: "Faith-integrated training for ministries and faith communities.",
    intro:
      "Faith-integrated training for pastors, ministry leaders, caregivers and faith communities. These sessions bring faith and mental health together, and they are labeled as faith-integrated so you know what to expect.",
    audience:
      "pastors, ministry leaders, caregivers and faith communities",
    faithIntegrated: true,
    extraFaqs: [
      {
        question: "Is this training faith-integrated?",
        answer:
          "Yes. Faith & Ministry is Jamie’s faith-integrated category, and faith-integrated themes are labeled on the site. Other categories are not labeled faith-integrated unless the page says so.",
      },
    ],
  },
  {
    slug: "community-personal-development",
    label: "Community & Personal Development",
    icon: "sprout",
    group: "schools-professional",
    tagline: "Practical tools for relationships and everyday wellbeing.",
    intro:
      "For community groups and individuals who want practical skills for communication, conflict, stress and self-care.",
    audience:
      "community groups and individuals",
  },
  {
    slug: "clinical-training",
    label: "Clinical Training",
    icon: "stethoscope",
    group: "schools-professional",
    tagline: "Training for therapists and clinical teams.",
    intro:
      "For therapists, counselors, clinical supervisors and behavioral health teams. Clinical Training covers trauma, assessment, child and family therapy, clinician wellness and ethical practice.",
    audience:
      "therapists, counselors, clinical supervisors and behavioral health teams",
    extraFaqs: [
      {
        question: "Is continuing education (CE) credit available?",
        answer:
          "CE credit details are not listed on this site. If your team needs CE credit, say so in your inquiry and ask what can be confirmed before you plan around it.",
      },
    ],
  },
];

const T = (
  id: string,
  category: TrainingCategorySlug,
  label: string,
  description: string,
  topicIds: string[],
  faithIntegrated = false
): DisplayTheme => ({ id, category, label, description, topicIds, faithIntegrated });

// 5 featured display themes per category = 40 public theme labels.
export const THEMES: DisplayTheme[] = [
  // ── Leadership & Workplace Wellness ──
  T("leadership-development", "leadership-workplace-wellness", "Leadership Development",
    "Practical skills and self-awareness for leaders at every level, from emotional intelligence to healthy boundaries and difficult conversations.",
    ["leadership-development", "emotional-intelligence-in-leadership", "self-aware-leadership", "healthy-boundaries-for-leaders", "difficult-conversations-for-leaders"]),
  T("burnout-compassion-fatigue", "leadership-workplace-wellness", "Burnout & Compassion Fatigue",
    "Separate sessions on burnout, compassion fatigue and secondary traumatic stress, with strategies for individuals and teams.",
    ["burnout-prevention-recovery", "compassion-fatigue-prevention", "secondary-traumatic-stress", "managing-high-stress-teams", "preventing-staff-turnover-through-healthy-leadership"]),
  T("healthy-workplace-culture", "leadership-workplace-wellness", "Healthy Workplace Culture",
    "Psychological safety, trust and wellness planning that support both people and the organization.",
    ["psychological-safety-in-the-workplace", "creating-healthy-workplace-culture", "building-trust-within-organizations", "employee-mental-health-wellness", "organizational-wellness-planning"]),
  T("team-communication-conflict-resolution", "leadership-workplace-wellness", "Team Communication & Conflict Resolution",
    "Tools for clearer communication, stronger collaboration and working through workplace conflict.",
    ["team-communication-collaboration", "workplace-conflict-resolution"]),
  T("leading-through-change-crisis", "leadership-workplace-wellness", "Leading Through Change & Crisis",
    "Guidance for leaders and teams navigating organizational change and crisis, and building resilience along the way.",
    ["leadership-during-organizational-change", "supporting-teams-through-crisis", "building-organizational-resilience"]),

  // ── Trauma & Mental Health ──
  T("trauma-informed-care", "trauma-mental-health", "Trauma-Informed Care",
    "Core principles of trauma-informed practice, including childhood and complex trauma and the path to recovery.",
    ["trauma-informed-care", "childhood-trauma", "childhood-experiences-and-their-effects", "complex-trauma", "trauma-recovery"]),
  T("understanding-trauma-behavior", "trauma-mental-health", "Understanding Trauma & Behavior",
    "How trauma shows up in triggers and behavioral responses, and how to read behavior with understanding.",
    ["trauma-triggers-behavioral-responses", "understanding-human-behavior"]),
  T("emotional-regulation-resilience", "trauma-mental-health", "Emotional Regulation & Resilience",
    "Building emotional regulation, coping skills, healthy boundaries and resilience.",
    ["emotional-regulation", "building-emotional-resilience", "coping-skills-stress-management", "healthy-boundaries"]),
  T("mental-health-awareness-support", "trauma-mental-health", "Mental Health Awareness & Support",
    "Recognizing warning signs and supporting people experiencing anxiety, depression or crisis.",
    ["recognizing-mental-health-warning-signs", "anxiety-across-the-lifespan", "depression-recognition-support", "crisis-intervention"]),
  T("grief-loss-recovery", "trauma-mental-health", "Grief, Loss & Recovery",
    "Understanding grief and loss, and the self-worth and healing work that can follow.",
    ["grief-loss", "self-worth-identity", "shame-healing"]),

  // ── Foster Care, Adoption & Child Welfare ──
  T("trauma-informed-foster-care", "foster-care-adoption", "Trauma-Informed Foster Care",
    "Trauma-informed training for foster parents and the families who support them.",
    ["trauma-informed-foster-care", "foster-parent-training", "building-resilience-in-foster-families"]),
  T("attachment-healthy-connections", "foster-care-adoption", "Attachment & Healthy Connections",
    "Building attachment, relationships and lasting connections for children in care.",
    ["attachment-relationship-building", "permanency-healthy-connections"]),
  T("understanding-behaviors-foster-children", "foster-care-adoption", "Understanding Behaviors in Foster Children",
    "Making sense of behavior in foster children, including children with high needs.",
    ["understanding-behaviors-in-foster-children", "working-with-high-needs-children"]),
  T("supporting-youth-families", "foster-care-adoption", "Supporting Youth & Families",
    "Supporting youth in care and the biological families connected to them.",
    ["supporting-youth-in-care", "supporting-biological-families"]),
  T("child-welfare-best-practices", "foster-care-adoption", "Child Welfare Best Practices",
    "Best practices for professionals working in child welfare.",
    ["child-welfare-best-practices"]),

  // ── Parenting & Family ──
  T("parenting-through-developmental-stages", "parenting-family", "Parenting Through Developmental Stages",
    "What to expect and how to respond as children grow, grounded in child development.",
    ["parenting-through-developmental-stages", "child-development"]),
  T("trauma-informed-parenting", "parenting-family", "Trauma-Informed Parenting",
    "Parenting approaches that account for trauma, including parenting through anxiety and stress.",
    ["trauma-informed-parenting", "parenting-through-anxiety-stress"]),
  T("parent-child-relationships-communication", "parenting-family", "Parent-Child Relationships & Communication",
    "Strengthening connection and communication between parents and children.",
    ["building-strong-parent-child-relationships", "healthy-family-communication"]),
  T("emotional-coaching-resilience", "parenting-family", "Emotional Coaching & Resilience",
    "Helping children name their feelings and build resilience.",
    ["emotional-coaching-for-children", "raising-resilient-children"]),
  T("youth-identity-positive-adult-influence", "parenting-family", "Youth Identity & Positive Adult Influence",
    "Supporting identity development in youth through mentorship and positive adult influence.",
    ["identity-development-in-youth", "mentorship-positive-adult-influence"]),

  // ── Schools & Youth Organizations ──
  T("trauma-informed-schools", "schools-youth-organizations", "Trauma-Informed Schools",
    "Trauma-informed approaches for schools, including supporting students with trauma.",
    ["trauma-informed-schools", "supporting-students-with-trauma"]),
  T("understanding-student-behavior", "schools-youth-organizations", "Understanding Student Behavior",
    "Interpreting student behavior with insight so staff can respond effectively.",
    ["understanding-student-behavior"]),
  T("student-mental-health-emotional-regulation", "schools-youth-organizations", "Student Mental Health & Emotional Regulation",
    "Mental health awareness for educators and emotional regulation skills for students.",
    ["mental-health-awareness-for-educators", "emotional-regulation-in-students"]),
  T("educator-wellness-compassion-fatigue", "schools-youth-organizations", "Educator Wellness & Compassion Fatigue",
    "Recognizing and addressing compassion fatigue among school staff.",
    ["compassion-fatigue-for-school-staff"]),
  T("supporting-at-risk-youth-student-resilience", "schools-youth-organizations", "Supporting At-Risk Youth & Student Resilience",
    "Supporting at-risk youth and building student resilience.",
    ["supporting-at-risk-youth", "building-student-resilience"]),

  // ── Faith & Ministry ──
  T("mental-health-faith", "faith-ministry", "Mental Health & Faith",
    "Bringing mental health and faith together, including healing from brokenness and resilience through faith.",
    ["mental-health-faith-integration", "healing-from-brokenness", "resilience-through-faith"], true),
  T("trauma-informed-ministry", "faith-ministry", "Trauma-Informed Ministry",
    "Trauma-informed care in ministry settings, including walking alongside people in crisis.",
    ["trauma-informed-ministry", "walking-alongside-people-in-crisis"], true),
  T("caregiver-ministry-wellness", "faith-ministry", "Caregiver & Ministry Wellness",
    "Compassion fatigue, emotional health and caring for those who care for others.",
    ["compassion-fatigue-in-ministry", "emotional-health-in-ministry", "caring-for-those-who-care-for-others"], true),
  T("biblical-leadership-identity", "faith-ministry", "Biblical Leadership & Identity",
    "Leadership and identity grounded in a biblical perspective.",
    ["biblical-leadership", "identity-in-christ"], true),
  T("faith-based-parenting-family-support", "faith-ministry", "Faith-Based Parenting & Family Support",
    "Parenting and family support from a faith perspective.",
    ["culture-vs-kingdom-parenting"], true),

  // ── Community & Personal Development ──
  T("communication-healthy-relationships", "community-personal-development", "Communication & Healthy Relationships",
    "Communication skills and building healthy relationships.",
    ["communication-skills", "building-healthy-relationships"]),
  T("conflict-resolution", "community-personal-development", "Conflict Resolution",
    "Practical approaches to resolving conflict.",
    ["conflict-resolution"]),
  T("stress-management-resilience", "community-personal-development", "Stress Management & Resilience",
    "Coping skills for stress and building emotional resilience.",
    ["coping-skills-stress-management", "building-emotional-resilience"]),
  T("self-care-healthy-boundaries", "community-personal-development", "Self-Care & Healthy Boundaries",
    "Self-care that works, professional wellness and healthy boundaries.",
    ["self-care-that-works", "professional-wellness", "healthy-boundaries"]),
  T("mental-health-awareness-emotional-intelligence", "community-personal-development", "Mental Health Awareness & Emotional Intelligence",
    "Community mental health awareness and emotional intelligence.",
    ["community-mental-health-awareness", "emotional-intelligence"]),

  // ── Clinical Training ──
  T("trauma-clinical-practice", "clinical-training", "Trauma & Clinical Practice",
    "Trauma-informed clinical practice, from neurobiology to case conceptualization across the lifespan.",
    ["trauma-informed-clinical-practice", "neurobiology-of-trauma", "complex-trauma-assessment-treatment", "trauma-informed-case-conceptualization", "trauma-across-the-lifespan"]),
  T("assessment-crisis-response-clinical-skills", "clinical-training", "Assessment, Crisis Response & Clinical Skills",
    "Assessment, crisis and suicide risk response, treatment planning and core clinical skills.",
    ["clinical-assessment-case-formulation", "crisis-assessment-intervention", "suicide-risk-assessment-safety-planning", "building-therapeutic-alliance", "working-with-high-conflict-clients", "strength-based-treatment-planning", "clinical-documentation-best-practices"]),
  T("child-family-therapy", "clinical-training", "Child & Family Therapy",
    "Clinical work with children, foster and adoptive families, attachment and family systems.",
    ["treating-childhood-trauma", "working-with-foster-adoptive-families", "attachment-based-interventions", "child-development-for-clinicians", "parent-coaching-strategies", "family-systems-trauma"]),
  T("clinician-wellness-leadership", "clinical-training", "Clinician Wellness & Leadership",
    "Preventing burnout and vicarious trauma, plus supervision and leadership for clinicians.",
    ["preventing-therapist-burnout", "compassion-fatigue-in-clinical-practice", "vicarious-trauma", "secondary-traumatic-stress", "therapist-self-care", "building-long-term-clinical-sustainability", "clinical-supervision-essentials", "developing-clinical-leaders", "leading-behavioral-health-teams", "building-healthy-clinical-culture", "communication-in-behavioral-health-organizations"]),
  T("faith-culture-ethical-practice", "clinical-training", "Faith, Culture & Ethical Practice",
    "Ethics, cultural considerations and ethically integrating faith into clinical practice.",
    ["ethics-professional-boundaries", "cultural-considerations-in-clinical-practice", "integrating-faith-into-counseling-ethically", "working-with-spiritually-diverse-clients", "spiritual-trauma-recovery", "understanding-religious-trauma", "faith-informed-clinical-care"], true),
];

export const CONSULTING_GROUPS: ConsultingGroup[] = [
  {
    slug: "organizational-workforce-development",
    title: "Organizational & Workforce Development",
    description:
      "Build capacity and create options for long-term success. Jamie partners with your leadership team to assess organizational structure, develop workforce strategies and strengthen team cohesion.",
    offerings: ["organizational-development", "workforce-development"],
  },
  {
    slug: "leadership-coaching-staff-wellness",
    title: "Leadership Coaching & Staff Wellness",
    description:
      "Support leaders and teams in building resilience, clarity and balance through individual coaching, group sessions and staff wellness strategy.",
    offerings: ["leadership-coaching", "staff-wellness-strategy", "nonprofit-human-services-leadership"],
  },
  {
    slug: "program-policy-practice-development",
    title: "Program, Policy & Practice Development",
    description:
      "Develop, refine or review programs, policies and practices so they align with your mission and serve the people you support.",
    offerings: ["program-development", "policy-practice-consultation"],
  },
  {
    slug: "trauma-informed-organizational-change",
    title: "Trauma-Informed Organizational Change",
    description:
      "Guide your organization through trauma-informed culture change, embedding trauma-informed principles into policies, practices and culture.",
    offerings: ["trauma-informed-organizational-transformation"],
  },
  {
    slug: "behavioral-health-foster-care-consultation",
    title: "Behavioral Health & Foster Care Consultation",
    description:
      "Consultation for agencies and organizations serving children, families and communities in behavioral health and foster care contexts.",
    offerings: ["behavioral-health-consultation", "foster-care-program-consultation"],
  },
];

// Homepage "selected themes" (plan: three to six). Each links to its category.
export const HOME_THEME_IDS = [
  "trauma-informed-care",
  "leadership-development",
  "burnout-compassion-fatigue",
  "trauma-informed-foster-care",
  "trauma-informed-schools",
];

// Speaking themes draw on existing display themes (one content record each).
export const SPEAKING_THEME_IDS = [
  "leadership-development",
  "burnout-compassion-fatigue",
  "trauma-informed-care",
  "mental-health-awareness-support",
  "leading-through-change-crisis",
  "trauma-informed-foster-care",
];

// ── helpers ──────────────────────────────────────────────────────────────

export const THEMES_BY_ID: Record<string, DisplayTheme> = Object.fromEntries(
  THEMES.map((t) => [t.id, t])
);

export function getCategory(slug: string): TrainingCategory | undefined {
  return TRAINING_CATEGORIES.find((c) => c.slug === slug);
}

export function themesFor(slug: TrainingCategorySlug): DisplayTheme[] {
  return THEMES.filter((t) => t.category === slug);
}

export function categoryLabel(slug: string): string | undefined {
  return (
    getCategory(slug)?.label ??
    CONSULTING_GROUPS.find((g) => g.slug === slug)?.title
  );
}

export function publishedTopics(theme: DisplayTheme) {
  return theme.topicIds
    .map((id) => TOPICS_BY_ID[id])
    .filter((t) => t && t.published);
}

export function bookHref(params: {
  service?: string;
  category?: string;
  theme?: string;
}) {
  const q = new URLSearchParams();
  if (params.service) q.set("service", params.service);
  if (params.category) q.set("category", params.category);
  if (params.theme) q.set("theme", params.theme);
  const s = q.toString();
  return s ? `/book?${s}` : "/book";
}

export function categoryFaqs(cat: TrainingCategory): Faq[] {
  const labels = themesFor(cat.slug).map((t) => t.label);
  const hasTopics = themesFor(cat.slug).some((t) => publishedTopics(t).length > 0);
  const list =
    labels.slice(0, -1).join(", ") + " and " + labels[labels.length - 1];
  return [
    {
      question: `Who is ${cat.label} training designed for?`,
      answer: `This category is designed for ${cat.audience}.`,
    },
    {
      question: `What themes are covered in ${cat.label}?`,
      answer: `The featured themes are ${list}.${
        hasTopics
          ? " Related topics within each theme are listed under “View all topics” on this page."
          : ""
      }`,
    },
    {
      question: "How do I request this training?",
      answer:
        "Use a “Request This Training” button on this page. It opens the inquiry form with this category, and the theme if you chose one, already selected. A request is not a confirmed booking; Jamie reviews it and follows up.",
    },
    {
      question: "Can the training be customized for our audience?",
      answer:
        "Yes. Describe your audience and goals in the inquiry form. Session length, formats and delivery options are confirmed with Jamie.",
    },
    ...(cat.extraFaqs ?? []),
  ];
}
