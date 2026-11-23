import Image from "next/image";
import { services } from "@/lib/data";
import { ArrowRight, ClockIcon } from "./icons";
import SectionHeading from "./section-heading";

export default function FeaturedServices() {
  return (
    <section id="services" className="bg-[#0a0512] py-14 md:py-16">
      <div className="container-page">
        <SectionHeading
          title="Featured Salon Services"
          subtitle="Explore our most popular services"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-panel transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_-22px_rgba(242,193,78,0.45)]"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1280px) 200px, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/10 to-transparent" />
              </div>

              <div className="p-4">
                <h3 className="truncate text-sm font-semibold text-white">
                  {service.title}
                </h3>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-white/55">
                  <span className="text-sm font-semibold text-gold">
                    ৳{service.price.toLocaleString("en-US")}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-3.5 w-3.5" />
                    {service.duration}
                  </span>
                </div>

                <a
                  href="#services"
                  className="mt-4 flex items-center justify-center gap-1.5 rounded-full border border-gold/50 py-2 text-[11px] font-medium text-gold transition group-hover:bg-gold group-hover:text-[#140a02]"
                >
                  View Details
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
