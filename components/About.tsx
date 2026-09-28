import { profile } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-4 leading-relaxed text-gray-600">{profile.bio}</p>
    </section>
  );
}
