import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-20 bg-surface px-6 py-12 sm:py-16">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>
      <div className="mt-6 space-y-8">
        {experience.map((item) => (
          <div key={`${item.role}-${item.company}`} className="border-l-2 border-accent pl-4">
            <h3 className="font-medium text-white">{item.role}</h3>
            <p className="text-sm text-gray-500">
              {item.company} · {item.period}
            </p>
            <p className="mt-2 text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
