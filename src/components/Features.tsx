import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FEATURES } from "@/lib/content";

export default function Features() {
  return (
    <section id="technology" className="bg-white px-5 pb-28 md:px-10 md:pb-40">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="mb-14 max-w-3xl text-4xl font-medium tracking-tight text-neutral-950 md:text-6xl">
            Engineered for comfort.{" "}
            <span className="text-neutral-400">Designed for every day.</span>
          </h2>
        </Reveal>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.1}>
              <article>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">
                  <Image
                    src={f.img}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                  {f.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-neutral-950">
                  {f.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
