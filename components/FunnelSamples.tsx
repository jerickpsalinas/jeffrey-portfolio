"use client";

import { useState } from "react";
import { funnelSamples } from "@/lib/content";

function SampleCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="flex aspect-video items-center justify-center bg-gray-100">
        {imgError ? (
          <span className="text-sm text-gray-400">Sample coming soon</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function FunnelSamples() {
  return (
    <section id="funnel-samples" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-semibold">Funnel Samples</h2>
        <p className="mt-2 text-gray-600">
          A collection of funnel work. Drop new images into{" "}
          <code className="rounded bg-gray-200 px-1 py-0.5 text-sm">
            public/funnel-samples/
          </code>{" "}
          and add an entry to <code className="rounded bg-gray-200 px-1 py-0.5 text-sm">lib/content.ts</code> to add more.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {funnelSamples.map((sample) => (
            <SampleCard key={sample.title} {...sample} />
          ))}
        </div>
      </div>
    </section>
  );
}
