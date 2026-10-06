"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollFrameProps = {
  id?: string;
  main: string;
  mainAlt: string;
  left: string[];
  right: string[];
  dark?: boolean;
  wordmark?: string;
};

/**
 * Sticky stage: the centre photo shrinks into a rounded card while the side
 * tiles slide in from the screen edges, all driven by scroll position.
 */
export default function ScrollFrame({
  id,
  main,
  mainAlt,
  left,
  right,
  dark = false,
  wordmark,
}: ScrollFrameProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["max(82vw, 330px)", "max(44vw, 300px)"]
  );
  const height = useTransform(scrollYProgress, [0, 0.6], ["80vh", "62vh"]);
  const leftX = useTransform(scrollYProgress, [0, 0.6], ["-26vw", "0vw"]);
  const rightX = useTransform(scrollYProgress, [0, 0.6], ["26vw", "0vw"]);
  const wordOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const wordY = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative h-[240vh] ${dark ? "bg-neutral-950" : "bg-white"}`}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Left tiles */}
        <div className="absolute inset-y-0 left-[2vw] hidden items-center md:flex">
          <motion.div style={{ x: leftX }} className="flex w-[22vw] flex-col gap-4">
            {left.map((src) => (
              <div key={src} className="relative h-[30vh] overflow-hidden rounded-3xl">
                <Image src={src} alt="" fill sizes="22vw" className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right tiles */}
        <div className="absolute inset-y-0 right-[2vw] hidden items-center md:flex">
          <motion.div style={{ x: rightX }} className="flex w-[22vw] flex-col gap-4">
            {right.map((src) => (
              <div key={src} className="relative h-[30vh] overflow-hidden rounded-3xl">
                <Image src={src} alt="" fill sizes="22vw" className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Centre photo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{ width, height }}
            className="relative overflow-hidden rounded-[28px]"
          >
            <Image
              src={main}
              alt={mainAlt}
              fill
              priority={!dark}
              sizes="85vw"
              className="object-cover"
            />
            {dark && <div className="absolute inset-0 bg-black/20" />}
          </motion.div>
        </div>

        {wordmark && (
          <motion.h1
            style={{ opacity: wordOpacity, y: wordY }}
            className="pointer-events-none absolute inset-x-0 bottom-[8vh] z-10 text-center text-[26vw] font-medium leading-[0.8] tracking-tighter text-white md:text-[22vw]"
          >
            {wordmark}
          </motion.h1>
        )}
      </div>
    </section>
  );
}
