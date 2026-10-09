// Internal master catalog: 129 unique topics (138 source entries consolidated).
// This is a CONTENT INVENTORY, not the public menu. The public menu is the 40
// display themes in lib/content.ts, which reference topic IDs.
//
// - `id` is stable: never rename it, only retitle.
// - `audiences` lists extra categories a shared topic is relevant to (one record,
//   many audiences). Secondary Traumatic Stress is tagged for clinicians.
// - `aliases` holds original source wording consolidated into this record.
// - `status` / `published` control what the public "View all topics" lists show.
//   Nothing here becomes public unless a display theme references it AND
//   `published` is true.

export type TrainingCategorySlug =
  | "leadership-workplace-wellness"
  | "trauma-mental-health"
  | "foster-care-adoption"
  | "parenting-family"
  | "schools-youth-organizations"
  | "faith-ministry"
  | "community-personal-development"
  | "clinical-training";

export type ConsultingGroupSlug =
  | "organizational-workforce-development"
  | "leadership-coaching-staff-wellness"
  | "program-policy-practice-development"
  | "trauma-informed-organizational-change"
  | "behavioral-health-foster-care-consultation";

export type TopicCategory = TrainingCategorySlug | "consulting";

export interface Topic {
  id: string;
  title: string;
  category: TopicCategory;
  audiences: TrainingCategorySlug[];
  aliases: string[];
  status: "pending" | "approved";
  published: boolean;
}

type Row = [id: string, title: string, extra?: Partial<Pick<Topic, "audiences" | "aliases" | "published">>];

function rows(category: TopicCategory, list: Row[]): Topic[] {
  return list.map(([id, title, extra]) => ({
    id,
    title,
    category,
    audiences: extra?.audiences ?? [],
    aliases: extra?.aliases ?? [],
    status: "pending" as const,
    // Held back until Jamie clarifies scope (see plan: "Inputs needed from Jamie").
    published: extra?.published ?? true,
  }));
}

