import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="border-b border-surface-border bg-bgdark pt-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl text-accent">{profile.title}</p>
        <p className="mt-6 max-w-xl text-lg text-gray-400">{profile.tagline}</p>
        <a
          href="#contact"
          className="mt-8 rounded-full bg-accent px-6 py-3 font-medium text-bgdark transition hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
