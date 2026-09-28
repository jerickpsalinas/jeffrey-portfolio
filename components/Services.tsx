import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-semibold text-white">Services</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-surface-border bg-bgdark p-5"
            >
              <h3 className="font-medium text-accent">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
