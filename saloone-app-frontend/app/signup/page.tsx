import Link from "next/link";
import AuthShell from "@/components/auth-shell";

const inputClass =
  "h-11 w-full rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-gold/60";

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create Your Account"
      subtitle="Book your favorite salon services in seconds."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/signin" className="font-medium text-gold hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-white/55">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-white/55">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-white/55">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
            className={inputClass}
          />
        </div>

        <button
          type="button"
          className="mt-2 h-11 w-full rounded-full bg-gold text-sm font-semibold text-[#241705] transition hover:bg-gold-soft"
        >
          Create Account
        </button>
      </form>
    </AuthShell>
  );
}
