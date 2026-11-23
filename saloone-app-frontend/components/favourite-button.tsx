"use client";

import { useState } from "react";
import { HeartIcon } from "./icons";

export default function FavouriteButton() {
  const [saved, setSaved] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setSaved((value) => !value)}
      aria-label={saved ? "Remove from favourites" : "Save to favourites"}
      aria-pressed={saved}
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition ${
        saved
          ? "border-gold bg-gold text-[#140a02]"
          : "border-white/15 text-white/70 hover:border-gold hover:text-gold"
      }`}
    >
      <HeartIcon className={`h-5 w-5 ${saved ? "fill-current" : ""}`} />
    </button>
  );
}
