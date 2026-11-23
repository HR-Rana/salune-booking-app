"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroAvatars, heroSlides } from "@/lib/data";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CrownIcon,
} from "./icons";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 8000);

    return () => clearTimeout(timer);
  }, [active]);

  const goTo = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="100vw"
            preload={index === 0}
            className={`object-cover object-[center_60%] brightness-105 transition-opacity duration-1000 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08040f] via-[#08040f]/80 to-[#08040f]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08040f] via-transparent to-[#08040f]/45" />
      </div>

      <div className="container-page relative z-10 flex min-h-[620px] flex-col justify-center py-16 md:min-h-[660px]">
        <div className="max-w-4xl md:pl-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/35 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-gold backdrop-blur">
            <CrownIcon className="h-3.5 w-3.5" />
            Premium Salon Services
          </span>

          <h1 className="mt-5 text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[42px] lg:text-[52px] xl:text-[54px]">
            <span className="block text-[0.72em]">Look Good. Feel Great.</span>
            <span className="mt-2 block text-gold">Book Your</span>
            <span className="block text-gold">Salon Appointment Today</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/70 md:text-[15px]">
            Discover premium salon services and book your favorite appointment
            with ease.
          </p>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#241705] shadow-[0_10px_35px_-10px_rgba(242,193,78,0.8)] transition hover:bg-gold-soft"
          >
            Explore Salon Services
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {heroAvatars.map((avatar, index) => (
                <span
                  key={avatar}
                  className="relative block h-9 w-9 overflow-hidden rounded-full border-2 border-[#08040f]"
                  style={{ zIndex: heroAvatars.length - index }}
                >
                  <Image
                    src={avatar}
                    alt="Happy SalonBook customer"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
            <p className="text-xs text-white/65">
              Trusted by <span className="font-semibold text-gold">10K+</span>{" "}
              Happy Customers
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 right-10 hidden rotate-[-4deg] text-right lg:block">
          <p className="font-script text-5xl leading-none text-gold">SalonBook</p>
          <p className="mt-1 font-script text-2xl leading-none text-white/85">
            Define Your Attitude
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(active - 1)}
        aria-label="Previous hero slide"
        className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white/80 backdrop-blur transition hover:border-gold hover:bg-gold hover:text-[#140a02] md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        aria-label="Next hero slide"
        className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white/80 backdrop-blur transition hover:border-gold hover:bg-gold hover:text-[#140a02] md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            className={`h-1.5 rounded-full transition-all ${
              index === active ? "w-5 bg-gold" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
