import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-surface-border bg-bgdark py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-semibold text-white">Let&apos;s work together</h2>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="w-full max-w-xs break-all rounded-full border border-surface-border bg-surface px-5 py-3 text-sm text-gray-200 transition hover:border-accent hover:text-accent sm:w-auto"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phoneHref}`}
            className="w-full max-w-xs rounded-full border border-surface-border bg-surface px-5 py-3 text-sm text-gray-200 transition hover:border-accent hover:text-accent sm:w-auto"
          >
            {profile.phone}
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
