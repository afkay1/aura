"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "@/components/Reveal";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Reserve() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <section id="reserve" className="bg-white px-5 pb-24 md:px-10 md:pb-36">
      <Reveal className="mx-auto max-w-[1100px]">
        <div className="rounded-[32px] bg-neutral-950 px-6 py-16 text-center text-white md:px-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Reserve yours
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-medium tracking-tight md:text-6xl">
            Be first to own AURA.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-neutral-400 md:text-lg">
            Join the first-generation list and we will email you when AURA Steel
            and AURA Noir are ready to ship.
          </p>

          {done ? (
            <p role="status" className="mt-10 text-lg font-medium text-white">
              Thank you. You are on the list.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="reserve-email" className="sr-only">
                Email address
              </label>
              <input
                id="reserve-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoComplete="email"
                className="w-full rounded-full bg-white/10 px-6 py-4 text-base text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-8 py-4 text-base font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
              >
                Reserve
              </button>
            </form>
          )}
          {error && (
            <p role="alert" className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
