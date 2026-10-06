import Reveal from "@/components/Reveal";
import { FAQ } from "@/lib/content";

export default function StoryFaq() {
  return (
    <>
      <section id="about" className="bg-white px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              Our story
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-2xl leading-snug text-neutral-600 md:text-3xl">
              AURA started with a simple frustration: coffee that goes cold
              before you can finish it. We built a mug that keeps it warm at
              the exact temperature you choose, wherever the day takes you.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 pb-24 md:pb-36">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="mb-10 text-3xl font-medium tracking-tight text-neutral-950 md:text-5xl">
              Good to know
            </h2>
          </Reveal>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {FAQ.map((item) => (
              <details key={item.id} id={item.id} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-neutral-950">
                  {item.q}
                  <span className="text-2xl text-neutral-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-500">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
