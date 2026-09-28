import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
