export interface ProjectMeta {
  role: string[];
  deliverables: string[];
  collaborators: string[];
  year: string;
}

export interface InsightItem {
  title: string;
  body: string;
}

export interface FeaturePoint {
  label: string;
  body: string;
}

export interface SolutionFeature {
  number: string;
  title: string;
  points: FeaturePoint[];
  image?: string;
}

export interface LearningPoint {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  tagline: string;
  coverImage: string;
  tabs: string[];
  meta: ProjectMeta;
  assignment: {
    heading: string;
    body: string[];
  };
  challenge: {
    heading: string;
    body: string[];
    bullets: string[];
    image?: string;
  };
  research: {
    heading: string;
    insights: InsightItem[];
  };
  solution: {
    heading: string;
    intro: string;
    features: SolutionFeature[];
  };
  learnings: {
    heading: string;
    points: LearningPoint[];
  };
  closingImage: string;
  nextProjectSlug: string;
}

const PLACEHOLDER_IMG = "/images/placeholder-cover.png";

export const projects: Project[] = [
  {
    slug: "getvax",
    title: "GetVax",
    year: "2026",
    tagline: "Crafting An Innovative All in One Healthcare Experience",
    coverImage: "/images/lafy.png",
    tabs: [
      "Web App",
      "Mobile App",
      "Admin Dashboard",
      "Website",
      "Product Workshop",
      "Design System",
    ],
    meta: {
      role: [
        "Problem Research",
        "Prototype",
        "Visual Design",
        "Interaction Design",
      ],
      deliverables: [
        "High Fidelity Design",
        "Component Library",
        "User Research",
      ],
      collaborators: ["Node Eight Venture Studio"],
      year: "2026",
    },
    assignment: {
      heading: "The Assignment",
      body: [
        "When Node Eight's leadership approached me in early 2026, they had a clear mandate: understand why vaccine drop-offs were so high in Ghana and design a solution that health systems could actually use. As part of the Eight Fellowship, I was assigned to lead research and product definition for what would become GetVax — not just a reminder system, but a complete adherence companion that would sit between health workers and families throughout a child's full vaccination journey.",
        "More than just automating follow-ups, the challenge was understanding the actual barriers families face when completing immunization schedules. I had to conduct extensive research into the complexities of cross-facility vaccine coordination — through field interviews at three health facilities, conversations with nurses and vaccine recipients, and analysis of how health systems currently track vaccination progress.",
        "My research revealed something critical: the scattered nature of vaccination follow-up efforts across Ghana, often reliant on manual phone calls, paper cards, and informal communication channels like WhatsApp. But more importantly, it revealed that the problem wasn't access to vaccines or lack of caregiver intent. It was systemic — a failure to maintain contact with families between visits.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      body: ["Over half of Ghanaian children never complete their full vaccination schedule despite vaccines being available, funded, and waiting at clinics. Health systems fail not on access — they fail on adherence.",
      "When mothers begin their child's immunization journey, intent is high. But the system has no mechanism to reach them between visits. Health records stay facility-bound. Reminders depend on whether a nurse has time. When a mother moves to a different clinic, her child's vaccination history disappears. The consequence is missed doses, wasted vaccine supply, and millions of children left unprotected.", ],
      bullets: [
        "No visibility into who has dropped out",
        "Limited follow-up capacity",
        "Low caregiver engagement",
      ],
      image: PLACEHOLDER_IMG,
    },
    research: {
      heading: "Research & Insight",
      insights: [
        {
          title: "Forgetfulness is real and systemic:",
          body: "Every single participant mentioned forgetting appointment dates. But the root cause isn't bad memory. It's the absence of reliable reminder infrastructure. Health workers still use a foolscap notebook to record patient details. Another facility does not call or text recipients at all.",
        },
        {
          title: "Misinformation exists but is secondary to system gaps:",
          body: "Mothers heard rumors about vaccines, but rumors only became barriers when there was no trusted voice to counter them. The nurses and health workers — the people mothers trust — were too overwhelmed to provide education or follow-up.",
        },
        {
          title: "Fear of side effects was mentioned frequently, but not as a reason to abandon vaccines:",
          body: "Mothers move between facilities for work, family, or geographic reasons. But vaccination records stay behind. A new clinic cannot see what doses a child has already received. The system forces duplication or abandonment.",
        },
        {
          title: "Cross-facility continuity was a critical gap:",
          body: "Mothers move between facilities for work, family, or geographic reasons. But vaccination records stay behind. A new clinic cannot see what doses a child has already received. The system forces duplication or abandonment.",
        },
      ],
    },
    solution: {
      heading: "The Solution",
      intro:
        "GetVax was envisioned as a one-stop platform that tackled each user pain point step by step. Below is a breakdown of the core features I designed, informed by research into user behavior and best practices from related industries.",
      features: [
        {
          number: "1",
          title: "Real-Time Programme Visibility",
          image: "/Dashboard.png",
          points: [
            {
              label: "Active Patients Overview:",
              body: "See all babies currently enrolled in Lafyai at your facility. Track new enrollments daily and monitor total active caseload. At a glance, know how many children are currently in your care and where they are in their vaccination journey.",
            },
            {
              label: "Completion Rate Tracking:",
              body: "Monitor your facility's vaccination schedule completion rate in real time. See trends over time — are completion rates improving? Which vaccines have the highest drop-off? Identify patterns that inform your follow-up strategy.",
            },
            {
              label: "Appointment & Follow-Up Status:",
              body: "Know exactly how many appointments are scheduled this week, how many are overdue, and which children need immediate attention. Reduce administrative overhead by letting the system surface priorities.",
            },
            {
              label: "Adverse Events Monitoring:",
              body: "Get instant alerts when parents report side effects. See at a glance how many cases need follow-up, how many have been reviewed, and which require escalation. Safety issues surface before they become crises.",
            },
          ],
        },
        {
          number: "2",
          title: "Register: Patient Enrollment & Care Initiation",
          image: "/Register.png",
          points: [
            {
              label: "60-Second Registration Workflow:",
              body: "Add a new child to Lafyai in under a minute. Capture only what matters: parent phone number, preferred language, vaccine type, and next due date. No friction. Registration complete.",
            },
            {
              label: "Alternative Contact Enrollment:",
              body: "Enroll a spouse, parent, or family member to receive reminder support in parallel. Activate existing care networks without creating new burdens. One tap per alternative contact.",
            },
            {
              label: "Preferred Language Selection:",
              body: "Set the language for all future reminders and communications. Supports English, Twi, and expanding language options. Ensure messages land in the language families actually speak.",
            },
            {
              label: "Vaccine Type & Schedule Alignment:",
              body: "Select the vaccine type and automatically align with Ghana's immunisation schedule. The system knows when the next dose is due. Registration complete—automation begins immediately.",
            },
          ],
        },
        {
          number: "3",
          title: "Family & Child Records Management",
          image: "/Patients.png",
          points: [
            {
              label: "Complete Patient History:",
              body: "Access a child's full vaccination record—every dose taken, every date, every facility where doses were given. See cross-facility vaccination history in one place. No paper cards. No lost records.",
            },
            {
              label: "Family Contact Management:",
              body: "View all enrolled contacts for each child. See who is receiving reminders—mother, father, grandmother, anyone who opted in. Update contacts if families change. Ensure reminders reach those who can act.",
            },
            {
              label: "Overdue & At-Risk Flagging:",
              body: "The system automatically highlights which children are overdue for their next dose and which are at highest risk of dropping off. Prioritize your follow-up efforts on families most likely to need support.",
            },
            {
              label: "Side Effect & Health Incident Log:",
              body: "See detailed notes on any side effects reported after each dose. Track how families responded. Document follow-up conversations. Build a complete health picture for each child.",
            },
          ],
        },
        {
          number: "4",
          title: "Appointment Planning & Follow-Up Coordination",
          image: "/Appointment schedule.png",
          points: [
            {
              label: "Appointment Confirmation Status:",
              body: "See which families have confirmed their appointment through Lafyai's reminder sequence and which have not responded. Follow up proactively with non-responders before appointment day.",
            },
            {
              label: "No-Show Alerts:",
              body: "When a scheduled appointment time passes and the family does not arrive, get an instant alert. Reach out immediately while the barrier is fresh. Recover appointments before momentum is lost.",
            },
          ],
        },
        {
          number: "5",
          title: "Safety Monitoring & Serious Event Escalation",
          image: "/AEFI.png",
          points: [
            {
              label: "Side Effect Reporting & Monitoring:",
              body: "Parents report side effects through Lafyai. Fever, arm soreness, mild swelling—the system tracks what families are experiencing. You have real data on what reactions are happening across your population.",
            },
            {
              label: "Severity Assessment & Escalation:",
              body: "The system flags severe reactions automatically. High fever, unusual swelling, symptoms requiring urgent care—these escalate to you within 30 minutes. Do not wait for follow-up. Act immediately.",
            },
            {
              label: "Follow-Up Documentation:",
              body: "Document your follow-up conversation with the family. What did you advise? Did you refer them to hospital care? Did the family resume the schedule after follow-up? Build a complete safety record.",
            },
          ],
        },
        {
          number: "6",
          title: "Message Log",
          image: "/Message delivery log.png",
          points: [
            {
              label: "Complete Reminder History:",
              body: "See every reminder sent to every family—when it was sent, whether it was opened, whether the family responded. Understand which messages work and which do not. Identify families who never engage.",
            },
            {
              label: "Family Response Tracking:",
              body: "See which families respond to reminders, which confirm appointments, which ask questions. Engagement patterns reveal who needs extra support and who is on auto-pilot.",
            },
          ],
        },
      ],
    },
    learnings: {
      heading: "Personal Learnings",
      points: [
        {
          title: "Listening beats planning:",
          body: "We assumed we would build a mobile app. The field rejected it. Nurses don't have time for apps. Mothers don't download things they weren't already using. The WhatsApp solution emerged from paying attention to how families actually communicate, not from our strategy document.",
        },
        {
          title: "Infrastructure matters more than motivation:",
          body: "Every nurse cared deeply about completion. The gap wasn't willingness — it was capacity. Manual systems cannot scale. Change the infrastructure and behavior changes naturally.",
        },
        {
          title: "Timing is the mechanism:",
          body: "Information alone doesn't change behavior. A mother abandoned the schedule after her child had a mild fever. But when the health worker called 24 hours later and said \"this is normal,\" she came back. The right message at the right moment changes everything.",
        },
      ],
    },
    closingImage: "/images/Image01.avif",
    nextProjectSlug: "afya",
  },
  {
    slug: "afya",
    title: "Afya",
    year: "2026",
    tagline: "Healthcare platform for blood-pressure monitoring and hypertension management",
    coverImage: PLACEHOLDER_IMG,
    tabs: ["Mobile App", "Web Dashboard"],
    meta: {
      role: ["Product Design", "User Research", "Prototyping"],
      deliverables: ["Mobile App Design", "Web Dashboard", "Design System"],
      collaborators: ["TBD"],
      year: "2026",
    },
    assignment: { heading: "The Assignment", body: ["Coming soon..."] },
    challenge: {
      heading: "The Challenge",
      body: ["Coming soon..."],
      bullets: ["TBD"],
      image: PLACEHOLDER_IMG,
    },
    research: {
      heading: "Research & Insight",
      insights: [{ title: "TBD", body: "Coming soon..." }],
    },
    solution: {
      heading: "The Solution",
      intro: "Coming soon...",
      features: [
        {
          number: "1",
          title: "TBD",
          points: [{ label: "TBD", body: "Coming soon..." }],
        },
      ],
    },
    learnings: {
      heading: "Personal Learnings",
      points: [{ title: "TBD", body: "Coming soon..." }],
    },
    closingImage: PLACEHOLDER_IMG,
    nextProjectSlug: "getvax",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
