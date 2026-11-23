import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/page-hero";
import PageShell from "@/components/page-shell";
import ServicesBrowser from "@/components/services-browser";

export const metadata: Metadata = {
  title: "Browse Salon Services — SalonBook",
  description:
    "Explore haircuts, coloring, facials, makeup, massage and grooming services. Filter by category and book instantly.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        title="Browse Our Salon Services"
        subtitle="Find and book the perfect service for your beauty and grooming needs."
      />

      <Suspense
        fallback={
          <div className="container-page py-14">
            <div className="h-11 w-full animate-pulse rounded-full bg-panel" />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-80 animate-pulse rounded-2xl bg-panel"
                />
              ))}
            </div>
          </div>
        }
      >
        <ServicesBrowser />
      </Suspense>
    </PageShell>
  );
}
