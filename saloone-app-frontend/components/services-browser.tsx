"use client";

import { useMemo, useState, type ComponentType } from "react";
import { useSearchParams } from "next/navigation";
import {
  categories,
  services,
  type CategoryIconName,
} from "@/lib/data";
import {
  BrushIcon,
  ChevronLeft,
  ChevronRight,
  ClockIcon,
  FaceIcon,
  LotusIcon,
  NailIcon,
  PaletteIcon,
  PhoneIcon,
  ScissorsIcon,
  SearchIcon,
  SpaIcon,
} from "./icons";
import ServiceCard from "./service-card";

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

const PAGE_SIZE = 6;

export default function ServicesBrowser() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All Categories";
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [category, setCategory] = useState(
    categories.some((item) => item.name === initialCategory)
      ? initialCategory
      : "All Categories",
  );
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const list = services.filter((service) => {
      const matchesQuery =
        !query.trim() ||
        `${service.title} ${service.category}`
          .toLowerCase()
          .includes(query.trim().toLowerCase());
      const matchesCategory =
        category === "All Categories" || service.category === category;
      return matchesQuery && matchesCategory;
    });

    return [...list].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return b.rating - a.rating;
    });
  }, [query, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  const updateQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const updateCategory = (value: string) => {
    setCategory(value);
    setPage(1);
  };

  const countFor = (name: string) =>
    name === "All Categories"
      ? services.length
      : services.filter((service) => service.category === name).length;

  return (
    <section className="bg-[#08040f] py-10 md:py-14">
      <div className="container-page">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-panel p-4 md:flex-row md:items-center">
          <div className="flex h-11 flex-1 items-center gap-2.5 rounded-full border border-white/10 bg-black/30 px-4 transition focus-within:border-gold/60">
            <SearchIcon className="h-4 w-4 shrink-0 text-white/45" />
            <input
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search services..."
              aria-label="Search services"
              className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/40"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <select
                value={category}
                onChange={(event) => updateCategory(event.target.value)}
                aria-label="Filter by category"
                className="h-11 w-full appearance-none rounded-full border border-white/10 bg-black/30 pl-4 pr-9 text-xs text-white/80 outline-none transition focus:border-gold/60 sm:w-[190px]"
              >
                <option value="All Categories">All Categories</option>
                {categories.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <ChevronRight className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-white/40" />
            </div>

            <div className="relative">
              <select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value);
                  setPage(1);
                }}
                aria-label="Sort services"
                className="h-11 w-full appearance-none rounded-full border border-white/10 bg-black/30 pl-4 pr-9 text-xs text-white/80 outline-none transition focus:border-gold/60 sm:w-[175px]"
              >
                <option value="popular">Sort by: Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronRight className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-white/40" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[224px_1fr]">
          <aside className="hidden lg:block">
            <div className="rounded-2xl border border-white/[0.07] bg-panel p-4">
              <h2 className="px-1 text-[13px] font-semibold text-white">
                Categories
              </h2>
              <ul className="mt-3 space-y-1">
                {["All Categories", ...categories.map((item) => item.name)].map(
                  (name) => {
                    const categoryItem = categories.find(
                      (item) => item.name === name,
                    );
                    const Icon = categoryItem
                      ? iconMap[categoryItem.icon]
                      : null;
                    const active = category === name;

                    return (
                      <li key={name}>
                        <button
                          type="button"
                          onClick={() => updateCategory(name)}
                          className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[12px] transition ${
                            active
                              ? "bg-gold/10 text-gold"
                              : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          {Icon ? (
                            <Icon className="h-4 w-4 shrink-0" />
                          ) : (
                            <span className="grid h-4 w-4 shrink-0 grid-cols-2 gap-0.5">
                              <span className="rounded-[1px] bg-current" />
                              <span className="rounded-[1px] bg-current" />
                              <span className="rounded-[1px] bg-current" />
                              <span className="rounded-[1px] bg-current" />
                            </span>
                          )}
                          <span className="flex-1 leading-4">{name}</span>
                          <span
                            className={`text-[10px] ${
                              active ? "text-gold/80" : "text-white/30"
                            }`}
                          >
                            {countFor(name)}
                          </span>
                        </button>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-gold/20 bg-gradient-to-b from-[#1b0b30] to-[#120a1e] p-5 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <p className="mt-3 text-[12px] font-semibold text-white">
                Need help choosing?
              </p>
              <p className="mt-1 text-[11px] leading-5 text-white/50">
                Talk to our salon experts and find the right service.
              </p>
              <a
                href="tel:+8801712345678"
                className="mt-3 block rounded-full border border-gold/40 py-2 text-[11px] font-medium text-gold transition hover:bg-gold hover:text-[#140a02]"
              >
                Call Us Now
              </a>
            </div>
          </aside>

          <div>
            <div className="mb-4 flex flex-wrap gap-2 lg:hidden">
              {["All Categories", ...categories.map((item) => item.name)].map(
                (name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => updateCategory(name)}
                    className={`rounded-full border px-3 py-1.5 text-[11px] transition ${
                      category === name
                        ? "border-gold bg-gold text-[#140a02]"
                        : "border-white/12 text-white/60"
                    }`}
                  >
                    {name}
                  </button>
                ),
              )}
            </div>

            <div className="mb-4 flex items-center justify-between text-[11px] text-white/45">
              <p>
                Showing{" "}
                <span className="text-white/80">{visible.length}</span> of{" "}
                <span className="text-white/80">{filtered.length}</span> services
              </p>
              <p className="hidden items-center gap-1.5 sm:flex">
                <ClockIcon className="h-3.5 w-3.5 text-gold" />
                Instant booking available
              </p>
            </div>

            {visible.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visible.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/[0.07] bg-panel px-6 py-16 text-center">
                <p className="text-sm font-semibold text-white">
                  No services found
                </p>
                <p className="mt-1.5 text-xs text-white/50">
                  Try a different keyword or category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    updateQuery("");
                    updateCategory("All Categories");
                  }}
                  className="mt-5 rounded-full border border-gold/50 px-5 py-2 text-[11px] font-medium text-gold transition hover:bg-gold hover:text-[#140a02]"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-9 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage(Math.max(1, safePage - 1))}
                  disabled={safePage === 1}
                  aria-label="Previous page"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 transition hover:border-gold hover:text-gold disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (number) => (
                    <button
                      key={number}
                      type="button"
                      onClick={() => setPage(number)}
                      aria-current={number === safePage ? "page" : undefined}
                      className={`h-9 w-9 rounded-full text-xs font-medium transition ${
                        number === safePage
                          ? "bg-gold text-[#140a02]"
                          : "border border-white/15 text-white/65 hover:border-gold hover:text-gold"
                      }`}
                    >
                      {number}
                    </button>
                  ),
                )}
                <button
                  type="button"
                  onClick={() => setPage(Math.min(totalPages, safePage + 1))}
                  disabled={safePage === totalPages}
                  aria-label="Next page"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 transition hover:border-gold hover:text-gold disabled:opacity-30"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
