"use client";

import { BRAND, NAV_LINKS } from "@/lib/content";

export default function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <nav
        aria-label="Main"
        className="pointer-events-auto flex w-full max-w-[960px] items-center justify-between rounded-full bg-white/70 px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      >
        <a href="#top" className="text-xl font-medium tracking-tight text-neutral-900">
          {BRAND}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#reserve"
          className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Buy the product
        </a>
      </nav>
    </header>
  );
}
