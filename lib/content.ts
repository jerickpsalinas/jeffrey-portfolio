export const profile = {
  name: "Jeffrey De Vera Caudilla",
  shortName: "Jeffrey",
  title: "Funnel Builder",
  tagline: "I build and optimize high-converting funnels for Funnelish and Shopify e-commerce brands.",
  bioParagraphs: [
    "I'm a Funnel Builder specializing in Funnelish and Shopify e-commerce. I can build and customize sales funnels, advertorials, landing pages, product pages, checkout pages, order bumps, upsells, downsells, and thank-you pages. I'm also comfortable adapting existing funnel templates, recreating competitor funnels, and making sure pages are clean, responsive, and functional on both desktop and mobile.",
    "I'm detail-oriented and focused on creating a smooth customer journey from the landing page through checkout. I can also assist with Shopify store setup, product pages, apps and integrations, funnel testing, troubleshooting, and revisions based on client requirements. I'm comfortable following SOPs and learning new tools and workflows to help e-commerce businesses launch and improve their funnels.",
    "I'm looking for opportunities to work with e-commerce brands, agencies, and business owners who need a reliable Funnel Builder for ongoing funnel development and Shopify-related tasks. My goal is to become a dependable part of the team and consistently deliver clean, accurate, and conversion-focused work.",
  ],
  email: "caudillajeffrey081@gmail.com",
  phone: "+63 995 325 8097",
  phoneHref: "+639953258097",
  location: "Philippines",
};

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Funnel Building",
    description: "Sales funnels, advertorials, landing pages, and checkout flows built in Funnelish.",
  },
  {
    title: "Shopify Store Setup",
    description: "Product pages, apps, integrations, and store configuration for e-commerce brands.",
  },
  {
    title: "Upsells & Downsells",
    description: "Order bumps, upsells, downsells, and thank-you pages designed to maximize order value.",
  },
  {
    title: "Funnel Cloning & Templates",
    description: "Recreating competitor funnels and adapting existing templates to fit your brand.",
  },
  {
    title: "Testing & Troubleshooting",
    description: "Funnel QA across desktop and mobile, bug fixes, and revisions based on requirements.",
  },
  {
    title: "Ongoing Funnel Support",
    description: "Reliable, SOP-driven support for continuous funnel development and improvements.",
  },
];

export const skills: string[] = [
  "Funnelish",
  "Shopify Store Setup",
  "Sales Funnels & Advertorials",
  "Landing & Product Pages",
  "Checkout, Order Bumps & Upsells",
  "Funnel Template Cloning",
  "Shopify Apps & Integrations",
  "Funnel Testing & Troubleshooting",
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
};

// No verified work history yet — add real entries here when available.
export const experience: ExperienceEntry[] = [];

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
