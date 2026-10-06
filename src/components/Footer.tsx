import Image from "next/image";
import { BRAND, IMG } from "@/lib/content";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Products", href: "#products" },
      { label: "Technology", href: "#technology" },
      { label: "Gallery", href: "#gallery" },
      { label: "Accessories", href: "#accessories" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Reserve", href: "#reserve" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Shipping", href: "#shipping" },
      { label: "Returns", href: "#returns" },
      { label: "Warranty", href: "#warranty" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src={IMG.footerBanner}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white" />
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-12 border-t border-neutral-200 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-10">
        <div>
          <p className="text-xl font-medium tracking-tight text-neutral-950">{BRAND}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
            Smart heated mugs engineered for every day. Precise temperature,
            app control and a body built to last.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-medium text-neutral-950">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="border-t border-neutral-200 px-6 py-6 text-center text-xs text-neutral-400">
        © 2026 {BRAND}. Concept product for demonstration purposes.
      </p>
    </footer>
  );
}
