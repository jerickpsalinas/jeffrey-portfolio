import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-semibold">Let&apos;s work together</h2>
        <p className="mt-3 text-gray-600">
          Reach out at{" "}
          <a href={`mailto:${profile.email}`} className="text-accent underline">
            {profile.email}
          </a>
        </p>
        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