export const TOPICS: Topic[] = [
  ...rows("leadership-workplace-wellness", [
    ["leadership-development", "Leadership Development"],
    ["compassion-fatigue-prevention", "Compassion Fatigue Prevention"],
    ["burnout-prevention-recovery", "Burnout Prevention & Recovery"],
    ["secondary-traumatic-stress", "Secondary Traumatic Stress", { audiences: ["clinical-training"] }],
    ["building-organizational-resilience", "Building Organizational Resilience"],
    ["psychological-safety-in-the-workplace", "Psychological Safety in the Workplace"],
    ["creating-healthy-workplace-culture", "Creating Healthy Workplace Culture"],
    ["difficult-conversations-for-leaders", "Difficult Conversations for Leaders"],
    ["leadership-during-organizational-change", "Leadership During Organizational Change"],
    ["team-communication-collaboration", "Team Communication & Collaboration"],
    ["employee-mental-health-wellness", "Employee Mental Health & Wellness"],
    ["preventing-staff-turnover-through-healthy-leadership", "Preventing Staff Turnover Through Healthy Leadership"],
    ["managing-high-stress-teams", "Managing High-Stress Teams"],
    ["workplace-conflict-resolution", "Workplace Conflict Resolution"],
    ["emotional-intelligence-in-leadership", "Emotional Intelligence in Leadership"],
    ["building-trust-within-organizations", "Building Trust Within Organizations"],
    ["self-aware-leadership", "Self-Aware Leadership"],
    ["supporting-teams-through-crisis", "Supporting Teams Through Crisis"],
    ["healthy-boundaries-for-leaders", "Healthy Boundaries for Leaders"],
    ["organizational-wellness-planning", "Organizational Wellness Planning"],
  ]),
  ...rows("trauma-mental-health", [
    ["trauma-informed-care", "Trauma-Informed Care"],
    ["trauma-triggers-behavioral-responses", "Trauma Triggers & Behavioral Responses"],
    // Held back: plan asks Jamie to clarify this title before it is published.
    ["childhood-experiences-and-their-effects", "Childhood Experiences and Their Effects", { published: false }],
    ["childhood-trauma", "Childhood Trauma"],
    ["complex-trauma", "Complex Trauma"],
    ["emotional-regulation", "Emotional Regulation"],
    ["anxiety-across-the-lifespan", "Anxiety Across the Lifespan"],
    ["depression-recognition-support", "Depression Recognition & Support"],
    ["grief-loss", "Grief & Loss"],
    ["crisis-intervention", "Crisis Intervention"],
    ["building-emotional-resilience", "Building Emotional Resilience", { audiences: ["community-personal-development"] }],
    ["coping-skills-stress-management", "Coping Skills & Stress Management", { audiences: ["community-personal-development"] }],
    ["recognizing-mental-health-warning-signs", "Recognizing Mental Health Warning Signs"],
    ["healthy-boundaries", "Healthy Boundaries", { audiences: ["community-personal-development"] }],
    ["self-worth-identity", "Self-Worth & Identity"],
    ["shame-healing", "Shame & Healing"],
    ["trauma-recovery", "Trauma Recovery"],
    ["understanding-human-behavior", "Understanding Human Behavior"],
  ]),
  ...rows("foster-care-adoption", [
    ["trauma-informed-foster-care", "Trauma-Informed Foster Care"],
    ["attachment-relationship-building", "Attachment & Relationship Building"],
    ["foster-parent-training", "Foster Parent Training"],
    ["supporting-biological-families", "Supporting Biological Families"],
    ["understanding-behaviors-in-foster-children", "Understanding Behaviors in Foster Children"],
    ["permanency-healthy-connections", "Permanency & Healthy Connections"],
    ["supporting-youth-in-care", "Supporting Youth in Care"],
    ["building-resilience-in-foster-families", "Building Resilience in Foster Families"],
    ["working-with-high-needs-children", "Working With High-Needs Children"],
    ["child-welfare-best-practices", "Child Welfare Best Practices"],
  ]),
  ...rows("parenting-family", [
    ["trauma-informed-parenting", "Trauma-Informed Parenting"],
    ["parenting-through-developmental-stages", "Parenting Through Developmental Stages"],
    ["child-development", "Child Development"],
    ["building-strong-parent-child-relationships", "Building Strong Parent-Child Relationships"],
    ["emotional-coaching-for-children", "Emotional Coaching for Children"],
    ["raising-resilient-children", "Raising Resilient Children"],
    ["healthy-family-communication", "Healthy Family Communication"],
    ["parenting-through-anxiety-stress", "Parenting Through Anxiety & Stress"],
    ["identity-development-in-youth", "Identity Development in Youth"],
    ["mentorship-positive-adult-influence", "Mentorship & Positive Adult Influence"],
  ]),
  ...rows("schools-youth-organizations", [
    ["trauma-informed-schools", "Trauma-Informed Schools"],
    ["understanding-student-behavior", "Understanding Student Behavior"],
    ["supporting-students-with-trauma", "Supporting Students with Trauma"],
    ["mental-health-awareness-for-educators", "Mental Health Awareness for Educators"],
    ["compassion-fatigue-for-school-staff", "Compassion Fatigue for School Staff"],
    ["building-student-resilience", "Building Student Resilience"],
    ["emotional-regulation-in-students", "Emotional Regulation in Students"],
    ["supporting-at-risk-youth", "Supporting At-Risk Youth"],
  ]),
  ...rows("faith-ministry", [
    // Held back: plan asks Jamie to clarify the intended scope of faith-based parenting.
    ["culture-vs-kingdom-parenting", "Culture vs. Kingdom Parenting", { published: false }],
    ["mental-health-faith-integration", "Mental Health & Faith Integration"],
    ["trauma-informed-ministry", "Trauma-Informed Ministry"],
    ["compassion-fatigue-in-ministry", "Compassion Fatigue in Ministry"],
    ["caring-for-those-who-care-for-others", "Caring for Those Who Care for Others"],
    ["identity-in-christ", "Identity in Christ"],
    ["healing-from-brokenness", "Healing From Brokenness"],
    ["resilience-through-faith", "Resilience Through Faith"],
    ["emotional-health-in-ministry", "Emotional Health in Ministry"],
    ["biblical-leadership", "Biblical Leadership"],
    ["walking-alongside-people-in-crisis", "Walking Alongside People in Crisis"],
  ]),
  ...rows("community-personal-development", [
    ["building-healthy-relationships", "Building Healthy Relationships"],
    ["communication-skills", "Communication Skills"],
    ["conflict-resolution", "Conflict Resolution"],
    ["self-care-that-works", "Self-Care That Works"],
    ["professional-wellness", "Professional Wellness"],
    ["emotional-intelligence", "Emotional Intelligence"],
    ["community-mental-health-awareness", "Community Mental Health Awareness"],
  ]),
  ...rows("clinical-training", [
    // Clinical: Trauma
    ["trauma-informed-clinical-practice", "Trauma-Informed Clinical Practice"],
    ["neurobiology-of-trauma", "Neurobiology of Trauma"],
    ["complex-trauma-assessment-treatment", "Complex Trauma Assessment & Treatment"],
    ["trauma-informed-case-conceptualization", "Trauma-Informed Case Conceptualization"],
    ["trauma-across-the-lifespan", "Trauma Across the Lifespan"],
    // Clinical: Clinical Skills
    ["building-therapeutic-alliance", "Building Therapeutic Alliance"],
    ["clinical-assessment-case-formulation", "Clinical Assessment & Case Formulation"],
    ["working-with-high-conflict-clients", "Working With High-Conflict Clients"],
    ["crisis-assessment-intervention", "Crisis Assessment & Intervention"],
    ["suicide-risk-assessment-safety-planning", "Suicide Risk Assessment & Safety Planning"],
    ["clinical-documentation-best-practices", "Clinical Documentation Best Practices"],
    ["ethics-professional-boundaries", "Ethics & Professional Boundaries"],
    ["cultural-considerations-in-clinical-practice", "Cultural Considerations in Clinical Practice"],
    ["strength-based-treatment-planning", "Strength-Based Treatment Planning"],
    // Clinical: Child & Family Therapy
    ["treating-childhood-trauma", "Treating Childhood Trauma"],
    ["working-with-foster-adoptive-families", "Working With Foster & Adoptive Families"],
    ["attachment-based-interventions", "Attachment-Based Interventions"],
    ["child-development-for-clinicians", "Child Development for Clinicians"],
    ["parent-coaching-strategies", "Parent Coaching Strategies"],
    ["family-systems-trauma", "Family Systems & Trauma"],
    // Clinical: Professional Wellness
    ["preventing-therapist-burnout", "Preventing Therapist Burnout"],
    ["compassion-fatigue-in-clinical-practice", "Compassion Fatigue in Clinical Practice"],
    ["vicarious-trauma", "Vicarious Trauma"],
    ["therapist-self-care", "Therapist Self-Care"],
    ["building-long-term-clinical-sustainability", "Building Long-Term Clinical Sustainability"],
    // Clinical: Leadership for Clinicians
    ["clinical-supervision-essentials", "Clinical Supervision Essentials"],
    ["developing-clinical-leaders", "Developing Clinical Leaders"],
    ["leading-behavioral-health-teams", "Leading Behavioral Health Teams"],
    ["building-healthy-clinical-culture", "Building Healthy Clinical Culture"],
    ["communication-in-behavioral-health-organizations", "Communication in Behavioral Health Organizations"],
    // Clinical: Faith & Clinical Practice
    ["integrating-faith-into-counseling-ethically", "Integrating Faith Into Counseling Ethically"],
    ["working-with-spiritually-diverse-clients", "Working With Spiritually Diverse Clients"],
    ["spiritual-trauma-recovery", "Spiritual Trauma & Recovery"],
    ["understanding-religious-trauma", "Understanding Religious Trauma"],
    ["faith-informed-clinical-care", "Faith-Informed Clinical Care"],
  ]),
  ...rows("consulting", [
    ["organizational-development", "Organizational Development"],
    ["program-development", "Program Development"],
    ["trauma-informed-organizational-transformation", "Trauma-Informed Organizational Transformation"],
    ["leadership-coaching", "Leadership Coaching"],
    ["staff-wellness-strategy", "Staff Wellness Strategy"],
    ["behavioral-health-consultation", "Behavioral Health Consultation"],
    ["foster-care-program-consultation", "Foster Care Program Consultation"],
    ["nonprofit-human-services-leadership", "Nonprofit & Human Services Leadership"],
    ["policy-practice-consultation", "Policy & Practice Consultation"],
    ["workforce-development", "Workforce Development"],
  ]),
];

export const TOPICS_BY_ID: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t])
);
