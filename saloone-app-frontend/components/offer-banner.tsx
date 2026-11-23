import Image from "next/image";
import { offerImage } from "@/lib/data";
import { ArrowRight, CrownIcon } from "./icons";

export default function OfferBanner() {
  return (
    <section className="bg-[#0a0512] pb-16">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-2xl border border-gold/20 bg-[#1b0b30]">
          <Image
            src={offerImage}
            alt="Woman enjoying a relaxing premium salon treatment"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover object-[64%_22%] opacity-60 [mask-image:linear-gradient(to_right,transparent_5%,black_60%)] md:opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b0b30] via-[#1b0b30]/80 to-[#1b0b30]/20" />
          <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-purple-600/30 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 p-7 sm:p-10 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                <CrownIcon className="h-3 w-3" />
                Special Offer
              </span>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-[32px]">
                Pamper Yourself
                <br />
                With Premium Care
              </h2>
              <p className="mt-3 text-[13px] text-white/65">
                Get up to 50% OFF on selected salon services.
              </p>

              <a
                href="/signup"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-[#241705] transition hover:bg-gold-soft"
              >
                Book Now
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="shrink-0 text-left md:pr-6 md:text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/70">
                Up To
              </p>
              <p className="font-display text-6xl font-bold leading-none text-gold sm:text-7xl">
                50%
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[0.3em] text-gold">
                OFF
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
