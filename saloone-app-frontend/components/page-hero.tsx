import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight, SparkleIcon } from "./icons";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  parent?: { label: string; href: string };
  children?: ReactNode;
};

export default function PageHero({
  title,
  subtitle,
  eyebrow = "SalonBook",
  parent,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#0a0512] py-10 md:py-14">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-purple-700/25 blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-gold/[0.07] blur-[100px]" />

      <div className="container-page relative">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[11px] text-white/45"
        >
          <Link href="/" className="transition hover:text-gold">
            Home
          </Link>
          {parent && (
            <>
              <ChevronRight className="h-3 w-3" />
              <Link href={parent.href} className="transition hover:text-gold">
                {parent.label}
              </Link>
            </>
          )}
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/75">{title}</span>
        </nav>

        <span className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.26em] text-gold">
          <SparkleIcon className="h-3 w-3" />
          {eyebrow}
        </span>

        <h1 className="mt-2.5 text-[30px] font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2.5 max-w-2xl text-[13px] leading-6 text-white/55 sm:text-sm">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
