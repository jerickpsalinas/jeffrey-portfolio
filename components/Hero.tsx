import Image from "next/image";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="border-b border-surface-border bg-bgdark pt-16">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-16 sm:gap-12 sm:py-24 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Hello, Welcome
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            I&apos;m {profile.name}
          </h1>
          <p className="mt-3 text-xl text-accent">{profile.title}</p>
          <p className="mt-6 max-w-xl text-lg text-gray-400">{profile.tagline}</p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-medium text-bgdark transition hover:opacity-90"
          >
            Get in touch
          </a>
        </div>

        <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl bg-surface sm:h-72 sm:w-72">
          <Image
            src="/images/profile.jpg"
            alt={profile.name}
            fill
            sizes="(min-width: 640px) 18rem, 16rem"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
