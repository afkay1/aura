import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ACCESSORIES, SPECS } from "@/lib/content";

export default function Accessories() {
  return (
    <>
      <section id="accessories" className="bg-white px-5 pb-24 md:px-10 md:pb-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="mb-14 text-4xl font-medium tracking-tight text-neutral-950 md:text-6xl">
              Essential accessories
            </h2>
          </Reveal>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {ACCESSORIES.map((a, i) => (
              <Reveal key={a.name} delay={(i % 4) * 0.08}>
                <article>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">
                    <Image
                      src={a.img}
                      alt={a.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <h3 className="text-base font-medium text-neutral-950">{a.name}</h3>
                    <span className="text-lg font-medium text-neutral-950">${a.price}</span>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-neutral-500">{a.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-y-12 text-center md:grid-cols-4">
          {SPECS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">{s.label}</p>
              <p className="mt-3 text-4xl font-medium tracking-tight text-neutral-950 md:text-5xl">
                {s.value}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
