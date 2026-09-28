"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#funnel-samples", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-border bg-bgdark/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-white">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="text-gray-300 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-surface-border px-6 py-4 text-sm font-medium text-gray-300 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded px-2 py-2 transition hover:bg-surface hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
