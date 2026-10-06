import ScrollFrame from "@/components/ScrollFrame";
import Reveal from "@/components/Reveal";
import { BRAND, IMG, TAGLINE } from "@/lib/content";

export default function Hero() {
  return (
    <>
      <ScrollFrame
        id="top"
        main={IMG.heroMain}
        mainAlt="AURA mug resting on a rock at a desert camp at sunrise"
        left={IMG.heroLeft}
        right={IMG.heroRight}
        wordmark={BRAND}
      />
      <section className="bg-white px-6 pb-24 pt-8 text-center md:pb-40">
        <Reveal>
          <p className="mx-auto max-w-3xl text-4xl font-normal leading-tight tracking-tight text-neutral-500 md:text-6xl">
            {TAGLINE}
          </p>
        </Reveal>
      </section>
    </>
  );
}
