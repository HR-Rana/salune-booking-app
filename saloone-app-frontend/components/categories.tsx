import type { ComponentType } from "react";
import { categories, type CategoryIconName } from "@/lib/data";
import {
  ArrowRight,
  BrushIcon,
  FaceIcon,
  LotusIcon,
  NailIcon,
  PaletteIcon,
  ScissorsIcon,
  SpaIcon,
} from "./icons";
import SectionHeading from "./section-heading";

const iconMap: Record<
  CategoryIconName,
  ComponentType<{ className?: string }>
> = {
  scissors: ScissorsIcon,
  palette: PaletteIcon,
  lotus: LotusIcon,
  face: FaceIcon,
  brush: BrushIcon,
  nail: NailIcon,
  spa: SpaIcon,
};

export default function Categories() {
  return (
    <section id="categories" className="bg-[#0a0512] pb-16">
      <div className="container-page">
        <SectionHeading
          title="Salon Service Categories"
          subtitle="Find services by category"
          action={
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-[11px] font-medium text-gold transition hover:bg-gold hover:text-[#140a02]"
            >
              View All Categories
              <ArrowRight className="h-3 w-3" />
            </a>
          }
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];

            return (
              <a
                key={category.name}
                href="#services"
                className="group flex flex-col items-center gap-3 rounded-xl border border-white/[0.07] bg-panel px-3 py-6 text-center transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-panel-light"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/[0.08] text-gold transition group-hover:bg-gold group-hover:text-[#140a02]">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-[12px] leading-4 text-white/75 transition group-hover:text-white">
                  {category.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
