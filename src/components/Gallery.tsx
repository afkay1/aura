"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollFrame from "@/components/ScrollFrame";
import Reveal from "@/components/Reveal";
import { IMG } from "@/lib/content";

function Strip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-42%"]);

  return (
    <div ref={ref} className="overflow-hidden py-6">
      <motion.div style={{ x }} className="flex w-max gap-4 px-4">
        {IMG.strip.map((src) => (
          <div
            key={src}
            className="relative aspect-[16/10] w-[72vw] overflow-hidden rounded-3xl md:w-[38vw]"
          >
            <Image src={src} alt="" fill sizes="(min-width: 768px) 38vw, 72vw" className="object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  return (
    <>
      <ScrollFrame
        id="gallery"
        dark
        main={IMG.galleryMain}
        mainAlt="Person wrapped in a blanket holding an AURA mug on a misty mountain terrace"
        left={IMG.galleryLeft}
        right={IMG.galleryRight}
      />

      <section className="bg-white px-6 py-28 md:py-44">
        <Reveal>
          <p className="mx-auto max-w-5xl text-3xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl">
            Technology meets everyday life. AURA pairs precise temperature
            control with a rugged steel body, so your drink stays right where
            you left it, from the desk to the desert.
          </p>
        </Reveal>
      </section>

      <section className="bg-white pb-28 md:pb-40">
        <Strip />
      </section>
    </>
  );
}
