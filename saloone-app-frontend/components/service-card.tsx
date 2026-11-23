import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data";
import { ArrowRight, ClockIcon } from "./icons";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-panel transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_-22px_rgba(242,193,78,0.45)]">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-gold/30 bg-black/50 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-gold backdrop-blur">
          {service.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
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

        <Link
          href={`/services/${service.id}`}
          className="mt-4 flex items-center justify-center gap-1.5 rounded-full border border-gold/50 py-2 text-[11px] font-medium text-gold transition group-hover:bg-gold group-hover:text-[#140a02]"
        >
          View Details
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}
