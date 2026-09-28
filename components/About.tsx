import { profile } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl bg-bgdark px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">About</h2>
      <div className="mt-4 space-y-4">
        {profile.bioParagraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-gray-400">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
