// PLACEHOLDER CONTENT — replace with real profile details from
// https://www.onlinejobs.ph/jobseekers/info/5127117 when available.

export const profile = {
  name: "Jeffrey",
  title: "Funnel & Marketing Specialist",
  tagline: "I build high-converting sales funnels that turn clicks into customers.",
  bio:
    "Placeholder bio — replace with Jeffrey's real summary. Experienced funnel builder " +
    "and digital marketer helping businesses design, launch, and optimize sales funnels " +
    "that drive leads and revenue. Skilled in funnel strategy, landing page design, " +
    "email automation, and conversion rate optimization.",
  email: "jeffrey@example.com",
  location: "Philippines",
};

export const skills: string[] = [
  "Sales Funnel Design",
  "Landing Page Optimization",
  "ClickFunnels / GoHighLevel",
  "Email Marketing Automation",
  "Copywriting",
  "Conversion Rate Optimization (CRO)",
  "Facebook & Google Ads",
  "A/B Testing",
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Funnel Builder",
    company: "Placeholder Company",
    period: "2022 — Present",
    description:
      "Designed and launched sales funnels for multiple clients, improving lead conversion rates.",
  },
  {
    role: "Digital Marketing Specialist",
    company: "Placeholder Agency",
    period: "2020 — 2022",
    description:
      "Managed ad campaigns and email sequences supporting funnel performance.",
  },
];

export type FunnelSample = {
  title: string;
  image: string;
  description: string;
};

// Add new samples here once images are uploaded to /public/funnel-samples/
export const funnelSamples: FunnelSample[] = [
  {
    title: "Sample Funnel 1",
    image: "/funnel-samples/placeholder-1.png",
    description: "Placeholder description — replace with real sample details.",
  },
  {
    title: "Sample Funnel 2",
    image: "/funnel-samples/placeholder-2.png",
    description: "Placeholder description — replace with real sample details.",
  },
  {
    title: "Sample Funnel 3",
    image: "/funnel-samples/placeholder-3.png",
    description: "Placeholder description — replace with real sample details.",
  },
];
