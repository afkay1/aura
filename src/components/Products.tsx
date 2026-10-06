"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/lib/content";

export default function Products() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const headX = useTransform(scrollYProgress, [0, 0.7], ["0vw", "-35vw"]);
  const headOpacity = useTransform(scrollYProgress, [0.25, 0.7], [1, 0]);
  const leftX = useTransform(scrollYProgress, [0, 0.7], ["-60vw", "0vw"]);
  const rightX = useTransform(scrollYProgress, [0, 0.7], ["60vw", "0vw"]);

  const [steel, noir] = PRODUCTS;

  return (
    <>
      <section ref={ref} id="products" className="relative h-[260vh] bg-white">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.h2
            style={{ x: headX, opacity: headOpacity }}
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-[13vw] font-medium tracking-tighter text-neutral-950 md:text-[9vw]"
          >
            Meet Steel &amp; Noir.
          </motion.h2>

          <motion.div
            style={{ x: leftX }}
            className="absolute left-[4vw] top-1/2 -mt-[24vh] h-[48vh] w-[45vw] md:-mt-[28vh] md:h-[56vh] md:w-[44vw]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src={steel.img}
                alt={steel.alt}
                fill
                sizes="46vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-black/45 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                {steel.name} ${steel.price}
              </span>
            </div>
          </motion.div>

          <motion.div
            style={{ x: rightX }}
            className="absolute right-[4vw] top-1/2 -mt-[24vh] h-[48vh] w-[45vw] md:-mt-[28vh] md:h-[56vh] md:w-[44vw]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src={noir.img}
                alt={noir.alt}
                fill
                sizes="46vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-black/45 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                {noir.name} ${noir.price}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-center md:py-36">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            First generation
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-4xl text-2xl leading-snug text-neutral-500 md:text-4xl">
            AURA Steel and AURA Noir are smart heated mugs for people who take
            their coffee seriously. Precise temperature, a 12-hour battery, and
            a body built for desks, trails and long drives.
          </p>
        </Reveal>
      </section>
    </>
  );
}
