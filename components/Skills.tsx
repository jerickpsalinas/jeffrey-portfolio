import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-bgdark py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-semibold text-white">Skills</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-surface-border bg-surface px-4 py-2 text-sm text-gray-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
