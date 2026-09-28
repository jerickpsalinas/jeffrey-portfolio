import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-surface-border bg-bgdark py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-semibold text-white">Let&apos;s work together</h2>
        <p className="mt-3 text-gray-400">
          Reach out at{" "}
          <a href={`mailto:${profile.email}`} className="text-accent underline">
            {profile.email}
          </a>
        </p>
        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
