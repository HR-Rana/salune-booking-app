"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight, StarIcon } from "./icons";
import SectionHeading from "./section-heading";

export default function Testimonials() {
  const [start, setStart] = useState(0);

  const visible = Array.from(
    { length: 3 },
    (_, index) => testimonials[(start + index) % testimonials.length],
  );

  const move = (direction: number) => {
    setStart((current) => {
      const next = current + direction;
      return (next + testimonials.length) % testimonials.length;
    });
  };

  return (
    <section id="about" className="bg-[#08040f] py-14 md:py-16">
      <div className="container-page">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real stories. Real satisfaction."
        />

        <div className="relative">
          <div className="grid gap-4 md:grid-cols-3">
            {visible.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="flex gap-4 rounded-xl border border-white/[0.07] bg-panel p-5"
              >
                <span className="relative mt-0.5 block h-14 w-14 shrink-0 overflow-hidden rounded-full border border-gold/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <div className="mt-1 flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <StarIcon key={star} className="h-3 w-3" />
                    ))}
                  </div>
                  <p className="mt-2 text-[12px] leading-5 text-white/55">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#08040f] text-white/70 transition hover:border-gold hover:text-gold lg:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#08040f] text-white/70 transition hover:border-gold hover:text-gold lg:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setStart(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === start}
              className={`h-1.5 rounded-full transition-all ${
                index === start ? "w-5 bg-gold" : "w-1.5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
