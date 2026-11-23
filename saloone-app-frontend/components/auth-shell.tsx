import Link from "next/link";
import type { ReactNode } from "react";
import { LogoMark } from "./icons";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
};

export default function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: AuthShellProps) {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-5 py-16">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-purple-700/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-panel/90 p-7 shadow-2xl backdrop-blur sm:p-9">
        <Link href="/" className="flex items-center justify-center gap-2.5">
          <LogoMark className="h-9 w-9 text-gold" />
          <span className="font-display text-2xl font-semibold tracking-tight text-gold-soft">
            SalonBook
          </span>
        </Link>

        <h1 className="mt-7 text-center text-2xl font-semibold text-white">
          {title}
        </h1>
        <p className="mt-1.5 text-center text-[13px] text-white/50">{subtitle}</p>

        <div className="mt-7">{children}</div>

        <div className="mt-6 border-t border-white/[0.07] pt-5 text-center text-[12px] text-white/50">
          {footer}
        </div>
      </div>
    </main>
  );
}
