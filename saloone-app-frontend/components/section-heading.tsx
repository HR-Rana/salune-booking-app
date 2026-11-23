import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export default function SectionHeading({
  title,
  subtitle,
  action,
}: SectionHeadingProps) {
  return (
    <div className="relative mb-9 text-center">
      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70 sm:w-20" />
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-[28px]">
          {title}
        </h2>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70 sm:w-20" />
      </div>
      {subtitle && (
        <p className="mt-2 text-xs text-white/50 sm:text-[13px]">{subtitle}</p>
      )}
      {action && (
        <div className="mt-4 flex justify-center md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/2">
          {action}
        </div>
      )}
    </div>
  );
}
