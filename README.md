# Jeffrey Portfolio

A simple, single-page portfolio built with Next.js and Tailwind CSS, deployed on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating Content

All profile text (name, title, bio, skills, experience) lives in `lib/content.ts`.
It currently contains **placeholder content** — replace it with Jeffrey's real
profile details (from his onlinejobs.ph profile or elsewhere).

## Adding Funnel Samples

1. Drop your image files into `public/funnel-samples/` (e.g. `funnel-1.png`).
2. Add or edit an entry in the `funnelSamples` array in `lib/content.ts`:

```ts
{
  title: "My Funnel Name",
  image: "/funnel-samples/funnel-1.png",
  description: "A short description of this funnel.",
}
```

Cards for samples whose image file isn't present yet will show a
"Sample coming soon" placeholder instead of a broken image.

## Deploying to Vercel

Push this repository to GitHub and import it into [Vercel](https://vercel.com/new) —
no extra configuration is needed, Vercel auto-detects Next.js.
