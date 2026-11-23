import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FavouriteButton from "@/components/favourite-button";
import {
  ArrowRight,
  CheckIcon,
  ChevronRight,
  ClockIcon,
  ShieldIcon,
  StarIcon,
} from "@/components/icons";
import PageShell from "@/components/page-shell";
import ServiceCard from "@/components/service-card";
import ServiceTabs from "@/components/service-tabs";
import { services } from "@/lib/data";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((item) => item.id === id);

  if (!service) {
    return { title: "Service Not Found — SalonBook" };
  }

  return {
    title: `${service.title} — SalonBook`,
    description: service.description,
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const service = services.find((item) => item.id === id);

  if (!service) {
    notFound();
  }

  const related = [
    ...services.filter(
      (item) => item.category === service.category && item.id !== service.id,
    ),
    ...services.filter(
      (item) => item.category !== service.category && item.id !== service.id,
    ),
  ].slice(0, 3);

  const ratingLabel =
    service.reviews >= 1000
      ? `${(service.reviews / 1000).toFixed(1)}k`
      : `${service.reviews}`;

  return (
    <PageShell>
      <div className="border-b border-white/[0.06] bg-[#0a0512]">
        <div className="container-page py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[11px] text-white/45"
          >
            <Link href="/" className="transition hover:text-gold">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/services" className="transition hover:text-gold">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/75">{service.title}</span>
          </nav>
        </div>
      </div>

      <section className="bg-[#08040f] py-10 md:py-14">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] lg:aspect-[5/4]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08040f]/55 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-gold backdrop-blur">
                  {service.category}
                </span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-gold">
                <span className="font-script text-2xl text-gold-soft">
                  Premium Care
                </span>
              </div>

              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-[40px]">
                {service.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-white/50">
                <span className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-3.5 w-3.5" />
                  ))}
                </span>
                <span className="font-semibold text-white">{service.rating}</span>
                <span>({ratingLabel} reviews)</span>
              </div>

              <div className="mt-6 flex flex-wrap items-end gap-6">
                <p className="font-display text-4xl font-bold text-gold">
                  ৳{service.price.toLocaleString("en-US")}
                </p>
                <p className="flex items-center gap-1.5 pb-1.5 text-[12px] text-white/60">
                  <ClockIcon className="h-4 w-4 text-gold" />
                  {service.duration}
                </p>
              </div>

              <p className="mt-5 text-[13px] leading-7 text-white/60">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[12px] text-white/70"
                  >
                    <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <Link
                  href={`/booking?service=${service.id}`}
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 text-[13px] font-semibold text-[#241705] shadow-[0_12px_35px_-14px_rgba(242,193,78,0.9)] transition hover:bg-gold-soft"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <FavouriteButton />
              </div>

              <p className="mt-4 flex items-center gap-2 text-[11px] text-white/40">
                <ShieldIcon className="h-3.5 w-3.5 text-gold/70" />
                Free cancellation up to 24 hours before your appointment.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Expert Stylists",
                text: "Trained professionals with years of salon experience.",
              },
              {
                title: "Premium Products",
                text: "Salon-grade products chosen for your hair and skin.",
              },
              {
                title: "Flexible Booking",
                text: "Pick a time that fits your day and reschedule anytime.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.07] bg-panel p-4"
              >
                <h2 className="text-[12px] font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-[11px] leading-5 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ServiceTabs service={service} />
          </div>

          <div className="mt-14">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-gold">
                  You may also like
                </p>
                <h2 className="mt-1.5 text-xl font-semibold text-white sm:text-2xl">
                  Related Services
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden items-center gap-1.5 text-[11px] font-medium text-gold transition hover:text-gold-soft sm:flex"
              >
                View All
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ServiceCard key={item.id} service={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
