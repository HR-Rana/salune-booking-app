"use client";

import { useState } from "react";
import type { Service } from "@/lib/data";

const tabs = ["Description", "What's Included", "Reviews"] as const;

const reviews = [
  {
    name: "Raihan Hasan",
    date: "2 days ago",
    text: "The stylist really understood what I wanted. Clean salon, warm staff and a great finish.",
  },
  {
    name: "Nusrat Jahan",
    date: "1 week ago",
    text: "Loved the attention to detail. Booking online took less than a minute and everything ran on time.",
  },
  {
    name: "Md. Imran",
    date: "2 weeks ago",
    text: "Premium products and a very relaxing experience. I will definitely come back.",
  },
];

export default function ServiceTabs({ service }: { service: Service }) {
  const [active, setActive] = useState<(typeof tabs)[number]>("Description");

  return (
    <div className="rounded-2xl border border-white/[0.07] bg-panel">
      <div className="flex gap-1 overflow-x-auto border-b border-white/[0.07] p-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`shrink-0 rounded-lg px-4 py-2 text-[12px] font-medium transition ${
              active === tab
                ? "bg-gold/12 text-gold"
                : "text-white/55 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-5 md:p-6">
        {active === "Description" && (
          <div>
            <p className="text-[13px] leading-7 text-white/60">
              {service.description}
            </p>
            <p className="mt-3 text-[13px] leading-7 text-white/60">
              Our {service.title.toLowerCase()} service is delivered by trained
              professionals using premium salon products. Every session starts
              with a short consultation so the result matches your style,
              routine and expectations.
            </p>
          </div>
        )}

        {active === "What's Included" && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {[...service.includes, "Aftercare Advice", "Complimentary Refreshment"]
              .slice(0, 6)
              .map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-black/20 px-3.5 py-3 text-[12px] text-white/65"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[9px] font-bold text-gold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
          </ul>
        )}

        {active === "Reviews" && (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-white/[0.06] bg-black/20 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-semibold text-white">
                    {review.name}
                  </p>
                  <span className="text-[10px] text-white/35">
                    {review.date}
                  </span>
                </div>
                <div className="mt-1.5 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-[10px]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-[12px] leading-6 text-white/55">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
